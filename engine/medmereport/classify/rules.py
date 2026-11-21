"""Rules-based series classifier (modality, region, plane, sequence, role).

Pure functions over :class:`~medmereport.dicom.series.HeaderInfo`. The rules are ordered tables of
regular expressions over the series text (SeriesDescription + ProtocolName + SequenceName), with
vendor naming covered (Siemens ``tirm_dark-fluid``/``ep2d_diff``/``fl3d_tof``/``AAHead_Scout``, GE
``FRFSE``/``BRAVO``/``SWAN``/``3-Plane Loc``, Philips ``T2W_TSE``/``sT1W_3D_TFE``/``SWIp``/``Survey``/
``dADC``, Fujifilm/Hitachi ``T2WI``/``T2*WI``). Header physics (TE/TR/TI, b-value, ImageType) back
them up when the text says nothing.
"""

from __future__ import annotations

import re
from dataclasses import dataclass
from typing import Literal

import numpy as np

from medmereport.dicom.series import HeaderInfo, SeriesGroup, is_photo_info, is_projection_info

Region = Literal["brain", "spine", "chest", "abdomen", "limb", "vessels", "unknown"]
Plane = Literal["axial", "sagittal", "coronal", "oblique", "projection", "unknown"]
Role = Literal["primary", "derived", "mip", "localizer", "photo"]
SequenceId = Literal[
    "T1", "T2", "FLAIR", "DWI", "ADC", "T2STAR", "SWI", "TOF", "STIR", "PD",
    "CT", "CTA", "CR", "DX", "MIP", "PHOTO", "unknown",
]  # fmt: skip

_TEXT_RULE = 0.9
_WEAK_RULE = 0.6
_PHYSICS = 0.55
_UNKNOWN = 0.2
_OBLIQUE_BELOW = 0.8  # |normal component| below this on every axis -> oblique


def _tok(pattern: str) -> re.Pattern[str]:
    """Whole-token match on normalised (upper-case, separators as spaces) text."""
    return re.compile(rf"(?<![A-Z0-9])(?:{pattern})(?![A-Z0-9])")


@dataclass(frozen=True)
class Classification:
    """Classifier output. ``confidence`` is the mean of the per-field scores in ``scores``."""

    modality: str
    region: Region
    plane: Plane
    sequence: SequenceId
    role: Role
    confidence: float
    scores: tuple[tuple[str, float], ...] = ()


# Ordered: first match wins. (pattern, sequence, confidence)
MR_SEQUENCE_RULES: tuple[tuple[re.Pattern[str], SequenceId, float], ...] = (
    (_tok(r"E?ADC|DADC|APPARENT DIFF\w*"), "ADC", _TEXT_RULE),
    (_tok(r"DWI|DW|DIFF\w*|TRACEW?|B ?\d{3,4}|EP2D DIFF\w*"), "DWI", _TEXT_RULE),
    (_tok(r"SWI\w*|SWAN|VEN BOLD|SUSCEPT\w*"), "SWI", _TEXT_RULE),
    (_tok(r"TOF|FL3D TOF|TIME OF FLIGHT|MRA|ANGIO\w*|INHANCE"), "TOF", _TEXT_RULE),
    (_tok(r"S?T1W?I? ?FLAIR"), "T1", _TEXT_RULE),  # GE "T1 FLAIR" is T1-weighted inversion recovery
    (_tok(r"FLAIR|DARK FLUID|FLUID ATT\w*"), "FLAIR", _TEXT_RULE),
    (_tok(r"STIR|TIRM"), "STIR", _TEXT_RULE),  # TIRM with long TI is re-labelled FLAIR below
    (re.compile(r"T2 ?\*|T2 ?STAR"), "T2STAR", _TEXT_RULE),
    (_tok(r"MERGE|MEDIC|HEMO\w*"), "T2STAR", _TEXT_RULE),
    (_tok(r"S?PDW?I?|PD FS|PROTON DENS\w*"), "PD", _TEXT_RULE),
    (_tok(r"S?T1(?:W|WI|C|FS|SE|TSE|POST)?|MP ?RAGE|F?SPGR|BRAVO|TFE|VIBE|FLASH"), "T1", _TEXT_RULE),
    (_tok(r"S?T2(?:W|WI|FS|SE|TSE)?|F?RFSE|SSFSE|HASTE|TRUFI|FIESTA|CISS|BLADE|PROPELLER"), "T2", _TEXT_RULE),
    (_tok(r"GRE|FFE|FL2D|GRASS"), "T2STAR", _WEAK_RULE),
)  # fmt: skip
_CTA = _tok(r"CTA|ANGIO\w*|COW|CIRCLE OF WILLIS|RUN ?OFF|AORT\w*|CTPA|PE PROTOCOL")
# Case-sensitive on raw text so SWI "mIP" (minimum IP) is not mistaken for a maximum projection.
_MIP = re.compile(r"(?<![A-Za-z])(?:M[Ii][Pp]|MAX ?IP|MaxIP)(?![A-Za-z])")
_MINIP = re.compile(r"(?<![A-Za-z])(?:mIP|[Mm]in ?IP|MINIP)(?![A-Za-z])")
_LOCALIZER = _tok(r"LOC\w*|SCOUT|SURVEY|SURVIEW|TRI ?PILOT|PILOT|3 ?PL\w*|\w*SCOUT|TOPOGRAM|SCANOGRAM|CALIBRATION")
_DERIVED = _tok(r"MPR|REFORMAT\w*|MIN ?IP|SUB|SUBTRACT\w*|CALC\w*|FA|COLFA|TENSOR|MOCO\w*|MAP")
_VESSELS = _tok(r"ANGIO\w*|MRA|CTA|COW|CIRCLE OF WILLIS|CAROTIDS?|AORT\w*|RUN ?OFF|VENO\w*|MRV")
_AXIAL = _tok(r"AX\w*|TRA\w*|TRANS\w*")
_SAGITTAL = _tok(r"SAG\w*")
_CORONAL = _tok(r"COR\w*")

REGION_TEXT_RULES: tuple[tuple[re.Pattern[str], Region], ...] = (
    (_tok(r"SPIN\w*|CERVICAL|LUMBAR|DORSAL|SACR\w*|COCCYX|[CTL] ?SP\w*|LSS|WHOLE SPINE|MYELO\w*"), "spine"),
    (_tok(r"BRAIN|HEAD|CEREBR\w*|SKULL|CRANI\w*|IACS?|ORBITS?|SELLA|PITUITARY|NEURO|STROKE|HIPPO\w*|EPILEPSY"),
     "brain"),
    (_tok(r"CHEST|THORA\w*|LUNGS?|HRCT|CXR|CARDIAC|HEART|MEDIASTIN\w*|STERNUM|RIBS?|BREASTS?"), "chest"),
    (_tok(r"ABD\w*|PELV\w*|LIVER|KIDNEYS?|RENAL|KUB|MRCP|URO\w*|ENTERO\w*|PANCREA\w*|PROSTATE|BLADDER|UTER\w*|"
          r"OVAR\w*|BOWEL|COLON|HEPAT\w*|SPLEEN"), "abdomen"),
    (_tok(r"KNEES?|SHOULDERS?|HIPS?|ANKLES?|WRISTS?|HANDS?|FOOT|FEET|ELBOWS?|FEMUR|TIBIA|FIBULA|HUMERUS|FOREARM|"
          r"LEGS?|ARMS?|THIGH|EXTREMIT\w*|FINGERS?|TOES?|CALF|CLAVICLE|SCAPULA"), "limb"),
)  # fmt: skip

BODY_PART_REGIONS: dict[str, Region] = {
    **dict.fromkeys(("HEAD", "BRAIN", "SKULL", "HEADNECK", "IAC", "ORBIT", "SELLA"), "brain"),
    **dict.fromkeys(("SPINE", "CSPINE", "TSPINE", "LSPINE", "SSPINE", "WHOLESPINE", "COCCYX", "SACRUM",
                     "LSSPINE", "CTSPINE", "TLSPINE"), "spine"),
    **dict.fromkeys(("CHEST", "THORAX", "LUNG", "HEART", "BREAST", "RIB", "RIBS", "STERNUM", "CHESTABDOMEN"),
                    "chest"),
    **dict.fromkeys(("ABDOMEN", "PELVIS", "ABDOMENPELVIS", "ABDPELV", "LIVER", "KIDNEY", "PROSTATE", "BLADDER",
                     "PANCREAS", "KUB"), "abdomen"),
    **dict.fromkeys(("SHOULDER", "ARM", "ELBOW", "FOREARM", "WRIST", "HAND", "FINGER", "HIP", "LEG", "KNEE",
                     "ANKLE", "FOOT", "FEMUR", "TIBIA", "HUMERUS", "EXTREMITY", "UPPEREXTREMITY",
                     "LOWEREXTREMITY", "LOWERLIMB", "UPPERLIMB", "THIGH", "CLAVICLE"), "limb"),
    **dict.fromkeys(("AORTA", "CAROTID", "CIRCLEOFWILLIS", "ARTERY", "VEIN"), "vessels"),
}  # fmt: skip


def _norm(text: str) -> str:
    return re.sub(r"[_\-/\\.,:;()\[\]+]+", " ", text.upper()).strip()


def _series_text(h: HeaderInfo) -> str:
    return " | ".join(t for t in (h.series_description, h.protocol_name, h.sequence_name) if t)


def plane_of(h: HeaderInfo, projection: bool) -> tuple[Plane, float]:
    """Acquisition plane from ImageOrientationPatient, else from description words."""
    if projection:
        return "projection", 0.9
    if h.orientation is not None:
        n = np.abs(np.cross(np.array(h.orientation[:3]), np.array(h.orientation[3:])))
        axis = int(np.argmax(n))
        if n[axis] < _OBLIQUE_BELOW:
            return "oblique", 0.9
        planes: tuple[Plane, Plane, Plane] = ("sagittal", "coronal", "axial")
        return planes[axis], 0.95
    text = _norm(_series_text(h))
    for pattern, plane in ((_AXIAL, "axial"), (_SAGITTAL, "sagittal"), (_CORONAL, "coronal")):
        if pattern.search(text):
            return plane, 0.7  # type: ignore[return-value]
    return "unknown", _UNKNOWN


def _mr_physics(h: HeaderInfo) -> SequenceId | None:
    te, tr, ti = h.echo_time, h.repetition_time, h.inversion_time
    if ti is not None and ti > 1500:
        return "FLAIR"
    if ti is not None and 80 <= ti <= 300:
        return "STIR"
    if te is None or tr is None:
        return None
    if tr <= 800 and te <= 30:
        return "T2STAR" if "GR" in h.scanning_sequence and te >= 15 else "T1"
    if tr >= 1500 and te >= 60:
        return "T2"
    if tr >= 1500 and te <= 40:
        return "PD"
    return None


def _mr_sequence(h: HeaderInfo, text: str) -> tuple[SequenceId, float]:
    if "ADC" in h.image_type:
        return "ADC", 0.95
    if (h.b_value or 0) > 0 or "DIFFUSION" in h.image_type or "TRACEW" in h.image_type:
        return "DWI", 0.95
    for pattern, seq, conf in MR_SEQUENCE_RULES:
        if pattern.search(text):
            if seq == "STIR" and (h.inversion_time or 0) > 1500:
                return "FLAIR", conf
            return seq, conf
    physics = _mr_physics(h)
    return (physics, _PHYSICS) if physics else ("unknown", _UNKNOWN)


def sequence_of(h: HeaderInfo, *, projection: bool, photo: bool) -> tuple[SequenceId, float]:
    """Sequence / contrast family."""
    raw = _series_text(h)
    text = _norm(raw)
    if photo:
        return "PHOTO", 0.9
    if h.modality in ("CR", "DX"):
        return h.modality, 0.95  # type: ignore[return-value]
    mip = _MIP.search(raw) is not None or any("MIP" in t for t in h.image_type)
    if mip or (projection and h.modality in ("MR", "CT")):
        return "MIP", 0.9
    if h.modality == "CT":
        return ("CTA", 0.85) if _CTA.search(text) or _VESSELS.search(text) else ("CT", 0.95)
    if h.modality == "MR":
        return _mr_sequence(h, text)
    return "unknown", _UNKNOWN


def region_of(h: HeaderInfo, sequence: SequenceId) -> tuple[Region, float]:
    """Body region: vessels for angiography, else BodyPartExamined, else description words."""
    text = _norm(_series_text(h))
    if sequence in ("TOF", "CTA") or _VESSELS.search(text):
        return "vessels", 0.85
    part = re.sub(r"[^A-Z]", "", h.body_part)
    if part in BODY_PART_REGIONS:
        return BODY_PART_REGIONS[part], 0.9
    for pattern, region in REGION_TEXT_RULES:
        if pattern.search(text):
            return region, 0.8
    return "unknown", _UNKNOWN


def role_of(h: HeaderInfo, sequence: SequenceId, *, photo: bool) -> tuple[Role, float]:
    """primary / derived / mip / localizer / photo."""
    raw = _series_text(h)
    text = _norm(raw)
    if photo:
        return "photo", 0.9
    if "LOCALIZER" in h.image_type or _LOCALIZER.search(text):
        return "localizer", 0.9
    if sequence == "MIP":
        return "mip", 0.9
    if sequence == "ADC" or _DERIVED.search(text) or _MINIP.search(raw):
        return "derived", 0.8
    if h.image_type[:1] == ("DERIVED",) and h.modality not in ("CR", "DX"):
        return "derived", 0.7
    return "primary", 0.8


def classify_header(
    h: HeaderInfo, *, is_projection: bool | None = None, is_photo: bool | None = None
) -> Classification:
    """Classify a series from its representative header. Flags default to header-based detection."""
    projection = is_projection_info(h) if is_projection is None else is_projection
    photo = is_photo_info(h) if is_photo is None else is_photo
    sequence, s_conf = sequence_of(h, projection=projection, photo=photo)
    plane, p_conf = plane_of(h, projection)
    region, r_conf = region_of(h, sequence)
    role, o_conf = role_of(h, sequence, photo=photo)
    scores = (("sequence", s_conf), ("region", r_conf), ("plane", p_conf), ("role", o_conf))
    return Classification(
        modality=h.modality or ("OT" if photo else "unknown"),
        region=region,
        plane=plane,
        sequence=sequence,
        role=role,
        confidence=round(sum(v for _, v in scores) / len(scores), 3),
        scores=scores,
    )


def classify_series(group: SeriesGroup) -> Classification:
    """Classify a grouped series, using the grouping layer's projection/photo flags."""
    return classify_header(group.header, is_projection=group.is_projection, is_photo=group.is_photo)
