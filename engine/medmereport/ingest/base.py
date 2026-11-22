"""Ingest adapter contract.

An adapter recognises one *container format* (what lands on disk) and turns it into plain files that
the DICOM layer / image layer can read. Adapters never execute anything from the source and never
write outside the session temp directory they are given.

Discovery: adapters are registered in ``medmereport.ingest.registry`` (built-ins) and via the Python
entry-point group ``medmereport.ingest_adapters`` (community plugins).
"""

from __future__ import annotations

from collections.abc import Iterator
from dataclasses import dataclass, field
from pathlib import Path
from typing import Protocol, runtime_checkable

# Safety limits for archives (zip-bomb / path-traversal protection)
MAX_TOTAL_UNCOMPRESSED = 8 * 2**30  # 8 GB
MAX_FILES = 200_000
MAX_NESTING = 3
MAX_RATIO = 200  # uncompressed/compressed per entry


class IngestError(Exception):
    """User-facing error. ``code`` is stable for the UI to translate."""

    def __init__(self, code: str, message: str, **info: object) -> None:
        super().__init__(message)
        self.code = code
        self.info = info


class PasswordRequired(IngestError):
    def __init__(self, adapter: str, hint: str = "") -> None:
        super().__init__(
            "password_required",
            "This disc is encrypted. Enter the password you were given.",
            adapter=adapter,
            hint=hint,
        )


class WrongPassword(IngestError):
    def __init__(self, adapter: str) -> None:
        super().__init__("wrong_password", "That password didn't work. Passwords are case-sensitive.", adapter=adapter)


@dataclass
class Detection:
    adapter: str
    confidence: float  # 0..1
    encrypted: bool = False
    notes: list[str] = field(default_factory=list)


@dataclass
class OpenContext:
    tmp: Path  # private session temp dir for this import (adapter may write here only)
    password: bytearray | None = None  # zeroed by the caller after open() returns
    progress: object | None = None  # callable(stage: str, pct: float, msg: str) or None
    # Non-fatal, user-facing, PHI-free notes ("3 archive entries with unsafe paths were rejected"), added via
    # ``ingest.notes.warn`` and shown with the import result. Never paths or patient identifiers.
    warnings: list[str] = field(default_factory=list)


@runtime_checkable
class IngestAdapter(Protocol):
    name: str  # stable id, e.g. "dicomdir", "dcmburner"
    label: str  # human label, e.g. "Standard DICOM disc"

    def detect(self, src: Path) -> Detection | None:
        """Cheap check (read a few bytes / list a dir). Must not decrypt or extract."""

    def open(self, src: Path, ctx: OpenContext) -> Iterator[Path]:
        """Yield paths of plain files (DICOM or images/PDF) to be read. May extract/decrypt into ctx.tmp."""


def zero(buf: bytearray | None) -> None:
    """Overwrite a password buffer in place."""
    if buf is not None:
        for i in range(len(buf)):
            buf[i] = 0
