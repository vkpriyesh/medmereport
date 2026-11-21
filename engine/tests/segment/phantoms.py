"""Fake patients built from the MNI template with a known pose (no real data)."""

from __future__ import annotations

import numpy as np
import SimpleITK as sitk

from medmereport.dicom.series import Geometry
from medmereport.geometry.space import from_sitk, resample_into
from medmereport.segment.base import Volume


def patient_to_mni(
    rot_deg=(8.0, -6.0, 5.0), shift_mm=(6.0, -9.0, 4.0), centre=(0.0, -18.0, 10.0)
) -> sitk.Euler3DTransform:
    """Known rigid pose: maps patient (scanner) points to MNI points."""
    t = sitk.Euler3DTransform()
    t.SetCenter(centre)
    t.SetRotation(*np.deg2rad(rot_deg))
    t.SetTranslation(shift_mm)
    return t


def thick_slice_patient(
    template: sitk.Image, labels: sitk.Image, pose: sitk.Transform, slice_mm: int = 3
) -> tuple[Volume, np.ndarray, Geometry]:
    """Pose the template, then simulate ``slice_mm`` axial slices (box slice profile).

    Returns ``(volume, ground_truth_labels, geometry)``; labels are nearest-neighbour on the slice centres.
    """
    hi = sitk.Image([200, 230, 192], sitk.sitkFloat32)
    hi.SetOrigin((-100.0, -135.0, -80.0))
    hi.SetSpacing((1.0, 1.0, 1.0))
    img = sitk.GetArrayFromImage(resample_into(template, hi, pose))
    nz = img.shape[0] // slice_mm
    thick = img[: nz * slice_mm].reshape(nz, slice_mm, *img.shape[1:]).mean(1).astype(np.float32)
    o = hi.GetOrigin()
    geom = Geometry(
        origin=(o[0], o[1], o[2] + (slice_mm - 1) / 2.0),
        spacing=(1.0, 1.0, float(slice_mm)),
        direction=(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0),
    )
    lo = sitk.Image([200, 230, nz], sitk.sitkInt16)
    lo.SetOrigin(geom.origin)
    lo.SetSpacing(geom.spacing)
    gt = sitk.GetArrayFromImage(resample_into(labels, lo, pose, labels=True))
    _, g2 = from_sitk(lo)
    assert g2 == geom
    return Volume(data=thick, geometry=geom, sequence="T1", series_id="phantom"), gt, geom
