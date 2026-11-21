"""Import job: source folder/archive/disc -> study artifacts (catalogue + slice stacks).

Runs inside a worker process (see server/jobs.py). Stages: detect/decrypt/extract/scan (adapters),
classify, export. Errors with a ``code`` (IngestError) reach the UI as stable codes.
"""

from __future__ import annotations

from pathlib import Path
from typing import Any

import numpy as np
from PIL import Image

from medmereport.classify import classify_series
from medmereport.core.logging import get_logger, register_sensitive
from medmereport.core.models import SeriesInfo, StudyInfo
from medmereport.core.studies import write_study
from medmereport.dicom import load_frames, load_volume
from medmereport.dicom.series import SeriesGroup
from medmereport.export.slices import export_stack
from medmereport.ingest.base import IngestError, OpenContext, zero
from medmereport.ingest.scan import scan_source

log = get_logger("medmereport.import")

# Display order per contract: axial superior->inferior, sagittal right->left, coronal anterior->posterior.
# LPS: +x = patient Left, +y = Posterior, +z = Superior.
_SORT_KEY = {"axial": lambda p: -p[2], "sagittal": lambda p: p[0], "coronal": lambda p: p[1]}


def save_float_volume(path: Path, vol: np.ndarray, geom: Any) -> None:
    """Keep the full-precision volume (real units, e.g. ADC) for the 3D pipeline. Private study artifact."""
    path.parent.mkdir(parents=True, exist_ok=True)
    np.savez_compressed(
        path,
        data=vol.astype(np.float32),
        origin=np.array(geom.origin, float),
        spacing=np.array(geom.spacing, float),
        direction=np.array(geom.direction, float),
    )


def _volume_frames(
    group: SeriesGroup, plane: str, keep: Path | None = None
) -> tuple[list[np.ndarray], list[list[float]], list[float]]:
    vol, geom = load_volume(group)
    if keep is not None:
        save_float_volume(keep, vol, geom)
    aff = geom.affine()
    positions = [aff @ np.array([0.0, 0.0, float(k), 1.0]) for k in range(vol.shape[0])]
    pos = [p[:3] for p in positions]
    order = list(range(vol.shape[0]))
    key = _SORT_KEY.get(plane)
    if key is not None:
        order.sort(key=lambda k: key(pos[k]))
    d = np.array(geom.direction, float).reshape(3, 3)
    iop = [*d[:, 0].tolist(), *d[:, 1].tolist()]
    return [vol[k] for k in order], [[round(float(v), 3) for v in pos[k]] for k in order], iop


def _export_dicom_series(group: SeriesGroup, idx: int, out: Path) -> SeriesInfo:
    cls = classify_series(group)
    h = group.header
    sid = f"s{idx:03d}"
    projection = group.is_projection or cls.role == "mip" or cls.modality in ("CR", "DX", "MG") or not group.is_volume
    slices: list[dict[str, Any]] = []
    iop = list(h.orientation) if h.orientation else [1.0, 0.0, 0.0, 0.0, 1.0, 0.0]
    if group.is_volume and group.geometry is not None:
        frames, pos, iop = _volume_frames(group, cls.plane, keep=out / "volumes" / f"{sid}.npz")
        slices = [{"pos": p} for p in pos]
    else:
        frames = [f if f.ndim == 2 else f.mean(axis=-1) for f in load_frames(group)]
        slices = [{"pos": list(p)} for p in group.positions] if len(group.positions) == len(frames) else []
    title = (h.series_description or h.protocol_name or f"Series {h.series_number or idx}").strip()
    meta = {
        "id": sid,
        "title": title,
        "modality": cls.modality,
        "sequence": cls.sequence,
        "plane": cls.plane,
        "region": cls.region,
        "role": cls.role,
        "rows": h.rows,
        "cols": h.cols,
        "pixelSpacing": list(h.pixel_spacing) if h.pixel_spacing else None,
        "thickness": h.slice_thickness,
        "TE": h.echo_time,
        "TR": h.repetition_time,
        "seriesNumber": h.series_number,
        "desc": h.series_description,
        "orientation": iop,
        "slices": slices,
    }
    full = export_stack(frames, meta, out / "series" / sid, projection=projection)
    return SeriesInfo(
        id=sid,
        modality=cls.modality,
        description=title,
        body_part=cls.region,
        plane=cls.plane if cls.plane in ("axial", "sagittal", "coronal", "oblique", "projection") else "unknown",
        sequence=cls.sequence,
        role=cls.role if cls.role in ("primary", "derived", "mip", "localizer", "photo", "document") else "primary",
        n_images=full["n"],
        rows=h.rows,
        cols=h.cols,
        pixel_spacing=h.pixel_spacing,
        slice_thickness=h.slice_thickness,
    )


def _export_photo_series(item: dict[str, Any], idx: int, out: Path) -> SeriesInfo:
    sid = f"p{idx:03d}"
    frames = [np.asarray(Image.open(p).convert("L"), dtype=np.float32) for p in item["files"]]
    meta = {
        "id": sid,
        "title": item["title"],
        "modality": "XC",
        "sequence": "PHOTO",
        "plane": "projection",
        "region": "unknown",
        "role": "photo",
        "rows": frames[0].shape[0],
        "cols": frames[0].shape[1],
        "pixelSpacing": None,
        "thickness": None,
        "orientation": [1, 0, 0, 0, 1, 0],
        "slices": [],
        "source": item.get("source_kind", "image"),
    }
    full = export_stack(frames, meta, out / "series" / sid, projection=True, window=(0.0, 255.0))
    return SeriesInfo(
        id=sid,
        modality="XC",
        description=item["title"],
        plane="projection",
        sequence="PHOTO",
        role="photo",
        n_images=full["n"],
        rows=meta["rows"],
        cols=meta["cols"],
    )


def _study_header(groups: list[SeriesGroup]) -> tuple[str, str, str]:
    """Study date/description and the patient's display name (shown only in the local UI)."""
    import pydicom

    for g in groups:
        try:
            ds = pydicom.dcmread(g.files[0], stop_before_pixels=True, force=True)
        except Exception:  # noqa: BLE001,S112
            continue
        name = str(ds.get("PatientName", "") or "")
        register_sensitive(name, ds.get("PatientID"))
        pretty = " ".join(w.capitalize() for w in name.replace("^", " ").split()[:3])
        return str(ds.get("StudyDate", "") or ""), str(ds.get("StudyDescription", "") or ""), pretty
    return "", "", ""


def import_job(ctx: Any) -> dict[str, Any]:
    p = ctx.params
    src, out, study_id = Path(p["src"]), Path(p["out"]), p["study_id"]
    pw = bytearray(p["password"].encode("utf-8")) if p.get("password") else None
    p["password"] = None

    def fwd(stage: str, pct: float, msg: str = "") -> None:
        ctx.progress(stage, min(60.0, pct * 0.6), msg)

    octx = OpenContext(tmp=ctx.workdir / "ingest", password=pw, progress=fwd)
    octx.tmp.mkdir(parents=True, exist_ok=True)
    ctx.progress("detect", 1, "")
    try:
        res = scan_source(src, octx)
    finally:
        zero(pw)

    # images (photos / PDFs / exported JPEGs): normalise through the images adapter if needed
    photo_items: list[dict[str, Any]] = []
    if res.images or res.documents:
        from medmereport.ingest.images import ImagesAdapter, image_series_from_files

        pngs: list[Path] = []
        (ctx.workdir / "images").mkdir(parents=True, exist_ok=True)
        for f in [*res.images, *res.documents]:
            if f.suffix.lower() == ".png" and (f.parent / "source.json").exists():
                pngs.append(f)
            else:
                try:
                    pngs.extend(ImagesAdapter().open(f, OpenContext(tmp=ctx.workdir / "images")))
                except IngestError as e:
                    res.warnings.append(str(e))
        photo_items = image_series_from_files(pngs)

    if not res.series and not photo_items:
        raise IngestError("no_images", "No scan images were found here.")

    ctx.progress("classify", 62, "")
    infos: list[SeriesInfo] = []
    total = len(res.series) + len(photo_items)
    for i, g in enumerate(res.series):
        ctx.progress("export", 62 + 36 * i / max(1, total), f"{i + 1}/{total}")
        try:
            infos.append(_export_dicom_series(g, i, out))
        except Exception as e:  # noqa: BLE001 - one bad series must not sink the study
            log.warning("series %d could not be exported: %s", i, type(e).__name__)
            res.warnings.append(f"One series could not be displayed ({type(e).__name__}).")
    for j, item in enumerate(photo_items):
        ctx.progress("export", 62 + 36 * (len(res.series) + j) / max(1, total), "")
        infos.append(_export_photo_series(item, j, out))

    date, desc, name = _study_header(res.series)
    study = StudyInfo(
        id=study_id,
        adapter=res.adapter,
        display_name=name,
        study_date=date,
        description=desc,
        modalities=sorted({s.modality for s in infos}),
        series=infos,
        warnings=res.warnings[:50],
    )
    write_study(out, study)
    ctx.progress("export", 100, "")
    return {"study_id": study_id, "series": len(infos)}
