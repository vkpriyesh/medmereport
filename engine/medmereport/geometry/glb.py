"""GLB + regions.json writers for the 3D model artifact (docs/API_CONTRACT.md §5).

* One glTF node per region, named ``{hemi}__{structure}``; positions in viewer space
  (X = Left, Y = Superior, Z = Anterior) via :func:`geometry.space.lps_to_viewer`.
* No materials, no normals (the UI owns appearance).
"""

from __future__ import annotations

import re
from pathlib import Path
from typing import Any

import numpy as np
import trimesh

from medmereport.core.studies import write_json
from medmereport.geometry.mesh import Mesh, decimate
from medmereport.geometry.space import lps_to_viewer
from medmereport.geometry.surface import BrainModel, node_name
from medmereport.knowledge.structures import ALL

NODE_RE = re.compile(r"^(?:[LRM]__[a-z0-9_]+|V__[a-z0-9_]+|H__skin|B__[a-z0-9_]+)$")


def valid_node_name(name: str) -> bool:
    if not NODE_RE.match(name):
        return False
    if name[0] in "LRM":
        return name.split("__", 1)[1] in ALL
    return True


def _scene(meshes: dict[str, Mesh]) -> trimesh.Scene:
    scene = trimesh.Scene()
    for key in sorted(meshes):
        m = meshes[key]
        if not len(m.faces):
            continue
        name = node_name(key)
        if not valid_node_name(name):
            raise ValueError(f"invalid node name {name!r}")
        verts = lps_to_viewer(m.vertices).astype(np.float32)
        tm = trimesh.Trimesh(verts, m.faces.astype(np.int64), process=False)
        scene.add_geometry(tm, node_name=name, geom_name=name)
    return scene


def glb_bytes(meshes: dict[str, Mesh]) -> bytes:
    data: bytes = _scene(meshes).export(file_type="glb", include_normals=False)
    return data


def write_glb(model: BrainModel, path: Path, max_bytes: int = 30_000_000) -> int:
    """Write ``model`` as GLB; decimates further if the file would exceed ``max_bytes``. Returns size."""
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


def display_codes(model: BrainModel) -> dict[str, int]:
    """Region key -> 8-bit code shared by regions.json and the 2D label-map PNGs.

    The LabelMap code is kept when every region fits in 1..255 without collisions; otherwise
    regions are numbered 1..N in label-code order (max 255; the rest get no 2D hover label).
    """
    items = sorted(model.regions.values(), key=lambda r: r.code)
    codes = [r.code for r in items]
    if codes and max(codes) <= 255 and len(set(codes)) == len(codes):
        return {r.key: r.code for r in items}
    return {r.key: i + 1 for i, r in enumerate(items[:255])}


def regions_document(model: BrainModel, backend: str, licence: str, caveats: list[str]) -> dict[str, Any]:
    codes = display_codes(model)
    regions = []
    for key in sorted(model.meshes):
        info = model.regions.get(key)
        if info is None or not len(model.meshes[key].faces):
            continue
        if info.voxels > 0:
            cen = lps_to_viewer(np.array([info.centroid_lps]))[0]
        else:
            cen = lps_to_viewer(model.meshes[key].vertices).mean(0)
        regions.append(
            {
                "key": key,
                "structure": info.structure,
                "hemi": info.hemi,
                "code": codes.get(key, 0),
                "group": info.group,
                "inner": info.inner,
                "centroid": [round(float(v), 1) for v in cen],
            }
        )
    return {"backend": backend, "licence": licence, "caveats": caveats, "regions": regions}


def write_regions_json(path: Path, model: BrainModel, backend: str, licence: str, caveats: list[str]) -> dict[str, Any]:
    doc = regions_document(model, backend, licence, caveats)
    write_json(path, doc)
    return doc
