"""Multi-stack fusion for brain MR (T2.3).

Clinical brain MR often has the same contrast acquired as several thick-slice stacks in different planes
(e.g. axial + sagittal T1, 3-5 mm slices). Each stack is sharp in-plane and blurred through-plane, along a
different axis, so combining them recovers near-isotropic detail.

1. :func:`plan_fusion` (over :class:`Candidate` stacks from DICOM or an imported study) picks the reference
   contrast (T1 preferred, else FLAIR, else T2), the best stack of it, the other stacks of the same contrast
   in other planes, and the best stack of each other contrast.
2. :func:`fuse_stacks` rigidly registers the extra stacks to the reference (same session: corrects head
   motion between sequences), averages them on a 1 mm isotropic grid, then refines with a few iterations
   of iterative back-projection (slice profile = box over the slice spacing).
3. :func:`resample_contrast` brings T2/FLAIR/ADC/DWI onto the same grid (rigid, sanity-limited) for stats.

All transforms follow ``geometry.space``: registration with fixed = reference returns reference -> moving,
which is what :func:`~medmereport.geometry.space.resample_into` takes.
"""

from __future__ import annotations

import json
import re
from collections.abc import Callable
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

import numpy as np
import SimpleITK as sitk
from PIL import Image
from scipy import ndimage as ndi

from medmereport.classify.rules import Classification, classify_series
from medmereport.core.logging import get_logger
from medmereport.dicom.series import Geometry, SeriesGroup
from medmereport.dicom.volume import load_volume
from medmereport.geometry.space import from_sitk, iso_grid, resample_into, to_sitk
from medmereport.segment.base import ProgressFn, Volume

log = get_logger(__name__)

REFERENCE_PREFERENCE = ("T1", "FLAIR", "T2")
OTHER_CONTRASTS = ("T1", "T2", "FLAIR", "ADC", "DWI", "T2STAR", "SWI", "PD")
_PARALLEL_COS = 0.9  # stacks whose normals are closer than ~25 degrees count as the same plane
_MIN_SLICES = 10
_MAX_ROT_DEG = 15.0
_MAX_SHIFT_MM = 25.0
_CONTRAST_WORDS = ("+C", " POST", "GAD", "GD ", "CONTRAST", "C+")

Loader = Callable[[SeriesGroup], tuple[np.ndarray, Geometry]]


def _noop(stage: str, pct: float, msg: str = "") -> None:
    return None


# ------------------------------------------------------------------------------------------------ planning


@dataclass
class Candidate:
    """One loadable stack plus what planning needs to know about it (from DICOM or an exported study)."""

    id: str
    modality: str
    sequence: str
    region: str
    role: str
    geometry: Geometry
    n: int
    load: Callable[[], np.ndarray]  # float32 [z, y, x] on ``geometry``
    b_value: float | None = None
    enhanced: bool = False


@dataclass
class FusionPlan:
    contrast: str  # sequence of the reference (T1/FLAIR/T2)
    reference: Candidate
    fuse: list[Candidate] = field(default_factory=list)  # same contrast, other planes
    others: dict[str, Candidate] = field(default_factory=dict)  # sequence -> best stack


def _normal(g: Candidate) -> np.ndarray:
    return np.array(g.geometry.direction, float).reshape(3, 3)[:, 2]


def _voxel_mm3(g: Candidate) -> float:
    return float(np.prod(g.geometry.spacing))


def is_enhanced_text(text: str, agent: str = "") -> bool:
    if agent:
        return True
    t = f" {text} ".upper()
    return any(w in t for w in _CONTRAST_WORDS)


def _usable(g: Candidate) -> bool:
    return (
        g.n >= _MIN_SLICES
        and g.modality == "MR"
        and g.region in ("brain", "unknown")
        and (g.role == "primary" or g.sequence == "ADC")
    )


def _rank(g: Candidate) -> tuple[float, int]:
    """Smaller voxels first, then more slices."""
    return (_voxel_mm3(g), -g.n)


def plan_fusion(cands: list[Candidate]) -> FusionPlan | None:
    """Choose the reference stack, stacks to fuse with it, and one stack per other contrast."""
    by_seq: dict[str, list[Candidate]] = {}
    for g in cands:
        if _usable(g):
            by_seq.setdefault(g.sequence, []).append(g)
    contrast = next((s for s in REFERENCE_PREFERENCE if by_seq.get(s)), None)
    if contrast is None:
        return None
    pool = by_seq[contrast]
    plain = [g for g in pool if not g.enhanced]
    pool = sorted(plain or pool, key=_rank)  # prefer pre-contrast; never mix pre and post
    ref = pool[0]
    fuse: list[Candidate] = []
    for g in pool[1:]:
        normals = [_normal(ref)] + [_normal(f) for f in fuse]
        if g.enhanced == ref.enhanced and all(abs(float(np.dot(_normal(g), n))) < _PARALLEL_COS for n in normals):
            fuse.append(g)
    others: dict[str, Candidate] = {}
    for seq in OTHER_CONTRASTS:
        if seq == contrast or not by_seq.get(seq):
            continue
        stacks = by_seq[seq]
        if seq == "DWI":  # highest b-value
            others[seq] = max(stacks, key=lambda g: (g.b_value or 0.0, -_voxel_mm3(g)))
        else:
            others[seq] = sorted(stacks, key=_rank)[0]
    return FusionPlan(contrast=contrast, reference=ref, fuse=fuse, others=others)


def candidates_from_groups(
    groups: list[SeriesGroup],
    classify: Callable[[SeriesGroup], Classification] = classify_series,
    loader: Loader = load_volume,
) -> list[Candidate]:
    """Candidates from DICOM series groups (volumes only)."""
    out: list[Candidate] = []
    for g in groups:
        if not g.is_volume or g.geometry is None or g.is_projection:
            continue
        c = classify(g)
        h = g.header
        out.append(
            Candidate(
                id=g.id,
                modality=c.modality,
                sequence=c.sequence,
                region=c.region,
                role=c.role,
                geometry=g.geometry,
                n=g.n,
                load=lambda g=g: loader(g)[0].astype(np.float32),  # type: ignore[misc]
                b_value=h.b_value,
                enhanced=is_enhanced_text(f"{h.series_description} {h.protocol_name}", h.contrast_agent),
            )
        )
    return out


_B_TEXT = re.compile(r"(?<![A-Z0-9])B ?(\d{3,4})(?![0-9])")


def _stack_from_export(meta: dict[str, Any]) -> tuple[Geometry, list[int]] | None:
    """Volume geometry of an exported slice stack and the display-image order along the normal."""
    slices = meta.get("slices") or []
    ps, ori = meta.get("pixelSpacing"), meta.get("orientation")
    rows, cols, w, h = (int(meta.get(k) or 0) for k in ("rows", "cols", "w", "h"))
    n = int(meta.get("n", 0))
    if n < 2 or len(slices) != n or not ps or not ori or min(rows, cols, w, h) <= 0:
        return None
    xdir, ydir = np.array(ori[:3], float), np.array(ori[3:6], float)
    normal = np.cross(xdir, ydir)
    if np.linalg.norm(normal) < 0.5:
        return None
    normal /= np.linalg.norm(normal)
    psy, psx = float(ps[0]), float(ps[1])
    sx, sy = psx * cols / w, psy * rows / h
    pos = np.array([s["pos"] for s in slices], float)
    order = sorted(range(n), key=lambda k: float(pos[k] @ normal))
    coords = np.array([pos[k] @ normal for k in order])
    sz = float(np.median(np.diff(coords)))
    if sz <= 1e-3:
        return None
    first = pos[order[0]] + (0.5 * cols / w - 0.5) * psx * xdir + (0.5 * rows / h - 0.5) * psy * ydir
    d = np.column_stack([xdir, ydir, normal]).reshape(-1)
    geom = Geometry(
        origin=(float(first[0]), float(first[1]), float(first[2])),
        spacing=(sx, sy, sz),
        direction=tuple(float(v) for v in d),  # type: ignore[arg-type]
    )
    return geom, order


def _load_export(series_dir: Path, meta: dict[str, Any], order: list[int]) -> np.ndarray:
    ext = meta.get("ext", "webp")
    frames = []
    for k in order:
        with Image.open(series_dir / f"{k:03d}.{ext}") as im:
            frames.append(np.asarray(im.convert("L"), np.float32))
    return np.stack(frames)


def candidates_from_study(study_dir: Path, study: Any) -> list[Candidate]:
    """Candidates from an imported study folder.

    Prefers the full-precision ``volumes/<id>.npz`` saved by the importer (real units such as ADC);
    falls back to the 8-bit display slices (``series/<id>/``), which are fine for registration and
    segmentation but carry no absolute units.
    """
    out: list[Candidate] = []
    for info in getattr(study, "series", []):
        sdir = Path(study_dir) / "series" / info.id
        if not (sdir / "meta.json").is_file():
            continue
        meta = json.loads((sdir / "meta.json").read_text(encoding="utf-8"))
        if meta.get("plane") not in ("axial", "sagittal", "coronal", "oblique"):
            continue
        npz = Path(study_dir) / "volumes" / f"{info.id}.npz"
        loader: Callable[[], np.ndarray]
        if npz.is_file():  # full-precision volume saved by the importer (real units)
            with np.load(npz) as z:
                geom = Geometry(
                    origin=tuple(float(v) for v in z["origin"]),  # type: ignore[arg-type]
                    spacing=tuple(float(v) for v in z["spacing"]),  # type: ignore[arg-type]
                    direction=tuple(float(v) for v in z["direction"]),  # type: ignore[arg-type]
                )
                n_slices = int(z["data"].shape[0])
            order = list(range(n_slices))
            loader = lambda npz=npz: np.load(npz)["data"].astype(np.float32)  # type: ignore[misc]  # noqa: E731
        else:
            built = _stack_from_export(meta)
            if built is None:
                continue
            geom, order = built
            loader = lambda sdir=sdir, meta=meta, order=order: _load_export(sdir, meta, order)  # type: ignore[misc]  # noqa: E731
        text = f"{meta.get('desc') or ''} {meta.get('title') or ''}"
        bm = _B_TEXT.search(text.upper())
        out.append(
            Candidate(
                id=info.id,
                modality=str(meta.get("modality", "")),
                sequence=str(meta.get("sequence", "unknown")),
                region=str(meta.get("region", "unknown")),
                role=str(meta.get("role", "primary")),
                geometry=geom,
                n=len(order),
                load=loader,
                b_value=float(bm.group(1)) if bm else None,
                enhanced=is_enhanced_text(text),
            )
        )
    return out


# ------------------------------------------------------------------------------------------------- fusion


def _norm_scale(a: np.ndarray) -> float:
    pos = a[a > 0]
    return float(np.percentile(pos, 99)) if pos.size else 1.0


def _rigid(fixed: sitk.Image, moving: sitk.Image, seed: int = 42) -> tuple[sitk.Transform, str | None]:
    """Rigid MI registration, fixed -> moving. Falls back to identity (with a warning) if implausible."""
    r = sitk.ImageRegistrationMethod()
    r.SetMetricAsMattesMutualInformation(32)
    r.SetMetricSamplingStrategy(r.RANDOM)
    r.SetMetricSamplingPercentage(0.05, seed)
    r.SetInterpolator(sitk.sitkLinear)
    r.SetOptimizerAsRegularStepGradientDescent(1.0, 1e-4, 200)
    r.SetOptimizerScalesFromPhysicalShift()
    r.SetShrinkFactorsPerLevel([2, 1])
    r.SetSmoothingSigmasPerLevel([1.0, 0.0])
    init = sitk.Euler3DTransform()
    init.SetCenter(fixed.TransformContinuousIndexToPhysicalPoint([(s - 1) / 2 for s in fixed.GetSize()]))
    r.SetInitialTransform(init, inPlace=False)
    try:
        tx = r.Execute(fixed, moving)
    except RuntimeError:
        return sitk.Euler3DTransform(), "rigid alignment failed; stacks combined without motion correction"
    e = tx
    while isinstance(e, sitk.CompositeTransform) and e.GetNumberOfTransforms() == 1:
        e = e.GetNthTransform(0)
    e = sitk.Euler3DTransform(e.Downcast())
    p = e.GetParameters()
    rot = float(np.degrees(np.max(np.abs(p[:3]))))
    shift = float(np.linalg.norm(p[3:]))
    if rot > _MAX_ROT_DEG or shift > _MAX_SHIFT_MM:
        return sitk.Euler3DTransform(), "rigid alignment looked implausible; used scanner coordinates instead"
    return e, None


@dataclass
class _Stack:
    y: sitk.Image  # measured stack (normalised), on its working grid
    hr: sitk.Image  # same grid, slices subdivided along the normal
    m: int  # sub-slices per slice
    ref_to_stack: sitk.Transform
    stack_to_ref: sitk.Transform


def _working_stack(vol: Volume, spacing: float, ref_to_stack: sitk.Transform) -> _Stack:
    """Stack on a grid with in-plane spacing >= ``spacing`` (anti-aliased) and its subdivided twin."""
    g = vol.geometry
    img = to_sitk(vol.data.astype(np.float32), g)
    sx, sy, sz = g.spacing
    tx, ty = max(sx, spacing), max(sy, spacing)
    if tx > sx * 1.05 or ty > sy * 1.05:
        sig = [max(tx / sx - 1, 0) * 0.5, max(ty / sy - 1, 0) * 0.5]
        a = ndi.gaussian_filter(vol.data.astype(np.float32), sigma=(0.0, sig[1], sig[0]))
        img = to_sitk(a, g)
        nx = int(np.floor((vol.data.shape[2] - 1) * sx / tx)) + 1
        ny = int(np.floor((vol.data.shape[1] - 1) * sy / ty)) + 1
        grid = sitk.Image([nx, ny, vol.data.shape[0]], sitk.sitkFloat32)
        grid.SetOrigin(g.origin)
        grid.SetSpacing((tx, ty, sz))
        grid.SetDirection(g.direction)
        img = resample_into(img, grid, None)
    m = max(1, int(round(sz / spacing)))
    d = np.array(g.direction, float).reshape(3, 3)
    normal = d[:, 2]
    o = np.array(img.GetOrigin()) - normal * sz * (m - 1) / (2 * m)
    nx, ny, nz = img.GetSize()
    hr = sitk.Image([nx, ny, nz * m], sitk.sitkFloat32)
    hr.SetOrigin(tuple(float(v) for v in o))
    hr.SetSpacing((img.GetSpacing()[0], img.GetSpacing()[1], sz / m))
    hr.SetDirection(g.direction)
    return _Stack(y=img, hr=hr, m=m, ref_to_stack=ref_to_stack, stack_to_ref=ref_to_stack.GetInverse())


def _forward(x: sitk.Image, s: _Stack) -> np.ndarray:
    """Simulate the stack from the iso estimate: sample finely along the normal, box-average each slice."""
    a = sitk.GetArrayFromImage(resample_into(x, s.hr, s.stack_to_ref))
    nz = a.shape[0] // s.m
    out: np.ndarray = a.reshape(nz, s.m, *a.shape[1:]).mean(1)
    return out


def _valid(s: _Stack, grid: sitk.Image) -> np.ndarray:
    ones = sitk.Image(s.y.GetSize(), sitk.sitkFloat32) + 1.0
    ones.CopyInformation(s.y)
    out: np.ndarray = sitk.GetArrayFromImage(resample_into(ones, grid, s.ref_to_stack, labels=True)) > 0
    return out


def fuse_stacks(
    reference: Volume,
    others: list[Volume],
    *,
    spacing: float = 1.0,
    iterations: int = 4,
    register: bool = True,
    progress: ProgressFn = _noop,
) -> tuple[Volume, list[str]]:
    """Fuse ``reference`` with ``others`` (same contrast, other planes) on an iso grid.

    Returns ``(volume, warnings)``. The output is scaled to the reference's intensity units. With no
    ``others`` this is a plain resample of the reference onto the iso grid.
    """
    warnings: list[str] = []
    grid = iso_grid(reference.geometry, reference.data.shape, spacing)
    scales = [_norm_scale(v.data) for v in (reference, *others)]
    vols = [
        Volume(v.data.astype(np.float32) / max(s, 1e-6), v.geometry, v.sequence, v.series_id)
        for v, s in zip((reference, *others), scales, strict=True)
    ]
    ref_img = to_sitk(vols[0].data, vols[0].geometry)
    stacks = [_working_stack(vols[0], spacing, sitk.Euler3DTransform())]
    for i, v in enumerate(vols[1:]):
        progress("fusion", 5 + 40 * i / max(len(others), 1), "aligning stacks")
        if register:
            tx, warn = _rigid(ref_img, to_sitk(v.data, v.geometry))
            if warn:
                warnings.append(warn)
        else:
            tx = sitk.Euler3DTransform()
        stacks.append(_working_stack(v, spacing, tx))
    progress("fusion", 45, "combining")
    valid = [_valid(s, grid) for s in stacks]
    count = np.sum(valid, axis=0).astype(np.float32)
    acc = np.zeros(count.shape, np.float32)
    for s, ok in zip(stacks, valid, strict=True):
        acc += sitk.GetArrayFromImage(resample_into(s.y, grid, s.ref_to_stack)) * ok
    x_arr = acc / np.maximum(count, 1)
    covered = count > 0
    if len(stacks) > 1:
        for it in range(iterations):
            progress("fusion", 50 + 45 * it / max(iterations, 1), "refining detail")
            x = sitk.GetImageFromArray(x_arr)
            x.CopyInformation(grid)
            upd = np.zeros_like(x_arr)
            for s, ok in zip(stacks, valid, strict=True):
                r = sitk.GetArrayFromImage(s.y) - _forward(x, s)
                r_img = sitk.GetImageFromArray(r.astype(np.float32))
                r_img.CopyInformation(s.y)
                upd += sitk.GetArrayFromImage(resample_into(r_img, grid, s.ref_to_stack)) * ok
            x_arr = np.clip(x_arr + upd / np.maximum(count, 1), 0, None)
    x_arr[~covered] = 0
    out = (x_arr * scales[0]).astype(np.float32)
    _, geom = from_sitk(grid)
    progress("fusion", 100, "")
    sid = reference.series_id if not others else "+".join([reference.series_id, *(o.series_id for o in others)])
    return Volume(data=out, geometry=geom, sequence=reference.sequence, series_id=sid), warnings


def resample_contrast(vol: Volume, target: Volume, *, register: bool = True) -> tuple[Volume, str | None]:
    """Bring another contrast of the same session onto ``target``'s grid (rigid, sanity-limited)."""
    fixed = to_sitk((target.data / max(_norm_scale(target.data), 1e-6)).astype(np.float32), target.geometry)
    moving = to_sitk(vol.data.astype(np.float32), vol.geometry)
    warn = None
    tx: sitk.Transform = sitk.Euler3DTransform()
    if register:
        mov_n = to_sitk((vol.data / max(_norm_scale(vol.data), 1e-6)).astype(np.float32), vol.geometry)
        tx, warn = _rigid(fixed, mov_n)
    a = sitk.GetArrayFromImage(resample_into(moving, fixed, tx)).astype(np.float32)
    return Volume(data=a, geometry=target.geometry, sequence=vol.sequence, series_id=vol.series_id), warn


# ------------------------------------------------------------------------------------------------ study


@dataclass
class FusedStudy:
    reference: Volume  # fused (or resampled) 1 mm reference contrast
    extras: list[Volume]  # other contrasts on the same grid
    plan: FusionPlan
    warnings: list[str] = field(default_factory=list)


def fuse_candidates(cands: list[Candidate], progress: ProgressFn = _noop, *, spacing: float = 1.0) -> FusedStudy | None:
    """Plan, load, fuse and co-register. None when no usable brain MR stack exists."""
    plan = plan_fusion(cands)
    if plan is None:
        return None

    def vol(g: Candidate, seq: str) -> Volume:
        return Volume(data=g.load(), geometry=g.geometry, sequence=seq, series_id=g.id)

    progress("fusion", 0, "loading")
    ref = vol(plan.reference, plan.contrast)
    fused, warnings = fuse_stacks(ref, [vol(g, plan.contrast) for g in plan.fuse], spacing=spacing, progress=progress)
    extras: list[Volume] = []
    for i, (seq, g) in enumerate(plan.others.items()):
        progress("coregister", 100 * i / max(len(plan.others), 1), f"aligning {seq}")
        v, warn = resample_contrast(vol(g, seq), fused)
        if warn:
            warnings.append(f"{seq}: {warn}")
        extras.append(v)
    progress("coregister", 100, "")
    if warnings:
        log.info("fusion finished with %d warning(s)", len(warnings))
    return FusedStudy(reference=fused, extras=extras, plan=plan, warnings=warnings)


def build_brain_volumes(
    groups: list[SeriesGroup], progress: ProgressFn = _noop, *, spacing: float = 1.0
) -> FusedStudy | None:
    """From DICOM series groups (full intensity range)."""
    return fuse_candidates(candidates_from_groups(groups), progress, spacing=spacing)


def build_volumes(study_dir: Path, study: Any, progress: ProgressFn = _noop) -> tuple[Volume, list[Volume]]:
    """Pipeline entry point (``pipelines/brain_mr/pipeline.py``): imported study -> (reference, extras)."""
    from medmereport.pipelines.base import PipelineError

    res = fuse_candidates(candidates_from_study(Path(study_dir), study), progress)
    if res is None:
        raise PipelineError("no_brain_series", "No brain MR series suitable for a 3D model was found.")
    return res.reference, res.extras
