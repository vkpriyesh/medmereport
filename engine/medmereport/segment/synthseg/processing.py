"""Numpy re-implementation of SynthSeg 2.0's pre- and post-processing (``SynthSeg/predict_synthseg.py``).

Arrays handed to the network are in SynthSeg's layout: ``[x, y, z]`` with axes running towards patient
Right, Anterior, Superior (RAS) at 1 mm, i.e. what ``align_volume_to_ref(aff_ref=eye(4))`` produces. The
engine's grids are LPS ``[z, y, x]``; :func:`to_network_grid` / :func:`from_network_grid` convert, always
through ``geometry.space`` helpers so the result lands back on the patient's own grid.
"""

from __future__ import annotations

from collections.abc import Callable, Iterator
from dataclasses import dataclass

import numpy as np
import SimpleITK as sitk
from scipy import ndimage

from medmereport.dicom.series import Geometry
from medmereport.geometry.space import iso_grid, resample_into, to_sitk

LEVELS = 5  # U-Net depth: spatial sizes must be multiples of 2**LEVELS
MULT = 2**LEVELS
MIN_PAD = 128  # SynthSeg pads every axis to at least this


# ------------------------------------------------------------------------------------------- grid / resampling
def to_network_grid(data: np.ndarray, geom: Geometry, target_mm: float = 1.0) -> tuple[np.ndarray, sitk.Image]:
    """Resample a patient volume onto an axis-aligned 1 mm grid; return ``(ras_xyz_array, lps_grid)``.

    As in SynthSeg's ``resample_volume``, axes finer than the target are low-pass filtered first
    (sigma = 0.25 / factor voxels) to avoid aliasing; coarser axes are linearly upsampled.
    """
    data = np.asarray(data, np.float32)
    factor = np.asarray(geom.spacing, float) / target_mm  # per array axis x, y, z
    sigmas_xyz = np.where(factor < 1 - 0.05, 0.25 / factor, 0.0)
    if np.any(sigmas_xyz > 0):
        data = ndimage.gaussian_filter(data, sigma=tuple(sigmas_xyz[::-1]))  # numpy order z, y, x
    grid = iso_grid(geom, data.shape, target_mm)  # identity direction: +x Left, +y Posterior, +z Superior
    arr = sitk.GetArrayFromImage(resample_into(to_sitk(data, geom), grid))  # [z, y, x] LPS
    return lps_zyx_to_ras_xyz(arr), grid


def lps_zyx_to_ras_xyz(a: np.ndarray) -> np.ndarray:
    """``[z, y, x]`` on an identity-direction LPS grid -> ``[x, y, z]`` running R, A, S."""
    return np.ascontiguousarray(np.flip(np.transpose(a, (2, 1, 0)), axis=(0, 1)))


def ras_xyz_to_lps_zyx(a: np.ndarray) -> np.ndarray:
    return np.ascontiguousarray(np.transpose(np.flip(a, axis=(0, 1)), (2, 1, 0)))


def from_network_grid(
    labels_ras: np.ndarray, grid: sitk.Image, reference: Geometry, ref_shape: tuple[int, ...]
) -> np.ndarray:
    """Nearest-neighbour resample network-grid labels onto the patient's reference grid ``[z, y, x]``."""
    img = sitk.GetImageFromArray(ras_xyz_to_lps_zyx(labels_ras.astype(np.int16)))
    img.CopyInformation(grid)
    ref = to_sitk(np.zeros(ref_shape, np.int16), reference)
    return sitk.GetArrayFromImage(resample_into(img, ref, labels=True)).astype(np.int16)


# ------------------------------------------------------------------------------------------- intensities
def rescale(im: np.ndarray, lo_pct: float = 0.5, hi_pct: float = 99.5, ct: bool = False) -> np.ndarray:
    """Robust min-max to [0, 1] (``edit_volumes.rescale_volume``); CT is first clipped to [0, 80] HU."""
    im = np.asarray(im, np.float32)
    if ct:
        im = np.clip(im, 0, 80)
    lo, hi = np.percentile(im, [lo_pct, hi_pct])
    if hi <= lo:
        return np.zeros_like(im)
    return ((np.clip(im, lo, hi) - lo) / (hi - lo)).astype(np.float32)


# ------------------------------------------------------------------------------------------- crop / pad
def head_bbox(im: np.ndarray, thr: float = 0.05, margin: int = 8) -> tuple[slice, slice, slice]:
    """Bounding box of non-background voxels (+margin). Saves memory/time; everything outside is air."""
    m = im > thr
    if not m.any():
        return tuple(slice(0, s) for s in im.shape)  # type: ignore[return-value]
    out = []
    for ax in range(3):
        nz = np.flatnonzero(m.any(axis=tuple(a for a in range(3) if a != ax)))
        out.append(slice(max(int(nz[0]) - margin, 0), min(int(nz[-1]) + 1 + margin, im.shape[ax])))
    return tuple(out)  # type: ignore[return-value]


def ceil_to(n: int, m: int = MULT) -> int:
    return int(-(-n // m) * m)


def pad_shape(shape: tuple[int, ...], min_pad: int = MIN_PAD) -> tuple[int, ...]:
    return tuple(max(ceil_to(s), ceil_to(min_pad)) for s in shape)


def pad_centered(im: np.ndarray, shape: tuple[int, ...]) -> tuple[np.ndarray, tuple[slice, ...]]:
    """Zero-pad (first 3 axes) to ``shape`` with floor/ceil margins like ``edit_volumes.pad_volume``."""
    lo = [(t - s) // 2 for s, t in zip(im.shape[:3], shape, strict=True)]
    widths = [(a, t - s - a) for a, s, t in zip(lo, im.shape[:3], shape, strict=True)] + [(0, 0)] * (im.ndim - 3)
    inner = tuple(slice(a, a + s) for a, s in zip(lo, im.shape[:3], strict=True))
    return np.pad(im, widths), inner


# ------------------------------------------------------------------------------------------- tiling
@dataclass(frozen=True)
class Tile:
    src: tuple[slice, slice, slice]  # region fed to the network
    core: tuple[slice, slice, slice]  # region of the output kept (absolute coordinates)
    core_local: tuple[slice, slice, slice]  # same region relative to the tile


def plan_tile_shape(
    shape: tuple[int, ...], max_voxels: int, overlap: int = 64, min_side: int = 96
) -> tuple[int, int, int]:
    """Tile shape (multiples of 32, at most ``shape``, at most ``max_voxels``) with the largest smallest
    side (context is what limits tiled accuracy), then the least total work through the network."""
    dims = [int(s) for s in shape[:3]]
    options = [sorted({d, *range(min(min_side, d), d + 1, MULT)}) for d in dims]
    best: tuple[int, float, tuple[int, int, int]] | None = None
    smallest = (options[0][0], options[1][0], options[2][0])
    for tx in options[0]:
        for ty in options[1]:
            for tz in options[2]:
                if tx * ty * tz > max_voxels:
                    continue
                t = (tx, ty, tz)
                work = float(np.prod([len(_axis_tiles(d, n, overlap)) * n for d, n in zip(dims, t, strict=True)]))
                key = (-min(t), work, t)
                if best is None or key < best:
                    best = key
    return best[2] if best is not None else smallest


def _axis_tiles(dim: int, tile: int, overlap: int) -> list[tuple[int, int, int, int]]:
    """(start, stop, core_start, core_stop) per tile along one axis; starts stay multiples of 32."""
    if tile >= dim:
        return [(0, dim, 0, dim)]
    step = max(tile - overlap, MULT)
    starts = list(range(0, dim - tile + 1, step))
    if starts[-1] != dim - tile:
        starts.append(dim - tile)  # dim and tile are multiples of 32, so this one is too
    out = []
    for i, s in enumerate(starts):
        c0 = 0 if i == 0 else (s + starts[i - 1] + tile) // 2  # middle of the overlap with the previous tile
        c1 = dim if i == len(starts) - 1 else (starts[i + 1] + s + tile) // 2
        out.append((s, s + tile, c0, c1))
    return out


BLEND = 0.25  # fraction of each overlap (centred) over which neighbouring tiles cross-fade


def _ramp(n: int, lo: int, hi: int) -> np.ndarray:
    """1-D blending weight of a tile of length ``n`` sharing ``lo``/``hi`` voxels with its neighbours.

    Zero near the tile border (the least reliable predictions: least context), a linear cross-fade over
    the central ``BLEND`` fraction of the overlap, one inside; complementary ramps of neighbours sum to 1.
    """
    w = np.ones(n, np.float32)
    p = np.arange(n, dtype=np.float32) + 0.5
    for ov, q in ((lo, p), (hi, n - p)):
        if ov:
            w = np.minimum(w, np.clip((q - ov * (1 - BLEND) / 2) / (ov * BLEND), 0, 1))
    return w


def plan_tiles(shape: tuple[int, ...], tile: tuple[int, int, int], overlap: int = 64) -> list[Tile]:
    per_axis = [_axis_tiles(int(shape[a]), tile[a], overlap) for a in range(3)]
    tiles = []
    for ax in per_axis[0]:
        for ay in per_axis[1]:
            for az in per_axis[2]:
                src = tuple(slice(a[0], a[1]) for a in (ax, ay, az))
                core = tuple(slice(a[2], a[3]) for a in (ax, ay, az))
                local = tuple(slice(a[2] - a[0], a[3] - a[0]) for a in (ax, ay, az))
                tiles.append(Tile(src, core, local))  # type: ignore[arg-type]
    return tiles


def tile_weights(tile: Tile, tiles: list[Tile]) -> np.ndarray:
    """Separable blending weights ``[x, y, z]`` for ``tile`` given its overlaps with the other tiles."""
    ws = []
    for a in range(3):
        s, e = tile.src[a].start, tile.src[a].stop
        others = {(t.src[a].start, t.src[a].stop) for t in tiles} - {(s, e)}
        lo = max((oe - s for os_, oe in others if os_ < s < oe), default=0)
        hi = max((e - os_ for os_, oe in others if os_ < e < oe), default=0)
        ws.append(_ramp(e - s, lo, hi))
    return ws[0][:, None, None] * ws[1][None, :, None] * ws[2][None, None, :]


def _clip(region: tuple[slice, ...], window: tuple[slice, ...]) -> tuple[tuple[slice, ...], tuple[slice, ...]]:
    """Intersect an absolute ``region`` with ``window``: (slices into the window, slices into the region)."""
    dst, loc = [], []
    for r, w in zip(region, window, strict=True):
        a, b = max(r.start, w.start), min(r.stop, w.stop)
        b = max(a, b)
        dst.append(slice(a - w.start, b - w.start))
        loc.append(slice(a - r.start, b - r.start))
    return tuple(dst), tuple(loc)


def _full(shape: tuple[int, ...]) -> tuple[slice, ...]:
    return tuple(slice(0, int(s)) for s in shape[:3])


def run_tiled(
    net: Callable[[np.ndarray], np.ndarray],
    x: np.ndarray,
    tiles: list[Tile],
    reduce: Callable[[np.ndarray], np.ndarray],
    out: np.ndarray,
    on_tile: Callable[[int, int], None] | None = None,
    window: tuple[slice, ...] | None = None,
) -> np.ndarray:
    """Apply ``net`` ([X,Y,Z,C] -> [X,Y,Z,K]) tile by tile, storing ``reduce(prediction)`` cores in ``out``.

    ``out`` covers ``x[window]`` (default: all of ``x``). Hard seams between tile cores: used for outputs
    that cannot be averaged (e.g. a per-tile argmax).
    """
    window = window or _full(x.shape)
    for i, t in enumerate(tiles):
        dst, loc = _clip(t.core, window)
        pred = net(np.ascontiguousarray(x[t.src]))
        local = tuple(slice(c.start + lo.start, c.start + lo.stop) for c, lo in zip(t.core_local, loc, strict=True))
        out[dst] = reduce(pred[local])
        if on_tile:
            on_tile(i + 1, len(tiles))
    return out


def run_blended(
    net: Callable[[np.ndarray], np.ndarray],
    x: np.ndarray,
    tiles: list[Tile],
    out: np.ndarray,
    on_tile: Callable[[int, int], None] | None = None,
    window: tuple[slice, ...] | None = None,
) -> np.ndarray:
    """Like :func:`run_tiled` but cross-fades overlapping tile predictions (posteriors) with
    :func:`tile_weights`; ``out`` (zeros, covering ``x[window]``) receives the weighted average."""
    window = window or _full(x.shape)
    if len(tiles) == 1:
        out[...] = net(np.ascontiguousarray(x))[window]
        if on_tile:
            on_tile(1, 1)
        return out
    wsum = np.zeros(out.shape[:3], np.float32)
    for i, t in enumerate(tiles):
        dst, loc = _clip(t.src, window)
        w = tile_weights(t, tiles)[loc]
        pred = net(np.ascontiguousarray(x[t.src]))[loc]
        pred *= w[..., None]
        out[dst] += pred
        wsum[dst] += w
        del pred
        if on_tile:
            on_tile(i + 1, len(tiles))
    np.maximum(wsum, 1e-6, out=wsum)
    for c in range(out.shape[-1]):
        out[..., c] /= wsum
    return out


def flip_tta(net: Callable[[np.ndarray], np.ndarray], flip_idx: np.ndarray) -> Callable[[np.ndarray], np.ndarray]:
    """SynthSeg's left/right test-time augmentation: average ``net(x)`` with the un-flipped prediction of the
    flipped input, whose channels are swapped left<->right. Axis 0 is the R-L axis of the RAS layout."""

    def run(x: np.ndarray) -> np.ndarray:
        a = net(x)
        b = net(np.ascontiguousarray(np.flip(x, axis=0)))[::-1]
        for c, src in enumerate(flip_idx):  # channel by channel: no second full-size copy
            a[..., c] += b[..., src]
        del b
        a *= 0.5
        return a

    return run


# ------------------------------------------------------------------------------------------- postprocessing
def largest_cc(mask: np.ndarray) -> np.ndarray:
    """``edit_volumes.get_largest_connected_component`` (6-connectivity)."""
    lab, n = ndimage.label(mask)
    if n == 0:
        return mask.copy()
    counts = np.bincount(lab.ravel())
    counts[0] = 0
    return np.asarray(lab == int(np.argmax(counts)))


def _channels(post: np.ndarray) -> Iterator[np.ndarray]:
    for c in range(post.shape[-1]):
        yield post[..., c]


def postprocess(post: np.ndarray, topology: np.ndarray | None, labels: np.ndarray) -> np.ndarray:
    """Posteriors ``[X,Y,Z,K]`` (modified in place) -> label values, following SynthSeg ``postprocess``.

    1. keep the largest connected component of the whole foreground (sum of non-background posteriors
       > 0.25);
    2. with ``topology`` (non-fast mode): per topological class, keep its largest component of voxels where
       any member has posterior > 0.25; without it (fast / robust mode): zero posteriors < 0.2;
    3. argmax (the per-voxel renormalisation in SynthSeg does not change the argmax).
    Works channel by channel so memory stays at one extra ``[X,Y,Z]`` mask.
    """
    fg = np.zeros(post.shape[:3], np.float32)
    for ch in list(_channels(post))[1:]:
        fg += ch
    keep = largest_cc(fg > 0.25)
    del fg
    for ch in list(_channels(post))[1:]:
        ch *= keep
    if topology is not None:
        for cls in np.unique(topology[topology > 0]):
            idx = np.flatnonzero(topology == cls)
            m = np.zeros(post.shape[:3], bool)
            for i in idx:
                m |= post[..., i] > 0.25
            m = largest_cc(m)
            for i in idx:
                post[..., i] *= m
    else:
        for ch in list(_channels(post))[1:]:
            ch[ch <= 0.2] = 0
    return labels[np.argmax(post, axis=-1)].astype(np.int32)


def merge_parcellation(
    seg: np.ndarray, parc_idx: np.ndarray, parc_labels: np.ndarray, cortex: tuple[int, ...]
) -> np.ndarray:
    """Replace cortex voxels of ``seg`` by DK labels (``parc_idx`` = argmax over parcellation channels 1..)."""
    out = seg.copy()
    m = np.isin(seg, cortex)
    out[m] = parc_labels[1:][parc_idx[m]]
    return out
