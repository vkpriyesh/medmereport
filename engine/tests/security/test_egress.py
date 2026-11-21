"""CI gate: nothing in the engine may open outbound network connections at runtime."""

from tests.conftest import PORT

H = {"Origin": f"http://127.0.0.1:{PORT}"}


def test_no_egress_during_serve_flow(egress_guard, authed):
    authed.get("/api/capabilities")
    authed.get("/")
    authed.post("/api/jobs/demo", json={"steps": 1, "delay": 0.01}, headers=H)
