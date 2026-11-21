"""Ingest adapter registry: built-in adapters plus community plugins via entry points.

Plugins register under the entry-point group ``medmereport.ingest_adapters``; the entry point may
resolve to an adapter class (instantiated with no arguments) or an adapter instance. A plugin that
fails to load is logged and ignored, never fatal. Built-in adapters that are not importable (e.g.
not yet implemented) are skipped the same way.
"""

from __future__ import annotations

import importlib
from importlib.metadata import entry_points
from pathlib import Path

from medmereport.core.logging import get_logger
from medmereport.ingest.base import Detection, IngestAdapter

log = get_logger(__name__)

ENTRY_POINT_GROUP = "medmereport.ingest_adapters"

# (module, class) in tie-break priority order: specific container formats before generic ones.
BUILTIN: tuple[tuple[str, str], ...] = (
    ("medmereport.ingest.dcmburner", "DcmBurnerAdapter"),
    ("medmereport.ingest.radiant", "RadiantAdapter"),
    ("medmereport.ingest.dicomdir", "DicomdirAdapter"),
    ("medmereport.ingest.images", "ImagesAdapter"),
    ("medmereport.ingest.loose", "LooseAdapter"),
)


def _instantiate(obj: object) -> IngestAdapter | None:
    candidate = obj() if isinstance(obj, type) else obj
    return candidate if isinstance(candidate, IngestAdapter) else None


def builtin_adapters() -> list[IngestAdapter]:
    """Instantiate the built-in adapters that are importable, in priority order."""
    out: list[IngestAdapter] = []
    for module_name, class_name in BUILTIN:
        try:
            cls = getattr(importlib.import_module(module_name), class_name)
        except (ImportError, AttributeError):
            log.info("built-in ingest adapter %s is not available", class_name)
            continue
        adapter = _instantiate(cls)
        if adapter is not None:
            out.append(adapter)
    return out


def plugin_adapters() -> list[IngestAdapter]:
    """Load adapters registered under the ``medmereport.ingest_adapters`` entry-point group."""
    out: list[IngestAdapter] = []
    for ep in entry_points(group=ENTRY_POINT_GROUP):
        try:
            adapter = _instantiate(ep.load())
        except Exception:  # noqa: BLE001 - third-party code must not break ingest
            log.warning("ingest plugin %s failed to load", ep.name)
            continue
        if adapter is None:
            log.warning("ingest plugin %s does not implement IngestAdapter", ep.name)
        else:
            out.append(adapter)
    return out


def all_adapters() -> list[IngestAdapter]:
    """Built-ins first, then plugins; a plugin cannot shadow a built-in name."""
    adapters = builtin_adapters()
    names = {a.name for a in adapters}
    for p in plugin_adapters():
        if p.name not in names:
            adapters.append(p)
            names.add(p.name)
    return adapters


def get_adapter(name: str) -> IngestAdapter | None:
    """Return the adapter with stable id ``name``."""
    return next((a for a in all_adapters() if a.name == name), None)


def detect(src: Path, adapters: list[IngestAdapter] | None = None) -> list[tuple[Detection, IngestAdapter]]:
    """Run every adapter's cheap ``detect`` and rank matches by confidence (ties: registry order)."""
    ranked: list[tuple[float, int, Detection, IngestAdapter]] = []
    for order, adapter in enumerate(adapters if adapters is not None else all_adapters()):
        try:
            det = adapter.detect(src)
        except Exception:  # noqa: BLE001 - one broken detector must not hide the others
            log.warning("ingest adapter %s failed during detection", adapter.name)
            continue
        if det is not None:
            ranked.append((-det.confidence, order, det, adapter))
    ranked.sort(key=lambda r: (r[0], r[1]))
    return [(det, adapter) for _, _, det, adapter in ranked]


def detect_best(src: Path) -> tuple[Detection | None, IngestAdapter | None]:
    """Highest-ranked ``(detection, adapter)`` for ``src``, or ``(None, None)``."""
    matches = detect(src)
    return matches[0] if matches else (None, None)
