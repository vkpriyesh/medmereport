"""3D model route (docs/API_CONTRACT.md §5): ``POST /api/studies/{id}/model`` -> JobInfo."""

from __future__ import annotations

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field

from medmereport.core.models import JobInfo
from medmereport.core.studies import StudyStore
from medmereport.server.jobs import JobManager


class ModelIn(BaseModel):
    pipeline: str = Field(default="auto", pattern=r"^[a-z0-9_]{1,40}$")


def make_router(jobs: JobManager, store: StudyStore) -> APIRouter:
    r = APIRouter(prefix="/api")

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
        params = {"study_dir": str(d), "study_id": study_id, "pipeline": name}
        return jobs.submit("model", "medmereport.pipelines.brain_mr.pipeline:model_job", params)

    return r
