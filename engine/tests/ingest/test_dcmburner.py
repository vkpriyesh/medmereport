import io
import zipfile
from pathlib import Path

import pytest
from pydicom import dcmread

from medmereport.ingest.base import IngestAdapter, IngestError, OpenContext, PasswordRequired, WrongPassword, zero
from medmereport.ingest.dcmburner import DcmBurnerAdapter, safe_extract_zip
from tests.fixtures.containers import N_SMALL_STUDY, make_dcmburner_disc, openssl_enc

PW = "Corr3ct-Horse"
EXEC = {".exe", ".bat", ".inf", ".cmd", ".dll"}


@pytest.fixture(scope="module")
def disc(tmp_path_factory):
    return make_dcmburner_disc(tmp_path_factory.mktemp("dcmb") / "disc", PW)


def ctx(tmp_path: Path, pw: str | None = PW, progress=None) -> OpenContext:
    t = tmp_path / "session"
    t.mkdir(exist_ok=True)
    return OpenContext(tmp=t, password=bytearray(pw.encode()) if pw is not None else None, progress=progress)


def _plaintext_left(tmp: Path) -> list[Path]:
    return [p for p in tmp.rglob("*") if p.is_file()]


def test_protocol():
    assert isinstance(DcmBurnerAdapter(), IngestAdapter)


def test_detect(disc, tmp_path):
    a = DcmBurnerAdapter()
    d = a.detect(disc)
    assert d is not None and d.adapter == "dcmburner" and d.encrypted and d.confidence > 0.9
    # one level down (user picked the drive root containing the disc folder)
    assert a.detect(disc.parent) is not None
    assert a.detect(disc / "burn.enc") is not None
    assert a.detect(tmp_path) is None
    (tmp_path / "burn.enc").write_bytes(b"not openssl")
    assert a.detect(tmp_path) is None


def test_correct_password_yields_dicom(disc, tmp_path):
    events = []
    c = ctx(tmp_path, progress=lambda s, p, m: events.append((s, p)))
    files = list(DcmBurnerAdapter().open(disc, c))
    zero(c.password)
    assert len([f for f in files if f.name != "DICOMDIR"]) == N_SMALL_STUDY
    assert any(f.name == "DICOMDIR" for f in files)
    for f in files:
        assert f.is_relative_to(c.tmp)
        assert f.suffix.lower() not in EXEC
    ds = dcmread(next(f for f in files if f.name.startswith("IM")))
    assert ds.Modality == "MR"
    assert {s for s, _ in events} >= {"decrypt", "extract"}
    # no plaintext archive copy left behind, nothing written next to the source
    assert not list(c.tmp.rglob("decrypted.zip"))
    assert not list(disc.rglob("decrypted.zip"))


def test_md5_variant(tmp_path):
    disc = make_dcmburner_disc(tmp_path / "md5disc", PW, md="md5")
    files = list(DcmBurnerAdapter().open(disc, ctx(tmp_path)))
    assert len([f for f in files if f.name != "DICOMDIR"]) == N_SMALL_STUDY


def test_wrong_password_leaves_nothing(disc, tmp_path):
    c = ctx(tmp_path, pw="corr3ct-horse")  # case matters
    with pytest.raises(WrongPassword) as ei:
        list(DcmBurnerAdapter().open(disc, c))
    assert ei.value.code == "wrong_password"
    assert _plaintext_left(c.tmp) == []


def test_no_password(disc, tmp_path):
    for pw in (None, ""):
        with pytest.raises(PasswordRequired) as ei:
            list(DcmBurnerAdapter().open(disc, ctx(tmp_path, pw=pw)))
        assert ei.value.code == "password_required"


@pytest.mark.parametrize("cut", [7, 16, 31])
def test_truncated_is_ingest_error(disc, tmp_path, cut):
    bad = tmp_path / "bad"
    bad.mkdir()
    data = (disc / "burn.enc").read_bytes()
    (bad / "burn.enc").write_bytes(data[: len(data) - cut] if cut != 31 else data[:31])
    c = ctx(tmp_path)
    with pytest.raises(IngestError) as ei:
        list(DcmBurnerAdapter().open(bad, c))
    assert ei.value.code in ("corrupt", "wrong_password")
    assert not isinstance(ei.value, PasswordRequired)
    assert _plaintext_left(c.tmp) == []


def test_corrupt_payload_is_ingest_error(tmp_path):
    disc = make_dcmburner_disc(tmp_path / "d", PW, payload=b"PK\x03\x04" + b"\x00" * 200)
    c = ctx(tmp_path)
    with pytest.raises(IngestError) as ei:
        list(DcmBurnerAdapter().open(disc, c))
    assert ei.value.code == "corrupt"
    assert _plaintext_left(c.tmp) == []


def test_bad_padding_is_ingest_error(disc, tmp_path):
    bad = tmp_path / "pad"
    bad.mkdir()
    data = bytearray((disc / "burn.enc").read_bytes())
    data[-1] ^= 0xFF  # mangles the final block -> invalid PKCS7 padding
    (bad / "burn.enc").write_bytes(bytes(data))
    with pytest.raises(IngestError) as ei:
        list(DcmBurnerAdapter().open(bad, ctx(tmp_path)))
    assert ei.value.code == "corrupt"


def _zip(entries: dict[str, bytes]) -> bytes:
    buf = io.BytesIO()
    with zipfile.ZipFile(buf, "w") as zf:
        for name, data in entries.items():
            zf.writestr(name, data)
    return buf.getvalue()


def test_zip_slip_rejected(tmp_path):
    payload = _zip(
        {
            "STUDY/ok.dcm": b"x" * 10,
            "../../evil.txt": b"pwned",
            "/abs/evil2.txt": b"pwned",
            "C:/evil3.txt": b"pwned",
            "STUDY\\..\\..\\evil4.txt": b"pwned",
            "STUDY/run.exe": b"MZ",
            "STUDY/autorun.inf": b"[autorun]",
        }
    )
    disc = make_dcmburner_disc(tmp_path / "d", PW, payload=payload)
    c = ctx(tmp_path)
    files = list(DcmBurnerAdapter().open(disc, c))
    assert [f.name for f in files] == ["ok.dcm"]
    assert not list(tmp_path.rglob("evil*.txt"))
    assert not list(c.tmp.rglob("*.exe"))


def test_zip_bomb_rejected(tmp_path):
    buf = io.BytesIO()
    with zipfile.ZipFile(buf, "w", zipfile.ZIP_DEFLATED) as zf:
        zf.writestr("bomb.bin", b"\x00" * (50 * 2**20))  # ratio ~1000:1
    disc = make_dcmburner_disc(tmp_path / "d", PW, payload=buf.getvalue())
    c = ctx(tmp_path)
    with pytest.raises(IngestError) as ei:
        list(DcmBurnerAdapter().open(disc, c))
    assert ei.value.code == "too_large"
    assert _plaintext_left(c.tmp) == []


def test_safe_extract_symlink_skipped(tmp_path):
    buf = io.BytesIO()
    with zipfile.ZipFile(buf, "w") as zf:
        info = zipfile.ZipInfo("link")
        info.external_attr = 0o120777 << 16
        zf.writestr(info, "/etc/passwd")
        zf.writestr("a/b.dcm", b"ok")
    with zipfile.ZipFile(io.BytesIO(buf.getvalue())) as zf:
        out = safe_extract_zip(zf, tmp_path / "x")
    assert [p.name for p in out] == ["b.dcm"]


def test_disc_binaries_never_executed(disc, tmp_path, monkeypatch):
    import os
    import subprocess

    def boom(*a, **k):
        raise AssertionError("tried to execute something")

    monkeypatch.setattr(subprocess, "Popen", boom)
    monkeypatch.setattr(os, "system", boom)
    if hasattr(os, "startfile"):
        monkeypatch.setattr(os, "startfile", boom)
    import builtins

    real_open = builtins.open

    def guarded_open(file, *a, **k):
        if Path(str(file)).suffix.lower() in EXEC:
            raise AssertionError("disc binary was opened")
        return real_open(file, *a, **k)

    monkeypatch.setattr(builtins, "open", guarded_open)
    files = list(DcmBurnerAdapter().open(disc, ctx(tmp_path)))
    assert files and all(f.suffix.lower() not in EXEC for f in files)


def test_custom_ciphertext_roundtrip(tmp_path):
    """openssl_enc fixture output is also decryptable with an explicit salt (sanity)."""
    payload = _zip({"a.dcm": b"1"})
    d = tmp_path / "d"
    d.mkdir()
    (d / "burn.enc").write_bytes(openssl_enc(payload, PW, salt=b"12345678"))
    files = list(DcmBurnerAdapter().open(d, ctx(tmp_path)))
    assert [f.read_bytes() for f in files] == [b"1"]
