import json
import time

from tests.conftest import PORT

H = {"Origin": f"http://127.0.0.1:{PORT}"}


def _wait(c, jid, timeout=60):
    t = time.time()
    while time.time() - t < timeout:
        info = c.get(f"/api/jobs/{jid}").json()
        if info["status"] in ("done", "failed", "cancelled"):
            return info
        time.sleep(0.2)
    raise AssertionError("job did not finish")


def test_demo_job_completes_with_progress(authed):
    jid = authed.post("/api/jobs/demo", json={"steps": 3, "delay": 0.05}, headers=H).json()["id"]
    info = _wait(authed, jid)
    assert info["status"] == "done" and info["result"] == {"steps": 3}
    with authed.stream("GET", f"/api/jobs/{jid}/events") as r:
        body = "".join(r.iter_text())
    events = [json.loads(line[6:]) for line in body.splitlines() if line.startswith("data: ")]
    stages = [e.get("stage") for e in events if "stage" in e]
    assert "step 1/3" in stages
    assert any(s == "done" for s in stages)


def test_demo_job_failure_reported(authed):
    jid = authed.post("/api/jobs/demo", json={"steps": 1, "delay": 0.01, "fail": True}, headers=H).json()["id"]
    info = _wait(authed, jid)
    assert info["status"] == "failed" and "demo failure" in info["error"]


def test_demo_job_cancel(authed):
    jid = authed.post("/api/jobs/demo", json={"steps": 50, "delay": 0.2}, headers=H).json()["id"]
    time.sleep(2.0)
    assert authed.delete(f"/api/jobs/{jid}", headers=H).status_code == 200
    assert _wait(authed, jid)["status"] == "cancelled"
