import os
import socket
import tempfile

import pytest

# Isolate all app data in a throwaway directory for the whole test session.
_HOME = tempfile.mkdtemp(prefix="mmr-test-home-")
os.environ["MEDMEREPORT_HOME"] = _HOME

PORT = 48123
TOKEN = "t" * 43


@pytest.fixture
def app_client():
    from fastapi.testclient import TestClient

    from medmereport.core.paths import SessionTemp
    from medmereport.server.app import create_app, secure_asgi

    s = SessionTemp()
    app = create_app(port=PORT, token=TOKEN, session=s)
    with TestClient(secure_asgi(app), base_url=f"http://127.0.0.1:{PORT}") as c:
        yield c
    s.close()


@pytest.fixture
def authed(app_client):
    r = app_client.post("/api/session", json={"token": TOKEN}, headers={"Origin": f"http://127.0.0.1:{PORT}"})
    assert r.status_code == 200
    return app_client


class _EgressGuard:
    """Fails the test if code tries to connect anywhere other than loopback."""

    def __init__(self):
        self.violations = []
        self._orig = socket.socket.connect

    def __enter__(self):
        guard = self

        def connect(sock, address):
            host = address[0] if isinstance(address, tuple) else str(address)
            if host not in ("127.0.0.1", "::1", "localhost") and not str(host).startswith("127."):
                guard.violations.append(address)
                raise OSError(f"medmereport egress guard: blocked outbound connection to {address}")
            return guard._orig(sock, address)

        socket.socket.connect = connect
        return self

    def __exit__(self, *exc):
        socket.socket.connect = self._orig


@pytest.fixture
def egress_guard():
    with _EgressGuard() as g:
        yield g
    assert not g.violations, f"Outbound network connections attempted: {g.violations}"
