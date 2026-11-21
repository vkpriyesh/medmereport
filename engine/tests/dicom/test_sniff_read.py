from pathlib import Path

import numpy as np
import pytest
from pydicom import dcmread
from pydicom.dataset import Dataset, FileMetaDataset
from pydicom.uid import ExplicitVRLittleEndian, JPEG2000Lossless, RLELossless, generate_uid

from medmereport.dicom.read import (
    DicomReadError,
    decode_frames,
    encapsulated_pdf,
    object_kind,
    read_dataset,
    read_header,
    to_grey,
)
from medmereport.dicom.sniff import is_dicom, is_dicomdir
from tests.fixtures.synth import phantom_volume, write_secondary_capture, write_series, write_xray

PDF = b"%PDF-1.4\n1 0 obj<<>>endobj\ntrailer<<>>\n%%EOF\n"


def write_raw_implicit(src: Path, dst: Path) -> Path:
    """Re-write a Part-10 file as a preamble-less implicit VR little endian dataset (old scanners)."""
    ds = dcmread(src)
    ds.preamble = None
    del ds.file_meta
    ds.save_as(dst, implicit_vr=True, little_endian=True, enforce_file_format=False)
    return dst


def write_pdf_object(out: Path) -> Path:
    ds = Dataset()
    ds.file_meta = FileMetaDataset()
    ds.file_meta.TransferSyntaxUID = ExplicitVRLittleEndian
    ds.SOPClassUID = ds.file_meta.MediaStorageSOPClassUID = "1.2.840.10008.5.1.4.1.1.104.1"
    ds.SOPInstanceUID = ds.file_meta.MediaStorageSOPInstanceUID = generate_uid()
    ds.StudyInstanceUID, ds.SeriesInstanceUID = generate_uid(), generate_uid()
    ds.Modality = "DOC"
    ds.MIMETypeOfEncapsulatedDocument = "application/pdf"
    ds.EncapsulatedDocument = PDF + b"\x00"
    ds.EncapsulatedDocumentLength = len(PDF)
    out.parent.mkdir(parents=True, exist_ok=True)
    ds.save_as(out, enforce_file_format=True)
    return out


def test_sniff_part10_and_extensionless(tmp_path):
    files = write_series(tmp_path, volume=phantom_volume(nz=2, ny=8, nx=8), extensionless=True)
    assert all(p.suffix == "" for p in files)
    assert all(is_dicom(p) for p in files)


def test_sniff_preamble_less_implicit_vr(tmp_path):
    src = write_series(tmp_path / "a", volume=phantom_volume(nz=1, ny=8, nx=8))[0]
    raw = write_raw_implicit(src, tmp_path / "RAW0001")
    assert raw.read_bytes()[:2] == b"\x08\x00"
    assert is_dicom(raw)
    assert read_header(raw).Modality == "MR"


@pytest.mark.parametrize(
    "content",
    [b"", b"hello world", b"\x08\x00" + b"\xff" * 300, b"\x00" * 128 + b"DICX" + b"\x00" * 20, bytes(range(256)) * 4],
)
def test_sniff_rejects_non_dicom(tmp_path, content):
    p = tmp_path / "f"
    p.write_bytes(content)
    assert not is_dicom(p)


def test_sniff_skips_dicomdir(tmp_path):
    src = write_series(tmp_path, volume=phantom_volume(nz=1, ny=8, nx=8))[0]
    named = tmp_path / "DICOMDIR"
    named.write_bytes(src.read_bytes())
    assert is_dicomdir(named) and not is_dicom(named)
    ds = dcmread(src)
    ds.SOPClassUID = ds.file_meta.MediaStorageSOPClassUID = "1.2.840.10008.1.3.10"
    other = tmp_path / "INDEX"
    ds.save_as(other, enforce_file_format=True)
    assert is_dicomdir(other) and not is_dicom(other)


def test_monochrome1_is_inverted(tmp_path):
    p = write_xray(tmp_path, modality="CR", size=128)
    ds = read_dataset(p)
    assert ds.PhotometricInterpretation == "MONOCHROME1"
    raw = ds.pixel_array.astype(np.float32)
    img = decode_frames(ds)[0]
    lung, corner = (64, int(128 * 0.3)), (2, 2)
    assert raw[lung] < raw[corner]  # stored: lungs low (bright in MONOCHROME1)
    assert img[lung] > img[corner]  # decoded: higher = brighter
    np.testing.assert_allclose(img, 4095 - raw)


def test_rescale_slope_intercept(tmp_path):
    vol = phantom_volume(nz=1, ny=16, nx=16)
    p = write_series(tmp_path, volume=vol, modality="CT")[0]
    np.testing.assert_allclose(decode_frames(read_dataset(p))[0], vol[0].astype(np.float32) - 1024)


def test_rgb_secondary_capture(tmp_path):
    ds = read_dataset(write_secondary_capture(tmp_path))
    frames = decode_frames(ds)
    assert frames.shape == (1, 64, 64, 3)
    np.testing.assert_allclose(to_grey(frames[0]), 90, atol=0.01)


@pytest.mark.parametrize("syntax", [JPEG2000Lossless, RLELossless])
def test_compressed_transfer_syntaxes_decode_losslessly(tmp_path, syntax):
    vol = phantom_volume(nz=3, ny=64, nx=64)
    paths = write_series(tmp_path, volume=vol, transfer_syntax=syntax, shuffle=False)
    for k, p in enumerate(paths):
        ds = read_dataset(p)
        assert ds.file_meta.TransferSyntaxUID == syntax
        np.testing.assert_array_equal(decode_frames(ds)[0], vol[k].astype(np.float32))


def test_object_kinds_and_pdf_extraction(tmp_path):
    img = write_series(tmp_path, volume=phantom_volume(nz=1, ny=8, nx=8))[0]
    assert object_kind(read_header(img)) == "image"
    doc = read_header(write_pdf_object(tmp_path / "DOC1"))
    assert object_kind(doc) == "document"
    assert encapsulated_pdf(doc) == PDF
    sr = Dataset()
    sr.SOPClassUID = "1.2.840.10008.5.1.4.1.1.88.22"
    assert object_kind(sr) == "other"


def test_corrupt_files_raise_clean_errors(tmp_path):
    p = write_series(tmp_path, volume=phantom_volume(nz=1, ny=16, nx=16))[0]
    data = p.read_bytes()
    p.write_bytes(data[:-200])  # truncated pixel data
    ds = read_dataset(p)
    with pytest.raises(DicomReadError) as exc:
        decode_frames(ds)
    assert str(tmp_path) not in str(exc.value)
    missing = tmp_path / "nope"
    with pytest.raises(DicomReadError):
        read_header(missing)
