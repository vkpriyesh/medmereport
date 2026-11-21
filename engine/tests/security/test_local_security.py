from tests.conftest import PORT, TOKEN

ORIGIN = {"Origin": f"http://127.0.0.1:{PORT}"}


def test_health_public(app_client):
    assert app_client.get("/api/health").json()["ok"] is True


def test_api_requires_session(app_client):
    assert app_client.get("/api/capabilities").status_code == 401


def test_wrong_token_rejected(app_client):
    assert app_client.post("/api/session", json={"token": "nope"}, headers=ORIGIN).status_code == 401


def test_cookie_login_then_access(authed):
    r = authed.get("/api/capabilities")
    assert r.status_code == 200
    assert r.json()["offline"] is True


def test_bearer_token_works_for_cli_clients(app_client):
    r = app_client.get("/api/capabilities", headers={"Authorization": f"Bearer {TOKEN}"})
    assert r.status_code == 200


def test_dns_rebinding_host_blocked(authed):
    r = authed.get("/api/capabilities", headers={"Host": "evil.example.com"})
    assert r.status_code == 403


def test_foreign_origin_blocked(authed):
    r = authed.post("/api/jobs/demo", json={}, headers={"Origin": "https://evil.example.com"})
    assert r.status_code == 403


def test_cross_site_fetch_blocked(authed):
    r = authed.get("/api/capabilities", headers={"Sec-Fetch-Site": "cross-site"})
    assert r.status_code == 403


def test_unsafe_without_origin_blocked(app_client):
    app_client.cookies.set("mmr_session", TOKEN)
    assert app_client.post("/api/jobs/demo", json={}).status_code == 403


def test_security_headers_and_no_cors(authed):
    r = authed.get("/api/capabilities", headers=ORIGIN)
    csp = r.headers["content-security-policy"]
    assert "connect-src 'self'" in csp and "frame-ancestors 'none'" in csp
    assert r.headers["x-content-type-options"] == "nosniff"
    assert r.headers["referrer-policy"] == "no-referrer"
    assert "access-control-allow-origin" not in {k.lower() for k in r.headers}
    assert r.headers["cache-control"] == "no-store"


def test_cookie_is_httponly_strict(app_client):
    r = app_client.post("/api/session", json={"token": TOKEN}, headers=ORIGIN)
    sc = r.headers["set-cookie"].lower()
    assert "httponly" in sc and "samesite=strict" in sc


def test_ui_shell_navigation_from_elsewhere_allowed(app_client):
    # e.g. clicking the launch link in a terminal or shortcut; the shell holds no data
    r = app_client.get("/", headers={"Sec-Fetch-Site": "cross-site", "Sec-Fetch-Mode": "navigate"})
    assert r.status_code in (200, 503)


def test_cross_site_api_still_blocked_even_with_cookie(authed):
    r = authed.get("/api/capabilities", headers={"Sec-Fetch-Site": "cross-site", "Sec-Fetch-Mode": "cors"})
    assert r.status_code == 403
