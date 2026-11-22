"""``spine_mr`` model pipeline (docs/API_CONTRACT.md §6): sagittal T2 -> cord, CSF, vertebral bodies, discs.

Sagittal-first: the sagittal T2 series is the source volume and the primary 2D view
(``regions.json["primary_series"]``). Classical only (see :mod:`.classical` for the method).
"""

from __future__ import annotations

from pathlib import Path
from typing import Any, ClassVar

import numpy as np

from medmereport.core.models import Caveat, Measurement, SeriesInfo, StudyInfo
from medmereport.pipelines.base import JobLike, PipelineError, PipelinePlan, Stage, StageProgress

LICENCE = "Apache-2.0 (medmereport classical spine segmentation)"


def series_score(s: SeriesInfo) -> float:
    if s.modality != "MR" or s.role != "primary" or s.plane != "sagittal" or s.n_images < 5:
        return 0.0
    if s.sequence not in ("T2", "STIR"):
        return 0.0
    score = 1.0 if s.sequence == "T2" else 0.6  # STIR: also bright CSF, but fat suppressed
    if s.body_part == "spine":
        score += 1.0
    elif s.body_part != "unknown":
        return 0.0
    return score + min(s.n_images, 30) / 300.0


def choose_spine_series(study: StudyInfo) -> SeriesInfo | None:
    cands = [(series_score(s), s.id, s) for s in study.series if series_score(s) > 0]
    return max(cands, key=lambda t: (t[0], t[1]))[2] if cands else None


class SpineMRPipeline:
    name: ClassVar[str] = "spine_mr"
    version: ClassVar[str] = "0.1.0"

    def __init__(self, budget: Any = None) -> None:
        self.budget = budget

    def applies(self, study: StudyInfo) -> float:
        best = choose_spine_series(study)
        if best is None:
            return 0.0
        return 0.9 if best.body_part == "spine" else 0.3

    def plan(self, study: StudyInfo) -> PipelinePlan:
        return PipelinePlan(
            pipeline=self.name,
            stages=[
                Stage("load", 8),
                Stage("segment", 20),
                Stage("surface", 40),
                Stage("glb", 4),
                Stage("stats", 4),
                Stage("labels", 12),
                Stage("thumbs", 8),
            ],
        )

    def backends(self) -> dict[str, bool]:
        return {"classical": True}

    def run(self, ctx: JobLike, study_dir: Path, study: StudyInfo) -> dict[str, Any]:
        from medmereport.geometry.labels_surface import LabelBudget, SurfaceSpec, build_label_model
        from medmereport.pipelines.labelled import (
            NOT_DIAGNOSIS,
            ModelOutputs,
            axis_aligned,
            block_downsample,
            load_series_volume,
            volume_measure,
            write_artifacts,
        )
        from medmereport.pipelines.spine_mr import classical as C

        sp = StageProgress(ctx, self.plan(study))
        want = str(ctx.params.get("backend") or "auto")
        if want not in ("auto", "classical"):
            raise PipelineError("backend_unavailable", f"The spine pipeline has no {want} backend.")
        sp("load", 0)
        series = choose_spine_series(study)
        if series is None:
            raise PipelineError("no_series", "This study has no sagittal T2 spine series.")
        src = ctx.params.get("source")
        vol = load_series_volume(study_dir, series.id, series.sequence, Path(src) if src else None)
        vol = block_downsample(vol, max_voxels=20_000_000, min_mm=0.5)
        work = axis_aligned(vol)
        del vol
        sp("load", 100)
        sp.check_cancelled()

        sp("segment", 0)
        seg = C.segment_spine(work.data, work.geometry)
        for w in seg.warnings:
            sp.warn(w)
        if not (seg.labels > 0).any():
            raise PipelineError("segmentation_empty", "The spinal canal could not be found on this image.")
        sp("segment", 100)
        sp.check_cancelled()

        labels = seg.labels
        specs = [
            SurfaceSpec("M|spinal_csf", (C.CSF, C.CORD), smooth_mm=1.0),
            SurfaceSpec("M|spinal_cord", (C.CORD,), smooth_mm=0.8),
            SurfaceSpec("M|vertebral_column", (C.BODY,), smooth_mm=1.0, weight=1.4),
            SurfaceSpec("M|intervertebral_disc", (C.DISC,), smooth_mm=1.0),
        ]
        budget = self.budget or LabelBudget(max_triangles=400_000, min_mm=0.6)
        model = build_label_model(labels, work.geometry, specs, budget, progress=sp.sub("surface"))
        sp.check_cancelled()

        sp("stats", 0)
        geom = work.geometry
        sx, sy, sz = (float(v) for v in geom.spacing)
        vox = sx * sy * sz
        base = [NOT_DIAGNOSIS, Caveat(text="Sagittal slices are thick; side-to-side size is coarse.")]
        regions: dict[str, list[Measurement]] = {}
        summary: dict[str, Measurement] = {}
        partial = Caveat(text="Only what is inside the image is measured; the scan may not cover the whole spine.")
        cord = labels == C.CORD
        if cord.any():
            zs = np.nonzero(cord.any(axis=(1, 2)))[0]
            ap = [float(np.ptp(np.nonzero(cord[k].any(axis=1))[0]) + 1) * sy for k in zs]
            regions["M|spinal_cord"] = [
                volume_measure("volume", "Volume in view", int(cord.sum()), vox,
                               "Voxel count x voxel volume of the dark cord inside the bright fluid.", base),
                Measurement(key="length_in_view", label="Length in view", value=round((len(zs)) * sz, 1), unit="mm",
                            method="Head-to-foot extent of the cord within the image.",
                            caveats=[*base, Caveat(text="The image may not show the whole cord.")]),
                Measurement(key="ap_diameter_median", label="Front-to-back width (median)",
                            value=round(float(np.median(ap)), 1), unit="mm",
                            method="Median front-to-back extent of the cord across axial levels.",
                            caveats=[*base, Caveat(text="Not a clinical cord-compression measurement.")]),
            ]  # fmt: skip
            summary["cord_length_mm"] = Measurement(
                key="cord_length_mm", label="Spinal cord length in view", value=round(len(zs) * sz, 1), unit="mm",
                method="Number of head-to-foot slices containing the dark cord x slice spacing.",
                caveats=[*base, partial])  # fmt: skip
        canal = (labels == C.CSF) | cord
        if canal.any():
            zs = np.nonzero(canal.any(axis=(1, 2)))[0]
            summary["canal_length_mm"] = Measurement(
                key="canal_length_mm", label="Spinal canal length in view", value=round(len(zs) * sz, 1), unit="mm",
                method="Number of head-to-foot slices containing the fluid-filled canal x slice spacing.",
                caveats=[*base, partial])  # fmt: skip
            ap = [float(np.ptp(np.nonzero(canal[k].any(axis=1))[0]) + 1) * sy for k in zs]
            regions["M|spinal_csf"] = [
                volume_measure("volume", "Fluid volume in view", int((labels == C.CSF).sum()), vox,
                               "Voxel count x voxel volume of the bright fluid (CSF) in the canal.", base),
                Measurement(key="canal_ap_median", label="Canal front-to-back width (median)",
                            value=round(float(np.median(ap)), 1), unit="mm",
                            method="Median front-to-back extent of the fluid-filled canal across axial levels.",
                            caveats=[*base, Caveat(text="Not a stenosis grading; the bony canal is not measured.",
                                                   severity="warn")]),
            ]  # fmt: skip
        summary["discs_detected"] = Measurement(
            key="discs_detected", label="Discs detected", value=float(len(seg.discs)), unit="",
            method="Bright bands in the column's head-to-foot intensity profile (T2-bright discs).",
            caveats=[*base, partial, Caveat(text="Dark (dehydrated) discs may be missed; levels are not named.",
                                            severity="warn")])  # fmt: skip
        summary["vertebral_bodies_detected"] = Measurement(
            key="vertebral_bodies_detected", label="Vertebral bodies detected", value=float(len(seg.bodies)), unit="",
            method="Column pieces between two detected discs (bodies cut by the image edge are not counted).",
            caveats=[*base, partial, Caveat(text="Depends on disc detection; not a vertebra count of the whole spine.",
                                            severity="warn")])  # fmt: skip
        if seg.discs:
            ms = [
                Measurement(key="count_in_view", label="Discs detected", value=float(len(seg.discs)), unit="",
                            method="Bright bands in the column's head-to-foot intensity profile.",
                            caveats=[*base, Caveat(text="Dark (dehydrated) discs may be missed.", severity="warn")])
            ]  # fmt: skip
            for i, (_, h) in enumerate(seg.discs, start=1):
                ms.append(
                    Measurement(
                        key=f"disc_{i}_height",
                        label=f"Disc {i} height (counted from the top of the image)",
                        value=round(h, 1),
                        unit="mm",
                        method="Head-to-foot extent of the bright band at the centre of the column.",
                        caveats=[*base, Caveat(text="Levels are not named (L4-L5 etc.); counted from the top only.")],
                    )
                )
            regions["M|intervertebral_disc"] = ms
        if seg.bodies:
            regions["M|vertebral_column"] = [
                Measurement(key="bodies_in_view", label="Vertebral bodies fully in view", value=float(len(seg.bodies)),
                            unit="", method="Column pieces between detected discs.", caveats=base),
                Measurement(key="body_height_median", label="Vertebral body height (median)",
                            value=round(float(np.median(seg.bodies)), 1), unit="mm",
                            method="Median head-to-foot extent of the column pieces between discs.",
                            caveats=[*base, Caveat(text="Not a fracture assessment.", severity="warn")]),
            ]  # fmt: skip

        caveats = [
            "Shapes come from brightness on one sagittal T2 image; thick slices make side-to-side shape coarse.",
            "Vertebral levels are not numbered; the vertebral bodies are shown together as the vertebral column.",
            "Posterior bony parts (laminae, spinous processes) and nerve roots are not modelled.",
        ]
        out = ModelOutputs(
            model=model,
            labels=labels,
            geometry=geom,
            specs=specs,
            reference=work,
            framing="spine",
            backend="classical-spine@1",
            licence=LICENCE,
            caveats=caveats,
            summary=summary,
            regions=regions,
            label_series=[series.id],
            primary_series=series.id,
            extra_provenance={"series": series.id},
        )
        return write_artifacts(self, sp, study_dir, out, budget.max_glb_bytes)
