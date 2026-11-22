"""One version everywhere: pyproject, `medmereport.__version__`, `--version` and the release tag."""

import os
import re
import tomllib
from pathlib import Path

import pytest

from medmereport import __version__
from medmereport.cli.main import main

ENGINE = Path(__file__).resolve().parents[2]


def test_pyproject_matches_package_version() -> None:
    data = tomllib.loads((ENGINE / "pyproject.toml").read_text(encoding="utf-8"))
    assert data["project"]["version"] == __version__
    assert re.fullmatch(r"\d+\.\d+\.\d+", __version__)


def test_cli_version_flag(capsys: pytest.CaptureFixture[str]) -> None:
    with pytest.raises(SystemExit) as e:
        main(["--version"])
    assert e.value.code == 0
    assert capsys.readouterr().out.strip() == f"medmereport {__version__}"


def test_release_tag_matches_version() -> None:
    ref = os.environ.get("GITHUB_REF", "")
    if not ref.startswith("refs/tags/v"):
        pytest.skip("not a tag build")
    assert ref.removeprefix("refs/tags/v") == __version__, f"tag {ref} != package version {__version__}"


def test_installers_pin_this_version() -> None:
    scripts = ENGINE.parent / "scripts"
    if not scripts.is_dir():
        pytest.skip("not a repository checkout")
    for name in ("install.ps1", "install.sh"):
        text = (scripts / name).read_text(encoding="utf-8")
        pins = re.findall(r"MEDMEREPORT_DEFAULT_VERSION\s*=\s*['\"]?([0-9.]+)", text)
        assert pins == [__version__], f"{name} pins {pins}, package is {__version__}"
