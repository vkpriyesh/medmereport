"""Extra (non-region) layers for the brain model (T2.13): the head surface ``H__skin`` from the structural
reference, and, when the study also has an MR TOF angiogram, its arteries (``V__cow`` / ``V__neck``)
registered into the brain model's space.

Transform convention (``geometry/space.py``): a rigid registration with fixed = brain reference and moving =
TOF returns **reference -> TOF**. Resampling the brain mask onto the TOF grid needs TOF -> reference (the
output grid is the TOF one), and so does moving TOF-space mesh vertices into the model; both use the inverse.
"""

from __future__ import annotations

from collections.abc import Callable
from pathlib import Path
from typing import Any

import numpy as np
import SimpleITK as sitk
from scipy import ndimage as ndi

from medmereport.geometry.space import index_to_lps, resample_into, to_sitk
from medmereport.knowledge.structures import ALL
from medmereport.pipelines.vessels.extract import Grid, affine_point_map, extract_tof, head_mask, to_iso
from medmereport.pipelines.vessels.layers import Layers, skin_layer, vessel_layers
from medmereport.segment.base import LabelMap, ProgressFn, Volume

# (fixed = reference, moving = TOF) -> (reference -> TOF transform, warning or None)
Register = Callable[[Volume, Volume], tuple[sitk.Transform, str | None]]

BRAIN_DILATE_MM = 6.0  # vessels in the basal cisterns sit just outside the brain labels


def _noop(stage: str, pct: float, msg: str = "") -> None:
    return None


def best_tof(study_dir: Path, study: Any) -> Volume | None:
    """The finest primary MR TOF series of the study (None when there is none)."""
    from medmereport.pipelines.brain_mr.fusion import candidates_from_study

    ids = {
        s.id
        for s in getattr(study, "series", [])
        if s.modality == "MR" and s.sequence == "TOF" and s.role == "primary" and s.n_images >= 20
    }
    if not ids:
        return None
    cands = sorted(
        (c for c in candidates_from_study(study_dir, study) if c.id in ids),
        key=lambda c: (float(np.prod(c.geometry.spacing)), -c.n),
    )
    if not cands:
        return None
    c = cands[0]
    return Volume(data=c.load(), geometry=c.geometry, sequence="TOF", series_id=c.id)


def register_tof(reference: Volume, tof: Volume) -> tuple[sitk.Transform, str | None]:
    """Rigid MI registration (fixed = reference, moving = TOF, ~1.5 mm) -> reference -> TOF transform."""
    from medmereport.pipelines.brain_mr.fusion import _norm_scale, _rigid

    small = to_iso(tof, 1.5, 4_000_000)
    fixed = to_sitk((reference.data / max(_norm_scale(reference.data), 1e-6)).astype(np.float32), reference.geometry)
    moving = to_sitk((small.data / max(_norm_scale(small.data), 1e-6)).astype(np.float32), small.geometry)
    return _rigid(fixed, moving)


def skull_base_z(lm: LabelMap) -> float | None:
    """LPS z (mm) of the lowest cerebellar/cerebral tissue: a stand-in for the foramen magnum / skull base."""
    codes = [c for c, r in lm.regions.items() if r.structure in ALL and ALL[r.structure][1] == "cerebellum"]
    if not codes:
        codes = [c for c, r in lm.regions.items() if r.structure in ALL and ALL[r.structure][1] != "brainstem"]
    if not codes:
        return None
    idx = np.argwhere(np.isin(lm.labels, codes))
    if not len(idx):
        return None
    z = index_to_lps(lm.geometry, idx[:: max(1, len(idx) // 200_000)].astype(float))[:, 2]
    return float(np.percentile(z, 1))


def _allowed_mask(lm: LabelMap, base_z: float | None) -> np.ndarray:
    """Brain labels dilated a few mm, plus everything below the skull base (the neck)."""
    sp = float(min(lm.geometry.spacing))
    brain = ndi.binary_dilation(lm.labels > 0, iterations=max(1, int(round(BRAIN_DILATE_MM / sp))))
    if base_z is not None:
        nz, ny, nx = lm.labels.shape
        a = np.asarray(lm.geometry.affine(), float)  # LPS z is affine in the (x, y, z) index
        zz = np.arange(nz, dtype=np.float32)[:, None, None]
        yy = np.arange(ny, dtype=np.float32)[None, :, None]
        xx = np.arange(nx, dtype=np.float32)[None, None, :]
        brain |= (a[2, 0] * xx + a[2, 1] * yy + a[2, 2] * zz + a[2, 3]) < base_z
    out: np.ndarray = brain
    return out


def tof_layers(
    reference: Volume,
    lm: LabelMap,
    tof: Volume,
    *,
    register: Register = register_tof,
    progress: ProgressFn = _noop,
) -> Layers:
    """TOF arteries in the brain model's (reference) LPS space, split at the skull base."""
    progress("layers", 5, "aligning TOF")
    ref_to_tof, warn = register(reference, tof)
    tof_to_ref = ref_to_tof.GetInverse()
    base = skull_base_z(lm)
    allowed = to_sitk(_allowed_mask(lm, base).astype(np.float32), lm.geometry)

    def region_mask(grid: Grid) -> np.ndarray:
        out_grid = to_sitk(np.zeros(grid.data.shape, np.float32), grid.geometry)
        # outside the structural field of view: no brain restriction (the head-mask erosion still applies)
        img = resample_into(allowed, out_grid, tof_to_ref, labels=True, default=1.0)
        m: np.ndarray = sitk.GetArrayFromImage(img) > 0.5
        return m

    def prog(pct: float, msg: str = "") -> None:
        progress("layers", 15 + 0.7 * pct, msg)

    res = extract_tof(tof, region_mask=region_mask, progress=prog)
    out = vessel_layers(res, point_map=affine_point_map(tof_to_ref), split_z=base)
    if warn:
        out.warnings.append(f"TOF angiogram: {warn}")
    return out


def head_layers(
    study_dir: Path,
    study: Any,
    reference: Volume,
    lm: LabelMap,
    progress: ProgressFn = _noop,
    *,
    register: Register = register_tof,
) -> Layers:
    """``H|skin`` from the reference volume, plus TOF vessels when the study has a TOF series."""
    progress("layers", 0, "head surface")
    out = skin_layer(head_mask(reference.data, float(min(reference.geometry.spacing))), reference.geometry)
    tof = best_tof(study_dir, study)
    if tof is not None:
        out.merge(tof_layers(reference, lm, tof, register=register, progress=progress))
    progress("layers", 100, "")
    return out
