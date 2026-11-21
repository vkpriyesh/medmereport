"""Morphological skull strip for T1-weighted heads (no AI dependencies).

Prototype method: threshold brain-tissue intensities (above the CSF class, below fat), erode to cut the
thin bridges to scalp/orbits, keep the large component nearest the head (or prior) centroid, dilate back
inside the tissue mask, close and fill holes. The result includes CSF (typically 1.2-1.7 L).

Improvement over the prototype: an optional *prior* (the template brain mask brought into the patient by
a whole-head affine registration) limits the search region, which stops the mask leaking into neck
muscles through the brainstem. The upper intensity cut is derived from the white-matter peak so bright
white matter (e.g. in templates or MPRAGE) is not cut away.

Works on a ~1 mm isotropic grid; erosion depth is given in millimetres.
"""

from __future__ import annotations

from dataclasses import dataclass, field

import numpy as np
from scipy import ndimage as ndi
from skimage import filters

PLAUSIBLE_CC = (900.0, 2000.0)
_TARGET_CC = 1400.0
_EROSIONS_MM = (9.0, 7.0, 11.0, 5.0, 13.0)  # first plausible wins
_EROSIONS_WITH_PRIOR_MM = (5.0, 7.0, 3.0, 9.0)  # the prior already blocks leaks: erode less
_PRIOR_MARGIN_MM = 3.0
_WM_TO_FAT = 1.3  # with a prior: fat is cut above this multiple of the white-matter peak


@dataclass
class StripResult:
    mask: np.ndarray  # bool [z, y, x]
    volume_cc: float
    plausible: bool
    erosion_mm: float
    notes: list[str] = field(default_factory=list)


def head_mask(a: np.ndarray) -> np.ndarray:
    pos = a[a > 0]
    if pos.size == 0:
        return np.zeros(a.shape, bool)
    head = a > np.percentile(pos, 30) * 0.5
    head = ndi.binary_closing(head, iterations=3)
    filled: np.ndarray = ndi.binary_fill_holes(head)
    return filled


def _peak(vals: np.ndarray) -> float:
    hist, edges = np.histogram(vals, bins=128)
    i = int(np.argmax(ndi.uniform_filter1d(hist.astype(float), 5)))
    return float((edges[i] + edges[i + 1]) / 2)


def tissue_thresholds(vals: np.ndarray, brain_vals: np.ndarray | None = None) -> tuple[float, float]:
    """(lower, upper) brain-tissue intensity window: above CSF, below fat.

    ``vals``: whole-head intensities (the CSF cut is the lower 3-class Otsu threshold). ``brain_vals``:
    intensities inside a brain prior, where the brightest Otsu class is white matter, so fat is cut
    relative to the white-matter peak. Without a prior: the prototype's 95th percentile.
    """
    t_csf, _ = filters.threshold_multiotsu(vals, classes=3)
    if brain_vals is None or brain_vals.size < 1000:
        return float(t_csf), float(np.percentile(vals, 95))
    _, t_wm = filters.threshold_multiotsu(brain_vals, classes=3)
    wm = brain_vals[brain_vals > t_wm]
    wm_peak = _peak(wm) if wm.size else float(t_wm)
    return float(t_csf), _WM_TO_FAT * wm_peak


def _one(tissue: np.ndarray, centre: np.ndarray, iters: int, region: np.ndarray | None) -> np.ndarray:
    st = ndi.generate_binary_structure(3, 1)
    er = ndi.binary_erosion(tissue, st, iterations=iters)
    lab, n = ndi.label(er)
    if n == 0:
        return np.zeros(tissue.shape, bool)
    sizes = ndi.sum(er, lab, range(1, n + 1))
    order = np.argsort(sizes)[::-1][:3]
    top: list[int] = [int(t) for t in order if sizes[t] >= 0.2 * sizes[order[0]]]  # ignore crumbs near the centre
    dists = [np.linalg.norm(np.array(ndi.center_of_mass(lab == t + 1)) - centre) for t in top]
    best = int(top[int(np.argmin(dists))]) + 1
    b = ndi.binary_dilation(lab == best, st, iterations=iters) & tissue
    b = ndi.binary_closing(b, iterations=4)
    if region is not None:
        b &= region
    out: np.ndarray = ndi.binary_fill_holes(b)
    return out


def skull_strip(a: np.ndarray, spacing_mm: float = 1.0, prior: np.ndarray | None = None) -> StripResult:
    """Brain mask of a T1 head on an isotropic grid with voxel size ``spacing_mm``.

    ``prior``: optional bool mask of where the brain can be (e.g. a registered template mask).
    """
    a = np.asarray(a, np.float32)
    head = head_mask(a)
    vals = a[head]
    voxel_cc = spacing_mm**3 / 1000.0
    if vals.size < 1000:
        return StripResult(np.zeros(a.shape, bool), 0.0, False, 0.0, ["no head found in the image"])
    region = None
    centre = np.array(ndi.center_of_mass(head))
    if prior is not None and (prior & head).sum() > 1000:
        region = ndi.binary_dilation(prior, iterations=max(1, round(_PRIOR_MARGIN_MM / spacing_mm)))
        centre = np.array(ndi.center_of_mass(prior))
        lower, upper = tissue_thresholds(vals, a[prior & head])
        tissue = (a > lower) & (a < upper) & head & region
    else:
        lower, upper = tissue_thresholds(vals)
        tissue = (a > lower) & (a < upper) & head
    best: StripResult | None = None
    for mm in _EROSIONS_MM if region is None else _EROSIONS_WITH_PRIOR_MM:
        iters = max(1, round(mm / spacing_mm))
        m = _one(tissue, centre, iters, region)
        vol = float(m.sum()) * voxel_cc
        res = StripResult(m, vol, PLAUSIBLE_CC[0] <= vol <= PLAUSIBLE_CC[1], mm)
        if res.plausible:
            return res
        if best is None or abs(vol - _TARGET_CC) < abs(best.volume_cc - _TARGET_CC):
            best = res
    assert best is not None
    best.notes.append(f"Skull strip volume {best.volume_cc:.0f} cm3 is outside the plausible range.")
    return best
