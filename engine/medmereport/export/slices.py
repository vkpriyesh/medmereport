"""Slice-stack exporter: float frames -> windowed 8-bit images + meta.json (docs/API_CONTRACT.md §3)."""

from __future__ import annotations

from collections.abc import Sequence
from pathlib import Path
from typing import Any

import numpy as np
from PIL import Image

from medmereport.core.studies import write_json

MAX_SIDE = 512
MAX_SIDE_PROJECTION = 1024


def robust_window(frames: Sequence[np.ndarray], lo_pct: float = 0.5, hi_pct: float = 99.7) -> tuple[float, float]:
    """Percentile window over all frames, ignoring the zero background when there is tissue."""
    sample = np.concatenate([f[:: max(1, f.shape[0] // 128), :: max(1, f.shape[1] // 128)].ravel() for f in frames])
    sample = sample[np.isfinite(sample)]
    fg = sample[sample > sample.min()] if np.any(sample > sample.min()) else sample
    if fg.size == 0:
        return 0.0, 1.0
    lo, hi = np.percentile(fg, [lo_pct, hi_pct])
    if hi <= lo:
        hi = lo + 1.0
    return float(lo), float(hi)


def to_u8(frame: np.ndarray, lo: float, hi: float) -> np.ndarray:
    out: np.ndarray = (np.clip((frame.astype(np.float32) - lo) / (hi - lo), 0, 1) * 255).astype(np.uint8)
    return out


def export_stack(
    frames: Sequence[np.ndarray],
    meta: dict[str, Any],
    out_dir: Path,
    *,
    projection: bool = False,
    ext: str = "webp",
    window: tuple[float, float] | None = None,
) -> dict[str, Any]:
    """Write frames as images and return the completed meta dict (also written to meta.json)."""
    out_dir.mkdir(parents=True, exist_ok=True)
    lo, hi = window or robust_window(frames)
    max_side = MAX_SIDE_PROJECTION if projection else MAX_SIDE
    w = h = 0
    for i, f in enumerate(frames):
        img = Image.fromarray(to_u8(f, lo, hi))
        if max(img.size) > max_side:
            s = max_side / max(img.size)
            img = img.resize((max(1, round(img.size[0] * s)), max(1, round(img.size[1] * s))), Image.Resampling.LANCZOS)
        if i == len(frames) // 2 or i == 0:
            w, h = img.size
        if ext == "webp":
            img.save(out_dir / f"{i:03d}.webp", lossless=True, quality=80, method=4)
        else:
            img.save(out_dir / f"{i:03d}.png", optimize=True)
    full = {**meta, "n": len(frames), "ext": ext, "w": w, "h": h, "window": {"lo": 0, "hi": 255}}
    full.setdefault("labels", False)
    write_json(out_dir / "meta.json", full)
    return full


def thumbnail(frame: np.ndarray, path: Path, size: int = 160) -> None:
    lo, hi = robust_window([frame])
    img = Image.fromarray(to_u8(frame, lo, hi))
    img.thumbnail((size, size), Image.Resampling.LANCZOS)
    img.save(path, quality=85)
