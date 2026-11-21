"""Shared helpers for DICOM-layer tests (synthetic data only)."""

from __future__ import annotations

from collections.abc import Iterable
from pathlib import Path

from medmereport.dicom.read import read_header
from medmereport.dicom.series import Instance, SeriesGroup, dedupe, group_series, instance_from_header


def instances(paths: Iterable[Path]) -> list[Instance]:
    return [instance_from_header(p, read_header(p)) for p in paths]


def groups(paths: Iterable[Path]) -> list[SeriesGroup]:
    unique, _ = dedupe(instances(paths))
    return group_series(unique)
