"""End-to-end import through the HTTP API for every supported container type (synthetic data only)."""

import json
import time

import pytest

from tests.conftest import PORT
from tests.fixtures import containers as C
from tests.fixtures.synth import FAKE_NAME

H = {"Origin": f"http://127.0.0.1:{PORT}"}
PW = "Correct-Horse-7"


def _wait(c, jid, timeout=180):
    t = time.time()
    while time.time() - t < timeout:
        info = c.get(f"/api/jobs/{jid}").json()
        if info["status"] in ("done", "failed", "cancelled"):
            return info
        time.sleep(0.3)
    raise AssertionError("import did not finish")


def _import(c, path, password=None):
    body = {"path": str(path)}
    if password is not None:
        body["password"] = password
    r = c.post("/api/import", json=body, headers=H)
    assert r.status_code == 200, r.text
    return _wait(c, r.json()["id"])


@pytest.mark.parametrize(
    "builder,password",
    [
        (lambda d: C.make_dicomdir_disc(d / "disc"), None),
        (lambda d: C.make_dcmburner_disc(d / "disc", PW), PW),
        (lambda d: C.make_radiant_disc(d / "disc", PW), PW),
        (lambda d: C.make_portal_zip(d / "scan.zip"), None),
        (lambda d: C.make_portal_7z(d / "scan.7z"), None),
        (lambda d: C.make_loose_folder(d / "loose"), None),
    ],
    ids=["dicomdir", "dcmburner", "radiant", "zip", "7z", "loose"],
)
def test_import_each_container(authed, tmp_path, builder, password):
    src = builder(tmp_path)
    info = _import(authed, src, password)
    assert info["status"] == "done", info
    sid = info["result"]["study_id"]
    study = authed.get(f"/api/studies/{sid}").json()
    assert study["series"], study
    s0 = study["series"][0]
    meta = authed.get(f"/api/studies/{sid}/files/series/{s0['id']}/meta.json").json()
    assert meta["n"] == s0["n_images"] > 0
    img = authed.get(f"/api/studies/{sid}/files/series/{s0['id']}/000.{meta['ext']}")
    assert img.status_code == 200 and len(img.content) > 50


def test_encrypted_disc_password_flow(authed, tmp_path):
    src = C.make_dcmburner_disc(tmp_path / "disc", PW)
    info = _import(authed, src)
    assert info["status"] == "failed" and info["result"]["code"] == "password_required"
    info = _import(authed, src, "wrong-password")
    assert info["status"] == "failed" and info["result"]["code"] == "wrong_password"
    assert _import(authed, src, PW)["status"] == "done"


def test_axial_order_superior_first_and_sagittal_right_to_left(authed, tmp_path):
    src = C.make_loose_folder(tmp_path / "loose")
    sid = _import(authed, src)["result"]["study_id"]
    study = authed.get(f"/api/studies/{sid}").json()
    for s in study["series"]:
        meta = authed.get(f"/api/studies/{sid}/files/series/{s['id']}/meta.json").json()
        pos = [sl["pos"] for sl in meta["slices"]]
        if len(pos) < 2:
            continue
        if meta["plane"] == "axial":
            assert pos[0][2] > pos[-1][2]
        if meta["plane"] == "sagittal":
            assert pos[0][0] < pos[-1][0]


def test_xray_images_become_photo_series(authed, tmp_path):
    root = tmp_path / "xr"
    C.make_xray_images(root)
    info = _import(authed, root)
    assert info["status"] == "done", info
    study = authed.get(f"/api/studies/{info['result']['study_id']}").json()
    assert all(s["role"] == "photo" for s in study["series"])
    meta = authed.get(f"/api/studies/{study['id']}/files/series/{study['series'][0]['id']}/meta.json").json()
    assert meta["pixelSpacing"] is None


def test_empty_folder_reports_no_images(authed, tmp_path):
    (tmp_path / "empty").mkdir()
    (tmp_path / "empty" / "readme.txt").write_text("nothing here")
    info = _import(authed, tmp_path / "empty")
    assert info["status"] == "failed" and info["result"]["code"] in ("no_images", "unsupported")


def test_file_route_blocks_traversal(authed, tmp_path):
    sid = _import(authed, C.make_portal_zip(tmp_path / "s.zip"))["result"]["study_id"]
    for bad in ("../../etc/passwd", "..%2F..%2Fsecret", "study.json"):
        assert authed.get(f"/api/studies/{sid}/files/{bad}").status_code == 404


def test_patient_name_never_in_artifact_meta(authed, tmp_path):
    sid = _import(authed, C.make_portal_zip(tmp_path / "s.zip"))["result"]["study_id"]
    study = authed.get(f"/api/studies/{sid}").json()
    for s in study["series"]:
        meta = authed.get(f"/api/studies/{sid}/files/series/{s['id']}/meta.json").text
        assert FAKE_NAME.split("^")[0] not in meta
        json.loads(meta)


def test_fs_listing_and_inspect(authed, tmp_path):
    disc = C.make_dcmburner_disc(tmp_path / "disc", PW)
    listing = authed.get("/api/fs/list", params={"path": str(tmp_path)}).json()
    assert any(e["hint"] == "dcmburner" for e in listing["entries"])
    det = authed.post("/api/inspect", json={"path": str(disc)}, headers=H).json()
    assert det["adapter"] == "dcmburner" and det["encrypted"] is True
    assert authed.get("/api/fs/roots").status_code == 200
