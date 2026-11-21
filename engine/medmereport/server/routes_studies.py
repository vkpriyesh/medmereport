"""Import + study routes (docs/API_CONTRACT.md §2–3)."""

from __future__ import annotations

from pathlib import Path

from fastapi import APIRouter, HTTPException
from fastapi.responses import FileResponse
from pydantic import BaseModel, Field

from medmereport.core.models import JobInfo, StudyInfo
from medmereport.core.studies import StudyStore
from medmereport.server.jobs import JobManager


class InspectIn(BaseModel):
    path: str = Field(min_length=1)


class InspectOut(BaseModel):
    adapter: str | None
    label: str
    encrypted: bool = False
    confidence: float = 0
    notes: list[str] = []


class ImportIn(BaseModel):
    path: str = Field(min_length=1)
    password: str | None = Field(default=None, max_length=512)
    remember: bool = False


def make_router(jobs: JobManager, store: StudyStore) -> APIRouter:
    r = APIRouter(prefix="/api")

    @r.post("/inspect", response_model=InspectOut)
    def inspect(body: InspectIn) -> InspectOut:
        from medmereport.ingest.registry import detect_best

        src = Path(body.path).expanduser()
        if not src.exists():
            raise HTTPException(404, "That folder or file doesn't exist")
        det, adapter = detect_best(src)
        if det is None or adapter is None:
            return InspectOut(adapter=None, label="Nothing recognisable found", notes=["unsupported"])
        return InspectOut(
            adapter=det.adapter,
            label=getattr(adapter, "label", det.adapter),
            encrypted=det.encrypted,
            confidence=det.confidence,
            notes=det.notes,
        )

    @r.post("/import", response_model=JobInfo)
    def start_import(body: ImportIn) -> JobInfo:
        src = Path(body.path).expanduser()
        if not src.exists():
            raise HTTPException(404, "That folder or file doesn't exist")
        study_id = store.new_id()
        target_dir = store.create_dir(study_id, body.remember)
        params = {
            "src": str(src),
            "study_id": study_id,
            "out": str(target_dir),
            "password": body.password,
        }
        return jobs.submit("import", "medmereport.pipelines.importer:import_job", params)

    @r.get("/studies", response_model=list[StudyInfo])
    def studies() -> list[StudyInfo]:
        return store.list()

    @r.get("/studies/{study_id}", response_model=StudyInfo)
    def study(study_id: str) -> StudyInfo:
        s = store.get(study_id)
        if not s:
            raise HTTPException(404, "Study not found")
        return s

    @r.delete("/studies/{study_id}")
    def delete_study(study_id: str) -> dict[str, bool]:
        if not store.delete(study_id):
            raise HTTPException(404, "Study not found")
        return {"ok": True}

    @r.get("/studies/{study_id}/files/{rel:path}", include_in_schema=False)
    def study_file(study_id: str, rel: str) -> FileResponse:
        p = store.resolve_file(study_id, rel)
        if not p:
            raise HTTPException(404, "Not found")
        return FileResponse(p, headers={"Cache-Control": "private, max-age=3600"})

    return r
