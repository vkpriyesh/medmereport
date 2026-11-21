import shutil

import numpy as np
import pytest
from pydicom import dcmread
from pydicom.dataset import Dataset
from pydicom.sequence import Sequence
from pydicom.uid import generate_uid

from medmereport.dicom.volume import load_frames, load_volume
from tests.dicom.helpers import groups, instances
from tests.fixtures.synth import phantom_volume, write_secondary_capture, write_series, write_study, write_xray


def _retag(paths, **attrs):
    for p in paths:
        ds = dcmread(p)
        for k, v in attrs.items():
            setattr(ds, k, v)
        ds.save_as(p, enforce_file_format=True)


def test_study_groups_sorted_and_loaded(tmp_path):
    study = write_study(tmp_path)  # extensionless, shuffled instance order
    gs = groups(sorted(tmp_path.iterdir()))
    assert [g.id for g in gs] == ["s001", "s002", "s003"]
    assert [g.header.series_description for g in gs] == ["AX T1 SYNTH", "AX FLAIR SYNTH", "SAG T1 SYNTH"]
    assert {len(v) for v in study.values()} == {24}
    phantom = phantom_volume()
    for g in gs:
        assert g.is_volume and not g.is_projection and not g.is_multiframe and g.n == 24
        assert g.uniform_spacing
        assert g.geometry is not None and g.geometry.spacing == (1.0, 1.0, 3.0)
        d = np.array(g.geometry.direction).reshape(3, 3)
        assert np.isclose(np.linalg.det(d), 1.0)
        normal = d[:, 2]
        coords = [float(np.dot(p, normal)) for p in g.positions]
        assert coords == sorted(coords) and np.allclose(np.diff(coords), 3.0)
        vol, geo = load_volume(g)
        assert vol.dtype == np.float32 and vol.shape == (24, 64, 64)
        np.testing.assert_array_equal(vol, phantom.astype(np.float32))  # slice order == phantom z order
        np.testing.assert_allclose(geo.affine()[:3, 3], g.positions[0])
    sag = gs[2].geometry
    assert sag is not None
    np.testing.assert_allclose(np.array(sag.direction).reshape(3, 3)[:, 2], [-1, 0, 0])


def test_split_by_orientation_and_echo(tmp_path):
    vol = phantom_volume(nz=4, ny=16, nx=16)
    ax = write_series(tmp_path / "a", volume=vol, series_number=5)
    cor = write_series(tmp_path / "c", volume=vol, series_number=5, plane="coronal")
    echo2 = write_series(tmp_path / "e", volume=vol, series_number=5, echo_time=80)
    uid = dcmread(ax[0]).SeriesInstanceUID
    _retag(cor + echo2, SeriesInstanceUID=uid)
    gs = groups(ax + cor + echo2)
    assert len(gs) == 3 and {g.series_uid for g in gs} == {uid}
    assert sorted(g.header.echo_time for g in gs) == [10.0, 10.0, 80.0]
    assert {g.header.orientation for g in gs} == {(1, 0, 0, 0, 1, 0), (1, 0, 0, 0, 0, -1)}
    assert all(g.is_volume and g.n == 4 for g in gs)


def test_split_by_b_value(tmp_path):
    vol = phantom_volume(nz=3, ny=16, nx=16)
    b0 = write_series(tmp_path / "b0", volume=vol, series_number=7, description="ep2d_diff")
    b1000 = write_series(tmp_path / "b1", volume=vol, series_number=7, description="ep2d_diff")
    uid = dcmread(b0[0]).SeriesInstanceUID
    _retag(b0, DiffusionBValue=0)
    _retag(b1000, SeriesInstanceUID=uid, DiffusionBValue=1000)
    gs = groups(b0 + b1000)
    assert sorted(g.header.b_value for g in gs) == [0, 1000]


def test_rotating_mip_kept_as_projection(tmp_path):
    vol = phantom_volume(nz=8, ny=16, nx=16)
    paths = sorted(write_series(tmp_path, volume=vol, description="TOF MIP RAD", shuffle=False))
    uid = dcmread(paths[0]).SeriesInstanceUID
    for k, p in enumerate(paths):
        a = np.deg2rad(k * 22.5)
        ds = dcmread(p)
        ds.ImageOrientationPatient = [float(np.cos(a)), float(np.sin(a)), 0.0, 0.0, 0.0, -1.0]
        ds.SeriesInstanceUID = uid
        ds.save_as(p, enforce_file_format=True)
    (g,) = groups(paths)
    assert g.is_projection and not g.is_volume and g.n == 8
    assert [dcmread(p).InstanceNumber for p in g.files] == list(range(1, 9))  # acquisition order
    frames = load_frames(g)
    assert len(frames) == 8 and frames[0].shape == (16, 16)


def test_image_type_projection_flag(tmp_path):
    paths = write_series(tmp_path, volume=phantom_volume(nz=3, ny=8, nx=8))
    _retag(paths, ImageType=["DERIVED", "PRIMARY", "PROJECTION IMAGE"])
    (g,) = groups(paths)
    assert g.is_projection and not g.is_volume


def test_duplicates_are_dropped(tmp_path):
    from medmereport.dicom.series import dedupe

    paths = write_series(tmp_path / "a", volume=phantom_volume(nz=3, ny=8, nx=8))
    copy = tmp_path / "b" / "COPY"
    copy.parent.mkdir()
    shutil.copy(paths[0], copy)
    unique, dropped = dedupe(instances([*paths, copy]))
    assert dropped == 1 and len(unique) == 3


def test_xray_and_photo_flags(tmp_path):
    xr = write_xray(tmp_path / "x", modality="DX")
    sc = write_secondary_capture(tmp_path / "s")
    gx, gs = groups([xr, sc])
    assert gx.is_projection and not gx.is_volume and gx.n == 1 and gx.geometry is None
    assert gs.is_photo and not gs.is_volume
    (frame,) = load_frames(gx)
    assert frame.shape == (256, 256)
    with pytest.raises(ValueError):
        load_volume(gx)


def test_corrupt_slice_is_filled_not_fatal(tmp_path):
    paths = write_series(tmp_path, volume=phantom_volume(nz=4, ny=16, nx=16))
    (g,) = groups(paths)
    victim = g.files[1]
    victim.write_bytes(victim.read_bytes()[:-100])
    vol, _ = load_volume(g)
    assert vol.shape == (4, 16, 16)
    assert np.all(vol[1] == vol[[0, 2, 3]].min())


def test_enhanced_multiframe_volume_sorted_by_frame_position(tmp_path):
    vol = phantom_volume(nz=5, ny=16, nx=16)
    src = write_series(tmp_path / "src", volume=vol[:1])[0]
    ds = dcmread(src)
    del ds.ImagePositionPatient, ds.ImageOrientationPatient
    ds.SOPInstanceUID = ds.file_meta.MediaStorageSOPInstanceUID = generate_uid()
    order = [4, 2, 0, 3, 1]  # frames stored out of spatial order
    ds.NumberOfFrames = len(order)
    ds.PixelData = np.ascontiguousarray(vol[order]).tobytes()
    shared = Dataset()
    po = Dataset()
    po.ImageOrientationPatient = [1.0, 0.0, 0.0, 0.0, 1.0, 0.0]
    shared.PlaneOrientationSequence = Sequence([po])
    ds.SharedFunctionalGroupsSequence = Sequence([shared])
    per = []
    for k in order:
        item, pp = Dataset(), Dataset()
        pp.ImagePositionPatient = [0.0, 0.0, 2.0 * k]
        item.PlanePositionSequence = Sequence([pp])
        per.append(item)
    ds.PerFrameFunctionalGroupsSequence = Sequence(per)
    out = tmp_path / "MF0001"
    ds.save_as(out, enforce_file_format=True)
    (g,) = groups([out])
    assert g.is_multiframe and g.is_volume and g.n == 5
    assert g.geometry is not None and g.geometry.spacing[2] == pytest.approx(2.0)
    loaded, _ = load_volume(g)
    np.testing.assert_array_equal(loaded, vol.astype(np.float32))
