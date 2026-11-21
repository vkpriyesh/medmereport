"""Manifest of optional downloadable assets (templates, atlases, model weights).

This module is the **only** place in medmereport that opens a network connection, and only from
:func:`pull`, which runs when the user explicitly asks (``medmereport models pull``). Nothing here
touches the network at import time, and :func:`path` / :func:`available` are purely local.

Every asset is pinned by URL + SHA-256 + size, downloaded over HTTPS into
``core.paths.models_dir()``, resumed from a ``.part`` file when interrupted, and only moved into place
after the checksum matches.
"""

from __future__ import annotations

import hashlib
import os
import urllib.error
import urllib.request
from collections.abc import Callable
from dataclasses import dataclass
from pathlib import Path

from medmereport.core.paths import models_dir

PullProgress = Callable[[str, int, int], None]  # (asset name, bytes done, bytes total)

_TF = "https://templateflow.s3.amazonaws.com/tpl-MNI152NLin2009cAsym/tpl-MNI152NLin2009cAsym_res-01_"
_CHUNK = 1 << 16
_TIMEOUT_S = 60

MNI_LICENCE = (
    "MNI ICBM152 2009c: Copyright (C) 1993-2004 Louis Collins, McConnell Brain Imaging Centre, Montreal "
    "Neurological Institute, McGill University. Permission to use, copy, modify, and distribute this software and "
    "its documentation for any purpose and without fee is hereby granted, provided that the above copyright notice "
    "appear in all copies."
)
MNI_ATTRIBUTION = (
    "ICBM 2009c Nonlinear Asymmetric template (c) McConnell Brain Imaging Centre, MNI, McGill University. "
    "Fonov et al., NeuroImage 54(1) 2011, doi:10.1016/j.neuroimage.2010.07.033; Fonov et al., NeuroImage 47 "
    "S102 2009. Distributed via TemplateFlow (Ciric et al., Nat Methods 2022)."
)
HO_LICENCE = "Harvard-Oxford atlases: CC BY-SA 4.0 (per the FSL licence page, 'Standard Space Atlases')."
HO_ATTRIBUTION = (
    "Harvard-Oxford cortical and subcortical structural atlases (Harvard Center for Morphometric Analysis; "
    "distributed with FSL): Makris et al. 2006 Schizophr Res 83:155-71; Frazier et al. 2005 Am J Psychiatry "
    "162:1256-65; Desikan et al. 2006 NeuroImage 31:968-80; Goldstein et al. 2007 Biol Psychiatry 61:935-45. "
    "Resampled to MNI152NLin2009cAsym by TemplateFlow."
)


@dataclass(frozen=True)
class Asset:
    name: str
    filename: str  # relative to models_dir(); may include a sub-folder ("synthseg/x.onnx")
    url: str
    sha256: str
    size: int
    licence: str
    attribution: str
    description: str
    bundle: str  # assets needed together, e.g. "atlas-ho"


ASSETS: dict[str, Asset] = {
    a.name: a
    for a in (
        Asset(
            name="mni152-2009c-t1",
            filename="tpl-MNI152NLin2009cAsym_res-01_T1w.nii.gz",
            url=_TF + "T1w.nii.gz",
            sha256="1f27aabea9f7183dc0c69dafa71e1787b921ca778d655d9c1bf302b273d5627a",
            size=13_685_075,
            licence=MNI_LICENCE,
            attribution=MNI_ATTRIBUTION,
            description="MNI ICBM152 2009c nonlinear asymmetric T1 template, 1 mm (whole head)",
            bundle="atlas-ho",
        ),
        Asset(
            name="mni152-2009c-brain-mask",
            filename="tpl-MNI152NLin2009cAsym_res-01_desc-brain_mask.nii.gz",
            url=_TF + "desc-brain_mask.nii.gz",
            sha256="e40bb1816736504d4c25abc243c1c8503df1d308f64c048318aa4b829e09a7ae",
            size=159_538,
            licence=MNI_LICENCE,
            attribution=MNI_ATTRIBUTION,
            description="Brain mask of the 2009c template (generous, ~1.9 L: registration target only)",
            bundle="atlas-ho",
        ),
        Asset(
            name="ho-cortical-lat",
            filename="tpl-MNI152NLin2009cAsym_res-01_atlas-HOCPAL_desc-th0_dseg.nii.gz",
            url=_TF + "atlas-HOCPAL_desc-th0_dseg.nii.gz",
            sha256="7d0402f2d40025b58e3487e88e46b4052ed727a1e9820e1b079e44b5bf5b3a6c",
            size=326_295,
            licence=HO_LICENCE,
            attribution=HO_ATTRIBUTION,
            description="Harvard-Oxford cortical atlas, lateralised, max-probability thr0, 1 mm (96 labels)",
            bundle="atlas-ho",
        ),
        Asset(
            name="ho-subcortical",
            filename="tpl-MNI152NLin2009cAsym_res-01_atlas-HOSPA_desc-th0_dseg.nii.gz",
            url=_TF + "atlas-HOSPA_desc-th0_dseg.nii.gz",
            sha256="22279021f0ebf7bffdca9fdefc61c6168be5b58aa437a07fe7f5eccc60d6887c",
            size=301_870,
            licence=HO_LICENCE,
            attribution=HO_ATTRIBUTION,
            description="Harvard-Oxford subcortical atlas, max-probability thr0, 1 mm (21 labels)",
            bundle="atlas-ho",
        ),
    )
}


class AssetError(RuntimeError):
    """Unknown asset, download failure or checksum mismatch."""


def get(name: str) -> Asset:
    try:
        return ASSETS[name]
    except KeyError:
        raise AssetError(f"unknown model asset {name!r}; known: {', '.join(sorted(ASSETS))}") from None


def names(bundle: str | None = None) -> list[str]:
    """Asset names, optionally limited to one bundle (e.g. ``"atlas-ho"``)."""
    return [a.name for a in ASSETS.values() if bundle is None or a.bundle == bundle]


def path(name: str) -> Path:
    """Local path of an asset (it may not exist yet; see :func:`available`). No network."""
    return models_dir() / get(name).filename


def available(name: str) -> bool:
    """True when the asset is on disk with the expected size (checksum was verified on pull). No network."""
    p = path(name)
    return p.is_file() and p.stat().st_size == get(name).size


def sha256_of(p: Path) -> str:
    h = hashlib.sha256()
    with open(p, "rb") as f:
        for chunk in iter(lambda: f.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def verify(name: str) -> bool:
    """Full checksum verification of a present asset."""
    return available(name) and sha256_of(path(name)) == get(name).sha256


def _open(url: str, start: int) -> object:
    if not url.startswith("https://"):
        raise AssetError("refusing a non-HTTPS download")
    req = urllib.request.Request(url, headers={"User-Agent": "medmereport-models"})  # noqa: S310 - https only
    if start:
        req.add_header("Range", f"bytes={start}-")
    return urllib.request.urlopen(req, timeout=_TIMEOUT_S)  # noqa: S310 - https only, checked above


def pull(name: str, progress: PullProgress | None = None, *, force: bool = False) -> Path:
    """Download one asset (resumable, checksum-verified). Returns its local path.

    This is the only function in medmereport that uses the network; call it only on an explicit user
    request (``medmereport models pull``).
    """
    asset = get(name)
    dest = path(name)
    if not force and verify(name):
        if progress:
            progress(name, asset.size, asset.size)
        return dest
    dest.parent.mkdir(parents=True, exist_ok=True)  # filenames may contain a sub-folder
    part = dest.with_name(dest.name + ".part")
    start = part.stat().st_size if part.exists() and not force else 0
    if start > asset.size:  # not a prefix of this asset: restart
        start = 0
    if start < asset.size:  # (start == size: complete partial, just verify)
        try:
            resp = _open(asset.url, start)
        except (urllib.error.URLError, OSError) as e:
            raise AssetError(f"download of {name} failed: {e}") from e
        with resp as r:  # type: ignore[attr-defined]
            status = getattr(r, "status", 200)
            if start and status != 206:  # server ignored the Range header: restart
                start = 0
            mode = "ab" if start else "wb"
            done = start
            with open(part, mode) as f:
                while True:
                    chunk = r.read(_CHUNK)
                    if not chunk:
                        break
                    f.write(chunk)
                    done += len(chunk)
                    if progress:
                        progress(name, done, asset.size)
    if sha256_of(part) != asset.sha256:
        part.unlink(missing_ok=True)
        raise AssetError(f"checksum mismatch for {name}; the partial download was deleted, please retry")
    os.replace(part, dest)
    return dest


def pull_many(which: list[str], progress: PullProgress | None = None) -> list[Path]:
    return [pull(n, progress) for n in which]


def credits(which: list[str] | None = None) -> list[dict[str, str]]:
    """Licence/attribution rows for the UI credits and NOTICE generation."""
    return [
        {"name": a.name, "licence": a.licence, "attribution": a.attribution}
        for a in ASSETS.values()
        if which is None or a.name in which
    ]
