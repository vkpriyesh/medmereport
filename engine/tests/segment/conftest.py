"""Segmentation test helpers.

``@pytest.mark.needs_models``: the test needs downloaded atlas/model assets. The test session runs with a
throwaway ``MEDMEREPORT_HOME``, so verified assets are copied in from the developer's real models folder
(``medmereport models pull atlas-ho``) or from ``MEDMEREPORT_TEST_MODELS``. Tests are skipped when the
assets are absent. Nothing here downloads.
"""

from __future__ import annotations

import os
import shutil
import sys
from pathlib import Path

import pytest


def pytest_configure(config: pytest.Config) -> None:
    config.addinivalue_line("markers", "needs_models: needs downloaded atlases/models (skipped when absent)")


def _user_models_dir() -> Path:
    """The real per-user models folder (same rule as core.paths.data_dir, ignoring the test override)."""
    explicit = os.environ.get("MEDMEREPORT_TEST_MODELS")
    if explicit:
        return Path(explicit)
    if sys.platform == "win32":
        base = Path(os.environ.get("LOCALAPPDATA", Path.home() / "AppData" / "Local")) / "medmereport"
    elif sys.platform == "darwin":
        base = Path.home() / "Library" / "Application Support" / "medmereport"
    else:
        base = Path(os.environ.get("XDG_DATA_HOME", Path.home() / ".local" / "share")) / "medmereport"
    return base / "models"


def _install(names: list[str]) -> bool:
    from medmereport.models import registry

    src_dir = _user_models_dir()
    for n in names:
        if registry.available(n):
            continue
        src = src_dir / registry.get(n).filename
        if not (src.is_file() and src.stat().st_size == registry.get(n).size):
            return False
        if registry.sha256_of(src) != registry.get(n).sha256:
            return False
        dest = registry.path(n)
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(src, dest)
    return True


@pytest.fixture(autouse=True)
def _models_marker(request: pytest.FixtureRequest) -> None:
    marker = request.node.get_closest_marker("needs_models")
    if marker is None:
        return
    from medmereport.models import registry

    bundle = marker.args[0] if marker.args else "atlas-ho"  # e.g. @pytest.mark.needs_models("synthseg")
    if not _install(registry.names(bundle)):
        pytest.skip(f"{bundle} assets not installed (run `medmereport models pull {bundle}`)")


@pytest.fixture(scope="module")
def atlas_assets() -> None:
    """Module-scoped variant for expensive fixtures (they run before function-scoped autouse ones)."""
    from medmereport.models import registry

    if not _install(registry.names("atlas-ho")):
        pytest.skip("atlas assets not installed (run `medmereport models pull atlas-ho`)")
