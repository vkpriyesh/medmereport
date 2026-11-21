"""DcmBurner encrypted disc adapter.

On-disk layout: ``burn.enc`` (OpenSSL ``enc -aes-256-cbc`` format: ``Salted__`` + 8-byte salt + ciphertext,
key/IV from EVP_BytesToKey with SHA-256, 1 iteration; older burners used MD5) wrapping a ZIP of DICOM files
+ DICOMDIR. The disc also carries ``decrypt_win.exe``, ``run.bat``, ``autorun.inf`` and a viewer: none of
these are ever opened or executed here. We re-implement the documented crypto with the user's own password.

This module also hosts :func:`safe_extract_zip`, the zip-slip / zip-bomb-safe extractor shared by the
encrypted-container adapters.
"""

from __future__ import annotations

import hashlib
import os
import shutil
import stat
import tempfile
import zipfile
import zlib
from collections.abc import Callable, Iterator
from dataclasses import dataclass
from pathlib import Path, PurePosixPath
from typing import Any

from cryptography.hazmat.primitives import padding
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes

from medmereport.core.logging import get_logger
from medmereport.ingest.base import (
    MAX_FILES,
    MAX_RATIO,
    MAX_TOTAL_UNCOMPRESSED,
    Detection,
    IngestError,
    OpenContext,
    PasswordRequired,
    WrongPassword,
)

log = get_logger("medmereport.ingest.dcmburner")

MAGIC = b"Salted__"
ZIP_MAGIC = b"PK\x03\x04"
CHUNK = 1 << 20
# Files we never extract or hand on, whatever the container says.
EXECUTABLE_EXT = frozenset(
    {
        ".exe",
        ".bat",
        ".cmd",
        ".com",
        ".inf",
        ".dll",
        ".msi",
        ".ps1",
        ".vbs",
        ".vbe",
        ".js",
        ".jse",
        ".wsf",
        ".scr",
        ".pif",
        ".lnk",
        ".sh",
        ".app",
        ".jar",
        ".hta",
        ".cpl",
        ".reg",
        ".sys",
        ".so",
        ".dylib",
    }
)
_WIN_RESERVED = frozenset(
    {"con", "prn", "aux", "nul", *(f"com{i}" for i in range(1, 10)), *(f"lpt{i}" for i in range(1, 10))}
)
_RATIO_MIN_SIZE = 1 << 20  # small entries may legitimately compress very well

ProgressFn = Callable[[str, float, str], None]


def _progress(ctx: OpenContext) -> ProgressFn:
    fn = ctx.progress
    if callable(fn):

        def report(stage: str, pct: float, msg: str = "") -> None:
            try:
                fn(stage, pct, msg)
            except Exception:  # progress must never break an import
                log.debug("progress callback failed")

        return report

    def noop(stage: str, pct: float, msg: str = "") -> None:
        return None

    return noop


def find_child(directory: Path, name: str) -> Path | None:
    """Case-insensitive lookup of a direct child (ISO9660 discs on Linux often show upper case)."""
    target = name.lower()
    try:
        for p in directory.iterdir():
            if p.name.lower() == target:
                return p
    except OSError:
        return None
    return None


# ---------------------------------------------------------------------------- safe extraction


@dataclass
class ArchiveBudget:
    """Shared across nested archives of one import so limits apply to the whole import."""

    total: int = 0
    files: int = 0


def _clean_member_name(name: str) -> PurePosixPath | None:
    """Return a safe relative path for an archive entry, or None if the entry must be rejected."""
    if "\x00" in name:
        return None
    norm = name.replace("\\", "/")
    if norm.startswith("/") or (len(norm) > 1 and norm[1] == ":"):
        return None
    parts = [p for p in norm.split("/") if p not in ("", ".")]
    if not parts:
        return None
    for p in parts:
        if p == ".." or ":" in p or p.rstrip(" .") != p:
            return None
        if p.split(".")[0].lower() in _WIN_RESERVED:
            return None
    return PurePosixPath(*parts)


def safe_extract_zip(
    zf: Any,
    dest: Path,
    *,
    pwd: bytes | None = None,
    budget: ArchiveBudget | None = None,
    progress: ProgressFn | None = None,
    stage: str = "extract",
) -> list[Path]:
    """Extract a ``zipfile.ZipFile`` / ``pyzipper.AESZipFile`` into ``dest`` with zip-slip and zip-bomb checks.

    Unsafe entries (absolute paths, ``..``, drive letters, symlinks, executables) are skipped.
    Exceeding the size / count / ratio limits raises ``IngestError("too_large")``. Corrupt data raises
    ``IngestError("corrupt")``. ``RuntimeError`` (bad password in pyzipper) propagates to the caller.
    """
    budget = budget if budget is not None else ArchiveBudget()
    dest.mkdir(parents=True, exist_ok=True)
    root = dest.resolve()
    infos = zf.infolist()
    out: dict[Path, None] = {}
    skipped = 0
    for i, info in enumerate(infos):
        if info.is_dir():
            continue
        rel = _clean_member_name(info.filename)
        mode = (info.external_attr >> 16) & 0xFFFF
        if rel is None or stat.S_ISLNK(mode) or rel.suffix.lower() in EXECUTABLE_EXT:
            skipped += 1
            continue
        target = (root / rel).resolve()
        if not target.is_relative_to(root) or target == root:
            skipped += 1
            continue
        budget.files += 1
        if budget.files > MAX_FILES:
            raise IngestError("too_large", "This archive contains too many files.")
        declared = int(info.file_size)
        if budget.total + declared > MAX_TOTAL_UNCOMPRESSED:
            raise IngestError("too_large", "This archive is too large to unpack.")
        if declared > _RATIO_MIN_SIZE and declared > MAX_RATIO * max(int(info.compress_size), 1):
            raise IngestError("too_large", "This archive looks like a zip bomb and was not unpacked.")
        target.parent.mkdir(parents=True, exist_ok=True)
        written = 0
        try:
            with zf.open(info, pwd=pwd) as src, open(target, "wb") as dst:
                while True:
                    block = src.read(CHUNK)
                    if not block:
                        break
                    written += len(block)
                    if written > declared:  # header lied about the size
                        raise IngestError("too_large", "This archive looks like a zip bomb and was not unpacked.")
                    dst.write(block)
        except (IngestError, RuntimeError):
            target.unlink(missing_ok=True)
            raise
        except (OSError, EOFError, ValueError, zlib.error, zipfile.BadZipFile) as exc:
            target.unlink(missing_ok=True)
            raise IngestError("corrupt", "Part of this archive is damaged and could not be read.") from exc
        except Exception as exc:  # e.g. pyzipper.BadZipFile (not a subclass of zipfile.BadZipFile)
            target.unlink(missing_ok=True)
            if type(exc).__name__ in ("BadZipFile", "BadZipfile", "LargeZipFile"):
                raise IngestError("corrupt", "Part of this archive is damaged and could not be read.") from exc
            raise
        budget.total += written
        out[target] = None
        if progress is not None and (i % 50 == 0 or i == len(infos) - 1):
            progress(stage, 100.0 * (i + 1) / max(len(infos), 1), "")
    if skipped:
        log.warning("skipped %d unsafe or executable archive entries", skipped)
    return list(out)


# ---------------------------------------------------------------------------- crypto


def evp_bytes_to_key(password: bytearray | bytes, salt: bytes, md: str) -> tuple[bytes, bytes]:
    """OpenSSL EVP_BytesToKey with one iteration: 32-byte AES key + 16-byte IV."""
    out = bytearray()
    prev = b""
    while len(out) < 48:
        h = hashlib.new(md)
        h.update(prev)
        h.update(password)  # hashlib accepts the bytearray directly: no extra immutable copy
        h.update(salt)
        prev = h.digest()
        out += prev
    key, iv = bytes(out[:32]), bytes(out[32:48])
    for i in range(len(out)):
        out[i] = 0
    return key, iv


def _first_block_ok(key: bytes, iv: bytes, block: bytes) -> bool:
    dec = Cipher(algorithms.AES(key), modes.CBC(iv)).decryptor()
    return (dec.update(block) + dec.finalize()).startswith(ZIP_MAGIC)


@dataclass
class DcmBurnerAdapter:
    name: str = "dcmburner"
    label: str = "Encrypted disc (DcmBurner)"
    digests: tuple[str, ...] = ("sha256", "md5")

    # -- detection ------------------------------------------------------------------------------
    @staticmethod
    def _locate(src: Path) -> Path | None:
        if src.is_file():
            return src if src.suffix.lower() == ".enc" else None
        if not src.is_dir():
            return None
        hit = find_child(src, "burn.enc")
        if hit is not None and hit.is_file():
            return hit
        try:
            subdirs = sorted(p for p in src.iterdir() if p.is_dir())[:64]
        except OSError:
            return None
        for d in subdirs:
            hit = find_child(d, "burn.enc")
            if hit is not None and hit.is_file():
                return hit
        return None

    def detect(self, src: Path) -> Detection | None:
        enc = self._locate(src)
        if enc is None:
            return None
        try:
            with open(enc, "rb") as f:
                head = f.read(len(MAGIC))
        except OSError:
            return None
        if head != MAGIC:
            return None
        notes = ["burn.enc (AES-256, OpenSSL format)"]
        if find_child(enc.parent, "burn.lock") is not None:
            notes.append("burn.lock present")
        return Detection(adapter=self.name, confidence=0.97, encrypted=True, notes=notes)

    # -- opening --------------------------------------------------------------------------------
    def open(self, src: Path, ctx: OpenContext) -> Iterator[Path]:
        enc = self._locate(src)
        if enc is None:
            raise IngestError("unsupported", "No burn.enc file was found on this disc.", adapter=self.name)
        if not ctx.password:
            raise PasswordRequired(self.name)
        progress = _progress(ctx)
        work = Path(tempfile.mkdtemp(prefix="dcmburner-", dir=ctx.tmp))
        try:
            files = self._decrypt_and_extract(enc, work, ctx.password, progress)
        except BaseException:
            shutil.rmtree(work, ignore_errors=True)
            raise
        yield from files

    def _decrypt_and_extract(self, enc: Path, work: Path, password: bytearray, progress: ProgressFn) -> list[Path]:
        try:
            size = enc.stat().st_size
            with open(enc, "rb") as f:
                header = f.read(16)
                first = f.read(16)
        except OSError as exc:
            raise IngestError("corrupt", "The encrypted file on this disc could not be read.") from exc
        if header[:8] != MAGIC:
            raise IngestError("unsupported", "burn.enc is not in a format we recognise.", adapter=self.name)
        if len(first) < 16:
            raise IngestError("corrupt", "The encrypted file on this disc is damaged or incomplete.")
        salt = header[8:16]

        progress("decrypt", 0.0, "checking password")
        key_iv: tuple[bytes, bytes] | None = None
        for md in self.digests:
            key, iv = evp_bytes_to_key(password, salt, md)
            if _first_block_ok(key, iv, first):
                key_iv = (key, iv)
                break
        if key_iv is None:
            raise WrongPassword(self.name)
        key, iv = key_iv
        body = size - 16
        if body <= 0 or body % 16:
            raise IngestError("corrupt", "The encrypted file on this disc is damaged or incomplete.")

        plain = work / "decrypted.zip"
        try:
            self._decrypt_stream(enc, plain, key, iv, body, progress)
            progress("extract", 0.0, "unpacking")
            try:
                with zipfile.ZipFile(plain) as zf:
                    files = safe_extract_zip(zf, work / "files", progress=progress)
            except zipfile.BadZipFile as exc:
                raise IngestError("corrupt", "The decrypted disc archive is damaged.") from exc
        finally:
            plain.unlink(missing_ok=True)  # never keep a plaintext copy of the whole disc around
        progress("extract", 100.0, "")
        return sorted(files)

    @staticmethod
    def _decrypt_stream(enc: Path, plain: Path, key: bytes, iv: bytes, body: int, progress: ProgressFn) -> None:
        dec = Cipher(algorithms.AES(key), modes.CBC(iv)).decryptor()
        unpad = padding.PKCS7(128).unpadder()
        fd = os.open(plain, os.O_WRONLY | os.O_CREAT | os.O_EXCL | getattr(os, "O_BINARY", 0), 0o600)
        done = 0
        with open(enc, "rb") as fin, os.fdopen(fd, "wb") as fout:
            fin.seek(16)
            while True:
                chunk = fin.read(CHUNK)
                if not chunk:
                    break
                done += len(chunk)
                fout.write(unpad.update(dec.update(chunk)))
                progress("decrypt", 100.0 * done / body, "")
            try:
                fout.write(unpad.update(dec.finalize()) + unpad.finalize())
            except ValueError as exc:  # bad PKCS7 padding or truncated ciphertext
                raise IngestError("corrupt", "The encrypted file on this disc is damaged or incomplete.") from exc


adapter = DcmBurnerAdapter()
