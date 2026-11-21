"""``dicomdir`` adapter: standard IHE-PDI discs with a ``DICOMDIR`` index.

The index is used to find referenced files first, but it is never trusted alone: everything under
the disc root is walked afterwards (files not already yielded are sniffed by the scanner). Autorun
files, executables and bundled viewer folders are ignored and nothing on the disc is executed.
"""

from __future__ import annotations

from collections.abc import Iterator
from pathlib import Path

from pydicom import dcmread
from pydicom.fileset import FileInstance, FileSet

from medmereport.dicom.read import quiet
from medmereport.ingest.base import Detection, OpenContext
from medmereport.ingest.loose import SKIP_DIR_NAMES, should_skip, walk
from medmereport.ingest.notes import warn

_MAX_SUBDIRS = 64


def _child(directory: Path, name: str) -> Path | None:
    """Case-insensitive lookup of a direct child file."""
    try:
        for p in directory.iterdir():
            if p.name.upper() == name and p.is_file():
                return p
    except OSError:
        return None
    return None


def find_dicomdir(src: Path) -> Path | None:
    """Locate a DICOMDIR at ``src`` (a file), in ``src``, or one directory level below it."""
    if src.is_file():
        return src if src.name.upper() == "DICOMDIR" else None
    if not src.is_dir():
        return None
    hit = _child(src, "DICOMDIR")
    if hit is not None:
        return hit
    try:
        subdirs = sorted(p for p in src.iterdir() if p.is_dir() and p.name.lower() not in SKIP_DIR_NAMES)
    except OSError:
        return None
    for d in subdirs[:_MAX_SUBDIRS]:
        hit = _child(d, "DICOMDIR")
        if hit is not None:
            return hit
    return None


def _inside(path: Path, root: Path) -> bool:
    try:
        path.resolve().relative_to(root.resolve())
    except (ValueError, OSError):
        return False
    return True


def _instance_path(instance: FileInstance) -> Path | None:
    try:
        return Path(instance.path)
    except Exception:  # noqa: BLE001 - malformed ReferencedFileID
        return None


def referenced_files(dicomdir: Path, ctx: OpenContext) -> list[Path]:
    """Existing files referenced by the DICOMDIR (inside its folder). Problems become warnings."""
    root = dicomdir.parent
    try:
        with quiet():
            ds = dcmread(dicomdir, force=True)
            records = [r for r in ds.get("DirectoryRecordSequence", []) if "ReferencedFileID" in r]
            fs = FileSet(ds) if records else None
    except Exception:  # noqa: BLE001 - a damaged index must not stop the import
        fs = None
    if fs is None:
        warn(ctx, "The disc index (DICOMDIR) is damaged or empty; all files were scanned instead.")
        return []
    found: list[Path] = []
    for instance in fs:  # pydicom drops records whose file is absent
        p = _instance_path(instance)
        if p is not None and p.is_file() and _inside(p, root) and not should_skip(p.relative_to(root)):
            found.append(p)
    if len(found) < len(records):
        warn(ctx, f"{len(records) - len(found)} files listed in the disc index were missing or unusable.")
    return found


class DicomdirAdapter:
    """Standard DICOM disc (DICOMDIR at the root or one folder down)."""

    name = "dicomdir"
    label = "Standard DICOM disc"

    def detect(self, src: Path) -> Detection | None:
        """Match when a DICOMDIR file is present; reads directory listings only."""
        hit = find_dicomdir(src)
        if hit is None:
            return None
        notes = ["dicomdir"] if hit.parent == src or src.is_file() else ["dicomdir-subfolder"]
        return Detection(self.name, 0.9, notes=notes)

    def open(self, src: Path, ctx: OpenContext) -> Iterator[Path]:
        """Yield DICOMDIR-referenced files, then every other plain file under the disc root."""
        dicomdir = find_dicomdir(src)
        root = src.parent if src.is_file() else src
        seen: set[Path] = set()
        if dicomdir is not None:
            for p in referenced_files(dicomdir, ctx):
                seen.add(p.resolve())
                yield p
        for p in walk(root, ctx):
            if p.name.upper() == "DICOMDIR" or p.resolve() in seen:
                continue
            yield p
