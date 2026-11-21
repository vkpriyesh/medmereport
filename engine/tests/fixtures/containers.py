"""Synthetic patient-disc builders: one for every container format medmereport supports.

Everything here is built from the fake phantoms in ``synth.py``. No real patient data, ever.
Disc binaries (viewer .exe, decrypt_win.exe, run.bat) are inert junk bytes and must never be run.

Materialise all fixtures for manual / E2E testing::

    uv run python -m tests.fixtures.containers OUTDIR
"""

from __future__ import annotations

import argparse
import hashlib
import io
import os
import shutil
import sys
import tempfile
import zipfile
from pathlib import Path

import numpy as np
import py7zr
import pyzipper
from cryptography.hazmat.primitives import padding
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from PIL import Image, ImageDraw
from pydicom import dcmread
from pydicom.fileset import FileSet
from pydicom.uid import generate_uid

from .synth import phantom_volume, write_series, write_xray

DEMO_PASSWORD = "Synthetic-Disc-2026"  # used by the CLI; tests pass their own
FAKE_EXE = b"MZ" + b"\x90\x00" * 32 + b"medmereport synthetic dummy binary - never execute" + b"\x00" * 64

# ---------------------------------------------------------------------------- DICOM payloads


def write_small_study(out: Path, *, extensionless: bool = True) -> list[Path]:
    """Two small MR series (axial + sagittal, 6 slices of 32x32) in one study. Fast to build."""
    study = generate_uid()
    vol = phantom_volume(nz=6, ny=32, nx=32)
    a = write_series(
        out, volume=vol, study_uid=study, series_number=1, description="AX T1 SYNTH", extensionless=extensionless
    )
    s = write_series(
        out,
        volume=vol,
        study_uid=study,
        series_number=2,
        plane="sagittal",
        description="SAG T2 SYNTH",
        extensionless=extensionless,
        echo_time=90,
        repetition_time=4000,
    )
    return a + s


N_SMALL_STUDY = 12  # files produced by write_small_study


def write_dicomdir_tree(root: Path) -> list[Path]:
    """Write ``root/DICOMDIR`` + ``root/DICOM/PT000000/ST000000/SE000000/IM000000`` (IHE-PDI style)."""
    root.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(dir=root) as staging:
        src = write_small_study(Path(staging) / "src")
        fs = FileSet()
        for p in sorted(src):
            ds = dcmread(p)
            # DICOMDIR STUDY records require these (synth.py omits them)
            ds.StudyTime = ds.get("StudyTime", "120000")
            ds.StudyID = ds.get("StudyID", "1")
            ds.save_as(p, enforce_file_format=True)
            fs.add(p)
        fs.write(root)
    # pydicom writes PT000000/... at the root; move it under DICOM/ and rewrite the File IDs
    dicom_dir = root / "DICOM"
    dicom_dir.mkdir(exist_ok=True)
    for d in list(root.iterdir()):
        if d.is_dir() and d.name.startswith("PT"):
            shutil.move(str(d), str(dicom_dir / d.name))
    ds = dcmread(root / "DICOMDIR")
    for item in ds.DirectoryRecordSequence:
        if "ReferencedFileID" in item:
            v = item.ReferencedFileID
            parts = [v] if isinstance(v, str) else list(v)
            item.ReferencedFileID = ["DICOM", *parts]
    fs2 = FileSet(ds)
    fs2.write(use_existing=True)
    return sorted(p for p in dicom_dir.rglob("*") if p.is_file())


# ---------------------------------------------------------------------------- small helpers


def tiny_pdf(path: Path, text: str = "SYNTHETIC REPORT") -> Path:
    """A one-page valid PDF (Pillow-rendered)."""
    im = Image.new("L", (300, 400), 255)
    d = ImageDraw.Draw(im)
    d.text((20, 20), text, fill=0)
    d.rectangle((20, 60, 280, 62), fill=0)
    path.parent.mkdir(parents=True, exist_ok=True)
    im.save(path, "PDF", resolution=72)
    return path


def _write(path: Path, data: bytes | str) -> Path:
    path.parent.mkdir(parents=True, exist_ok=True)
    if isinstance(data, str):
        path.write_text(data, encoding="ascii")
    else:
        path.write_bytes(data)
    return path


def zip_dir(src: Path, *, top: str = "", compression: int = zipfile.ZIP_DEFLATED) -> bytes:
    """Zip a directory into bytes; entries are placed under ``top/`` when given."""
    buf = io.BytesIO()
    with zipfile.ZipFile(buf, "w", compression) as zf:
        for p in sorted(src.rglob("*")):
            if p.is_file():
                rel = p.relative_to(src).as_posix()
                zf.write(p, f"{top}/{rel}" if top else rel)
    return buf.getvalue()


def evp_bytes_to_key(password: bytes, salt: bytes, md: str = "sha256") -> tuple[bytes, bytes]:
    """OpenSSL EVP_BytesToKey, 1 iteration, 32-byte key + 16-byte IV."""
    out, prev = b"", b""
    while len(out) < 48:
        prev = hashlib.new(md, prev + password + salt).digest()
        out += prev
    return out[:32], out[32:48]


def openssl_enc(plaintext: bytes, password: str | bytes, *, md: str = "sha256", salt: bytes | None = None) -> bytes:
    """Equivalent of ``openssl enc -aes-256-cbc -md <md> -salt``."""
    pw = password.encode() if isinstance(password, str) else password
    salt = os.urandom(8) if salt is None else salt
    key, iv = evp_bytes_to_key(pw, salt, md)
    padder = padding.PKCS7(128).padder()
    padded = padder.update(plaintext) + padder.finalize()
    enc = Cipher(algorithms.AES(key), modes.CBC(iv)).encryptor()
    return b"Salted__" + salt + enc.update(padded) + enc.finalize()


# ---------------------------------------------------------------------------- container builders


def make_dicomdir_disc(root: Path) -> Path:
    """IHE-PDI disc: DICOMDIR, DICOM/ tree, autorun.inf, VIEWER/viewer.exe (dummy), REPORT/report.pdf."""
    write_dicomdir_tree(root)
    _write(root / "autorun.inf", "[autorun]\r\nopen=VIEWER\\viewer.exe\r\nicon=VIEWER\\viewer.exe,0\r\n")
    _write(root / "VIEWER" / "viewer.exe", FAKE_EXE)
    _write(root / "VIEWER" / "viewer.ini", "[viewer]\r\nlang=en\r\n")
    _write(root / "README.TXT", "Synthetic test disc. Contains no patient data.\r\n")
    tiny_pdf(root / "REPORT" / "REPORT.PDF")
    return root


def make_dcmburner_disc(root: Path, password: str | bytes, *, md: str = "sha256", payload: bytes | None = None) -> Path:
    """DcmBurner-style disc. ``payload`` overrides the plaintext ZIP (for malformed-archive tests)."""
    root.mkdir(parents=True, exist_ok=True)
    if payload is None:
        with tempfile.TemporaryDirectory() as staging:
            write_dicomdir_tree(Path(staging))
            payload = zip_dir(Path(staging), top="DICOM_STUDY")
    _write(root / "burn.enc", openssl_enc(payload, password, md=md))
    _write(root / "burn.lock", b"")
    _write(root / "autorun.inf", "[autorun]\r\nopen=run.bat\r\n")
    _write(root / "run.bat", "@echo off\r\ndecrypt_win.exe burn.enc\r\n")
    _write(root / "decrypt_win.exe", FAKE_EXE)
    _write(root / "util" / "7za.exe", FAKE_EXE)
    _write(root / "util" / "openssl.cfg", "# dummy\n")
    _write(root / "VIEWER" / "weasis-launcher.exe", FAKE_EXE)
    _write(root / "VIEWER" / "conf" / "config.properties", "weasis.dummy=true\n")
    return root


def make_radiant_disc(root: Path, password: str | bytes) -> Path:
    """RadiAnt-style disc: dcmdata.zip (WinZip-AES-256) -> container.zip (plain) -> DICOM files."""
    root.mkdir(parents=True, exist_ok=True)
    pw = password.encode() if isinstance(password, str) else password
    with tempfile.TemporaryDirectory() as staging:
        st = Path(staging)
        write_small_study(st / "dicom", extensionless=True)
        inner = zip_dir(st / "dicom", top="DICOM", compression=zipfile.ZIP_STORED)
        with pyzipper.AESZipFile(
            root / "dcmdata.zip", "w", compression=pyzipper.ZIP_STORED, encryption=pyzipper.WZ_AES
        ) as zf:
            zf.setpassword(pw)
            zf.writestr("container.zip", inner)
    _write(root / "RadiAntViewer.exe", FAKE_EXE)
    _write(root / "autorun.inf", "[autorun]\r\nopen=RadiAntViewer.exe\r\n")
    return root


def _portal_tree(staging: Path) -> Path:
    base = staging / "Download_Study_SYNTH"
    write_small_study(base / "series_1" / "images", extensionless=False)
    write_xray(base / "xray", name="XR0001.dcm")
    return base


def make_portal_zip(path: Path) -> Path:
    """Cloud-portal download: .zip of .dcm files in nested folders, no DICOMDIR."""
    path.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory() as staging:
        base = _portal_tree(Path(staging))
        path.write_bytes(zip_dir(base.parent))
    return path


def make_portal_7z(path: Path) -> Path:
    path.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory() as staging:
        base = _portal_tree(Path(staging))
        with py7zr.SevenZipFile(path, "w") as z:
            z.writeall(base, base.name)
    return path


N_PORTAL = N_SMALL_STUDY + 1


def chest_xray_array(w: int = 320, h: int = 360) -> np.ndarray:
    """uint8 chest-radiograph-like picture: bright body, dark lungs, rib bands, spine."""
    y, x = np.mgrid[0:h, 0:w].astype(np.float32)
    img = np.full((h, w), 40, np.float32)
    body = ((x - w / 2) / (w * 0.45)) ** 2 + ((y - h * 0.55) / (h * 0.5)) ** 2 <= 1
    img[body] = 190
    for cx in (0.32, 0.68):
        lung = ((x - w * cx) / (w * 0.14)) ** 2 + ((y - h * 0.5) / (h * 0.3)) ** 2 <= 1
        img[lung] = 70
    img += 35 * (np.sin(y / h * 45) > 0.7) * body
    img[(np.abs(x - w / 2) < w * 0.03) & body] = 230
    return np.clip(img, 0, 255).astype(np.uint8)


ORIENTATION_TAG = 0x0112
GPS_IFD = 0x8825


def make_xray_images(root: Path) -> dict[str, Path]:
    """PNG + JPEG chest films, a rotated phone photo (EXIF orientation=6 + GPS) and a 2-page PDF."""
    root.mkdir(parents=True, exist_ok=True)
    arr = chest_xray_array()
    out: dict[str, Path] = {}
    out["png"] = root / "chest_pa.png"
    Image.fromarray(arr, "L").save(out["png"])
    out["jpeg"] = root / "chest_lateral.jpg"
    Image.fromarray(np.stack([arr] * 3, -1), "RGB").save(out["jpeg"], quality=90)

    # Phone photo of a film held sideways: stored 400x300 landscape, EXIF says rotate 90 CW to view.
    photo = np.stack([chest_xray_array(400, 300)] * 3, -1).copy()
    photo[:40, :40] = (255, 0, 0)  # red marker in the stored top-left (shows up top-right after transpose)
    im = Image.fromarray(photo, "RGB")
    exif = Image.Exif()
    exif[ORIENTATION_TAG] = 6
    exif[0x010F] = "SyntheticPhone"  # Make
    exif[0x0110] = "Model-0"  # Model
    gps = exif.get_ifd(GPS_IFD)
    gps[1] = "N"
    gps[2] = (12.0, 58.0, 0.0)
    gps[3] = "E"
    gps[4] = (77.0, 35.0, 0.0)
    out["photo"] = root / "IMG_20260101_120000.jpg"
    im.save(out["photo"], exif=exif.tobytes(), quality=90)

    out["pdf"] = root / "xray_report.pdf"
    p1 = Image.fromarray(chest_xray_array(300, 380), "L")
    p2 = Image.fromarray(255 - chest_xray_array(300, 380), "L")
    p1.save(out["pdf"], "PDF", save_all=True, append_images=[p2], resolution=100)
    return out


def make_loose_folder(root: Path) -> Path:
    """A plain folder copy (USB stick): extensionless DICOM, nested, no DICOMDIR."""
    write_small_study(root / "STUDY1" / "A")
    return root


def materialise_all(out: Path, password: str = DEMO_PASSWORD) -> dict[str, Path]:
    """Build every fixture under ``out``. Returns name -> path."""
    out.mkdir(parents=True, exist_ok=True)
    return {
        "dicomdir": make_dicomdir_disc(out / "dicomdir_disc"),
        "dcmburner": make_dcmburner_disc(out / "dcmburner_disc", password),
        "dcmburner_md5": make_dcmburner_disc(out / "dcmburner_md5_disc", password, md="md5"),
        "radiant": make_radiant_disc(out / "radiant_disc", password),
        "portal_zip": make_portal_zip(out / "portal" / "study_download.zip"),
        "portal_7z": make_portal_7z(out / "portal" / "study_download.7z"),
        "loose": make_loose_folder(out / "loose_usb"),
        "images": make_xray_images(out / "xray_images")["png"].parent,
    }


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser(
        prog="python -m tests.fixtures.containers",
        description="Materialise synthetic disc fixtures (no real patient data).",
    )
    ap.add_argument("outdir", type=Path)
    ap.add_argument("--password", default=DEMO_PASSWORD, help="password for the encrypted discs")
    args = ap.parse_args(argv)
    made = materialise_all(args.outdir, args.password)
    for name, p in made.items():
        print(f"{name:14s} {p}")
    print(f"password for encrypted discs: {args.password}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
