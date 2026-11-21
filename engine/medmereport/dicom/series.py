"""Group DICOM image instances into display/processing series.

A DICOM SeriesInstanceUID is not a reliable "one stack" unit: scanners put multi-echo, multi-b-value
diffusion, 3-plane localizers and rotating MIPs under one UID. So instances are first bucketed by
SeriesInstanceUID and then split by everything that makes a stack non-uniform (orientation, matrix
size, echo time, b-value, magnitude/phase). A UID whose images each have a different orientation is
recognised as a rotating projection and kept together in acquisition order.

All geometry is DICOM patient space (LPS, millimetres).
"""

from __future__ import annotations

from collections import defaultdict
from collections.abc import Iterable, Sequence
from dataclasses import dataclass, field, replace
from pathlib import Path

import numpy as np
from pydicom.dataset import Dataset

from medmereport.dicom.read import element_number, is_color

Vec3 = tuple[float, float, float]
Orientation = tuple[float, float, float, float, float, float]

_PROJECTION_MODALITIES = frozenset({"CR", "DX", "MG", "XA", "RF", "IO", "PX"})
_PHOTO_MODALITIES = frozenset({"XC", "ES", "GM", "SM", "OP"})
_SC_PREFIX = "1.2.840.10008.5.1.4.1.1.7"
_VL_PREFIX = "1.2.840.10008.5.1.4.1.1.77."
_COMPLEX_PARTS = ("MAGNITUDE", "PHASE", "REAL", "IMAGINARY", "M", "P", "R", "I")
_SIEMENS_BVALUE = 0x0019100C
_GE_BVALUE = 0x00431039
_PHILIPS_BVALUE = 0x20011003
_IOP_DECIMALS = 2  # orientation differences below ~0.5 degrees are numerical noise
_ROTATING_MIN_ORIENTATIONS = 4
_ROTATING_MAX_MEDIAN_SIZE = 2
_MIN_VOLUME_SLICES = 3
_SPACING_TOLERANCE = 0.1  # relative deviation from the median that still counts as uniform


@dataclass(frozen=True)
class HeaderInfo:
    """Representative, non-identifying header fields of an instance (or a series)."""

    modality: str = ""
    sop_class_uid: str = ""
    study_uid: str = ""
    series_uid: str = ""
    series_number: int | None = None
    series_description: str = ""
    protocol_name: str = ""
    body_part: str = ""
    manufacturer: str = ""
    image_type: tuple[str, ...] = ()
    scanning_sequence: str = ""
    sequence_variant: str = ""
    sequence_name: str = ""
    echo_time: float | None = None
    repetition_time: float | None = None
    inversion_time: float | None = None
    b_value: float | None = None
    rows: int = 0
    cols: int = 0
    pixel_spacing: tuple[float, float] | None = None
    slice_thickness: float | None = None
    photometric: str = ""
    samples_per_pixel: int = 1
    number_of_frames: int = 1
    view_position: str = ""
    orientation: Orientation | None = None
    contrast_agent: str = ""


@dataclass(frozen=True)
class Geometry:
    """Voxel grid of a volume ``[z, y, x]`` in LPS.

    * ``origin``: LPS centre of voxel (x=0, y=0, z=0), i.e. first pixel of the first sorted slice.
    * ``spacing``: ``(sx, sy, sz)`` mm along array axes x (columns), y (rows), z (slices); ``sz`` is
      the median centre-to-centre slice distance.
    * ``direction``: 3x3 row-major matrix whose *columns* are the LPS unit vectors of axes x, y, z
      (SimpleITK convention). z is the slice normal, so the matrix is right-handed.
    """

    origin: Vec3
    spacing: Vec3
    direction: tuple[float, float, float, float, float, float, float, float, float]

    def affine(self) -> np.ndarray:
        """4x4 matrix mapping homogeneous index ``(x, y, z, 1)`` to LPS millimetres."""
        d = np.array(self.direction, float).reshape(3, 3)
        m = np.eye(4)
        m[:3, :3] = d * np.array(self.spacing, float)
        m[:3, 3] = self.origin
        return m


@dataclass(frozen=True)
class Instance:
    """One readable image object found while scanning."""

    path: Path
    sop_uid: str
    info: HeaderInfo
    instance_number: int | None = None
    position: Vec3 | None = None
    frame_positions: tuple[Vec3, ...] = ()  # enhanced multi-frame only


@dataclass
class SeriesGroup:
    """A uniform stack (or projection/photo set) ready for loading.

    ``files`` are sorted along the slice normal for volumes (ascending normal coordinate, so for an
    axial stack inferior to superior) and in acquisition order otherwise. For a multi-frame volume
    ``files`` has one entry and ``frame_order`` lists frame indices in the same sorted order.
    """

    id: str
    series_uid: str
    files: list[Path]
    header: HeaderInfo
    geometry: Geometry | None
    n: int
    positions: list[Vec3] = field(default_factory=list)
    frame_order: list[int] = field(default_factory=list)
    is_volume: bool = False
    is_multiframe: bool = False
    is_projection: bool = False
    is_photo: bool = False
    uniform_spacing: bool = True


# ---------------------------------------------------------------------------------------- headers


def _text(ds: Dataset, keyword: str) -> str:
    value = ds.get(keyword, "")
    if value is None:
        return ""
    if isinstance(value, Sequence) and not isinstance(value, str | bytes):
        return "\\".join(str(v) for v in value)
    return str(value).strip()


def _num(ds: Dataset, keyword: str) -> float | None:
    value = ds.get(keyword)
    if value is None or value == "":
        return None
    try:
        return float(value[0] if isinstance(value, Sequence) and not isinstance(value, str) else value)
    except (TypeError, ValueError, IndexError):
        return None


def _int(ds: Dataset, keyword: str) -> int | None:
    v = _num(ds, keyword)
    return None if v is None else int(v)


def _floats(value: object, n: int) -> tuple[float, ...] | None:
    if value is None or not isinstance(value, Sequence) or isinstance(value, str | bytes) or len(value) != n:
        return None
    try:
        return tuple(float(v) for v in value)
    except (TypeError, ValueError):
        return None


def _functional(ds: Dataset, macro: str, keyword: str, frame: int | None = None) -> object:
    """Look up ``macro[0].keyword`` in the per-frame (if ``frame``) then shared functional groups."""
    sources = []
    if frame is not None:
        per = ds.get("PerFrameFunctionalGroupsSequence")
        if per is not None and frame < len(per):
            sources.append(per[frame])
    shared = ds.get("SharedFunctionalGroupsSequence")
    if shared:
        sources.append(shared[0])
    for group in sources:
        seq = group.get(macro)
        if seq and keyword in seq[0]:
            return seq[0].get(keyword)
    return None


def _b_value(ds: Dataset) -> float | None:
    for tag in (0x00189087, _SIEMENS_BVALUE, _PHILIPS_BVALUE):
        v = element_number(ds, tag)
        if v is not None:
            return v
    ge = element_number(ds, _GE_BVALUE)
    return None if ge is None else float(int(ge) % 100_000)


def header_info(ds: Dataset) -> HeaderInfo:
    """Extract the non-identifying fields used for grouping and classification."""
    iop = _floats(ds.get("ImageOrientationPatient"), 6)
    if iop is None:
        iop = _floats(_functional(ds, "PlaneOrientationSequence", "ImageOrientationPatient", 0), 6)
    spacing = _floats(ds.get("PixelSpacing"), 2)
    if spacing is None:
        spacing = _floats(_functional(ds, "PixelMeasuresSequence", "PixelSpacing", 0), 2)
    if spacing is None:
        spacing = _floats(ds.get("ImagerPixelSpacing"), 2)
    thickness = _num(ds, "SliceThickness")
    if thickness is None:
        t = _functional(ds, "PixelMeasuresSequence", "SliceThickness", 0)
        thickness = None if t is None else float(t)  # type: ignore[arg-type]
    image_type = tuple(str(v).strip().upper() for v in (ds.get("ImageType") or ()) if str(v).strip())
    return HeaderInfo(
        modality=_text(ds, "Modality").upper(),
        sop_class_uid=_text(ds, "SOPClassUID"),
        study_uid=_text(ds, "StudyInstanceUID"),
        series_uid=_text(ds, "SeriesInstanceUID"),
        series_number=_int(ds, "SeriesNumber"),
        series_description=_text(ds, "SeriesDescription"),
        protocol_name=_text(ds, "ProtocolName"),
        body_part=_text(ds, "BodyPartExamined").upper(),
        manufacturer=_text(ds, "Manufacturer"),
        image_type=image_type,
        scanning_sequence=_text(ds, "ScanningSequence").upper(),
        sequence_variant=_text(ds, "SequenceVariant").upper(),
        sequence_name=_text(ds, "SequenceName"),
        echo_time=_num(ds, "EchoTime"),
        repetition_time=_num(ds, "RepetitionTime"),
        inversion_time=_num(ds, "InversionTime"),
        b_value=_b_value(ds),
        rows=_int(ds, "Rows") or 0,
        cols=_int(ds, "Columns") or 0,
        pixel_spacing=None if spacing is None else (spacing[0], spacing[1]),
        slice_thickness=thickness,
        photometric=_text(ds, "PhotometricInterpretation").upper(),
        samples_per_pixel=3 if is_color(ds) else 1,
        number_of_frames=_int(ds, "NumberOfFrames") or 1,
        view_position=_text(ds, "ViewPosition").upper(),
        orientation=None if iop is None else (iop[0], iop[1], iop[2], iop[3], iop[4], iop[5]),
        contrast_agent=_text(ds, "ContrastBolusAgent"),
    )


def instance_from_header(path: Path, ds: Dataset) -> Instance:
    """Build an :class:`Instance` from a header-only dataset."""
    info = header_info(ds)
    pos = _floats(ds.get("ImagePositionPatient"), 3)
    frame_positions: list[Vec3] = []
    if info.number_of_frames > 1:
        for i in range(info.number_of_frames):
            fp = _floats(_functional(ds, "PlanePositionSequence", "ImagePositionPatient", i), 3)
            if fp is None:
                frame_positions = []
                break
            frame_positions.append((fp[0], fp[1], fp[2]))
    return Instance(
        path=path,
        sop_uid=_text(ds, "SOPInstanceUID"),
        info=info,
        instance_number=_int(ds, "InstanceNumber"),
        position=None if pos is None else (pos[0], pos[1], pos[2]),
        frame_positions=tuple(frame_positions),
    )


# --------------------------------------------------------------------------------------- grouping


def _normal(iop: Orientation) -> np.ndarray:
    n = np.cross(np.array(iop[:3], float), np.array(iop[3:], float))
    norm = float(np.linalg.norm(n))
    return n / norm if norm > 0 else np.array([0.0, 0.0, 1.0])


def _rounded_iop(info: HeaderInfo) -> Orientation | None:
    if info.orientation is None:
        return None
    r = tuple(round(v, _IOP_DECIMALS) + 0.0 for v in info.orientation)
    return (r[0], r[1], r[2], r[3], r[4], r[5])


def _complex_part(info: HeaderInfo) -> str:
    for value in info.image_type[2:]:
        if value in _COMPLEX_PARTS:
            return value[0]
    return ""


def _base_key(inst: Instance) -> tuple[object, ...]:
    """Everything except orientation that must be uniform within a stack."""
    i = inst.info
    multiframe_id = inst.sop_uid if i.number_of_frames > 1 else ""
    echo = None if i.echo_time is None else round(i.echo_time, 2)
    b = None if i.b_value is None else round(i.b_value)
    return (i.rows, i.cols, echo, b, _complex_part(i), multiframe_id, i.samples_per_pixel)


def is_projection_info(info: HeaderInfo) -> bool:
    """Projection radiograph or derived projection (MIP) by modality / ImageType."""
    if info.modality in _PROJECTION_MODALITIES:
        return True
    return any("PROJECTION" in t or t == "MIP" for t in info.image_type)


def is_photo_info(info: HeaderInfo) -> bool:
    """Secondary capture, visible-light photo, or a colour image without patient geometry."""
    if info.sop_class_uid.startswith(_SC_PREFIX) or info.sop_class_uid.startswith(_VL_PREFIX):
        return True
    if info.modality in _PHOTO_MODALITIES:
        return True
    return info.samples_per_pixel > 1 and info.orientation is None


def _acquisition_order(items: Iterable[Instance]) -> list[Instance]:
    return sorted(items, key=lambda x: (x.instance_number if x.instance_number is not None else 1 << 30, x.path.name))


def _split_series(insts: list[Instance]) -> list[tuple[list[Instance], bool]]:
    """Split one SeriesInstanceUID bucket into uniform parts. Returns ``(instances, rotating)``."""
    by_base: dict[tuple[object, ...], list[Instance]] = defaultdict(list)
    for inst in insts:
        by_base[_base_key(inst)].append(inst)
    parts: list[tuple[list[Instance], bool]] = []
    for members in by_base.values():
        by_iop: dict[Orientation | None, list[Instance]] = defaultdict(list)
        for inst in members:
            by_iop[_rounded_iop(inst.info)].append(inst)
        sizes = sorted(len(v) for v in by_iop.values())
        rotating = len(by_iop) >= _ROTATING_MIN_ORIENTATIONS and sizes[len(sizes) // 2] <= _ROTATING_MAX_MEDIAN_SIZE
        if rotating:
            parts.append((_acquisition_order(members), True))
        else:
            parts.extend((v, False) for v in by_iop.values())
    return parts


def _median_spacing(coords: Sequence[float]) -> tuple[float, bool]:
    diffs = np.diff(np.asarray(coords, float))
    med = float(np.median(diffs))
    uniform = bool(np.all(np.abs(diffs - med) <= _SPACING_TOLERANCE * max(med, 1e-6)))
    return med, uniform


def _geometry(info: HeaderInfo, origin: Vec3, slice_spacing: float) -> Geometry | None:
    if info.orientation is None:
        return None
    row = np.array(info.orientation[:3], float)
    col = np.array(info.orientation[3:], float)
    normal = _normal(info.orientation)
    d = np.column_stack([row, col, normal])
    ps = info.pixel_spacing or (1.0, 1.0)
    direction = tuple(float(v) for v in d.reshape(-1))
    return Geometry(
        origin=origin,
        spacing=(float(ps[1]), float(ps[0]), float(slice_spacing)),
        direction=(
            direction[0], direction[1], direction[2],
            direction[3], direction[4], direction[5],
            direction[6], direction[7], direction[8],
        ),
    )  # fmt: skip


def _default_thickness(info: HeaderInfo) -> float:
    return info.slice_thickness if info.slice_thickness and info.slice_thickness > 0 else 1.0


def _group_multiframe(inst: Instance, rotating: bool) -> SeriesGroup:
    info = inst.info
    n = info.number_of_frames
    projection = rotating or is_projection_info(info)
    photo = is_photo_info(info)
    base = SeriesGroup(
        id="",
        series_uid=info.series_uid,
        files=[inst.path],
        header=info,
        geometry=None,
        n=n,
        frame_order=list(range(n)),
        is_multiframe=True,
        is_projection=projection,
        is_photo=photo,
    )
    if projection or photo or info.orientation is None or len(inst.frame_positions) != n:
        return base
    normal = _normal(info.orientation)
    coords = [float(np.dot(p, normal)) for p in inst.frame_positions]
    order = sorted(range(n), key=lambda k: coords[k])
    sorted_coords = [coords[k] for k in order]
    if n < _MIN_VOLUME_SLICES or len(set(np.round(sorted_coords, 3))) != n:
        return base
    spacing, uniform = _median_spacing(sorted_coords)
    positions = [inst.frame_positions[k] for k in order]
    return replace(
        base,
        frame_order=order,
        positions=positions,
        geometry=_geometry(info, positions[0], spacing),
        is_volume=True,
        uniform_spacing=uniform,
    )


def _group_single_frames(insts: list[Instance], rotating: bool) -> SeriesGroup:
    info = insts[0].info
    projection = rotating or is_projection_info(info)
    photo = is_photo_info(info)
    has_geometry = info.orientation is not None and all(i.position is not None for i in insts)
    if projection or photo or not has_geometry:
        ordered = _acquisition_order(insts)
        return SeriesGroup(
            id="",
            series_uid=info.series_uid,
            files=[i.path for i in ordered],
            header=ordered[0].info,
            geometry=None,
            n=len(ordered),
            is_projection=projection,
            is_photo=photo,
        )
    assert info.orientation is not None
    normal = _normal(info.orientation)

    def coord(i: Instance) -> float:
        assert i.position is not None
        return float(np.dot(i.position, normal))

    ordered = sorted(insts, key=lambda i: (coord(i), i.instance_number or 0))
    coords = [coord(i) for i in ordered]
    positions = [i.position for i in ordered if i.position is not None]
    distinct = len(set(np.round(coords, 3))) == len(coords)
    if len(ordered) >= 2 and distinct:
        spacing, uniform = _median_spacing(coords)
    else:
        spacing, uniform = _default_thickness(info), True
    return SeriesGroup(
        id="", series_uid=info.series_uid, files=[i.path for i in ordered], header=ordered[0].info,
        geometry=_geometry(info, positions[0], spacing) if distinct else None, n=len(ordered), positions=positions,
        is_volume=distinct and len(ordered) >= _MIN_VOLUME_SLICES, uniform_spacing=uniform,
    )  # fmt: skip


def dedupe(instances: Iterable[Instance]) -> tuple[list[Instance], int]:
    """Drop repeated SOPInstanceUIDs (same image copied twice on a disc). Returns (unique, n_dropped)."""
    seen: set[str] = set()
    unique: list[Instance] = []
    dropped = 0
    for inst in instances:
        key = inst.sop_uid or f"path:{inst.path}"
        if key in seen:
            dropped += 1
            continue
        seen.add(key)
        unique.append(inst)
    return unique, dropped


def group_series(instances: Iterable[Instance]) -> list[SeriesGroup]:
    """Group (already de-duplicated) instances into :class:`SeriesGroup` objects with stable ids ``s001…``."""
    buckets: dict[str, list[Instance]] = defaultdict(list)
    for inst in instances:
        buckets[inst.info.series_uid or f"nouid:{inst.info.study_uid}:{inst.info.series_number}"].append(inst)
    groups: list[SeriesGroup] = []
    for insts in buckets.values():
        for part, rotating in _split_series(insts):
            multiframe = [i for i in part if i.info.number_of_frames > 1]
            if multiframe:
                groups.extend(_group_multiframe(i, rotating) for i in multiframe)
            singles = [i for i in part if i.info.number_of_frames <= 1]
            if singles:
                groups.append(_group_single_frames(singles, rotating))
    groups.sort(key=_group_sort_key)
    for k, g in enumerate(groups, start=1):
        g.id = f"s{k:03d}"
    return groups


def _group_sort_key(g: SeriesGroup) -> tuple[object, ...]:
    h = g.header
    return (
        h.series_number if h.series_number is not None else 1 << 30,
        h.series_uid,
        h.echo_time or 0.0,
        h.b_value or 0.0,
        h.orientation or (),
        g.files[0].name if g.files else "",
    )
