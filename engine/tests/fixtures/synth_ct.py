"""Synthetic CT torso phantom in Hounsfield units (no real data): skin/fat/soft tissue, spine + ribs +
sternum, two lungs with vessels, trachea + main bronchi, a bowel-gas pocket, a bone speck and a couch
(thin plates touching the back of the body) that the pipeline must remove.

LPS millimetres: +x = patient Left, +y = Posterior, +z = Superior. The array is [z, y, x] with index
z increasing towards Superior (axial ``write_series`` convention).
"""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path

import numpy as np

from tests.fixtures.synth import write_series

PS = 2.5  # in-plane mm
SS = 2.5  # slice mm
NZ, NY, NX = 80, 128, 128
BODY_A, BODY_B = 140.0, 100.0  # half axes (x, y) mm
LUNG_C = (60.0, -5.0, 125.0)  # |x|, y, z of the lung centres
LUNG_R = (42.0, 58.0, 62.0)
TRACHEA_R = 9.0
CARINA_Z = 150.0
COUCH_Y = (100.0, 104.0)  # top plate touches the body at y = 100


@dataclass
class CTPhantom:
    hu: np.ndarray  # float32 [z, y, x]
    lung_left_mm3: float
    lung_right_mm3: float


def _coords() -> tuple[np.ndarray, np.ndarray, np.ndarray]:
    z = (np.arange(NZ) * SS)[:, None, None].astype(np.float32)  # 0..197.5 mm, superior = larger
    y = ((np.arange(NY) - NY / 2 + 0.5) * PS)[None, :, None].astype(np.float32)
    x = ((np.arange(NX) - NX / 2 + 0.5) * PS)[None, None, :].astype(np.float32)
    return z, y, x


def _segment_tube(z, y, x, p0, p1, r) -> np.ndarray:  # noqa: ANN001
    p0, p1 = np.array(p0, np.float32), np.array(p1, np.float32)
    d = p1 - p0
    L2 = float(d @ d)
    t = ((x - p0[0]) * d[0] + (y - p0[1]) * d[1] + (z - p0[2]) * d[2]) / L2
    t = np.clip(t, 0, 1)
    dx, dy, dz = x - (p0[0] + t * d[0]), y - (p0[1] + t * d[1]), z - (p0[2] + t * d[2])
    return dx * dx + dy * dy + dz * dz <= r * r


def ct_phantom(seed: int = 0) -> CTPhantom:
    rng = np.random.default_rng(seed)
    z, y, x = _coords()
    shape = (NZ, NY, NX)
    hu = np.full(shape, -1000.0, np.float32)
    r_body = (x / BODY_A) ** 2 + (y / BODY_B) ** 2
    body = np.broadcast_to(r_body <= 1.0, shape)
    hu[body] = -100.0  # subcutaneous fat
    hu[np.broadcast_to(r_body <= 0.88, shape)] = 40.0  # muscle / organs

    lungs = {}
    for side, sx in (("L", 1.0), ("R", -1.0)):
        cx, cy, cz = sx * LUNG_C[0], LUNG_C[1], LUNG_C[2]
        m = ((x - cx) / LUNG_R[0]) ** 2 + ((y - cy) / LUNG_R[1]) ** 2 + ((z - cz) / LUNG_R[2]) ** 2 <= 1.0
        m = np.broadcast_to(m, shape)
        hu[m] = -850.0
        lungs[side] = m
        for vz in (100.0, 135.0):  # vessels inside the lung (soft tissue, part of the lung volume)
            v = (x - cx) ** 2 + (y - cy) ** 2 + (z - vz) ** 2 <= 6.0**2
            hu[np.broadcast_to(v, shape)] = 40.0

    trachea = np.broadcast_to((x**2 + (y + 30.0) ** 2 <= TRACHEA_R**2) & (z >= CARINA_Z), shape)
    hu[trachea] = -1000.0
    for sx in (1.0, -1.0):
        b = _segment_tube(z, y, x, (0.0, -30.0, CARINA_Z + 2), (sx * 40.0, -15.0, 120.0), 6.0)
        hu[b] = -1000.0

    gas = (x - 30.0) ** 2 + (y + 40.0) ** 2 + (z - 18.0) ** 2 <= 15.0**2  # bowel gas, below the lungs
    hu[np.broadcast_to(gas, shape)] = -1000.0

    # skeleton: vertebral bodies with discs, spinous process, ribs, sternum
    spine = np.broadcast_to((x**2 + (y - 55.0) ** 2 <= 18.0**2), shape)
    disc = np.broadcast_to((np.mod(z, 30.0) < 6.0), shape)
    hu[spine & ~disc] = 450.0
    hu[spine & disc] = 80.0
    proc = np.broadcast_to((np.abs(x) <= 5.0) & (y >= 75.0) & (y <= 90.0) & ~(np.mod(z, 30.0) < 6.0), shape)
    hu[proc] = 500.0
    ang = np.arctan2(-y, x)  # 0 = left, pi/2 = anterior
    rr = np.sqrt((x / (BODY_A * 0.84)) ** 2 + (y / (BODY_B * 0.84)) ** 2)
    for rz in np.arange(40.0, 190.0, 25.0):
        rib = (np.abs(rr - 1.0) * 100.0 <= 4.0) & (np.abs(z - rz) <= 4.0) & (np.abs(np.abs(ang) - np.pi / 2) > 0.5)
        hu[rib] = 600.0
    sternum = np.broadcast_to((np.abs(x) <= 12.0) & (y >= -86.0) & (y <= -76.0) & (z >= 90.0) & (z <= 180.0), shape)
    hu[sternum] = 500.0
    speck = (x - 70.0) ** 2 + (y - 10.0) ** 2 + (z - 60.0) ** 2 <= 2.0**2  # calcification-sized speck
    hu[np.broadcast_to(speck, shape)] = 500.0

    # couch: two thin dense plates with foam between; the top plate touches the patient's back
    plate1 = (y >= COUCH_Y[0]) & (y <= COUCH_Y[1]) & (np.abs(x) <= 150.0)
    plate2 = (y >= COUCH_Y[1] + 10.0) & (y <= COUCH_Y[1] + 13.0) & (np.abs(x) <= 150.0)
    foam = (y > COUCH_Y[1]) & (y < COUCH_Y[1] + 10.0) & (np.abs(x) <= 150.0)
    hu[np.broadcast_to(foam, shape) & ~body] = -700.0
    hu[np.broadcast_to(plate1 | plate2, shape) & ~body] = 300.0

    hu += rng.normal(0, 10, shape).astype(np.float32)
    vox = PS * PS * SS
    return CTPhantom(hu, float(lungs["L"].sum() * vox), float(lungs["R"].sum() * vox))


def write_ct_series(out: Path, phantom: CTPhantom | None = None, **kw: object) -> list[Path]:
    """The phantom as an axial CT series (stored = HU + 1024, RescaleIntercept -1024)."""
    ph = phantom or ct_phantom()
    stored = np.clip(np.rint(ph.hu + 1024.0), 0, 4095).astype(np.uint16)
    args: dict[str, object] = {
        "modality": "CT",
        "description": "CT CHEST SYNTH 2.5MM",
        "pixel_spacing": (PS, PS),
        "slice_spacing": SS,
        "body_part": "CHEST",
    }
    args.update(kw)
    return write_series(out, volume=stored, **args)  # type: ignore[arg-type]
