"""Generic "label volume -> one mesh per label -> GLB / regions.json" builder (M3: CT, spine, TotalSegmentator).

Unlike the carved brain surface (:mod:`geometry.surface`), every label here becomes its own closed
surface. Each :class:`SurfaceSpec` names one output mesh (a region key such as ``L|lung`` or a
reserved layer such as ``H|skin`` / ``B|skeleton``) and the label codes it is built from, so one
mesh may cover several codes (the skin is the union of everything inside the body).

Per mesh: crop, Gaussian-smooth the binary mask (``smooth_mm``), resample the field to an isotropic
grid (thick slices get smooth surfaces, huge crops are coarsened to stay within ``max_voxels``),
marching cubes at 0.5, Taubin smoothing, then decimation to the mesh's share of the triangle budget.
Everything is LPS millimetres; :func:`geometry.glb.glb_bytes` converts to viewer space.
"""

from __future__ import annotations

from collections.abc import Callable
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

import numpy as np
import trimesh
from scipy import ndimage as ndi
from skimage import measure

from medmereport.core.studies import write_json
from medmereport.dicom.series import Geometry
from medmereport.geometry.glb import glb_bytes
from medmereport.geometry.mesh import Mesh, crop_box, decimate, orient_outward, taubin
from medmereport.geometry.space import index_to_lps, lps_to_viewer
from medmereport.geometry.surface import RegionInfo
from medmereport.knowledge.structures import ALL, group_of, is_inner

ProgressCb = Callable[[str, float, str], None]

# Layer id for the reserved (non-clickable) prefixes; matches the web viewer's layer names.
RESERVED_LAYERS = {"H": "skin", "B": "bone", "V": "vessels"}


@dataclass(frozen=True)
class SurfaceSpec:
    key: str  # "L|lung", "M|airway", "H|skin", "B|skeleton"
    codes: tuple[int, ...]  # label codes forming this mesh
    smooth_mm: float = 1.0  # Gaussian sigma applied to the binary mask before marching cubes
    weight: float = 1.0  # relative share of the triangle budget (times the mesh's raw size)
    min_faces: int = 2_000

    @property
    def prefix(self) -> str:
        return self.key.split("|", 1)[0]

    @property
    def clickable(self) -> bool:
        return self.prefix in ("L", "R", "M")

    @property
    def structure(self) -> str:
        return self.key.split("|", 1)[1]


@dataclass
class LabelBudget:
    max_triangles: int = 700_000
    max_glb_bytes: int = 30_000_000
    min_mm: float = 0.8  # finest marching-cubes grid
    max_voxels: int = 24_000_000  # per-mesh resampled crop
    smooth_iterations: int = 10


@dataclass
class LabelModel:
    meshes: dict[str, Mesh]  # key -> LPS mesh (clickable regions and reserved layers)
    regions: dict[str, RegionInfo]  # clickable regions only
    codes: dict[str, int]  # clickable key -> display code (1..255), shared with 2D label maps
    warnings: list[str] = field(default_factory=list)

    @property
    def n_faces(self) -> int:
        return sum(m.n_faces for m in self.meshes.values())


def _crop_geometry(geom: Geometry, box: tuple[slice, ...]) -> tuple[np.ndarray, Geometry]:
    start = np.array([[box[0].start, box[1].start, box[2].start]], float)
    o = index_to_lps(geom, start)[0]
    return start[0], Geometry(origin=(float(o[0]), float(o[1]), float(o[2])), spacing=geom.spacing,
                              direction=geom.direction)  # fmt: skip


def mask_surface(mask: np.ndarray, geom: Geometry, smooth_mm: float, budget: LabelBudget) -> Mesh | None:
    """Closed LPS surface of a binary mask on ``geom`` (None when the mask is empty)."""
    box = crop_box(mask, pad=3)
    if box is None:
        return None
    sub = mask[box].astype(np.float32)
    sp_zyx = np.array([geom.spacing[2], geom.spacing[1], geom.spacing[0]], float)
    if smooth_mm > 0:
        sub = ndi.gaussian_filter(sub, sigma=tuple(float(s) for s in smooth_mm / sp_zyx))
    target = max(budget.min_mm, float(sp_zyx.min()))
    n_in = np.array(sub.shape, float)
    while np.prod(np.maximum(1, np.round(n_in * sp_zyx / target))) > budget.max_voxels:
        target *= 1.25
    n_out = np.maximum(2, np.round(n_in * sp_zyx / target)).astype(int)
    zoom = n_out / n_in
    field_ = ndi.zoom(sub, zoom, order=1, grid_mode=True, mode="nearest") if np.any(np.abs(zoom - 1) > 1e-3) else sub
    if float(np.max(field_)) <= 0.5 or float(np.min(field_)) >= 0.5:
        return None
    padded = np.pad(field_, 1, constant_values=0.0)  # closed surfaces at the crop border
    v, faces, _, _ = measure.marching_cubes(padded, 0.5)
    v = v - 1.0
    scale = n_in / np.array(field_.shape, float)
    v = (v + 0.5) * scale - 0.5 + np.array([s.start for s in box], float)  # output grid -> input voxel index
    m = trimesh.Trimesh(index_to_lps(geom, v), faces.astype(np.int64), process=True)
    mesh = Mesh(np.asarray(m.vertices, float), np.asarray(m.faces, np.int64))
    orient_outward(mesh)
    return mesh


def _finish(mesh: Mesh, target: int, iterations: int) -> Mesh:
    if mesh.n_faces > 4 * target:
        mesh = decimate(mesh, 4 * target)
    mesh = taubin(mesh, iterations)
    mesh = decimate(mesh, target)
    orient_outward(mesh)
    return mesh


def _region_info(key: str, mask: np.ndarray, geom: Geometry, code: int) -> RegionInfo:
    hemi, structure = key.split("|", 1)
    idx = np.argwhere(mask)
    cen = index_to_lps(geom, idx.mean(0, keepdims=True))[0] if len(idx) else np.zeros(3)
    return RegionInfo(
        key=key,
        structure=structure,
        hemi=hemi,
        code=code,
        group=group_of(structure, hemi),
        inner=is_inner(structure),
        centroid_lps=(float(cen[0]), float(cen[1]), float(cen[2])),
        voxels=int(len(idx)),
    )


def build_label_model(
    labels: np.ndarray,
    geom: Geometry,
    specs: list[SurfaceSpec],
    budget: LabelBudget | None = None,
    progress: ProgressCb | None = None,
) -> LabelModel:
    """One smoothed, decimated mesh per spec; clickable specs also get a :class:`RegionInfo`."""
    budget = budget or LabelBudget()
    warnings: list[str] = []
    raw: dict[str, Mesh] = {}
    regions: dict[str, RegionInfo] = {}
    usable = [s for s in specs if not s.clickable or s.structure in ALL]
    if len(usable) < len(specs):
        warnings.append("Some labels are not in the structure vocabulary and were left out of the 3D model.")
    clickable = sorted(s.key for s in usable if s.clickable)
    codes = {k: i + 1 for i, k in enumerate(clickable[:255])}
    for i, spec in enumerate(usable):
        mask = np.isin(labels, spec.codes)
        if not mask.any():
            continue
        mesh = mask_surface(mask, geom, spec.smooth_mm, budget)
        if mesh is None or not mesh.n_faces:
            continue
        raw[spec.key] = mesh
        if spec.clickable:
            regions[spec.key] = _region_info(spec.key, mask, geom, codes.get(spec.key, 0))
        if progress is not None:
            progress("surface", 90.0 * (i + 1) / max(1, len(usable)), spec.key)
    weights = {s.key: s.weight for s in usable}
    share = {k: weights[k] * m.n_faces for k, m in raw.items()}
    total = sum(share.values()) or 1.0
    meshes: dict[str, Mesh] = {}
    for spec in usable:
        if spec.key not in raw:
            continue
        m = raw[spec.key]
        target = max(min(m.n_faces, spec.min_faces), int(budget.max_triangles * share[spec.key] / total))
        meshes[spec.key] = _finish(m, min(target, m.n_faces), budget.smooth_iterations)
    model = LabelModel(meshes=meshes, regions=regions, codes={k: c for k, c in codes.items() if k in regions},
                       warnings=warnings)  # fmt: skip
    enforce_budget(model, budget.max_triangles)
    if progress is not None:
        progress("surface", 100.0, "")
    return model


def enforce_budget(model: LabelModel, max_triangles: int) -> None:
    for _ in range(4):
        total = model.n_faces
        if total <= max_triangles:
            return
        f = max_triangles / total * 0.98
        model.meshes = {k: decimate(m, max(4, int(m.n_faces * f))) for k, m in model.meshes.items()}


def write_model_glb(model: LabelModel, path: Path, max_bytes: int = 30_000_000) -> int:
    """GLB with one node per mesh (``L__lung``, ``H__skin`` ...); decimates further if over ``max_bytes``."""
    meshes = model.meshes
    data = glb_bytes(meshes)
    for _ in range(4):
        if len(data) <= max_bytes:
            break
        f = max_bytes / len(data) * 0.9
        meshes = {k: decimate(m, max(4, int(m.n_faces * f))) for k, m in meshes.items()}
        data = glb_bytes(meshes)
    model.meshes = meshes
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_bytes(data)
    return len(data)


def layer_of(key: str) -> str:
    prefix, structure = key.split("|", 1)
    if prefix in RESERVED_LAYERS:
        return RESERVED_LAYERS[prefix]
    return group_of(structure, prefix)


def layers_present(model: LabelModel, defaults: dict[str, bool] | None = None) -> list[dict[str, Any]]:
    """``[{id, default}]`` for the layers actually present (order of first appearance by key)."""
    defaults = defaults or {}
    seen: list[str] = []
    for key in sorted(model.meshes):
        lay = layer_of(key)
        if lay not in seen:
            seen.append(lay)
    return [{"id": lay, "default": bool(defaults.get(lay, lay != "skin"))} for lay in seen]


def regions_document(
    model: LabelModel,
    *,
    pipeline: str,
    framing: str,
    backend: str,
    licence: str,
    caveats: list[str],
    layer_defaults: dict[str, bool] | None = None,
    primary_series: str | None = None,
) -> dict[str, Any]:
    regions = []
    for key in sorted(model.regions):
        info = model.regions[key]
        if key not in model.meshes or not model.meshes[key].n_faces:
            continue
        cen = lps_to_viewer(np.array([info.centroid_lps]))[0]
        regions.append(
            {
                "key": key,
                "structure": info.structure,
                "hemi": info.hemi,
                "code": model.codes.get(key, 0),
                "group": info.group,
                "inner": info.inner,
                "centroid": [round(float(v), 1) for v in cen],
            }
        )
    doc: dict[str, Any] = {
        "pipeline": pipeline,
        "framing": framing,
        "backend": backend,
        "licence": licence,
        "caveats": caveats,
        "layers": layers_present(model, layer_defaults),
        "regions": regions,
    }
    if primary_series is not None:
        doc["primary_series"] = primary_series
    return doc


def write_regions_document(path: Path, doc: dict[str, Any]) -> None:
    write_json(path, doc)


def coded_labels(labels: np.ndarray, model: LabelModel, specs: list[SurfaceSpec]) -> np.ndarray:
    """uint8 display-code volume (clickable regions only) for the 2D label maps and thumbnails."""
    out = np.zeros(labels.shape, np.uint8)
    for spec in specs:
        code = model.codes.get(spec.key)
        if code:
            out[np.isin(labels, spec.codes)] = code
    return out
