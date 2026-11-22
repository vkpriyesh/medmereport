"""Synthetic sagittal T2 spine phantom (no real data).

A gently curved spinal canal filled with bright CSF around a darker cord that ends (conus) part way
down; vertebral bodies (intermediate signal) separated by bright-ish discs anterior to the canal;
dark posterior elements; a bright posterior fat layer (as on fast spin-echo T2) and air behind the back.

LPS millimetres: +x = patient Left, +y = Posterior, +z = Superior. Written as a sagittal series via
``write_series`` (slices right -> left index = towards patient right, rows = inferior, cols = posterior).
"""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path

import numpy as np

from tests.fixtures.synth import write_series

NK, NR, NC = 15, 256, 160  # slices (x), rows (z), cols (y)
SS, PS = 3.5, 1.2
PITCH, DISC_H = 30.0, 8.0  # vertebral level pitch and disc height (mm)
CANAL_R, CORD_R = (8.0, 8.0), (5.0, 3.5)  # (x, y) radii
CONUS_Z = -40.0
I_CSF, I_CORD, I_DISC, I_BODY, I_MUSCLE, I_FAT, I_POST = 1000.0, 450.0, 750.0, 500.0, 300.0, 800.0, 220.0


@dataclass
class SpinePhantom:
    volume: np.ndarray  # float32 [slice k, row r, col c] in the written series layout
    n_discs: int
    n_bodies: int
    cord_len_mm: float


def canal_y(z: np.ndarray) -> np.ndarray:
    return 20.0 + 8.0 * np.sin(z / 150.0)


def _grid() -> tuple[np.ndarray, np.ndarray, np.ndarray]:
    # Matches write_series: origin = -0.5*(nc*PS*row + nr*PS*col); row=(0,1,0), col=(0,0,-1), normal=(-1,0,0)
    k = np.arange(NK, dtype=np.float32)[:, None, None]
    r = np.arange(NR, dtype=np.float32)[None, :, None]
    c = np.arange(NC, dtype=np.float32)[None, None, :]
    x = -(k - NK / 2) * SS
    y = -0.5 * NC * PS + c * PS
    z = 0.5 * NR * PS - r * PS
    return x, y, z


def spine_phantom(seed: int = 0) -> SpinePhantom:
    rng = np.random.default_rng(seed)
    x, y, z = _grid()
    shape = (NK, NR, NC)
    yc = canal_y(z)
    vol = np.zeros(shape, np.float32)
    back = 70.0
    vol[np.broadcast_to(y < back, shape)] = I_MUSCLE
    vol[np.broadcast_to((y >= back - 15.0) & (y < back), shape)] = I_FAT
    post = (np.abs(x) <= 15.0) & (y > yc + CANAL_R[1] + 2.0) & (y < yc + 30.0)
    vol[np.broadcast_to(post, shape)] = I_POST
    # vertebral bodies and discs (anterior to the canal)
    col = (np.abs(x) <= 20.0) & (y >= yc - 40.0) & (y <= yc - CANAL_R[1] - 4.0)
    zmin, zmax = float(z.min()), float(z.max())
    phase = np.mod(z - zmin, PITCH)
    disc = phase < DISC_H
    vol[np.broadcast_to(col & ~disc, shape)] = I_BODY
    vol[np.broadcast_to(col & disc, shape)] = I_DISC
    canal = (x / CANAL_R[0]) ** 2 + ((y - yc) / CANAL_R[1]) ** 2 <= 1.0
    vol[np.broadcast_to(canal, shape)] = I_CSF
    cord = ((x / CORD_R[0]) ** 2 + ((y - yc) / CORD_R[1]) ** 2 <= 1.0) & (z >= CONUS_Z)
    vol[np.broadcast_to(cord, shape)] = I_CORD
    vol += rng.normal(0, 15, shape).astype(np.float32)
    vol = np.clip(vol, 0, 4000)
    # discs lying fully inside the field of view (>= 5 mm from its edges), and the bodies between them
    starts = np.arange(zmin, zmax, PITCH)
    n_discs = int(sum(1 for s in starts if s >= zmin + 5.0 and s + DISC_H <= zmax - 5.0))
    n_bodies = max(0, n_discs - 1)
    return SpinePhantom(vol, n_discs, n_bodies, float(zmax - CONUS_Z))


def write_spine_series(out: Path, phantom: SpinePhantom | None = None, **kw: object) -> list[Path]:
    ph = phantom or spine_phantom()
    args: dict[str, object] = {
        "modality": "MR",
        "plane": "sagittal",
        "description": "SAG T2 TSE SPINE SYNTH",
        "pixel_spacing": (PS, PS),
        "slice_spacing": SS,
        "body_part": "LSPINE",
        "echo_time": 100.0,
        "repetition_time": 3000.0,
    }
    args.update(kw)
    return write_series(out, volume=np.rint(ph.volume).astype(np.uint16), **args)  # type: ignore[arg-type]
