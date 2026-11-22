"""Process-wide outbound-network guard for job workers.

Every job worker installs this before running its job (see ``server/jobs.py``). It patches
``socket.getaddrinfo`` and ``socket.socket.connect`` so that:

* loopback (127.0.0.0/8, ::1, localhost) always works (local IPC, test fixtures);
* any other name lookup or connection fails with :class:`EgressBlocked`, unless the job was started with
  an explicit allow-list (only the model-download job is, with the hosts pinned in
  ``models/registry.py``). Connections are then allowed only to addresses those names resolved to.

It is a safety net, not the primary control: nothing in the engine is supposed to touch the network.
"""

from __future__ import annotations

import ipaddress
import socket
import threading
from collections.abc import Iterable
from typing import Any

_LOOPBACK_NAMES = {"localhost", "localhost.localdomain"}


class EgressBlocked(OSError):
    """An outbound connection the job is not allowed to make."""

    code = "egress_blocked"


def is_loopback(host: object) -> bool:
    h = str(host).strip("[]").lower()
    if h in _LOOPBACK_NAMES:
        return True
    try:
        return ipaddress.ip_address(h.split("%", 1)[0]).is_loopback
    except ValueError:
        return False


def host_allowed(host: str, allowed: Iterable[str]) -> bool:
    """Exact host-name match against the allow-list (no wildcards, case-insensitive)."""
    h = host.strip().rstrip(".").lower()
    return is_loopback(h) or h in {a.lower() for a in allowed}


class _State:
    def __init__(self) -> None:
        self.allowed: frozenset[str] = frozenset()
        self.resolved: set[str] = set()
        self.lock = threading.Lock()
        self.installed = False


_S = _State()
_orig_getaddrinfo = socket.getaddrinfo
_orig_connect = socket.socket.connect
_orig_connect_ex = socket.socket.connect_ex


def _getaddrinfo(host: Any, *args: Any, **kwargs: Any) -> Any:
    if host is None or is_loopback(host):
        return _orig_getaddrinfo(host, *args, **kwargs)
    name = host.decode() if isinstance(host, bytes) else str(host)
    if not host_allowed(name, _S.allowed):
        raise EgressBlocked(f"medmereport egress guard: blocked name lookup for {name!r}")
    out = _orig_getaddrinfo(host, *args, **kwargs)
    with _S.lock:
        _S.resolved.update(str(ai[4][0]) for ai in out)
    return out


def _target_ok(address: Any) -> bool:
    if not isinstance(address, tuple):  # AF_UNIX path etc.: local by definition
        return True
    host = str(address[0])
    if is_loopback(host):
        return True
    with _S.lock:
        return host in _S.resolved


def _connect(sock: socket.socket, address: Any) -> None:
    if not _target_ok(address):
        raise EgressBlocked(f"medmereport egress guard: blocked outbound connection to {address!r}")
    _orig_connect(sock, address)


def _connect_ex(sock: socket.socket, address: Any) -> int:
    if not _target_ok(address):
        raise EgressBlocked(f"medmereport egress guard: blocked outbound connection to {address!r}")
    return int(_orig_connect_ex(sock, address))


def install(allowed_hosts: Iterable[str] = ()) -> None:
    """Block all non-loopback networking in this process except to ``allowed_hosts`` (exact names)."""
    with _S.lock:
        _S.allowed = frozenset(h.lower() for h in allowed_hosts)
        _S.resolved = set()
        if not _S.installed:
            socket.getaddrinfo = _getaddrinfo
            socket.socket.connect = _connect  # type: ignore[method-assign,assignment]
            socket.socket.connect_ex = _connect_ex  # type: ignore[method-assign,assignment]
            _S.installed = True


def uninstall() -> None:
    with _S.lock:
        socket.getaddrinfo = _orig_getaddrinfo
        socket.socket.connect = _orig_connect  # type: ignore[method-assign]
        socket.socket.connect_ex = _orig_connect_ex  # type: ignore[method-assign]
        _S.allowed, _S.resolved, _S.installed = frozenset(), set(), False


def allowed() -> frozenset[str]:
    return _S.allowed
