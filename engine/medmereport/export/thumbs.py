"""Region thumbnails "on your scan": three views per region, the region tinted with a white outline.

Views come from the patient's own exported brain series (one per plane, best sequence first), so
``series`` + ``slice`` deep-link straight into the 2D viewer (the slice index is the exported,
display-order index). A plane without a native series is resliced from the reference volume and
recorded with ``series: null``.
"""

from __future__ import annotations

from collections.abc import Callable
from dataclasses import dataclass
from pathlib import Path
from typing import Any

import numpy as np
from PIL import Image
from scipy import ndimage as ndi

from medmereport.dicom.series import Geometry
from medmereport.export.labelmaps import PLANES, PlaneStack, label_stack, read_meta, sample, stack_from_meta
from medmereport.export.slices import robust_window, to_u8
from medmereport.geometry.space import index_to_lps

THUMB_SIZE = 300
TINT = np.array([94.0, 234.0, 212.0])
_SEQ_PREF = {
    "axial": ["FLAIR", "T2", "T1", "T2*", "SWI", "DWI", "ADC"],
    "sagittal": ["T1", "T2", "FLAIR"],
    "coronal": ["T2", "FLAIR", "T1", "T2*"],
}


@dataclass
class ViewSource:
    stack: PlaneStack
    labels: np.ndarray  # (n, h, w) uint8 display codes
    image: Callable[[int], np.ndarray]  # slice k -> uint8 greyscale (any size; labels are resized to it)


def choose_series(metas: dict[str, dict[str, Any]], labelled: set[str]) -> dict[str, str]:
    """Best labelled native series per plane (preferred sequence, then most slices)."""
    out: dict[str, str] = {}
    for plane in PLANES:
        cands = [sid for sid in labelled if metas[sid].get("plane") == plane]
        if not cands:
            continue
        pref = _SEQ_PREF[plane]

        def rank(sid: str, pref: list[str] = pref) -> tuple[int, int, str]:
            seq = str(metas[sid].get("sequence", "")).upper()
            return (pref.index(seq) if seq in pref else len(pref), -int(metas[sid].get("n", 0)), sid)

        out[plane] = min(cands, key=rank)
    return out


def native_source(study_dir: Path, sid: str, labels: np.ndarray) -> ViewSource | None:
    sdir = study_dir / "series" / sid
    meta = read_meta(sdir)
    stack = stack_from_meta(meta)
    if stack is None:
        return None
    ext = meta.get("ext", "webp")

    def image(k: int) -> np.ndarray:
        with Image.open(sdir / f"{k:03d}.{ext}") as im:
            return np.asarray(im.convert("L"))

    return ViewSource(stack, labels, image)


def virtual_source(view: str, data: np.ndarray, coded: np.ndarray, geom: Geometry, pad_mm: float = 8.0) -> ViewSource:
    """Reslice the reference volume in a standard display orientation (same conventions as the importer)."""
    idx = np.argwhere(coded > 0)
    if not len(idx):
        idx = np.array([[0, 0, 0], [s - 1 for s in coded.shape]])
    lo_i, hi_i = np.min(idx, axis=0), np.max(idx, axis=0)
    corners = np.array(
        [[a, b, c] for a in (lo_i[0], hi_i[0]) for b in (lo_i[1], hi_i[1]) for c in (lo_i[2], hi_i[2])],
        float,
    )
    pts = index_to_lps(geom, corners)
    lo, hi = pts.min(0) - pad_mm, pts.max(0) + pad_mm
    step = float(min(geom.spacing))
    ex, ey, ez = np.eye(3)
    if view == "axial":  # columns -> patient left, rows -> posterior, slices superior -> inferior
        xdir, ydir, along, start = ex, ey, -ez, np.array([lo[0], lo[1], hi[2]])
        ext_x, ext_y, ext_n = hi[0] - lo[0], hi[1] - lo[1], hi[2] - lo[2]
    elif view == "sagittal":  # columns -> posterior, rows -> inferior, slices right -> left
        xdir, ydir, along, start = ey, -ez, ex, np.array([lo[0], lo[1], hi[2]])
        ext_x, ext_y, ext_n = hi[1] - lo[1], hi[2] - lo[2], hi[0] - lo[0]
    else:  # coronal: columns -> left, rows -> inferior, slices anterior -> posterior
        xdir, ydir, along, start = ex, -ez, ey, np.array([lo[0], lo[1], hi[2]])
        ext_x, ext_y, ext_n = hi[0] - lo[0], hi[2] - lo[2], hi[1] - lo[1]
    n = int(ext_n // step) + 1
    origins = start[None, :] + np.arange(n)[:, None] * step * along[None, :]
    stack = PlaneStack(None, view, origins, xdir, ydir, step, step, int(ext_x // step) + 1, int(ext_y // step) + 1)
    labs = label_stack(stack, coded, geom)
    vals = data[coded > 0] if (coded > 0).any() else data.ravel()
    lo_w, hi_w = robust_window([vals.reshape(-1, 1)], 1.0, 99.5)

    def image(k: int) -> np.ndarray:
        return to_u8(sample(stack, data.astype(np.float32), geom, k, order=1), lo_w, hi_w)

    return ViewSource(stack, labs, image)


def render(
    grey: np.ndarray, lab: np.ndarray, code: int, mm_x: float, mm_y: float, size: int = THUMB_SIZE
) -> Image.Image:
    if lab.shape != grey.shape:
        mm_x, mm_y = mm_x * lab.shape[1] / grey.shape[1], mm_y * lab.shape[0] / grey.shape[0]
        lab = np.asarray(Image.fromarray(lab).resize((grey.shape[1], grey.shape[0]), Image.Resampling.NEAREST))
    rgb = np.repeat(grey[..., None].astype(np.float32), 3, axis=-1)
    m = lab == code
    rgb[m] = rgb[m] * 0.45 + TINT * 0.55
    edge = m & ~ndi.binary_erosion(m)
    rgb[ndi.binary_dilation(edge)] = 255.0
    brain = lab > 0
    ys, xs = np.nonzero(brain if brain.any() else m)
    pad = max(2, int(round(8.0 / max(mm_x, mm_y, 1e-3))))
    y0, y1 = max(int(ys.min()) - pad, 0), min(int(ys.max()) + pad + 1, grey.shape[0])
    x0, x1 = max(int(xs.min()) - pad, 0), min(int(xs.max()) + pad + 1, grey.shape[1])
    crop = Image.fromarray(np.clip(rgb[y0:y1, x0:x1], 0, 255).astype(np.uint8))
    ph, pw = (y1 - y0) * mm_y, (x1 - x0) * mm_x
    s = size / max(ph, pw)
    return crop.resize((max(1, round(pw * s)), max(1, round(ph * s))), Image.Resampling.LANCZOS)


def write_thumbs(
    out_dir: Path, rel_prefix: str, sources: dict[str, ViewSource], region_codes: dict[str, int]
) -> dict[str, list[dict[str, Any]]]:
    """Render up to three thumbnails per region; returns ``key -> [{view, img, series, slice}]``."""
    out_dir.mkdir(parents=True, exist_ok=True)
    areas = {
        v: np.stack([np.bincount(s.labels[k].ravel(), minlength=256) for k in range(s.stack.n)])
        for v, s in sources.items()
    }
    cache: dict[tuple[str, int], np.ndarray] = {}
    result: dict[str, list[dict[str, Any]]] = {}
    for key, code in sorted(region_codes.items()):
        thumbs: list[dict[str, Any]] = []
        for view in PLANES:
            src = sources.get(view)
            if src is None or not 0 < code < 256:
                continue
            col = areas[view][:, code]
            if int(np.max(col)) == 0:
                continue
            k = int(np.argmax(col))
            if (view, k) not in cache:
                cache[(view, k)] = src.image(k)
            img = render(cache[(view, k)], src.labels[k], code, src.stack.step_x, src.stack.step_y)
            fn = f"{key.replace('|', '_')}_{view}.jpg"
            img.save(out_dir / fn, quality=85)
            thumbs.append({"view": view, "img": f"{rel_prefix}/{fn}", "series": src.stack.series, "slice": k})
        result[key] = thumbs
    return result
