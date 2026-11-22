"""CI gate: nothing in the engine may open outbound network connections at runtime.

The one exception is the explicit model download (``POST /api/models/pull``): its job worker may reach only
the hosts pinned in ``models/registry.py``. Every other job worker (import, model building, demo) runs with
a loopback-only guard, and the server process itself never connects anywhere (checked by ``egress_guard``).
"""

import socket
import time

import pytest

from medmereport.core import egress
from medmereport.models import registry as R
from medmereport.server import jobs as J
from tests.conftest import PORT

H = {"Origin": f"http://127.0.0.1:{PORT}"}
PINNED = {"templateflow.s3.amazonaws.com", "github.com"}
GITHUB_REDIRECTS = set(R.REDIRECT_HOSTS["github.com"])


def _wait(c, jid, timeout=60):
    t = time.time()
    while time.time() - t < timeout:
        info = c.get(f"/api/jobs/{jid}").json()
        if info["status"] in ("done", "failed", "cancelled"):
            return info
        time.sleep(0.1)
    raise AssertionError("job did not finish")


def test_no_egress_during_serve_flow(egress_guard, authed):
    authed.get("/api/capabilities")
    authed.get("/")
    authed.get("/api/models")  # listing models is local only
    authed.post("/api/jobs/demo", json={"steps": 1, "delay": 0.01}, headers=H)


def test_only_the_download_job_gets_network_and_only_to_pinned_hosts():
    assert R.allowed_hosts() == PINNED | GITHUB_REDIRECTS
    assert J._allowed_hosts(J.PULL_TARGET) == PINNED | GITHUB_REDIRECTS
    for target in (
        "medmereport.server.jobs:demo_job",
        "medmereport.pipelines.importer:import_job",
        "medmereport.pipelines.brain_mr.pipeline:model_job",
        "tests.security.egress_jobs:probe_job",
    ):
        assert J._allowed_hosts(target) == set()


def test_ordinary_job_workers_are_loopback_only(authed, egress_guard):
    jid = authed.app.app.state.jobs.submit("demo", "tests.security.egress_jobs:probe_job", {}).id
    info = _wait(authed, jid)
    assert info["status"] == "done", info
    assert info["result"] == {"allowed": [], "dns": "blocked", "ip": "blocked"}


def test_guard_blocks_unpinned_and_allows_loopback():
    egress.install({"github.com"})
    try:
        with pytest.raises(egress.EgressBlocked):
            socket.getaddrinfo("example.com", 443)
        s = socket.socket()
        try:
            with pytest.raises(egress.EgressBlocked):
                s.connect(("203.0.113.7", 443))  # not resolved from an allowed name
        finally:
            s.close()
        assert socket.getaddrinfo("127.0.0.1", 80)  # loopback still resolves
        assert egress.host_allowed("GitHub.com.", egress.allowed())
        assert not egress.host_allowed("evil-github.com", egress.allowed())
        assert not egress.host_allowed("github.com.evil.net", egress.allowed())
    finally:
        egress.uninstall()


def test_download_urls_must_be_pinned():
    with pytest.raises(R.AssetError) as e:
        R._open("https://example.com/weights.onnx", 0)
    assert e.value.code == "blocked_host"
    with pytest.raises(R.AssetError):
        R._check_url("http://github.com/x")  # https only
    R._check_url("https://github.com/vkpriyesh/medmereport/releases/download/x/y.onnx")
    R._check_url("https://release-assets.githubusercontent.com/x")
