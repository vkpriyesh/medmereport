"""``loose`` adapter: plain folders, ZIP and 7z archives (nested up to ``MAX_NESTING``).

Archives are recognised by magic bytes, not extension, and extracted only into the session temp
directory. Every member name is validated (no absolute paths, drive letters, ``..`` or reserved
device names) and every byte written is counted against the zip-bomb limits in ``base``. Files that
look like executables, autorun files or bundled viewers are never yielded.
"""

from __future__ import annotations

import os
import re
import shutil
import tempfile
import zipfile
from collections.abc import Iterator
from dataclasses import dataclass
from pathlib import Path, PurePosixPath
from typing import IO, Literal

import py7zr
import pyzipper
from py7zr.exceptions import PasswordRequired as SevenZipPasswordRequired

from medmereport.dicom.sniff import has_dicm_magic
from medmereport.ingest import base
from medmereport.ingest.base import Detection, IngestError, OpenContext, PasswordRequired, WrongPassword
from medmereport.ingest.notes import warn

ArchiveKind = Literal["zip", "7z"]

ZIP_MAGICS = (b"PK\x03\x04", b"PK\x05\x06")
SEVENZ_MAGIC = b"7z\xbc\xaf\x27\x1c"
SKIP_EXTENSIONS = frozenset({
    ".exe", ".dll", ".msi", ".bat", ".cmd", ".com", ".scr", ".ps1", ".vbs", ".js", ".jar", ".class",
    ".sys", ".ocx", ".inf", ".lnk", ".app", ".dmg", ".sh", ".so", ".dylib",
})  # fmt: skip
SKIP_FILE_NAMES = frozenset({"autorun.inf", "desktop.ini", "thumbs.db", ".ds_store"})
SKIP_DIR_NAMES = frozenset({
    "viewer", "viewers", "weasis", "jre", "java", "radiant", "microdicom", "efilm", "k-pacs", "onis",
    "imagej", "__macosx", "$recycle.bin", "system volume information",
})  # fmt: skip
_WIN_RESERVED = re.compile(r"^(con|prn|aux|nul|com\d|lpt\d)(\..*)?$", re.IGNORECASE)
_RATIO_MIN_BYTES = 1 << 20  # small members may legitimately compress extremely well
_CHUNK = 1 << 20


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


def should_skip(path: Path) -> bool:
    """True for executables, autorun/system files and anything inside a bundled-viewer folder."""
    name = path.name.lower()
    if name in SKIP_FILE_NAMES or path.suffix.lower() in SKIP_EXTENSIONS:
        return True
    return any(part.lower() in SKIP_DIR_NAMES for part in path.parent.parts)


def archive_kind(path: Path) -> ArchiveKind | None:
    """Detect ZIP/7z by magic bytes. Part-10 DICOM files (which may have any preamble) are never archives."""
    try:
        with path.open("rb") as fh:
            head = fh.read(6)
    except OSError:
        return None
    if head.startswith(SEVENZ_MAGIC):
        return "7z"
    if head[:4] in ZIP_MAGICS and not has_dicm_magic(path):
        return "zip"
    return None


def safe_member_path(dest: Path, name: str) -> Path | None:
    """Map an archive member name to a path inside ``dest``, or None if it is unsafe."""
    if not name or "\x00" in name:
        return None
    norm = name.replace("\\", "/")
    if norm.startswith("/") or re.match(r"^[A-Za-z]:", norm):
        return None
    parts = [p for p in PurePosixPath(norm).parts if p not in ("", ".")]
    if not parts or any(p == ".." or _WIN_RESERVED.match(p) or p.endswith((" ", ".")) for p in parts):
        return None
    target = dest.joinpath(*parts)
    try:
        target.resolve().relative_to(dest.resolve())
    except ValueError:
        return None
    return target


def _copy_limited(src: IO[bytes], dst: Path, declared: int, budget: ExtractBudget) -> None:
    """Stream ``src`` to ``dst`` charging the budget; never trust the declared size."""
    written = 0
    try:
        with dst.open("wb") as out:
            while chunk := src.read(_CHUNK):
                written += len(chunk)
                if written > declared:
                    raise IngestError("too_large", "An archive member is larger than it claims to be.")
                budget.charge(len(chunk))
                out.write(chunk)
    except BaseException:
        dst.unlink(missing_ok=True)
        raise


def _check_ratio(uncompressed: int, compressed: int) -> None:
    if uncompressed > _RATIO_MIN_BYTES and uncompressed > base.MAX_RATIO * max(compressed, 1):
        raise IngestError("too_large", "This archive looks like a decompression bomb and was not unpacked.")


def _zip_password(zf: zipfile.ZipFile, ctx: OpenContext) -> None:
    if not any(info.flag_bits & 0x1 for info in zf.infolist()):
        return
    if not ctx.password:
        raise PasswordRequired("loose", hint="zip")
    zf.setpassword(bytes(ctx.password))


def extract_zip(path: Path, dest: Path, ctx: OpenContext, budget: ExtractBudget) -> None:
    """Safely extract a (possibly AES/ZipCrypto encrypted) ZIP into ``dest``."""
    try:
        zf = pyzipper.AESZipFile(path)
    except (zipfile.BadZipFile, OSError, ValueError) as exc:
        raise IngestError("unsupported", "A ZIP archive is damaged and could not be opened.") from exc
    with zf:
        infos = [i for i in zf.infolist() if not i.is_dir()]
        budget.charge(0, len(infos))
        for info in infos:
            _check_ratio(info.file_size, info.compress_size)
        _zip_password(zf, ctx)
        unsafe = 0
        for info in infos:
            target = safe_member_path(dest, info.filename)
            if target is None:
                unsafe += 1
                continue
            target.parent.mkdir(parents=True, exist_ok=True)
            try:
                with zf.open(info) as member:
                    _copy_limited(member, target, info.file_size, budget)
            except RuntimeError as exc:  # bad password
                raise WrongPassword("loose") from exc
            except (zipfile.BadZipFile, zipfile.LargeZipFile, OSError, EOFError, ValueError):
                warn(ctx, "Some files inside an archive were damaged and were skipped.")
        if unsafe:
            warn(ctx, f"{unsafe} archive entries with unsafe paths were rejected.")


def extract_7z(path: Path, dest: Path, ctx: OpenContext, budget: ExtractBudget) -> None:
    """Safely extract a 7z archive into ``dest`` (declared sizes checked before any write)."""
    password = bytes(ctx.password).decode("utf-8", "replace") if ctx.password else None
    try:
        with py7zr.SevenZipFile(path, mode="r", password=password) as z:
            if z.needs_password() and password is None:
                raise PasswordRequired("loose", hint="7z")
            entries = [e for e in z.list() if not e.is_directory]
            total = sum(int(e.uncompressed or 0) for e in entries)
            _check_ratio(total, path.stat().st_size)
            budget.charge(total, len(entries))
            targets = [e.filename for e in entries if not e.is_symlink and safe_member_path(dest, e.filename)]
            if len(targets) < len(entries):
                warn(ctx, f"{len(entries) - len(targets)} archive entries with unsafe paths were rejected.")
            if targets:
                z.extract(path=dest, targets=targets)
    except IngestError:
        raise
    except SevenZipPasswordRequired as exc:
        raise PasswordRequired("loose", hint="7z") from exc
    except Exception as exc:  # noqa: BLE001 - py7zr raises many types (wrong password shows up as CRC/LZMA errors)
        if password is not None:
            raise WrongPassword("loose") from exc
        raise IngestError("unsupported", "A 7z archive is damaged and could not be opened.") from exc


def _extract(path: Path, kind: ArchiveKind, ctx: OpenContext, budget: ExtractBudget) -> Path:
    root = ctx.tmp / "extract"
    root.mkdir(parents=True, exist_ok=True)
    dest = Path(tempfile.mkdtemp(prefix="a", dir=root))
    try:
        (extract_zip if kind == "zip" else extract_7z)(path, dest, ctx, budget)
    except BaseException:
        shutil.rmtree(dest, ignore_errors=True)
        raise
    return dest


def walk(src: Path, ctx: OpenContext, *, budget: ExtractBudget | None = None, depth: int = 0) -> Iterator[Path]:
    """Yield plain files under ``src`` (file or folder), expanding archives into ``ctx.tmp``.

    Symlinks are never followed, executables/viewers are skipped, and archives nested deeper than
    ``MAX_NESTING`` are skipped with a warning.
    """
    budget = budget if budget is not None else ExtractBudget()
    for path in _iter_tree(src):
        kind = archive_kind(path)
        if kind is None:
            yield path
            continue
        if depth >= base.MAX_NESTING:
            warn(ctx, "An archive nested too deeply inside other archives was skipped.")
            continue
        dest = _extract(path, kind, ctx, budget)
        yield from walk(dest, ctx, budget=budget, depth=depth + 1)


def _iter_tree(src: Path) -> Iterator[Path]:
    if src.is_symlink():
        return
    if src.is_file():
        if not should_skip(Path(src.name)):
            yield src
        return
    for dirpath, dirnames, filenames in os.walk(src, followlinks=False):
        dirnames[:] = sorted(d for d in dirnames if d.lower() not in SKIP_DIR_NAMES)
        for fname in sorted(filenames):
            p = Path(dirpath, fname)
            if not p.is_symlink() and not should_skip(p.relative_to(src)):
                yield p


class LooseAdapter:
    """Folders, single files and ZIP/7z archives. The generic fallback adapter."""

    name = "loose"
    label = "Folder or archive (ZIP/7z)"

    def detect(self, src: Path) -> Detection | None:
        """Low-confidence match for any folder/file; archives score a bit higher."""
        if src.is_dir():
            return Detection(self.name, 0.2, notes=["folder"])
        if not src.is_file():
            return None
        kind = archive_kind(src)
        if kind is None:
            return Detection(self.name, 0.1, notes=["file"])
        return Detection(self.name, 0.5, encrypted=_is_encrypted(src, kind), notes=[kind])

    def open(self, src: Path, ctx: OpenContext) -> Iterator[Path]:
        """Yield every plain file, extracting archives safely into ``ctx.tmp``."""
        yield from walk(src, ctx)


def _is_encrypted(path: Path, kind: ArchiveKind) -> bool:
    try:
        if kind == "zip":
            with zipfile.ZipFile(path) as zf:
                return any(i.flag_bits & 0x1 for i in zf.infolist()[:64])
        with py7zr.SevenZipFile(path, mode="r") as z:
            return bool(z.needs_password())
    except Exception:  # noqa: BLE001 - a damaged or header-encrypted archive
        return kind == "7z"
