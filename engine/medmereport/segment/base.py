"""Segmentation contract shared by all backends (SynthSeg ONNX, atlas registration, TotalSegmentator, classical).

Every backend returns a :class:`LabelMap` in the *patient's* space (the reference volume grid it was
given), never in template space. Structure ids come from the shared vocabulary in
``medmereport/knowledge/structures.py`` so the geometry, stats and UI layers are backend-agnostic.
"""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import Literal, Protocol

import numpy as np

from medmereport.dicom.series import Geometry

Hemi = Literal["L", "R", "M"]  # M = midline / unpaired


@dataclass(frozen=True)
class Region:
    code: int  # value in LabelMap.labels (1..32767)
    structure: str  # vocabulary id, e.g. "hippocampus", "sfg", "liver"
    hemi: Hemi


@dataclass
class LabelMap:
    labels: np.ndarray  # int16 [z, y, x], 0 = background
    geometry: Geometry  # same grid as the reference volume
    regions: dict[int, Region]
    backend: str  # e.g. "synthseg-onnx@2.0", "atlas-ho@1"
    licence: str  # licence of the atlas/model that produced the labels (shown in the UI credits)
    caveats: list[str] = field(default_factory=list)
    brain_mask: np.ndarray | None = None  # bool [z,y,x], when meaningful

    def code_of(self, structure: str, hemi: Hemi) -> int | None:
        for c, r in self.regions.items():
            if r.structure == structure and r.hemi == hemi:
                return c
        return None


@dataclass
class Volume:
    """A float32 intensity volume on a grid (LPS)."""

    data: np.ndarray  # float32 [z, y, x]
    geometry: Geometry
    sequence: str  # T1, T2, FLAIR, ADC, ...
    series_id: str


class ProgressFn(Protocol):
    def __call__(self, stage: str, pct: float, msg: str = "") -> None: ...


class SegmentationBackend(Protocol):
    name: str
    licence: str

    def available(self) -> bool:
        """True when dependencies/weights are present (no network access)."""

    def segment(self, reference: Volume, extra: list[Volume], progress: ProgressFn) -> LabelMap:
        """Label ``reference`` (and optionally use ``extra`` co-registered contrasts)."""
