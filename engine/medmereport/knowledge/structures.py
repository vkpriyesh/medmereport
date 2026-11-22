"""Shared anatomical vocabulary: structure ids, the lobe/system each belongs to, and render groups.

Backends map their native labels onto these ids; geometry, stats, knowledge base and UI only ever
use these ids. Add new structures here first (and to the knowledge base) before using them.
"""

from __future__ import annotations

from typing import Literal

Group = Literal[
    "hemi", "cerebellum", "brainstem", "deep", "ventricle", "vessel", "body", "bone", "organ", "muscle", "spine", "airway"
]  # fmt: skip

# id -> (division/lobe id, render group, inner?)  inner=True: hidden inside the outer surface (shown in X-ray mode)
BRAIN: dict[str, tuple[str, Group, bool]] = {
    # frontal
    "frontal_pole": ("frontal", "hemi", False),
    "sfg": ("frontal", "hemi", False),
    "mfg": ("frontal", "hemi", False),
    "ifg_tri": ("frontal", "hemi", False),
    "ifg_oper": ("frontal", "hemi", False),
    "precentral": ("frontal", "hemi", False),
    "frontal_medial": ("frontal", "hemi", False),
    "sma": ("frontal", "hemi", False),
    "paracingulate": ("frontal", "hemi", False),
    "orbitofrontal": ("frontal", "hemi", False),
    "frontal_operculum": ("frontal", "hemi", False),
    # insula
    "insula": ("insular", "hemi", False),
    # temporal
    "temporal_pole": ("temporal", "hemi", False),
    "stg": ("temporal", "hemi", False),
    "mtg": ("temporal", "hemi", False),
    "itg": ("temporal", "hemi", False),
    "temporal_fusiform": ("temporal", "hemi", False),
    "planum_polare": ("temporal", "hemi", False),
    "heschl": ("temporal", "hemi", False),
    "planum_temporale": ("temporal", "hemi", False),
    # parietal
    "postcentral": ("parietal", "hemi", False),
    "spl": ("parietal", "hemi", False),
    "supramarginal": ("parietal", "hemi", False),
    "angular": ("parietal", "hemi", False),
    "precuneus": ("parietal", "hemi", False),
    "parietal_operculum": ("parietal", "hemi", False),
    "central_operculum": ("parietal", "hemi", False),
    # occipital
    "lateral_occipital": ("occipital", "hemi", False),
    "intracalcarine": ("occipital", "hemi", False),
    "supracalcarine": ("occipital", "hemi", False),
    "cuneus": ("occipital", "hemi", False),
    "lingual": ("occipital", "hemi", False),
    "occipital_fusiform": ("occipital", "hemi", False),
    "temporo_occipital_fusiform": ("occipital", "hemi", False),
    "occipital_pole": ("occipital", "hemi", False),
    # limbic
    "cingulate_ant": ("limbic", "hemi", False),
    "cingulate_post": ("limbic", "hemi", False),
    "subcallosal": ("limbic", "hemi", False),
    "parahippocampal": ("limbic", "hemi", False),
    "hippocampus": ("limbic", "deep", True),
    "amygdala": ("limbic", "deep", True),
    # deep grey
    "thalamus": ("subcortical", "deep", True),
    "caudate": ("subcortical", "deep", True),
    "putamen": ("subcortical", "deep", True),
    "pallidum": ("subcortical", "deep", True),
    "accumbens": ("subcortical", "deep", True),
    "ventral_dc": ("subcortical", "deep", True),
    # ventricles / white matter
    "lateral_ventricle": ("ventricles", "ventricle", True),
    "third_ventricle": ("ventricles", "ventricle", True),
    "fourth_ventricle": ("ventricles", "ventricle", True),
    "corpus_callosum": ("white_matter", "hemi", False),
    "cerebral_white_matter": ("white_matter", "deep", True),
    "cerebral_cortex": ("white_matter", "hemi", False),  # unparcellated cortical ribbon (backend without parcellation)
    # cerebellum / brainstem
    "cerebellum_hemi": ("cerebellum", "cerebellum", False),
    "cerebellar_vermis": ("cerebellum", "cerebellum", False),
    "cerebellum_white_matter": ("cerebellum", "cerebellum", True),
    "midbrain": ("brainstem", "brainstem", False),
    "pons": ("brainstem", "brainstem", False),
    "medulla": ("brainstem", "brainstem", False),
    "brainstem": ("brainstem", "brainstem", False),  # when a backend can't split it
}

VESSELS: dict[str, tuple[str, Group, bool]] = {
    "cerebral_arteries": ("arteries", "vessel", True),
    "neck_arteries": ("arteries", "vessel", True),
    "body_arteries": ("arteries", "vessel", True),  # classical CTA: contrast-filled lumen, not split further
}

# M3 contract. Classical (HU-threshold) CT surfaces: few, coarse, always available.
CT_CLASSICAL: dict[str, tuple[str, Group, bool]] = {
    "skin": ("integument", "body", False),
    "skeleton": ("skeleton", "bone", True),
    "lung": ("respiratory", "organ", True),  # hemi L/R
    "airway": ("respiratory", "airway", True),  # trachea + main bronchi (M)
}

# Spine MR (classical). Vertebra ids follow TotalSegmentator's naming lower-cased: ``vertebrae_c1`` .. ``vertebrae_s1``.
SPINE: dict[str, tuple[str, Group, bool]] = {
    "spinal_cord": ("nervous_spine", "spine", True),
    "spinal_csf": ("nervous_spine", "spine", False),
    "intervertebral_disc": ("spinal_column", "spine", False),
    "vertebral_column": ("spinal_column", "bone", False),  # when individual levels can't be separated
    **{f"vertebrae_{lv}": ("spinal_column", "bone", False) for lv in
       [f"c{i}" for i in range(1, 8)] + [f"t{i}" for i in range(1, 13)] + [f"l{i}" for i in range(1, 6)] + ["s1"]},
}

# Filled by the knowledge lane (T3.5): every class of TotalSegmentator's *open* tasks, mapped by the rule in
# ``totalseg_structure`` below. Keep ids identical to the rule's output.
BODY: dict[str, tuple[str, Group, bool]] = {}

LOBES = [
    "frontal",
    "parietal",
    "temporal",
    "occipital",
    "insular",
    "limbic",
    "subcortical",
    "ventricles",
    "white_matter",
    "cerebellum",
    "brainstem",
    "arteries",
    # body (M3)
    "integument",
    "skeleton",
    "spinal_column",
    "nervous_spine",
    "respiratory",
    "cardiovascular",
    "digestive",
    "urinary",
    "endocrine",
    "lymphatic",
    "reproductive",
    "muscular",
]

ALL: dict[str, tuple[str, Group, bool]] = {**BRAIN, **VESSELS, **CT_CLASSICAL, **SPINE, **BODY}


def totalseg_structure(class_name: str) -> tuple[str, str]:
    """Map a TotalSegmentator class name to ``(structure, hemi)``.

    Rule: lower-case; a ``_left``/``_right`` token anywhere is removed and becomes hemi ``L``/``R``
    (``kidney_left`` -> ``kidney``/L, ``rib_left_3`` -> ``rib_3``/L); everything else is hemi ``M``
    (``vertebrae_L1`` -> ``vertebrae_l1``/M).
    """
    parts = class_name.lower().split("_")
    hemi = "M"
    if "left" in parts:
        hemi, parts = "L", [p for p in parts if p != "left"]
    elif "right" in parts:
        hemi, parts = "R", [p for p in parts if p != "right"]
    return "_".join(parts), hemi


def lobe_of(structure: str) -> str:
    return ALL[structure][0]


def group_of(structure: str, hemi: str) -> str:
    """Render group used by the UI's layer toggles."""
    g = ALL[structure][1]
    if g == "hemi":
        return "hemi_" + ("L" if hemi == "L" else "R")
    return g


def is_inner(structure: str) -> bool:
    return ALL[structure][2]
