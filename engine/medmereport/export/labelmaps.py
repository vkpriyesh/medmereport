"""Label maps resampled onto the exported slice stacks (docs/API_CONTRACT.md §3, §5).

The sampling grid of every exported image is rebuilt from the series ``meta.json`` the importer
wrote (slice ``pos`` in display order, ``orientation``, ``pixelSpacing``, ``rows/cols``, ``w/h``), so
label pixel ``(row, col)`` of ``L###.png`` sits exactly on pixel ``(row, col)`` of image ``###``.
"""

from __future__ import annotations

import json
from dataclasses import dataclass
from pathlib import Path
from typing import Any

import numpy as np
from PIL import Image

from medmereport.core.studies import write_json
from medmereport.dicom.series import Geometry
from medmereport.geometry.space import lps_to_index

PLANES = ("axial", "sagittal", "coronal")


@dataclass
class PlaneStack:
    """A stack of display images with its exact LPS sampling grid."""

    series: str | None  # exported series id, or None for a stack resliced from the reference volume
    view: str
    origins: np.ndarray  # (n, 3) LPS of pixel (row 0, col 0) centre per display slice
    xdir: np.ndarray  # LPS unit vector along image columns (left -> right on screen)
    ydir: np.ndarray  # LPS unit vector along image rows (top -> bottom on screen)
    step_x: float  # mm between display pixel centres along x
    step_y: float
    w: int
    h: int

    @property
    def n(self) -> int:
        return int(len(self.origins))


def read_meta(series_dir: Path) -> dict[str, Any]:
    meta: dict[str, Any] = json.loads((series_dir / "meta.json").read_text(encoding="utf-8"))
    return meta


def stack_from_meta(meta: dict[str, Any]) -> PlaneStack | None:
    """Sampling grid of an exported volume series, or None if the meta lacks geometry."""
    slices = meta.get("slices") or []
    ps, ori = meta.get("pixelSpacing"), meta.get("orientation")
    rows, cols, w, h = (int(meta.get(k) or 0) for k in ("rows", "cols", "w", "h"))
    if not slices or len(slices) != int(meta.get("n", 0)) or not ps or not ori or min(rows, cols, w, h) <= 0:
        return None
    xdir, ydir = np.array(ori[:3], float), np.array(ori[3:6], float)
    psy, psx = float(ps[0]), float(ps[1])
    sx, sy = psx * cols / w, psy * rows / h
    pos = np.array([s["pos"] for s in slices], float)
    # display pixel (u, v) centre = source pixel ((u + .5) * cols / w - .5, (v + .5) * rows / h - .5)
    origins = pos + (0.5 * cols / w - 0.5) * psx * xdir + (0.5 * rows / h - 0.5) * psy * ydir
    return PlaneStack(meta.get("id"), str(meta.get("plane", "")), origins, xdir, ydir, sx, sy, w, h)


def sample(stack: PlaneStack, data: np.ndarray, geom: Geometry, k: int, order: int = 0, cval: float = 0) -> np.ndarray:
    """Values of ``data`` (on ``geom``) at the display pixels of slice ``k``: (h, w)."""
    p0 = stack.origins[k]
    i0 = lps_to_index(geom, p0[None])[0]
    du = lps_to_index(geom, (p0 + stack.xdir * stack.step_x)[None])[0] - i0
    dv = lps_to_index(geom, (p0 + stack.ydir * stack.step_y)[None])[0] - i0
    u = np.arange(stack.w, dtype=np.float64)
    v = np.arange(stack.h, dtype=np.float64)
    idx = i0[None, None, :] + v[:, None, None] * dv[None, None, :] + u[None, :, None] * du[None, None, :]
    if order == 0:
        ii = np.rint(idx).astype(np.int64)
        shape = np.array(data.shape)
        ok = np.all((ii >= 0) & (ii < shape), axis=-1)
        out = np.full((stack.h, stack.w), cval, dtype=data.dtype)
        sel = ii[ok]
        out[ok] = data[sel[:, 0], sel[:, 1], sel[:, 2]]
        return out
    from scipy import ndimage as ndi

    coords = idx.reshape(-1, 3).T
    res: np.ndarray = ndi.map_coordinates(data, coords, order=order, mode="constant", cval=cval).reshape(
        stack.h, stack.w
    )
    return res


def label_stack(stack: PlaneStack, coded: np.ndarray, geom: Geometry) -> np.ndarray:
    """(n, h, w) uint8 display codes for every slice of ``stack``."""
    return np.stack([sample(stack, coded, geom, k, order=0) for k in range(stack.n)]).astype(np.uint8)


def coded_volume(labels: np.ndarray, code_of_label: dict[int, int]) -> np.ndarray:
    """Map LabelMap codes to 8-bit display codes (unknown -> 0)."""
    n = max(int(labels.max()) + 1, max(code_of_label, default=0) + 1)
    lut = np.zeros(n, np.uint8)
    for c, d in code_of_label.items():
        if 0 < c < n and 0 < d < 256:
            lut[c] = d
    out: np.ndarray = lut[np.clip(labels, 0, n - 1)]
    return out


def is_brain_volume_series(meta: dict[str, Any]) -> bool:
    return (
        meta.get("region") == "brain"
        and meta.get("plane") in PLANES
        and meta.get("role", "primary") == "primary"
        and int(meta.get("n", 0)) >= 2
    )


def write_label_maps(
    study_dir: Path, series_ids: list[str], coded: np.ndarray, geom: Geometry, label_table: dict[int, str]
) -> dict[str, np.ndarray]:
    """Write ``series/{id}/L###.png`` for each brain volume series overlapping the labels.

    Updates its ``meta.json`` (``labels: true``, ``labelTable``). Returns the label stacks by id.
    """
    out: dict[str, np.ndarray] = {}
    table = {str(c): k for c, k in sorted(label_table.items())}
    for sid in series_ids:
        sdir = study_dir / "series" / sid
        if not (sdir / "meta.json").is_file():
            continue
        meta = read_meta(sdir)
        if not is_brain_volume_series(meta):
            continue
        stack = stack_from_meta(meta)
        if stack is None:
            continue
        labs = label_stack(stack, coded, geom)
        if not labs.any():
            continue
        for k in range(stack.n):
            Image.fromarray(labs[k]).save(sdir / f"L{k:03d}.png", optimize=True)
        meta["labels"] = True
        meta["labelTable"] = table
        write_json(sdir / "meta.json", meta)
        out[sid] = labs
    return out
