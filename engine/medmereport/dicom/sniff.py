"""Cheap "is this a DICOM file?" checks.

Hospital discs routinely contain extensionless files, so the extension is never trusted. A file is
DICOM when it has the ``DICM`` magic at offset 128 (Part 10), or when it is a preamble-less
implicit-VR dataset whose first element is in group 0x0002/0x0008 and parses with a SOP Class UID
or Study Instance UID. DICOMDIR index files are *not* reported as DICOM: they are handled by the
``dicomdir`` adapter.
"""

from __future__ import annotations

from pathlib import Path

from pydicom import dcmread
from pydicom.errors import InvalidDicomError
from pydicom.filereader import read_file_meta_info

from medmereport.dicom.read import quiet

MEDIA_DIRECTORY_STORAGE = "1.2.840.10008.1.3.10"
_PREAMBLE = 128
_MAGIC = b"DICM"
# First tag group of a preamble-less dataset: (0002,xxxx) meta or (0008,xxxx) identifying group.
_RAW_FIRST_GROUPS = (b"\x02\x00", b"\x08\x00")
_SOP_CLASS_UID = 0x00080016
_STUDY_UID = 0x0020000D


def has_dicm_magic(path: Path) -> bool:
    """True if ``path`` carries the Part-10 ``DICM`` prefix at byte 128."""
    try:
        with path.open("rb") as fh:
            head = fh.read(_PREAMBLE + 4)
    except OSError:
        return False
    return len(head) == _PREAMBLE + 4 and head[_PREAMBLE:] == _MAGIC


def is_dicomdir(path: Path) -> bool:
    """True if ``path`` is a DICOMDIR media index (by name or Media Storage SOP Class)."""
    if path.name.upper() == "DICOMDIR":
        return True
    if not has_dicm_magic(path):
        return False
    try:
        with quiet():
            meta = read_file_meta_info(path)
    except (InvalidDicomError, OSError, ValueError, EOFError, KeyError):
        return False
    return str(meta.get("MediaStorageSOPClassUID", "")) == MEDIA_DIRECTORY_STORAGE


def _looks_like_raw_dataset(path: Path) -> bool:
    """Preamble-less implicit/explicit VR dataset: plausible first tag, then parse a few tags."""
    try:
        with path.open("rb") as fh:
            first = fh.read(2)
    except OSError:
        return False
    if first not in _RAW_FIRST_GROUPS:
        return False
    try:
        with quiet():
            ds = dcmread(path, force=True, stop_before_pixels=True, specific_tags=[_SOP_CLASS_UID, _STUDY_UID])
    except Exception:  # noqa: BLE001 - any parse failure simply means "not DICOM"
        return False
    return _SOP_CLASS_UID in ds or _STUDY_UID in ds


def is_dicom(path: Path) -> bool:
    """Return True if ``path`` is a readable DICOM object (DICOMDIR index files excluded)."""
    if not path.is_file():
        return False
    if has_dicm_magic(path):
        return not is_dicomdir(path)
    if path.name.upper() == "DICOMDIR":
        return False
    return _looks_like_raw_dataset(path)
