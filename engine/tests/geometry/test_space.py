import numpy as np
import SimpleITK as sitk

from medmereport.dicom.series import Geometry
from medmereport.geometry.space import (
    from_sitk,
    index_to_lps,
    lps_to_index,
    lps_to_viewer,
    resample_into,
    to_sitk,
    viewer_to_lps,
)


def test_viewer_mapping_is_rotation_and_axes():
    p = np.array([[10.0, 20.0, 30.0]])  # 10 mm left, 20 mm posterior, 30 mm superior
    v = lps_to_viewer(p)[0]
    assert v.tolist() == [10.0, 30.0, -20.0]  # X=left, Y=up, Z=anterior
    assert np.allclose(viewer_to_lps(lps_to_viewer(p)), p)


def test_index_lps_roundtrip_oblique():
    th = 0.3
    d = (np.cos(th), 0, np.sin(th), 0, 1, 0, -np.sin(th), 0, np.cos(th))
    g = Geometry(origin=(5.0, -3.0, 7.0), spacing=(0.5, 0.7, 3.0), direction=tuple(float(x) for x in d))
    idx = np.array([[0, 0, 0], [2.5, 10, 4], [7, 1, 9]], float)
    assert np.allclose(lps_to_index(g, index_to_lps(g, idx)), idx)
    arr = np.zeros((8, 12, 10), np.float32)
    a2, g2 = from_sitk(to_sitk(arr, g))
    assert np.allclose(g2.affine(), g.affine())


def test_resample_direction_with_shifted_phantom():
    """Regression for the prototype bug: a moving image shifted by +10 mm in x must come back aligned
    when resampled with the reference->moving transform (translation +10), not the inverse."""
    arr = np.zeros((20, 40, 40), np.float32)
    arr[8:12, 15:25, 10:14] = 1  # a block
    g = Geometry(origin=(0, 0, 0), spacing=(1, 1, 1), direction=(1, 0, 0, 0, 1, 0, 0, 0, 1))
    ref = to_sitk(arr, g)
    shifted = np.roll(arr, 10, axis=2)  # moving image: block moved +10 voxels (+10 mm) along x
    mov = to_sitk(shifted, g)
    ref_to_mov = sitk.TranslationTransform(3, (10.0, 0.0, 0.0))
    back = sitk.GetArrayFromImage(resample_into(mov, ref, ref_to_mov, labels=True))
    assert (back == arr).all()
    wrong = sitk.GetArrayFromImage(resample_into(mov, ref, ref_to_mov.GetInverse(), labels=True))
    assert (wrong != arr).any()
