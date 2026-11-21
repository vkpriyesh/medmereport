from pathlib import Path


class FakeCtx:
    def __init__(self, params, workdir: Path, cancel_after: int | None = None):
        self.params = params
        self.workdir = workdir
        self.events = []
        self.cancel_after = cancel_after

    def progress(self, stage, pct, msg="", level="info"):
        self.check_cancelled()
        self.events.append((stage, pct, msg, level))

    def check_cancelled(self):
        from medmereport.server.jobs import Cancelled

        if self.cancel_after is not None and len(self.events) >= self.cancel_after:
            raise Cancelled()
