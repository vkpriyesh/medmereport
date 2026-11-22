"""The one hardened ZIP extractor shared by every ingest adapter (``loose``, ``dcmburner``, ``radiant``).

Defences, all applied before or while writing (never after):

* **zip-slip**: member names are normalised (``\\`` → ``/``) and rejected if absolute, drive-lettered, containing
  ``..``, ``:``, NUL, a Windows reserved device name (``CON``, ``LPT1.txt``) or a trailing dot/space; the final
  path must resolve inside ``dest``.
* **links**: symlink entries (Unix mode ``S_IFLNK`` in ``external_attr``) are never created.
* **programs**: executables / autorun / script files are never written.
* **bombs**: per-entry and whole-archive compression ratio (``MAX_RATIO``), cumulative uncompressed size
  (``MAX_TOTAL_UNCOMPRESSED``) and file count (``MAX_FILES``) are checked against the declared sizes up front,
  and the real bytes are counted while streaming (a member larger than it claims is a bomb).
  :class:`ExtractBudget` is shared across nested archives so the limits apply to the whole import.

Limits are read from :mod:`medmereport.ingest.base` at call time (tests monkeypatch them there).
Skipped entries are reported through :func:`medmereport.ingest.notes.warn` as PHI-free counts.
"""

from __future__ import annotations

import re
import stat
import zipfile
import zlib
from collections.abc import Callable
from dataclasses import dataclass
from pathlib import Path, PurePosixPath
from typing import IO, Any, Literal

from medmereport.ingest import base
from medmereport.ingest.base import IngestError, OpenContext
from medmereport.ingest.notes import warn

ProgressFn = Callable[[str, float, str], None]

CHUNK = 1 << 20
RATIO_MIN_BYTES = 1 << 20  # small members may legitimately compress extremely well
# Files we never extract or hand on, whatever the container says.
EXECUTABLE_EXT = frozenset({
    ".exe", ".bat", ".cmd", ".com", ".inf", ".dll", ".msi", ".ps1", ".vbs", ".vbe", ".js", ".jse", ".wsf",
    ".scr", ".pif", ".lnk", ".sh", ".app", ".jar", ".hta", ".cpl", ".reg", ".sys", ".so", ".dylib", ".ocx",
    ".class", ".dmg",
})  # fmt: skip
_WIN_RESERVED = re.compile(r"^(con|prn|aux|nul|com\d|lpt\d)(\..*)?$", re.IGNORECASE)

BOMB = "This archive looks like a decompression bomb and was not unpacked."


@dataclass
class ExtractBudget:
    """Cumulative extraction limits for one import (shared across nested archives)."""

    total_bytes: int = 0
    files: int = 0

    def charge(self, nbytes: int = 0, nfiles: int = 0) -> None:
        """Account for ``nbytes``/``nfiles``; raise ``IngestError('too_large')`` past the limits."""
        self.total_bytes += nbytes
        self.files += nfiles
        if self.total_bytes > base.MAX_TOTAL_UNCOMPRESSED:
            raise IngestError("too_large", "This archive expands to more data than medmereport will unpack.")
        if self.files > base.MAX_FILES:
            raise IngestError("too_large", "This archive contains too many files.")


def clean_member_name(name: str) -> PurePosixPath | None:
    """A safe relative path for an archive member name, or ``None`` if the entry must be rejected."""
    if not name or "\x00" in name:
        return None
    norm = name.replace("\\", "/")
    if norm.startswith("/") or re.match(r"^[A-Za-z]:", norm):
        return None
    parts = [p for p in norm.split("/") if p not in ("", ".")]
    if not parts:
        return None
    for p in parts:
        if p == ".." or ":" in p or p.rstrip(" .") != p or _WIN_RESERVED.match(p):
            return None
    return PurePosixPath(*parts)


def safe_member_path(dest: Path, name: str) -> Path | None:
    """Map an archive member name to a path inside ``dest``, or ``None`` if it is unsafe."""
    rel = clean_member_name(name)
    if rel is None:
        return None
    root = dest.resolve()
    target = (root / rel).resolve()
    if target == root or not target.is_relative_to(root):
        return None
    return target


def is_program(rel: PurePosixPath | Path) -> bool:
    return rel.suffix.lower() in EXECUTABLE_EXT or rel.name.lower() == "autorun.inf"


def check_ratio(uncompressed: int, compressed: int) -> None:
    if uncompressed > RATIO_MIN_BYTES and uncompressed > base.MAX_RATIO * max(compressed, 1):
        raise IngestError("too_large", BOMB)


def _is_symlink(info: Any) -> bool:
    return stat.S_ISLNK((int(getattr(info, "external_attr", 0)) >> 16) & 0xFFFF)


def _is_damage(exc: BaseException) -> bool:
    if isinstance(exc, (OSError, EOFError, ValueError, zlib.error, zipfile.BadZipFile, zipfile.LargeZipFile)):
        return True
    return type(exc).__name__ in ("BadZipFile", "BadZipfile", "LargeZipFile")  # pyzipper's own classes


def _stream(src: IO[bytes], dst: Path, declared: int, budget: ExtractBudget) -> int:
    """Copy ``src`` to ``dst`` charging the budget; never trust the declared size. Removes ``dst`` on failure."""
    written = 0
    try:
        with dst.open("wb") as out:
            while chunk := src.read(CHUNK):
                written += len(chunk)
                if written > declared:
                    raise IngestError("too_large", BOMB)
                budget.charge(len(chunk))
                out.write(chunk)
    except BaseException:
        dst.unlink(missing_ok=True)
        raise
    return written


def extract_zip(
    zf: Any,
    dest: Path,
    *,
    ctx: OpenContext | None = None,
    pwd: bytes | None = None,
    budget: ExtractBudget | None = None,
    progress: ProgressFn | None = None,
    stage: str = "extract",
    on_damaged: Literal["raise", "skip"] = "raise",
) -> list[Path]:
    """Extract an open ``zipfile.ZipFile`` / ``pyzipper.AESZipFile`` into ``dest`` (see the module docstring).

    Returns the written files in archive order. Raises ``IngestError("too_large")`` past any limit (before
    anything is written when the declared sizes already exceed them). A damaged member raises
    ``IngestError("corrupt")`` or, with ``on_damaged="skip"``, is skipped with a warning. ``RuntimeError``
    (pyzipper's bad-password signal) propagates so the caller can raise its adapter's ``WrongPassword``.
    """
    budget = budget if budget is not None else ExtractBudget()
    dest.mkdir(parents=True, exist_ok=True)
    infos = [i for i in zf.infolist() if not i.is_dir()]
    unsafe = programs = 0
    plan: list[tuple[Any, Path]] = []
    for info in infos:
        rel = clean_member_name(info.filename)
        target = safe_member_path(dest, info.filename) if rel is not None else None
        if target is None or rel is None or _is_symlink(info):
            unsafe += 1
        elif is_program(rel):
            programs += 1
        else:
            plan.append((info, target))
    declared = sum(int(i.file_size) for i, _ in plan)
    for info, _ in plan:
        check_ratio(int(info.file_size), int(info.compress_size))
    check_ratio(declared, sum(int(i.compress_size) for i, _ in plan))
    if budget.total_bytes + declared > base.MAX_TOTAL_UNCOMPRESSED:
        raise IngestError("too_large", "This archive expands to more data than medmereport will unpack.")
    budget.charge(0, len(plan))

    out: list[Path] = []
    damaged = 0
    for n, (info, target) in enumerate(plan):
        target.parent.mkdir(parents=True, exist_ok=True)
        try:
            with zf.open(info, pwd=pwd) as member:
                _stream(member, target, int(info.file_size), budget)
        except (IngestError, RuntimeError):
            raise
        except Exception as exc:
            if not _is_damage(exc):
                raise
            if on_damaged == "raise":
                raise IngestError("corrupt", "Part of this archive is damaged and could not be read.") from exc
            damaged += 1
            continue
        out.append(target)
        if progress is not None and (n % 50 == 0 or n == len(plan) - 1):
            progress(stage, 100.0 * (n + 1) / len(plan), "")
    _report(ctx, unsafe, programs, damaged)
    return out


def _report(ctx: OpenContext | None, unsafe: int, programs: int, damaged: int) -> None:
    notes = []
    if unsafe:
        notes.append(f"{unsafe} archive entries with unsafe paths or links were rejected.")
    if programs:
        notes.append(f"{programs} program files inside an archive were ignored.")
    if damaged:
        notes.append("Some files inside an archive were damaged and were skipped.")
    for msg in notes:
        if ctx is not None:
            warn(ctx, msg)
        else:
            from medmereport.ingest.notes import log

            log.warning("%s", msg)
