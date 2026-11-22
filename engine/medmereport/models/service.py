"""In-app model downloads (T7.7, docs/API_CONTRACT.md §7): bundle listing and the download job.

``GET /api/models`` reports what each bundle is, what it enables, how big it is, where it comes from and
under which licence; ``POST /api/models/pull {bundle}`` runs :func:`pull_job` in a job worker. That job is
the only one whose egress guard lets it reach the network, and only the hosts pinned in
:mod:`medmereport.models.registry` (see ``server/jobs.py``). ``MEDMEREPORT_OFFLINE=1`` refuses it.
"""

from __future__ import annotations

import importlib.util
import time
import urllib.parse
from dataclasses import dataclass
from typing import TYPE_CHECKING, Any, Literal

from pydantic import BaseModel

from medmereport.models import registry as R

if TYPE_CHECKING:
    from medmereport.server.jobs import JobContext


@dataclass(frozen=True)
class BundleMeta:
    title: str
    enables: str
    needs_module: str | None = None  # Python package the bundle is useless without
    needs_hint: str | None = None
    pipelines: tuple[str, ...] = ()


BUNDLES: dict[str, BundleMeta] = {
    "atlas-ho": BundleMeta(
        title="Brain atlas (basic)",
        enables="Basic brain labels: a standard brain atlas is fitted to your T1 scan to name its main regions.",
        pipelines=("brain_mr",),
    ),
    "synthseg": BundleMeta(
        title="SynthSeg brain AI",
        enables="Better brain labels: detailed regions on any MRI type, including thick-slice scans.",
        needs_module="onnxruntime",
        needs_hint="Needs the AI add-on: uv tool install --reinstall 'medmereport[ai]'",
        pipelines=("brain_mr",),
    ),
    "totalseg": BundleMeta(
        title="TotalSegmentator body AI",
        enables="Detailed CT body models: 117 organs, bones and vessels.",
        needs_module="totalsegmentator",
        needs_hint="Needs the TotalSegmentator add-on: uv tool install --reinstall 'medmereport[totalseg]'",
        pipelines=("ct_body",),
    ),
}


class ModelAssetOut(BaseModel):
    name: str
    description: str
    size: int  # bytes
    installed: bool
    host: str


class Credit(BaseModel):
    licence: str
    attribution: str


class ModelBundleOut(BaseModel):
    id: str
    title: str
    enables: str  # plain-language "what this gives you"
    size: int  # bytes, whole bundle
    download_size: int  # bytes still to download
    installed: bool  # every file present
    partial: bool  # some files present
    usable: bool  # the software it needs is installed (else ``needs`` says how to get it)
    needs: str | None = None
    pipelines: list[str]
    hosts: list[str]  # where the files come from (the only hosts the download may contact)
    credits: list[Credit]
    assets: list[ModelAssetOut]


class BrainModels(BaseModel):
    state: Literal["none", "atlas", "synthseg"]  # best brain backend usable right now
    suggest: str | None  # bundle to offer before a brain build (None: nothing better to get)


class ModelsOut(BaseModel):
    offline: bool  # MEDMEREPORT_OFFLINE=1: downloads are turned off
    bundles: list[ModelBundleOut]
    brain: BrainModels


def _has(module: str | None) -> bool:
    return module is None or importlib.util.find_spec(module) is not None


def _meta(bundle: str) -> BundleMeta:
    return BUNDLES.get(bundle) or BundleMeta(title=bundle, enables="Optional model files.")


def bundle_info(bundle: str) -> ModelBundleOut:
    names = R.names(bundle)
    if not names:
        raise R.AssetError(f"unknown model bundle {bundle!r}", "unknown")
    assets = [R.get(n) for n in names]
    have = {n: R.available(n) for n in names}
    meta = _meta(bundle)
    usable = _has(meta.needs_module)
    credits = list(dict.fromkeys((a.licence, a.attribution) for a in assets))
    hosts = sorted({urllib.parse.urlsplit(a.url).hostname or "" for a in assets} - {""})
    return ModelBundleOut(
        id=bundle,
        title=meta.title,
        enables=meta.enables,
        size=sum(a.size for a in assets),
        download_size=sum(a.size for a in assets if not have[a.name]),
        installed=all(have.values()),
        partial=any(have.values()) and not all(have.values()),
        usable=usable,
        needs=None if usable else meta.needs_hint,
        pipelines=list(meta.pipelines),
        hosts=hosts,
        credits=[Credit(licence=lic, attribution=att) for lic, att in credits],
        assets=[
            ModelAssetOut(
                name=a.name,
                description=a.description,
                size=a.size,
                installed=have[a.name],
                host=urllib.parse.urlsplit(a.url).hostname or "",
            )
            for a in assets
        ],
    )


def brain_state() -> BrainModels:
    atlas = bool(R.names("atlas-ho")) and all(R.available(n) for n in R.names("atlas-ho"))
    onnx = _has("onnxruntime")
    synth = onnx and "synthseg-seg" in R.ASSETS and R.available("synthseg-seg")
    state: Literal["none", "atlas", "synthseg"] = "synthseg" if synth else "atlas" if atlas else "none"
    suggest = None
    if state != "synthseg" and onnx and R.names("synthseg"):
        suggest = "synthseg"
    elif state == "none" and R.names("atlas-ho"):
        suggest = "atlas-ho"
    return BrainModels(state=state, suggest=suggest)


def listing() -> ModelsOut:
    return ModelsOut(offline=R.offline(), bundles=[bundle_info(b) for b in R.bundles()], brain=brain_state())


# ------------------------------------------------------------------------------------------- the job
def pull_job(ctx: JobContext) -> dict[str, Any]:
    """Download every missing file of ``params["bundle"]`` (checksum-verified, atomic, cancellable)."""
    bundle = str(ctx.params.get("bundle", ""))
    names = R.names(bundle)
    if not names:
        raise R.AssetError(f"unknown model bundle {bundle!r}", "unknown")
    if R.offline():
        raise R.AssetError("Model downloads are turned off on this computer (MEDMEREPORT_OFFLINE=1).", "offline")
    sizes = {n: R.get(n).size for n in names}
    total = max(1, sum(sizes.values()))
    before = 0
    state = {"pct": -1.0, "t": 0.0}

    def report(name: str, done: int, size: int) -> None:
        ctx.check_cancelled()  # raising here makes registry.pull delete the .part file
        pct = 100.0 * (before + done) / total
        now = time.monotonic()
        if done >= size or pct - state["pct"] >= 0.5 or now - state["t"] >= 0.5:
            state["pct"], state["t"] = pct, now
            mb = f"{(before + done) / 1e6:.1f} / {total / 1e6:.1f} MB"
            ctx.progress("verify" if done >= size else "download", min(pct, 99.9), f"{name} · {mb}")

    ctx.progress("download", 0, f"0.0 / {total / 1e6:.1f} MB")
    for n in names:
        R.pull(n, report)
        before += sizes[n]
    return {"bundle": bundle, "assets": names, "bytes": total}
