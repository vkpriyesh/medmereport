"""PHI-redacting logging.

Rule: log messages must never contain patient names, IDs, dates of birth, file paths or other
identifiers. Code should not put them there in the first place; this filter is defence in depth.

Two layers:
  1. Pattern redaction (dates, DICOM person names, long numeric IDs, emails, phone numbers, paths).
  2. Exact-token redaction for values registered at runtime (e.g. the PatientName / PatientID read
     during ingest are registered via ``register_sensitive``).
"""

from __future__ import annotations

import logging
import re
import threading

_PATTERNS: list[tuple[re.Pattern[str], str]] = [
    # Windows / POSIX paths
    (re.compile(r"[A-Za-z]:[\\/][^\s'\"<>|]*"), "<path>"),
    (re.compile(r"(?<![\w.])/(?:home|Users|mnt|media|Volumes|tmp|var|private)/[^\s'\"<>|]*"), "<path>"),
    (re.compile(r"\\\\[^\s'\"<>|]+"), "<path>"),
    # emails, phone numbers
    (re.compile(r"[\w.+-]+@[\w-]+\.[\w.]+"), "<email>"),
    (re.compile(r"(?<!\d)(?:\+?\d[\d\s-]{8,}\d)(?!\d)"), "<number>"),
    # DICOM person name with carets: FAMILY^GIVEN^MIDDLE
    (re.compile(r"\b[^\s^]+\^[^\s]*"), "<name>"),
    # dates: 19950721, 1995-07-21, 21/07/1995, 21.07.1995
    (re.compile(r"(?<!\d)(?:19|20)\d{2}[-/.]?(?:0[1-9]|1[0-2])[-/.]?(?:0[1-9]|[12]\d|3[01])(?!\d)"), "<date>"),
    (re.compile(r"(?<!\d)(?:0?[1-9]|[12]\d|3[01])[-/.](?:0?[1-9]|1[0-2])[-/.](?:19|20)?\d{2}(?!\d)"), "<date>"),
    # long numeric identifiers (MRNs, accession numbers); DICOM UIDs are dotted and handled below
    (re.compile(r"(?<![\d.])\d{6,}(?![\d.])"), "<id>"),
    (re.compile(r"\b\d+(?:\.\d+){4,}\b"), "<uid>"),
]

_sensitive: set[str] = set()
_lock = threading.Lock()


def register_sensitive(*values: object) -> None:
    """Register exact strings (and their name parts) that must never appear in logs."""
    with _lock:
        for v in values:
            if v is None:
                continue
            s = str(v).strip()
            if len(s) < 3:
                continue
            _sensitive.add(s)
            for part in re.split(r"[\^\s,]+", s):
                if len(part) >= 3:
                    _sensitive.add(part)


def clear_sensitive() -> None:
    with _lock:
        _sensitive.clear()


def redact(text: str) -> str:
    with _lock:
        tokens = sorted(_sensitive, key=len, reverse=True)
    for t in tokens:
        text = re.sub(re.escape(t), "<redacted>", text, flags=re.IGNORECASE)
    for pat, repl in _PATTERNS:
        text = pat.sub(repl, text)
    return text


class RedactingFilter(logging.Filter):
    def filter(self, record: logging.LogRecord) -> bool:
        try:
            msg = record.getMessage()
        except Exception:  # noqa: BLE001 - never let logging crash the app
            msg = str(record.msg)
        record.msg = redact(msg)
        record.args = None
        return True


def get_logger(name: str = "medmereport") -> logging.Logger:
    logger = logging.getLogger(name)
    if not getattr(logger, "_mmr_configured", False):
        handler = logging.StreamHandler()
        handler.setFormatter(logging.Formatter("%(asctime)s %(levelname)s %(name)s: %(message)s", "%H:%M:%S"))
        handler.addFilter(RedactingFilter())
        logger.addHandler(handler)
        logger.addFilter(RedactingFilter())
        logger.setLevel(logging.INFO)
        logger.propagate = False
        logger._mmr_configured = True  # type: ignore[attr-defined]
    return logger
