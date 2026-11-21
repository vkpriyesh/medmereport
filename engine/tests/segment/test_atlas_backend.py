"""AtlasBackend end to end on a posed, thick-slice copy of the MNI template (needs the atlas-ho assets).

The "patient" is the MNI152 2009c head moved by a known rigid transform and re-acquired with 3 mm axial
slices; ground truth is the vocabulary label map pulled through the same known transform.
"""

from __future__ import annotations

import time

import numpy as np
import pytest
import SimpleITK as sitk

from medmereport.geometry.space import index_to_lps
from medmereport.segment.atlas import AtlasBackend
from medmereport.segment.atlas import labels as L
from medmereport.segment.atlas.strip import skull_strip
from tests.segment.phantoms import patient_to_mni, thick_slice_patient

pytestmark = pytest.mark.needs_models


def _dice(a: np.ndarray, b: np.ndarray) -> float:
    s = int(a.sum()) + int(b.sum())
    return 2.0 * float((a & b).sum()) / s if s else 1.0


@pytest.fixture(scope="module")
def run(atlas_assets):
    backend = AtlasBackend()
    tpl = backend._template()
    t1 = sitk.GetArrayFromImage(tpl.template)
    brain = skull_strip(t1, 1.0, prior=sitk.GetArrayFromImage(tpl.mask) > 0).mask  # template's own brain
    gt_mni = sitk.GetArrayFromImage(tpl.labels).copy()
    gt_mni[~brain] = 0
    gt_img = sitk.GetImageFromArray(gt_mni)
    gt_img.CopyInformation(tpl.labels)
    vol, gt, geom = thick_slice_patient(tpl.template, gt_img, patient_to_mni(), slice_mm=3)
    events: list[tuple[str, float]] = []
    t0 = time.perf_counter()
    lm = backend.segment(vol, [], lambda stage, pct, msg="": events.append((stage, pct)))
    return {"lm": lm, "gt": gt, "vol": vol, "events": events, "seconds": time.perf_counter() - t0, "tpl": tpl}


def test_labelmap_contract(run):
    lm, vol = run["lm"], run["vol"]
    assert lm.labels.shape == vol.data.shape and lm.labels.dtype == np.int16
    assert lm.geometry == vol.geometry  # patient grid, not template grid
    assert lm.backend == "atlas-ho@1" and "CC BY-SA 4.0" in lm.licence
    assert lm.brain_mask is not None and lm.brain_mask.shape == vol.data.shape
    assert set(np.unique(lm.labels)) - {0} <= set(lm.regions)
    assert not any("outside" in c for c in lm.caveats), lm.caveats
    print(f"atlas backend: {run['seconds']:.1f} s")


@pytest.mark.parametrize("structure", ["hippocampus", "thalamus", "lateral_ventricle"])
def test_dice_deep_structures(run, structure):
    lm, gt = run["lm"], run["gt"]
    for hemi in ("L", "R"):
        c = L.CODE[(hemi, structure)]
        d = _dice(lm.labels == c, gt == c)
        assert d >= 0.6, (structure, hemi, d)


def test_dice_whole_brain(run):
    assert _dice(run["lm"].labels > 0, run["gt"] > 0) >= 0.9


def _centroid_lps(mask: np.ndarray, geom) -> np.ndarray:
    return index_to_lps(geom, np.argwhere(mask).mean(0)[None])[0]


def test_labels_are_in_patient_space(run):
    """Centroids match the posed ground truth, and differ from where the structure sits in MNI space."""
    lm, gt, vol, tpl = run["lm"], run["gt"], run["vol"], run["tpl"]
    mni = sitk.GetArrayFromImage(tpl.labels)
    from medmereport.geometry.space import from_sitk

    _, mni_geom = from_sitk(tpl.labels)
    pose = patient_to_mni()
    for key in (("L", "hippocampus"), ("R", "thalamus"), ("M", "pons"), ("L", "putamen"), ("R", "cerebellum_hemi")):
        c = L.CODE[key]
        got = _centroid_lps(lm.labels == c, vol.geometry)
        want = _centroid_lps(gt == c, vol.geometry)
        assert np.linalg.norm(got - want) < 3.0, (key, got, want)
        in_mni = _centroid_lps(mni == c, mni_geom)
        # the known pose maps our patient-space centroid onto the template-space centroid
        assert np.linalg.norm(np.array(pose.TransformPoint(tuple(got))) - in_mni) < 4.0, key
        assert np.linalg.norm(got - in_mni) > 5.0, key  # i.e. not returned in template space


def test_progress_reports_stages_in_order(run):
    events = run["events"]
    stages = [s for s, _ in events]
    for s in ("skull_strip", "affine", "bspline", "labels"):
        assert s in stages
    pcts = [p for _, p in events]
    assert all(0 <= p <= 100 for p in pcts)
    assert pcts == sorted(pcts) and pcts[-1] == 100


class Cancelled(Exception):
    pass


def test_cancel_from_progress(atlas_assets):
    tpl = AtlasBackend()._template()
    vol, _, _ = thick_slice_patient(tpl.template, tpl.labels, patient_to_mni(), slice_mm=3)

    def progress(stage, pct, msg=""):
        if stage == "affine" and pct > 20:
            raise Cancelled()

    t0 = time.perf_counter()
    with pytest.raises(Cancelled):
        AtlasBackend().segment(vol, [], progress)
    assert time.perf_counter() - t0 < 60


def test_registry_offers_atlas(atlas_assets):
    from medmereport.segment.registry import all_backends, available_backends, best_backend, get_backend

    assert "atlas-ho" in all_backends()
    assert any(b.name == "atlas-ho" for b in available_backends())
    assert best_backend(None) is not None
    assert get_backend("atlas-ho").available()
