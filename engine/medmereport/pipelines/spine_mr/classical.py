"""Classical sagittal-T2 spine segmentation: CSF, cord, vertebral bodies, discs.

Input: a T2 volume resampled onto an LPS-aligned grid (array [z, y, x] with z -> Superior,
y -> Posterior, x -> Left; :func:`pipelines.labelled.axis_aligned`).

1. CSF: the brightest class; the canal is the bright connected component that is long in z but
   narrow in cross-section (posterior fat, also bright on T2 FSE, is wide; discs are short).
2. Canal per axial slice = convex hull of its CSF; cord = darker voxels inside the hull.
3. Vertebral column: intermediate-signal tissue in a box anterior to the canal. A smoothed
   intensity profile along z has a peak at each (hydrated, bright) disc; discs are the column
   voxels in those slabs, vertebral bodies the column pieces between them.
Levels are not numbered (no reliable landmark is detected): all bodies form ``vertebral_column``.
"""

from __future__ import annotations

from dataclasses import dataclass, field

import numpy as np
from scipy import ndimage as ndi
from scipy.signal import find_peaks
from skimage.morphology import convex_hull_image

from medmereport.dicom.series import Geometry

CSF, CORD, BODY, DISC = 1, 2, 3, 4


@dataclass
class SpineSegmentation:
    labels: np.ndarray  # uint8 [z, y, x]
    discs: list[tuple[float, float]]  # (z centre mm, height mm) top -> bottom
    bodies: list[float]  # heights mm, top -> bottom
    warnings: list[str] = field(default_factory=list)


def _otsu(vals: np.ndarray) -> float:
    hist, edges = np.histogram(vals, bins=256)
    centres = (edges[:-1] + edges[1:]) / 2
    w0 = np.cumsum(hist)
    w1 = w0[-1] - w0
    m = np.cumsum(hist * centres)
    mu0 = m / np.maximum(w0, 1)
    mu1 = (m[-1] - m) / np.maximum(w1, 1)
    between = w0 * w1 * (mu0 - mu1) ** 2
    return float(centres[int(np.argmax(between))])


def _canal_component(bright: np.ndarray, sz: float, sy: float, sx: float) -> np.ndarray | None:
    lab, n = ndi.label(bright)
    best, best_area = None, np.inf
    nz = bright.shape[0]
    for i, sl in enumerate(ndi.find_objects(lab), start=1):
        if sl is None:
            continue
        comp = lab[sl] == i
        z_ext = (sl[0].stop - sl[0].start) * sz
        if z_ext < max(40.0, 0.3 * nz * sz):
            continue
        areas = comp.sum(axis=(1, 2)) * sy * sx
        ap = np.array(
            [np.ptp(np.nonzero(comp[k].any(axis=1))[0]) + 1 if comp[k].any() else 0 for k in range(len(comp))]
        )
        med_area = float(np.median(areas[areas > 0]))
        med_ap = float(np.median(ap[ap > 0])) * sy
        if med_ap <= 30.0 and 15.0 <= med_area < best_area:
            best, best_area = i, med_area
    if best is None:
        return None
    out: np.ndarray = lab == best
    return out


def segment_spine(t2: np.ndarray, geom: Geometry) -> SpineSegmentation:
    sx, sy, sz = (float(v) for v in geom.spacing)
    warnings: list[str] = []
    labels = np.zeros(t2.shape, np.uint8)
    fg_thr = 0.1 * float(np.percentile(t2, 99.5))
    fg = t2 > fg_thr
    if fg.sum() < 1000:
        return SpineSegmentation(labels, [], [], ["The spine image is empty."])
    a = t2 / float(np.percentile(t2[fg], 99.5))
    a = ndi.gaussian_filter(a, sigma=(0.6 / sz, 0.6 / sy, 0.6 / sx))
    lo = _otsu(a[fg])
    hi_thr = _otsu(a[fg & (a > lo)])  # bright class: CSF, fat, hydrated discs
    bright = a > hi_thr
    csf = _canal_component(bright, sz, sy, sx)
    if csf is None:
        return SpineSegmentation(labels, [], [], ["The spinal canal could not be found on this image."])

    # canal hull and cord per axial slice
    canal = np.zeros_like(csf)
    for k in range(csf.shape[0]):
        if csf[k].sum() >= 3:
            canal[k] = convex_hull_image(csf[k])
    cord_thr = 0.5 * (hi_thr + lo)
    cord = canal & ~csf & (a < cord_thr) & (a > 0.5 * lo)
    lab, n = ndi.label(cord)
    if n:
        sizes = np.bincount(lab.ravel())
        sizes[0] = 0
        cord = lab == int(np.argmax(sizes))
    zs = np.nonzero(cord.any(axis=(1, 2)))[0]
    if len(zs) == 0 or (zs.max() - zs.min() + 1) * sz < 20.0:
        cord = np.zeros_like(cord)
        warnings.append("The spinal cord could not be separated from the fluid around it on this image.")
    labels[canal & ~cord] = CSF
    labels[cord] = CORD

    # vertebral column: box anterior to the canal, per axial slice
    nz, ny, nx = t2.shape
    column = np.zeros_like(csf)
    yy = np.arange(ny)[:, None]
    xx = np.arange(nx)[None, :]
    centre_x = np.full(nz, np.nan)
    boxes: dict[int, np.ndarray] = {}
    band_vals: list[np.ndarray] = []
    for k in range(nz):
        if not canal[k].any():
            continue
        ys, xs = np.nonzero(canal[k])
        y_ant, cx = ys.min(), xs.mean()
        centre_x[k] = cx
        boxes[k] = (yy < y_ant - 1.0 / sy) & (yy >= y_ant - 50.0 / sy) & (np.abs(xx - cx) * sx <= 25.0)
        band = (yy < y_ant - 3.0 / sy) & (yy >= y_ant - 20.0 / sy) & (np.abs(xx - cx) * sx <= 8.0)
        band_vals.append(a[k][band])
    dark = a[fg & (a < lo)]
    muscle = float(np.median(dark)) if dark.size else 0.0
    band_level = float(np.median(np.concatenate(band_vals))) if band_vals else lo
    body_level = 0.5 * (muscle + band_level)  # muscle vs marrow / disc
    for k, box in boxes.items():
        column[k] = box & (a[k] > body_level)
    column &= ~canal
    column = ndi.binary_opening(column, iterations=1)
    lab, n = ndi.label(column)
    if n == 0:
        warnings.append("The vertebral column could not be found anterior to the canal.")
        return SpineSegmentation(labels, [], [], warnings)
    sizes = np.bincount(lab.ravel())
    sizes[0] = 0
    keep = sizes >= 0.05 * float(np.max(sizes))
    keep[0] = False
    column = keep[lab]

    # disc peaks in the z profile of the column's central part
    prof = np.full(nz, np.nan)
    for k in range(nz):
        if np.isnan(centre_x[k]):
            continue
        sel = column[k] & (np.abs(xx - centre_x[k]) * sx <= 10.0)
        if sel.sum() >= 5:
            prof[k] = float(a[k][sel].mean())
    valid = ~np.isnan(prof)
    discs: list[tuple[float, float]] = []
    bodies: list[float] = []
    disc_mask = np.zeros_like(column)
    if valid.sum() >= 10:
        filled = np.interp(np.arange(nz), np.nonzero(valid)[0], prof[valid])
        sm = ndi.gaussian_filter1d(filled, 1.5 / sz)
        rng = float(np.ptp(sm[valid]))
        peaks, _ = find_peaks(sm, distance=max(1, int(12.0 / sz)), prominence=max(0.05, 0.25 * rng))
        for pk in peaks:
            if not valid[pk]:
                continue
            left = pk
            base = sm[pk] - 0.5 * (sm[pk] - min(sm[max(0, pk - int(15 / sz)) : pk + int(15 / sz) + 1]))
            while left > 0 and sm[left - 1] >= base:
                left -= 1
            right = pk
            while right < nz - 1 and sm[right + 1] >= base:
                right += 1
            disc_mask[left : right + 1] = column[left : right + 1]
            discs.append(((pk * sz), (right - left + 1) * sz))
    if not discs:
        warnings.append("No bright discs were detected; degenerated (dark) discs cannot be separated this way.")
    body_mask = column & ~disc_mask
    lab, n = ndi.label(body_mask)
    for i, sl in enumerate(ndi.find_objects(lab), start=1):
        if sl is None:
            continue
        h = (sl[0].stop - sl[0].start) * sz
        if h < 5.0:
            body_mask[sl][lab[sl] == i] = False
            continue
        touches_edge = sl[0].start == 0 or sl[0].stop == nz
        if not touches_edge:
            bodies.append(h)
    labels[body_mask] = BODY
    labels[disc_mask] = DISC
    # report top -> bottom (array z increases superiorly)
    discs = [(geom.origin[2] + zc, h) for zc, h in sorted(discs, key=lambda t: -t[0])]
    warnings.append("Vertebral levels are not numbered automatically; the column is shown as one structure.")
    return SpineSegmentation(labels, discs, bodies[::-1], warnings)
