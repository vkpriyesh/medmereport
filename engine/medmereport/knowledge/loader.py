"""Load the anatomy knowledge base with per-field English fallback, validated against the structure vocabulary."""

from __future__ import annotations

import copy
import json
from functools import lru_cache
from pathlib import Path
from typing import Any

from medmereport.knowledge import structures
from medmereport.knowledge.schema import (
    REQUIRED_SEQUENCES,
    REQUIRED_VESSELS,
    UNTRANSLATED_LOBE_FIELDS,
    UNTRANSLATED_STRUCTURE_FIELDS,
    Knowledge,
)

HERE = Path(__file__).parent
LANGS = ("en", "hi")
DEFAULT_LANG = "en"


class KnowledgeError(ValueError):
    """The knowledge base is malformed or does not cover the structure vocabulary."""


def raw_path(lang: str) -> Path:
    return HERE / f"anatomy.{lang}.json"


def read_raw(lang: str) -> dict[str, Any]:
    with raw_path(lang).open(encoding="utf-8") as fh:
        data: dict[str, Any] = json.load(fh)
    return data


def _merge(base: Any, over: Any) -> Any:
    """Recursive overlay: dicts merge key by key; any other value replaces the base unless it is empty/None."""
    if isinstance(base, dict) and isinstance(over, dict):
        out = dict(base)
        for k, v in over.items():
            out[k] = _merge(base[k], v) if k in base else v
        return out
    if over is None or over == "" or over == []:
        return base
    return over


def _pin_untranslated(merged: dict[str, Any], en: dict[str, Any]) -> None:
    """Identifiers and citations always come from the English file."""
    for sid, entry in merged.get("structures", {}).items():
        src = en["structures"].get(sid)
        if src:
            for f in UNTRANSLATED_STRUCTURE_FIELDS:
                entry[f] = copy.deepcopy(src[f])
    for lid, entry in merged.get("lobes", {}).items():
        src = en["lobes"].get(lid)
        if src:
            for f in UNTRANSLATED_LOBE_FIELDS:
                entry[f] = copy.deepcopy(src[f])
    merged["version"] = en["version"]


def validate_coverage(kb: Knowledge) -> None:
    """Every vocabulary id has an entry, with the right lobe; every lobe and required key is present."""
    problems: list[str] = []
    ids = set(structures.ALL)
    missing = sorted(ids - set(kb.structures))
    extra = sorted(set(kb.structures) - ids)
    if missing:
        problems.append(f"missing structures: {missing}")
    if extra:
        problems.append(f"unknown structures: {extra}")
    for sid, s in kb.structures.items():
        if sid in ids and s.lobe != structures.lobe_of(sid):
            problems.append(f"{sid}: lobe {s.lobe!r} != {structures.lobe_of(sid)!r}")
    if set(kb.lobes) != set(structures.LOBES):
        problems.append(f"lobes differ from vocabulary: {sorted(set(kb.lobes) ^ set(structures.LOBES))}")
    for key in REQUIRED_VESSELS:
        if key not in kb.arteries.vessels:
            problems.append(f"missing artery: {key}")
    for key in REQUIRED_SEQUENCES:
        if key not in kb.sequences:
            problems.append(f"missing sequence: {key}")
    if problems:
        raise KnowledgeError("; ".join(problems))


@lru_cache(maxsize=len(LANGS))
def _load(lang: str) -> Knowledge:
    if lang not in LANGS:
        raise KnowledgeError(f"unsupported language {lang!r}; expected one of {LANGS}")
    en = read_raw(DEFAULT_LANG)
    data = en
    if lang != DEFAULT_LANG:
        data = _merge(en, read_raw(lang))
        _pin_untranslated(data, en)
    data = {**data, "lang": lang}
    kb = Knowledge.model_validate(data)
    validate_coverage(kb)
    return kb


def load_model(lang: str = DEFAULT_LANG) -> Knowledge:
    """Validated, cached knowledge base for ``lang`` (missing translated fields fall back to English)."""
    return _load(lang)


def load_knowledge(lang: str = DEFAULT_LANG) -> dict[str, Any]:
    """The merged knowledge base as plain JSON-able data (a fresh copy; safe to mutate)."""
    return _load(lang).model_dump(mode="json")
