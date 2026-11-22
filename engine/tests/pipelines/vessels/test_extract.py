"""Classical vessel tracing on synthetic phantoms (tests/fixtures/synth_vessels.py)."""

import numpy as np
import pytest
from scipy.spatial import cKDTree

from medmereport.pipelines.vessels.extract import (
    TofParams,
    erode_padded,
    extract_cta,
    extract_tof,
    mask_mesh,
    split_by_height,
    white_tophat,
)
from tests.fixtures.synth_vessels import SPINE, cta_phantom, tof_phantom


@pytest.fixture(scope="module")
def tof():
    ph = tof_phantom()
    return ph, extract_tof(ph.volume)


@pytest.fixture(scope="module")
def cta():
    ph = cta_phantom()
    return ph, extract_cta(ph.volume)


def test_tophat_keeps_thin_bright_line_and_drops_broad_plateau():
    a = np.zeros((30, 30, 30), np.float32)
    a[:, 15, 15] = 1.0  # 1-voxel line
    a[5:25, 0:12, 0:12] = 1.0  # broad block
    r = white_tophat(a, 5)
    assert r[10, 15, 15] == pytest.approx(1.0)
    assert r[15, 6, 6] == pytest.approx(0.0)


def test_erode_padded_ignores_fov_cut():
    m = np.zeros((20, 20, 20), bool)
    m[:, 5:15, 5:15] = True  # a column cut by the top and bottom of the FOV
    er = erode_padded(m, 2)
    assert er[0, 10, 10] and er[-1, 10, 10]  # FOV edge is not a surface
    assert not er[10, 5, 10] and er[10, 7, 10]


def test_tof_mesh_exists_and_follows_the_arteries(tof):
    ph, res = tof
    assert res.components >= 1 and res.mask.any()
    mesh = mask_mesh(res.mask, res.grid.geometry, 150_000)
    assert mesh is not None and mesh.n_faces > 1000
    d, _ = cKDTree(mesh.vertices).query(ph.centreline)
    assert (d < 4.0).mean() > 0.9  # nearly every centreline point has the surface nearby
    gt = ph.vessels.sum() * np.prod(ph.volume.geometry.spacing)
    assert 0.6 * gt < res.volume_mm3 < 1.5 * gt


def test_tof_excludes_bright_scalp_fat_shell(tof):
    ph, res = tof
    mesh = mask_mesh(res.mask, res.grid.geometry, 150_000)
    depth = ph.skin_depth_mm(mesh.vertices)
    assert depth.min() > 7.0  # the fat shell is 0-5 mm deep; no vertex anywhere near it


def test_tof_fat_excluded_even_with_little_erosion():
    """The outer-shell component rule catches fat that leaks past a too-small erosion."""
    ph = tof_phantom()
    res = extract_tof(ph.volume, TofParams(erode_mm=3.0))
    mesh = mask_mesh(res.mask, res.grid.geometry, 150_000)
    assert mesh is not None
    assert ph.skin_depth_mm(mesh.vertices).min() > 6.0


def test_tof_split_intracranial_vs_neck(tof):
    ph, res = tof
    assert res.split_z is not None and -60 < res.split_z < -20
    mesh = mask_mesh(res.mask, res.grid.geometry, 150_000)
    up, low = split_by_height(mesh, res.split_z)
    assert up is not None and low is not None
    assert up.vertices[:, 2].min() >= res.split_z - 2 and low.vertices[:, 2].max() <= res.split_z + 2


def test_tof_head_only_slab_is_not_split():
    res = extract_tof(tof_phantom(z_range=(-30.0, 90.0)).volume)
    assert res.mask.any() and res.split_z is None


def test_tof_neck_only_is_all_neck():
    res = extract_tof(tof_phantom(z_range=(-150.0, -45.0)).volume)
    assert res.mask.any() and res.split_z == float("inf")
    mesh = mask_mesh(res.mask, res.grid.geometry, 50_000)
    up, low = split_by_height(mesh, res.split_z)
    assert up is None and low is not None


def test_cta_keeps_aorta_and_drops_bone_and_blobs(cta):
    ph, res = cta
    assert res.components >= 1
    mesh = mask_mesh(res.mask, res.grid.geometry, 100_000)
    assert mesh is not None
    v = mesh.vertices
    (sx, sy), sr = SPINE
    assert np.hypot(v[:, 0] - sx, v[:, 1] - sy).min() > sr + 2  # no vertebra (cortex or cancellous) surface
    # kidney-like blob (centre 60, 35, -40) is left out
    assert np.linalg.norm(v - np.array([60.0, 35.0, -40.0]), axis=1).min() > 15
    assert 0.8 * ph.meta["aorta_mm3"] < res.volume_mm3 < 1.4 * ph.meta["aorta_mm3"]
