"""Classical (HU-threshold) CT body segmentation: body/skin, skeleton, lungs, airway.

Works on a float HU volume [z, y, x] whose array axes are roughly LPS-aligned (an axial CT; the
direction matrix is honoured where it matters: left/right and superior). Output codes:

* 1 ``SOFT``: everything inside the body not covered by another label (the skin mesh uses all codes)
* 2 ``BONE``: > ``bone_hu`` (default 250 HU), small specks dropped
* 3 / 4 ``LUNG_L`` / ``LUNG_R``: air inside the body, largest components, split left/right
* 5 ``AIRWAY``: trachea + main bronchi, traced slice by slice from the top of the scan

Table/couch removal: the couch is a thin flat object under the patient. A per-slice morphological
opening (disc of ``couch_mm``) removes thin plates, then only the largest 3D component is kept.
"""

from __future__ import annotations

from dataclasses import dataclass, field

import numpy as np
from scipy import ndimage as ndi

from medmereport.dicom.series import Geometry

SOFT, BONE, LUNG_L, LUNG_R, AIRWAY = 1, 2, 3, 4, 5


@dataclass
class CTParams:
    body_hu: float = -500.0
    air_hu: float = -400.0
    bone_hu: float = 250.0
    couch_mm: float = 6.0  # opening radius: removes plates thinner than ~2x this
    bone_min_mm3: float = 300.0  # drop bone specks (calcifications, noise, couch rails)
    lung_min_mm3: float = 50_000.0  # 50 cm³: smaller air pockets are bowel gas etc.
    airway_max_area_mm2: float = 700.0  # trachea/main-bronchus cross-section stops below this
    airway_seed_max_area_mm2: float = 600.0


@dataclass
class CTSegmentation:
    labels: np.ndarray  # uint8 [z, y, x]
    body: np.ndarray  # bool, filled body (skin surface)
    warnings: list[str] = field(default_factory=list)


def _disk(radius_vox: tuple[float, float]) -> np.ndarray:
    ry, rx = max(radius_vox[0], 1.0), max(radius_vox[1], 1.0)
    ny, nx = int(np.ceil(ry)), int(np.ceil(rx))
    y, x = np.mgrid[-ny : ny + 1, -nx : nx + 1]
    disk: np.ndarray = (y / ry) ** 2 + (x / rx) ** 2 <= 1.0
    return disk[None, :, :]  # per-slice (no z extent)


def _largest(mask: np.ndarray) -> np.ndarray:
    lab, n = ndi.label(mask)
    if n == 0:
        return mask.astype(bool)
    sizes = np.bincount(lab.ravel())
    sizes[0] = 0
    out: np.ndarray = lab == int(np.argmax(sizes))
    return out


def _fill_slices(mask: np.ndarray) -> np.ndarray:
    out = np.empty_like(mask, dtype=bool)
    for k in range(mask.shape[0]):
        out[k] = ndi.binary_fill_holes(mask[k])
    return out


def _superior_first(geom: Geometry) -> bool:
    """True when array index z = 0 is the most *superior* slice."""
    d = np.array(geom.direction, float).reshape(3, 3)
    return bool(d[2, 2] < 0)


def body_mask(hu: np.ndarray, geom: Geometry, p: CTParams) -> np.ndarray:
    """Filled patient body without the couch."""
    sx, sy = geom.spacing[0], geom.spacing[1]
    mask = hu > p.body_hu
    opened = ndi.binary_opening(mask, structure=_disk((p.couch_mm / sy, p.couch_mm / sx)))
    body = _largest(opened)
    body = _fill_slices(body)  # lungs and airway are inside the body
    body = ndi.binary_fill_holes(body)
    return body


def _airway(air: np.ndarray, body: np.ndarray, geom: Geometry, p: CTParams) -> tuple[np.ndarray, list[str]]:
    """Trace the trachea from the most superior slice downwards, following each branch until it widens."""
    warnings: list[str] = []
    out = np.zeros_like(air, dtype=bool)
    px_mm2 = geom.spacing[0] * geom.spacing[1]
    order = list(range(air.shape[0]) if _superior_first(geom) else range(air.shape[0] - 1, -1, -1))
    prev: np.ndarray | None = None
    started = False
    for i, k in enumerate(order):
        lab, n = ndi.label(air[k])
        if n == 0:
            if started:
                break
            continue
        areas = np.bincount(lab.ravel())[1:] * px_mm2
        if not started:
            if i > max(3, len(order) // 6):  # no trachea in the top part of the scan
                break
            cx = float(np.argwhere(body[k])[:, 1].mean()) if body[k].any() else (air.shape[2] - 1) / 2
            cms = ndi.center_of_mass(np.ones_like(lab), lab, range(1, n + 1))
            cand = [
                (abs(c[1] - cx), j + 1)
                for j, c in enumerate(cms)
                if 30.0 <= areas[j] <= p.airway_seed_max_area_mm2 and abs(c[1] - cx) * geom.spacing[0] < 40
            ]
            if not cand:
                continue
            seed = min(cand)[1]
            out[k] = lab == seed
            prev = out[k]
            started = True
            continue
        assert prev is not None
        grown = ndi.binary_dilation(prev, iterations=2)
        keep = np.zeros_like(prev)
        for j in np.unique(lab[grown & (lab > 0)]):
            if areas[j - 1] <= p.airway_max_area_mm2:
                keep |= lab == j
        if not keep.any():
            break
        out[k] = keep
        prev = keep
    if not out.any():
        warnings.append("The windpipe (trachea) was not found at the top of the scan, so no airway is shown.")
    return out, warnings


def _split_lungs(lungs: np.ndarray, geom: Geometry) -> tuple[np.ndarray, np.ndarray, list[str]]:
    """(left, right) lung masks. Separate components when possible, else erosion, else the midline."""
    warnings: list[str] = []
    d = np.array(geom.direction, float).reshape(3, 3)
    sign_x = 1.0 if d[0, 0] >= 0 else -1.0  # array +x towards patient Left?
    work = lungs
    for _ in range(4):
        lab, n = ndi.label(work)
        if n >= 2:
            sizes = np.bincount(lab.ravel())
            sizes[0] = 0
            a, b = np.argsort(sizes)[::-1][:2]
            if sizes[b] > 0.15 * sizes[a]:
                seeds = np.where(lab == a, 1, np.where(lab == b, 2, 0))
                if work is not lungs:  # grow the eroded seeds back over the full mask
                    _, ind = ndi.distance_transform_edt(seeds == 0, return_indices=True)
                    seeds = np.where(lungs, seeds[tuple(ind)], 0)
                xa = float(np.argwhere(seeds == 1)[:, 2].mean())
                xb = float(np.argwhere(seeds == 2)[:, 2].mean())
                left_id = 1 if (xa - xb) * sign_x > 0 else 2
                return lungs & (seeds == left_id), lungs & (seeds == 3 - left_id), warnings
        work = ndi.binary_erosion(work, iterations=2)
        if not work.any():
            break
    xs = np.argwhere(lungs)[:, 2]
    mid = float(np.median(xs)) if len(xs) else lungs.shape[2] / 2
    xx = np.arange(lungs.shape[2])[None, None, :]
    left = lungs & (((xx - mid) * sign_x) > 0)
    warnings.append("The two lungs touch on this scan; they were split at the midline.")
    return left, lungs & ~left, warnings


def _is_couch_sheet(comp: np.ndarray, geom: Geometry, nz: int) -> bool:
    """A dense flat sheet spanning most of the scan length: what is left of the couch at the contact."""
    dz, dy, dx = comp.shape
    if dz < 0.5 * nz or dx * geom.spacing[0] < 30.0:
        return False
    cols = comp.sum(axis=1)  # voxels along y per (z, x) column
    thick = float(np.median(cols[cols > 0])) * geom.spacing[1] if cols.any() else 0.0
    return thick <= 8.0 and dy * geom.spacing[1] <= 20.0


def segment_ct(hu: np.ndarray, geom: Geometry, params: CTParams | None = None) -> CTSegmentation:
    p = params or CTParams()
    warnings: list[str] = []
    vox = float(np.prod(geom.spacing))
    body = body_mask(hu, geom, p)
    if not body.any():
        return CTSegmentation(np.zeros(hu.shape, np.uint8), body, ["No body was found on this CT."])
    labels = np.where(body, SOFT, 0).astype(np.uint8)

    air = (hu < p.air_hu) & body
    airway, w = _airway(air, body, geom, p)
    warnings += w
    lung_air = air & ~airway
    lab, n = ndi.label(lung_air)
    lungs = np.zeros_like(body)
    if n:
        sizes = np.bincount(lab.ravel()) * vox
        sizes[0] = 0
        big = [int(i) for i in np.argsort(sizes)[::-1] if sizes[i] >= p.lung_min_mm3]
        if big:
            zr = np.argwhere(lab == big[0])[:, 0]
            z0, z1 = int(np.min(zr)), int(np.max(zr))
            for i in big:  # a second lung lies side by side with the first (bowel gas does not)
                zi = np.argwhere(lab == i)[:, 0]
                lo_i, hi_i = int(np.min(zi)), int(np.max(zi))
                overlap = max(0, min(z1, hi_i) - max(z0, lo_i)) / max(1, hi_i - lo_i)
                if i == big[0] or overlap > 0.5:
                    lungs |= lab == i
    if lungs.any():
        lungs = _fill_slices(lungs) & body & ~airway  # vessels inside the lungs belong to the lung
        left, right, w = _split_lungs(lungs, geom)
        warnings += w
        labels[left] = LUNG_L
        labels[right] = LUNG_R
    else:
        warnings.append("No lungs were found in the scanned range.")
    if airway.any():
        labels[airway] = AIRWAY

    bone = (hu > p.bone_hu) & body
    lab, n = ndi.label(bone)
    if n:
        sizes = np.bincount(lab.ravel()) * vox
        sizes[0] = 0
        keep = sizes >= p.bone_min_mm3
        keep[0] = False
        for i, sl in enumerate(ndi.find_objects(lab), start=1):
            if keep[i] and sl is not None and _is_couch_sheet(lab[sl] == i, geom, hu.shape[0]):
                keep[i] = False
                sheet = np.zeros_like(body)
                sheet[sl] = lab[sl] == i
                body &= ~sheet  # the couch where it touches the patient's back
                labels[sheet] = 0
        bone = keep[lab]
    labels[bone & (labels == SOFT)] = BONE
    if not bone.any():
        warnings.append("No bone was found above the threshold.")
    return CTSegmentation(labels, body, warnings)
