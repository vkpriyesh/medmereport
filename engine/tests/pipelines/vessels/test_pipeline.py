"""``vessels`` pipeline end to end on synthetic angiography studies: contract artifacts (API_CONTRACT §5/§6)."""

import io
import json

import numpy as np
import pytest
import trimesh

from medmereport.core.models import SeriesInfo, StudyInfo
from medmereport.geometry.glb import valid_node_name
from medmereport.geometry.space import viewer_to_lps
from medmereport.pipelines import registry
from medmereport.pipelines.base import PipelineError
from medmereport.pipelines.vessels.pipeline import VesselsPipeline
from tests.fixtures.synth_vessels import SPINE, cta_phantom, tof_phantom, write_angio_study
from tests.pipelines.helpers import FakeCtx


def _load(d):
    model = d / "model"
    scene = trimesh.load(io.BytesIO((model / "scene.glb").read_bytes()), file_type="glb", force="scene")
    regions = json.loads((model / "regions.json").read_text())
    stats = json.loads((model / "stats.json").read_text())
    status = json.loads((model / "status.json").read_text())
    return scene, regions, stats, status


def _vertices(scene, node):
    geom = scene.geometry[scene.graph[node][1]]
    return viewer_to_lps(np.asarray(geom.vertices))


def _check_contract(scene, regions, stats, status):
    nodes = set(scene.graph.nodes_geometry)
    assert nodes and all(valid_node_name(n) for n in nodes)
    assert {r["key"].replace("|", "__") for r in regions["regions"]} == nodes
    for r in regions["regions"]:
        assert r["hemi"] in "LRM" and len(r["centroid"]) == 3 and r["group"] in ("vessel", "body")
    assert regions["pipeline"] == "vessels" and regions["backend"] and regions["licence"]
    assert any(layer["id"] == "vessel" and layer["default"] for layer in regions["layers"])
    for key, reg in stats["regions"].items():
        for m in reg["measurements"]:
            assert m["method"] and m["caveats"] and m["unit"] == "cm³"
    assert stats["summary"]["vessel_volume"]["value"] > 0
    assert status["pipeline"] == "vessels" and "created" in status and isinstance(status["warnings"], list)
    return nodes


def test_applies_scores_and_registry():
    tof = SeriesInfo(id="s1", modality="MR", body_part="vessels", plane="axial", sequence="TOF", n_images=120)
    cta = SeriesInfo(id="s2", modality="CT", body_part="vessels", plane="axial", sequence="CTA", n_images=300)
    t1 = SeriesInfo(id="s3", modality="MR", body_part="brain", plane="axial", sequence="T1", n_images=150)
    p = VesselsPipeline()
    assert p.applies(StudyInfo(id="a", adapter="loose", series=[tof])) > 0
    assert p.applies(StudyInfo(id="b", adapter="loose", series=[cta])) > 0
    assert p.applies(StudyInfo(id="c", adapter="loose", series=[t1])) == 0
    assert "vessels" in registry.names()
    assert registry.choose_pipeline(StudyInfo(id="a", adapter="loose", series=[tof])) == "vessels"
    assert registry.choose_pipeline(StudyInfo(id="b", adapter="loose", series=[cta])) == "vessels"
    # a brain study with a TOF still builds the brain model (which then adds the vessels)
    assert registry.choose_pipeline(StudyInfo(id="c", adapter="loose", series=[t1, tof])) == "brain_mr"


def test_tof_study_end_to_end(tmp_path):
    ph = tof_phantom()
    d = write_angio_study(tmp_path, ph.volume, modality="MR", sequence="TOF")
    study = StudyInfo.model_validate_json((d / "study.json").read_text())
    ctx = FakeCtx({}, tmp_path)
    out = VesselsPipeline().run(ctx, d, study)
    assert out["model"] == "model/"
    scene, regions, stats, status = _load(d)
    nodes = _check_contract(scene, regions, stats, status)
    assert {"V__cow", "V__neck", "H__skin"} <= nodes
    assert regions["framing"] == "head"
    assert {r["structure"] for r in regions["regions"]} >= {"cerebral_arteries", "neck_arteries", "skin"}
    skin = next(layer for layer in regions["layers"] if layer["id"] == "body")
    assert skin["default"] is False
    for node in ("V__cow", "V__neck"):
        v = _vertices(scene, node)
        assert ph.skin_depth_mm(v).min() > 7.0  # no scalp/subcutaneous fat in the vessel mesh
    pcts = [e[1] for e in ctx.events if e[0] != "warning"]
    assert pcts == sorted(pcts)


def test_cta_study_end_to_end(tmp_path):
    ph = cta_phantom()
    d = write_angio_study(tmp_path, ph.volume, modality="CT", sequence="CTA")
    study = StudyInfo.model_validate_json((d / "study.json").read_text())
    VesselsPipeline().run(FakeCtx({}, tmp_path), d, study)
    scene, regions, stats, status = _load(d)
    nodes = _check_contract(scene, regions, stats, status)
    assert nodes == {"V__body"}
    assert regions["framing"] == "body"
    assert regions["regions"][0]["structure"] == "body_arteries"
    v = _vertices(scene, "V__body")
    (sx, sy), sr = SPINE
    assert np.hypot(v[:, 0] - sx, v[:, 1] - sy).min() > sr + 2  # bone excluded
    assert stats["regions"]["V|body"]["measurements"][0]["key"] == "vessel_volume"


def test_cta_without_full_precision_values_is_a_coded_error(tmp_path):
    ph = cta_phantom(spacing=3.0)
    d = write_angio_study(tmp_path, ph.volume, modality="CT", sequence="CTA")
    (d / "volumes" / "s001.npz").unlink()
    study = StudyInfo.model_validate_json((d / "study.json").read_text())
    with pytest.raises(PipelineError) as e:
        VesselsPipeline().run(FakeCtx({}, tmp_path), d, study)
    assert e.value.code == "no_hu"


def test_no_angio_series_is_a_coded_error(tmp_path):
    d = tmp_path / "x"
    d.mkdir()
    study = StudyInfo(id="x", adapter="loose", series=[])
    with pytest.raises(PipelineError) as e:
        VesselsPipeline().run(FakeCtx({}, tmp_path), d, study)
    assert e.value.code == "no_angio_series"
