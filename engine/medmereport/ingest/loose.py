"""``loose`` adapter: plain folders, ZIP and 7z archives (nested up to ``MAX_NESTING``).

Archives are recognised by magic bytes, not extension, and extracted only into the session temp
directory. Every member name is validated (no absolute paths, drive letters, ``..`` or reserved
device names) and every byte written is counted against the zip-bomb limits in ``base``. Files that
look like executables, autorun files or bundled viewers are never yielded.
"""

from __future__ import annotations

import os
import shutil
import tempfile
import zipfile
from collections.abc import Iterator
from pathlib import Path
from typing import Literal

import py7zr
import pyzipper
from py7zr.exceptions import PasswordRequired as SevenZipPasswordRequired

from medmereport.dicom.sniff import has_dicm_magic
from medmereport.ingest import archive, base
from medmereport.ingest.archive import ExtractBudget, check_ratio, safe_member_path
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


def _zip_password(zf: zipfile.ZipFile, ctx: OpenContext) -> None:
    if not any(info.flag_bits & 0x1 for info in zf.infolist()):
        return
    if not ctx.password:
        raise PasswordRequired("loose", hint="zip")
    zf.setpassword(bytes(ctx.password))


def extract_zip(path: Path, dest: Path, ctx: OpenContext, budget: ExtractBudget) -> None:
    """Safely extract a (possibly AES/ZipCrypto encrypted) ZIP into ``dest`` (``ingest.archive``)."""
    try:
        zf = pyzipper.AESZipFile(path)
    except Exception as exc:  # noqa: BLE001 - zipfile and pyzipper raise different BadZipFile classes
        raise IngestError("unsupported", "A ZIP archive is damaged and could not be opened.") from exc
    with zf:
        _zip_password(zf, ctx)
        try:
            archive.extract_zip(zf, dest, ctx=ctx, budget=budget, on_damaged="skip")
        except RuntimeError as exc:  # bad password
            raise WrongPassword("loose") from exc


def extract_7z(path: Path, dest: Path, ctx: OpenContext, budget: ExtractBudget) -> None:
    """Safely extract a 7z archive into ``dest`` (declared sizes checked before any write)."""
    password = bytes(ctx.password).decode("utf-8", "replace") if ctx.password else None
    try:
        with py7zr.SevenZipFile(path, mode="r", password=password) as z:
            if z.needs_password() and password is None:
                raise PasswordRequired("loose", hint="7z")
            entries = [e for e in z.list() if not e.is_directory]
            total = sum(int(e.uncompressed or 0) for e in entries)
            check_ratio(total, path.stat().st_size)
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
