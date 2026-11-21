"""Carved surface + GLB on the synthetic phantom: contract node names, viewer axes, outward normals,
triangle budget, regions.json."""

import io
import json
import struct
import time

import numpy as np
import pytest
import trimesh

from medmereport.geometry.glb import glb_bytes, regions_document, valid_node_name, write_glb
from medmereport.geometry.mesh import Mesh, signed_volume
from medmereport.geometry.surface import Budget, build_brain_model
from medmereport.knowledge.structures import ALL, is_inner
from medmereport.segment.base import Volume
from tests.geometry.phantom import make_phantom


@pytest.fixture(scope="module")
def phantom():
    return make_phantom(2.0)


@pytest.fixture(scope="module")
def model(phantom):
    return build_brain_model(phantom.reference, phantom.labels)


def _gltf_json(data: bytes) -> dict:
    magic, _, _ = struct.unpack("<III", data[:12])
    assert magic == 0x46546C67
    n, kind = struct.unpack("<II", data[12:20])
    assert kind == 0x4E4F534A
    return json.loads(data[20 : 20 + n])


def _scene_meshes(data: bytes) -> dict[str, trimesh.Trimesh]:
    scene = trimesh.load(io.BytesIO(data), file_type="glb", force="scene")
    out = {}
    for node in scene.graph.nodes_geometry:
        tf, geom = scene.graph[node]
        assert np.allclose(tf, np.eye(4))
        out[node] = scene.geometry[geom]
    return out


def test_glb_parses_with_contract_node_names(model):
    data = glb_bytes(model.meshes)
    meshes = _scene_meshes(data)
    assert len(meshes) == 20  # every phantom structure except the two white-matter labels
    for name in meshes:
        assert valid_node_name(name), name
        hemi, structure = name.split("__")
        assert hemi in "LRM" and structure in ALL
    assert "L__cerebral_white_matter" not in meshes
    doc = _gltf_json(data)
    assert "materials" not in doc
    for mesh in doc["meshes"]:
        for prim in mesh["primitives"]:
            assert set(prim["attributes"]) == {"POSITION"}  # no normals, no colours


def test_viewer_space_axes(model):
    meshes = _scene_meshes(glb_bytes(model.meshes))
    c = {k: m.vertices.mean(0) for k, m in meshes.items()}
    # X = patient left
    assert c["L__sfg"][0] > 10 and c["R__sfg"][0] < -10
    assert c["L__thalamus"][0] > 0 > c["R__thalamus"][0]
    # Y = superior: brainstem below the hemispheres, medulla below pons
    assert c["M__medulla"][1] < c["M__pons"][1] < c["L__postcentral"][1]
    # Z = anterior: frontal (sfg) in front of occipital
    assert c["L__sfg"][2] > c["L__lateral_occipital"][2] + 50


def test_normals_face_outwards(model):
    meshes = _scene_meshes(glb_bytes(model.meshes))
    for prefix, members in (("L", lambda s: ALL[s][1] == "hemi"), ("M", lambda s: ALL[s][1] == "brainstem")):
        parts = [m for k, m in meshes.items() if k.startswith(prefix + "__") and members(k.split("__")[1])]
        whole = trimesh.util.concatenate(parts)
        centre = whole.vertices.mean(0)
        out = np.einsum("ij,ij->i", whole.face_normals, whole.triangles_center - centre)
        assert (out > 0).mean() > 0.9, prefix
    for k, m in meshes.items():
        if is_inner(k.split("__")[1]):
            assert signed_volume(Mesh(m.vertices, m.faces)) > 0, k


def test_triangle_budget_respected(phantom):
    small = build_brain_model(phantom.reference, phantom.labels, Budget(max_triangles=40_000, inner_per_structure=1000))
    assert small.n_faces <= 40_000
    assert len(small.meshes) == 20


def test_glb_size_cap(phantom, tmp_path):
    m = build_brain_model(phantom.reference, phantom.labels)  # fresh: write_glb may decimate in place
    size = write_glb(m, tmp_path / "scene.glb", max_bytes=1_000_000)
    assert size <= 1_000_000 and (tmp_path / "scene.glb").stat().st_size == size
    assert len(_scene_meshes((tmp_path / "scene.glb").read_bytes())) == 20


def test_regions_document(model):
    doc = regions_document(model, "phantom@1", "CC0", ["c1"])
    assert doc["backend"] == "phantom@1" and doc["caveats"] == ["c1"]
    keys = {r["key"] for r in doc["regions"]}
    assert keys == {k for k in model.meshes}
    by = {r["key"]: r for r in doc["regions"]}
    assert by["L|hippocampus"]["inner"] is True and by["L|hippocampus"]["group"] == "deep"
    assert by["L|sfg"]["group"] == "hemi_L" and by["R|sfg"]["group"] == "hemi_R"
    assert by["M|pons"]["group"] == "brainstem"
    assert by["L|thalamus"]["centroid"][0] == pytest.approx(16, abs=2)  # viewer X = LPS x
    assert by["L|thalamus"]["centroid"][1] == pytest.approx(10, abs=2)  # viewer Y = LPS z
    assert by["L|thalamus"]["centroid"][2] == pytest.approx(-10, abs=2)  # viewer Z = -LPS y
    assert all(0 < r["code"] < 256 for r in doc["regions"])


def test_flat_contrast_falls_back_to_label_surface(phantom):
    flat = Volume(np.full_like(phantom.reference.data, 100.0), phantom.reference.geometry, "T1", "s0")
    m = build_brain_model(flat, phantom.labels, Budget(max_triangles=50_000))
    assert m.tissue.mode == "labels"
    assert m.warnings
    assert "L__sfg" in {k.replace("|", "__") for k in m.meshes}


def test_brain_size_phantom_at_1mm_meets_budget(tmp_path):
    p = make_phantom(1.0)
    t = time.perf_counter()
    m = build_brain_model(p.reference, p.labels)
    size = write_glb(m, tmp_path / "scene.glb")
    elapsed = time.perf_counter() - t
    assert m.n_faces <= 900_000
    assert size <= 30_000_000
    assert elapsed < 120
