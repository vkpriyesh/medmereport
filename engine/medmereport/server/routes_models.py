"""Model download routes (docs/API_CONTRACT.md §7).

``GET /api/models`` -> bundles with installed state, sizes, hosts, licences and what they enable (local only).
``POST /api/models/pull {bundle}`` -> JobInfo of the download job (SSE progress, cancel via DELETE /api/jobs/{id}).
The download is the only outbound network the app makes; it runs only on this explicit request, only to the
hosts pinned in ``models/registry.py``, and never when ``MEDMEREPORT_OFFLINE=1``.
"""

from __future__ import annotations

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field

from medmereport.core.models import JobInfo, JobStatus
from medmereport.models import registry as R
from medmereport.models.service import ModelsOut, listing
from medmereport.server.jobs import PULL_TARGET, JobManager


class PullIn(BaseModel):
    bundle: str = Field(pattern=r"^[a-z0-9][a-z0-9-]{0,40}$")


def make_router(jobs: JobManager) -> APIRouter:
    r = APIRouter(prefix="/api")

    @r.get("/models", response_model=ModelsOut)
    def models() -> ModelsOut:
        return listing()

    @r.post("/models/pull", response_model=JobInfo)
    def pull(body: PullIn) -> JobInfo:
        if R.offline():
            raise HTTPException(403, "Model downloads are turned off on this computer (MEDMEREPORT_OFFLINE=1).")
        if body.bundle not in R.bundles():
            raise HTTPException(404, "Unknown model bundle")
        for j in list(jobs.jobs.values()):  # one download per bundle: a second click joins the running job
            if (
                j.info.kind == "models"
                and j.info.status in (JobStatus.queued, JobStatus.running)
                and j.params.get("bundle") == body.bundle
            ):
                return j.info
        return jobs.submit("models", PULL_TARGET, {"bundle": body.bundle})

    return r
