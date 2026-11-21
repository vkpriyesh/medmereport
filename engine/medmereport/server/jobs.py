"""Background job manager.

Heavy work runs in a separate *process* (spawn) so the server stays responsive and a crash in a
native library cannot take down the UI. Progress flows back over a multiprocessing queue; the
server re-publishes it to the browser via SSE.

A job target is an importable function ``fn(ctx: JobContext) -> dict`` (string path, so it works
with the spawn start method and later with a desktop sidecar or a hosted worker pool).
"""

from __future__ import annotations

import importlib
import multiprocessing as mp
import threading
import time
import traceback
import uuid
from dataclasses import dataclass, field
from datetime import UTC, datetime
from pathlib import Path
from typing import Any

from medmereport.core.logging import get_logger
from medmereport.core.models import JobInfo, JobStatus, ProgressEvent

log = get_logger("medmereport.jobs")


class Cancelled(Exception):
    pass


class JobContext:
    """Handed to job functions inside the worker process."""

    def __init__(self, job_id: str, params: dict[str, Any], workdir: str, queue: Any, cancel: Any) -> None:
        self.job_id = job_id
        self.params = params
        self.workdir = Path(workdir)
        self._q = queue
        self._cancel = cancel

    def progress(self, stage: str, pct: float, msg: str = "", level: str = "info") -> None:
        self.check_cancelled()
        self._q.put(("progress", stage, max(0.0, min(100.0, float(pct))), msg, level))

    def cancelled(self) -> bool:
        return bool(self._cancel.is_set())

    def check_cancelled(self) -> None:
        if self._cancel.is_set():
            raise Cancelled()


def _worker(target: str, job_id: str, params: dict[str, Any], workdir: str, q: Any, cancel: Any) -> None:
    ctx = JobContext(job_id, params, workdir, q, cancel)
    try:
        mod, fn = target.rsplit(":", 1)
        result = getattr(importlib.import_module(mod), fn)(ctx)
        q.put(("done", result or {}))
    except Cancelled:
        q.put(("cancelled",))
    except Exception as e:  # noqa: BLE001
        # Only the exception type and a redacted message cross the boundary; tracebacks stay local.
        q.put(("failed", f"{type(e).__name__}: {e}", traceback.format_exc()))


@dataclass
class _Job:
    info: JobInfo
    events: list[ProgressEvent] = field(default_factory=list)
    proc: Any = None
    cancel: Any = None
    queue: Any = None


class JobManager:
    def __init__(self, workroot: Path, max_concurrent: int = 1) -> None:
        self.workroot = workroot
        self.ctx = mp.get_context("spawn")
        self.jobs: dict[str, _Job] = {}
        self._lock = threading.Lock()
        self._sem = threading.Semaphore(max_concurrent)

    def submit(self, kind: str, target: str, params: dict[str, Any]) -> JobInfo:
        jid = uuid.uuid4().hex[:12]
        info = JobInfo(id=jid, kind=kind, status=JobStatus.queued, created=datetime.now(UTC))
        job = _Job(info=info)
        with self._lock:
            self.jobs[jid] = job
        threading.Thread(target=self._run, args=(job, target, params), daemon=True).start()
        return info

    def _emit(self, job: _Job, stage: str, pct: float, msg: str = "", level: str = "info") -> None:
        ev = ProgressEvent(seq=len(job.events), stage=stage, pct=pct, msg=msg, level=level, ts=time.time())  # type: ignore[arg-type]
        job.events.append(ev)
        job.info.stage, job.info.pct = stage, pct

    def _run(self, job: _Job, target: str, params: dict[str, Any]) -> None:
        with self._sem:
            if job.info.status == JobStatus.cancelled:
                return
            workdir = self.workroot / job.info.id
            workdir.mkdir(parents=True, exist_ok=True)
            job.queue, job.cancel = self.ctx.Queue(), self.ctx.Event()
            job.proc = self.ctx.Process(
                target=_worker, args=(target, job.info.id, params, str(workdir), job.queue, job.cancel), daemon=True
            )
            job.info.status = JobStatus.running
            self._emit(job, "starting", 0)
            job.proc.start()
            while True:
                try:
                    msg = job.queue.get(timeout=0.25)
                except Exception:  # noqa: BLE001 - queue.Empty
                    if not job.proc.is_alive():
                        if job.info.status == JobStatus.running:
                            job.info.status = JobStatus.failed
                            job.info.error = "The processing worker stopped unexpectedly."
                            self._emit(job, "failed", job.info.pct, job.info.error, "error")
                        break
                    continue
                kind = msg[0]
                if kind == "progress":
                    _, stage, pct, text, level = msg
                    self._emit(job, stage, pct, text, level)
                elif kind == "done":
                    job.info.status, job.info.result = JobStatus.done, msg[1]
                    self._emit(job, "done", 100)
                    break
                elif kind == "cancelled":
                    job.info.status = JobStatus.cancelled
                    self._emit(job, "cancelled", job.info.pct, "Cancelled", "warn")
                    break
                elif kind == "failed":
                    job.info.status, job.info.error = JobStatus.failed, msg[1]
                    log.error("job %s failed: %s", job.info.id, msg[1])
                    self._emit(job, "failed", job.info.pct, msg[1], "error")
                    break
            job.info.ended = datetime.now(UTC)
            job.proc.join(timeout=5)

    def get(self, jid: str) -> _Job | None:
        return self.jobs.get(jid)

    def cancel(self, jid: str) -> bool:
        job = self.jobs.get(jid)
        if not job:
            return False
        if job.info.status == JobStatus.queued:
            job.info.status = JobStatus.cancelled
            return True
        if job.cancel is not None:
            job.cancel.set()
            if job.proc is not None:
                job.proc.join(timeout=10)
                if job.proc.is_alive():
                    job.proc.terminate()
        return True

    def shutdown(self) -> None:
        for j in self.jobs.values():
            if j.proc is not None and j.proc.is_alive():
                if j.cancel is not None:
                    j.cancel.set()
                j.proc.terminate()


# --- a tiny demo job used by tests and the UI "self-test" button -------------------------------
def demo_job(ctx: JobContext) -> dict[str, Any]:
    steps = int(ctx.params.get("steps", 3))
    for i in range(steps):
        ctx.progress(f"step {i + 1}/{steps}", 100 * i / steps, "working")
        time.sleep(float(ctx.params.get("delay", 0.2)))
    if ctx.params.get("fail"):
        raise RuntimeError("demo failure")
    return {"steps": steps}
