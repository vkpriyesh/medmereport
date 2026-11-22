import io
import os
import shutil
import zipfile
from pathlib import Path

import py7zr
import pytest
import pyzipper

from medmereport.ingest import base
from medmereport.ingest.base import IngestError, OpenContext, PasswordRequired, WrongPassword
from medmereport.ingest.loose import LooseAdapter, archive_kind, safe_member_path, should_skip, walk
from medmereport.ingest.scan import scan_source
from tests.dicom.test_sniff_read import PDF, write_pdf_object
from tests.fixtures.synth import phantom_volume, write_series, write_study

PNG = b"\x89PNG\r\n\x1a\n" + b"\x00" * 32


def make_ctx(tmp_path: Path, password: str | None = None) -> OpenContext:
    t = tmp_path / "session"
    t.mkdir(parents=True, exist_ok=True)
    return OpenContext(tmp=t, password=bytearray(password.encode()) if password else None)


def small_study(out: Path) -> Path:
    vol = phantom_volume(nz=4, ny=16, nx=16)
    write_series(out, volume=vol, series_number=1, description="AX T1", extensionless=True)
    write_series(
        out / "sub",
        volume=vol,
        series_number=2,
        plane="sagittal",
        description="SAG T2",
        echo_time=90,
        repetition_time=4000,
    )
    return out


def zip_tree(src: Path, dest: Path) -> Path:
    with zipfile.ZipFile(dest, "w", zipfile.ZIP_DEFLATED) as zf:
        for p in sorted(src.rglob("*")):
            if p.is_file():
                zf.write(p, p.relative_to(src).as_posix())
    return dest


def outside_files(root: Path, allowed: Path) -> list[Path]:
    return [p for p in root.rglob("*") if p.is_file() and not p.is_relative_to(allowed)]


def test_folder_with_shuffled_extensionless_study(tmp_path):
    src = tmp_path / "disc"
    write_study(src, extensionless=True)
    res = scan_source(src, make_ctx(tmp_path), adapter="loose")
    assert res.adapter == "loose"
    assert [g.n for g in res.series] == [24, 24, 24]
    assert [g.header.series_description for g in res.series] == ["AX T1 SYNTH", "AX FLAIR SYNTH", "SAG T1 SYNTH"]
    assert res.warnings == []


def test_zip_and_nested_zip(tmp_path):
    study = small_study(tmp_path / "study")
    inner = zip_tree(study, tmp_path / "inner.zip")
    outer_src = tmp_path / "outer_src"
    outer_src.mkdir()
    shutil.copy(inner, outer_src / "download")  # no extension: detected by magic
    (outer_src / "photo.png").write_bytes(PNG)
    outer = zip_tree(outer_src, tmp_path / "portal.zip")
    ctx = make_ctx(tmp_path)
    res = scan_source(outer, ctx, adapter="loose")
    assert [g.n for g in res.series] == [4, 4]
    assert len(res.images) == 1 and res.images[0].is_relative_to(ctx.tmp)
    assert all(f.is_relative_to(ctx.tmp) for g in res.series for f in g.files)


def test_7z_archive(tmp_path):
    study = small_study(tmp_path / "study")
    arc = tmp_path / "study.7z"
    with py7zr.SevenZipFile(arc, "w") as z:
        z.writeall(study, "study")
    assert archive_kind(arc) == "7z"
    assert LooseAdapter().detect(arc).notes == ["7z"]
    res = scan_source(arc, make_ctx(tmp_path), adapter="loose")
    assert [g.n for g in res.series] == [4, 4]


def test_zip_slip_entries_rejected(tmp_path):
    good = write_series(tmp_path / "s", volume=phantom_volume(nz=3, ny=8, nx=8))
    arc = tmp_path / "evil.zip"
    with zipfile.ZipFile(arc, "w") as zf:
        zf.writestr("../../escaped.txt", b"x")
        zf.writestr("/abs.txt", b"x")
        zf.writestr("C:/drive.txt", b"x")
        zf.writestr("ok/..\\..\\back.txt", b"x")
        zf.writestr("NUL.txt", b"x")
        for p in good:
            zf.write(p, f"ok/{p.name}")
    ctx = make_ctx(tmp_path)
    res = scan_source(arc, ctx, adapter="loose")
    assert [g.n for g in res.series] == [3]
    assert any("unsafe paths" in w for w in res.warnings)
    assert set(outside_files(tmp_path, ctx.tmp / "extract")) == {arc, *good}
    extracted = {p.name for p in (ctx.tmp / "extract").rglob("*") if p.is_file()}
    assert extracted == {p.name for p in good}


@pytest.mark.parametrize(
    "name, ok",
    [
        ("a/b.dcm", True),
        ("./x", True),
        ("../x", False),
        ("a/../../x", False),
        ("/etc/x", False),
        ("C:\\x", False),
        ("a\\..\\..\\x", False),
        ("con", False),
        ("lpt1.txt", False),
        ("x\x00y", False),
        ("", False),
    ],
)
def test_safe_member_path(tmp_path, name, ok):
    assert (safe_member_path(tmp_path, name) is not None) is ok


def test_zip_bomb_ratio_rejected(tmp_path):
    arc = tmp_path / "bomb.zip"
    with zipfile.ZipFile(arc, "w", zipfile.ZIP_DEFLATED) as zf:
        zf.writestr("zeros.bin", b"\x00" * (4 << 20))  # ~4000:1
    with pytest.raises(IngestError) as exc:
        list(walk(arc, make_ctx(tmp_path)))
    assert exc.value.code == "too_large"
    assert not any(p.is_file() for p in (tmp_path / "session").rglob("*"))


def test_zip_bomb_total_size_rejected(tmp_path, monkeypatch):
    monkeypatch.setattr(base, "MAX_TOTAL_UNCOMPRESSED", 100_000)
    arc = tmp_path / "big.zip"
    with zipfile.ZipFile(arc, "w", zipfile.ZIP_STORED) as zf:
        for i in range(3):
            zf.writestr(f"f{i}", os.urandom(50_000))
    with pytest.raises(IngestError) as exc:
        list(walk(arc, make_ctx(tmp_path)))
    assert exc.value.code == "too_large"


def test_nested_bomb_counts_cumulatively(tmp_path, monkeypatch):
    monkeypatch.setattr(base, "MAX_TOTAL_UNCOMPRESSED", 150_000)
    inner = io.BytesIO()
    with zipfile.ZipFile(inner, "w", zipfile.ZIP_STORED) as zf:
        zf.writestr("payload", os.urandom(100_000))
    arc = tmp_path / "nest.zip"
    with zipfile.ZipFile(arc, "w", zipfile.ZIP_STORED) as zf:
        zf.writestr("a.zip", inner.getvalue())
    with pytest.raises(IngestError):
        list(walk(arc, make_ctx(tmp_path)))


def test_too_many_files_rejected(tmp_path, monkeypatch):
    monkeypatch.setattr(base, "MAX_FILES", 5)
    arc = tmp_path / "many.zip"
    with zipfile.ZipFile(arc, "w") as zf:
        for i in range(10):
            zf.writestr(f"f{i}", b"x")
    with pytest.raises(IngestError):
        list(walk(arc, make_ctx(tmp_path)))


def test_nesting_limit(tmp_path, monkeypatch):
    monkeypatch.setattr(base, "MAX_NESTING", 1)
    inner = io.BytesIO()
    with zipfile.ZipFile(inner, "w") as zf:
        zf.writestr("deep.png", PNG)
    arc = tmp_path / "n.zip"
    with zipfile.ZipFile(arc, "w") as zf:
        zf.writestr("inner.zip", inner.getvalue())
        zf.writestr("top.png", PNG)
    ctx = make_ctx(tmp_path)
    names = [p.name for p in walk(arc, ctx)]
    assert names == ["top.png"]
    assert any("nested too deeply" in w for w in ctx.warnings)


def test_encrypted_zip_password_flow(tmp_path):
    study = write_series(tmp_path / "s", volume=phantom_volume(nz=3, ny=8, nx=8))
    arc = tmp_path / "locked.zip"
    with pyzipper.AESZipFile(arc, "w", compression=pyzipper.ZIP_DEFLATED, encryption=pyzipper.WZ_AES) as zf:
        zf.setpassword(b"s3cret")
        for p in study:
            zf.write(p, p.name)
    det = LooseAdapter().detect(arc)
    assert det is not None and det.encrypted
    with pytest.raises(PasswordRequired):
        scan_source(arc, make_ctx(tmp_path / "a"), adapter="loose")
    with pytest.raises(WrongPassword):
        scan_source(arc, make_ctx(tmp_path / "b", "wrong"), adapter="loose")
    res = scan_source(arc, make_ctx(tmp_path / "c", "s3cret"), adapter="loose")
    assert [g.n for g in res.series] == [3]


def test_skips_executables_and_viewers(tmp_path):
    src = tmp_path / "disc"
    write_series(src, volume=phantom_volume(nz=3, ny=8, nx=8))
    (src / "autorun.inf").write_text("[autorun]\nopen=viewer.exe")
    (src / "setup.exe").write_bytes(b"MZ" + b"\x00" * 64)
    (src / "VIEWER").mkdir()
    (src / "VIEWER" / "sample.png").write_bytes(PNG)
    yielded = {p.name for p in walk(src, make_ctx(tmp_path))}
    assert "autorun.inf" not in yielded and "setup.exe" not in yielded and "sample.png" not in yielded
    assert should_skip(Path("x/Weasis/lib.png")) and not should_skip(Path("DICOM/IM0001"))


def test_corrupt_unknown_pdf_and_images(tmp_path):
    src = tmp_path / "mixed"
    paths = write_series(src, volume=phantom_volume(nz=3, ny=8, nx=8))
    victim = src / "TRUNC"
    victim.write_bytes(paths[0].read_bytes()[:140])  # DICM magic, header cut off
    (src / "garbage.dcm").write_bytes(b"\x00" * 128 + b"DICM" + os.urandom(64))
    (src / "notes.txt").write_text("hello")
    (src / "scan.png").write_bytes(PNG)
    (src / "report.pdf").write_bytes(PDF)
    write_pdf_object(src / "DOC0001")
    ctx = make_ctx(tmp_path)
    res = scan_source(src, ctx, adapter="loose")
    assert [g.n for g in res.series] == [3]
    assert sorted(p.name for p in res.images) == ["report.pdf", "scan.png"]
    assert len(res.documents) == 1 and res.documents[0].read_bytes() == PDF
    assert res.documents[0].is_relative_to(ctx.tmp)
    assert any("could not be read" in w or "non-image" in w for w in res.warnings)
    assert any("not recognised" in w for w in res.warnings)
    assert not any(str(tmp_path) in w for w in res.warnings)


def test_no_images(tmp_path):
    src = tmp_path / "empty"
    src.mkdir()
    (src / "readme.txt").write_text("nothing here")
    with pytest.raises(IngestError) as exc:
        scan_source(src, OpenContext(tmp=tmp_path), adapter="loose")
    assert exc.value.code == "no_images"


def test_progress_and_plain_context(tmp_path):
    src = small_study(tmp_path / "study")
    events: list[tuple[str, float]] = []
    session = tmp_path / "session"
    session.mkdir()
    ctx = OpenContext(tmp=session, progress=lambda s, p, m: events.append((s, p)))
    res = scan_source(src, ctx, adapter="loose")
    assert len(res.series) == 2
    assert events[0] == ("scan", 0) and events[-1] == ("group", 100)
