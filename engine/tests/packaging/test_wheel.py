"""The release wheel must be self-contained: built UI, knowledge JSON and every other package data file."""

import filecmp
import shutil
import subprocess
import zipfile
from pathlib import Path

import pytest

from medmereport import __version__

ENGINE = Path(__file__).resolve().parents[2]
PKG = ENGINE / "medmereport"


def _package_data() -> set[str]:
    out = set()
    for p in PKG.rglob("*"):
        if p.is_file() and "__pycache__" not in p.parts and p.suffix not in (".pyc", ".pyo"):
            out.add(p.relative_to(ENGINE).as_posix())
    return out


@pytest.fixture(scope="module")
def built(tmp_path_factory: pytest.TempPathFactory) -> Path:
    uv = shutil.which("uv")
    if not uv:
        pytest.skip("uv not on PATH")
    out = tmp_path_factory.mktemp("dist")
    subprocess.run([uv, "build", "--quiet", "--out-dir", str(out), str(ENGINE)], check=True, timeout=240)
    return out


def test_wheel_contains_all_package_files(built: Path) -> None:
    wheels = list(built.glob(f"medmereport-{__version__}-py3-none-any.whl"))
    assert len(wheels) == 1, list(built.iterdir())
    names = set(zipfile.ZipFile(wheels[0]).namelist())
    expected = _package_data()
    assert "medmereport/server/static/index.html" in expected
    assert any(n.startswith("medmereport/server/static/assets/") for n in expected)
    assert {"medmereport/knowledge/anatomy.en.json", "medmereport/knowledge/anatomy.hi.json"} <= expected
    missing = sorted(expected - names)
    assert not missing, f"not in wheel: {missing}"
    dist_info = f"medmereport-{__version__}.dist-info"
    assert {f"{dist_info}/licenses/LICENSE", f"{dist_info}/licenses/NOTICE", f"{dist_info}/entry_points.txt"} <= names
    assert not [n for n in names if "__pycache__" in n or n.startswith("tests/")]


def test_sdist_is_lean(built: Path) -> None:
    import tarfile

    (sdist,) = built.glob(f"medmereport-{__version__}.tar.gz")
    with tarfile.open(sdist) as t:
        names = t.getnames()
    assert f"medmereport-{__version__}/medmereport/server/static/index.html" in names
    assert not [n for n in names if ".hypothesis" in n or "__pycache__" in n or "/tests/" in n]


def test_license_copies_match_repo_root() -> None:
    root = ENGINE.parent
    for name in ("LICENSE", "NOTICE"):
        if not (root / name).is_file():
            pytest.skip("not a repository checkout")
        assert filecmp.cmp(root / name, ENGINE / name, shallow=False), f"engine/{name} differs from ./{name}"
