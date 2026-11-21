"""Non-fatal ingest notes ("3 files were unreadable") collected alongside :class:`OpenContext`.

``base.OpenContext`` has no warnings channel, so :func:`scan_source` passes adapters a
:class:`ScanContext` (an ``OpenContext`` subclass). Adapters call :func:`warn`, which works with a
plain ``OpenContext`` too (the note is then only logged). Notes must never contain paths or patient
identifiers; they are also passed through the redacting logger.
"""

from __future__ import annotations

from dataclasses import dataclass, field

from medmereport.core.logging import get_logger
from medmereport.ingest.base import OpenContext

log = get_logger(__name__)


@dataclass
class ScanContext(OpenContext):
    """``OpenContext`` plus a list of user-facing, PHI-free warnings."""

    warnings: list[str] = field(default_factory=list)

    @classmethod
    def wrap(cls, ctx: OpenContext) -> ScanContext:
        """Return ``ctx`` itself if it already collects warnings, else a copy sharing tmp/password/progress."""
        if isinstance(ctx, ScanContext):
            return ctx
        return cls(tmp=ctx.tmp, password=ctx.password, progress=ctx.progress)


def warn(ctx: OpenContext, message: str) -> None:
    """Record a non-fatal note (deduplicated) and log it."""
    log.warning("%s", message)
    if isinstance(ctx, ScanContext) and message not in ctx.warnings:
        ctx.warnings.append(message)


def progress(ctx: OpenContext, stage: str, pct: float, msg: str = "") -> None:
    """Call ``ctx.progress(stage, pct, msg)`` if a callback was provided."""
    cb = ctx.progress
    if callable(cb):
        cb(stage, pct, msg)
