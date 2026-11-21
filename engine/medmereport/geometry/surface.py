"""Patient brain surface carved into labelled regions, plus inner (deep) structure meshes.

Algorithm (proven in the prototype, docs/RESEARCH.md §4):

1. Tissue: the reference (T1-like) volume thresholded half-way between CSF and cortical grey matter
   (levels measured on the label map itself), restricted to the dilated label mask; deep CSF and
   deep grey structures are filled so only the outer (pial) surface remains.
2. Each tissue voxel joins a render group (left/right hemisphere, cerebellum, brainstem) by its
   nearest label; each group gets one closed iso-surface (2x upsampled, Taubin-smoothed, decimated).
3. Every surface vertex takes the nearest *surface-eligible* label of its group (non-inner
   structures), smoothed by neighbour majority; faces are split into one mesh per region, so the
   regions tile a seamless surface.
4. Inner structures (deep grey, ventricles, hippocampus, amygdala) are separate smoothed meshes.

Everything is computed in LPS millimetres; :mod:`geometry.glb` converts to viewer space.
"""

from __future__ import annotations

from collections.abc import Callable
from dataclasses import dataclass, field

import numpy as np
from scipy import ndimage as ndi
from scipy.spatial import cKDTree

from medmereport.dicom.series import Geometry
from medmereport.geometry.mesh import (
    Mesh,
    concat,
    crop_box,
    decimate,
    face_labels,
    iso_surface,
    keep_largest_piece,
    largest_component,
    majority_smooth,
    orient_outward,
    split_by_labels,
    taubin,
)
from medmereport.geometry.space import index_to_lps
from medmereport.knowledge.structures import ALL, group_of, is_inner, lobe_of
from medmereport.segment.base import LabelMap, Region, Volume

OUTER_GROUPS = ("hemi_L", "hemi_R", "cerebellum", "brainstem")
DEFAULT_GROUP_WEIGHTS = {"hemi_L": 0.36, "hemi_R": 0.36, "cerebellum": 0.125, "brainstem": 0.035}
_FILL_LOBES = ("subcortical", "ventricles")  # filled before surfacing (deep CSF / deep grey)

ProgressCb = Callable[[str, float, str], None]


@dataclass
class Budget:
    """Size targets for the whole model (docs/PLAN.md §9: GLB < 30 MB)."""

    max_triangles: int = 900_000
    max_glb_bytes: int = 30_000_000
    inner_per_structure: int = 7_000
    group_weights: dict[str, float] = field(default_factory=lambda: dict(DEFAULT_GROUP_WEIGHTS))
    upsample: int = 2
    smooth_iterations: int = 12
    label_smoothing_passes: int = 2


@dataclass
class TissueModel:
    """Intensity levels of the reference volume measured on the label map."""

    mode: str  # "intensity" (T1-like contrast usable) or "labels" (surface from the label mask only)
    csf: float
    gm: float
    threshold: float  # tissue if value > threshold (intensity mode)

    def tissue_mask(self, data: np.ndarray, labels: np.ndarray) -> np.ndarray:
        if self.mode == "labels":
            out: np.ndarray = labels > 0
            return out
        mask: np.ndarray = data > self.threshold
        return mask


@dataclass
class RegionInfo:
    key: str  # "L|hippocampus"
    structure: str
    hemi: str
    code: int  # LabelMap code
    group: str  # UI render group (knowledge.structures.group_of)
    inner: bool
    centroid_lps: tuple[float, float, float]
    voxels: int


@dataclass
class BrainModel:
    meshes: dict[str, Mesh]  # key -> LPS mesh
    regions: dict[str, RegionInfo]  # every vocabulary region present in the label map
    tissue: TissueModel
    warnings: list[str] = field(default_factory=list)

    @property
    def n_faces(self) -> int:
        return sum(m.n_faces for m in self.meshes.values())


def region_key(hemi: str, structure: str) -> str:
    return f"{hemi}|{structure}"


def node_name(key: str) -> str:
    hemi, structure = key.split("|", 1)
    return f"{hemi}__{structure}"


def known_regions(lm: LabelMap) -> dict[int, Region]:
    """Regions whose structure id is in the shared vocabulary (others are ignored)."""
    return {c: r for c, r in lm.regions.items() if r.structure in ALL and r.hemi in ("L", "R", "M")}


def _surface_group(r: Region) -> str | None:
    g = ALL[r.structure][1]
    if g in ("cerebellum", "brainstem"):
        return g
    if g in ("hemi", "deep", "ventricle"):
        return {"L": "hemi_L", "R": "hemi_R"}.get(r.hemi, "midline")
    return None


def _is_white_matter(structure: str) -> bool:
    return structure.endswith("white_matter")


def _lut(n: int, regions: dict[int, Region], fn: Callable[[Region], int | bool]) -> np.ndarray:
    out = np.zeros(n, np.int16)
    for c, r in regions.items():
        if 0 < c < n:
            out[c] = int(fn(r))
    return out


def tissue_model(data: np.ndarray, labels: np.ndarray, regions: dict[int, Region]) -> TissueModel:
    """CSF and cortical-GM levels from the label map; threshold half-way (T1-like contrast)."""
    n = int(labels.max()) + 1 if labels.size else 1
    cortex = _lut(n, regions, lambda r: ALL[r.structure][1] == "hemi" and r.structure != "corpus_callosum")
    vent = _lut(n, regions, lambda r: ALL[r.structure][1] == "ventricle")
    lab = np.clip(labels, 0, n - 1)
    gm_vals = data[cortex[lab] > 0]
    if gm_vals.size < 50:  # no cortical labels: all non-inner tissue
        gm_vals = data[labels > 0]
    csf_vals = data[ndi.binary_erosion(vent[lab] > 0)] if vent.any() else np.empty(0, data.dtype)
    if csf_vals.size < 20:
        mask = labels > 0
        ring = ndi.binary_dilation(mask, iterations=3) & ~mask
        csf_vals = data[ring]
    if gm_vals.size == 0 or csf_vals.size == 0:
        return TissueModel("labels", 0.0, 1.0, 0.5)
    gm, csf = float(np.median(gm_vals)), float(np.median(csf_vals))
    spread = float(np.percentile(gm_vals, 90) - np.percentile(gm_vals, 10)) + 1e-6
    if gm - csf < 0.5 * spread or gm <= csf:  # no usable T1-like CSF/GM contrast
        return TissueModel("labels", csf, gm, 0.5 * (gm + csf))
    return TissueModel("intensity", csf, gm, csf + 0.5 * (gm - csf))


def drop_small_components(mask: np.ndarray, min_voxels: int) -> np.ndarray:
    """Remove connected specks smaller than ``min_voxels`` (keeps the largest one regardless)."""
    lab, n = ndi.label(mask)
    if n <= 1:
        return mask.astype(bool)
    sizes = np.bincount(lab.ravel())
    sizes[0] = 0
    keep = sizes >= min(min_voxels, int(np.max(sizes)))
    keep[0] = False
    out: np.ndarray = keep[lab]
    return out


def _crop_geometry(geom: Geometry, box: tuple[slice, ...]) -> Geometry:
    start = np.array([[box[0].start, box[1].start, box[2].start]], float)
    o = index_to_lps(geom, start)[0]
    return Geometry(origin=(float(o[0]), float(o[1]), float(o[2])), spacing=geom.spacing, direction=geom.direction)


def region_table(lm: LabelMap) -> dict[str, RegionInfo]:
    regions = known_regions(lm)
    if not regions:
        return {}
    n = max(int(lm.labels.max()), max(regions)) + 1
    flat = lm.labels.ravel().astype(np.int64)
    flat = np.where((flat > 0) & (flat < n), flat, 0)
    counts = np.bincount(flat, minlength=n)
    zz, yy, xx = np.indices(lm.labels.shape, dtype=np.float32)
    sums = [np.bincount(flat, weights=a.ravel(), minlength=n) for a in (zz, yy, xx)]
    out: dict[str, RegionInfo] = {}
    for c, r in sorted(regions.items()):
        if counts[c] == 0:
            continue
        key = region_key(r.hemi, r.structure)
        cen_idx = np.array([[s[c] / counts[c] for s in sums]])
        cen = index_to_lps(lm.geometry, cen_idx)[0]
        if key in out:  # two codes for the same structure: merge (voxel-weighted centroid)
            prev = out[key]
            w = prev.voxels / (prev.voxels + counts[c])
            cen = np.array(prev.centroid_lps) * w + cen * (1 - w)
            out[key] = RegionInfo(
                key,
                r.structure,
                r.hemi,
                prev.code,
                prev.group,
                prev.inner,
                (float(cen[0]), float(cen[1]), float(cen[2])),
                prev.voxels + int(counts[c]),
            )
            continue
        out[key] = RegionInfo(
            key=key,
            structure=r.structure,
            hemi=r.hemi,
            code=c,
            group=group_of(r.structure, r.hemi),
            inner=is_inner(r.structure),
            centroid_lps=(float(cen[0]), float(cen[1]), float(cen[2])),
            voxels=int(counts[c]),
        )
    return out


def build_brain_model(
    reference: Volume, lm: LabelMap, budget: Budget | None = None, progress: ProgressCb | None = None
) -> BrainModel:
    """Carved outer surface + inner meshes for a brain label map on the reference grid."""
    budget = budget or Budget()

    def report(pct: float, msg: str = "") -> None:
        if progress is not None:
            progress("surface", pct, msg)

    if reference.data.shape != lm.labels.shape:
        raise ValueError("reference volume and label map must share one grid")
    regions = known_regions(lm)
    warnings: list[str] = []
    if len(regions) < len(lm.regions):
        warnings.append("Some labels are not in the structure vocabulary and were left out of the 3D model.")
    table = region_table(lm)
    box = crop_box(lm.labels > 0, pad=8)
    if box is None or not regions:
        raise ValueError("label map is empty")
    geom = _crop_geometry(lm.geometry, box)
    labels = lm.labels[box].astype(np.int32)
    data = reference.data[box].astype(np.float32)
    n = max(int(np.max(labels)), max(regions)) + 1
    labels[(labels < 0) | (labels >= n)] = 0
    known = _lut(n, regions, lambda r: True)
    labels[known[labels] == 0] = 0
    vox_mm3 = float(np.prod(lm.geometry.spacing))
    tissue = tissue_model(data, labels, regions)
    if tissue.mode == "labels":
        warnings.append("The scan contrast could not be used for the surface; it follows the label map instead.")
    report(5, "tissue")

    # ---- render group per voxel (nearest label); midline cerebral labels go to the nearer side
    group_names = ["", *OUTER_GROUPS]
    gidx = {g: i for i, g in enumerate(group_names)}
    sg = {c: _surface_group(r) for c, r in regions.items()}
    lut_group = np.zeros(n, np.int8)
    for c, g in sg.items():
        if g in gidx:
            lut_group[c] = gidx[g]
    lgroup = lut_group[labels]
    midline = np.isin(labels, [c for c, g in sg.items() if g == "midline"])
    if midline.any():
        x_axis = np.array(lm.geometry.direction, float).reshape(3, 3)[:, 0]  # LPS direction of array x
        left_x = np.argwhere(lgroup == gidx["hemi_L"])
        right_x = np.argwhere(lgroup == gidx["hemi_R"])
        pts = np.argwhere(midline)
        if len(left_x) and len(right_x):
            cl, cr = left_x.mean(0), right_x.mean(0)
            mid = (cl + cr) / 2
            side = (pts - mid) @ (cl - cr)  # > 0 -> towards the left hemisphere centroid
            lgroup[tuple(pts.T)] = np.where(side > 0, gidx["hemi_L"], gidx["hemi_R"])
        else:
            lps_x = (index_to_lps(geom, pts.astype(float)) @ x_axis) if len(pts) else np.empty(0)
            lgroup[tuple(pts.T)] = np.where(lps_x > 0, gidx["hemi_L"], gidx["hemi_R"])

    # ---- tissue mask and surface field (shifted so CSF ~ 0, threshold > 0)
    mask = labels > 0
    fill = np.isin(labels, [c for c, r in regions.items() if lobe_of(r.structure) in _FILL_LOBES])
    if tissue.mode == "intensity":
        ts = ndi.gaussian_filter(data, 0.6) - tissue.csf
        thr = tissue.threshold - tissue.csf
        filled = (ts > thr) & ndi.binary_dilation(mask, iterations=2)
        filled = ndi.binary_opening(filled, iterations=1)
        filled = drop_small_components(filled, int(2000.0 / vox_mm3)) if filled.any() else mask
        filled = ndi.binary_fill_holes(filled)
        filled |= ndi.binary_dilation(fill, iterations=2) & mask
        tf = np.where(filled & (ts < thr * 1.15), np.maximum(ts, thr * 1.15), ts)
    else:
        thr = 1.0
        filled = ndi.binary_fill_holes(mask)
        tf = np.where(filled, 2.0, 0.0).astype(np.float32)
    report(15, "groups")
    if (lgroup == 0).any():
        _, ind = ndi.distance_transform_edt(lgroup == 0, return_indices=True)
        gid = lgroup[tuple(ind)]
        del ind
    else:
        gid = lgroup

    # ---- inner structures first (their size is fixed), then the outer groups share the rest
    meshes: dict[str, list[Mesh]] = {}
    inner_codes = [
        c
        for c, r in sorted(regions.items())
        if is_inner(r.structure) and not _is_white_matter(r.structure) and ALL[r.structure][1] in ("deep", "ventricle")
    ]
    min_vox = max(8, int(round(50.0 / vox_mm3)))
    for i, c in enumerate(inner_codes):
        r = regions[c]
        m = labels == c
        if int(m.sum()) < min_vox:
            continue
        b = crop_box(m, pad=3)
        if b is None:
            continue
        sm = ndi.gaussian_filter(m[b].astype(np.float32), 1.0)
        mesh = iso_surface(sm, 0.45, b, geom, budget.upsample)
        if mesh is None:
            continue
        mesh = taubin(mesh, budget.smooth_iterations)
        mesh = decimate(mesh, budget.inner_per_structure)
        orient_outward(mesh)
        meshes.setdefault(region_key(r.hemi, r.structure), []).append(mesh)
        report(15 + 20 * (i + 1) / max(1, len(inner_codes)), "inner")
    inner_faces = sum(m.n_faces for ms in meshes.values() for m in ms)

    eligible = _lut(n, regions, lambda r: not is_inner(r.structure) and _surface_group(r) is not None).astype(bool)
    present = [g for g in OUTER_GROUPS if ((gid == gidx[g]) & filled).any()]
    weights = {g: budget.group_weights.get(g, 0.05) for g in present}
    wsum = sum(weights.values()) or 1.0
    remaining = max(1000, budget.max_triangles - inner_faces)
    for gi, g in enumerate(present):
        sel = (gid == gidx[g]) & filled
        sel = ndi.binary_opening(sel, iterations=1)
        if int(sel.sum()) < min_vox * 4:
            continue
        sel = largest_component(sel)
        b = crop_box(sel, pad=4)
        if b is None:
            continue
        sub = sel[b]
        fsub = np.where(ndi.binary_dilation(sub, iterations=1), tf[b], 0.0)
        fsub = np.where(sub, fsub, np.minimum(fsub, thr * 0.5))
        fsub = ndi.gaussian_filter(fsub.astype(np.float32), 0.7)
        mesh = iso_surface(fsub, thr * 0.92, b, geom, budget.upsample)
        if mesh is None:
            continue
        mesh = keep_largest_piece(mesh)
        mesh = taubin(mesh, budget.smooth_iterations)
        mesh = decimate(mesh, int(remaining * weights[g] / wsum))
        orient_outward(mesh)
        # label vertices: nearest eligible label voxel of this group
        el = eligible[labels] & (lgroup == gidx[g])
        pts = np.argwhere(el)
        if not len(pts):
            warnings.append(f"No surface labels for {g}; it was left out.")
            continue
        tree = cKDTree(index_to_lps(geom, pts.astype(float)))
        _, nn = tree.query(mesh.vertices, k=1, workers=-1)
        vl = labels[tuple(pts[nn].T)]
        vl = majority_smooth(mesh, vl, budget.label_smoothing_passes)
        for c, part in split_by_labels(mesh, face_labels(mesh.faces, vl)).items():
            r = regions[c]
            meshes.setdefault(region_key(r.hemi, r.structure), []).append(part)
        report(40 + 55 * (gi + 1) / len(present), g)

    out = {k: concat(v) for k, v in meshes.items()}
    model = BrainModel(meshes=out, regions=table, tissue=tissue, warnings=warnings)
    enforce_budget(model, budget.max_triangles)
    report(100, "")
    return model


def enforce_budget(model: BrainModel, max_triangles: int) -> None:
    """Scale every mesh down proportionally until the total fits ``max_triangles``."""
    for _ in range(4):
        total = model.n_faces
        if total <= max_triangles:
            return
        f = max_triangles / total * 0.98
        model.meshes = {k: decimate(m, max(4, int(m.n_faces * f))) for k, m in model.meshes.items()}
