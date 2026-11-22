"""TotalSegmentator open-task class lists (``totalseg_classes.json``) and their mapping onto the structure vocabulary.

The JSON is a verbatim copy of ``class_map`` from TotalSegmentator's ``map_to_binary.py`` for the openly licensed
(Apache-2.0) tasks only; its ``source`` block records the upstream commit. Findings and devices are listed under
``excluded`` and never become regions.
"""

from __future__ import annotations

import json
from functools import lru_cache
from pathlib import Path
from typing import Any

from medmereport.knowledge.structures import ALL, totalseg_structure

CLASSES_PATH = Path(__file__).with_name("totalseg_classes.json")


@lru_cache(maxsize=1)
def _data() -> dict[str, Any]:
    with CLASSES_PATH.open(encoding="utf-8") as fh:
        data: dict[str, Any] = json.load(fh)
    return data


def source() -> dict[str, str]:
    """Upstream provenance: repo, file URL pinned to a commit, package version, retrieval date."""
    return dict(_data()["source"])


def open_tasks() -> list[str]:
    return list(_data()["tasks"])


def task_classes(task: str) -> dict[int, str]:
    """``{label index: class name}`` for an open task; ``KeyError`` for licensed/unknown tasks."""
    return {int(k): v for k, v in _data()["tasks"][task].items()}


def excluded() -> dict[str, str]:
    """Class name -> reason (``finding`` | ``device``) for classes that are deliberately not vocabulary."""
    return dict(_data()["excluded"])


def map_class(class_name: str) -> tuple[str, str] | None:
    """``(structure, hemi)`` for a vocabulary class, ``None`` for an excluded one."""
    if class_name in _data()["excluded"]:
        return None
    sid, hemi = totalseg_structure(class_name)
    if sid not in ALL:
        raise KeyError(f"TotalSegmentator class {class_name!r} maps to unknown structure {sid!r}")
    return sid, hemi
