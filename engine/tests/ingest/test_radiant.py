import io
import zipfile
from pathlib import Path

import pytest
import pyzipper
from pydicom import dcmread

from medmereport.ingest.base import IngestAdapter, IngestError, OpenContext, PasswordRequired, WrongPassword
from medmereport.ingest.radiant import RadiantAdapter
from tests.fixtures.containers import N_SMALL_STUDY, make_radiant_disc

PW = "Rad-1ant!"


@pytest.fixture(scope="module")
def disc(tmp_path_factory):
    return make_radiant_disc(tmp_path_factory.mktemp("rad") / "disc", PW)


def ctx(tmp_path: Path, pw: str | None = PW) -> OpenContext:
    t = tmp_path / "session"
    t.mkdir(exist_ok=True)
    return OpenContext(tmp=t, password=bytearray(pw.encode()) if pw is not None else None)


def test_protocol():
    assert isinstance(RadiantAdapter(), IngestAdapter)


def test_detect(disc, tmp_path):
    a = RadiantAdapter()
    d = a.detect(disc)
    assert d is not None and d.adapter == "radiant" and d.encrypted
    assert a.detect(disc / "dcmdata.zip") is not None
    assert a.detect(tmp_path) is None
    (tmp_path / "other.zip").write_bytes(b"PK\x03\x04")
    assert a.detect(tmp_path / "other.zip") is None


def test_open_nested_container(disc, tmp_path):
    c = ctx(tmp_path)
    files = list(RadiantAdapter().open(disc, c))
    assert len(files) == N_SMALL_STUDY
    assert all(f.is_relative_to(c.tmp) for f in files)
    assert not any(f.suffix.lower() in (".zip", ".exe", ".inf") for f in files)
    assert dcmread(files[0]).Modality == "MR"
    assert not list(c.tmp.rglob("container.zip"))  # inner archive removed once unpacked


def test_wrong_password(disc, tmp_path):
    c = ctx(tmp_path, pw="rad-1ant!")
    with pytest.raises(WrongPassword):
        list(RadiantAdapter().open(disc, c))
    assert not [p for p in c.tmp.rglob("*") if p.is_file()]


def test_no_password(disc, tmp_path):
    with pytest.raises(PasswordRequired):
        list(RadiantAdapter().open(disc, ctx(tmp_path, pw=None)))


def test_unencrypted_dcmdata_ok(tmp_path):
    d = tmp_path / "d"
    d.mkdir()
    inner = io.BytesIO()
    with zipfile.ZipFile(inner, "w") as zf:
        zf.writestr("x/IM1", b"dicomish")
    with zipfile.ZipFile(d / "dcmdata.zip", "w") as zf:
        zf.writestr("container.zip", inner.getvalue())
    files = list(RadiantAdapter().open(d, ctx(tmp_path, pw=None)))
    assert [f.name for f in files] == ["IM1"]


def test_nesting_limit(tmp_path):
    data = b"leaf"
    blob = io.BytesIO()
    with zipfile.ZipFile(blob, "w") as zf:
        zf.writestr("leaf.dcm", data)
    for _ in range(4):
        nxt = io.BytesIO()
        with zipfile.ZipFile(nxt, "w") as zf:
            zf.writestr("inner.zip", blob.getvalue())
        blob = nxt
    d = tmp_path / "d"
    d.mkdir()
    (d / "dcmdata.zip").write_bytes(blob.getvalue())
    with pytest.raises(IngestError) as ei:
        list(RadiantAdapter().open(d, ctx(tmp_path, pw=None)))
    assert ei.value.code == "too_large"


def test_zip_slip_in_container(tmp_path):
    inner = io.BytesIO()
    with zipfile.ZipFile(inner, "w") as zf:
        zf.writestr("../../escape.dcm", b"bad")
        zf.writestr("ok/IM1", b"good")
    d = tmp_path / "d"
    d.mkdir()
    with pyzipper.AESZipFile(d / "dcmdata.zip", "w", encryption=pyzipper.WZ_AES) as zf:
        zf.setpassword(PW.encode())
        zf.writestr("container.zip", inner.getvalue())
    files = list(RadiantAdapter().open(d, ctx(tmp_path)))
    assert [f.name for f in files] == ["IM1"]
    assert not list(tmp_path.rglob("escape.dcm"))


def test_corrupt_dcmdata(tmp_path):
    d = tmp_path / "d"
    d.mkdir()
    (d / "dcmdata.zip").write_bytes(b"PK\x03\x04" + b"\xff" * 100)
    with pytest.raises(IngestError) as ei:
        list(RadiantAdapter().open(d, ctx(tmp_path)))
    assert ei.value.code == "corrupt"
