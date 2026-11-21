import zipfile

import py7zr
import pyzipper
from pydicom import dcmread
from pydicom.fileset import FileSet

from tests.fixtures import containers as C


def test_dicomdir_disc(tmp_path):
    root = C.make_dicomdir_disc(tmp_path / "pdi")
    fs = FileSet(dcmread(root / "DICOMDIR"))
    assert len(fs) == C.N_SMALL_STUDY
    for inst in fs:
        p = inst.path
        assert "DICOM" in p and len(p.rsplit("\\" if "\\" in p else "/", 1)[-1]) <= 8
        assert dcmread(p).PatientName == "PHANTOM^TEST"
    assert (root / "autorun.inf").is_file()
    assert (root / "VIEWER" / "viewer.exe").read_bytes().startswith(b"MZ")
    assert (root / "REPORT" / "REPORT.PDF").read_bytes().startswith(b"%PDF")


def test_dcmburner_disc_format(tmp_path):
    root = C.make_dcmburner_disc(tmp_path / "b", "pw")
    blob = (root / "burn.enc").read_bytes()
    assert blob[:8] == b"Salted__" and (len(blob) - 16) % 16 == 0
    for name in ("burn.lock", "autorun.inf", "run.bat", "decrypt_win.exe"):
        assert (root / name).exists()
    assert (root / "util").is_dir() and (root / "VIEWER").is_dir()


def test_openssl_kdf_known_answer():
    """Values from `openssl enc -aes-256-cbc -md {md5,sha256} -S 0102030405060708 -k password -P`."""
    from medmereport.ingest.dcmburner import evp_bytes_to_key

    salt = bytes.fromhex("0102030405060708")
    vectors = {
        "md5": ("E7B0971E52CA5CC8D0539FB3412F6316F7BA2E6EE293D9F3457B99436B51CE02", "8D450E2ED75A84A923D4EAC9FE49226B"),
        "sha256": (
            "2435177F1410536BAAD2ACC155C0F94783D58384573CB0F72157443606285D3F",
            "F96EFC044E0F1613BF324245C95E7411",
        ),
    }
    for md, (k, iv) in vectors.items():
        assert C.evp_bytes_to_key(b"password", salt, md) == (bytes.fromhex(k), bytes.fromhex(iv))
        assert evp_bytes_to_key(bytearray(b"password"), salt, md) == (bytes.fromhex(k), bytes.fromhex(iv))


def test_radiant_disc(tmp_path):
    root = C.make_radiant_disc(tmp_path / "r", "pw")
    with pyzipper.AESZipFile(root / "dcmdata.zip") as zf:
        (info,) = zf.infolist()
        assert info.filename == "container.zip" and info.flag_bits & 1


def test_portal_archives(tmp_path):
    z = C.make_portal_zip(tmp_path / "p.zip")
    with zipfile.ZipFile(z) as zf:
        names = [n for n in zf.namelist() if not n.endswith("/")]
    assert len(names) == C.N_PORTAL
    assert all(n.endswith(".dcm") for n in names) and not any("DICOMDIR" in n for n in names)
    assert all(n.count("/") >= 2 for n in names)
    s = C.make_portal_7z(tmp_path / "p.7z")
    with py7zr.SevenZipFile(s) as zf:
        assert len([n for n in zf.getnames() if n.endswith(".dcm")]) == C.N_PORTAL


def test_cli_materialise_all(tmp_path):
    assert C.main([str(tmp_path / "all")]) == 0
    for sub in (
        "dicomdir_disc",
        "dcmburner_disc",
        "dcmburner_md5_disc",
        "radiant_disc",
        "portal",
        "loose_usb",
        "xray_images",
    ):
        assert (tmp_path / "all" / sub).exists()
