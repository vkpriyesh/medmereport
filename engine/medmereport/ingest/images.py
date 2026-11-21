"""Image / PDF adapter: film photos, JPEG/PNG exports, scanned reports.

Each source file is normalised into clean PNGs in the session temp dir:
EXIF orientation applied, *all* metadata (EXIF, GPS, XMP, ICC, text chunks) dropped, greyscale kept as
greyscale, PDF pages rendered at ~150 dpi. HEIC/HEIF is not supported (a warning is reported).

Output layout (consumed by :func:`image_series_from_files`)::

    ctx.tmp/images-XXXX/000/source.json   {"title": ..., "source_kind": "photo"|"image"|"pdf"}
    ctx.tmp/images-XXXX/000/0000.png
"""

from __future__ import annotations

import json
import math
import tempfile
import warnings
from collections.abc import Callable, Iterable, Iterator
from dataclasses import dataclass
from pathlib import Path
from typing import Any

import numpy as np
from PIL import Image, ImageOps, ImageSequence

from medmereport.core.logging import get_logger
from medmereport.ingest.base import Detection, IngestError, OpenContext
from medmereport.ingest.dcmburner import EXECUTABLE_EXT, _progress, find_child

log = get_logger("medmereport.ingest.images")

IMAGE_EXT = frozenset({".jpg", ".jpeg", ".png", ".tif", ".tiff", ".bmp", ".webp"})
PDF_EXT = frozenset({".pdf"})
HEIC_EXT = frozenset({".heic", ".heif"})
PHOTO_EXT = frozenset({".jpg", ".jpeg"})
MAX_IMAGES = 200  # pages + images per import
MAX_PIXELS = 40_000_000
PDF_DPI = 150
GREY_TOLERANCE = 3  # max channel difference for an RGB image to count as greyscale
_DETECT_MAX_ENTRIES = 5000
_DETECT_MAX_SNIFF = 200
_MARKERS = ("dicomdir", "burn.enc", "dcmdata.zip")
_ARCHIVE_EXT = frozenset({".zip", ".7z", ".enc", ".dcm"})
SIDECAR = "source.json"


def _looks_dicom(p: Path) -> bool:
    try:
        with open(p, "rb") as f:
            head = f.read(132)
    except OSError:
        return False
    if head[128:132] == b"DICM":
        return True
    # implicit-VR little endian without preamble usually starts with group 0x0008
    return len(head) >= 8 and head[:2] == b"\x08\x00" and head[2:4] in (b"\x05\x00", b"\x08\x00", b"\x16\x00")


def _walk(root: Path, limit: int) -> Iterator[Path]:
    """Deterministic, bounded recursive walk (files only, no symlinks followed)."""
    stack = [root]
    seen = 0
    while stack:
        d = stack.pop()
        try:
            entries = sorted(d.iterdir(), key=lambda p: p.name.lower())
        except OSError:
            continue
        dirs = []
        for p in entries:
            seen += 1
            if seen > limit:
                return
            if p.is_symlink():
                continue
            if p.is_dir():
                dirs.append(p)
            elif p.is_file():
                yield p
        stack.extend(reversed(dirs))


def _kind(p: Path) -> str:
    ext = p.suffix.lower()
    if ext in PDF_EXT:
        return "pdf"
    return "photo" if ext in PHOTO_EXT else "image"


# ---------------------------------------------------------------------------- pixel normalisation


def _flatten_alpha(im: Image.Image) -> Image.Image:
    base = "L" if im.mode in ("LA", "La") else "RGB"
    rgba = im.convert("LA" if base == "L" else "RGBA")
    bg = Image.new(rgba.mode, rgba.size, (255, 255) if base == "L" else (255, 255, 255, 255))
    return Image.alpha_composite(bg.convert("RGBA"), rgba.convert("RGBA")).convert(base)


def normalise_mode(im: Image.Image) -> Image.Image:
    """Return an image in L, I;16 or RGB; RGB images that are really grey become L."""
    mode = im.mode
    if mode == "P":
        im = im.convert("RGBA" if "transparency" in im.info else "RGB")
        mode = im.mode
    if mode == "PA":
        im = im.convert("RGBA")
        mode = im.mode
    if mode in ("RGBA", "RGBa", "LA", "La"):
        im = _flatten_alpha(im)
        mode = im.mode
    if mode == "1":
        return im.convert("L")
    if mode.startswith("I;16"):
        return im if mode == "I;16" else Image.fromarray(np.asarray(im).astype(np.uint16))
    if mode in ("I", "F"):
        a = np.asarray(im)
        lo, hi = float(a.min()), float(a.max())
        if mode == "I" and lo >= 0 and hi <= 65535:
            return Image.fromarray(a.astype(np.uint16))
        scaled = (a - lo) / (hi - lo or 1.0) * 255.0
        return Image.fromarray(scaled.astype(np.uint8), "L")
    if mode not in ("L", "RGB"):
        im = im.convert("RGB")
    if im.mode == "RGB":
        a = np.asarray(im).astype(np.int16)
        if (
            int(np.abs(a[..., 0] - a[..., 1]).max()) <= GREY_TOLERANCE
            and int(np.abs(a[..., 1] - a[..., 2]).max()) <= GREY_TOLERANCE
        ):
            return im.convert("L")
    return im


def strip_metadata(im: Image.Image) -> Image.Image:
    """Rebuild the image from raw pixels so no EXIF/GPS/XMP/ICC/text survives."""
    return Image.frombytes(im.mode, im.size, im.tobytes())


def _save_png(im: Image.Image, path: Path) -> None:
    clean = strip_metadata(normalise_mode(im))
    clean.save(path, format="PNG")


# ---------------------------------------------------------------------------- adapter


@dataclass
class ImagesAdapter:
    name: str = "images"
    label: str = "Photos, image exports and PDFs"

    def detect(self, src: Path) -> Detection | None:
        if src.is_file():
            ext = src.suffix.lower()
            if ext in IMAGE_EXT:
                return Detection(adapter=self.name, confidence=0.6, notes=["image file"])
            if ext in PDF_EXT:
                return Detection(adapter=self.name, confidence=0.5, notes=["PDF document"])
            if ext in HEIC_EXT:
                return Detection(adapter=self.name, confidence=0.2, notes=["HEIC photos are not supported yet"])
            return None
        if not src.is_dir():
            return None
        if any(find_child(src, m) is not None for m in _MARKERS):
            return None  # a disc format the dedicated adapters handle
        n_img = n_pdf = n_heic = sniffed = 0
        for p in _walk(src, _DETECT_MAX_ENTRIES):
            ext = p.suffix.lower()
            if ext in IMAGE_EXT:
                n_img += 1
            elif ext in PDF_EXT:
                n_pdf += 1
            elif ext in HEIC_EXT:
                n_heic += 1
            elif ext in _ARCHIVE_EXT:
                return None  # leave archives / DICOM to the loose adapter
            elif ext in EXECUTABLE_EXT or p.name.lower() == "burn.enc":
                continue
            elif sniffed < _DETECT_MAX_SNIFF:
                sniffed += 1
                if _looks_dicom(p):
                    return None
        if not (n_img or n_pdf or n_heic):
            return None
        notes = [f"{n_img} images", f"{n_pdf} PDFs"]
        if n_heic:
            notes.append(f"{n_heic} HEIC photos are not supported yet")
        conf = 0.4 if (n_img or n_pdf) else 0.1
        return Detection(adapter=self.name, confidence=conf, notes=notes)

    def _sources(self, src: Path) -> list[Path]:
        if src.is_file():
            return [src]
        return [p for p in _walk(src, 200_000) if p.suffix.lower() in IMAGE_EXT | PDF_EXT | HEIC_EXT]

    def open(self, src: Path, ctx: OpenContext) -> Iterator[Path]:
        progress = _progress(ctx)
        sources = self._sources(src)
        out_root = Path(tempfile.mkdtemp(prefix="images-", dir=ctx.tmp))
        budget = [MAX_IMAGES]
        produced = 0
        state = {"pct": 0.0}

        def warn(msg: str) -> None:
            log.warning(msg)
            progress("scan", state["pct"], msg)

        for i, p in enumerate(sources):
            state["pct"] = 100.0 * i / max(len(sources), 1)
            progress("scan", state["pct"], "")
            ext = p.suffix.lower()
            if ext in HEIC_EXT:
                warn("HEIC photos are not supported yet; convert them to JPEG first.")
                continue
            if budget[0] <= 0:
                warn(f"Only the first {MAX_IMAGES} images/pages were imported.")
                break
            group = out_root / f"{i:03d}"
            group.mkdir()
            try:
                if ext in PDF_EXT:
                    pages = list(self._render_pdf(p, group, budget, warn))
                else:
                    pages = list(self._convert_image(p, group, budget, warn))
            except IngestError:
                raise
            except Exception:
                warn("A file could not be read as an image and was skipped.")
                pages = []
            if not pages:
                for f in group.iterdir():
                    f.unlink()
                group.rmdir()
                continue
            (group / SIDECAR).write_text(json.dumps({"title": p.stem, "source_kind": _kind(p)}), encoding="utf-8")
            produced += len(pages)
            yield from pages
        progress("scan", 100.0, "")
        if produced == 0:
            log.info("images adapter produced no images")

    def _convert_image(self, p: Path, group: Path, budget: list[int], warn: Callable[[str], None]) -> Iterator[Path]:
        with warnings.catch_warnings():
            warnings.simplefilter("error", Image.DecompressionBombWarning)
            try:
                im = Image.open(p)
            except (Image.DecompressionBombError, Image.DecompressionBombWarning):
                warn("An image larger than 40 megapixels was skipped.")
                return
            with im:
                w, h = im.size
                if w * h > MAX_PIXELS and im.format == "JPEG":
                    k = math.ceil(math.sqrt(w * h / MAX_PIXELS))
                    im.draft(im.mode, (w // k, h // k))  # decode at reduced size, cheaply
                n = 0
                for frame in ImageSequence.Iterator(im):
                    if budget[0] <= 0:
                        break
                    if frame.size[0] * frame.size[1] > MAX_PIXELS:
                        warn("An image larger than 40 megapixels was skipped.")
                        continue
                    upright = ImageOps.exif_transpose(frame.copy()) if n == 0 else frame.copy()
                    out = group / f"{n:04d}.png"
                    _save_png(upright, out)
                    budget[0] -= 1
                    n += 1
                    yield out

    def _render_pdf(self, p: Path, group: Path, budget: list[int], warn: Callable[[str], None]) -> Iterator[Path]:
        import pypdfium2 as pdfium

        try:
            pdf = pdfium.PdfDocument(str(p))
        except pdfium.PdfiumError:
            warn("A PDF could not be opened (it may be password-protected) and was skipped.")
            return
        try:
            for idx in range(len(pdf)):
                if budget[0] <= 0:
                    warn(f"Only the first {MAX_IMAGES} images/pages were imported.")
                    break
                page = pdf[idx]
                try:
                    pw, ph = page.get_size()  # points (1/72 in)
                    scale = PDF_DPI / 72.0
                    if pw * ph * scale * scale > MAX_PIXELS:
                        scale = math.sqrt(MAX_PIXELS / (pw * ph))
                    bitmap = page.render(scale=scale)
                    try:
                        im = bitmap.to_pil()
                        out = group / f"{idx:04d}.png"
                        _save_png(im, out)
                    finally:
                        bitmap.close()
                finally:
                    page.close()
                budget[0] -= 1
                yield out
        finally:
            pdf.close()


adapter = ImagesAdapter()


def image_series_from_files(paths: Iterable[Path]) -> list[dict[str, Any]]:
    """Group PNGs produced by :class:`ImagesAdapter` into one "photo" series per source file / PDF.

    Returns ``[{"title", "n", "source_kind", "role", "modality", "files"}]`` in first-seen order.
    ``source_kind`` is ``"photo"`` (JPEG), ``"image"`` (PNG/TIFF/BMP/WebP) or ``"pdf"``.
    """
    groups: dict[Path, list[Path]] = {}
    for p in paths:
        p = Path(p)
        if p.suffix.lower() != ".png":
            continue
        groups.setdefault(p.parent, []).append(p)
    out: list[dict[str, Any]] = []
    for parent, files in groups.items():
        meta: dict[str, Any] = {}
        try:
            meta = json.loads((parent / SIDECAR).read_text(encoding="utf-8"))
        except (OSError, ValueError):
            pass
        files = sorted(files)
        out.append(
            {
                "title": str(meta.get("title") or parent.name),
                "n": len(files),
                "source_kind": str(meta.get("source_kind") or "image"),
                "role": "photo",
                "modality": "XC",
                "files": files,
            }
        )
    return out
