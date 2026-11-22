"""Synthetic angiography phantoms (no real data).

* :func:`tof_phantom`: an MR TOF-like head + neck. Bright branching "arteries" (carotids, vertebrals, basilar,
  a circle-of-Willis ring, MCAs, ACAs) inside dark brain/muscle, under a dark skull, under a **bright
  scalp / subcutaneous fat shell** about as bright as the arteries. The shell must never reach the mesh.
* :func:`cta_phantom`: a CT angiography-like trunk in HU: contrast-filled aorta with two side branches, a
  stack of vertebrae (cortical shell > 700 HU around cancellous bone that falls *inside* the lumen HU
  band), and an enhancing kidney-like blob. Only the arteries may reach the mesh.

Coordinates are LPS mm (+x = Left, +y = Posterior, +z = Superior); volumes are ``[z, y, x]``.
"""

from __future__ import annotations

from dataclasses import dataclass, field
from pathlib import Path

import numpy as np
from scipy import ndimage as ndi

from medmereport.dicom.series import Geometry
from medmereport.segment.base import Volume

Seg = tuple[tuple[float, float, float], tuple[float, float, float], float]  # (p0, p1, radius)

# ------------------------------------------------------------------------------------------------ TOF
HEAD_C = (0.0, 0.0, 10.0)
HEAD_R = (72.0, 90.0, 75.0)
NECK_C = (0.0, 10.0)
NECK_R = (52.0, 55.0)
NECK_Z = (-160.0, -30.0)
FAT_MM = 5.0
SKULL_MM = 6.0

TOF_SEGMENTS: list[Seg] = [
    # internal carotids (neck -> skull base -> circle)
    ((20.0, 0.0, -150.0), (20.0, 0.0, -40.0), 2.6),
    ((-20.0, 0.0, -150.0), (-20.0, 0.0, -40.0), 2.6),
    ((20.0, 0.0, -40.0), (15.0, -2.0, -15.0), 2.2),
    ((-20.0, 0.0, -40.0), (-15.0, -2.0, -15.0), 2.2),
    # vertebrals -> basilar
    ((12.0, 25.0, -150.0), (3.0, 22.0, -62.0), 1.8),
    ((-12.0, 25.0, -150.0), (-3.0, 22.0, -62.0), 1.8),
    ((0.0, 22.0, -62.0), (0.0, 12.0, -18.0), 2.0),
    # middle cerebral arteries
    ((15.0, -2.0, -15.0), (55.0, 0.0, -8.0), 1.7),
    ((-15.0, -2.0, -15.0), (-55.0, 0.0, -8.0), 1.7),
    # anterior cerebral arteries
    ((4.0, -16.0, -15.0), (3.0, -55.0, 30.0), 1.4),
    ((-4.0, -16.0, -15.0), (-3.0, -55.0, 30.0), 1.4),
    # posterior cerebral arteries
    ((0.0, 12.0, -18.0), (30.0, 45.0, -5.0), 1.5),
    ((0.0, 12.0, -18.0), (-30.0, 45.0, -5.0), 1.5),
]
COW_RING = ((0.0, 0.0, -16.0), 15.0, 1.6)  # centre, ring radius, tube radius


@dataclass
class TofPhantom:
    volume: Volume
    head: np.ndarray  # ground-truth head (incl. fat) mask on the volume grid
    fat: np.ndarray  # ground-truth scalp/subcutaneous fat shell
    vessels: np.ndarray  # ground-truth lumen
    centreline: np.ndarray  # (N, 3) LPS points along the vessels

    def skin_depth_mm(self, pts: np.ndarray) -> np.ndarray:
        """Distance (mm) from LPS points to the outer head/neck surface (0 outside)."""
        from medmereport.geometry.space import lps_to_index

        g = self.volume.geometry
        edt = _edt(self.head, g)
        ii = np.rint(lps_to_index(g, pts)).astype(int)
        ii = np.clip(ii, 0, np.array(self.head.shape) - 1)
        out: np.ndarray = edt[tuple(ii.T)]
        return out


def _edt(mask: np.ndarray, g: Geometry) -> np.ndarray:
    sz, sy, sx = g.spacing[2], g.spacing[1], g.spacing[0]
    out: np.ndarray = ndi.distance_transform_edt(mask, sampling=(sz, sy, sx))
    return out


def _coords(g: Geometry, shape: tuple[int, int, int]) -> tuple[np.ndarray, np.ndarray, np.ndarray]:
    z, y, x = np.indices(shape, dtype=np.float32)
    return (
        g.origin[0] + x * g.spacing[0],
        g.origin[1] + y * g.spacing[1],
        g.origin[2] + z * g.spacing[2],
    )


def draw_segments(
    x: np.ndarray, y: np.ndarray, z: np.ndarray, segs: list[Seg], spacing: tuple[float, float, float]
) -> tuple[np.ndarray, np.ndarray]:
    """Rasterise capsules; returns (mask, centreline points)."""
    mask = np.zeros(x.shape, bool)
    pts = []
    ox, oy, oz = float(x[0, 0, 0]), float(y[0, 0, 0]), float(z[0, 0, 0])
    for p0, p1, r in segs:
        a, b = np.array(p0), np.array(p1)
        lo, hi = np.minimum(a, b) - r - 1, np.maximum(a, b) + r + 1
        sl = []
        for lo_v, hi_v, o, s, n in zip(lo[::-1], hi[::-1], (oz, oy, ox), spacing[::-1], x.shape, strict=True):
            i0 = max(int(np.floor((lo_v - o) / s)), 0)
            i1 = min(int(np.ceil((hi_v - o) / s)) + 1, n)
            sl.append(slice(i0, i1))
        box = tuple(sl)
        px, py, pz = x[box], y[box], z[box]
        d = b - a
        t = ((px - a[0]) * d[0] + (py - a[1]) * d[1] + (pz - a[2]) * d[2]) / max(float(d @ d), 1e-9)
        t = np.clip(t, 0, 1)
        dist2 = (px - a[0] - t * d[0]) ** 2 + (py - a[1] - t * d[1]) ** 2 + (pz - a[2] - t * d[2]) ** 2
        mask[box] |= dist2 <= r * r
        n_pts = max(2, int(np.linalg.norm(d) / 2))
        pts.append(a + np.linspace(0, 1, n_pts)[:, None] * d)
    return mask, np.concatenate(pts) if pts else np.zeros((0, 3))


def _ring_segments(c: tuple[float, float, float], rr: float, r: float, n: int = 16) -> list[Seg]:
    ang = np.linspace(0, 2 * np.pi, n + 1)
    p = [(c[0] + rr * np.cos(t), c[1] + rr * np.sin(t), c[2]) for t in ang]
    return [((*p[i],), (*p[i + 1],), r) for i in range(n)]  # type: ignore[misc]


def tof_geometry(spacing: tuple[float, float, float] = (1.0, 1.0, 1.2)) -> tuple[Geometry, tuple[int, int, int]]:
    lo = np.array([-80.0, -100.0, -150.0])
    hi = np.array([80.0, 100.0, 90.0])
    n = np.floor((hi - lo) / np.array(spacing)).astype(int) + 1
    g = Geometry(origin=tuple(float(v) for v in lo), spacing=spacing, direction=(1, 0, 0, 0, 1, 0, 0, 0, 1))  # type: ignore[arg-type]
    return g, (int(n[2]), int(n[1]), int(n[0]))


def tof_phantom(
    spacing: tuple[float, float, float] = (1.0, 1.0, 1.2), seed: int = 0, z_range: tuple[float, float] | None = None
) -> TofPhantom:
    """``z_range`` keeps only slices inside it (e.g. a head-only slab)."""
    g, shape = tof_geometry(spacing)
    x, y, z = _coords(g, shape)
    head = (
        ((x - HEAD_C[0]) / HEAD_R[0]) ** 2 + ((y - HEAD_C[1]) / HEAD_R[1]) ** 2 + ((z - HEAD_C[2]) / HEAD_R[2]) ** 2
    ) <= 1
    neck = (
        (((x - NECK_C[0]) / NECK_R[0]) ** 2 + ((y - NECK_C[1]) / NECK_R[1]) ** 2 <= 1)
        & (z >= NECK_Z[0])
        & (z <= NECK_Z[1])
    )
    body = head | neck
    depth = _edt(np.pad(body, ((0, 0), (1, 1), (1, 1))), g)[:, 1:-1, 1:-1]  # FOV bottom is not skin
    fat = body & (depth <= FAT_MM)
    skull = head & ~neck & (depth > FAT_MM) & (depth <= FAT_MM + SKULL_MM)
    segs = TOF_SEGMENTS + _ring_segments(*COW_RING)
    vessels, centre = draw_segments(x, y, z, segs, spacing)
    vessels &= body & (depth > FAT_MM + 2)
    rng = np.random.default_rng(seed)
    a = np.zeros(shape, np.float32)
    a[body] = 0.28  # brain / muscle
    a[skull] = 0.04
    a[fat] = 0.85  # bright fat (TOF suppresses stationary tissue, not fat)
    a[vessels] = 1.0
    a = ndi.gaussian_filter(a, 0.6)
    a += rng.normal(0, 0.025, shape).astype(np.float32)
    a = np.abs(a) * 1000.0
    if z_range is not None:
        keep = (z[:, 0, 0] >= z_range[0]) & (z[:, 0, 0] <= z_range[1])
        k0 = int(np.argmax(keep))
        a, body, fat, vessels = a[keep], body[keep], fat[keep], vessels[keep]
        g = Geometry(
            origin=(g.origin[0], g.origin[1], g.origin[2] + k0 * spacing[2]), spacing=g.spacing, direction=g.direction
        )
        centre = centre[(centre[:, 2] >= z_range[0]) & (centre[:, 2] <= z_range[1])]
    centre = centre[_inside_pts(vessels, g, centre)]
    vol = Volume(data=a.astype(np.float32), geometry=g, sequence="TOF", series_id="s900")
    return TofPhantom(volume=vol, head=body, fat=fat, vessels=vessels, centreline=centre)


def _inside_pts(mask: np.ndarray, g: Geometry, pts: np.ndarray) -> np.ndarray:
    from medmereport.geometry.space import lps_to_index

    ii = np.rint(lps_to_index(g, pts)).astype(int)
    ok = np.all((ii >= 0) & (ii < np.array(mask.shape)), axis=1)
    out = np.zeros(len(pts), bool)
    out[ok] = mask[tuple(ii[ok].T)]
    return out


# ------------------------------------------------------------------------------------------------ CTA
AORTA = ((15.0, 10.0), 11.0)  # (x, y) of the axis, radius
BRANCHES: list[Seg] = [
    ((15.0, 10.0, 10.0), (75.0, 15.0, 0.0), 3.5),
    ((15.0, 10.0, 10.0), (-55.0, 15.0, 0.0), 3.5),
]
SPINE = ((0.0, 48.0), 18.0)  # axis (x, y), vertebral body radius
VERT_H, DISC_H = 24.0, 6.0
CORTEX_MM = 2.0
KIDNEY = ((60.0, 35.0, -40.0), (22.0, 26.0, 40.0))


@dataclass
class CtaPhantom:
    volume: Volume
    aorta: np.ndarray
    bone: np.ndarray
    cancellous: np.ndarray
    kidney: np.ndarray
    meta: dict[str, float] = field(default_factory=dict)


def cta_phantom(spacing: float = 1.5, seed: int = 0) -> CtaPhantom:
    lo = np.array([-100.0, -80.0, -100.0])
    hi = np.array([100.0, 80.0, 100.0])
    n = np.floor((hi - lo) / spacing).astype(int) + 1
    sp3 = (spacing, spacing, spacing)
    g = Geometry(origin=tuple(float(v) for v in lo), spacing=sp3, direction=(1, 0, 0, 0, 1, 0, 0, 0, 1))  # type: ignore[arg-type]
    shape = (int(n[2]), int(n[1]), int(n[0]))
    x, y, z = _coords(g, shape)
    hu = np.full(shape, -1000.0, np.float32)
    body = ((x / 95.0) ** 2 + (y / 75.0) ** 2) <= 1
    hu[body] = 40.0
    (ax, ay), ar = AORTA
    aorta = ((x - ax) ** 2 + (y - ay) ** 2) <= ar * ar
    br, _ = draw_segments(x, y, z, BRANCHES, sp3)
    lumen = (aorta | br) & body
    (sx, sy), sr = SPINE
    rad = np.sqrt((x - sx) ** 2 + (y - sy) ** 2)
    period = VERT_H + DISC_H
    phase = np.mod(z - lo[2], period)
    vb = (rad <= sr) & (phase < VERT_H)
    disc = (rad <= sr) & (phase >= VERT_H)
    shell_r = (rad > sr - CORTEX_MM) | (phase < CORTEX_MM) | (phase > VERT_H - CORTEX_MM)
    cortex = vb & shell_r
    cancellous = vb & ~shell_r
    kc, kr = KIDNEY
    kidney = (((x - kc[0]) / kr[0]) ** 2 + ((y - kc[1]) / kr[1]) ** 2 + ((z - kc[2]) / kr[2]) ** 2) <= 1
    hu[disc] = 80.0
    hu[cancellous] = 300.0  # inside the lumen band on purpose
    hu[cortex] = 1100.0
    hu[kidney] = 220.0
    hu[lumen] = 380.0
    hu = ndi.gaussian_filter(hu, 0.5)
    hu += np.random.default_rng(seed).normal(0, 12, shape).astype(np.float32)
    vol = Volume(data=hu.astype(np.float32), geometry=g, sequence="CTA", series_id="s901")
    return CtaPhantom(vol, lumen, cortex, cancellous, kidney, {"aorta_mm3": float(np.pi * ar * ar * (hi[2] - lo[2]))})


# ------------------------------------------------------------------------------------------------ studies


def write_volume_series(study_dir: Path, sid: str, vol: Volume, *, modality: str, sequence: str, region: str) -> dict:
    """An importer-like series: ``volumes/<sid>.npz`` (full precision) + a minimal ``series/<sid>/meta.json``."""
    import json

    from medmereport.pipelines.importer import save_float_volume

    save_float_volume(study_dir / "volumes" / f"{sid}.npz", vol.data, vol.geometry)
    sdir = study_dir / "series" / sid
    sdir.mkdir(parents=True, exist_ok=True)
    nz, ny, nx = vol.data.shape
    meta = {
        "id": sid,
        "title": f"axial {sequence}",
        "modality": modality,
        "sequence": sequence,
        "plane": "axial",
        "region": region,
        "role": "primary",
        "rows": ny,
        "cols": nx,
        "n": nz,
        "desc": f"synthetic {sequence}",
    }
    (sdir / "meta.json").write_text(json.dumps(meta), encoding="utf-8")
    return meta


def series_info(sid: str, vol: Volume, *, modality: str, sequence: str, region: str):
    from medmereport.core.models import SeriesInfo

    nz, ny, nx = vol.data.shape
    return SeriesInfo(
        id=sid,
        modality=modality,
        description=f"synthetic {sequence}",
        body_part=region,
        plane="axial",
        sequence=sequence,
        role="primary",
        n_images=nz,
        rows=ny,
        cols=nx,
        pixel_spacing=(vol.geometry.spacing[1], vol.geometry.spacing[0]),
        slice_thickness=vol.geometry.spacing[2],
    )


def write_angio_study(root: Path, vol: Volume, *, modality: str, sequence: str, study_id: str = "angio1") -> Path:
    from medmereport.core.models import StudyInfo
    from medmereport.core.studies import write_study

    d = root / study_id
    d.mkdir(parents=True, exist_ok=True)
    write_volume_series(d, "s001", vol, modality=modality, sequence=sequence, region="vessels")
    info = series_info("s001", vol, modality=modality, sequence=sequence, region="vessels")
    write_study(d, StudyInfo(id=study_id, adapter="loose", modalities=[modality], series=[info]))
    return d
