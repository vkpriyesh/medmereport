"""RadiAnt encrypted media adapter.

On-disk layout: ``dcmdata.zip`` at the disc root, a WinZip-AES-256 (7-Zip) encrypted ZIP that wraps an
unencrypted ``container.zip`` of DICOM files. The RadiAnt viewer .exe next to it is never touched.
"""

from __future__ import annotations

import shutil
import tempfile
from collections.abc import Iterator
from dataclasses import dataclass
from pathlib import Path

import pyzipper

from medmereport.core.logging import get_logger
from medmereport.ingest.base import (
    MAX_NESTING,
    Detection,
    IngestError,
    OpenContext,
    PasswordRequired,
    WrongPassword,
)
from medmereport.ingest.dcmburner import ArchiveBudget, ProgressFn, _progress, find_child, safe_extract_zip

log = get_logger("medmereport.ingest.radiant")

ZIP_MAGIC = b"PK\x03\x04"


def _is_zip(p: Path) -> bool:
    try:
        with open(p, "rb") as f:
            return f.read(4) == ZIP_MAGIC
    except OSError:
        return False


def _corrupt(exc: BaseException) -> IngestError:
    err = IngestError("corrupt", "The disc archive is damaged and could not be read.")
    err.__cause__ = exc
    return err


@dataclass
class RadiantAdapter:
    name: str = "radiant"
    label: str = "Encrypted disc (RadiAnt)"

    @staticmethod
    def _locate(src: Path) -> Path | None:
        if src.is_file():
            return src if src.name.lower() == "dcmdata.zip" else None
        if src.is_dir():
            hit = find_child(src, "dcmdata.zip")
            if hit is not None and hit.is_file():
                return hit
        return None

    def detect(self, src: Path) -> Detection | None:
        z = self._locate(src)
        if z is None or not _is_zip(z):
            return None
        try:
            with pyzipper.AESZipFile(z) as zf:  # reads the central directory only
                infos = zf.infolist()
        except Exception:
            return Detection(adapter=self.name, confidence=0.5, notes=["dcmdata.zip could not be listed"])
        encrypted = any(i.flag_bits & 0x1 for i in infos)
        notes = ["dcmdata.zip (AES-256 zip)" if encrypted else "dcmdata.zip"]
        if any(i.filename.lower().rsplit("/", 1)[-1] == "container.zip" for i in infos):
            notes.append("container.zip inside")
        return Detection(adapter=self.name, confidence=0.95, encrypted=encrypted, notes=notes)

    def open(self, src: Path, ctx: OpenContext) -> Iterator[Path]:
        z = self._locate(src)
        if z is None:
            raise IngestError("unsupported", "No dcmdata.zip was found on this disc.", adapter=self.name)
        progress = _progress(ctx)
        work = Path(tempfile.mkdtemp(prefix="radiant-", dir=ctx.tmp))
        try:
            files = self._extract(z, work, ctx, progress)
        except BaseException:
            shutil.rmtree(work, ignore_errors=True)
            raise
        yield from files

    def _open_zip(
        self, path: Path, dest: Path, ctx: OpenContext, budget: ArchiveBudget, progress: ProgressFn
    ) -> list[Path]:
        try:
            zf = pyzipper.AESZipFile(path)
        except Exception as exc:
            raise _corrupt(exc) from exc
        with zf:
            infos = zf.infolist()
            enc_infos = [i for i in infos if i.flag_bits & 0x1 and not i.is_dir()]
            pwd: bytes | None = None
            if enc_infos:
                if not ctx.password:
                    raise PasswordRequired(self.name)
                pwd = bytes(ctx.password)  # pyzipper insists on bytes; dropped as soon as we're done
                try:
                    with zf.open(enc_infos[0], pwd=pwd) as f:
                        f.read(1)
                except RuntimeError as exc:
                    raise WrongPassword(self.name) from exc
                except Exception as exc:
                    raise _corrupt(exc) from exc
            try:
                return safe_extract_zip(zf, dest, pwd=pwd, budget=budget, progress=progress)
            except RuntimeError as exc:  # a later entry with a different password
                raise WrongPassword(self.name) from exc
            finally:
                del pwd

    def _extract(self, z: Path, work: Path, ctx: OpenContext, progress: ProgressFn) -> list[Path]:
        budget = ArchiveBudget()
        progress("decrypt", 0.0, "opening encrypted archive")
        files = self._open_zip(z, work / "outer", ctx, budget, progress)
        depth = 1
        while True:
            inner = [p for p in files if p.suffix.lower() == ".zip" and _is_zip(p)]
            if not inner:
                break
            if depth >= MAX_NESTING:
                raise IngestError("too_large", "Archives are nested too deeply.")
            depth += 1
            rest = [p for p in files if p not in inner]
            for n, p in enumerate(inner):
                progress("extract", 100.0 * n / len(inner), "unpacking inner archive")
                dest = p.with_name(p.name + f".d{depth}")
                extracted = self._open_zip(p, dest, ctx, budget, progress)
                p.unlink(missing_ok=True)
                rest.extend(extracted)
            files = rest
        progress("extract", 100.0, "")
        return sorted(files)


adapter = RadiantAdapter()
