"""Synthetic DICOM generator for tests. Produces fake phantoms only: no real patient data, ever.

Phantom: a head-like ellipsoid with a brighter inner ellipsoid ("brain") and two dark "ventricles",
so geometry, orientation and segmentation code have something meaningful to work on.
"""

from __future__ import annotations

import datetime as _dt
from collections.abc import Sequence
from pathlib import Path

import numpy as np
from pydicom.dataset import Dataset, FileMetaDataset
from pydicom.uid import ExplicitVRLittleEndian, MRImageStorage, SecondaryCaptureImageStorage, generate_uid

CR_STORAGE = "1.2.840.10008.5.1.4.1.1.1"
DX_STORAGE = "1.2.840.10008.5.1.4.1.1.1.1"
CT_STORAGE = "1.2.840.10008.5.1.4.1.1.2"

FAKE_NAME = "PHANTOM^TEST"  # tests assert this never reaches logs/exports


def phantom_volume(nz: int = 24, ny: int = 64, nx: int = 64, seed: int = 0) -> np.ndarray:
    """Return a uint16 head-like phantom [z, y, x]."""
    rng = np.random.default_rng(seed)
    z, y, x = np.mgrid[0:nz, 0:ny, 0:nx].astype(np.float32)
    cz, cy, cx = (nz - 1) / 2, (ny - 1) / 2, (nx - 1) / 2
    r_head = ((z - cz) / (nz * 0.48)) ** 2 + ((y - cy) / (ny * 0.45)) ** 2 + ((x - cx) / (nx * 0.40)) ** 2
    r_brain = ((z - cz) / (nz * 0.40)) ** 2 + ((y - cy) / (ny * 0.38)) ** 2 + ((x - cx) / (nx * 0.33)) ** 2
    vol = np.zeros((nz, ny, nx), np.float32)
    vol[r_head <= 1] = 300  # scalp/skull-ish
    vol[r_brain <= 1] = 800  # brain
    for sx in (-1, 1):  # ventricles
        r_v = ((z - cz) / (nz * 0.15)) ** 2 + ((y - cy) / (ny * 0.12)) ** 2 + ((x - cx - sx * nx * 0.08) / (nx * 0.05)) ** 2
        vol[r_v <= 1] = 150
    vol += rng.normal(0, 8, vol.shape).astype(np.float32)
    return np.clip(vol, 0, 4095).astype(np.uint16)


def _base(modality: str, sop_class: str, study_uid: str, series_uid: str, patient_name: str) -> Dataset:
    ds = Dataset()
    ds.file_meta = FileMetaDataset()
    ds.file_meta.MediaStorageSOPClassUID = sop_class
    ds.file_meta.TransferSyntaxUID = ExplicitVRLittleEndian
    ds.SOPClassUID = sop_class
    ds.PatientName = patient_name
    ds.PatientID = "TEST000001"
    ds.PatientBirthDate = "19700101"
    ds.PatientSex = "O"
    ds.StudyInstanceUID = study_uid
    ds.SeriesInstanceUID = series_uid
    ds.StudyDate = _dt.date.today().strftime("%Y%m%d")
    ds.StudyDescription = "SYNTHETIC PHANTOM"
    ds.Modality = modality
    ds.InstitutionName = "Synthetic Test Centre"
    ds.Manufacturer = "medmereport-tests"
    return ds


def write_series(
    out: Path,
    *,
    volume: np.ndarray | None = None,
    plane: str = "axial",
    modality: str = "MR",
    description: str = "AX T1 SYNTH",
    series_number: int = 1,
    pixel_spacing: Sequence[float] = (1.0, 1.0),
    slice_spacing: float = 3.0,
    study_uid: str | None = None,
    patient_name: str = FAKE_NAME,
    extensionless: bool = False,
    echo_time: float = 10.0,
    repetition_time: float = 500.0,
    body_part: str = "HEAD",
    transfer_syntax: str = ExplicitVRLittleEndian,
    shuffle: bool = True,
) -> list[Path]:
    """Write a multi-slice series. ``plane`` sets ImageOrientationPatient. Returns file paths."""
    out.mkdir(parents=True, exist_ok=True)
    vol = phantom_volume() if volume is None else volume
    study_uid = study_uid or generate_uid()
    series_uid = generate_uid()
    iop = {
        "axial": [1, 0, 0, 0, 1, 0],
        "sagittal": [0, 1, 0, 0, 0, -1],
        "coronal": [1, 0, 0, 0, 0, -1],
    }[plane]
    row, col = np.array(iop[:3], float), np.array(iop[3:], float)
    normal = np.cross(row, col)
    nz, ny, nx = vol.shape
    origin = -0.5 * np.array([nx * pixel_spacing[1], ny * pixel_spacing[0], 0]) @ np.vstack([row, col, normal])
    sop_class = CT_STORAGE if modality == "CT" else MRImageStorage
    paths = []
    order = list(range(nz))
    if shuffle:
        np.random.default_rng(series_number).shuffle(order)  # file order must not matter
    for k in order:
        ds = _base(modality, sop_class, study_uid, series_uid, patient_name)
        ds.file_meta.TransferSyntaxUID = ExplicitVRLittleEndian
        ds.SOPInstanceUID = generate_uid()
        ds.file_meta.MediaStorageSOPInstanceUID = ds.SOPInstanceUID
        ds.SeriesNumber = series_number
        ds.InstanceNumber = k + 1
        ds.SeriesDescription = description
        ds.BodyPartExamined = body_part
        ds.ImageOrientationPatient = [float(v) for v in iop]
        pos = origin + normal * (k - nz / 2) * slice_spacing
        ds.ImagePositionPatient = [round(float(v), 4) for v in pos]
        ds.SliceLocation = round(float(np.dot(pos, normal)), 4)
        ds.SliceThickness = slice_spacing
        ds.PixelSpacing = [float(pixel_spacing[0]), float(pixel_spacing[1])]
        if modality == "MR":
            ds.EchoTime = echo_time
            ds.RepetitionTime = repetition_time
            ds.MagneticFieldStrength = 3
        else:
            ds.RescaleIntercept = -1024
            ds.RescaleSlope = 1
        ds.Rows, ds.Columns = ny, nx
        ds.SamplesPerPixel = 1
        ds.PhotometricInterpretation = "MONOCHROME2"
        ds.BitsAllocated = 16
        ds.BitsStored = 12
        ds.HighBit = 11
        ds.PixelRepresentation = 0
        ds.PixelData = np.ascontiguousarray(vol[k]).tobytes()
        if transfer_syntax != ExplicitVRLittleEndian:
            ds.compress(transfer_syntax)
        name = f"IM{series_number:02d}{k:04d}" + ("" if extensionless else ".dcm")
        p = out / name
        ds.save_as(p, enforce_file_format=True)
        paths.append(p)
    return paths


def write_xray(out: Path, *, modality: str = "CR", name: str = "XR0001", size: int = 256,
               study_uid: str | None = None, body_part: str = "CHEST", view: str = "PA") -> Path:
    """Single-frame projection radiograph with a fake rib-cage-like pattern."""
    out.mkdir(parents=True, exist_ok=True)
    y, x = np.mgrid[0:size, 0:size].astype(np.float32)
    img = 2000 - 1200 * np.exp(-(((x - size * 0.3) / (size * 0.12)) ** 2 + ((y - size * 0.5) / (size * 0.3)) ** 2))
    img -= 1200 * np.exp(-(((x - size * 0.7) / (size * 0.12)) ** 2 + ((y - size * 0.5) / (size * 0.3)) ** 2))
    img += 300 * (np.sin(y / size * 40) > 0.6)
    img = np.clip(img, 0, 4095).astype(np.uint16)
    ds = _base(modality, CR_STORAGE if modality == "CR" else DX_STORAGE, study_uid or generate_uid(), generate_uid(),
               FAKE_NAME)
    ds.SOPInstanceUID = generate_uid()
    ds.file_meta.MediaStorageSOPInstanceUID = ds.SOPInstanceUID
    ds.SeriesNumber = 1
    ds.InstanceNumber = 1
    ds.SeriesDescription = f"{body_part} {view}"
    ds.BodyPartExamined = body_part
    ds.ViewPosition = view
    ds.ImagerPixelSpacing = [0.15, 0.15]
    ds.PixelSpacing = [0.15, 0.15]
    ds.Rows = ds.Columns = size
    ds.SamplesPerPixel = 1
    ds.PhotometricInterpretation = "MONOCHROME1" if modality == "CR" else "MONOCHROME2"
    ds.BitsAllocated, ds.BitsStored, ds.HighBit, ds.PixelRepresentation = 16, 12, 11, 0
    ds.PixelData = img.tobytes()
    p = out / name
    ds.save_as(p, enforce_file_format=True)
    return p


def write_secondary_capture(out: Path, name: str = "SC0001") -> Path:
    """An RGB screen-capture style DICOM (burned-in text is typical for these)."""
    out.mkdir(parents=True, exist_ok=True)
    ds = _base("OT", SecondaryCaptureImageStorage, generate_uid(), generate_uid(), FAKE_NAME)
    ds.SOPInstanceUID = generate_uid()
    ds.file_meta.MediaStorageSOPInstanceUID = ds.SOPInstanceUID
    ds.SeriesNumber, ds.InstanceNumber = 99, 1
    ds.Rows = ds.Columns = 64
    ds.SamplesPerPixel = 3
    ds.PlanarConfiguration = 0
    ds.PhotometricInterpretation = "RGB"
    ds.BitsAllocated, ds.BitsStored, ds.HighBit, ds.PixelRepresentation = 8, 8, 7, 0
    ds.BurnedInAnnotation = "YES"
    ds.PixelData = np.full((64, 64, 3), 90, np.uint8).tobytes()
    p = out / name
    ds.save_as(p, enforce_file_format=True)
    return p


def write_study(out: Path, *, extensionless: bool = True) -> dict[str, list[Path]]:
    """A small multi-series MR head study (axial T1, axial FLAIR, sagittal T1) in one StudyInstanceUID."""
    study = generate_uid()
    return {
        "ax_t1": write_series(out, study_uid=study, series_number=1, description="AX T1 SYNTH",
                              extensionless=extensionless, echo_time=10, repetition_time=500),
        "ax_flair": write_series(out, study_uid=study, series_number=2, description="AX FLAIR SYNTH",
                                 extensionless=extensionless, echo_time=94, repetition_time=7000),
        "sag_t1": write_series(out, study_uid=study, series_number=3, plane="sagittal",
                               description="SAG T1 SYNTH", extensionless=extensionless),
    }
