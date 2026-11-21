"""Filesystem locations and session-temp hygiene.

All writes by medmereport go to either:
  * the per-session temp dir (wiped on exit and on next start), or
  * the opt-in workspace (only when the user ticks "Remember this study").
"""

from __future__ import annotations

import atexit
import os
import shutil
import stat
import sys
import tempfile
import uuid
from pathlib import Path

APP = "medmereport"


def data_dir() -> Path:
    """Per-user application data directory (no third-party dependency)."""
    override = os.environ.get("MEDMEREPORT_HOME")
    if override:
        base = Path(override)
    elif sys.platform == "win32":
        base = Path(os.environ.get("LOCALAPPDATA", Path.home() / "AppData" / "Local")) / APP
    elif sys.platform == "darwin":
        base = Path.home() / "Library" / "Application Support" / APP
    else:
        base = Path(os.environ.get("XDG_DATA_HOME", Path.home() / ".local" / "share")) / APP
    base.mkdir(parents=True, exist_ok=True)
    return base


def workspace_dir() -> Path:
    p = data_dir() / "workspace"
    p.mkdir(parents=True, exist_ok=True)
    _restrict(p)
    return p


def models_dir() -> Path:
    p = data_dir() / "models"
    p.mkdir(parents=True, exist_ok=True)
    return p


def _tmp_root() -> Path:
    p = data_dir() / "tmp"
    p.mkdir(parents=True, exist_ok=True)
    _restrict(p)
    return p


def _restrict(p: Path) -> None:
    """Owner-only permissions (0700). No-op semantics on Windows beyond read-only bit handling."""
    try:
        os.chmod(p, stat.S_IRWXU)
    except OSError:
        pass


def _rmtree(p: Path) -> None:
    def onerror(func, path, _exc):  # type: ignore[no-untyped-def]
        try:
            os.chmod(path, stat.S_IWRITE)
            func(path)
        except OSError:
            pass

    if p.exists():
        if sys.version_info >= (3, 12):
            shutil.rmtree(p, onexc=onerror)
        else:
            shutil.rmtree(p, onerror=onerror)


def wipe_stale_sessions() -> int:
    """Remove temp dirs left by crashed sessions. Returns number removed."""
    n = 0
    for child in _tmp_root().iterdir():
        if child.is_dir() and child.name.startswith("session-"):
            _rmtree(child)
            n += 1
    return n


class SessionTemp:
    """A private temp directory for one engine session; deleted on close/exit."""

    def __init__(self) -> None:
        self.path = Path(tempfile.mkdtemp(prefix=f"session-{uuid.uuid4().hex[:8]}-", dir=_tmp_root()))
        _restrict(self.path)
        atexit.register(self.close)

    def subdir(self, name: str) -> Path:
        p = self.path / name
        p.mkdir(parents=True, exist_ok=True)
        _restrict(p)
        return p

    def close(self) -> None:
        _rmtree(self.path)


def purge_all() -> list[str]:
    """Delete workspace, temp and cached models. Returns removed paths (for display only)."""
    removed = []
    for p in (data_dir() / "workspace", data_dir() / "tmp", data_dir() / "models"):
        if p.exists():
            _rmtree(p)
            removed.append(str(p))
    return removed
