"""Non-fatal ingest notes ("3 files were unreadable") collected on :attr:`OpenContext.warnings`.

Adapters call :func:`warn`. Notes must never contain paths or patient identifiers; they are also passed
through the redacting logger.
"""

from __future__ import annotations

from medmereport.core.logging import get_logger
from medmereport.ingest.base import OpenContext

log = get_logger(__name__)


def warn(ctx: OpenContext, message: str) -> None:
    """Record a non-fatal note on ``ctx.warnings`` (deduplicated) and log it."""
    log.warning("%s", message)
    notes = getattr(ctx, "warnings", None)
    if isinstance(notes, list) and message not in notes:
        notes.append(message)


def progress(ctx: OpenContext, stage: str, pct: float, msg: str = "") -> None:
    """Call ``ctx.progress(stage, pct, msg)`` if a callback was provided."""
    cb = ctx.progress
    if callable(cb):
        cb(stage, pct, msg)
