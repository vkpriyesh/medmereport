"""SynthSeg 2.0 label tables and their mapping onto the shared medmereport vocabulary.

The raw tables below are copied from ``data/labels_classes_priors/*.npy`` of SynthSeg
(https://github.com/BBillot/SynthSeg, Apache-2.0, (c) Benjamin Billot). The network's output channels are
the *sorted unique* values of the segmentation list (``np.unique``), exactly as in
``SynthSeg/predict_synthseg.py``; topology classes and the left/right flip correspondence are derived the
same way.

Label values are FreeSurfer ``aseg`` codes (2..60) and Desikan-Killiany cortical codes (1001..1035 left,
2001..2035 right).
"""

from __future__ import annotations

import numpy as np

from medmereport.knowledge import structures
from medmereport.segment.base import Hemi, Region

# --- raw SynthSeg 2.0 tables (55 entries; order matters for flip indices and topology classes) -------------
_SEG_RAW = [
    0, 14, 15, 16, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 17, 18, 2, 26, 28, 0, 4, 5,
    41, 42, 43, 44, 46, 47, 49, 50, 51, 52, 53, 54, 41, 58, 60, 0, 43, 44,
]  # fmt: skip
_TOPOLOGY_RAW = [
    0, 1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    4, 4, 4, 4, 5, 5, 6, 7, 8, 9, 10, 11, 4, 12, 13, 0, 4, 4,
    14, 14, 14, 14, 15, 15, 16, 17, 18, 19, 20, 21, 14, 22, 23, 0, 14, 14,
]  # fmt: skip
N_NEUTRAL = 19  # first 19 raw entries are unpaired (midline) labels
DENOISER_GROUPS = 5  # robust model: number of label groups in the l2l denoiser

# DK cortical parcellation: network channel order (sorted). 1004/2004 (corpus callosum) is not predicted.
_DK = [
    "bankssts", "caudalanteriorcingulate", "caudalmiddlefrontal", "cuneus", "entorhinal", "fusiform",
    "inferiorparietal", "inferiortemporal", "isthmuscingulate", "lateraloccipital", "lateralorbitofrontal",
    "lingual", "medialorbitofrontal", "middletemporal", "parahippocampal", "paracentral", "parsopercularis",
    "parsorbitalis", "parstriangularis", "pericalcarine", "postcentral", "posteriorcingulate", "precentral",
    "precuneus", "rostralanteriorcingulate", "rostralmiddlefrontal", "superiorfrontal", "superiorparietal",
    "superiortemporal", "supramarginal", "frontalpole", "temporalpole", "transversetemporal", "insula",
]  # fmt: skip
_DK_CODES = [1, 2, 3, *range(5, 36)]  # 1001.. skipping 1004 (corpus callosum)
DK_NAMES: dict[int, str] = {
    **{1000 + c: "ctx-lh-" + n for c, n in zip(_DK_CODES, _DK, strict=True)},
    **{2000 + c: "ctx-rh-" + n for c, n in zip(_DK_CODES, _DK, strict=True)},
}
PARC_LABELS = np.array([0, *sorted(DK_NAMES)], dtype=np.int32)  # 69 channels

SEG_LABELS, _UNIQUE_IDX = np.unique(np.array(_SEG_RAW, dtype=np.int32), return_index=True)  # 33 channels
TOPOLOGY_CLASSES = np.array(_TOPOLOGY_RAW, dtype=np.int32)[_UNIQUE_IDX]
CORTEX = (3, 42)  # left / right cerebral cortex (where the parcellation is applied)
CSF = 24  # extra-cerebral CSF: inside the skull but not brain


def flip_indices() -> np.ndarray:
    """Channel permutation that swaps left/right labels (``SynthSeg.predict.get_flip_indices``)."""
    raw = np.array(_SEG_RAW, dtype=np.int32)
    n_sided = (len(raw) - N_NEUTRAL) // 2
    neutral = set(raw[:N_NEUTRAL].tolist())
    left, right = raw[N_NEUTRAL : N_NEUTRAL + n_sided], raw[N_NEUTRAL + n_sided :]
    l2r = {int(a): int(b) for a, b in zip(left, right, strict=True) if a != 0}
    r2l = {b: a for a, b in l2r.items()}
    idx = {int(v): i for i, v in enumerate(SEG_LABELS)}
    out = np.zeros(len(SEG_LABELS), dtype=np.int64)
    for i, v in enumerate(SEG_LABELS.tolist()):
        if v in neutral:
            out[i] = i
        elif v in l2r:
            out[i] = idx[l2r[v]]
        else:
            out[i] = idx[r2l[v]]
    return out


# --- mapping onto the shared vocabulary (knowledge/structures.py) -----------------------------------------
# aseg code -> (vocabulary id, hemi). 24 (CSF) is intentionally unmapped; 3/42 (cortex) are handled below.
ASEG_TO_VOCAB: dict[int, tuple[str, Hemi]] = {
    2: ("cerebral_white_matter", "L"),
    41: ("cerebral_white_matter", "R"),
    4: ("lateral_ventricle", "L"),
    5: ("lateral_ventricle", "L"),  # inferior lateral ventricle (temporal horn) merged
    43: ("lateral_ventricle", "R"),
    44: ("lateral_ventricle", "R"),
    7: ("cerebellum_white_matter", "L"),
    46: ("cerebellum_white_matter", "R"),
    8: ("cerebellum_hemi", "L"),
    47: ("cerebellum_hemi", "R"),
    10: ("thalamus", "L"),
    49: ("thalamus", "R"),
    11: ("caudate", "L"),
    50: ("caudate", "R"),
    12: ("putamen", "L"),
    51: ("putamen", "R"),
    13: ("pallidum", "L"),
    52: ("pallidum", "R"),
    14: ("third_ventricle", "M"),
    15: ("fourth_ventricle", "M"),
    16: ("brainstem", "M"),
    17: ("hippocampus", "L"),
    53: ("hippocampus", "R"),
    18: ("amygdala", "L"),
    54: ("amygdala", "R"),
    26: ("accumbens", "L"),
    58: ("accumbens", "R"),
    28: ("ventral_dc", "L"),
    60: ("ventral_dc", "R"),
}
# Generic cortex id used when no parcellation is run (only if the vocabulary defines it).
CORTEX_VOCAB = "cerebral_cortex"

# Desikan-Killiany region -> closest vocabulary gyrus id (the vocabulary follows Harvard-Oxford names).
# Approximate by construction: DK and Harvard-Oxford draw boundaries differently.
#   DK region                  -> vocab id                 note
DK_TO_VOCAB: dict[str, str] = {
    "bankssts": "stg",  # banks of the superior temporal sulcus
    "caudalanteriorcingulate": "cingulate_ant",
    "caudalmiddlefrontal": "mfg",
    "cuneus": "cuneus",
    "entorhinal": "parahippocampal",  # HO anterior parahippocampal gyrus contains entorhinal cortex
    "fusiform": "temporal_fusiform",  # DK fusiform spans HO temporal + temporo-occipital fusiform
    "inferiorparietal": "angular",  # DK inferior parietal ~ angular gyrus (+ posterior supramarginal)
    "inferiortemporal": "itg",
    "isthmuscingulate": "cingulate_post",
    "lateraloccipital": "lateral_occipital",
    "lateralorbitofrontal": "orbitofrontal",
    "lingual": "lingual",
    "medialorbitofrontal": "frontal_medial",  # HO "frontal medial cortex" (gyrus rectus / vmPFC)
    "middletemporal": "mtg",
    "parahippocampal": "parahippocampal",
    "paracentral": "precentral",  # paracentral lobule = medial continuation of pre/postcentral gyri
    "parsopercularis": "ifg_oper",
    "parsorbitalis": "orbitofrontal",  # HO frontal orbital cortex includes pars orbitalis
    "parstriangularis": "ifg_tri",
    "pericalcarine": "intracalcarine",
    "postcentral": "postcentral",
    "posteriorcingulate": "cingulate_post",
    "precentral": "precentral",
    "precuneus": "precuneus",
    "rostralanteriorcingulate": "cingulate_ant",
    "rostralmiddlefrontal": "mfg",
    "superiorfrontal": "sfg",
    "superiorparietal": "spl",
    "superiortemporal": "stg",
    "supramarginal": "supramarginal",
    "frontalpole": "frontal_pole",
    "temporalpole": "temporal_pole",
    "transversetemporal": "heschl",
    "insula": "insula",
}


def _hemi_of_dk(code: int) -> Hemi:
    return "L" if code < 2000 else "R"


def native_to_vocab(code: int) -> tuple[str, Hemi] | None:
    """Vocabulary (structure, hemi) for a SynthSeg/FreeSurfer label value, or None when unmapped."""
    if code in ASEG_TO_VOCAB:
        return ASEG_TO_VOCAB[code]
    if code in CORTEX:
        if CORTEX_VOCAB in structures.ALL:
            return CORTEX_VOCAB, ("L" if code == 3 else "R")
        return None
    if code in DK_NAMES:
        return DK_TO_VOCAB[DK_NAMES[code].split("-", 2)[2]], _hemi_of_dk(code)
    return None


def build_lut(native: np.ndarray) -> tuple[np.ndarray, dict[int, Region]]:
    """Merge native labels that share a (structure, hemi) into one code.

    Returns a lookup table ``lut[native] -> code`` (0 = unlabelled) and the region table. The code of a
    merged region is its smallest native value, so codes stay recognisable FreeSurfer numbers.
    """
    lut = np.zeros(max(int(native.max(initial=0)), 2035) + 1, dtype=np.int16)
    by_key: dict[tuple[str, Hemi], int] = {}
    for v in sorted(int(x) for x in np.unique(native) if x > 0):
        m = native_to_vocab(v)
        if m is None:
            continue
        assert m[0] in structures.ALL, m
        code = by_key.setdefault(m, v)
        lut[v] = code
    regions = {code: Region(code=code, structure=s, hemi=h) for (s, h), code in by_key.items()}
    return lut, regions
