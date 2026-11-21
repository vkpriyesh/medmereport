"""Coordinate conventions, in one place.

* Engine space: DICOM **LPS** millimetres (+x = patient Left, +y = Posterior, +z = Superior).
* Viewer space (GLB / three.js): **X = Left, Y = Superior, Z = Anterior**, i.e. (x, y, z)_LPS -> (x, z, -y).
  The matrix has determinant +1, so meshes are never mirrored.
* Volumes are numpy ``[z, y, x]``; index <-> LPS via :class:`~medmereport.dicom.series.Geometry`.

SimpleITK resampling direction (the prototype's bug): ``sitk.Resample(moving, reference, T)`` needs ``T``
mapping **reference (output) points -> moving (input) points**. Always build transforms through
:func:`fixed_to_moving` naming and resample with :func:`resample_into`, never raw ``sitk.Resample``.
"""

from __future__ import annotations

import numpy as np
import SimpleITK as sitk

from medmereport.dicom.series import Geometry

LPS_TO_VIEWER = np.array([[1.0, 0.0, 0.0], [0.0, 0.0, 1.0], [0.0, -1.0, 0.0]])
assert abs(np.linalg.det(LPS_TO_VIEWER) - 1.0) < 1e-9


def lps_to_viewer(points: np.ndarray) -> np.ndarray:
    """(N,3) LPS mm -> (N,3) viewer mm."""
    return np.asarray(points, float) @ LPS_TO_VIEWER.T


def viewer_to_lps(points: np.ndarray) -> np.ndarray:
    return np.asarray(points, float) @ LPS_TO_VIEWER


def index_to_lps(geom: Geometry, zyx: np.ndarray) -> np.ndarray:
    """(N,3) fractional voxel indices in numpy order [z,y,x] -> (N,3) LPS mm."""
    zyx = np.asarray(zyx, float)
    xyz1 = np.c_[zyx[:, ::-1], np.ones(len(zyx))]
    out: np.ndarray = (geom.affine() @ xyz1.T).T[:, :3]
    return out


def lps_to_index(geom: Geometry, pts: np.ndarray) -> np.ndarray:
    """(N,3) LPS mm -> (N,3) fractional indices [z,y,x]."""
    inv = np.linalg.inv(geom.affine())
    xyz = (inv @ np.c_[np.asarray(pts, float), np.ones(len(pts))].T).T[:, :3]
    out: np.ndarray = xyz[:, ::-1]
    return out


def to_sitk(data: np.ndarray, geom: Geometry) -> sitk.Image:
    img = sitk.GetImageFromArray(np.ascontiguousarray(data))
    img.SetOrigin(tuple(float(v) for v in geom.origin))
    img.SetSpacing(tuple(float(v) for v in geom.spacing))
    img.SetDirection(tuple(float(v) for v in geom.direction))
    return img


def from_sitk(img: sitk.Image) -> tuple[np.ndarray, Geometry]:
    arr = sitk.GetArrayFromImage(img)
    d = img.GetDirection()
    geom = Geometry(
        origin=tuple(float(v) for v in img.GetOrigin()),  # type: ignore[arg-type]
        spacing=tuple(float(v) for v in img.GetSpacing()),  # type: ignore[arg-type]
        direction=tuple(float(v) for v in d),  # type: ignore[arg-type]
    )
    return arr, geom


def resample_into(
    moving: sitk.Image,
    reference: sitk.Image,
    reference_to_moving: sitk.Transform | None = None,
    *,
    labels: bool = False,
    default: float = 0.0,
) -> sitk.Image:
    """Resample ``moving`` onto ``reference``'s grid.

    ``reference_to_moving`` maps points of the *reference/output* grid into the *moving/input* image
    (this is exactly what a registration with fixed=reference, moving=moving returns).
    """
    interp = sitk.sitkNearestNeighbor if labels else sitk.sitkLinear
    t = reference_to_moving if reference_to_moving is not None else sitk.Transform()
    return sitk.Resample(moving, reference, t, interp, default, moving.GetPixelID())


def iso_grid(geom: Geometry, shape_zyx: tuple[int, int, int], spacing: float = 1.0) -> sitk.Image:
    """An axis-aligned (identity direction) grid covering the given volume's bounding box."""
    nz, ny, nx = shape_zyx
    corners = np.array([[z, y, x] for z in (0, nz - 1) for y in (0, ny - 1) for x in (0, nx - 1)], float)
    pts = index_to_lps(geom, corners)
    lo, hi = pts.min(0), pts.max(0)
    size = [int(np.ceil((hi[i] - lo[i]) / spacing)) + 1 for i in range(3)]
    ref = sitk.Image(size, sitk.sitkFloat32)
    ref.SetOrigin(tuple(float(v) for v in lo))
    ref.SetSpacing((spacing, spacing, spacing))
    return ref
