"""T2.13: H__skin + TOF vessels registered into the brain model (synthetic phantoms only)."""

import io
import json
from functools import partial

import numpy as np
import SimpleITK as sitk
import trimesh
from scipy.spatial import cKDTree

from medmereport.core.models import StudyInfo
from medmereport.core.studies import write_study
from medmereport.dicom.series import Geometry
from medmereport.geometry.glb import valid_node_name
from medmereport.geometry.space import viewer_to_lps
from medmereport.pipelines.brain_mr.layers import head_layers, register_tof, skull_base_z, tof_layers
from medmereport.pipelines.brain_mr.pipeline import BrainMRPipeline
from medmereport.segment.base import Volume
from tests.fixtures.synth_vessels import series_info, tof_phantom, write_volume_series
from tests.geometry.phantom import write_fake_study
from tests.pipelines import fake_hooks
from tests.pipelines.helpers import FakeCtx

SHIFT = np.array([6.0, -4.0, 3.0])  # TOF content displaced in scanner space (head motion between series)


def _shifted(vol: Volume, d: np.ndarray) -> Volume:
    g = vol.geometry
    o = tuple(float(v) for v in np.array(g.origin) + d)
    return Volume(vol.data, Geometry(origin=o, spacing=g.spacing, direction=g.direction), vol.sequence, vol.series_id)


def _known(d):
    def register(reference, tof):
        return sitk.TranslationTransform(3, tuple(float(v) for v in d)), None  # reference -> TOF

    return register


def test_skull_base_from_labels():
    lm = fake_hooks._phantom().labels
    z = skull_base_z(lm)
    assert z is not None and -90 < z < -75  # bottom of the phantom cerebellum (-84 mm)


def test_tof_vertices_land_on_the_vessels_in_reference_space():
    """A reversed reference->moving transform would put every vertex ~2x SHIFT (~15 mm) away."""
    ph = tof_phantom()
    brain = fake_hooks._phantom()
    tof = _shifted(ph.volume, SHIFT)
    layers = tof_layers(brain.reference, brain.labels, tof, register=_known(SHIFT))
    assert {"V|cow", "V|neck"} <= set(layers.meshes)
    tree = cKDTree(ph.centreline)  # ground truth in reference (unshifted) space
    for m in layers.meshes.values():
        d, _ = tree.query(m.vertices)
        assert np.median(d) < 3.0
    base = skull_base_z(brain.labels)
    assert layers.meshes["V|cow"].vertices[:, 2].min() >= base - 2
    assert layers.meshes["V|neck"].vertices[:, 2].max() <= base + 2
    for ms in layers.measurements.values():
        assert ms[0].method and ms[0].caveats and ms[0].value > 0


def test_register_tof_returns_reference_to_moving():
    brain = fake_hooks._phantom()
    moved = _shifted(brain.reference, SHIFT)
    tx, warn = register_tof(brain.reference, moved)
    assert warn is None
    p = np.array([10.0, 20.0, 5.0])
    q = np.array(tx.TransformPoint(tuple(p)))
    assert np.allclose(q - p, SHIFT, atol=1.5)


def _glb(d):
    return trimesh.load(io.BytesIO((d / "model" / "scene.glb").read_bytes()), file_type="glb", force="scene")


def test_brain_model_has_skin_layer(tmp_path):
    d = write_fake_study(tmp_path, fake_hooks._phantom())
    study = StudyInfo.model_validate_json((d / "study.json").read_text())
    BrainMRPipeline(fake_hooks.build_volumes, fake_hooks.best_backend).run(FakeCtx({}, tmp_path), d, study)
    nodes = set(_glb(d).graph.nodes_geometry)
    regions = json.loads((d / "model" / "regions.json").read_text())
    assert "H__skin" in nodes and not any(n.startswith("V__") for n in nodes)
    assert {r["key"].replace("|", "__") for r in regions["regions"]} == nodes
    assert regions["pipeline"] == "brain_mr" and regions["framing"] == "head"
    layers = {x["id"]: x["default"] for x in regions["layers"]}
    assert layers["body"] is False and layers["hemi_L"] is True
    skin = next(r for r in regions["regions"] if r["key"] == "H|skin")
    assert skin["structure"] == "skin" and skin["inner"] is False


def test_brain_model_with_tof_series_adds_vessels(tmp_path):
    brain = fake_hooks._phantom()
    d = write_fake_study(tmp_path, brain)
    study = StudyInfo.model_validate_json((d / "study.json").read_text())
    tof = _shifted(tof_phantom().volume, SHIFT)
    write_volume_series(d, "s003", tof, modality="MR", sequence="TOF", region="vessels")
    study.series.append(series_info("s003", tof, modality="MR", sequence="TOF", region="vessels"))
    write_study(d, study)
    hl = partial(head_layers, register=_known(SHIFT))
    ctx = FakeCtx({}, tmp_path)
    BrainMRPipeline(fake_hooks.build_volumes, fake_hooks.best_backend, head_layers=hl).run(ctx, d, study)
    scene = _glb(d)
    nodes = set(scene.graph.nodes_geometry)
    assert {"H__skin", "V__cow", "V__neck"} <= nodes and all(valid_node_name(n) for n in nodes)
    regions = json.loads((d / "model" / "regions.json").read_text())
    assert {r["key"].replace("|", "__") for r in regions["regions"]} == nodes
    layers = {x["id"]: x["default"] for x in regions["layers"]}
    assert layers["vessel"] is False
    stats = json.loads((d / "model" / "stats.json").read_text())
    assert stats["regions"]["V|cow"]["measurements"][0]["key"] == "vessel_volume"
    assert "L|hippocampus" in stats["regions"]  # brain stats untouched
    # vessel vertices are in the brain model's space (the shift was undone)
    geom = scene.geometry[scene.graph["V__cow"][1]]
    d_cl, _ = cKDTree(tof_phantom().centreline).query(viewer_to_lps(np.asarray(geom.vertices)))
    assert np.median(d_cl) < 3.0


def test_layer_failure_never_fails_the_brain_model(tmp_path):
    d = write_fake_study(tmp_path, fake_hooks._phantom())
    study = StudyInfo.model_validate_json((d / "study.json").read_text())

    def boom(*a, **k):
        raise RuntimeError("synthetic failure")

    ctx = FakeCtx({}, tmp_path)
    BrainMRPipeline(fake_hooks.build_volumes, fake_hooks.best_backend, head_layers=boom).run(ctx, d, study)
    status = json.loads((d / "model" / "status.json").read_text())
    assert any("head surface" in w for w in status["warnings"])
    assert "H__skin" not in set(_glb(d).graph.nodes_geometry)
