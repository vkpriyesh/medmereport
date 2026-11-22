"""3D model routes (docs/API_CONTRACT.md §5-§6).

``POST /api/studies/{id}/model {pipeline?, backend?}`` -> JobInfo; ``GET /api/studies/{id}/model/options``
lists the pipelines that apply to the study (score > 0) with their available backends.
"""

from __future__ import annotations

from typing import Literal

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field

from medmereport.core.models import JobInfo
from medmereport.core.studies import StudyStore
from medmereport.server.jobs import JobManager


class ModelIn(BaseModel):
    pipeline: str = Field(default="auto", pattern=r"^[a-z0-9_]{1,40}$")
    backend: Literal["auto", "classical", "totalseg"] = "auto"


class PipelineOption(BaseModel):
    pipeline: str
    score: float
    backends: list[str]  # usable right now (no network); "auto" is always accepted as well


class ModelOptions(BaseModel):
    auto: str | None  # what pipeline "auto" would pick
    options: list[PipelineOption]


def _backends(pipeline: object) -> list[str]:
    fn = getattr(pipeline, "backends", None)
    if fn is None:
        return ["classical"]
    try:
        avail: dict[str, bool] = fn()
    except Exception:  # noqa: BLE001 - an optional backend probe must not break the listing
        return ["classical"]
    return [name for name, ok in avail.items() if ok]


def make_router(jobs: JobManager, store: StudyStore) -> APIRouter:
    r = APIRouter(prefix="/api")

    @r.get("/studies/{study_id}/model/options", response_model=ModelOptions)
    def model_options(study_id: str) -> ModelOptions:
        from medmereport.pipelines.registry import choose_pipeline, get_pipeline, names

        study = store.get(study_id) if store.dir_of(study_id) else None
        if study is None:
            raise HTTPException(404, "Study not found")
        opts = []
        for name in names():
            p = get_pipeline(name)
            score = float(p.applies(study))
            if score > 0:
                opts.append(PipelineOption(pipeline=name, score=round(score, 3), backends=_backends(p)))
        opts.sort(key=lambda o: (-o.score, o.pipeline))
        return ModelOptions(auto=choose_pipeline(study), options=opts)

    @r.post("/studies/{study_id}/model", response_model=JobInfo)
    def start_model(study_id: str, body: ModelIn | None = None) -> JobInfo:
        from medmereport.pipelines.registry import choose_pipeline, names

        body = body or ModelIn()
        d = store.dir_of(study_id)
        study = store.get(study_id) if d else None
        if d is None or study is None:
            raise HTTPException(404, "Study not found")
        name = body.pipeline
        if name == "auto":
            chosen = choose_pipeline(study)
            if chosen is None:
                raise HTTPException(422, "No 3D pipeline fits this study yet")
            name = chosen
        elif name not in names():
            raise HTTPException(422, "Unknown pipeline")
        if body.backend != "auto":
            from medmereport.pipelines.registry import get_pipeline

            if body.backend not in _backends(get_pipeline(name)):
                raise HTTPException(422, "This backend is not available for this pipeline")
        params = {"study_dir": str(d), "study_id": study_id, "pipeline": name, "backend": body.backend}
        return jobs.submit("model", "medmereport.pipelines.brain_mr.pipeline:model_job", params)

    return r
