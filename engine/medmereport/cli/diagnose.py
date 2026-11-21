"""`medmereport diagnose <path>`: a de-identified structure report for unsupported discs.

Purpose: let users ask for support for a new vendor format without sharing anything personal.
The report contains only folder depth, hashed names (except well-known disc file names), extensions,
coarse sizes and the first 16 bytes of each file (magic numbers). No pixel data, no DICOM tags,
no real names or paths.
"""

from __future__ import annotations

import hashlib
import json
import os
import secrets
from pathlib import Path
from typing import Any

# Names that are part of disc *software*, not patient data, and help identify the vendor.
SAFE_NAMES = {
    "dicomdir",
    "autorun.inf",
    "run.bat",
    "burn.enc",
    "burn.lock",
    "dcmdata.zip",
    "container.zip",
    "decrypt_win.exe",
    "viewer",
    "dicom",
    "util",
    "resource",
    "jre",
    "weasis",
    "readme.txt",
    "licence.txt",
    "license.txt",
    "index.htm",
    "index.html",
    "viewer.exe",
    "radiantviewer.exe",
    "microdicom.exe",
}
MAX_ENTRIES = 5000


def _bucket(n: int) -> str:
    for limit, label in ((1 << 10, "<1KB"), (1 << 20, "<1MB"), (10 << 20, "<10MB"), (100 << 20, "<100MB")):
        if n < limit:
            return label
    return ">=100MB"


def build_report(root: Path) -> dict[str, Any]:
    salt = secrets.token_bytes(16)  # per-report salt: hashes can't be linked across reports

    def name_of(p: Path) -> str:
        low = p.name.lower()
        if low in SAFE_NAMES or (p.suffix.lower() in (".exe", ".app", ".jar", ".dll") and len(p.stem) < 40):
            return p.name
        h = hashlib.sha256(salt + p.name.encode("utf-8", "ignore")).hexdigest()[:8]
        return f"<{h}>{p.suffix.lower()}"

    entries: list[dict[str, Any]] = []
    for dirpath, dirnames, filenames in os.walk(root):
        d = Path(dirpath)
        depth = len(d.relative_to(root).parts)
        rel = "/".join(name_of(Path(x)) for x in d.relative_to(root).parts) or "."
        for f in sorted(filenames):
            if len(entries) >= MAX_ENTRIES:
                break
            p = d / f
            try:
                size = p.stat().st_size
                with open(p, "rb") as fh:
                    head = fh.read(16)
                    fh.seek(128) if size > 132 else None
                    dicm = fh.read(4) == b"DICM" if size > 132 else False
            except OSError:
                continue
            entries.append(
                {
                    "dir": rel,
                    "depth": depth,
                    "name": name_of(p),
                    "ext": p.suffix.lower(),
                    "size": _bucket(size),
                    "magic": head.hex(),
                    "dicm_at_128": dicm,
                }
            )
        dirnames.sort()
    return {
        "tool": "medmereport diagnose",
        "version": 1,
        "entries": entries,
        "truncated": len(entries) >= MAX_ENTRIES,
        "note": "De-identified: names are salted hashes except standard disc software files.",
    }


def run(path: str, out: str | None) -> int:
    root = Path(path).expanduser()
    if not root.exists():
        print("That path doesn't exist.", flush=True)
        return 2
    report = build_report(root if root.is_dir() else root.parent)
    text = json.dumps(report, indent=1)
    target = Path(out) if out else Path.cwd() / "medmereport-diagnose.json"
    target.write_text(text, encoding="utf-8")
    print(f"Wrote a de-identified report with {len(report['entries'])} entries to: {target}", flush=True)
    print("Please review it before sharing; it contains no images, names or medical data.", flush=True)
    return 0
