import pytest

from medmereport.classify import classify_header, classify_series
from medmereport.dicom.series import HeaderInfo
from tests.dicom.helpers import groups
from tests.fixtures.synth import write_secondary_capture, write_study, write_xray

AX = (1.0, 0.0, 0.0, 0.0, 1.0, 0.0)
SAG = (0.0, 1.0, 0.0, 0.0, 0.0, -1.0)
COR = (1.0, 0.0, 0.0, 0.0, 0.0, -1.0)

CASES = [
    # --- Siemens
    ("MR", "t1_mprage_sag_p2_iso", {}, {"sequence": "T1", "role": "primary"}),
    ("MR", "t2_tse_tra_512", {}, {"sequence": "T2"}),
    ("MR", "t2_tirm_tra_dark-fluid", {}, {"sequence": "FLAIR"}),
    ("MR", "t2_tirm_tra", {"inversion_time": 2500.0}, {"sequence": "FLAIR"}),
    ("MR", "t2_tirm_sag", {"inversion_time": 150.0, "body_part": "LSPINE"}, {"sequence": "STIR", "region": "spine"}),
    ("MR", "ep2d_diff_3scan_trace_p2", {}, {"sequence": "DWI"}),
    ("MR", "ep2d_diff_3scan_trace_p2_ADC", {}, {"sequence": "ADC", "role": "derived"}),
    ("MR", "tof_fl3d_tra_p2_multi-slab", {"body_part": "HEAD"}, {"sequence": "TOF", "region": "vessels"}),
    ("MR", "t2_swi_tra_p2_2mm", {}, {"sequence": "SWI"}),
    ("MR", "t2_swi_tra_mIP", {}, {"sequence": "SWI", "role": "derived"}),
    ("MR", "AAHead_Scout_32ch-head-coil", {}, {"role": "localizer", "region": "brain"}),
    ("MR", "t2_medic_tra", {}, {"sequence": "T2STAR"}),
    ("MR", "pd_tse_fs_cor", {"body_part": "KNEE"}, {"sequence": "PD", "region": "limb"}),
    # --- GE
    ("MR", "Ax T2 FRFSE", {}, {"sequence": "T2"}),
    ("MR", "Sag T1 FLAIR", {}, {"sequence": "T1"}),
    ("MR", "Ax DWI Asset", {}, {"sequence": "DWI"}),
    ("MR", "3D TOF", {}, {"sequence": "TOF", "region": "vessels"}),
    ("MR", "Ax SWAN", {}, {"sequence": "SWI"}),
    ("MR", "3-Plane Loc", {}, {"role": "localizer"}),
    ("MR", "Sag CUBE T2", {}, {"sequence": "T2"}),
    ("MR", "Ax BRAVO", {}, {"sequence": "T1"}),
    ("MR", "Cor STIR", {}, {"sequence": "STIR"}),
    ("MR", "Sag T2 C-Spine", {}, {"sequence": "T2", "region": "spine"}),
    # --- Philips
    ("MR", "T2W_TSE", {}, {"sequence": "T2"}),
    ("MR", "sT1W_3D_TFE", {}, {"sequence": "T1"}),
    ("MR", "dADC", {}, {"sequence": "ADC"}),
    ("MR", "SWIp", {}, {"sequence": "SWI"}),
    ("MR", "Survey", {}, {"role": "localizer"}),
    ("MR", "T2*_FFE", {}, {"sequence": "T2STAR"}),
    ("MR", "FLAIR_longTR", {}, {"sequence": "FLAIR"}),
    ("MR", "DWI_SENSE", {}, {"sequence": "DWI"}),
    ("MR", "T1W_SE_ABDOMEN", {}, {"sequence": "T1", "region": "abdomen"}),
    # --- Fujifilm / Hitachi
    ("MR", "T2WI", {}, {"sequence": "T2"}),
    ("MR", "T2*WI", {}, {"sequence": "T2STAR"}),
    ("MR", "T1WI SE", {}, {"sequence": "T1"}),
    ("MR", "MRA", {}, {"sequence": "TOF"}),
    # --- header physics when the description says nothing useful
    ("MR", "SERIES 4", {"echo_time": 12.0, "repetition_time": 550.0}, {"sequence": "T1"}),
    ("MR", "SERIES 5", {"echo_time": 100.0, "repetition_time": 4000.0}, {"sequence": "T2"}),
    ("MR", "SERIES 6", {"inversion_time": 2400.0, "echo_time": 90.0, "repetition_time": 9000.0}, {"sequence": "FLAIR"}),
    ("MR", "SERIES 7", {"b_value": 1000.0}, {"sequence": "DWI"}),
    ("MR", "SERIES 8", {"image_type": ("DERIVED", "PRIMARY", "ADC")}, {"sequence": "ADC", "role": "derived"}),
    ("MR", "SERIES 9", {"image_type": ("ORIGINAL", "PRIMARY", "LOCALIZER")}, {"role": "localizer"}),
    # --- CT
    ("CT", "CTA HEAD NECK", {}, {"sequence": "CTA", "region": "vessels"}),
    ("CT", "BRAIN PLAIN 5mm", {}, {"sequence": "CT", "region": "brain", "role": "primary"}),
    ("CT", "Topogram 0.6 T20f", {}, {"role": "localizer"}),
    ("CT", "COR MIP 10mm", {}, {"sequence": "MIP", "role": "mip"}),
    ("CT", "HRCT CHEST 1mm", {}, {"sequence": "CT", "region": "chest"}),
    # --- projection X-ray (Fujifilm FCR style descriptions)
    ("CR", "CHEST PA", {"orientation": None}, {"sequence": "CR", "plane": "projection", "region": "chest"}),
    ("DX", "L-SPINE LAT", {"orientation": None}, {"sequence": "DX", "plane": "projection", "region": "spine"}),
    ("CR", "KNEE AP", {"orientation": None, "body_part": "KNEE"}, {"region": "limb"}),
]


@pytest.mark.parametrize("modality, desc, extra, expected", CASES, ids=[c[1] for c in CASES])
def test_description_rules(modality, desc, extra, expected):
    fields = {"modality": modality, "series_description": desc, "orientation": AX, **extra}
    c = classify_header(HeaderInfo(**fields))
    got = {k: getattr(c, k) for k in expected}
    assert got == expected
    assert 0 < c.confidence <= 1


@pytest.mark.parametrize(
    "iop, plane",
    [
        (AX, "axial"),
        (SAG, "sagittal"),
        (COR, "coronal"),
        ((1.0, 0.0, 0.0, 0.0, 0.7071, -0.7071), "oblique"),
        ((1.0, 0.0, 0.0, 0.0, 0.9397, -0.342), "axial"),
    ],
)
def test_plane_from_orientation(iop, plane):
    assert classify_header(HeaderInfo(modality="MR", orientation=iop)).plane == plane


def test_plane_from_text_without_orientation():
    assert classify_header(HeaderInfo(modality="MR", series_description="SAG T1")).plane == "sagittal"
    assert classify_header(HeaderInfo(modality="MR")).plane == "unknown"


def test_unknown_is_low_confidence():
    c = classify_header(HeaderInfo(modality="MR"))
    assert c.sequence == "unknown" and c.region == "unknown"
    assert (
        c.confidence
        < classify_header(HeaderInfo(modality="MR", series_description="AX T2 BRAIN", orientation=AX)).confidence
    )


def test_classify_synthetic_groups(tmp_path):
    write_study(tmp_path / "mr")
    write_xray(tmp_path / "xr", modality="CR")
    write_secondary_capture(tmp_path / "sc")
    gs = groups(p for p in tmp_path.rglob("*") if p.is_file())
    got = sorted((c.modality, c.sequence, c.plane, c.region, c.role) for c in map(classify_series, gs))
    assert got == sorted(
        [
            ("MR", "T1", "axial", "brain", "primary"),
            ("MR", "FLAIR", "axial", "brain", "primary"),
            ("MR", "T1", "sagittal", "brain", "primary"),
            ("CR", "CR", "projection", "chest", "primary"),
            ("OT", "PHOTO", "unknown", "unknown", "photo"),
        ]
    )
