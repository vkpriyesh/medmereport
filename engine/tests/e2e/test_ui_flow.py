"""Browser end-to-end check of the real app (T1.13): ``medmereport serve`` + headless Chromium via Playwright.

Synthetic encrypted DcmBurner disc (CT phantom inside) -> token link -> import wizard (path + password) ->
study dashboard -> 2D viewer shows a slice -> build the 3D model (ct_body, a few seconds) -> regions listed ->
a region card opens.

Opt-in, because it needs a browser binary: ``MEDMEREPORT_E2E=1`` and the ``e2e`` dependency group::

    uv sync --group e2e && uv run playwright install chromium
    MEDMEREPORT_E2E=1 uv run pytest tests/e2e -q

The UI under test is the committed build in ``medmereport/server/static`` (what users get). Everything stays on
127.0.0.1; the browser never loads anything else (checked).
"""

from __future__ import annotations

import os
import re
import socket
import subprocess
import sys
import tempfile
import threading
import time
from collections.abc import Iterator
from pathlib import Path

import pytest

if os.environ.get("MEDMEREPORT_E2E") != "1":
    pytest.skip("browser e2e is opt-in: set MEDMEREPORT_E2E=1", allow_module_level=True)
sync_api = pytest.importorskip("playwright.sync_api", reason="install the e2e group: uv sync --group e2e")

from tests.fixtures.containers import make_dcmburner_disc, zip_dir  # noqa: E402
from tests.fixtures.synth_ct import write_ct_series  # noqa: E402

PASSWORD = "e2e-Synthetic-1"
pytestmark = pytest.mark.timeout(600)


def _free_port() -> int:
    with socket.socket() as s:
        s.bind(("127.0.0.1", 0))
        return int(s.getsockname()[1])


@pytest.fixture(scope="module")
def disc(tmp_path_factory: pytest.TempPathFactory) -> Path:
    root = tmp_path_factory.mktemp("e2e")
    with tempfile.TemporaryDirectory() as staging:
        write_ct_series(Path(staging) / "DICOM" / "S0001")
        payload = zip_dir(Path(staging), top="DICOM_STUDY")
    return make_dcmburner_disc(root / "disc", PASSWORD, payload=payload)


@pytest.fixture(scope="module")
def server(tmp_path_factory: pytest.TempPathFactory) -> Iterator[str]:
    """Start ``medmereport serve --no-browser`` on a free port with a throwaway home; yield the token URL."""
    home = tmp_path_factory.mktemp("home")
    env = {**os.environ, "MEDMEREPORT_HOME": str(home), "PYTHONUNBUFFERED": "1"}
    env.pop("MEDMEREPORT_TOKEN", None)
    cmd = [sys.executable, "-c", "import sys; from medmereport.cli.main import main; sys.exit(main(sys.argv[1:]))",
           "serve", "--no-browser", "--port", str(_free_port())]  # fmt: skip
    proc = subprocess.Popen(cmd, env=env, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
    lines: list[str] = []
    found: list[str] = []
    ready = threading.Event()

    def pump() -> None:
        assert proc.stdout is not None
        for line in proc.stdout:
            lines.append(line)
            m = re.search(r"Open: (http://127\.0\.0\.1:\d+/#token=\S+)", line)
            if m:
                found.append(m.group(1))
                ready.set()

    threading.Thread(target=pump, daemon=True).start()
    try:
        if not ready.wait(60) or proc.poll() is not None:
            raise AssertionError("server did not start:\n" + "".join(lines))
        url = found[0]
        base = url.split("/#", 1)[0]
        deadline = time.time() + 30
        while time.time() < deadline:  # wait for the port to accept connections
            try:
                with socket.create_connection(("127.0.0.1", int(base.rsplit(":", 1)[1])), timeout=1):
                    break
            except OSError:
                time.sleep(0.2)
        yield url
    finally:
        proc.terminate()
        try:
            proc.wait(15)
        except subprocess.TimeoutExpired:
            proc.kill()


@pytest.fixture(scope="module")
def browser() -> Iterator[object]:
    with sync_api.sync_playwright() as p:
        # SwiftShader gives headless Chromium a software WebGL on CI runners without a GPU
        b = p.chromium.launch(headless=True, args=["--enable-unsafe-swiftshader", "--use-angle=swiftshader"])
        yield b
        b.close()


def test_encrypted_disc_to_viewer_and_3d_model(server: str, disc: Path, browser: object) -> None:
    expect = sync_api.expect
    base = server.split("/#", 1)[0]
    page = browser.new_page(viewport={"width": 1400, "height": 900})  # type: ignore[attr-defined]
    foreign: list[str] = []
    page.on("request", lambda r: None if r.url.startswith((base, "data:", "blob:")) else foreign.append(r.url))
    errors: list[str] = []
    page.on("pageerror", lambda e: errors.append(str(e)))

    # token link -> cookie session
    with page.expect_response(lambda r: "/api/session" in r.url and r.ok):
        page.goto(server)

    # import wizard: paste the disc path, unlock with the password
    page.goto(f"{base}/import")
    page.locator("#paste-in").fill(str(disc))
    page.get_by_role("button", name="Use this path").click()
    page.get_by_role("button", name="Unlock and open").click(timeout=30_000)
    page.locator("#pw-in").fill(PASSWORD)
    page.get_by_role("button", name="Unlock", exact=True).click()
    page.wait_for_url(re.compile(r"/study/[^/]+$"), timeout=120_000)
    study_url = page.url

    # dashboard -> 2D viewer: a slice is drawn (non-black pixels on the slice canvas)
    page.get_by_role("link", name="Open scan viewer").click()
    page.wait_for_url(re.compile(r"/study/[^/]+/view/"), timeout=30_000)
    canvas = page.locator("[role=application] canvas").first
    expect(canvas).to_be_visible(timeout=30_000)
    page.wait_for_function(
        """() => {
          const c = document.querySelector('[role=application] canvas');
          if (!c || !c.width || !c.height) return false;
          const d = c.getContext('2d').getImageData(0, 0, c.width, c.height).data;
          for (let i = 0; i < d.length; i += 4 * 97) if (d[i] > 20 || d[i + 1] > 20 || d[i + 2] > 20) return true;
          return false;
        }""",
        timeout=30_000,
    )

    # 3D: build the CT model, regions appear in the structure tree, a region card opens
    page.goto(f"{study_url}/3d")
    page.get_by_role("button", name="Build my 3D model").click(timeout=30_000)
    tree = page.locator("#m3d-controls")
    groups = tree.locator("button.lt")  # system / lobe groups of the structure tree (may start collapsed)
    expect(groups.first).to_be_visible(timeout=240_000)
    for i in range(groups.count()):
        if groups.nth(i).get_attribute("aria-expanded") == "false":
            groups.nth(i).click()
    items = tree.locator("button.nm")
    expect(items.first).to_be_visible(timeout=15_000)
    assert items.count() >= 2
    items.first.click()
    expect(page.locator(".cardx button.x")).to_be_visible(timeout=15_000)

    assert not foreign, f"the page tried to load non-local resources: {foreign[:5]}"
    assert not errors, f"uncaught page errors: {errors[:5]}"
    page.close()
