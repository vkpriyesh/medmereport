"""§6 routes: GET /api/studies/{id}/model/options and POST /model {pipeline, backend} for CT and spine."""

import time

from medmereport.core.models import SeriesInfo, StudyInfo
from medmereport.core.studies import write_study
from medmereport.pipelines.importer import import_job
from tests.conftest import PORT
from tests.fixtures.synth_ct import write_ct_series
from tests.pipelines.helpers import FakeCtx

H = {"Origin": f"http://127.0.0.1:{PORT}"}


def _wait(c, jid, timeout=180):
    t = time.time()
    while time.time() - t < timeout:
        info = c.get(f"/api/jobs/{jid}").json()
        if info["status"] in ("done", "failed", "cancelled"):
            return info
        time.sleep(0.3)
    raise AssertionError("model job did not finish")


def _study(authed, series):
    store = authed.app.app.state.store
    sid = store.new_id()
    d = store.create_dir(sid, False)
    write_study(d, StudyInfo(id=sid, adapter="loose", series=series))
    return sid


def test_options_list_applicable_pipelines(authed):
    sid = _study(authed, [
        SeriesInfo(id="s000", modality="MR", body_part="spine", plane="sagittal", sequence="T2", n_images=15),
        SeriesInfo(id="s001", modality="CT", body_part="chest", plane="axial", sequence="CT", n_images=100),
    ])  # fmt: skip
    r = authed.get(f"/api/studies/{sid}/model/options")
    assert r.status_code == 200, r.text
    body = r.json()
    opts = {o["pipeline"]: o for o in body["options"]}
    assert {"ct_body", "spine_mr"} <= set(opts) and "brain_mr" not in opts
    ct = {b["id"]: b for b in opts["ct_body"]["backends"]}
    assert ct["classical"] == {"id": "classical", "available": True, "reason": None, "licence": None, "default": True}
    # optional extra not installed in the dev venv: listed, but unavailable with a plain-language reason
    assert ct["totalseg"]["available"] is False and ct["totalseg"]["default"] is False
    assert "medmereport[totalseg]" in ct["totalseg"]["reason"]
    assert "Apache-2.0" in ct["totalseg"]["licence"]
    assert [b["id"] for b in opts["spine_mr"]["backends"]] == ["classical"]
    assert body["auto"] in ("ct_body", "spine_mr")
    assert [o["score"] for o in body["options"]] == sorted((o["score"] for o in body["options"]), reverse=True)
    assert authed.get("/api/studies/nope123/model/options").status_code == 404


def test_unavailable_backend_rejected(authed):
    sid = _study(authed, [SeriesInfo(id="s001", modality="CT", plane="axial", sequence="CT", n_images=100)])
    r = authed.post(f"/api/studies/{sid}/model", json={"pipeline": "ct_body", "backend": "totalseg"}, headers=H)
    assert r.status_code == 422
    r = authed.post(f"/api/studies/{sid}/model", json={"pipeline": "ct_body", "backend": "nonsense"}, headers=H)
    assert r.status_code == 422


def test_ct_model_job_via_http(authed, tmp_path):
    store = authed.app.app.state.store
    sid = store.new_id()
    out = store.session_root / sid
    write_ct_series(tmp_path / "src")
    (tmp_path / "work").mkdir()
    import_job(FakeCtx({"src": str(tmp_path / "src"), "out": str(out), "study_id": sid}, tmp_path / "work"))
    r = authed.post(f"/api/studies/{sid}/model", json={"pipeline": "auto", "backend": "classical"}, headers=H)
    assert r.status_code == 200, r.text
    info = _wait(authed, r.json()["id"])
    assert info["status"] == "done", info
    regions = authed.get(f"/api/studies/{sid}/files/model/regions.json").json()
    assert regions["pipeline"] == "ct_body" and regions["framing"] == "body"
    assert authed.get(f"/api/studies/{sid}/files/model/scene.glb").status_code == 200


def test_backend_options_reasons_and_probe_failures():
    from medmereport.server.routes_model import _backend_options, _backends

    class Broken:
        def backends(self):
            raise RuntimeError("probe failed")

    class Fake:
        def backends(self):
            return {"classical": True, "totalseg": False}

        def backend_reasons(self):
            return {"totalseg": "weights missing"}

    assert [(o.id, o.available, o.default) for o in _backend_options(Broken())] == [("classical", True, True)]
    opts = _backend_options(Fake())
    assert opts[1].reason == "weights missing" and not opts[1].available
    assert _backends(Fake()) == ["classical"]
    assert _backend_options(object())[0].id == "classical"
