"""Atlas backend building blocks on synthetic data (no network, no atlas files)."""

from __future__ import annotations

import numpy as np
import pytest
import SimpleITK as sitk

from medmereport.knowledge.structures import BRAIN
from medmereport.segment.atlas import labels as L
from medmereport.segment.atlas import register as reg
from medmereport.segment.atlas.strip import PLAUSIBLE_CC, skull_strip


def test_region_table_uses_vocabulary_and_merges_divisions():
    assert len(L.REGION_TABLE) == len(set(L.REGION_TABLE))
    regions = L.regions()
    assert sorted(regions) == list(range(1, len(L.REGION_TABLE) + 1))
    assert all(r.structure in BRAIN for r in regions.values())
    # anterior/posterior divisions merged: one region per hemisphere
    assert sum(1 for r in regions.values() if r.structure == "mtg") == 2
    assert {r.hemi for r in regions.values() if r.structure == "pons"} == {"M"}
    for s in ("hippocampus", "thalamus", "lateral_ventricle", "corpus_callosum", "cerebellum_hemi"):
        assert {r.hemi for r in regions.values() if r.structure == s} == {"L", "R"}


def _grid(spacing: float = 2.0) -> sitk.Image:
    """MNI-like LPS grid (direction diag(-1,-1,1), like the 2009c template)."""
    n = (96, 116, 96)
    img = sitk.Image(n, sitk.sitkInt16)
    img.SetSpacing((spacing,) * 3)
    img.SetDirection((-1.0, 0, 0, 0, -1.0, 0, 0, 0, 1.0))
    img.SetOrigin((96.0, 132.0, -78.0))
    return img


def test_build_labels_derived_structures():
    img = _grid()
    rx, ry, rz = L.ras_grid(img)
    shape = rx.shape
    mask = (rx**2 / 70**2 + (ry + 18) ** 2 / 95**2 + (rz - 5) ** 2 / 75**2) < 1
    sub = np.zeros(shape, np.int16)
    cort = np.zeros(shape, np.int16)
    sub[mask & (rx < 0) & (rz > 0)] = 1  # left WM (RAS x < 0 = left)
    sub[mask & (rx >= 0) & (rz > 0)] = 12
    stem = mask & (np.abs(rx) < 8) & (np.abs(ry + 25) < 10) & (rz < 0)
    sub[stem] = 8
    hip_src = mask & (rx < -20) & (np.abs(ry) < 8) & (np.abs(rz + 15) < 6)
    sub[hip_src] = 9  # left hippocampus
    cort_zone = mask & (rx < -55) & (rz > 0)
    sub[cort_zone] = 2
    cort[cort_zone] = 2 * 8 + 1  # left STG anterior (index 8)
    out = L.build_labels(cort, sub, mask, (rx, ry, rz))
    code = L.CODE
    assert (out[~mask] == 0).all() and (out[mask] > 0).all()  # whole mask labelled, nothing outside
    assert (out[cort_zone] == code[("L", "stg")]).all()
    assert (out[hip_src] == code[("L", "hippocampus")]).all()
    # brainstem split by MNI z
    for s, lo, hi in (("midbrain", -14, 99), ("pons", -40, -14), ("medulla", -99, -40)):
        sel = stem & (rz >= lo) & (rz < hi)
        if sel.any():
            assert (out[sel] == code[("M", s)]).all(), s
    # corpus callosum: midline WM box, lateralised
    cc = (out == code[("L", "corpus_callosum")]) | (out == code[("R", "corpus_callosum")])
    assert cc.any() and (np.abs(rx[cc]) <= L.CC_HALF_WIDTH).all()
    # cerebellum from unlabelled posterior-inferior brain: hemispheres + vermis
    for key in (("L", "cerebellum_hemi"), ("R", "cerebellum_hemi"), ("M", "cerebellar_vermis")):
        sel = out == code[key]
        assert sel.any(), key
        assert ry[sel].mean() < L.CEREBELLUM_Y_MAX and rz[sel].mean() < L.CEREBELLUM_Z_MAX
    assert (out == code[("L", "cerebral_white_matter")]).any()


def _head(spacing: float = 2.0, seed: int = 0):
    """Synthetic T1 head: WM core, GM shell, CSF, dark skull, bright scalp fat, a neck/face blob."""
    n = int(220 / spacing)
    z, y, x = (np.indices((n, n, n)).astype(np.float32) - n / 2) * spacing
    r = np.sqrt((x / 1.0) ** 2 + (y / 1.2) ** 2 + (z / 0.95) ** 2) / 0.8  # brain ~1.4 L
    a = np.zeros((n, n, n), np.float32)
    a[r < 92] = 900  # scalp fat
    a[r < 86] = 40  # skull
    a[r < 80] = 150  # CSF
    a[r < 76] = 450  # GM
    a[r < 64] = 650  # WM
    a[(r < 30) & (np.abs(x) < 6)] = 150  # ventricles
    neck = (np.sqrt(x**2 + (y - 10) ** 2) < 45) & (z < -50) & (z > -100)
    a[neck & (r >= 86)] = 420  # muscle below the skull
    a += np.random.default_rng(seed).normal(0, 15, a.shape).astype(np.float32)
    brain = r < 80
    return np.clip(a, 0, None), brain


def test_skull_strip_synthetic_head():
    a, brain = _head()
    res = skull_strip(a, 2.0)
    dice = 2 * (res.mask & brain).sum() / (res.mask.sum() + brain.sum())
    assert dice > 0.9, dice
    assert res.plausible and PLAUSIBLE_CC[0] <= res.volume_cc <= PLAUSIBLE_CC[1]


def test_skull_strip_with_prior_stays_inside():
    a, brain = _head(seed=1)
    prior = brain.copy()
    res = skull_strip(a, 2.0, prior=prior)
    assert 2 * (res.mask & brain).sum() / (res.mask.sum() + brain.sum()) > 0.9
    from scipy import ndimage as ndi

    assert not (res.mask & ~ndi.binary_dilation(prior, iterations=2)).any()


def test_skull_strip_flags_implausible_volume():
    a, brain = _head()
    small = a[::2, ::2, ::2]  # same voxels treated as 2 mm -> brain ~1/8 of the volume
    res = skull_strip(small, 2.0)
    assert not res.plausible and res.notes


class Cancelled(Exception):
    pass


def test_registration_progress_can_cancel():
    fixed = sitk.GaussianSource(sitk.sitkFloat32, [48] * 3, [6.0] * 3, [24.0] * 3)
    moving = sitk.GaussianSource(sitk.sitkFloat32, [48] * 3, [6.0] * 3, [26.0, 23.0, 24.0])
    ticks = []

    def tick(f):
        ticks.append(f)
        if len(ticks) == 3:
            raise Cancelled()

    with pytest.raises(Cancelled):
        reg.affine(fixed, moving, tick, reg.RegistrationSettings(affine_shrink=(1,), affine_smooth=(0.0,)))
    assert all(0 <= f <= 1 for f in ticks)


def test_registration_direction_is_fixed_to_moving():
    """fixed=A, moving=B returns T with A-points -> B-points (what resample_into expects)."""
    fixed = sitk.GaussianSource(sitk.sitkFloat32, [48] * 3, [5.0] * 3, [24.0] * 3)
    moving = sitk.GaussianSource(sitk.sitkFloat32, [48] * 3, [5.0] * 3, [27.0, 22.0, 25.0])
    s = reg.RegistrationSettings(affine_shrink=(2, 1), affine_smooth=(1.0, 0.0), affine_sampling=0.5)
    tx, _ = reg.affine(fixed, moving, lambda f: None, s)
    p = np.array(tx.TransformPoint((24.0, 24.0, 24.0)))
    assert np.allclose(p, (27.0, 22.0, 25.0), atol=0.7), p
