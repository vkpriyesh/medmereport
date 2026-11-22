"""In-app model downloads (T7.7): listing, pull job against a local HTTP fixture, checksum, cancel, offline."""

from __future__ import annotations

import hashlib
import json
import threading
import time
from collections.abc import Iterator
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

import pytest

from medmereport.models import registry as R
from tests.conftest import PORT

H = {"Origin": f"http://127.0.0.1:{PORT}"}
PAYLOAD_A = bytes(range(256)) * 600  # 153.6 kB
PAYLOAD_B = b"medmereport-fake-weights" * 4000


class _Fixture:
    def __init__(self) -> None:
        self.files: dict[str, bytes] = {}
        self.delay = 0.0  # seconds per 16 kB chunk (to make cancel testable)
        self.redirect: dict[str, str] = {}
        self.hits: list[str] = []


def _handler(fx: _Fixture) -> type[BaseHTTPRequestHandler]:
    class Handler(BaseHTTPRequestHandler):
        def log_message(self, *a: object) -> None:
            pass

        def do_GET(self) -> None:  # noqa: N802
            fx.hits.append(self.path)
            if self.path in fx.redirect:
                self.send_response(302)
                self.send_header("Location", fx.redirect[self.path])
                self.end_headers()
                return
            data = fx.files.get(self.path)
            if data is None:
                self.send_error(404)
                return
            start = 0
            rng = self.headers.get("Range")
            if rng and rng.startswith("bytes="):
                start = int(rng[6:].split("-")[0])
            self.send_response(206 if start else 200)
            self.send_header("Content-Length", str(len(data) - start))
            self.end_headers()
            try:
                for i in range(start, len(data), 16384):
                    self.wfile.write(data[i : i + 16384])
                    if fx.delay:
                        time.sleep(fx.delay)
            except OSError:
                pass

    return Handler


@pytest.fixture
def fixture_server() -> Iterator[tuple[_Fixture, str]]:
    fx = _Fixture()
    srv = ThreadingHTTPServer(("127.0.0.1", 0), _handler(fx))
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    yield fx, f"http://127.0.0.1:{srv.server_address[1]}"
    srv.shutdown()
    srv.server_close()


def _asset(name: str, url: str, data: bytes, bundle: str, sha: str | None = None) -> dict[str, object]:
    return {
        "name": name,
        "filename": f"test-models/{name}.bin",
        "url": url,
        "sha256": sha or hashlib.sha256(data).hexdigest(),
        "size": len(data),
        "licence": "CC0-1.0 (test)",
        "attribution": "medmereport test fixture",
        "description": f"fake {name}",
        "bundle": bundle,
    }


@pytest.fixture
def manifest(tmp_path: Path, monkeypatch: pytest.MonkeyPatch, fixture_server):
    """Install a fake bundle (parent process and, via the env, the spawned job worker)."""
    fx, base = fixture_server

    def make(rows: list[dict[str, object]]) -> None:
        f = tmp_path / "manifest.json"
        f.write_text(json.dumps(rows), encoding="utf-8")
        monkeypatch.setenv("MEDMEREPORT_TEST_MODELS", str(f))
        monkeypatch.setattr(R, "ASSETS", dict(R.ASSETS))  # restored after the test
        R._overlay_test_manifest()
        for r in rows:
            for p in (R.path(str(r["name"])), R.path(str(r["name"])).with_name(f"{r['name']}.bin.part")):
                p.unlink(missing_ok=True)

    yield fx, base, make
    for p in (R.models_dir() / "test-models").glob("*"):
        p.unlink(missing_ok=True)


def _wait(c, jid: str, timeout: float = 60) -> dict:
    t = time.time()
    while time.time() - t < timeout:
        info = c.get(f"/api/jobs/{jid}").json()
        if info["status"] in ("done", "failed", "cancelled"):
            return info
        time.sleep(0.1)
    raise AssertionError("job did not finish")


def test_listing_describes_real_bundles(authed, egress_guard):
    out = authed.get("/api/models").json()
    by = {b["id"]: b for b in out["bundles"]}
    assert {"atlas-ho", "synthseg", "totalseg"} <= set(by)
    assert by["atlas-ho"]["hosts"] == ["templateflow.s3.amazonaws.com"]
    assert by["synthseg"]["hosts"] == ["github.com"]
    assert by["synthseg"]["size"] == sum(a["size"] for a in by["synthseg"]["assets"]) > 300e6
    assert "Better brain labels" in by["synthseg"]["enables"]
    assert all(b["credits"] and b["credits"][0]["licence"] for b in by.values())
    assert out["offline"] is False
    assert out["brain"]["state"] in ("none", "atlas", "synthseg")
    assert authed.get("/api/capabilities").json()["model_downloads"] is True


def test_pull_job_downloads_and_verifies(authed, manifest):
    fx, base, make = manifest
    fx.files = {"/a.bin": PAYLOAD_A, "/b.bin": PAYLOAD_B}
    make([_asset("tfa", base + "/a.bin", PAYLOAD_A, "tfake"), _asset("tfb", base + "/b.bin", PAYLOAD_B, "tfake")])
    before = {b["id"]: b for b in authed.get("/api/models").json()["bundles"]}["tfake"]
    assert not before["installed"] and before["download_size"] == len(PAYLOAD_A) + len(PAYLOAD_B)

    job = authed.post("/api/models/pull", json={"bundle": "tfake"}, headers=H).json()
    assert job["kind"] == "models"
    info = _wait(authed, job["id"])
    assert info["status"] == "done", info
    assert info["result"]["assets"] == ["tfa", "tfb"]
    assert R.path("tfa").read_bytes() == PAYLOAD_A and R.path("tfb").read_bytes() == PAYLOAD_B
    assert not list((R.models_dir() / "test-models").glob("*.part"))
    stages = [e["stage"] for e in authed.get(f"/api/jobs/{job['id']}/history").json()]
    assert "download" in stages and stages[-1] == "done"

    after = {b["id"]: b for b in authed.get("/api/models").json()["bundles"]}["tfake"]
    assert after["installed"] and after["download_size"] == 0
    # a second pull finds the verified files and downloads nothing
    n = len(fx.hits)
    assert (
        _wait(authed, authed.post("/api/models/pull", json={"bundle": "tfake"}, headers=H).json()["id"])["status"]
        == "done"
    )
    assert len(fx.hits) == n


def test_checksum_mismatch_fails_with_code_and_leaves_nothing(authed, manifest):
    fx, base, make = manifest
    fx.files = {"/a.bin": PAYLOAD_A}
    make([_asset("tfbad", base + "/a.bin", PAYLOAD_A, "tbad", sha="0" * 64)])
    info = _wait(authed, authed.post("/api/models/pull", json={"bundle": "tbad"}, headers=H).json()["id"])
    assert info["status"] == "failed" and info["result"]["code"] == "checksum_mismatch"
    assert not R.path("tfbad").exists()
    assert not R.path("tfbad").with_name("tfbad.bin.part").exists()


def test_cancel_removes_partial_file(authed, manifest):
    fx, base, make = manifest
    big = PAYLOAD_A * 8  # ~1.2 MB at 16 kB / 50 ms: ~4 s
    fx.files, fx.delay = {"/big.bin": big}, 0.05
    make([_asset("tfslow", base + "/big.bin", big, "tslow")])
    jid = authed.post("/api/models/pull", json={"bundle": "tslow"}, headers=H).json()["id"]
    part = R.path("tfslow").with_name("tfslow.bin.part")
    t = time.time()
    while not part.exists() and time.time() - t < 30:
        time.sleep(0.05)
    assert part.exists(), "download never started"
    assert authed.delete(f"/api/jobs/{jid}", headers=H).status_code == 200
    assert _wait(authed, jid)["status"] == "cancelled"
    assert not part.exists() and not R.path("tfslow").exists()


def test_redirect_to_unpinned_host_is_refused(authed, manifest):
    fx, base, make = manifest
    fx.files = {"/a.bin": PAYLOAD_A}
    fx.redirect = {"/r.bin": "https://example.com/a.bin"}
    make([_asset("tfredir", base + "/r.bin", PAYLOAD_A, "tredir")])
    info = _wait(authed, authed.post("/api/models/pull", json={"bundle": "tredir"}, headers=H).json()["id"])
    assert info["status"] == "failed" and info["result"]["code"] == "blocked_host"
    assert not R.path("tfredir").exists()


def test_offline_mode_refuses(authed, monkeypatch, capsys):
    monkeypatch.setenv("MEDMEREPORT_OFFLINE", "1")
    out = authed.get("/api/models").json()
    assert out["offline"] is True
    assert authed.get("/api/capabilities").json()["model_downloads"] is False
    r = authed.post("/api/models/pull", json={"bundle": "atlas-ho"}, headers=H)
    assert r.status_code == 403 and "MEDMEREPORT_OFFLINE" in r.json()["detail"]
    with pytest.raises(R.AssetError) as e:
        R.pull("ho-subcortical", force=True)
    assert e.value.code == "offline"
    from medmereport.cli.main import main

    assert main(["models", "pull", "atlas-ho"]) == 1
    assert "turned off" in capsys.readouterr().out


def test_unknown_or_invalid_bundle(authed):
    assert authed.post("/api/models/pull", json={"bundle": "nope"}, headers=H).status_code == 404
    assert authed.post("/api/models/pull", json={"bundle": "../x"}, headers=H).status_code == 422


def test_routes_in_openapi(authed):
    paths = authed.get("/api/openapi.json").json()["paths"]
    assert "/api/models" in paths and "/api/models/pull" in paths
