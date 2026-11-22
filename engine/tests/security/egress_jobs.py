"""Job targets for the egress tests (imported by the spawned job worker)."""

from __future__ import annotations

import socket
from typing import Any


def probe_job(ctx: Any) -> dict[str, Any]:
    """Try a DNS lookup and a direct connection to a public address; report what the guard blocked."""
    from medmereport.core import egress

    out: dict[str, Any] = {"allowed": sorted(egress.allowed())}
    try:
        socket.getaddrinfo("example.com", 443)
        out["dns"] = "connected"
    except egress.EgressBlocked:
        out["dns"] = "blocked"
    except OSError:
        out["dns"] = "error"
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.settimeout(1)
    try:
        s.connect(("203.0.113.7", 443))  # TEST-NET-3: never routable
        out["ip"] = "connected"
    except egress.EgressBlocked:
        out["ip"] = "blocked"
    except OSError:
        out["ip"] = "error"
    finally:
        s.close()
    return out
