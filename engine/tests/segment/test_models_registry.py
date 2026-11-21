"""Model/asset registry: manifest integrity, offline behaviour, resumable checksum-verified pull (no network)."""

from __future__ import annotations

import hashlib
import io
import re

import pytest

from medmereport.core.paths import models_dir
from medmereport.models import registry as R


def test_manifest_is_pinned_and_attributed():
    files = set()
    for a in R.ASSETS.values():
        assert a.url.startswith("https://")
        assert re.fullmatch(r"[0-9a-f]{64}", a.sha256)
        assert a.size > 0 and a.licence and a.attribution and a.description
        assert a.filename not in files
        files.add(a.filename)
    assert set(R.names("atlas-ho")) == {
        "mni152-2009c-t1",
        "mni152-2009c-brain-mask",
        "ho-cortical-lat",
        "ho-subcortical",
    }
    assert all("CC BY-SA 4.0" in c["licence"] for c in R.credits(["ho-cortical-lat", "ho-subcortical"]))


def test_paths_are_local_and_unknown_names_fail():
    p = R.path("ho-subcortical")
    assert p.parent == models_dir()
    with pytest.raises(R.AssetError):
        R.path("nope")


class _Resp(io.BytesIO):
    def __init__(self, data: bytes, status: int):
        super().__init__(data)
        self.status = status


@pytest.fixture
def fake_asset(monkeypatch):
    payload = bytes(range(256)) * 400
    a = R.Asset(
        name="fake",
        filename="sub/fake.bin",
        url="https://example.invalid/fake.bin",
        sha256=hashlib.sha256(payload).hexdigest(),
        size=len(payload),
        licence="CC0",
        attribution="test",
        description="test asset",
        bundle="test",
    )
    monkeypatch.setitem(R.ASSETS, "fake", a)
    calls = []

    def fake_open(url, start):
        calls.append(start)
        return _Resp(payload[start:], 206 if start else 200)

    monkeypatch.setattr(R, "_open", fake_open)
    yield a, payload, calls
    R.path("fake").unlink(missing_ok=True)


def test_pull_resumes_and_verifies(fake_asset):
    a, payload, calls = fake_asset
    assert not R.available("fake")
    part = R.path("fake").with_name("fake.bin.part")
    part.parent.mkdir(parents=True, exist_ok=True)
    part.write_bytes(payload[:1000])  # interrupted earlier
    seen = []
    out = R.pull("fake", lambda n, d, t: seen.append((d, t)))
    assert calls == [1000]
    assert out.read_bytes() == payload and not part.exists()
    assert R.available("fake") and R.verify("fake")
    assert seen[-1] == (a.size, a.size)
    R.pull("fake")  # already verified: no second download
    assert calls == [1000]


def test_pull_rejects_bad_checksum(fake_asset, monkeypatch):
    _, payload, _ = fake_asset
    monkeypatch.setattr(R, "_open", lambda url, start: _Resp(b"x" * len(payload), 200))
    with pytest.raises(R.AssetError, match="checksum"):
        R.pull("fake")
    assert not R.path("fake").exists()
    assert not R.path("fake").with_name("fake.bin.part").exists()


def test_refuses_plain_http():
    with pytest.raises(R.AssetError):
        R._open("http://example.invalid/x", 0)


def test_cli_models_list_is_offline(egress_guard, capsys):
    from medmereport.cli.main import main

    assert main(["models", "list"]) == 0
    out = capsys.readouterr().out
    assert "mni152-2009c-t1" in out and "CC BY-SA 4.0" in out


def test_cli_models_pull_unknown(capsys):
    from medmereport.cli.main import main

    assert main(["models", "pull", "no-such-thing"]) == 2
