"""Fake fusion + segmentation for model-job tests (imported by the spawned worker via
MEDMEREPORT_TEST_PIPELINE_HOOKS). Synthetic phantom only."""

from __future__ import annotations

from tests.geometry.phantom import make_phantom

_P = {}


def _phantom():
    if "p" not in _P:
        _P["p"] = make_phantom(2.0)
    return _P["p"]


def build_volumes(study_dir, study, progress):
    progress("fuse", 50, "phantom")
    p = _phantom()
    return p.reference, p.extras


class FakeBackend:
    name = "fake-phantom"
    licence = "CC0 (synthetic)"

    def available(self):
        return True

    def segment(self, reference, extra, progress):
        progress("segment", 100, "")
        return _phantom().labels


def best_backend(reference):
    return FakeBackend()
