"""Study artifact store.

A study lives in exactly one directory:
  * ``<session temp>/studies/<id>`` (default; deleted when the app closes), or
  * ``<workspace>/<id>`` when the user opted to remember it.
``study.json`` (a StudyInfo) is the index; artifacts sit next to it (series/…, model/…).
"""

from __future__ import annotations

import json
import shutil
import uuid
from pathlib import Path

from medmereport.core.models import StudyInfo
from medmereport.core.paths import workspace_dir


class StudyStore:
    def __init__(self, session_root: Path) -> None:
        self.session_root = session_root / "studies"
        self.session_root.mkdir(parents=True, exist_ok=True)

    @staticmethod
    def new_id() -> str:
        return uuid.uuid4().hex[:12]

    def roots(self) -> list[Path]:
        return [self.session_root, workspace_dir()]

    def create_dir(self, study_id: str, remember: bool) -> Path:
        base = workspace_dir() if remember else self.session_root
        d = base / study_id
        d.mkdir(parents=True, exist_ok=False)
        return d

    def dir_of(self, study_id: str) -> Path | None:
        if not study_id.isalnum():
            return None
        for r in self.roots():
            d = r / study_id
            if (d / "study.json").is_file():
                return d
        return None

    def get(self, study_id: str) -> StudyInfo | None:
        d = self.dir_of(study_id)
        if not d:
            return None
        return StudyInfo.model_validate_json((d / "study.json").read_text(encoding="utf-8"))

    def list(self) -> list[StudyInfo]:
        out = []
        for r in self.roots():
            for d in sorted(r.iterdir()) if r.exists() else []:
                f = d / "study.json"
                if f.is_file():
                    try:
                        out.append(StudyInfo.model_validate_json(f.read_text(encoding="utf-8")))
                    except ValueError:
                        continue
        return out

    def delete(self, study_id: str) -> bool:
        d = self.dir_of(study_id)
        if not d:
            return False
        shutil.rmtree(d, ignore_errors=True)
        return True

    def resolve_file(self, study_id: str, rel: str) -> Path | None:
        """Safely resolve an artifact path inside a study dir (no traversal, files only)."""
        d = self.dir_of(study_id)
        if not d or not rel or "\\" in rel or rel.startswith("/") or ".." in rel.split("/"):
            return None
        p = (d / rel).resolve()
        base = d.resolve()
        if base not in p.parents or not p.is_file() or p.name == "study.json":
            return None
        return p


def write_study(d: Path, info: StudyInfo) -> None:
    (d / "study.json").write_text(info.model_dump_json(indent=1), encoding="utf-8")


def write_json(p: Path, obj: object) -> None:
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(json.dumps(obj, separators=(",", ":")), encoding="utf-8")
