"""Classical vessel extraction (no AI): MR TOF angiography and CT angiography -> lumen mask -> meshes.

TOF (bright inflowing blood):

1. Resample onto an axis-aligned isotropic grid (array axis 0 = LPS +z, superior), light Gaussian.
2. Head mask (Otsu, closed, filled, largest piece). Candidates are restricted to the head mask
   **eroded by a few mm** (padding by edge replication, so a field-of-view cut is not treated as skin).
   This is the main defence against bright scalp/subcutaneous fat, which is as bright as arteries on TOF.
3. White top-hat with a cube (separable min/max filters: fast at any size): keeps structures thinner than
   the cube (vessels), removes broad bright regions (fat pads, tissue, shading).
4. Multiscale Hessian tubularity (Frangi-like, bright tubes) computed only at top-hat candidates; plates
   (sheets of fat) and blobs score low.
5. Hysteresis: seeds = strong top-hat *and* tubular; grown through the weaker top-hat mask.
6. Connected-component cleanup: size, extent, and dropping components that lie mostly in the outer shell
   just inside the restricted region (fat that leaked past the erosion).

CTA (contrast-filled lumen): HU band ~180-600 minus a dilated bone mask (> 700 HU), lightly opened, then
only *tubular* components are kept (effective length >> radius; vertebral cancellous bone and organ
blobs fail this test).

All masks live on the isotropic working grid (:class:`Grid`); meshes come out in LPS mm.
"""

from __future__ import annotations

from collections.abc import Callable
from dataclasses import dataclass, field

import numpy as np
import SimpleITK as sitk
from scipy import ndimage as ndi
from skimage.filters import threshold_otsu

from medmereport.dicom.series import Geometry
from medmereport.geometry.mesh import Mesh, crop_box, decimate, iso_surface, orient_outward, submesh, taubin
from medmereport.geometry.space import from_sitk, index_to_lps, iso_grid, resample_into, to_sitk
from medmereport.segment.base import Volume

Progress = Callable[[float, str], None]


def _noop(pct: float, msg: str = "") -> None:
    return None


@dataclass
class Grid:
    """An isotropic, identity-direction working grid: ``data[z, y, x]``, z increasing superiorly."""

    data: np.ndarray
    geometry: Geometry

    @property
    def spacing(self) -> float:
        return float(self.geometry.spacing[0])

    def z_of_slice(self, k: np.ndarray | float) -> np.ndarray | float:
        return self.geometry.origin[2] + np.asarray(k, float) * self.spacing


@dataclass
class VesselResult:
    mask: np.ndarray  # bool on ``grid``
    grid: Grid
    kind: str  # "tof" | "cta"
    split_z: float | None = None  # LPS z (mm) of the intracranial / neck boundary; None = not split
    components: int = 0
    warnings: list[str] = field(default_factory=list)
    head: np.ndarray | None = None  # head mask on the grid (TOF only)

    @property
    def volume_mm3(self) -> float:
        return float(self.mask.sum()) * self.grid.spacing**3


# ------------------------------------------------------------------------------------------------ grids


def to_iso(vol: Volume, min_spacing: float, max_voxels: int) -> Grid:
    """Resample ``vol`` onto an axis-aligned isotropic grid (spacing >= native, voxel count capped)."""
    shape = vol.data.shape
    native = float(min(vol.geometry.spacing))
    sp = max(native, min_spacing)
    while True:
        ref = iso_grid(vol.geometry, (int(shape[0]), int(shape[1]), int(shape[2])), sp)
        n = int(np.prod(ref.GetSize()))
        if n <= max_voxels:
            break
        sp *= (n / max_voxels) ** (1 / 3) * 1.01
    img = resample_into(to_sitk(vol.data.astype(np.float32), vol.geometry), ref, default=float(np.min(vol.data)))
    arr, geom = from_sitk(img)
    return Grid(arr.astype(np.float32), geom)


def _ball_iters(mm: float, spacing: float) -> int:
    return max(1, int(round(mm / spacing)))


def erode_padded(mask: np.ndarray, iterations: int) -> np.ndarray:
    """Binary erosion where outside the array counts as the nearest edge value (a FOV cut is not a border)."""
    if iterations <= 0:
        return mask.copy()
    p = iterations + 1
    padded = np.pad(mask, p, mode="edge")
    er = ndi.binary_erosion(padded, ndi.generate_binary_structure(3, 1), iterations=iterations)
    out: np.ndarray = er[p:-p, p:-p, p:-p]
    return out


def _fill_slices(mask: np.ndarray) -> np.ndarray:
    out = mask.copy()
    for k in range(mask.shape[0]):
        if out[k].any():
            out[k] = ndi.binary_fill_holes(out[k])
    return out


def _largest(mask: np.ndarray) -> np.ndarray:
    lab, n = ndi.label(mask)
    if n <= 1:
        return mask.astype(bool)
    sizes = np.bincount(lab.ravel())
    sizes[0] = 0
    out: np.ndarray = lab == int(np.argmax(sizes))
    return out


def head_mask(a: np.ndarray, spacing: float) -> np.ndarray:
    """Foreground (head/neck) mask of an MR volume: Otsu on the smoothed signal, closed, filled, largest piece."""
    sm = ndi.gaussian_filter(a, max(0.5, 1.0 / spacing))
    sub = sm[:: max(1, sm.shape[0] // 64), ::2, ::2].ravel()
    try:
        thr = float(threshold_otsu(sub))
    except ValueError:
        return np.zeros(a.shape, bool)
    m = sm > 0.5 * thr
    m = ndi.binary_closing(np.pad(m, 3, mode="edge"), iterations=_ball_iters(2.0, spacing))[3:-3, 3:-3, 3:-3]
    m = _fill_slices(m)
    m = ndi.binary_fill_holes(m)
    return _largest(m)


def white_tophat(a: np.ndarray, size_vox: int) -> np.ndarray:
    """``a - opening(a)`` with a cube: separable 1-D min/max passes (O(n) per axis, any size)."""
    k = max(3, size_vox | 1)
    opened = ndi.maximum_filter(ndi.minimum_filter(a, size=k, mode="nearest"), size=k, mode="nearest")
    out: np.ndarray = a - opened
    return out


def tubularity(
    a: np.ndarray, idx: tuple[np.ndarray, ...], sigmas_vox: list[float], alpha: float = 0.5, beta: float = 0.5
) -> np.ndarray:
    """Frangi-like vesselness (bright tubes) at voxels ``idx`` only, max over scales; 0..1.

    The Hessian components are Gaussian-derivative filters of the whole volume (one at a time, so memory
    stays at one volume plus the candidates), sampled at the candidates and scale-normalised by sigma^2.
    """
    n = len(idx[0])
    best = np.zeros(n, np.float32)
    if n == 0:
        return best
    pairs = [(0, 0), (1, 1), (2, 2), (0, 1), (0, 2), (1, 2)]
    for s in sigmas_vox:
        h = np.zeros((n, 3, 3), np.float32)
        for i, j in pairs:
            order = [0, 0, 0]
            order[i] += 1
            order[j] += 1
            d = ndi.gaussian_filter(a, s, order=order, mode="nearest")[idx] * (s * s)
            h[:, i, j] = d
            h[:, j, i] = d
        ev = np.linalg.eigvalsh(h)
        o = np.argsort(np.abs(ev), axis=1)
        ev = np.take_along_axis(ev, o, axis=1)
        l1, l2, l3 = ev[:, 0], ev[:, 1], ev[:, 2]
        a2, a3 = np.abs(l2), np.abs(l3) + 1e-12
        ra = a2 / a3
        rb = np.abs(l1) / np.sqrt(a2 * a3 + 1e-12)
        ss = np.sqrt(l1 * l1 + l2 * l2 + l3 * l3)
        c = 0.5 * float(np.max(ss)) + 1e-12
        v = (
            (1 - np.exp(-(ra**2) / (2 * alpha**2)))
            * np.exp(-(rb**2) / (2 * beta**2))
            * (1 - np.exp(-(ss**2) / (2 * c**2)))
        )
        v[(l2 > 0) | (l3 > 0)] = 0.0
        best = np.maximum(best, v.astype(np.float32))
    return best


def _component_filter(
    mask: np.ndarray, spacing: float, keep: Callable[[np.ndarray, tuple[slice, ...], int], bool]
) -> tuple[np.ndarray, int]:
    lab, n = ndi.label(mask, ndi.generate_binary_structure(3, 3))
    if n == 0:
        return mask.astype(bool), 0
    objs = ndi.find_objects(lab)
    ok = np.zeros(n + 1, bool)
    for i, box in enumerate(objs, start=1):
        if box is None:
            continue
        ok[i] = keep(lab[box] == i, box, i)
    out: np.ndarray = ok[lab]
    return out, int(ok.sum())


# ------------------------------------------------------------------------------------------------ TOF


@dataclass
class TofParams:
    min_spacing: float = 0.5
    max_voxels: int = 14_000_000
    erode_mm: float = 7.0  # restrict to the head mask eroded this much (scalp + fat + most of the skull)
    shell_mm: float = 4.0  # band just inside the restricted region; components mostly in it are dropped
    shell_fraction: float = 0.3
    tophat_mm: float = 3.0  # half-width of the top-hat cube (vessels thinner than ~6 mm survive)
    sigmas_mm: tuple[float, ...] = (0.6, 1.0, 1.6)
    hi_pct: float = 99.0
    lo_pct: float = 97.5
    seed_tubularity: float = 0.15
    edge_fraction: float = 0.4
    min_mm3: float = 20.0
    min_extent_mm: float = 8.0
    neck_area_cm2: float = 130.0  # below this the whole field of view is taken to be the neck
    neck_area_ratio: float = 0.62
    min_neck_mm: float = 20.0


def skull_base_from_profile(head: np.ndarray, grid: Grid, p: TofParams) -> float | None:
    """LPS z where the head narrows into the neck (axial area profile), or None when the FOV is all one part.

    Returns +inf when the whole field of view looks like the neck.
    """
    area = head.reshape(head.shape[0], -1).sum(1) * grid.spacing**2 / 100.0  # cm^2 per slice
    if not area.any():
        return None
    top = int(np.argmax(area))
    if area[top] < p.neck_area_cm2:
        return float("inf")
    nonzero = np.nonzero(area)[0]
    bottom = int(nonzero[0])
    for k in range(top, bottom - 1, -1):
        if area[k] < p.neck_area_ratio * area[top]:
            if (k + 1 - bottom) * grid.spacing < p.min_neck_mm:  # only a sliver below the head: don't split
                return None
            return float(grid.z_of_slice(k + 0.5))
    return None


def extract_tof(
    vol: Volume,
    params: TofParams | None = None,
    *,
    region_mask: Callable[[Grid], np.ndarray | None] | None = None,
    progress: Progress = _noop,
) -> VesselResult:
    """Arteries from a TOF angiogram. ``region_mask(grid)`` may further restrict candidates (e.g. a brain mask)."""
    p = params or TofParams()
    grid = to_iso(vol, p.min_spacing, p.max_voxels)
    sp = grid.spacing
    a = ndi.gaussian_filter(grid.data, 0.5)
    progress(10, "head mask")
    head = head_mask(a, sp)
    warnings: list[str] = []
    if not head.any():
        return VesselResult(np.zeros(a.shape, bool), grid, "tof", warnings=["No head outline found in the TOF series."])
    inside = erode_padded(head, _ball_iters(p.erode_mm, sp))
    deep = erode_padded(head, _ball_iters(p.erode_mm + p.shell_mm, sp))
    extra = region_mask(grid) if region_mask is not None else None
    if extra is not None:
        inside &= extra
    progress(25, "top-hat")
    r = white_tophat(a, int(round(2 * p.tophat_mm / sp)) + 1)
    vals = r[deep & inside] if (deep & inside).sum() >= 1000 else r[inside]  # thresholds from well inside
    if vals.size < 100:
        return VesselResult(np.zeros(a.shape, bool), grid, "tof", warnings=["The TOF field of view is too small."])
    med = float(np.median(vals))
    mad = float(np.median(np.abs(vals - med))) * 1.4826 + 1e-6
    hi = max(float(np.percentile(vals, p.hi_pct)), med + 6 * mad)
    lo = max(float(np.percentile(vals, p.lo_pct)), med + 3 * mad)
    grow = (r > lo) & inside
    progress(40, "tubularity")
    sig = [s / sp for s in p.sigmas_mm]
    box = crop_box(grow, pad=int(np.ceil(3 * max(sig))) + 1)
    seeds = np.zeros(a.shape, bool)
    if box is not None:
        sub_idx = np.nonzero(grow[box])
        v = tubularity(a[box], sub_idx, sig)
        strong = (r[box][sub_idx] > hi) & (v > p.seed_tubularity)
        seeds[box][tuple(i[strong] for i in sub_idx)] = True
    progress(70, "hysteresis")
    if seeds.any():  # lumen edge ~ a fraction of the typical seed contrast (half-maximum-like), not the noise floor
        lo = max(lo, p.edge_fraction * float(np.median(r[seeds])))
        grow &= r > lo
        seeds &= grow
    lab, _ = ndi.label(grow, ndi.generate_binary_structure(3, 3))
    hit = np.unique(lab[seeds])
    seg = np.isin(lab, hit[hit > 0])
    del lab
    shell = inside & ~deep
    min_vox = p.min_mm3 / sp**3

    def keep(comp: np.ndarray, box: tuple[slice, ...], i: int) -> bool:
        nvox = int(comp.sum())
        if nvox < min_vox:
            return False
        if max((b.stop - b.start) * sp for b in box) < p.min_extent_mm:
            return False
        return float(shell[box][comp].mean()) <= p.shell_fraction

    seg, ncomp = _component_filter(seg, sp, keep)
    if seg.any():
        seg = ndi.binary_closing(np.pad(seg, 1), iterations=1)[1:-1, 1:-1, 1:-1]
    progress(90, "split")
    split = skull_base_from_profile(head, grid, p)
    if ncomp == 0:
        warnings.append("No arteries could be traced in the TOF series.")
    progress(100, "")
    return VesselResult(seg, grid, "tof", split_z=split, components=ncomp, warnings=warnings, head=head)


# ------------------------------------------------------------------------------------------------ CTA


@dataclass
class CtaParams:
    min_spacing: float = 0.8
    max_voxels: int = 24_000_000
    lumen_hu: tuple[float, float] = (180.0, 600.0)
    bone_hu: float = 700.0
    bone_dilate_mm: float = 2.0
    min_mm3: float = 500.0
    min_length_mm: float = 30.0
    tubular_ratio: float = 2.5  # effective length / diameter


def extract_cta(vol: Volume, params: CtaParams | None = None, *, progress: Progress = _noop) -> VesselResult:
    """Contrast-filled arteries from a CT angiogram (``vol.data`` in HU)."""
    p = params or CtaParams()
    grid = to_iso(vol, p.min_spacing, p.max_voxels)
    sp = grid.spacing
    hu = ndi.gaussian_filter(grid.data, 0.5)
    warnings: list[str] = []
    progress(20, "bone")
    bone = ndi.binary_dilation(hu > p.bone_hu, iterations=_ball_iters(p.bone_dilate_mm, sp))
    lumen = (hu >= p.lumen_hu[0]) & (hu <= p.lumen_hu[1]) & ~bone
    lumen = ndi.binary_opening(lumen, iterations=1)
    progress(50, "components")
    min_vox = p.min_mm3 / sp**3

    def keep(comp: np.ndarray, box: tuple[slice, ...], i: int) -> bool:
        nvox = int(comp.sum())
        if nvox < min_vox:
            return False
        if max((b.stop - b.start) * sp for b in box) < p.min_length_mm:
            return False
        dt = ndi.distance_transform_edt(np.pad(comp, 1)) * sp
        r = max(float(dt.max()), sp)
        length = nvox * sp**3 / (np.pi * r * r)
        return length / (2 * r) >= p.tubular_ratio

    seg, ncomp = _component_filter(lumen, sp, keep)
    if ncomp == 0:
        warnings.append("No contrast-filled arteries were found (is this an arterial-phase CT angiogram?).")
    progress(100, "")
    return VesselResult(seg, grid, "cta", components=ncomp, warnings=warnings)


# ------------------------------------------------------------------------------------------------ meshes


def mask_mesh(mask: np.ndarray, geom: Geometry, target_faces: int, smooth: float = 0.6) -> Mesh | None:
    """Smoothed closed surface of a binary mask (LPS), small islands dropped, decimated."""
    pad = 3  # zero border: the surface closes where the mask meets the edge of the field of view
    mask = np.pad(mask, pad)
    o = index_to_lps(geom, np.array([[-float(pad)] * 3]))[0]
    geom = Geometry(origin=(float(o[0]), float(o[1]), float(o[2])), spacing=geom.spacing, direction=geom.direction)
    box = crop_box(mask, pad=pad)
    if box is None:
        return None
    field = ndi.gaussian_filter(mask[box].astype(np.float32), smooth)
    mesh = iso_surface(field, 0.5, box, geom, upsample=1)
    if mesh is None or not len(mesh.faces):
        return None
    mesh = taubin(mesh, 10)
    mesh = decimate(mesh, target_faces)
    mesh = drop_small_pieces(mesh, 40)
    if not len(mesh.faces):
        return None
    orient_outward(mesh)
    return mesh


def drop_small_pieces(mesh: Mesh, min_faces: int) -> Mesh:
    import trimesh

    if not len(mesh.faces):
        return mesh
    labels = trimesh.graph.connected_component_labels(trimesh.graph.face_adjacency(mesh.faces), len(mesh.faces))
    counts = np.bincount(labels)
    keep = counts[labels] >= min_faces
    if keep.all():
        return mesh
    return submesh(mesh, mesh.faces[keep]) if keep.any() else Mesh(np.zeros((0, 3)), np.zeros((0, 3), np.int64))


def split_by_height(mesh: Mesh, split_z: float | None) -> tuple[Mesh | None, Mesh | None]:
    """(above, below) the LPS height ``split_z`` by face centroid. ``inf`` -> everything is below."""
    if split_z is None:
        return mesh, None
    cz = mesh.vertices[mesh.faces].mean(1)[:, 2]
    up = cz >= split_z
    above = submesh(mesh, mesh.faces[up]) if up.any() else None
    below = submesh(mesh, mesh.faces[~up]) if (~up).any() else None
    return above, below


def transform_mesh(mesh: Mesh, moving_to_fixed: Callable[[np.ndarray], np.ndarray]) -> Mesh:
    return Mesh(moving_to_fixed(mesh.vertices), mesh.faces)


def affine_point_map(tx: sitk.Transform) -> Callable[[np.ndarray], np.ndarray]:
    """Point mapper (LPS mm, vectorised) for an affine/rigid SimpleITK transform, sampled at 4 points."""
    basis = np.array([[0.0, 0.0, 0.0], [1.0, 0.0, 0.0], [0.0, 1.0, 0.0], [0.0, 0.0, 1.0]])
    img = np.array([tx.TransformPoint(tuple(float(c) for c in q)) for q in basis], float)
    t = img[0]
    m = (img[1:] - t).T  # columns = images of the unit vectors

    def fn(pts: np.ndarray) -> np.ndarray:
        out: np.ndarray = np.asarray(pts, float) @ m.T + t
        return out

    return fn
