"""Shared anatomical vocabulary: structure ids, the lobe/system each belongs to, and render groups.

Backends map their native labels onto these ids; geometry, stats, knowledge base and UI only ever
use these ids. Add new structures here first (and to the knowledge base) before using them.
"""

from __future__ import annotations

from typing import Literal

Group = Literal[
    "hemi", "cerebellum", "brainstem", "deep", "ventricle", "vessel",
    "body", "bone", "organ", "muscle", "spine", "airway",
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

# Teeth in FDI order: position 1..8 within each quadrant (1 upper right, 2 upper left, 3 lower left, 4 lower right).
TOOTH_TYPES = (
    "central_incisor", "lateral_incisor", "canine", "first_premolar",
    "second_premolar", "first_molar", "second_molar", "third_molar",
)  # fmt: skip
_QUADRANT_ARCH = {1: "upper", 2: "upper", 3: "lower", 4: "lower"}


def _teeth() -> dict[str, tuple[str, Group, bool]]:
    out: dict[str, tuple[str, Group, bool]] = {}
    for q, arch in _QUADRANT_ARCH.items():
        for pos, kind in enumerate(TOOTH_TYPES, start=1):
            out[f"{arch}_{kind}_fdi{q}{pos}"] = ("digestive", "bone", False)
            out[f"{arch}_{kind}_pulp_fdi1{q}{pos}"] = ("digestive", "bone", True)
    return out


# Every anatomical class of TotalSegmentator's *open* (Apache-2.0) tasks, mapped by ``totalseg_structure`` below
# (ids are exactly the rule's output; see ``totalseg_classes.json`` for the class list and its source). Classes that
# already exist above (``lung``, ``spinal_cord``, ``vertebrae_*``, ``third_ventricle`` ...) are not repeated.
# Findings and devices (cysts, tumours, bleeds, effusions, nodules, implants, dental crowns/bridges) are deliberately
# NOT vocabulary: this is an anatomy tool, not a diagnostic one (``totalseg_classes.json`` lists them as excluded).
# inner=True: enclosed by another segmented structure (brain in skull, airways/vessels in lung, pulp in tooth ...).
BODY: dict[str, tuple[str, Group, bool]] = {
    # nervous system / sense organs
    "brain": ("nervous", "organ", True),
    "optic_nerve": ("nervous", "organ", False),
    "eye": ("sensory", "organ", False),
    "eyeball": ("sensory", "organ", False),
    "eye_lens": ("sensory", "organ", True),
    "auditory_canal": ("sensory", "airway", False),
    # lateral-ventricle parts (ventricle_parts task)
    "ventricle_frontal_horn": ("ventricles", "ventricle", True),
    "ventricle_body": ("ventricles", "ventricle", True),
    "ventricle_trigone": ("ventricles", "ventricle", True),
    "ventricle_occipital_horn": ("ventricles", "ventricle", True),
    "ventricle_temporal_horn": ("ventricles", "ventricle", True),
    # respiratory
    "trachea": ("respiratory", "airway", False),
    "lung_upper_lobe": ("respiratory", "organ", False),
    "lung_middle_lobe": ("respiratory", "organ", False),
    "lung_lower_lobe": ("respiratory", "organ", False),
    "lung_airways": ("respiratory", "airway", True),
    "lung_airways_wall": ("respiratory", "airway", True),
    "lung_trachea_bronchia": ("respiratory", "airway", True),
    "lung_pleural": ("respiratory", "organ", False),
    "nasal_cavity": ("respiratory", "airway", False),
    "nasopharynx": ("respiratory", "airway", False),
    "larynx_air": ("respiratory", "airway", True),
    "thyroid_cartilage": ("respiratory", "bone", False),
    "cricoid_cartilage": ("respiratory", "bone", False),
    "sinus_frontal": ("respiratory", "airway", True),
    "sinus_maxillary": ("respiratory", "airway", True),
    "maxillary_sinus": ("respiratory", "airway", True),
    # cardiovascular
    "heart": ("cardiovascular", "organ", False),
    "atrial_appendage": ("cardiovascular", "organ", True),
    "pericardium": ("cardiovascular", "organ", False),
    "aorta": ("cardiovascular", "vessel", False),
    "brachiocephalic_trunk": ("cardiovascular", "vessel", False),
    "subclavian_artery": ("cardiovascular", "vessel", False),
    "common_carotid_artery": ("cardiovascular", "vessel", False),
    "internal_carotid_artery": ("cardiovascular", "vessel", False),
    "iliac_artery": ("cardiovascular", "vessel", False),
    "pulmonary_vein": ("cardiovascular", "vessel", False),
    "lung_arteries": ("cardiovascular", "vessel", True),
    "lung_veins": ("cardiovascular", "vessel", True),
    "lung_vessels": ("cardiovascular", "vessel", True),
    "superior_vena_cava": ("cardiovascular", "vessel", False),
    "inferior_vena_cava": ("cardiovascular", "vessel", False),
    "brachiocephalic_vein": ("cardiovascular", "vessel", False),
    "internal_jugular_vein": ("cardiovascular", "vessel", False),
    "iliac_vena": ("cardiovascular", "vessel", False),
    "portal_vein_and_splenic_vein": ("cardiovascular", "vessel", False),
    "liver_vessels": ("cardiovascular", "vessel", True),
    # digestive (incl. mouth, salivary glands, pharynx, teeth)
    "esophagus": ("digestive", "organ", False),
    "stomach": ("digestive", "organ", False),
    "duodenum": ("digestive", "organ", False),
    "small_bowel": ("digestive", "organ", False),
    "colon": ("digestive", "organ", False),
    "liver": ("digestive", "organ", False),
    **{f"liver_segment_{i}": ("digestive", "organ", False) for i in range(1, 9)},
    "gallbladder": ("digestive", "organ", False),
    "pancreas": ("digestive", "organ", False),
    "parotid_gland": ("digestive", "organ", False),
    "submandibular_gland": ("digestive", "organ", False),
    "tongue": ("digestive", "muscle", False),
    "hard_palate": ("digestive", "bone", False),
    "soft_palate": ("digestive", "organ", False),
    "oropharynx": ("digestive", "airway", False),
    "hypopharynx": ("digestive", "airway", False),
    "pharynx": ("digestive", "airway", False),
    "teeth_upper": ("digestive", "bone", False),
    "teeth_lower": ("digestive", "bone", False),
    **_teeth(),
    # urinary / endocrine / lymphatic / reproductive
    "kidney": ("urinary", "organ", False),
    "urinary_bladder": ("urinary", "organ", False),
    "adrenal_gland": ("endocrine", "organ", False),
    "thyroid_gland": ("endocrine", "organ", False),
    "spleen": ("lymphatic", "organ", False),
    "prostate": ("reproductive", "organ", False),
    "breast": ("reproductive", "organ", False),
    # skeleton
    "skull": ("skeleton", "bone", False),
    "mandible": ("skeleton", "bone", False),
    "upper_jawbone": ("skeleton", "bone", False),
    "lower_jawbone": ("skeleton", "bone", False),
    "zygomatic_arch": ("skeleton", "bone", False),
    "styloid_process": ("skeleton", "bone", False),
    "hyoid": ("skeleton", "bone", False),
    "inferior_alveolar_canal": ("skeleton", "bone", True),
    "mandibular_incisive_canal_fdi103": ("skeleton", "bone", True),
    "mandibular_incisive_canal_fdi104": ("skeleton", "bone", True),
    "lingual_canal": ("skeleton", "bone", True),
    "clavicula": ("skeleton", "bone", False),
    "scapula": ("skeleton", "bone", False),
    "humerus": ("skeleton", "bone", False),
    "sternum": ("skeleton", "bone", False),
    **{f"rib_{i}": ("skeleton", "bone", False) for i in range(1, 13)},
    "costal_cartilages": ("skeleton", "bone", False),
    "hip": ("skeleton", "bone", False),
    "femur": ("skeleton", "bone", False),
    # spinal column (levels vertebrae_c1..s1 live in SPINE)
    "vertebrae": ("spinal_column", "bone", False),
    "vertebrae_body": ("spinal_column", "bone", False),
    "intervertebral_discs": ("spinal_column", "spine", False),
    "sacrum": ("spinal_column", "bone", False),
    # muscles: head and neck
    "temporalis": ("muscular", "muscle", False),
    "masseter": ("muscular", "muscle", False),
    "lateral_pterygoid": ("muscular", "muscle", False),
    "medial_pterygoid": ("muscular", "muscle", False),
    "digastric": ("muscular", "muscle", False),
    "superior_rectus_muscle": ("muscular", "muscle", False),
    "inferior_rectus_muscle": ("muscular", "muscle", False),
    "medial_rectus_muscle": ("muscular", "muscle", False),
    "lateral_rectus_muscle": ("muscular", "muscle", False),
    "superior_oblique_muscle": ("muscular", "muscle", False),
    "inferior_oblique_muscle": ("muscular", "muscle", False),
    "levator_palpebrae_superioris": ("muscular", "muscle", False),
    "sternocleidomastoid": ("muscular", "muscle", False),
    "platysma": ("muscular", "muscle", False),
    "trapezius": ("muscular", "muscle", False),
    "levator_scapulae": ("muscular", "muscle", False),
    "anterior_scalene": ("muscular", "muscle", False),
    "middle_scalene": ("muscular", "muscle", False),
    "posterior_scalene": ("muscular", "muscle", False),
    "prevertebral": ("muscular", "muscle", False),
    "sterno_thyroid": ("muscular", "muscle", False),
    "thyrohyoid": ("muscular", "muscle", False),
    "superior_pharyngeal_constrictor": ("muscular", "muscle", False),
    "middle_pharyngeal_constrictor": ("muscular", "muscle", False),
    "inferior_pharyngeal_constrictor": ("muscular", "muscle", False),
    # muscles: trunk
    "pectoralis_major": ("muscular", "muscle", False),
    "serratus_anterior": ("muscular", "muscle", False),
    "latissimus_dorsi": ("muscular", "muscle", False),
    "rectus_abdominis": ("muscular", "muscle", False),
    "external_oblique": ("muscular", "muscle", False),
    "internal_oblique": ("muscular", "muscle", False),
    "quadratus_lumborum": ("muscular", "muscle", False),
    "autochthon": ("muscular", "muscle", False),
    "erector_spinae": ("muscular", "muscle", False),
    "transversospinalis": ("muscular", "muscle", False),
    # muscles: hip
    "iliopsoas": ("muscular", "muscle", False),
    "psoas_major": ("muscular", "muscle", False),
    "gluteus_maximus": ("muscular", "muscle", False),
    "gluteus_medius": ("muscular", "muscle", False),
    "gluteus_minimus": ("muscular", "muscle", False),
    # body regions and cavities
    "head": ("body_regions", "body", False),
    "body_trunc": ("body_regions", "body", False),
    "body_extremities": ("body_regions", "body", False),
    "thoracic_cavity": ("body_regions", "body", False),
    "mediastinum": ("body_regions", "body", False),
    "abdominal_cavity": ("body_regions", "body", False),
}

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
    # added in T3.5 for TotalSegmentator classes that fit none of the above
    "nervous",  # brain as a whole organ, cranial nerves
    "sensory",  # eye, lens, ear canal
    "body_regions",  # body envelope and the large cavities (thoracic, abdominal, mediastinum)
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
