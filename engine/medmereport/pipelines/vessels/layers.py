"""Non-region layers shared by model pipelines: vessel meshes (``V__cow`` / ``V__neck`` / ``V__body``) and the
head/body surface (``H__skin``), their ``regions.json`` entries and their measurements.

Layer keys follow the node-name convention (docs/API_CONTRACT.md §5/§6): key ``V|cow`` -> node ``V__cow``.
"""

from __future__ import annotations

from collections.abc import Callable
from dataclasses import dataclass, field
from typing import Any

import numpy as np

from medmereport.core.models import Caveat, Measurement
from medmereport.dicom.series import Geometry
from medmereport.geometry.mesh import Mesh
from medmereport.geometry.space import index_to_lps, lps_to_viewer
from medmereport.knowledge.structures import group_of, is_inner
from medmereport.pipelines.vessels.extract import VesselResult, mask_mesh, split_by_height

PointMap = Callable[[np.ndarray], np.ndarray]

# layer key -> vocabulary structure id
LAYER_STRUCTURE = {
    "V|cow": "cerebral_arteries",
    "V|neck": "neck_arteries",
    "V|body": "body_arteries",
    "H|skin": "skin",
}

VESSEL_CAVEATS = [
    Caveat(text="Traced automatically from image brightness; small, slow-flow or faint vessels can be missing."),
    Caveat(
        text="The surface shows the bright lumen only. It is not a check for narrowing, aneurysm or blockage; "
        "only a radiologist reading the original images can say that.",
        severity="warn",
    ),
]
TOF_CAVEATS = [
    Caveat(text="On TOF angiography, turbulent or slow flow loses signal, so a vessel can look thinner or broken."),
]
CTA_CAVEATS = [
    Caveat(text="Calcified wall plaque and vessels touching bone are removed together with the bone."),
    Caveat(text="Contrast-filled heart chambers, veins and organs that are not tube-shaped are left out."),
]


@dataclass
class Layers:
    """Extra meshes for a model plus what regions.json / stats.json need to describe them."""

    meshes: dict[str, Mesh] = field(default_factory=dict)  # LPS
    measurements: dict[str, list[Measurement]] = field(default_factory=dict)
    warnings: list[str] = field(default_factory=list)
    defaults: dict[str, bool] = field(default_factory=dict)  # layer (group) id -> visible by default

    @property
    def n_faces(self) -> int:
        return sum(m.n_faces for m in self.meshes.values())

    def merge(self, other: Layers) -> None:
        self.meshes.update(other.meshes)
        self.measurements.update(other.measurements)
        self.warnings.extend(other.warnings)
        self.defaults.update(other.defaults)


def region_entry(key: str, mesh: Mesh) -> dict[str, Any]:
    """regions.json entry for a layer key (centroid = mean vertex, viewer space)."""
    structure = LAYER_STRUCTURE[key]
    cen = lps_to_viewer(mesh.vertices).mean(0) if len(mesh.vertices) else np.zeros(3)
    return {
        "key": key,
        "structure": structure,
        "hemi": "M",
        "code": 0,
        "group": group_of(structure, "M"),
        "inner": is_inner(structure),
        "centroid": [round(float(v), 1) for v in cen],
    }


def layer_list(groups: dict[str, bool]) -> list[dict[str, Any]]:
    return [{"id": g, "default": bool(d)} for g, d in groups.items()]


def volume_measurement(mm3: float, kind: str) -> Measurement:
    caveats = [*VESSEL_CAVEATS, *(TOF_CAVEATS if kind == "tof" else CTA_CAVEATS)]
    method = (
        "Voxels kept by the classical vessel tracer (white top-hat, Hessian tube filter, hysteresis threshold, "
        "connected-component cleanup) on an isotropic grid, times the voxel volume."
        if kind == "tof"
        else "Voxels in the contrast HU band (180-600 HU) outside dilated bone (> 700 HU), keeping only "
        "tube-shaped connected components, times the voxel volume."
    )
    return Measurement(
        key="vessel_volume",
        label="Traced artery lumen volume",
        value=round(mm3 / 1000.0, 2),
        unit="cm³",
        method=method,
        caveats=caveats,
    )


def vessel_layers(
    res: VesselResult,
    *,
    point_map: PointMap | None = None,
    split_z: float | None | str = "auto",
    target_faces: int = 160_000,
) -> Layers:
    """Meshes + volumes for a vessel result. ``point_map`` maps result-grid LPS points into the model space;
    ``split_z`` (model-space LPS z) separates intracranial (``V|cow``) from neck (``V|neck``) vessels.
    """
    out = Layers(warnings=list(res.warnings))
    if not res.mask.any():
        return out
    mesh = mask_mesh(res.mask, res.grid.geometry, target_faces)
    if mesh is None:
        out.warnings.append("The traced vessels were too small to draw.")
        return out
    if point_map is not None:
        mesh = Mesh(point_map(mesh.vertices), mesh.faces)
    vox = np.argwhere(res.mask)
    pts = index_to_lps(res.grid.geometry, vox.astype(float))
    if point_map is not None:
        pts = point_map(pts)
    vmm3 = res.grid.spacing**3
    if res.kind == "cta":
        parts: dict[str, Mesh | None] = {"V|body": mesh}
        vols = {"V|body": len(pts) * vmm3}
    else:
        z = res.split_z if split_z == "auto" else split_z
        zf = None if z is None else float(z)
        above, below = split_by_height(mesh, zf)
        parts = {"V|cow": above, "V|neck": below}
        n_below = 0 if zf is None else int((pts[:, 2] < zf).sum())
        vols = {"V|cow": (len(pts) - n_below) * vmm3, "V|neck": n_below * vmm3}
    for key, m in parts.items():
        if m is None or not len(m.faces):
            continue
        out.meshes[key] = m
        out.measurements[key] = [volume_measurement(vols[key], res.kind)]
    if out.meshes:
        out.defaults["vessel"] = False
    return out


def skin_layer(head: np.ndarray, geom: Geometry, target_faces: int = 40_000) -> Layers:
    """``H|skin``: smoothed outer surface of a head/body mask (hidden by default)."""
    out = Layers()
    if not head.any():
        return out
    step = max(1, int(round(2.0 / min(geom.spacing))))  # ~2 mm is plenty for an outline
    if step > 1:
        head = head[::step, ::step, ::step]
        geom = Geometry(
            origin=geom.origin,
            spacing=(geom.spacing[0] * step, geom.spacing[1] * step, geom.spacing[2] * step),
            direction=geom.direction,
        )
    mesh = mask_mesh(head, geom, target_faces, smooth=1.0)
    if mesh is None:
        return out
    out.meshes["H|skin"] = mesh
    out.defaults["body"] = False
    return out
