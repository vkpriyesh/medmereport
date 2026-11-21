"""Localhost hardening (see docs/RESEARCH.md §3).

Threats addressed:
  * DNS rebinding (e.g. Ollama CVE-2024-28224): strict Host allow-list.
  * Drive-by requests from other websites (e.g. Zoom CVE-2019-13450): per-launch secret token,
    exchanged for an HttpOnly SameSite=Strict cookie; strict Origin / Sec-Fetch-Site checks.
  * Data exfiltration from the UI: strict CSP (connect-src 'self'), no CORS headers at all.
"""

from __future__ import annotations

import hmac
from collections.abc import Awaitable, Callable, MutableMapping
from typing import Any

from starlette.requests import Request
from starlette.responses import JSONResponse, Response
from starlette.types import ASGIApp, Receive, Scope, Send

COOKIE = "mmr_session"

CSP = (
    "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; "
    "font-src 'self'; connect-src 'self'; worker-src 'self' blob:; object-src 'none'; base-uri 'none'; "
    "form-action 'self'; frame-ancestors 'none'"
)
SECURITY_HEADERS = {
    "Content-Security-Policy": CSP,
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "no-referrer",
    "X-Frame-Options": "DENY",
    "Cross-Origin-Opener-Policy": "same-origin",
    "Cross-Origin-Resource-Policy": "same-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=()",
}

# Paths reachable without the session cookie (static UI shell + token exchange + liveness).
PUBLIC_PREFIXES = ("/assets/", "/fonts/", "/favicon", "/demo/")
PUBLIC_EXACT = {"/", "/index.html", "/api/session", "/api/health"}
UNSAFE = {"POST", "PUT", "PATCH", "DELETE"}


class LocalSecurity:
    """Pure-ASGI middleware so it also guards streaming (SSE) responses."""

    def __init__(self, app: ASGIApp, *, port: int, token: str, dev_origins: tuple[str, ...] = ()) -> None:
        self.app = app
        self.token = token
        self.hosts = {f"127.0.0.1:{port}", f"localhost:{port}"}
        self.origins = {f"http://127.0.0.1:{port}", f"http://localhost:{port}", *dev_origins}
        self.dev_hosts = {o.split("://", 1)[1] for o in dev_origins}

    async def __call__(self, scope: Scope, receive: Receive, send: Send) -> None:
        if scope["type"] not in ("http", "websocket"):
            await self.app(scope, receive, send)
            return
        req = Request(scope)
        deny = self._check(req)
        if deny is not None:
            await _with_headers(deny)(scope, receive, send)
            return

        async def send_with_headers(message: MutableMapping[str, Any]) -> None:
            if message["type"] == "http.response.start":
                headers = list(message.get("headers", []))
                present = {k.lower() for k, _ in headers}
                for k, v in SECURITY_HEADERS.items():
                    if k.lower().encode() not in present:
                        headers.append((k.lower().encode(), v.encode()))
                if req.url.path.startswith("/api/"):
                    headers.append((b"cache-control", b"no-store"))
                message["headers"] = headers
            await send(message)

        await self.app(scope, receive, send_with_headers)

    # ------------------------------------------------------------------
    def _check(self, req: Request) -> Response | None:
        host = req.headers.get("host", "")
        if host not in self.hosts and host not in self.dev_hosts:
            return JSONResponse({"detail": "Forbidden host"}, status_code=403)

        origin = req.headers.get("origin")
        if origin is not None and origin not in self.origins:
            return JSONResponse({"detail": "Forbidden origin"}, status_code=403)
        site = req.headers.get("sec-fetch-site")
        is_api = req.url.path.startswith("/api/")
        # Opening the UI page from a terminal, shortcut or another site is a harmless top-level navigation
        # (the shell holds no data). Every /api call must come from our own page.
        if (
            is_api
            and site is not None
            and site not in ("same-origin", "none")
            and not (origin and origin in self.origins)
        ):
            return JSONResponse({"detail": "Cross-site request blocked"}, status_code=403)
        if req.method in UNSAFE and origin is None and site is None:
            # Browsers always send one of these on state-changing fetches; non-browser clients use the bearer token.
            if not self._bearer_ok(req):
                return JSONResponse({"detail": "Origin required"}, status_code=403)

        path = req.url.path
        if path in PUBLIC_EXACT or path.startswith(PUBLIC_PREFIXES):
            return None
        if not path.startswith("/api/"):
            return None  # SPA routes serve index.html; data lives only under /api
        if self._cookie_ok(req) or self._bearer_ok(req):
            return None
        return JSONResponse({"detail": "Not authenticated"}, status_code=401)

    def _cookie_ok(self, req: Request) -> bool:
        c = req.cookies.get(COOKIE, "")
        return bool(c) and hmac.compare_digest(c, self.token)

    def _bearer_ok(self, req: Request) -> bool:
        auth = req.headers.get("authorization", "")
        return auth.startswith("Bearer ") and hmac.compare_digest(auth[7:], self.token)

    def token_matches(self, candidate: str) -> bool:
        return hmac.compare_digest(candidate, self.token)


def _with_headers(resp: Response) -> Response:
    for k, v in SECURITY_HEADERS.items():
        resp.headers[k] = v
    return resp


CallNext = Callable[[Request], Awaitable[Response]]
