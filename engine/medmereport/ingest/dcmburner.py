"""DcmBurner encrypted disc adapter.

On-disk layout: ``burn.enc`` (OpenSSL ``enc -aes-256-cbc`` format: ``Salted__`` + 8-byte salt + ciphertext,
key/IV from EVP_BytesToKey with SHA-256, 1 iteration; older burners used MD5) wrapping a ZIP of DICOM files
+ DICOMDIR. The disc also carries ``decrypt_win.exe``, ``run.bat``, ``autorun.inf`` and a viewer: none of
these are ever opened or executed here. We re-implement the documented crypto with the user's own password.

The decrypted ZIP is unpacked by the shared hardened extractor in :mod:`medmereport.ingest.archive`.
"""

from __future__ import annotations

import hashlib
import os
import shutil
import tempfile
import zipfile
from collections.abc import Callable, Iterator
from dataclasses import dataclass
from pathlib import Path

from cryptography.hazmat.primitives import padding
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes

from medmereport.core.logging import get_logger
from medmereport.ingest import archive
from medmereport.ingest.archive import ExtractBudget
from medmereport.ingest.base import (
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


# kept for importers of the old names (radiant, plugins); the implementation lives in ingest.archive
ArchiveBudget = ExtractBudget
safe_extract_zip = archive.extract_zip


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
            files = self._decrypt_and_extract(enc, work, ctx.password, progress, ctx)
        except BaseException:
            shutil.rmtree(work, ignore_errors=True)
            raise
        yield from files

    def _decrypt_and_extract(
        self, enc: Path, work: Path, password: bytearray, progress: ProgressFn, ctx: OpenContext | None = None
    ) -> list[Path]:
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
                    files = archive.extract_zip(zf, work / "files", ctx=ctx, progress=progress)
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
