from pathlib import Path

import pytest

from medmereport.ingest import registry
from medmereport.ingest.base import Detection, IngestAdapter, IngestError
from medmereport.ingest.dicomdir import DicomdirAdapter
from medmereport.ingest.loose import LooseAdapter
from medmereport.ingest.scan import scan_source
from tests.ingest.test_loose import make_ctx


class FakeAdapter:
    name = "fake"
    label = "Fake vendor disc"

    def detect(self, src: Path) -> Detection | None:
        return Detection(self.name, 0.99) if (src / "FAKE.MARK").exists() else None

    def open(self, src, ctx):
        yield from ()


class FakeEntryPoint:
    def __init__(self, name, obj=None, error=None):
        self.name, self._obj, self._error = name, obj, error

    def load(self):
        if self._error:
            raise self._error
        return self._obj


def test_builtins_are_protocol_instances_in_priority_order():
    adapters = registry.builtin_adapters()
    names = [a.name for a in adapters]
    assert {"dicomdir", "loose"} <= set(names)
    assert names[-1] == "loose"  # generic fallback last
    assert names.index("dicomdir") < names.index("loose")
    assert all(isinstance(a, IngestAdapter) for a in adapters)


def test_missing_builtin_is_skipped(monkeypatch):
    monkeypatch.setattr(registry, "BUILTIN", (("medmereport.ingest.not_there", "X"), *registry.BUILTIN))
    assert "loose" in [a.name for a in registry.builtin_adapters()]


def test_entry_point_plugins(monkeypatch, tmp_path):
    eps = [
        FakeEntryPoint("fake", FakeAdapter),
        FakeEntryPoint("broken", error=RuntimeError("boom")),
        FakeEntryPoint("notadapter", object()),
        FakeEntryPoint("shadow", LooseAdapter),  # cannot replace a built-in
    ]
    monkeypatch.setattr(registry, "entry_points", lambda group: eps if group == registry.ENTRY_POINT_GROUP else [])
    names = [a.name for a in registry.all_adapters()]
    assert names.count("loose") == 1 and "fake" in names
    (tmp_path / "FAKE.MARK").write_text("")
    det, adapter = registry.detect_best(tmp_path)
    assert det is not None and det.adapter == "fake" and registry.get_adapter("fake") is not None
    assert adapter is not None and adapter.label == "Fake vendor disc"


def test_detect_ranking_and_broken_detector(tmp_path):
    class Exploding(FakeAdapter):
        name = "exploding"

        def detect(self, src):
            raise ValueError("bad")

    (tmp_path / "DICOMDIR").write_bytes(b"x")
    ranked = registry.detect(tmp_path, [LooseAdapter(), Exploding(), DicomdirAdapter()])
    assert [d.adapter for d, _ in ranked] == ["dicomdir", "loose"]


def test_detect_best_none(tmp_path):
    assert registry.detect_best(tmp_path / "missing") == (None, None)


def test_scan_unknown_adapter_name(tmp_path):
    with pytest.raises(IngestError) as exc:
        scan_source(tmp_path, make_ctx(tmp_path), adapter="nope")
    assert exc.value.code == "unsupported"
