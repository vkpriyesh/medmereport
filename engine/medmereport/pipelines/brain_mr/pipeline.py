"""Brain MR model pipeline and the ``model`` job (docs/API_CONTRACT.md §5).

Stages: fuse (multi-stack -> 1 mm reference + co-registered contrasts), segment (best available
backend), surface, glb, stats, labels (2D label maps), thumbs. Artifacts land in ``<study>/model/``.

Fusion and segmentation are resolved lazily so tests (and future plugins) can supply their own:
pass callables to :class:`BrainMRPipeline`, or set ``MEDMEREPORT_TEST_PIPELINE_HOOKS`` to a module
exposing ``build_volumes`` and ``best_backend`` (inherited by the spawned job worker).
"""

from __future__ import annotations

import importlib
import os
import shutil
from collections.abc import Callable
from pathlib import Path
from typing import Any, ClassVar

from medmereport.core.models import StudyInfo
from medmereport.core.studies import write_json
from medmereport.pipelines.base import JobLike, PipelineError, PipelinePlan, Stage, StageProgress, provenance

BuildVolumes = Callable[..., Any]  # (study_dir, study, progress) -> (Volume, list[Volume])
BestBackend = Callable[..., Any]  # (reference) -> SegmentationBackend | None

HOOKS_ENV = "MEDMEREPORT_TEST_PIPELINE_HOOKS"
_BRAIN_SEQUENCES = ("T1", "T2", "FLAIR")


def _hook(name: str) -> Callable[..., Any] | None:
    mod = os.environ.get(HOOKS_ENV)
    if not mod:
        return None
    fn: Callable[..., Any] = getattr(importlib.import_module(mod), name)
    return fn


def _default_build_volumes() -> BuildVolumes:
    hooked = _hook("build_volumes")
    if hooked is not None:
        return hooked
    try:
        from medmereport.pipelines.brain_mr.fusion import build_volumes
    except ImportError as e:
        raise PipelineError("not_available", "Multi-stack fusion is not available in this build.") from e
    fn: BuildVolumes = build_volumes
    return fn


def _default_best_backend() -> BestBackend:
    hooked = _hook("best_backend")
    if hooked is not None:
        return hooked
    try:
        from medmereport.segment.registry import best_backend
    except ImportError as e:
        raise PipelineError("no_backend", "No brain segmentation backend is installed.") from e
    fn: BestBackend = best_backend
    return fn


class BrainMRPipeline:
    name: ClassVar[str] = "brain_mr"
    version: ClassVar[str] = "0.1.0"

    def __init__(
        self,
        build_volumes: BuildVolumes | None = None,
        best_backend: BestBackend | None = None,
        budget: Any = None,
    ) -> None:
        self._build_volumes = build_volumes
        self._best_backend = best_backend
        self.budget = budget

    def applies(self, study: StudyInfo) -> float:
        score = 0.0
        for s in study.series:
            if (
                s.modality == "MR"
                and s.body_part == "brain"
                and s.sequence in _BRAIN_SEQUENCES
                and s.plane in ("axial", "sagittal", "coronal")
                and s.role == "primary"
                and s.n_images >= 10
            ):
                score = max(score, 1.0 if s.sequence == "T1" else 0.8)
        return score

    def plan(self, study: StudyInfo) -> PipelinePlan:
        return PipelinePlan(
            pipeline=self.name,
            stages=[
                Stage("fuse", 20),
                Stage("segment", 35),
                Stage("surface", 25),
                Stage("glb", 3),
                Stage("stats", 5),
                Stage("labels", 8),
                Stage("thumbs", 4),
            ],
        )

    def run(self, ctx: JobLike, study_dir: Path, study: StudyInfo) -> dict[str, Any]:
        from medmereport.analysis.stats import compute_stats
        from medmereport.export.labelmaps import coded_volume, read_meta, write_label_maps
        from medmereport.export.thumbs import ViewSource, choose_series, native_source, virtual_source, write_thumbs
        from medmereport.geometry.glb import display_codes, write_glb, write_regions_json
        from medmereport.geometry.surface import Budget, build_brain_model, known_regions, region_key

        sp = StageProgress(ctx, self.plan(study))
        budget = self.budget or Budget()

        sp("fuse", 0)
        build_volumes = self._build_volumes or _default_build_volumes()
        reference, extras = build_volumes(study_dir, study, sp.sub("fuse"))
        sp("segment", 0)
        backend = (self._best_backend or _default_best_backend())(reference)
        if backend is None:
            raise PipelineError("no_backend", "No brain segmentation backend is available.")
        lm = backend.segment(reference, extras, sp.sub("segment"))
        if lm.labels.shape != reference.data.shape:
            raise PipelineError("internal", "The segmentation does not match the reference grid.")
        if not known_regions(lm):
            raise PipelineError("segmentation_empty", "The segmentation found no brain structures.")
        sp.check_cancelled()

        model_dir = study_dir / "model"
        if model_dir.exists():
            shutil.rmtree(model_dir)
        model_dir.mkdir(parents=True)
        model = build_brain_model(reference, lm, budget, progress=sp.sub("surface"))
        for w in model.warnings:
            sp.warn(w)

        sp("glb", 0)
        glb_size = write_glb(model, model_dir / "scene.glb", budget.max_glb_bytes)
        caveats = [*lm.caveats, *model.warnings]
        write_regions_json(model_dir / "regions.json", model, lm.backend, lm.licence, caveats)

        sp("stats", 0)
        stats = compute_stats(reference, extras, lm, model.tissue, model.regions)
        for w in stats.warnings:
            sp.warn(w)

        sp("labels", 0)
        codes = display_codes(model)
        code_of_label = {
            c: codes[region_key(r.hemi, r.structure)]
            for c, r in known_regions(lm).items()
            if region_key(r.hemi, r.structure) in codes
        }
        coded = coded_volume(lm.labels, code_of_label)
        label_table = {code: key for key, code in codes.items()}
        stacks = write_label_maps(study_dir, [s.id for s in study.series], coded, lm.geometry, label_table)
        sp.check_cancelled()

        sp("thumbs", 0)
        metas = {sid: read_meta(study_dir / "series" / sid) for sid in stacks}
        chosen = choose_series(metas, set(stacks))
        sources: dict[str, ViewSource] = {}
        for view in ("axial", "sagittal", "coronal"):
            src = native_source(study_dir, chosen[view], stacks[chosen[view]]) if view in chosen else None
            sources[view] = src or virtual_source(view, reference.data, coded, lm.geometry)
        thumbs = write_thumbs(model_dir / "thumbs", "model/thumbs", sources, codes)

        prov = provenance(
            self,
            backend=lm.backend,
            licence=lm.licence,
            glb_bytes=glb_size,
            triangles=model.n_faces,
            tissue_mode=model.tissue.mode,
        )
        regions_out: dict[str, Any] = {}
        for key, ms in stats.regions.items():
            regions_out[key] = {"measurements": [m.model_dump() for m in ms], "thumbs": thumbs.get(key, [])}
        write_json(
            model_dir / "stats.json",
            {
                "summary": {k: m.model_dump() for k, m in stats.summary.items()},
                "regions": regions_out,
                "provenance": prov,
            },
        )
        warnings = list(dict.fromkeys([*sp.warnings]))
        write_json(
            model_dir / "status.json",
            {
                "pipeline": self.name,
                "version": self.version,
                "created": prov["created"],
                "warnings": warnings,
                "provenance": prov,
            },
        )
        sp("thumbs", 100)
        return {"model": "model/", "regions": len(model.meshes), "warnings": len(warnings)}


def model_job(ctx: Any) -> dict[str, Any]:
    """Job target: ``params = {study_dir, pipeline: "auto" | name}``."""
    from medmereport.pipelines.registry import choose_pipeline, get_pipeline

    study_dir = Path(ctx.params["study_dir"])
    study = StudyInfo.model_validate_json((study_dir / "study.json").read_text(encoding="utf-8"))
    name = ctx.params.get("pipeline") or "auto"
    if name == "auto":
        chosen = choose_pipeline(study)
        if chosen is None:
            raise PipelineError("no_pipeline", "No 3D pipeline fits this study yet.")
        name = chosen
    pipeline = get_pipeline(name)
    ctx.progress("plan", 0, name)
    result: dict[str, Any] = pipeline.run(ctx, study_dir, study)
    return result
