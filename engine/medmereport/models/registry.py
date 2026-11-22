"""Manifest of optional downloadable assets (templates, atlases, model weights).

This module is the **only** place in medmereport that opens a network connection, and only from
:func:`pull`, which runs when the user explicitly asks (``medmereport models pull`` or the in-app
"Download" button, which runs :func:`medmereport.models.service.pull_job`). Nothing here touches the
network at import time, and :func:`path` / :func:`available` are purely local. Downloads go only to the
hosts of the pinned URLs below (plus GitHub's release-asset redirect hosts); ``MEDMEREPORT_OFFLINE=1``
turns them off entirely.

Every asset is pinned by URL + SHA-256 + size, downloaded over HTTPS into
``core.paths.models_dir()``, resumed from a ``.part`` file when interrupted, and only moved into place
after the checksum matches.
"""

from __future__ import annotations

import hashlib
import json
import os
import urllib.error
import urllib.parse
import urllib.request
from collections.abc import Callable
from dataclasses import dataclass, fields
from pathlib import Path
from typing import Any

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


# ONNX exports produced by scripts/convert_synthseg.py, published as GitHub release assets (pinned by sha256).
_GH_MODELS = "https://github.com/vkpriyesh/medmereport/releases/download/models-synthseg-2.0/"
SYNTHSEG_LICENCE = "Apache-2.0 (SynthSeg code; weights distributed with it; no separate weights licence stated)"
SYNTHSEG_ATTRIBUTION = (
    "SynthSeg 2.0, B. Billot et al., Medical Image Analysis 2023; PNAS 2023. https://github.com/BBillot/SynthSeg"
)

# TotalSegmentator open-task weights (Apache-2.0), mirrored from the upstream GitHub release (pinned by sha256).
_TS_RELEASE = "https://github.com/wasserth/TotalSegmentator/releases/download/v2.0.0-weights/"
TOTALSEG_LICENCE = "Apache-2.0 (TotalSegmentator open task 'total'; code and weights)"
TOTALSEG_ATTRIBUTION = (
    "TotalSegmentator, J. Wasserthal et al., Radiology: Artificial Intelligence 2023, doi:10.1148/ryai.230024. "
    "https://github.com/wasserth/TotalSegmentator"
)

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
        Asset(
            name="totalseg-total-fast",
            filename="totalseg/Dataset297_TotalSegmentator_total_3mm_1559subj.zip",
            url=_TS_RELEASE + "Dataset297_TotalSegmentator_total_3mm_1559subj.zip",
            sha256="0baa2c8de2975600eb31801dd5c1825cd2b356f794498659cf3348714c073394",
            size=135_386_075,
            licence=TOTALSEG_LICENCE,
            attribution=TOTALSEG_ATTRIBUTION,
            description="TotalSegmentator 'total' fast (3 mm) nnU-Net weights: 117 body structures (CT, CPU)",
            bundle="totalseg",
        ),
        *(
            Asset(
                name=f"synthseg-{kind}",
                filename=f"synthseg/{fname}",
                url=_GH_MODELS + fname,
                sha256=sha,
                size=size,
                licence=SYNTHSEG_LICENCE,
                attribution=SYNTHSEG_ATTRIBUTION,
                description=desc,
                bundle="synthseg",
            )
            for kind, fname, sha, size, desc in (
                (
                    "seg",
                    "synthseg_2.0.onnx",
                    "e5dc620883bfae1355e9ee44c366f19e7086aef149a8c6848be6fb23607b2bda",
                    53_033_940,
                    "SynthSeg 2.0 whole-brain segmentation (ONNX, CPU)",
                ),
                (
                    "parc",
                    "synthseg_parc_2.0.onnx",
                    "9f72a2789ecf5391c10fe581507942ee3b45265b397c246c640b8a50900d71f8",
                    53_090_350,
                    "SynthSeg 2.0 cortical parcellation (ONNX, CPU)",
                ),
                (
                    "robust",
                    "synthseg_robust_2.0.onnx",
                    "c613ae72e3cc8bfb1c626f0cef83139f92e085815245a5f1c7a91954a7196a40",
                    214_380_627,
                    "SynthSeg 2.0 robust model for thick-slice scans (ONNX, CPU)",
                ),
            )
        ),
    )
}


class AssetError(RuntimeError):
    """Unknown asset, download failure or checksum mismatch.

    ``code`` is a stable id the job manager forwards to the UI: ``unknown``, ``offline``, ``blocked_host``,
    ``download_failed``, ``checksum_mismatch``.
    """

    def __init__(self, message: str, code: str = "download_failed") -> None:
        super().__init__(message)
        self.code = code
        self.info: dict[str, Any] = {}


# GitHub serves release assets by redirecting github.com/.../releases/download/... to one of these hosts.
REDIRECT_HOSTS: dict[str, tuple[str, ...]] = {
    "github.com": (
        "objects.githubusercontent.com",
        "release-assets.githubusercontent.com",
        "github-releases.githubusercontent.com",
    ),
}
LOOPBACK = ("127.0.0.1", "localhost", "::1")


def offline() -> bool:
    """True when the user turned model downloads off (``MEDMEREPORT_OFFLINE=1``)."""
    return os.environ.get("MEDMEREPORT_OFFLINE", "").strip().lower() in ("1", "true", "yes", "on")


def allowed_hosts() -> set[str]:
    """Every host a model download may contact: the pinned URLs' hosts and their known redirect targets."""
    hosts: set[str] = set()
    for a in ASSETS.values():
        h = (urllib.parse.urlsplit(a.url).hostname or "").lower()
        hosts.add(h)
        hosts.update(REDIRECT_HOSTS.get(h, ()))
    hosts.discard("")
    return hosts


def _check_url(url: str) -> None:
    u = urllib.parse.urlsplit(url)
    host = (u.hostname or "").lower()
    if host in LOOPBACK and u.scheme in ("http", "https"):
        return  # local test fixtures only; never leaves this computer
    if u.scheme != "https":
        raise AssetError("refusing a non-HTTPS download", "blocked_host")
    if host not in allowed_hosts():
        raise AssetError(f"refusing to download from {host!r}: not a pinned model host", "blocked_host")


class _PinnedRedirects(urllib.request.HTTPRedirectHandler):
    """Follows a redirect only to https on a pinned host (GitHub release assets redirect once)."""

    def redirect_request(self, req, fp, code, msg, headers, newurl):  # type: ignore[no-untyped-def]
        _check_url(newurl)
        return super().redirect_request(req, fp, code, msg, headers, newurl)


def _overlay_test_manifest() -> None:
    """Test hook: ``MEDMEREPORT_TEST_MODELS=<json file>`` adds fake assets served from 127.0.0.1 only.

    Lets the engine tests run a real download job against a local HTTP fixture (the spawned job worker
    inherits the environment). Entries whose URL is not on loopback are ignored, so this can never widen
    where the app connects to.
    """
    src = os.environ.get("MEDMEREPORT_TEST_MODELS")
    if not src:
        return
    try:
        rows = json.loads(Path(src).read_text(encoding="utf-8"))
    except (OSError, ValueError):
        return
    keys = {f.name for f in fields(Asset)}
    for row in rows if isinstance(rows, list) else []:
        if not isinstance(row, dict) or set(row) != keys:
            continue
        if (urllib.parse.urlsplit(str(row["url"])).hostname or "") not in LOOPBACK:
            continue
        ASSETS[str(row["name"])] = Asset(**row)


_overlay_test_manifest()


def get(name: str) -> Asset:
    try:
        return ASSETS[name]
    except KeyError:
        raise AssetError(f"unknown model asset {name!r}; known: {', '.join(sorted(ASSETS))}", "unknown") from None


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


def bundles() -> list[str]:
    """Bundle ids in manifest order."""
    return list(dict.fromkeys(a.bundle for a in ASSETS.values()))


def _open(url: str, start: int) -> object:
    _check_url(url)  # https to a pinned host (or loopback); redirects are checked the same way
    req = urllib.request.Request(url, headers={"User-Agent": "medmereport-models"})  # noqa: S310 - checked above
    if start:
        req.add_header("Range", f"bytes={start}-")
    opener = urllib.request.build_opener(_PinnedRedirects)
    return opener.open(req, timeout=_TIMEOUT_S)


def pull(name: str, progress: PullProgress | None = None, *, force: bool = False) -> Path:
    """Download one asset (resumable, checksum-verified). Returns its local path.

    This is the only function in medmereport that uses the network; call it only on an explicit user
    request (``medmereport models pull`` or the in-app download). Refused when :func:`offline`.

    Writes go to ``<file>.part`` and are moved into place only after the SHA-256 matches. A network error
    keeps the partial file so the next pull resumes; a checksum mismatch, or any exception raised by
    ``progress`` (e.g. the user cancelled), deletes it.
    """
    if offline():
        raise AssetError("Model downloads are turned off on this computer (MEDMEREPORT_OFFLINE=1).", "offline")
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
        except AssetError:
            raise
        except (urllib.error.URLError, OSError) as e:
            raise AssetError(f"download of {name} failed: {e}") from e
        try:
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
                        if done + len(chunk) > asset.size:
                            raise AssetError(f"{name} is larger than expected", "checksum_mismatch")
                        f.write(chunk)
                        done += len(chunk)
                        if progress:
                            progress(name, done, asset.size)
        except AssetError:
            part.unlink(missing_ok=True)
            raise
        except (urllib.error.URLError, OSError) as e:  # network trouble mid-way: keep the .part to resume
            raise AssetError(f"download of {name} failed: {e}") from e
        except BaseException:  # cancelled or anything unexpected: leave nothing half-written behind
            part.unlink(missing_ok=True)
            raise
    if sha256_of(part) != asset.sha256:
        part.unlink(missing_ok=True)
        raise AssetError(
            f"checksum mismatch for {name}; the partial download was deleted, please retry", "checksum_mismatch"
        )
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
