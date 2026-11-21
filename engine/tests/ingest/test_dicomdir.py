from pathlib import Path

import pytest
from pydicom import dcmread
from pydicom.fileset import FileSet

from medmereport.ingest.dicomdir import DicomdirAdapter, find_dicomdir
from medmereport.ingest.registry import detect
from medmereport.ingest.scan import scan_source
from tests.fixtures.synth import phantom_volume, write_series, write_xray
from tests.ingest.test_loose import make_ctx


def build_disc(root: Path, staging: Path) -> Path:
    """IHE-PDI style disc: DICOMDIR + PT*/ST*/SE*/IM* written by pydicom FileSet, plus viewer junk."""
    vol = phantom_volume(nz=5, ny=16, nx=16)
    files = write_series(
        staging, volume=vol, series_number=1, description="AX T2 FRFSE", echo_time=100, repetition_time=4000
    )
    files += write_series(staging, volume=vol, series_number=2, plane="sagittal", description="SAG T1")
    fs = FileSet()
    for p in files:
        ds = dcmread(p)
        ds.StudyTime, ds.StudyID = "120000", "1"  # Type-1 STUDY record keys synth.py omits
        ds.save_as(p, enforce_file_format=True)
        fs.add(p)
    root.mkdir(parents=True)
    fs.write(root)
    (root / "AUTORUN.INF").write_text("[autorun]\nopen=Viewer\\viewer.exe\n")
    (root / "Viewer").mkdir()
    (root / "Viewer" / "viewer.exe").write_bytes(b"MZ" + b"\x00" * 64)
    return root


@pytest.fixture
def disc(tmp_path):
    return build_disc(tmp_path / "disc", tmp_path / "staging")


def test_detect_root_and_one_level_down(disc, tmp_path):
    a = DicomdirAdapter()
    assert a.detect(disc).confidence == pytest.approx(0.9)
    assert a.detect(disc.parent).notes == ["dicomdir-subfolder"]
    assert a.detect(disc / "DICOMDIR") is not None
    (tmp_path / "plain").mkdir()
    assert a.detect(tmp_path / "plain") is None
    det, adapter = detect(disc)[0]
    assert det.adapter == "dicomdir" and adapter.name == "dicomdir"


def test_disc_imports_via_index(disc, tmp_path):
    res = scan_source(disc, make_ctx(tmp_path))
    assert res.adapter == "dicomdir"
    assert [(g.header.series_description, g.n) for g in res.series] == [("AX T2 FRFSE", 5), ("SAG T1", 5)]
    assert res.warnings == []
    yielded = list(DicomdirAdapter().open(disc, make_ctx(tmp_path)))
    names = {p.name.lower() for p in yielded}
    assert "dicomdir" not in names and "viewer.exe" not in names and "autorun.inf" not in names
    assert len(yielded) == len(set(yielded)) == 10


def test_files_missing_from_index_are_still_found(disc, tmp_path):
    write_xray(disc / "EXTRA", modality="DX", name="XR0001")
    res = scan_source(disc, make_ctx(tmp_path))
    assert sorted(g.header.modality for g in res.series) == ["DX", "MR", "MR"]


def test_damaged_index_falls_back_to_sniffing(disc, tmp_path):
    (disc / "DICOMDIR").write_bytes(b"\x00" * 128 + b"DICM" + b"\xff" * 50)
    res = scan_source(disc, make_ctx(tmp_path), adapter="dicomdir")
    assert [g.n for g in res.series] == [5, 5]
    assert any("DICOMDIR" in w for w in res.warnings)


def test_index_with_deleted_file_warns(disc, tmp_path):
    victim = next(p for p in disc.rglob("*") if p.is_file() and p.name.startswith("IM"))
    victim.unlink()
    res = scan_source(disc, make_ctx(tmp_path))
    assert sorted(g.n for g in res.series) == [4, 5]
    assert any("missing" in w for w in res.warnings)


def test_find_dicomdir_case_insensitive(tmp_path):
    d = tmp_path / "CD" / "sub"
    d.mkdir(parents=True)
    (d / "dicomdir").write_bytes(b"x")
    assert find_dicomdir(tmp_path / "CD") == d / "dicomdir"
    assert find_dicomdir(tmp_path) is None  # only one level down


def test_shared_synapse_style_fixture_imports(tmp_path):
    containers = pytest.importorskip("tests.fixtures.containers")
    disc = containers.make_dicomdir_disc(tmp_path / "synapse")
    res = scan_source(disc, make_ctx(tmp_path))
    assert res.adapter == "dicomdir" and len(res.series) >= 2
