"""Turn any supported source into grouped DICOM series plus loose images and documents."""

from __future__ import annotations

import math
from dataclasses import dataclass, field
from pathlib import Path

from medmereport.dicom.read import DicomReadError, encapsulated_pdf, object_kind, read_header
from medmereport.dicom.series import Instance, SeriesGroup, dedupe, group_series, instance_from_header
from medmereport.dicom.sniff import is_dicom
from medmereport.ingest import base
from medmereport.ingest.base import IngestAdapter, IngestError, OpenContext
from medmereport.ingest.notes import ScanContext, progress
from medmereport.ingest.registry import detect_best, get_adapter

_IMAGE_MAGICS: tuple[tuple[int, bytes, str], ...] = (
    (0, b"\xff\xd8\xff", "jpeg"),
    (0, b"\x89PNG\r\n\x1a\n", "png"),
    (0, b"II*\x00", "tiff"),
    (0, b"MM\x00*", "tiff"),
    (0, b"BM", "bmp"),
    (0, b"%PDF-", "pdf"),
)
_HEIF_BRANDS = (b"heic", b"heix", b"hevc", b"heif", b"mif1", b"msf1", b"avif")
_PROGRESS_EVERY = 200


@dataclass
class ScanResult:
    """Everything viewable found in a source. ``warnings`` are PHI-free and safe to show/log."""

    series: list[SeriesGroup] = field(default_factory=list)
    documents: list[Path] = field(default_factory=list)  # PDFs extracted from Encapsulated PDF DICOM objects
    images: list[Path] = field(default_factory=list)  # loose jpg/png/tiff/heic/webp/pdf files for the images layer
    warnings: list[str] = field(default_factory=list)
    adapter: str = ""


def image_kind(path: Path) -> str | None:
    """Sniff common photo/document formats by magic bytes: jpeg, png, tiff, bmp, webp, heif, pdf."""
    try:
        with path.open("rb") as fh:
            head = fh.read(16)
    except OSError:
        return None
    for offset, magic, kind in _IMAGE_MAGICS:
        if head[offset : offset + len(magic)] == magic:
            return kind
    if head[:4] == b"RIFF" and head[8:12] == b"WEBP":
        return "webp"
    if head[4:8] == b"ftyp" and head[8:12] in _HEIF_BRANDS:
        return "heif"
    return None


@dataclass
class _Tally:
    corrupt: int = 0
    non_image: int = 0
    unknown: int = 0
    files: int = 0


def _choose_adapter(src: Path, name: str | None) -> IngestAdapter:
    if name is not None:
        adapter = get_adapter(name)
        if adapter is None:
            raise IngestError("unsupported", "That import method is not available.", adapter=name)
        return adapter
    _, best = detect_best(src)
    if best is None:
        raise IngestError("unsupported", "medmereport doesn't recognise this disc or file yet.")
    return best


def _save_pdf(data: bytes, ctx: OpenContext, index: int) -> Path:
    out = ctx.tmp / "documents"
    out.mkdir(parents=True, exist_ok=True)
    p = out / f"doc{index:03d}.pdf"
    p.write_bytes(data)
    return p


def _handle_dicom(path: Path, ctx: OpenContext, res: ScanResult, insts: list[Instance], tally: _Tally) -> None:
    try:
        ds = read_header(path)
    except DicomReadError:
        tally.corrupt += 1
        return
    kind = object_kind(ds)
    if kind == "image":
        try:
            insts.append(instance_from_header(path, ds))
        except Exception:  # noqa: BLE001 - malformed geometry values etc.
            tally.corrupt += 1
    elif kind == "document" and (pdf := encapsulated_pdf(ds)) is not None:
        res.documents.append(_save_pdf(pdf, ctx, len(res.documents) + 1))
    else:
        tally.non_image += 1


def _summarise(res: ScanResult, tally: _Tally, duplicates: int) -> None:
    notes = [
        (
            tally.corrupt,
            "file could not be read (damaged or unsupported) and was skipped",
            "files could not be read (damaged or unsupported) and were skipped",
        ),
        (duplicates, "duplicate image was ignored", "duplicate images were ignored"),
        (
            tally.non_image,
            "non-image DICOM object (report or presentation state) was ignored",
            "non-image DICOM objects (reports, presentation states) were ignored",
        ),
        (tally.unknown, "file was not recognised as a scan or image", "files were not recognised as scans or images"),
    ]
    res.warnings.extend(f"{n} {one if n == 1 else many}." for n, one, many in notes if n)


def scan_source(src: Path, ctx: OpenContext, adapter: str | None = None) -> ScanResult:
    """Detect (or use ``adapter``), open the source, sniff every file and group DICOM series.

    Raises :class:`IngestError` (``unsupported``, ``password_required``, ``wrong_password``,
    ``too_large``, ``no_images``). Damaged files never raise; they are counted in ``warnings``.
    """
    sctx = ScanContext.wrap(ctx)
    chosen = _choose_adapter(src, adapter)
    res = ScanResult(adapter=chosen.name)
    insts: list[Instance] = []
    tally = _Tally()
    progress(sctx, "scan", 0, "Looking for scans")
    for path in chosen.open(src, sctx):
        tally.files += 1
        if tally.files > base.MAX_FILES:
            raise IngestError("too_large", "This source contains too many files.")
        if tally.files % _PROGRESS_EVERY == 0:
            progress(sctx, "scan", 90 * (1 - math.exp(-tally.files / 2000)), f"{tally.files} files examined")
        if is_dicom(path):
            _handle_dicom(path, sctx, res, insts, tally)
        elif image_kind(path) is not None:
            res.images.append(path)
        else:
            tally.unknown += 1
    progress(sctx, "group", 95, "Grouping series")
    unique, duplicates = dedupe(insts)
    res.series = group_series(unique)
    _summarise(res, tally, duplicates)
    res.warnings = sctx.warnings + res.warnings
    if not res.series and not res.images and not res.documents:
        raise IngestError("no_images", "No scans or images were found here.", adapter=chosen.name)
    progress(sctx, "group", 100, f"{len(res.series)} series found")
    return res
