"""Pydantic models for the anatomy knowledge base (``anatomy.<lang>.json``), served at ``GET /api/knowledge``.

The content is generic, educational anatomy: it never refers to a particular scan and never gives medical advice.
"""

from __future__ import annotations

from typing import Literal

from pydantic import BaseModel, ConfigDict, Field

Category = Literal[
    "cortex", "deep_grey", "ventricle", "white_matter", "cerebellum", "brainstem", "vessel",
    # body (M3, T3.5)
    "organ", "bone", "cartilage", "muscle", "airway", "nerve", "tooth", "spine", "body",
]  # fmt: skip

TAGLINE_MAX = 90

# Keys the UI relies on. More may be added later (e.g. T3.5 body vessels), never removed.
REQUIRED_VESSELS = ("ica", "mca", "aca", "pca", "basilar", "vertebral", "acom", "pcom", "common_carotid", "eca")
REQUIRED_SEQUENCES = (
    "T1",
    "T2",
    "FLAIR",
    "DWI",
    "ADC",
    "T2STAR",
    "SWI",
    "TOF",
    "STIR",
    "PD",
    "CT",
    "CTA",
    "CR",
    "DX",
    "MIP",
    "PHOTO",
)

# Fields that are identifiers or citations: never translated, always taken from the English file.
UNTRANSLATED_STRUCTURE_FIELDS = ("lobe", "category", "brodmann", "sources")
UNTRANSLATED_LOBE_FIELDS = ("sources",)


class _Strict(BaseModel):
    model_config = ConfigDict(extra="forbid")


class Structure(_Strict):
    name: str = Field(min_length=1)
    aka: list[str] = Field(default_factory=list)
    lobe: str = Field(description="Lobe/division id; equals knowledge.structures.lobe_of(id)")
    category: Category
    tagline: str = Field(min_length=1, max_length=TAGLINE_MAX)
    overview: str = Field(min_length=1)
    functions: list[str] = Field(min_length=4, max_length=6)
    connections: list[str] = Field(min_length=2, max_length=4)
    clinical: list[str] = Field(min_length=2, max_length=4)
    lateralization: str
    fact: str
    brodmann: list[int] = Field(default_factory=list, description="Approximate Brodmann areas; empty if not applicable")
    blood_supply: str
    sources: list[str] = Field(min_length=1)


class Lobe(_Strict):
    name: str = Field(min_length=1)
    tagline: str = Field(min_length=1, max_length=TAGLINE_MAX)
    overview: str = Field(min_length=1)
    functions: list[str] = Field(min_length=1)
    clinical: list[str] = Field(min_length=1)
    fact: str
    sources: list[str] = Field(min_length=1)


class Vessel(_Strict):
    name: str = Field(min_length=1)
    supplies: str
    note: str


class Arteries(_Strict):
    overview: str
    vessels: dict[str, Vessel]


class Sequence(_Strict):
    name: str = Field(min_length=1)
    what: str
    why: str


class Knowledge(_Strict):
    version: int
    lang: str = "en"
    structures: dict[str, Structure]
    lobes: dict[str, Lobe]
    arteries: Arteries
    sequences: dict[str, Sequence]
