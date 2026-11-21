"""Local folder browser for choosing what to import (authenticated, read-only, directory listing only)."""

from __future__ import annotations

import os
import string
import sys
from pathlib import Path
from typing import Literal

from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel

KNOWN_FILE_EXT = {".zip", ".7z", ".enc", ".dcm", ".dicom", ".jpg", ".jpeg", ".png", ".pdf", ".tif", ".tiff", ".bmp"}
MAX_ENTRIES = 2000

router = APIRouter(prefix="/api/fs")


class Root(BaseModel):
    path: str
    label: str
    kind: Literal["drive", "home", "removable", "folder"]


class Entry(BaseModel):
    name: str
    path: str
    kind: Literal["dir", "file"]
    size: int | None = None
    hint: str | None = None


class Listing(BaseModel):
    path: str
    parent: str | None
    entries: list[Entry]
    truncated: bool = False


def disc_hint(d: Path) -> str | None:
    """Cheap guess at what a folder is (no reading of file contents beyond names)."""
    try:
        names = {n.lower() for n in os.listdir(d)}
    except OSError:
        return None
    if "burn.enc" in names:
        return "dcmburner"
    if "dcmdata.zip" in names:
        return "radiant"
    if "dicomdir" in names:
        return "dicomdir"
    if "dicom" in names:
        return "dicom"
    return None


@router.get("/roots", response_model=list[Root])
def roots() -> list[Root]:
    out: list[Root] = []
    home = Path.home()
    out.append(Root(path=str(home), label="Home", kind="home"))
    for sub in ("Desktop", "Downloads", "Documents"):
        p = home / sub
        if p.is_dir():
            out.append(Root(path=str(p), label=sub, kind="folder"))
    if sys.platform == "win32":
        for letter in string.ascii_uppercase:
            drive = f"{letter}:\\"
            if os.path.exists(drive):
                out.append(Root(path=drive, label=f"Drive {letter}:", kind="drive"))
    else:
        for base in ("/Volumes", "/media", f"/media/{os.environ.get('USER', '')}", "/mnt"):
            b = Path(base)
            if b.is_dir():
                for p in sorted(b.iterdir()):
                    if p.is_dir():
                        out.append(Root(path=str(p), label=p.name, kind="removable"))
    return out


@router.get("/list", response_model=Listing)
def list_dir(path: str = Query(..., min_length=1)) -> Listing:
    d = Path(path).expanduser()
    if not d.is_dir():
        raise HTTPException(404, "Folder not found")
    entries: list[Entry] = []
    truncated = False
    try:
        items = sorted(os.scandir(d), key=lambda e: (not e.is_dir(follow_symlinks=False), e.name.lower()))
    except PermissionError as err:
        raise HTTPException(403, "No permission to open this folder") from err
    for e in items:
        if e.name.startswith((".", "$")):
            continue
        if len(entries) >= MAX_ENTRIES:
            truncated = True
            break
        try:
            if e.is_dir(follow_symlinks=False):
                entries.append(Entry(name=e.name, path=e.path, kind="dir", hint=disc_hint(Path(e.path))))
            elif Path(e.name).suffix.lower() in KNOWN_FILE_EXT or e.name.upper() == "DICOMDIR":
                entries.append(Entry(name=e.name, path=e.path, kind="file", size=e.stat().st_size))
        except OSError:
            continue
    parent = str(d.parent) if d.parent != d else None
    return Listing(path=str(d), parent=parent, entries=entries, truncated=truncated)
