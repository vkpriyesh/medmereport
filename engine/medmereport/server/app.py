"""FastAPI application factory. The OpenAPI schema generated here is the UI/engine contract."""

from __future__ import annotations

import asyncio
import importlib.util
import json
import platform
from collections.abc import AsyncIterator
from contextlib import asynccontextmanager
from pathlib import Path
from typing import Any

from fastapi import APIRouter, FastAPI, HTTPException, Request
from fastapi.responses import FileResponse, JSONResponse, Response, StreamingResponse
from pydantic import BaseModel

from medmereport import __version__
from medmereport.core.models import JobInfo, JobStatus, ProgressEvent
from medmereport.core.paths import SessionTemp
from medmereport.server.jobs import JobManager
from medmereport.server.security import COOKIE, LocalSecurity

STATIC = Path(__file__).parent / "static"


class SessionIn(BaseModel):
    token: str


class Health(BaseModel):
    ok: bool
    version: str


class Capabilities(BaseModel):
    version: str
    python: str
    platform: str
    onnxruntime: bool
    totalsegmentator: bool
    offline: bool = True


class DemoJobIn(BaseModel):
    steps: int = 3
    delay: float = 0.2
    fail: bool = False


def create_app(*, port: int, token: str, session: SessionTemp, dev_origins: tuple[str, ...] = ()) -> FastAPI:
    holder: dict[str, JobManager] = {}

    @asynccontextmanager
    async def lifespan(_: FastAPI) -> AsyncIterator[None]:
        yield
        if "jobs" in holder:
            holder["jobs"].shutdown()

    app = FastAPI(
        lifespan=lifespan,
        title="medmereport engine",
        version=__version__,
        docs_url=None,
        redoc_url=None,
        openapi_url="/api/openapi.json",
    )
    jobs = JobManager(session.subdir("jobs"))
    holder["jobs"] = jobs
    app.state.jobs = jobs
    app.state.session = session
    sec = LocalSecurity(app, port=port, token=token, dev_origins=dev_origins)  # wraps below
    api = APIRouter(prefix="/api")

    @api.get("/health", response_model=Health)
    def health() -> Health:
        return Health(ok=True, version=__version__)

    @api.post("/session")
    def session_login(body: SessionIn) -> Response:
        if not sec.token_matches(body.token):
            raise HTTPException(status_code=401, detail="Invalid session key")
        resp = JSONResponse({"ok": True})
        resp.set_cookie(COOKIE, token, httponly=True, samesite="strict", secure=False, path="/")
        return resp

    @api.get("/capabilities", response_model=Capabilities)
    def capabilities() -> Capabilities:
        return Capabilities(
            version=__version__,
            python=platform.python_version(),
            platform=f"{platform.system()} {platform.machine()}",
            onnxruntime=importlib.util.find_spec("onnxruntime") is not None,
            totalsegmentator=importlib.util.find_spec("totalsegmentator") is not None,
        )

    @api.post("/jobs/demo", response_model=JobInfo)
    def demo(body: DemoJobIn) -> JobInfo:
        return jobs.submit("demo", "medmereport.server.jobs:demo_job", body.model_dump())

    @api.get("/jobs/{job_id}", response_model=JobInfo)
    def job_get(job_id: str) -> JobInfo:
        j = jobs.get(job_id)
        if not j:
            raise HTTPException(404, "No such job")
        return j.info

    @api.delete("/jobs/{job_id}")
    def job_cancel(job_id: str) -> dict[str, bool]:
        if not jobs.cancel(job_id):
            raise HTTPException(404, "No such job")
        return {"ok": True}

    @api.get("/jobs/{job_id}/history", response_model=list[ProgressEvent])
    def job_history(job_id: str) -> list[ProgressEvent]:
        j = jobs.get(job_id)
        if not j:
            raise HTTPException(404, "No such job")
        return list(j.events)

    @api.get("/jobs/{job_id}/events")
    async def job_events(job_id: str, request: Request) -> StreamingResponse:
        j = jobs.get(job_id)
        if not j:
            raise HTTPException(404, "No such job")

        async def stream() -> AsyncIterator[str]:
            sent = 0
            while True:
                if await request.is_disconnected():
                    return
                evs = j.events[sent:]
                for ev in evs:
                    yield f"event: progress\ndata: {ev.model_dump_json()}\n\n"
                sent += len(evs)
                if j.info.status in (JobStatus.done, JobStatus.failed, JobStatus.cancelled) and sent >= len(j.events):
                    yield f"event: end\ndata: {j.info.model_dump_json()}\n\n"
                    return
                await asyncio.sleep(0.15)

        return StreamingResponse(stream(), media_type="text/event-stream", headers={"X-Accel-Buffering": "no"})

    app.include_router(api)
    from medmereport.core.studies import StudyStore
    from medmereport.server.routes_fs import router as fs_router
    from medmereport.server.routes_studies import make_router as studies_router

    store = StudyStore(session.path)
    app.state.store = store
    app.include_router(fs_router)
    app.include_router(studies_router(jobs, store))
    app.state.register_router = app.include_router  # extension point for feature routers

    # ---- static SPA ----
    @app.get("/{full_path:path}", include_in_schema=False)
    def spa(full_path: str) -> Response:
        if full_path.startswith("api/"):
            raise HTTPException(404)
        if not STATIC.exists():
            return JSONResponse({"detail": "UI not built. Run `npm run build` in web/."}, status_code=503)
        candidate = (STATIC / full_path).resolve()
        if full_path and candidate.is_file() and STATIC.resolve() in candidate.parents:
            headers = {"Cache-Control": "public, max-age=31536000, immutable"} if "/assets/" in f"/{full_path}" else {}
            return FileResponse(candidate, headers=headers)
        return FileResponse(STATIC / "index.html", headers={"Cache-Control": "no-store"})

    app.state.security = sec
    return app


def secure_asgi(app: FastAPI) -> Any:
    """Return the app wrapped by the security middleware (outermost layer)."""
    sec: LocalSecurity = app.state.security
    sec.app = app
    return sec


def openapi_json(app: FastAPI) -> str:
    return json.dumps(app.openapi(), indent=1)
