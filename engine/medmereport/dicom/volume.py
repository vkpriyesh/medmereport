"""Load pixel data for a :class:`~medmereport.dicom.series.SeriesGroup`."""

from __future__ import annotations

import numpy as np

from medmereport.core.logging import get_logger
from medmereport.dicom.read import DicomReadError, decode_frames, read_dataset, to_grey
from medmereport.dicom.series import Geometry, SeriesGroup

log = get_logger(__name__)


def load_volume(group: SeriesGroup) -> tuple[np.ndarray, Geometry]:
    """Return ``(volume, geometry)``: float32 ``[z, y, x]`` in modality units, slices sorted along the normal.

    A slice that fails to decode is filled with the volume minimum (and logged) rather than aborting.
    Raises ``ValueError`` if the group is not a regular volume.
    """
    if not group.is_volume or group.geometry is None:
        raise ValueError("series is not a volume; use load_frames()")
    rows, cols = group.header.rows, group.header.cols
    if group.is_multiframe:
        frames = decode_frames(read_dataset(group.files[0]))
        vol = np.stack([to_grey(frames[k]) for k in group.frame_order]).astype(np.float32, copy=False)
        return vol, group.geometry
    vol = np.empty((group.n, rows, cols), np.float32)
    failed: list[int] = []
    for z, path in enumerate(group.files):
        try:
            frame = to_grey(decode_frames(read_dataset(path))[0])
        except DicomReadError:
            failed.append(z)
            continue
        if frame.shape != (rows, cols):
            failed.append(z)
            continue
        vol[z] = frame
    if failed:
        log.warning("series %s: %d of %d slices could not be decoded", group.id, len(failed), group.n)
        good = np.setdiff1d(np.arange(group.n), failed)
        vol[failed] = float(np.min(vol[good])) if good.size else 0.0
    return vol, group.geometry


def load_frames(group: SeriesGroup) -> list[np.ndarray]:
    """Return every frame of the group as a 2D float32 array (colour collapsed to luminance).

    Used for projections, photos and irregular stacks. Frame sizes may differ. Undecodable files are
    skipped (and logged).
    """
    out: list[np.ndarray] = []
    skipped = 0
    for path in group.files:
        try:
            frames = decode_frames(read_dataset(path))
        except DicomReadError:
            skipped += 1
            continue
        order = group.frame_order if group.is_multiframe and group.frame_order else range(frames.shape[0])
        out.extend(to_grey(frames[k]) for k in order)
    if skipped:
        log.warning("series %s: %d files could not be decoded", group.id, skipped)
    return out
