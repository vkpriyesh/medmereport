"""Harvard-Oxford (in MNI152NLin2009cAsym) -> shared-vocabulary label map, built once in template space.

Follows the prototype's region logic: lateralised HO cortical labels (anterior/posterior divisions merged)
restricted to the subcortical atlas' cortex class, HO subcortical structures, and derived structures the
atlases lack: corpus callosum (midline white matter), brainstem split into midbrain/pons/medulla by MNI z,
cerebellum (unlabelled posterior-inferior brain: hemispheres + vermis) and cerebral white matter. Every
remaining voxel of the template brain mask takes its nearest label.
"""

from __future__ import annotations

from dataclasses import dataclass
from functools import lru_cache
from pathlib import Path

import numpy as np
import SimpleITK as sitk
from scipy import ndimage as ndi

from medmereport.geometry.space import resample_into
from medmereport.knowledge.structures import BRAIN
from medmereport.segment.base import Hemi, Region

# HO cortical (48 regions; lateralised file value = 2*i + 1 for Left, 2*i + 2 for Right).
CORT_MAP: tuple[str, ...] = (
    "frontal_pole", "insula", "sfg", "mfg", "ifg_tri", "ifg_oper", "precentral", "temporal_pole",
    "stg", "stg", "mtg", "mtg", "mtg", "itg", "itg", "itg", "postcentral", "spl", "supramarginal",
    "supramarginal", "angular", "lateral_occipital", "lateral_occipital", "intracalcarine", "frontal_medial",
    "sma", "subcallosal", "paracingulate", "cingulate_ant", "cingulate_post", "precuneus", "cuneus",
    "orbitofrontal", "parahippocampal", "parahippocampal", "lingual", "temporal_fusiform", "temporal_fusiform",
    "temporo_occipital_fusiform", "occipital_fusiform", "frontal_operculum", "central_operculum",
    "parietal_operculum", "planum_polare", "heschl", "planum_temporale", "supracalcarine", "occipital_pole",
)  # fmt: skip
assert len(CORT_MAP) == 48

# HO subcortical value -> (hemi, structure). 1/12 = cerebral WM, 2/13 = cerebral cortex, 8 = brainstem.
SUB_MAP: dict[int, tuple[Hemi, str]] = {
    3: ("L", "lateral_ventricle"), 4: ("L", "thalamus"), 5: ("L", "caudate"), 6: ("L", "putamen"),
    7: ("L", "pallidum"), 9: ("L", "hippocampus"), 10: ("L", "amygdala"), 11: ("L", "accumbens"),
    14: ("R", "lateral_ventricle"), 15: ("R", "thalamus"), 16: ("R", "caudate"), 17: ("R", "putamen"),
    18: ("R", "pallidum"), 19: ("R", "hippocampus"), 20: ("R", "amygdala"), 21: ("R", "accumbens"),
}  # fmt: skip
SUB_WM = {1: "L", 12: "R"}
SUB_CORTEX = (2, 13)
SUB_BRAINSTEM = 8

# Derived-structure boxes in MNI RAS millimetres (from the prototype).
CC_HALF_WIDTH = 9.0
CC_Y = (-42.0, 38.0)
CC_Z = (-2.0, 36.0)
MIDBRAIN_Z_MIN = -14.0
PONS_Z_MIN = -40.0
CEREBELLUM_Y_MAX = -30.0
CEREBELLUM_Z_MAX = 2.0
VERMIS_HALF_WIDTH = 7.0


def _unique(seq: tuple[str, ...]) -> list[str]:
    return list(dict.fromkeys(seq))


def _region_table() -> list[tuple[Hemi, str]]:
    table: list[tuple[Hemi, str]] = []
    for s in _unique(CORT_MAP):
        table += [("L", s), ("R", s)]
    for s in _unique(tuple(s for _, s in SUB_MAP.values())):
        table += [("L", s), ("R", s)]
    table += [("L", "corpus_callosum"), ("R", "corpus_callosum")]
    table += [("M", "midbrain"), ("M", "pons"), ("M", "medulla"), ("M", "cerebellar_vermis")]
    table += [("L", "cerebellum_hemi"), ("R", "cerebellum_hemi")]
    table += [("L", "cerebral_white_matter"), ("R", "cerebral_white_matter")]
    return table


REGION_TABLE: tuple[tuple[Hemi, str], ...] = tuple(_region_table())
CODE: dict[tuple[str, str], int] = {k: i + 1 for i, k in enumerate(REGION_TABLE)}
assert all(s in BRAIN for _, s in REGION_TABLE), "atlas region missing from knowledge/structures.py"


def regions() -> dict[int, Region]:
    return {i + 1: Region(code=i + 1, structure=s, hemi=h) for i, (h, s) in enumerate(REGION_TABLE)}


@dataclass(frozen=True)
class TemplateLabels:
    labels: sitk.Image  # int16 vocabulary codes on the template grid
    template: sitk.Image  # float32 T1 (whole head)
    mask: sitk.Image  # uint8 generous template brain mask (registration target, never a volume)


def _largest(mask: np.ndarray) -> np.ndarray:
    lab, n = ndi.label(mask)
    if n == 0:
        return mask
    sizes = ndi.sum(mask, lab, range(1, n + 1))
    out: np.ndarray = lab == (int(np.argmax(sizes)) + 1)
    return out


def ras_grid(img: sitk.Image) -> tuple[np.ndarray, np.ndarray, np.ndarray]:
    """RAS millimetre coordinates (x, y, z) of every voxel of ``img`` as [z, y, x] arrays."""
    nx, ny, nz = img.GetSize()
    d = np.array(img.GetDirection(), float).reshape(3, 3) * np.array(img.GetSpacing(), float)
    o = np.array(img.GetOrigin(), float)
    zz, yy, xx = np.meshgrid(np.arange(nz), np.arange(ny), np.arange(nx), indexing="ij")
    lps = [o[k] + d[k, 0] * xx + d[k, 1] * yy + d[k, 2] * zz for k in range(3)]
    return -lps[0], -lps[1], lps[2]


def build_labels(cort: np.ndarray, sub: np.ndarray, mask: np.ndarray, ras: tuple[np.ndarray, ...]) -> np.ndarray:
    """Pure array version (all inputs on the same template grid)."""
    rx, ry, rz = ras
    out = np.zeros(cort.shape, np.int16)
    is_ctx = np.isin(sub, SUB_CORTEX) & mask
    for i, s in enumerate(CORT_MAP):
        for hemi, off in (("L", 0), ("R", 1)):
            out[(cort == 2 * i + off + 1) & is_ctx] = CODE[(hemi, s)]
    for v, key in SUB_MAP.items():
        out[(sub == v) & mask] = CODE[key]
    wm = np.isin(sub, list(SUB_WM))
    cc = wm & (np.abs(rx) <= CC_HALF_WIDTH) & (ry > CC_Y[0]) & (ry < CC_Y[1]) & (rz > CC_Z[0]) & (rz < CC_Z[1])
    cc = _largest(cc)
    out[cc & (rx < 0)] = CODE[("L", "corpus_callosum")]
    out[cc & (rx >= 0)] = CODE[("R", "corpus_callosum")]
    bst = (sub == SUB_BRAINSTEM) & mask
    out[bst & (rz >= MIDBRAIN_Z_MIN)] = CODE[("M", "midbrain")]
    out[bst & (rz < MIDBRAIN_Z_MIN) & (rz >= PONS_Z_MIN)] = CODE[("M", "pons")]
    out[bst & (rz < PONS_Z_MIN)] = CODE[("M", "medulla")]
    cb = _largest(mask & (sub == 0) & (cort == 0) & (ry < CEREBELLUM_Y_MAX) & (rz < CEREBELLUM_Z_MAX))
    out[cb & (np.abs(rx) <= VERMIS_HALF_WIDTH)] = CODE[("M", "cerebellar_vermis")]
    out[cb & (rx < -VERMIS_HALF_WIDTH)] = CODE[("L", "cerebellum_hemi")]
    out[cb & (rx > VERMIS_HALF_WIDTH)] = CODE[("R", "cerebellum_hemi")]
    for v, hemi in SUB_WM.items():
        out[(sub == v) & (out == 0) & mask] = CODE[(hemi, "cerebral_white_matter")]
    fill_nearest(out, mask)
    out[~mask] = 0
    return out


def fill_nearest(labels: np.ndarray, region: np.ndarray, spacing_zyx: tuple[float, float, float] | None = None) -> None:
    """In place: unlabelled voxels inside ``region`` take the label of the nearest labelled voxel."""
    miss = region & (labels == 0)
    if not miss.any() or not (labels > 0).any():
        return
    _, ind = ndi.distance_transform_edt(labels == 0, sampling=spacing_zyx, return_indices=True)
    labels[miss] = labels[tuple(ind[:, miss])]


@lru_cache(maxsize=2)
def load_template_labels(t1: Path, mask: Path, cortical: Path, subcortical: Path) -> TemplateLabels:
    tpl = sitk.ReadImage(str(t1), sitk.sitkFloat32)
    m = sitk.ReadImage(str(mask), sitk.sitkUInt8)
    cort = sitk.GetArrayFromImage(_on_grid(sitk.ReadImage(str(cortical)), tpl))
    sub = sitk.GetArrayFromImage(_on_grid(sitk.ReadImage(str(subcortical)), tpl))
    mm = sitk.GetArrayFromImage(m) > 0
    arr = build_labels(cort.astype(np.int16), sub.astype(np.int16), mm, ras_grid(tpl))
    img = sitk.GetImageFromArray(arr)
    img.CopyInformation(tpl)
    m.CopyInformation(tpl)
    return TemplateLabels(labels=img, template=tpl, mask=m)


def _on_grid(img: sitk.Image, ref: sitk.Image) -> sitk.Image:
    """Atlases ship on the template grid; resample (identity, nearest) only if a grid differs."""
    same = (
        img.GetSize() == ref.GetSize()
        and np.allclose(img.GetOrigin(), ref.GetOrigin(), atol=1e-3)
        and np.allclose(img.GetSpacing(), ref.GetSpacing(), atol=1e-4)
        and np.allclose(img.GetDirection(), ref.GetDirection(), atol=1e-4)
    )
    if same:
        return img
    return resample_into(img, ref, None, labels=True)
