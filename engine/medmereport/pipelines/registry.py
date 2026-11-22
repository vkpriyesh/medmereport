"""Pipeline registry: name -> factory, and automatic choice for a study."""

from __future__ import annotations

from collections.abc import Callable

from medmereport.core.models import StudyInfo
from medmereport.pipelines.base import Pipeline, PipelineError

_FACTORIES: dict[str, Callable[[], Pipeline]] = {}


def register(name: str, factory: Callable[[], Pipeline]) -> None:
    _FACTORIES[name] = factory


def _builtin() -> None:
    if "brain_mr" not in _FACTORIES:
        from medmereport.pipelines.brain_mr.pipeline import BrainMRPipeline

        register("brain_mr", BrainMRPipeline)
    if "vessels" not in _FACTORIES:
        from medmereport.pipelines.vessels.pipeline import VesselsPipeline

        register("vessels", VesselsPipeline)


def names() -> list[str]:
    _builtin()
    return sorted(_FACTORIES)


def get_pipeline(name: str) -> Pipeline:
    _builtin()
    if name not in _FACTORIES:
        raise PipelineError("unknown_pipeline", f"Unknown pipeline: {name}")
    return _FACTORIES[name]()


def choose_pipeline(study: StudyInfo) -> str | None:
    """Best pipeline for ``study`` (highest ``applies`` score), or None when nothing fits."""
    _builtin()
    best, best_score = None, 0.0
    for name in sorted(_FACTORIES):
        score = _FACTORIES[name]().applies(study)
        if score > best_score:
            best, best_score = name, score
    return best
