"""Domain models shared by engine and API (the API contract is generated from these)."""

from __future__ import annotations

from datetime import datetime
from enum import Enum
from typing import Any, Literal

from pydantic import BaseModel, Field


class JobStatus(str, Enum):
    queued = "queued"
    running = "running"
    done = "done"
    failed = "failed"
    cancelled = "cancelled"


class ProgressEvent(BaseModel):
    seq: int
    stage: str
    pct: float = Field(ge=0, le=100)
    msg: str = ""
    level: Literal["info", "warn", "error"] = "info"
    ts: float


class JobInfo(BaseModel):
    id: str
    kind: str
    status: JobStatus
    stage: str = ""
    pct: float = 0
    error: str | None = None
    result: dict[str, Any] | None = None
    created: datetime
    ended: datetime | None = None


class Caveat(BaseModel):
    text: str
    severity: Literal["info", "warn"] = "info"


class Measurement(BaseModel):
    """Every number shown to a user carries how it was obtained and its limits."""

    key: str
    label: str
    value: float | None
    unit: str
    method: str
    reference: str | None = None
    caveats: list[Caveat] = []


class SeriesInfo(BaseModel):
    id: str
    modality: str
    description: str = ""
    body_part: str = "unknown"
    plane: Literal["axial", "sagittal", "coronal", "oblique", "projection", "unknown"] = "unknown"
    sequence: str = "unknown"
    role: Literal["primary", "derived", "mip", "localizer", "photo", "document"] = "primary"
    n_images: int = 0
    rows: int = 0
    cols: int = 0
    pixel_spacing: tuple[float, float] | None = None
    slice_thickness: float | None = None


class StudyInfo(BaseModel):
    id: str
    adapter: str
    display_name: str = ""  # shown only in the local UI; never logged
    study_date: str = ""
    description: str = ""
    modalities: list[str] = []
    series: list[SeriesInfo] = []
    warnings: list[str] = []
