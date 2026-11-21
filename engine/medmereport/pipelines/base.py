"""Pipeline API (PLAN.md §5): ``plan(study) -> PipelinePlan`` then ``run(ctx) -> dict``.

A pipeline runs inside a job worker process. It reports progress through a :class:`StageProgress`
(which maps per-stage percentages onto the job's 0-100 range from the plan's stage weights) and
honours cancellation because every progress call checks the job's cancel flag. Every artifact it
writes records :func:`provenance`.
"""

from __future__ import annotations

from dataclasses import dataclass, field
from datetime import UTC, datetime
from pathlib import Path
from typing import Any, ClassVar, Protocol

from medmereport import __version__
from medmereport.core.models import StudyInfo
from medmereport.segment.base import ProgressFn


class PipelineError(Exception):
    """An expected failure with a stable ``code`` (forwarded to the UI as ``JobInfo.result.code``)."""

    def __init__(self, code: str, message: str, **info: Any) -> None:
        super().__init__(message)
        self.code = code
        self.info = info


class JobLike(Protocol):
    """The subset of :class:`medmereport.server.jobs.JobContext` pipelines rely on."""

    params: dict[str, Any]
    workdir: Path

    def progress(self, stage: str, pct: float, msg: str = "", level: str = "info") -> None: ...

    def check_cancelled(self) -> None: ...


@dataclass(frozen=True)
class Stage:
    name: str
    weight: float = 1.0


@dataclass
class PipelinePlan:
    pipeline: str
    stages: list[Stage]
    notes: list[str] = field(default_factory=list)


class StageProgress:
    """Maps ``(stage, pct-within-stage)`` onto the overall job percentage."""

    def __init__(self, ctx: JobLike, plan: PipelinePlan) -> None:
        self.ctx = ctx
        total = sum(s.weight for s in plan.stages) or 1.0
        self._start: dict[str, float] = {}
        self._span: dict[str, float] = {}
        acc = 0.0
        for s in plan.stages:
            self._start[s.name] = 100.0 * acc / total
            self._span[s.name] = 100.0 * s.weight / total
            acc += s.weight
        self.warnings: list[str] = []
        self._last = 0.0

    def __call__(self, stage: str, pct: float, msg: str = "") -> None:
        start, span = self._start.get(stage), self._span.get(stage)
        if start is None or span is None:  # unknown stage name: keep the current position
            self.ctx.progress(stage, self._last, msg)
            return
        self._last = start + span * max(0.0, min(100.0, pct)) / 100.0
        self.ctx.progress(stage, self._last, msg)

    def sub(self, outer: str) -> ProgressFn:
        """A ``ProgressFn`` for a backend that reports its own 0-100 inside one of our stages."""

        def fn(stage: str, pct: float, msg: str = "") -> None:
            self(outer, pct, msg)

        return fn

    def warn(self, text: str) -> None:
        self.warnings.append(text)
        self.ctx.progress("warning", self._last, text, "warn")

    def check_cancelled(self) -> None:
        self.ctx.check_cancelled()


class Pipeline(Protocol):
    name: ClassVar[str]
    version: ClassVar[str]

    def applies(self, study: StudyInfo) -> float:
        """0 = cannot handle the study; higher = better match."""

    def plan(self, study: StudyInfo) -> PipelinePlan: ...

    def run(self, ctx: JobLike, study_dir: Path, study: StudyInfo) -> dict[str, Any]:
        """Do the work, write artifacts under ``study_dir`` and return the job result dict."""


def provenance(pipeline: Pipeline, **extra: Any) -> dict[str, Any]:
    """Provenance record attached to every artifact a pipeline writes."""
    return {
        "pipeline": pipeline.name,
        "version": pipeline.version,
        "engine": __version__,
        "created": datetime.now(UTC).isoformat(timespec="seconds"),
        **extra,
    }
