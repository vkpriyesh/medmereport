"""Synthetic brain phantom (no real data): ellipsoid hemispheres with lobar shells, deep structures,
ventricles, hippocampi, a cerebellum blob and a cylindrical brainstem, plus T1/FLAIR/T2/ADC volumes.

Coordinates are LPS mm: +x = patient Left, +y = Posterior, +z = Superior.
"""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path

import numpy as np

from medmereport.dicom.series import Geometry
from medmereport.segment.base import LabelMap, Region, Volume

HEMI_R = (33.0, 80.0, 55.0)
HEMI_C = 35.0  # |x| of the hemisphere centres
HEMI_Z = 15.0
VENT = ((18.0, -5.0, 28.0), (5.0, 22.0, 6.0))
THAL = ((16.0, 10.0, 10.0), (7.0, 12.0, 9.0))
HIPPO = ((28.0, 15.0, -18.0), (6.0, 16.0, 6.0))
CEREB = ((0.0, 62.0, -62.0), (45.0, 28.0, 22.0))
STEM = ((0.0, 20.0), 11.0, (-92.0, -42.0))

# code -> (structure, hemi)
CODES: dict[int, tuple[str, str]] = {
    1: ("sfg", "L"),
    2: ("sfg", "R"),
    3: ("postcentral", "L"),
    4: ("postcentral", "R"),
    5: ("stg", "L"),
    6: ("stg", "R"),
    7: ("lateral_occipital", "L"),
    8: ("lateral_occipital", "R"),
    9: ("cerebral_white_matter", "L"),
    10: ("cerebral_white_matter", "R"),
    11: ("thalamus", "L"),
    12: ("thalamus", "R"),
    13: ("lateral_ventricle", "L"),
    14: ("lateral_ventricle", "R"),
    15: ("hippocampus", "L"),
    16: ("hippocampus", "R"),
    17: ("cerebellum_hemi", "L"),
    18: ("cerebellum_hemi", "R"),
    19: ("cerebellar_vermis", "M"),
    20: ("midbrain", "M"),
    21: ("pons", "M"),
    22: ("medulla", "M"),
}


def ellipsoid_mm3(radii: tuple[float, float, float]) -> float:
    return 4.0 / 3.0 * np.pi * radii[0] * radii[1] * radii[2]


@dataclass
class Phantom:
    reference: Volume
    labels: LabelMap
    extras: list[Volume]
    left_scale: float


def phantom_geometry(spacing: float = 2.0) -> tuple[Geometry, tuple[int, int, int]]:
    lo = np.array([-76.0, -90.0, -96.0])
    hi = np.array([76.0, 100.0, 76.0])
    n = np.floor((hi - lo) / spacing).astype(int) + 1  # x, y, z
    g = Geometry(
        origin=(float(lo[0]), float(lo[1]), float(lo[2])), spacing=(spacing,) * 3, direction=(1, 0, 0, 0, 1, 0, 0, 0, 1)
    )
    return g, (int(n[2]), int(n[1]), int(n[0]))


def _ell(x, y, z, c, r):
    return ((x - c[0]) / r[0]) ** 2 + ((y - c[1]) / r[1]) ** 2 + ((z - c[2]) / r[2]) ** 2 <= 1


def make_phantom(spacing: float = 2.0, left_scale: float = 1.0, seed: int = 0) -> Phantom:
    """``left_scale`` scales the left hemisphere's x radius (to create asymmetry)."""
    g, shape = phantom_geometry(spacing)
    z, y, x = np.indices(shape, dtype=np.float32)
    x = g.origin[0] + x * spacing
    y = g.origin[1] + y * spacing
    z = g.origin[2] + z * spacing
    lab = np.zeros(shape, np.int16)
    t1 = np.full(shape, 20.0, np.float32)
    # brainstem + cerebellum first (hemispheres never overlap them by construction)
    (sx, sy), sr, (z0, z1) = STEM
    stem = ((x - sx) ** 2 + (y - sy) ** 2 <= sr**2) & (z >= z0) & (z <= z1)
    lab[stem & (z > -55)] = 20
    lab[stem & (z <= -55) & (z > -75)] = 21
    lab[stem & (z <= -75)] = 22
    cb = _ell(x, y, z, *CEREB)
    lab[cb & (x > 6)] = 17
    lab[cb & (x < -6)] = 18
    lab[cb & (np.abs(x) <= 6)] = 19
    for side, off in ((1, 0), (-1, 1)):  # +x = left
        rx = HEMI_R[0] * (left_scale if side == 1 else 1.0)
        cx = side * (2.0 + rx)
        c = (cx, 0.0, HEMI_Z)
        hemi = _ell(x, y, z, c, (rx, HEMI_R[1], HEMI_R[2]))
        core = _ell(x, y, z, c, (rx - 5, HEMI_R[1] - 5, HEMI_R[2] - 5))
        shell = hemi & ~core
        lab[core] = 9 + off
        lab[shell & (y < -25)] = 1 + off
        lab[shell & (y > 40)] = 7 + off
        lab[shell & (y >= -25) & (y <= 40) & (z < 5)] = 5 + off
        lab[shell & (y >= -25) & (y <= 40) & (z >= 5)] = 3 + off
        for (cc, rr), code in ((THAL, 11), (HIPPO, 15), (VENT, 13)):
            lab[_ell(x, y, z, (side * cc[0], cc[1], cc[2]), rr)] = code + off
    names = {c: s for c, (s, _) in CODES.items()}
    level_t1 = {
        "sfg": 520,
        "postcentral": 520,
        "stg": 520,
        "lateral_occipital": 520,
        "cerebral_white_matter": 800,
        "thalamus": 620,
        "lateral_ventricle": 120,
        "hippocampus": 560,
        "cerebellum_hemi": 600,
        "cerebellar_vermis": 600,
        "midbrain": 700,
        "pons": 700,
        "medulla": 700,
    }
    gm = {"sfg", "postcentral", "stg", "lateral_occipital", "hippocampus", "cerebellum_hemi", "cerebellar_vermis"}
    rng = np.random.default_rng(seed)
    brain = lab > 0
    from scipy import ndimage as ndi

    ring = ndi.binary_dilation(brain, iterations=max(1, int(round(4 / spacing)))) & ~brain
    t1[ring] = 100.0
    flair = np.where(ring, 40.0, 5.0).astype(np.float32)
    t2 = np.where(ring, 1500.0, 10.0).astype(np.float32)
    adc = np.where(ring, 3000.0, 0.0).astype(np.float32)
    for c, s in names.items():
        m = lab == c
        t1[m] = level_t1[s]
        if s == "lateral_ventricle":
            flair[m], t2[m], adc[m] = 50.0, 1500.0, 3000.0
        elif s == "cerebral_white_matter":
            flair[m], t2[m], adc[m] = 400.0, 300.0, 750.0
        elif s in gm:
            flair[m], t2[m], adc[m] = 500.0, 450.0, 850.0
        else:
            flair[m], t2[m], adc[m] = 440.0, 360.0, 780.0
    t1 += rng.normal(0, 12, shape).astype(np.float32)
    regions = {c: Region(code=c, structure=s, hemi=h) for c, (s, h) in CODES.items()}  # type: ignore[arg-type]
    lm = LabelMap(
        labels=lab,
        geometry=g,
        regions=regions,
        backend="phantom@1",
        licence="CC0 (synthetic)",
        caveats=["Synthetic phantom labels."],
    )
    ref = Volume(data=t1, geometry=g, sequence="T1", series_id="s000")
    extras = [
        Volume(data=flair, geometry=g, sequence="FLAIR", series_id="s001"),
        Volume(data=t2, geometry=g, sequence="T2", series_id="s002"),
        Volume(data=adc, geometry=g, sequence="ADC", series_id="s003"),
    ]
    return Phantom(ref, lm, extras, left_scale)


def expected_tissue_mm3(left_scale: float = 1.0) -> float:
    r = HEMI_R
    hemis = ellipsoid_mm3((r[0] * left_scale, r[1], r[2])) + ellipsoid_mm3(r)
    vents = 2 * ellipsoid_mm3(VENT[1])
    (_, _), sr, (z0, z1) = STEM
    return hemis - vents + ellipsoid_mm3(CEREB[1]) + np.pi * sr**2 * (z1 - z0)


# ------------------------------------------------------------------ fake study (importer-like export)
_SORT_KEY = {"axial": lambda p: -p[2], "sagittal": lambda p: p[0], "coronal": lambda p: p[1]}
NATIVE = {
    # plane: (sequence, direction (cols x, rows y, normal z as columns), spacing (sx, sy, sz), size (nx, ny, nz))
    "axial": ("FLAIR", (1, 0, 0, 0, 1, 0, 0, 0, 1), (1.5, 1.5, 4.0), (100, 126, 40)),
    "sagittal": ("T1", (0, 0, -1, 1, 0, 0, 0, -1, 0), (1.5, 1.5, 5.0), (126, 114, 28)),
}


def native_series(phantom: Phantom, plane: str, data: np.ndarray | None = None):
    """Resample the phantom onto a native-like series grid; frames in importer display order."""
    import SimpleITK as sitk

    from medmereport.geometry.space import from_sitk, index_to_lps, resample_into, to_sitk

    seq, direction, spacing, size = NATIVE[plane]
    d = np.array(direction, float).reshape(3, 3)
    # centre the native grid on the phantom
    centre = np.array([0.0, 5.0, -10.0])
    half = d @ (np.array(spacing) * (np.array(size) - 1) / 2)
    ref = sitk.Image([int(s) for s in size], sitk.sitkFloat32)
    ref.SetOrigin(tuple(float(v) for v in centre - half))
    ref.SetSpacing(tuple(float(v) for v in spacing))
    ref.SetDirection(tuple(float(v) for v in d.ravel()))
    src = phantom.reference.data if data is None else data
    img = resample_into(to_sitk(src.astype(np.float32), phantom.reference.geometry), ref)
    vol, geom = from_sitk(img)
    pos = index_to_lps(geom, np.array([[k, 0, 0] for k in range(vol.shape[0])], float))
    order = sorted(range(vol.shape[0]), key=lambda k: _SORT_KEY[plane](pos[k]))
    iop = [*d[:, 0].tolist(), *d[:, 1].tolist()]
    return (
        seq,
        [vol[k] for k in order],
        [[round(float(v), 3) for v in pos[k]] for k in order],
        iop,
        spacing,
        geom,
        order,
    )


def write_fake_study(
    root: Path, phantom: Phantom, planes=("axial", "sagittal"), study_id: str = "phantomstudy1"
) -> Path:
    from medmereport.core.models import SeriesInfo, StudyInfo
    from medmereport.core.studies import write_study
    from medmereport.export.slices import export_stack

    d = root / study_id
    d.mkdir(parents=True, exist_ok=True)
    infos = []
    for i, plane in enumerate(planes, start=1):
        seq, frames, pos, iop, spacing, _, _ = native_series(phantom, plane)
        sid = f"s{i:03d}"
        rows, cols = frames[0].shape
        meta = {
            "id": sid,
            "title": f"{plane} {seq}",
            "modality": "MR",
            "sequence": seq,
            "plane": plane,
            "region": "brain",
            "role": "primary",
            "rows": rows,
            "cols": cols,
            "pixelSpacing": [spacing[1], spacing[0]],
            "thickness": spacing[2],
            "orientation": iop,
            "slices": [{"pos": p} for p in pos],
        }
        full = export_stack(frames, meta, d / "series" / sid)
        infos.append(
            SeriesInfo(
                id=sid,
                modality="MR",
                description=meta["title"],
                body_part="brain",
                plane=plane,
                sequence=seq,
                role="primary",
                n_images=full["n"],
                rows=rows,
                cols=cols,
                pixel_spacing=(spacing[1], spacing[0]),
                slice_thickness=spacing[2],
            )
        )
    write_study(d, StudyInfo(id=study_id, adapter="loose", modalities=["MR"], series=infos))
    return d
