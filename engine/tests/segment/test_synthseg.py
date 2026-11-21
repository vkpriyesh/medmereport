"""SynthSeg ONNX backend: pre/post-processing and label mapping (no model needed) + a model-gated run."""

from __future__ import annotations

import os
import sys
from pathlib import Path

import numpy as np
import pytest
import SimpleITK as sitk

from medmereport.dicom.series import Geometry
from medmereport.geometry.space import from_sitk, index_to_lps
from medmereport.knowledge import structures
from medmereport.segment.base import Volume
from medmereport.segment.synthseg import SynthSegOnnxBackend
from medmereport.segment.synthseg import backend as B
from medmereport.segment.synthseg import labels as L
from medmereport.segment.synthseg import processing as P

IDENTITY = (1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0)


def _noop(stage: str, pct: float, msg: str = "") -> None:
    pass


# ------------------------------------------------------------------------------------------------ labels
def test_label_tables_match_synthseg_2():
    assert len(L.SEG_LABELS) == 33 and L.SEG_LABELS[0] == 0
    assert list(L.SEG_LABELS) == sorted(L.SEG_LABELS)
    assert len(L.TOPOLOGY_CLASSES) == 33
    assert len(L.PARC_LABELS) == 69 and 1004 not in L.PARC_LABELS and 2004 not in L.PARC_LABELS
    # every structure is its own topological class; WM/cortex/ventricles of a hemisphere share one
    topo = dict(zip(L.SEG_LABELS.tolist(), L.TOPOLOGY_CLASSES.tolist(), strict=True))
    assert topo[0] == 0 and topo[24] == 0
    assert topo[2] == topo[3] == topo[4] == topo[5] != topo[41]
    assert topo[17] != topo[18]


def test_flip_indices_swap_hemispheres():
    f = L.flip_indices()
    lab = L.SEG_LABELS
    assert np.array_equal(f[f], np.arange(len(lab)))  # an involution
    pos = {int(v): i for i, v in enumerate(lab)}
    for a, b in [(17, 53), (3, 42), (2, 41), (4, 43), (5, 44), (28, 60), (26, 58), (8, 47)]:
        assert f[pos[a]] == pos[b] and f[pos[b]] == pos[a]
    for v in (0, 14, 15, 16, 24):
        assert f[pos[v]] == pos[v]


def test_every_label_maps_to_vocabulary():
    for v in L.SEG_LABELS.tolist() + L.PARC_LABELS.tolist():
        m = L.native_to_vocab(v)
        if v in (0, L.CSF) or (v in L.CORTEX and L.CORTEX_VOCAB not in structures.ALL):
            assert m is None
            continue
        assert m is not None, v
        s, hemi = m
        assert s in structures.BRAIN
        if v in (14, 15, 16):
            assert hemi == "M"
        else:
            assert hemi == ("L" if (v < 40 or 1000 <= v < 2000) else "R")
    assert set(L.DK_TO_VOCAB) == {n.split("-", 2)[2] for n in L.DK_NAMES.values()}
    assert L.native_to_vocab(17) == ("hippocampus", "L") and L.native_to_vocab(53) == ("hippocampus", "R")
    assert L.native_to_vocab(1017) == ("precentral", "L")  # paracentral
    assert L.native_to_vocab(2024) == ("precentral", "R")


def test_build_lut_merges_shared_structures():
    native = np.array([0, 4, 5, 43, 44, 1003, 1027, 17, 24, 3], np.int16)
    lut, regions = L.build_lut(native)
    out = lut[native]
    assert out[1] == out[2] == 4  # lateral ventricle + temporal horn -> one region
    assert out[3] == out[4] == 43
    assert out[5] == out[6] == 1003  # caudal + rostral middle frontal -> mfg
    assert out[8] == 0  # CSF unlabelled
    assert {(r.structure, r.hemi) for r in regions.values()} >= {("lateral_ventricle", "L"), ("mfg", "L")}
    assert all(c == r.code for c, r in regions.items())
    assert len({(r.structure, r.hemi) for r in regions.values()}) == len(regions)


# ------------------------------------------------------------------------------------------------ grids
def test_layout_round_trip_and_orientation():
    a = np.random.default_rng(0).random((4, 5, 6)).astype(np.float32)
    assert np.array_equal(P.ras_xyz_to_lps_zyx(P.lps_zyx_to_ras_xyz(a)), a)
    # identity-direction LPS grid: x index -> Left, y -> Posterior, z -> Superior
    m = np.zeros((4, 5, 6), np.float32)
    m[3, 0, 0] = 1  # most superior, most anterior, most right voxel
    r = P.lps_zyx_to_ras_xyz(m)
    assert r.shape == (6, 5, 4)
    assert np.unravel_index(r.argmax(), r.shape) == (5, 4, 3)  # max R, max A, max S


def _oblique_geometry(spacing=(1.0, 1.0, 1.0), shape=(40, 50, 45)) -> Geometry:
    t = sitk.Euler3DTransform()
    t.SetRotation(*np.deg2rad([10.0, -5.0, 15.0]))
    d = np.array(t.GetMatrix()).reshape(3, 3)
    return Geometry(origin=(-20.0, -30.0, -10.0), spacing=spacing, direction=tuple(d.ravel()))  # type: ignore[arg-type]


def test_network_grid_preserves_patient_space():
    """A bright blob put at a known LPS point lands back on the same patient voxel after the round trip."""
    shape = (40, 50, 45)
    geom = _oblique_geometry(shape=shape)
    data = np.zeros(shape, np.float32)
    data[20, 25, 22] = 1000.0
    data[18:23, 23:28, 20:25] += 100.0
    img, grid = P.to_network_grid(data, geom)
    assert img.ndim == 3
    assert grid.GetSpacing() == (1.0, 1.0, 1.0)
    # the brightest network voxel is (within a voxel) at the blob's LPS position
    peak = np.array(np.unravel_index(np.argmax(img), img.shape))
    zyx = np.array(P.ras_xyz_to_lps_zyx(img).shape)  # noqa: F841 - shape sanity only
    lps_net = np.array(grid.TransformIndexToPhysicalPoint([int(v) for v in _ras_to_lps_index(peak, img.shape)]))
    lps_ref = index_to_lps(geom, np.array([[20, 25, 22]], float))[0]
    assert np.linalg.norm(lps_net - lps_ref) <= 1.5
    # labels made from the network image come back onto the original grid at the blob
    lab = (img > img.max() * 0.5).astype(np.int32) * 17
    back = P.from_network_grid(lab, grid, geom, shape)
    assert back.shape == shape and back[20, 25, 22] == 17
    assert back.sum() / 17 < 30


def _ras_to_lps_index(ras_idx: np.ndarray, ras_shape: tuple[int, ...]) -> tuple[int, int, int]:
    """RAS-layout index [i, j, k] -> sitk (x, y, z) index on the identity LPS grid."""
    i, j, k = (int(v) for v in ras_idx)
    return ras_shape[0] - 1 - i, ras_shape[1] - 1 - j, k


def test_antialiasing_only_when_downsampling():
    rng = np.random.default_rng(1)
    noise = rng.normal(size=(20, 64, 64)).astype(np.float32)
    fine = Geometry(origin=(0.0, 0.0, 0.0), spacing=(0.5, 0.5, 1.0), direction=IDENTITY)
    img, _ = P.to_network_grid(noise, fine)
    assert img.shape == (33, 33, 20)  # 0.5 mm centres spanning 31.5 mm -> 33 1-mm samples
    assert img.std() < 0.8 * noise.std()  # low-passed before decimation (plain sampling keeps std ~1)
    thick = Geometry(origin=(0.0, 0.0, 0.0), spacing=(1.0, 1.0, 5.0), direction=IDENTITY)
    img, _ = P.to_network_grid(noise[:8], thick)
    assert img.shape == (64, 64, 36)


def test_rescale():
    x = np.concatenate([np.zeros(1000), np.linspace(0, 100, 1000), [1e6]]).astype(np.float32)
    y = P.rescale(x)
    assert y.min() == 0 and y.max() == 1 and y.dtype == np.float32
    assert y[-1] == 1  # outlier clipped at the 99.5th percentile
    assert not P.rescale(np.full(10, 3.0)).any()
    ct = P.rescale(np.array([-1000.0, 0, 40, 80, 3000]), lo_pct=0, hi_pct=100, ct=True)
    assert np.allclose(ct, [0, 0, 0.5, 1, 1])


def test_pad_and_bbox():
    assert P.pad_shape((100, 150, 129)) == (128, 160, 160)
    im = np.zeros((50, 60, 70), np.float32)
    im[10:20, 5:55, 30:31] = 1
    box = P.head_bbox(im, margin=2)
    assert box == (slice(8, 22), slice(3, 57), slice(28, 33))
    padded, inner = P.pad_centered(im[..., None], (64, 64, 96))
    assert padded.shape == (64, 64, 96, 1)
    assert np.array_equal(padded[inner], im[..., None])
    assert inner[0].start == 7  # floor margin first, like SynthSeg


# ------------------------------------------------------------------------------------------------ tiling
@pytest.mark.parametrize(
    "shape,max_vox", [((224, 256, 192), 2_000_000), ((128, 128, 128), 10**9), ((160, 96, 288), 900_000)]
)
def test_tiles_cover_volume_once(shape, max_vox):
    tile = P.plan_tile_shape(shape, max_vox)
    assert all(t % 32 == 0 and t <= s for t, s in zip(tile, shape, strict=True))
    assert np.prod(tile) <= max_vox or min(tile) <= 96
    tiles = P.plan_tiles(shape, tile, overlap=64)
    cover = np.zeros(shape, np.int8)
    wsum = np.zeros(shape, np.float32)
    for t in tiles:
        assert all(s.start % 32 == 0 for s in t.src)
        cover[t.core] += 1
        wsum[t.src] += P.tile_weights(t, tiles)
    assert (cover == 1).all()
    assert wsum.min() > 0.99 and wsum.max() < 1.01  # cross-fades sum to one


def _local_net(x: np.ndarray) -> np.ndarray:
    """A translation-equivariant toy 'network' with a 3-voxel receptive field and 2 output channels."""
    from scipy import ndimage

    s = ndimage.uniform_filter(x[..., 0], 3, mode="constant")
    return np.stack([s, 1 - s], -1).astype(np.float32)


def test_tiled_inference_matches_whole_volume():
    rng = np.random.default_rng(2)
    x = rng.random((128, 96, 160, 1)).astype(np.float32)
    ref = _local_net(x)
    tiles = P.plan_tiles(x.shape[:3], (64, 64, 96), overlap=64)
    assert len(tiles) > 1
    hard = P.run_tiled(_local_net, x, tiles, lambda p: p, np.zeros_like(ref))
    soft = P.run_blended(_local_net, x, tiles, np.zeros_like(ref))
    assert np.abs(hard - ref).max() < 1e-5
    assert np.abs(soft - ref).max() < 1e-5


def test_flip_tta_swaps_channels():
    calls = []

    def net(x):
        calls.append(x.copy())
        # channel 0 = "left" evidence on low R index half, channel 1 = "right"
        return np.stack([x[..., 0], 2 * x[..., 0]], -1)

    x = np.zeros((4, 2, 2, 1), np.float32)
    x[0] = 1
    out = P.flip_tta(net, np.array([1, 0]))(x)
    assert np.array_equal(calls[1][..., 0], x[::-1, ..., 0])
    # unflipped: [1, 2] at x=0 ; flipped pass gives [1, 2] at x=0 after unflip, channels swapped -> [2, 1]
    assert np.allclose(out[0, 0, 0], [1.5, 1.5]) and not out[1:].any()


# ------------------------------------------------------------------------------------------------ postprocessing
def _posteriors(seg: np.ndarray, n: int) -> np.ndarray:
    p = np.zeros((*seg.shape, n), np.float16)
    for c in range(n):
        p[..., c] = seg == c
    return p


def test_postprocess_removes_islands():
    labels = L.SEG_LABELS
    hip = int(np.flatnonzero(labels == 17)[0])
    amy = int(np.flatnonzero(labels == 18)[0])
    seg = np.zeros((40, 40, 40), np.int64)
    seg[5:30, 5:30, 5:30] = hip
    seg[10:15, 10:15, 10:15] = amy  # inside the brain: kept
    seg[35:38, 35:38, 35:38] = hip  # detached fragment of the foreground: removed
    out = P.postprocess(_posteriors(seg, len(labels)), L.TOPOLOGY_CLASSES, labels)
    assert (out[35:38, 35:38, 35:38] == 0).all()
    assert (out[10:15, 10:15, 10:15] == 18).all() and out[20, 20, 20] == 17
    # topology: an amygdala island inside the brain but detached from the main amygdala is dropped
    seg2 = seg.copy()
    seg2[25:27, 25:27, 25:27] = amy
    out2 = P.postprocess(_posteriors(seg2, len(labels)), L.TOPOLOGY_CLASSES, labels)
    assert (out2[25:27, 25:27, 25:27] == 17).sum() == 0  # background wins where both were zeroed...
    assert (out2[25:27, 25:27, 25:27] != 18).all()


def test_postprocess_fast_threshold():
    labels = L.SEG_LABELS
    post = np.zeros((10, 10, 10, len(labels)), np.float16)
    post[..., 0] = 0.15
    post[2:8, 2:8, 2:8, 3] = 0.85
    post[0, 0, 0, 5] = 0.18  # weak, also disconnected
    out = P.postprocess(post, None, labels)
    assert out[5, 5, 5] == labels[3] and out[0, 0, 0] == 0


def test_merge_parcellation():
    seg = np.array([0, 3, 42, 17, 3])
    idx = np.array([5, 0, 40, 7, 2])
    out = P.merge_parcellation(seg, idx, L.PARC_LABELS, L.CORTEX)
    assert out.tolist() == [0, 1001, L.PARC_LABELS[41], 17, 1003]


# ------------------------------------------------------------------------------------------------ backend
def test_unavailable_without_model(tmp_path):
    b = SynthSegOnnxBackend(directory=tmp_path)
    assert not b.available()
    assert b.name == "synthseg-onnx" and "Apache-2.0" in b.licence
    with pytest.raises(RuntimeError):
        b.segment(Volume(np.zeros((4, 4, 4), np.float32), _oblique_geometry(), "T1", "s"), [], _noop)
    (tmp_path / B.SEG_FILE).write_bytes(b"")
    assert b.available() == (__import__("importlib").util.find_spec("onnxruntime") is not None)


def test_default_model_dir_is_under_models_dir():
    from medmereport.core.paths import models_dir

    assert B.model_dir() == models_dir() / "synthseg"


class _FakeInput:
    def __init__(self, c: int) -> None:
        self.name = "image"
        self.shape = [1, None, None, None, c]


class _FakeSession:
    """Stands in for onnxruntime: 'segments' bright voxels as left WM (x half) / right WM, mid as cortex."""

    def __init__(self, filename: str) -> None:
        self.filename = filename
        self.n = len(L.PARC_LABELS) if filename == B.PARC_FILE else len(L.SEG_LABELS)

    def get_inputs(self):
        return [_FakeInput(3 if self.filename == B.PARC_FILE else 1)]

    def run(self, _outs, feeds):
        x = feeds["image"][0, ..., 0]
        out = np.zeros((*x.shape, self.n), np.float32)
        if self.filename == B.PARC_FILE:
            out[..., 1] = 1.0  # everything -> first DK region (bankssts)
            return [out[None]]
        pos = {int(v): i for i, v in enumerate(L.SEG_LABELS)}
        out[..., 0] = x <= 0.2
        out[..., pos[2]] = x > 0.6
        out[..., pos[3]] = (x > 0.2) & (x <= 0.6)
        return [out[None]]


def test_segment_end_to_end_with_fake_runtime(tmp_path, monkeypatch):
    for f in (B.SEG_FILE, B.PARC_FILE):
        (tmp_path / f).write_bytes(b"fake")
    monkeypatch.setattr(B.importlib.util, "find_spec", lambda name: object())
    monkeypatch.setattr(SynthSegOnnxBackend, "_session", lambda self, f: _FakeSession(f))
    shape = (30, 60, 50)  # 5 mm slices: exercises upsampling + thick-slice caveat
    geom = Geometry(origin=(-60.0, -70.0, -60.0), spacing=(2.4, 2.4, 5.0), direction=IDENTITY)
    zz, yy, xx = np.mgrid[: shape[0], : shape[1], : shape[2]]
    r = np.sqrt(((zz - 15) * 5) ** 2 + ((yy - 30) * 2.4) ** 2 + ((xx - 25) * 2.4) ** 2)
    data = np.where(r < 40, 100.0, np.where(r < 55, 50.0, 0.0)).astype(np.float32)
    seen = []
    b = SynthSegOnnxBackend(directory=tmp_path, max_memory_gib=1.0)
    lm = b.segment(Volume(data, geom, "T2", "s1"), [], lambda s, p, m="": seen.append(p))
    assert lm.labels.shape == shape and lm.labels.dtype == np.int16
    assert lm.geometry == geom
    assert seen == sorted(seen) and seen[-1] == 100
    assert lm.backend == "synthseg-onnx@2.0+parc"
    by = {(r.structure, r.hemi) for r in lm.regions.values()}
    assert ("cerebral_white_matter", "L") in by and ("stg", "L") in by  # cortex -> DK region 1 (bankssts)
    for r in lm.regions.values():
        assert r.structure in structures.ALL and (lm.labels == r.code).any()
    assert lm.brain_mask is not None and lm.brain_mask[15, 30, 25] and not lm.brain_mask[0, 0, 0]
    assert any("thick-slice" in c for c in lm.caveats) and any("Desikan" in c for c in lm.caveats)
    # without the parcellation model the backend still works
    (tmp_path / B.PARC_FILE).unlink()
    lm2 = SynthSegOnnxBackend(directory=tmp_path).segment(Volume(data, geom, "T2", "s1"), [], _noop)
    assert lm2.backend == "synthseg-onnx@2.0"


# ------------------------------------------------------------------------------------------------ real model
def _real_models_dir() -> Path:
    explicit = os.environ.get("MEDMEREPORT_TEST_MODELS")
    if explicit:
        return Path(explicit)
    if sys.platform == "win32":
        base = Path(os.environ.get("LOCALAPPDATA", Path.home() / "AppData" / "Local"))
    elif sys.platform == "darwin":
        base = Path.home() / "Library" / "Application Support"
    else:
        base = Path(os.environ.get("XDG_DATA_HOME", Path.home() / ".local" / "share"))
    return base / "medmereport" / "models"


T1_NAME = "tpl-MNI152NLin2009cAsym_res-01_T1w.nii.gz"  # registry asset "mni152-2009c-t1" (public template)


@pytest.fixture(scope="module")
def mni_t1() -> Volume:
    d = _real_models_dir()
    if not (d / "synthseg" / B.SEG_FILE).is_file() or not (d / T1_NAME).is_file():
        pytest.skip("SynthSeg ONNX model and/or the public MNI T1 template are not installed")
    img = sitk.ReadImage(str(d / T1_NAME), sitk.sitkFloat32)
    data, geom = from_sitk(img)
    return Volume(data.astype(np.float32), geom, "T1", "mni")


def _cm3(lm, structure: str, hemi: str) -> float:
    code = lm.code_of(structure, hemi)
    assert code is not None, (structure, hemi)
    return float((lm.labels == code).sum() * np.prod(lm.geometry.spacing) / 1000)


def _check_plausible(lm) -> None:
    brain = float(lm.brain_mask.sum() * np.prod(lm.geometry.spacing) / 1000)
    assert 1000 <= brain <= 1700, brain
    hl, hr = _cm3(lm, "hippocampus", "L"), _cm3(lm, "hippocampus", "R")
    assert 2 <= hl <= 6 and 2 <= hr <= 6, (hl, hr)
    assert 0.8 <= hl / hr <= 1.25
    for s in ("thalamus", "caudate", "putamen", "lateral_ventricle", "cerebral_white_matter"):
        assert _cm3(lm, s, "L") > 0 and _cm3(lm, s, "R") > 0
    # left structures really are on the patient's left (+x in LPS)
    zyx = np.argwhere(lm.labels == lm.code_of("hippocampus", "L")).mean(0)
    zyx_r = np.argwhere(lm.labels == lm.code_of("hippocampus", "R")).mean(0)
    xl = index_to_lps(lm.geometry, zyx[None])[0, 0]
    xr = index_to_lps(lm.geometry, zyx_r[None])[0, 0]
    assert xl > xr


@pytest.mark.needs_models("synthseg")
@pytest.mark.timeout(1200)
def test_mni_t1_plausible_volumes(mni_t1):
    d = _real_models_dir() / "synthseg"
    lm = SynthSegOnnxBackend(directory=d).segment(mni_t1, [], _noop)
    assert lm.labels.shape == mni_t1.data.shape and lm.geometry == mni_t1.geometry
    _check_plausible(lm)
    if (d / B.PARC_FILE).is_file():
        assert lm.code_of("precentral", "L") is not None and lm.code_of("insula", "R") is not None


@pytest.mark.needs_models("synthseg")
@pytest.mark.timeout(1200)
def test_thick_slice_simulation(mni_t1):
    """5 mm axial slices (box profile) of the same template still give plausible volumes."""
    k = 5
    nz = mni_t1.data.shape[0] // k
    thick = mni_t1.data[: nz * k].reshape(nz, k, *mni_t1.data.shape[1:]).mean(1)
    g = mni_t1.geometry
    d = np.array(g.direction).reshape(3, 3)
    origin = np.array(g.origin) + d[:, 2] * g.spacing[2] * (k - 1) / 2
    geom = Geometry(origin=tuple(origin), spacing=(g.spacing[0], g.spacing[1], g.spacing[2] * k), direction=g.direction)  # type: ignore[arg-type]
    lm = SynthSegOnnxBackend(directory=_real_models_dir() / "synthseg", parcellation=False).segment(
        Volume(thick.astype(np.float32), geom, "T1", "thick"), [], _noop
    )
    assert lm.labels.shape == thick.shape
    assert any("thick-slice" in c for c in lm.caveats)
    _check_plausible(lm)
