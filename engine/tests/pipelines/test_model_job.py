"""Pipeline API + model job end to end (fake fusion/segmentation on the synthetic phantom)."""

import io
import json
import time
from typing import ClassVar

import numpy as np
import pytest
import trimesh
from PIL import Image

from medmereport.core.models import SeriesInfo, StudyInfo
from medmereport.core.studies import write_study
from medmereport.geometry.glb import valid_node_name
from medmereport.pipelines import registry
from medmereport.pipelines.base import PipelineError, PipelinePlan, Stage, StageProgress, provenance
from medmereport.pipelines.brain_mr.pipeline import HOOKS_ENV, BrainMRPipeline, model_job
from medmereport.server.jobs import Cancelled
from tests.conftest import PORT
from tests.geometry.phantom import write_fake_study
from tests.pipelines import fake_hooks
from tests.pipelines.helpers import FakeCtx

H = {"Origin": f"http://127.0.0.1:{PORT}"}


class DummyPipeline:
    name: ClassVar[str] = "dummy"
    version: ClassVar[str] = "0.0.1"

    def applies(self, study):
        return 0.1

    def plan(self, study):
        return PipelinePlan("dummy", [Stage("a", 1), Stage("b", 3)])

    def run(self, ctx, study_dir, study):
        sp = StageProgress(ctx, self.plan(study))
        for stage in ("a", "b"):
            for pct in (0, 50, 100):
                sp(stage, pct)
        (study_dir / "dummy.json").write_text(json.dumps(provenance(self)))
        return {"ok": True}


def _mr_study(study_id="x"):
    s = SeriesInfo(id="s001", modality="MR", body_part="brain", plane="axial", sequence="FLAIR", n_images=30)
    return StudyInfo(id=study_id, adapter="loose", series=[s])


def test_dummy_pipeline_runs_end_to_end(tmp_path, monkeypatch):
    monkeypatch.setitem(registry._FACTORIES, "dummy", DummyPipeline)
    write_study(tmp_path, StudyInfo(id="x", adapter="loose"))
    ctx = FakeCtx({"study_dir": str(tmp_path), "pipeline": "dummy"}, tmp_path)
    assert model_job(ctx) == {"ok": True}
    pcts = [e[1] for e in ctx.events if e[0] in ("a", "b")]
    assert pcts == sorted(pcts) and pcts[0] == 0 and pcts[-1] == 100
    assert pcts[2] == pytest.approx(25)  # stage a = 1/4 of the weight
    prov = json.loads((tmp_path / "dummy.json").read_text())
    assert prov["pipeline"] == "dummy" and prov["version"] == "0.0.1" and "created" in prov


def test_choose_pipeline():
    assert registry.choose_pipeline(_mr_study()) == "brain_mr"
    xr = StudyInfo(id="y", adapter="images", series=[SeriesInfo(id="p000", modality="XC", plane="projection")])
    assert registry.choose_pipeline(xr) is None
    with pytest.raises(PipelineError) as e:
        registry.get_pipeline("nope")
    assert e.value.code == "unknown_pipeline"


def test_cancellation_propagates(tmp_path):
    d = write_fake_study(tmp_path, fake_hooks._phantom())
    study = StudyInfo.model_validate_json((d / "study.json").read_text())
    ctx = FakeCtx({}, tmp_path, cancel_after=3)
    with pytest.raises(Cancelled):
        BrainMRPipeline(fake_hooks.build_volumes, fake_hooks.best_backend).run(ctx, d, study)


def test_no_backend_is_a_coded_error(tmp_path):
    d = write_fake_study(tmp_path, fake_hooks._phantom())
    study = StudyInfo.model_validate_json((d / "study.json").read_text())
    with pytest.raises(PipelineError) as e:
        BrainMRPipeline(fake_hooks.build_volumes, lambda ref: None).run(FakeCtx({}, tmp_path), d, study)
    assert e.value.code == "no_backend"


def _wait(c, jid, timeout=240):
    t = time.time()
    while time.time() - t < timeout:
        info = c.get(f"/api/jobs/{jid}").json()
        if info["status"] in ("done", "failed", "cancelled"):
            return info
        time.sleep(0.3)
    raise AssertionError("model job did not finish")


def test_model_job_via_http_produces_contract_artifacts(authed, monkeypatch):
    monkeypatch.setenv(HOOKS_ENV, "tests.pipelines.fake_hooks")
    store = authed.app.app.state.store
    sid = store.new_id()
    write_fake_study(store.session_root, fake_hooks._phantom(), study_id=sid)

    assert authed.post("/api/studies/nope123/model", json={}, headers=H).status_code == 404
    r = authed.post(f"/api/studies/{sid}/model", json={"pipeline": "auto"}, headers=H)
    assert r.status_code == 200, r.text
    assert r.json()["kind"] == "model"
    info = _wait(authed, r.json()["id"])
    assert info["status"] == "done", info
    assert info["result"]["model"] == "model/"

    def get(rel):
        resp = authed.get(f"/api/studies/{sid}/files/{rel}")
        assert resp.status_code == 200, rel
        return resp

    glb = get("model/scene.glb").content
    scene = trimesh.load(io.BytesIO(glb), file_type="glb", force="scene")
    nodes = set(scene.graph.nodes_geometry)
    assert nodes and all(valid_node_name(n) for n in nodes)

    regions = get("model/regions.json").json()
    assert regions["backend"] == "phantom@1" and regions["licence"]
    assert {r["key"].replace("|", "__") for r in regions["regions"]} == nodes
    for reg in regions["regions"]:
        assert reg["hemi"] in "LRM" and len(reg["centroid"]) == 3

    stats = get("model/stats.json").json()
    assert stats["summary"]["brain_tissue_volume"]["value"] > 900
    th = stats["regions"]["L|hippocampus"]
    assert any(m["key"] == "adc_median" for m in th["measurements"])
    assert {t["view"] for t in th["thumbs"]} == {"axial", "sagittal", "coronal"}
    for t in th["thumbs"]:
        assert get(t["img"]).headers["content-type"].startswith("image/")

    status = get("model/status.json").json()
    assert status["pipeline"] == "brain_mr" and "version" in status and "created" in status
    assert isinstance(status["warnings"], list)

    meta = get("series/s001/meta.json").json()
    assert meta["labels"] is True
    code = next(int(c) for c, k in meta["labelTable"].items() if k == "L|hippocampus")
    ax = next(t for t in th["thumbs"] if t["view"] == "axial")
    lab = np.asarray(Image.open(io.BytesIO(get(f"series/s001/L{ax['slice']:03d}.png").content)))
    assert (lab == code).any()
    assert {str(v) for v in np.unique(lab) if v} <= set(meta["labelTable"])


def test_model_route_rejects_study_without_pipeline(authed):
    store = authed.app.app.state.store
    sid = store.new_id()
    d = store.create_dir(sid, False)
    write_study(d, StudyInfo(id=sid, adapter="images", series=[SeriesInfo(id="p000", modality="XC")]))
    assert authed.post(f"/api/studies/{sid}/model", json={}, headers=H).status_code == 422
    assert authed.post(f"/api/studies/{sid}/model", json={"pipeline": "Bad Name"}, headers=H).status_code == 422
