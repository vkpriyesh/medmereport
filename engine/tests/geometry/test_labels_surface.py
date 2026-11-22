"""Generic label-volume -> meshes -> GLB/regions builder (geometry/labels_surface.py)."""

import io

import numpy as np
import trimesh

from medmereport.dicom.series import Geometry
from medmereport.geometry.glb import valid_node_name
from medmereport.geometry.labels_surface import (
    LabelBudget,
    SurfaceSpec,
    build_label_model,
    coded_labels,
    mask_surface,
    regions_document,
    write_model_glb,
)
from medmereport.geometry.mesh import signed_volume

GEOM = Geometry(origin=(-60.0, -60.0, -40.0), spacing=(1.5, 1.5, 4.0), direction=(1, 0, 0, 0, 1, 0, 0, 0, 1))


def _labels():
    z, y, x = np.mgrid[0:20, 0:80, 0:80].astype(np.float32)
    zm, ym, xm = -40 + z * 4.0, -60 + y * 1.5, -60 + x * 1.5  # LPS mm
    lab = np.zeros((20, 80, 80), np.int16)
    body = (xm / 55) ** 2 + (ym / 50) ** 2 + (zm / 38) ** 2 <= 1
    lab[body] = 1
    lab[((xm - 20) ** 2 + ym**2 + zm**2) <= 15**2] = 2  # sphere on the patient's left (+x)
    lab[((xm + 20) ** 2 + ym**2 + zm**2) <= 15**2] = 3  # right
    return lab


SPECS = [
    SurfaceSpec("H|skin", (1, 2, 3), smooth_mm=2.0),
    SurfaceSpec("L|lung", (2,)),
    SurfaceSpec("R|lung", (3,)),
]


def test_mask_surface_volume_and_orientation():
    lab = _labels()
    mesh = mask_surface(lab == 2, GEOM, 1.0, LabelBudget())
    true = 4 / 3 * np.pi * 15**3
    assert abs(signed_volume(mesh) - true) / true < 0.12  # thick (4 mm) slices, smoothed
    c = mesh.vertices.mean(0)
    assert c[0] > 10  # LPS +x = patient left


def test_build_model_regions_codes_and_reserved_layers():
    lab = _labels()
    model = build_label_model(lab, GEOM, SPECS, LabelBudget(max_triangles=20_000))
    assert set(model.meshes) == {"H|skin", "L|lung", "R|lung"}
    assert set(model.regions) == {"L|lung", "R|lung"}  # reserved prefixes are not clickable regions
    assert model.n_faces <= 20_000
    assert sorted(model.codes.values()) == [1, 2]
    doc = regions_document(model, pipeline="ct_body", framing="body", backend="b", licence="l", caveats=["c"])
    assert doc["framing"] == "body" and doc["pipeline"] == "ct_body"
    assert {r["key"] for r in doc["regions"]} == {"L|lung", "R|lung"}
    assert {lay["id"]: lay["default"] for lay in doc["layers"]} == {"body": False, "organ": True}
    left = next(r for r in doc["regions"] if r["key"] == "L|lung")
    assert left["centroid"][0] > 10 and left["group"] == "organ" and left["inner"] is True
    coded = coded_labels(lab, model, SPECS)
    assert set(np.unique(coded)) == {0, 1, 2}


def test_glb_nodes_and_budget(tmp_path):
    model = build_label_model(_labels(), GEOM, SPECS, LabelBudget(max_triangles=30_000))
    size = write_model_glb(model, tmp_path / "scene.glb", max_bytes=200_000)
    assert size <= 200_000
    scene = trimesh.load(io.BytesIO((tmp_path / "scene.glb").read_bytes()), file_type="glb")
    names = set(scene.graph.nodes_geometry)
    assert names == {"H__skin", "L__lung", "R__lung"}
    assert all(valid_node_name(n) for n in names)


def test_unknown_structure_is_left_out_with_warning():
    lab = _labels()
    model = build_label_model(lab, GEOM, [*SPECS, SurfaceSpec("M|not_a_structure", (2,))], LabelBudget(20_000))
    assert "M|not_a_structure" not in model.meshes
    assert model.warnings
