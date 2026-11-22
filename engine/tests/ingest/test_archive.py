"""ingest/archive.py: the single hardened ZIP extractor (zip-slip, links, programs, bombs, counts, warnings)."""

import io
import os
import zipfile
from pathlib import Path

import pytest

from medmereport.ingest import base
from medmereport.ingest.archive import ExtractBudget, clean_member_name, extract_zip, safe_member_path
from medmereport.ingest.base import IngestError, OpenContext
from medmereport.ingest.notes import warn


def _zip(entries: dict[str, bytes], method: int = zipfile.ZIP_DEFLATED, links: tuple[str, ...] = ()) -> zipfile.ZipFile:
    buf = io.BytesIO()
    with zipfile.ZipFile(buf, "w", method) as zf:
        for name, data in entries.items():
            zf.writestr(name, data)
        for name in links:
            info = zipfile.ZipInfo(name)
            info.external_attr = 0o120777 << 16
            zf.writestr(info, "../../outside")
    return zipfile.ZipFile(io.BytesIO(buf.getvalue()))


def _ctx(tmp_path: Path) -> OpenContext:
    (tmp_path / "s").mkdir(exist_ok=True)
    return OpenContext(tmp=tmp_path / "s")


def _files(root: Path) -> set[str]:
    return {p.relative_to(root).as_posix() for p in root.rglob("*") if p.is_file()}


def test_open_context_has_warnings_channel(tmp_path):
    ctx = _ctx(tmp_path)
    assert ctx.warnings == []
    warn(ctx, "note")
    warn(ctx, "note")
    assert ctx.warnings == ["note"]
    assert OpenContext(tmp=tmp_path).warnings is not ctx.warnings  # no shared mutable default


def test_unsafe_links_and_programs_skipped_with_warnings(tmp_path):
    zf = _zip(
        {"../evil.dcm": b"x", "C:/x.dcm": b"x", "a/aux.txt": b"x", "a/b:c": b"x", "trail. ": b"x",
         "ok/IM1": b"good", "run.exe": b"MZ", "AUTORUN.INF": b"[autorun]"},
        links=("ok/link",),
    )  # fmt: skip
    ctx = _ctx(tmp_path)
    out = extract_zip(zf, tmp_path / "x", ctx=ctx)
    assert [p.name for p in out] == ["IM1"]
    assert _files(tmp_path / "x") == {"ok/IM1"}
    assert not (tmp_path / "evil.dcm").exists()
    assert any("6 archive entries with unsafe paths or links" in w for w in ctx.warnings)
    assert any("2 program files" in w for w in ctx.warnings)
    assert not any(str(tmp_path) in w for w in ctx.warnings)


@pytest.mark.parametrize("name", ["a/../../x", "/abs", "\\\\server\\share\\x", "x\x00", "lpt1.txt", "dir/con", ""])
def test_rejected_member_names(tmp_path, name):
    assert clean_member_name(name) is None or safe_member_path(tmp_path, name) is None


def test_ratio_bomb_rejected_before_writing(tmp_path):
    zf = _zip({"zeros.bin": b"\x00" * (8 << 20)})
    with pytest.raises(IngestError) as ei:
        extract_zip(zf, tmp_path / "x")
    assert ei.value.code == "too_large"
    assert _files(tmp_path / "x") == set()


def test_whole_archive_ratio_counts_many_small_members(tmp_path):
    # each member is under the per-entry threshold but the archive as a whole expands > MAX_RATIO
    zf = _zip({f"z{i}": b"\x00" * (900 << 10) for i in range(4)})
    with pytest.raises(IngestError) as ei:
        extract_zip(zf, tmp_path / "x")
    assert ei.value.code == "too_large"
    assert _files(tmp_path / "x") == set()


def test_declared_total_and_budget_shared(tmp_path, monkeypatch):
    monkeypatch.setattr(base, "MAX_TOTAL_UNCOMPRESSED", 150_000)
    budget = ExtractBudget()
    extract_zip(_zip({"a": os.urandom(100_000)}, zipfile.ZIP_STORED), tmp_path / "1", budget=budget)
    assert budget.total_bytes == 100_000 and budget.files == 1
    with pytest.raises(IngestError) as ei:  # second archive of the same import pushes past the limit
        extract_zip(_zip({"b": os.urandom(100_000)}, zipfile.ZIP_STORED), tmp_path / "2", budget=budget)
    assert ei.value.code == "too_large"
    assert _files(tmp_path / "2") == set()


def test_file_count_limit(tmp_path, monkeypatch):
    monkeypatch.setattr(base, "MAX_FILES", 3)
    with pytest.raises(IngestError) as ei:
        extract_zip(_zip({f"f{i}": b"x" for i in range(5)}), tmp_path / "x")
    assert ei.value.code == "too_large"


def test_member_larger_than_declared_is_a_bomb(tmp_path):
    zf = _zip({"a": b"y" * 5000}, zipfile.ZIP_STORED)
    zf.infolist()[0].file_size = 10  # header lies
    with pytest.raises(IngestError) as ei:
        extract_zip(zf, tmp_path / "x")
    assert ei.value.code in ("too_large", "corrupt")  # either the byte count or zipfile's own check trips first
    assert _files(tmp_path / "x") == set()


def _damaged() -> zipfile.ZipFile:
    buf = io.BytesIO()
    with zipfile.ZipFile(buf, "w", zipfile.ZIP_STORED) as zf:
        zf.writestr("good", b"g" * 100)
        zf.writestr("bad", b"b" * 100)
    raw = bytearray(buf.getvalue())
    i = raw.index(b"b" * 100)
    raw[i : i + 4] = b"XXXX"  # CRC mismatch on read
    return zipfile.ZipFile(io.BytesIO(bytes(raw)))


def test_damaged_member_raise_or_skip(tmp_path):
    with pytest.raises(IngestError) as ei:
        extract_zip(_damaged(), tmp_path / "a")
    assert ei.value.code == "corrupt"
    ctx = _ctx(tmp_path)
    out = extract_zip(_damaged(), tmp_path / "b", ctx=ctx, on_damaged="skip")
    assert [p.name for p in out] == ["good"] and _files(tmp_path / "b") == {"good"}
    assert any("damaged" in w for w in ctx.warnings)


def test_progress_reported(tmp_path):
    events: list[tuple[str, float]] = []
    extract_zip(_zip({f"f{i}": b"x" for i in range(3)}), tmp_path / "x", progress=lambda s, p, m: events.append((s, p)))
    assert events[-1] == ("extract", 100.0)
