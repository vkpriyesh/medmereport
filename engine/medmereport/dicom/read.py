"""Header reading and pixel decoding.

Decoding goes through pydicom's pixel backends; with python-gdcm, pylibjpeg-openjpeg and
pylibjpeg-rle installed that covers JPEG baseline/extended/lossless, JPEG-LS (gdcm), JPEG 2000 and
RLE. Every decoded frame is returned as float32 in *modality* units (RescaleSlope/Intercept applied)
with MONOCHROME1 inverted so that "higher = brighter" holds for every greyscale image.
"""

from __future__ import annotations

import warnings
from collections.abc import Iterator
from contextlib import contextmanager
from pathlib import Path
from typing import Any, Literal

import numpy as np
from pydicom import dcmread
from pydicom.dataset import Dataset
from pydicom.multival import MultiValue

from medmereport.core.logging import register_sensitive

ObjectKind = Literal["image", "document", "other"]

ENCAPSULATED_PDF_STORAGE = "1.2.840.10008.5.1.4.1.1.104.1"
# SOP class prefixes that never carry viewable pixels (SR, KO, presentation states, encapsulated docs,
# waveforms, raw data, spectroscopy, RT plan/dose-volume objects).
_NON_IMAGE_PREFIXES = (
    "1.2.840.10008.5.1.4.1.1.88.",
    "1.2.840.10008.5.1.4.1.1.11.",
    "1.2.840.10008.5.1.4.1.1.104.",
    "1.2.840.10008.5.1.4.1.1.9.",
    "1.2.840.10008.5.1.4.1.1.66",
    "1.2.840.10008.5.1.4.1.1.4.2",
    "1.2.840.10008.5.1.4.1.1.481.5",
)
_COLOR = ("RGB", "YBR_FULL", "YBR_FULL_422", "YBR_PARTIAL_422", "YBR_PARTIAL_420", "YBR_ICT", "YBR_RCT")


class DicomReadError(Exception):
    """A file could not be read or decoded. Messages never contain paths or identifiers."""


@contextmanager
def quiet() -> Iterator[None]:
    """Silence pydicom's warnings while reading: they embed file paths, which must not reach logs."""
    with warnings.catch_warnings():
        warnings.simplefilter("ignore")
        yield


def _register_identifiers(ds: Dataset) -> None:
    register_sensitive(ds.get("PatientName"), ds.get("PatientID"), ds.get("OtherPatientIDs"))


def read_header(path: Path) -> Dataset:
    """Read all elements before the pixel data. Registers patient identifiers for log redaction."""
    try:
        with quiet():
            ds = dcmread(path, force=True, stop_before_pixels=True)
    except Exception as exc:  # noqa: BLE001 - pydicom raises many types on corrupt input
        raise DicomReadError(f"unreadable DICOM header ({type(exc).__name__})") from None
    _register_identifiers(ds)
    return ds


def read_dataset(path: Path) -> Dataset:
    """Read a complete dataset including pixel data."""
    try:
        with quiet():
            ds = dcmread(path, force=True)
    except Exception as exc:  # noqa: BLE001
        raise DicomReadError(f"unreadable DICOM file ({type(exc).__name__})") from None
    _register_identifiers(ds)
    return ds


def object_kind(ds: Dataset) -> ObjectKind:
    """Classify a dataset as a viewable image, an encapsulated document (PDF) or something else."""
    sop = str(ds.get("SOPClassUID", ""))
    mime = str(ds.get("MIMETypeOfEncapsulatedDocument", "")).lower()
    if sop == ENCAPSULATED_PDF_STORAGE or mime == "application/pdf":
        return "document"
    if any(sop.startswith(p) for p in _NON_IMAGE_PREFIXES):
        return "other"
    if "Rows" in ds and "Columns" in ds:
        return "image"
    return "other"


def encapsulated_pdf(ds: Dataset) -> bytes | None:
    """Return the embedded PDF bytes of an Encapsulated PDF object, or None."""
    data = ds.get("EncapsulatedDocument")
    if not isinstance(data, bytes | bytearray) or not data:
        return None
    raw = bytes(data)
    # The value is padded to even length with a trailing NUL.
    return raw[:-1] if raw.endswith(b"\x00") and not raw.endswith(b"%%EOF") else raw


def is_color(ds: Dataset) -> bool:
    """True for multi-sample (RGB/YBR) images."""
    return int(ds.get("SamplesPerPixel", 1) or 1) > 1 or str(ds.get("PhotometricInterpretation", "")) in _COLOR


def _first_item(ds: Dataset, keyword: str) -> Dataset | None:
    seq = ds.get(keyword)
    if seq is None or len(seq) == 0:
        return None
    item: Dataset = seq[0]
    return item


def _rescale(ds: Dataset, frame: int) -> tuple[float, float]:
    """(slope, intercept) for ``frame``: top level, else per-frame or shared functional groups."""
    if "RescaleSlope" in ds or "RescaleIntercept" in ds:
        return float(ds.get("RescaleSlope", 1) or 1), float(ds.get("RescaleIntercept", 0) or 0)
    groups: list[Dataset] = []
    per_frame = ds.get("PerFrameFunctionalGroupsSequence")
    if per_frame is not None and frame < len(per_frame):
        groups.append(per_frame[frame])
    shared = _first_item(ds, "SharedFunctionalGroupsSequence")
    if shared is not None:
        groups.append(shared)
    for g in groups:
        pvt = _first_item(g, "PixelValueTransformationSequence")
        if pvt is not None:
            return float(pvt.get("RescaleSlope", 1) or 1), float(pvt.get("RescaleIntercept", 0) or 0)
    return 1.0, 0.0


def _stored_range(ds: Dataset) -> tuple[float, float]:
    bits = int(ds.get("BitsStored", ds.get("BitsAllocated", 16)) or 16)
    if int(ds.get("PixelRepresentation", 0) or 0) == 1:
        return -(2.0 ** (bits - 1)), 2.0 ** (bits - 1) - 1
    return 0.0, 2.0**bits - 1


def _decode_raw(ds: Dataset) -> np.ndarray:
    try:
        with quiet():
            arr: np.ndarray = ds.pixel_array
    except Exception as exc:  # noqa: BLE001 - missing codec, truncated data, ...
        raise DicomReadError(f"pixel data could not be decoded ({type(exc).__name__})") from None
    frames = int(ds.get("NumberOfFrames", 1) or 1)
    color = is_color(ds)
    if frames == 1 and arr.ndim == (3 if color else 2):
        arr = arr[np.newaxis]
    return arr


def decode_frames(ds: Dataset) -> np.ndarray:
    """Decode all frames as float32: ``[frames, rows, cols]`` (grey) or ``[frames, rows, cols, 3]`` (colour).

    Greyscale frames are in modality units (rescale applied); MONOCHROME1 is inverted within the
    rescaled stored-value range so brighter always means higher.
    """
    raw = _decode_raw(ds)
    if is_color(ds):
        return raw.astype(np.float32)
    out = np.empty(raw.shape, np.float32)
    mono1 = str(ds.get("PhotometricInterpretation", "")).strip() == "MONOCHROME1"
    lo, hi = _stored_range(ds)
    for i in range(raw.shape[0]):
        slope, intercept = _rescale(ds, i)
        frame = raw[i].astype(np.float32) * np.float32(slope) + np.float32(intercept)
        if mono1:
            a, b = sorted((lo * slope + intercept, hi * slope + intercept))
            frame = np.float32(a + b) - frame
        out[i] = frame
    return out


def to_grey(frame: np.ndarray) -> np.ndarray:
    """Collapse an RGB frame ``[rows, cols, 3]`` to float32 luminance (Rec. 601); grey frames pass through."""
    if frame.ndim == 3:
        weights = np.array([0.299, 0.587, 0.114], np.float32)
        grey: np.ndarray = (frame[..., :3].astype(np.float32) * weights).sum(axis=-1, dtype=np.float32)
        return grey
    return frame.astype(np.float32, copy=False)


def element_number(ds: Dataset, tag: int) -> float | None:
    """Best-effort numeric value of a (possibly private, possibly undecoded) element."""
    if tag not in ds:
        return None
    value: Any = ds[tag].value
    if isinstance(value, bytes | bytearray):
        value = bytes(value).decode("ascii", "ignore").strip("\x00 ").split("\\")[0]
    elif isinstance(value, list | tuple | MultiValue):
        value = value[0] if len(value) else None
    try:
        return None if value in (None, "") else float(value)
    except (TypeError, ValueError):
        return None
