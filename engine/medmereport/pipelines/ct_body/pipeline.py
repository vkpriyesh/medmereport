"""``ct_body`` model pipeline (docs/API_CONTRACT.md §6): CT -> skin, skeleton, lungs, airway (+ organs).

Stages: load (best CT series as a float HU volume), segment (classical HU thresholds, or the
optional TotalSegmentator backend), surface (one mesh per label), glb, stats, labels, thumbs.

Backend choice (``params.backend``): ``classical`` always works; ``totalseg`` needs the optional
extra and pulled weights (else ``backend_unavailable``); ``auto`` uses TotalSegmentator when it is
available and otherwise falls back to classical with a note.
"""

from __future__ import annotations

from pathlib import Path
from typing import Any, ClassVar

import numpy as np

from medmereport.core.models import Caveat, Measurement, SeriesInfo, StudyInfo
from medmereport.pipelines.base import JobLike, PipelineError, PipelinePlan, Stage, StageProgress
from medmereport.segment.base import LabelMap, Volume

CLASSICAL_LICENCE = "Apache-2.0 (medmereport classical HU thresholds)"
_BODY_CODE = 30_000  # body voxels outside any TotalSegmentator label (skin mesh only)


def series_score(s: SeriesInfo) -> float:
    """How suitable a series is as the CT source volume (0 = unusable)."""
    if s.modality != "CT" or s.role != "primary" or s.n_images < 20:
        return 0.0
    if s.plane not in ("axial", "oblique", "coronal", "sagittal"):
        return 0.0
    score = 1.0 if s.plane == "axial" else 0.6
    th = s.slice_thickness or 5.0
    score += 1.0 / (1.0 + th)  # thin slices first
    score += min(s.n_images, 600) / 6000.0
    if s.sequence == "CTA":
        score -= 0.2
    return score


def choose_ct_series(study: StudyInfo) -> SeriesInfo | None:
    cands = [(series_score(s), s.id, s) for s in study.series if series_score(s) > 0]
    if not cands:
        return None
    return max(cands, key=lambda t: (t[0], t[1]))[2]


def _totalseg_backend() -> Any:
    try:
        from medmereport.segment.totalseg import TotalSegBackend

        return TotalSegBackend("total", fast=True)
    except Exception:  # noqa: BLE001 - an optional backend must never break the pipeline
        return None


def _hu_measures(hu: np.ndarray, mask: np.ndarray, vox_mm3: float, what: str, extra: list[Caveat]) -> list[Measurement]:
    from medmereport.pipelines.labelled import NOT_DIAGNOSIS, volume_measure

    n = int(mask.sum())
    vals = hu[mask]
    caveats = [NOT_DIAGNOSIS, *extra]
    out = [
        volume_measure(
            "volume",
            "Volume",
            n,
            vox_mm3,
            f"Voxel count x voxel volume of the {what} mask on the working grid.",
            [*caveats, Caveat(text="Only the part inside the scanned range is counted.")],
        )
    ]
    if n:
        out.append(
            Measurement(
                key="mean_hu",
                label="Mean density",
                value=round(float(vals.mean()), 1),
                unit="HU",
                method=f"Mean Hounsfield units over the {what} mask (standard deviation {float(vals.std()):.0f} HU).",
                caveats=[
                    *caveats,
                    Caveat(text="Density depends on contrast, scanner, kernel and breathing; not a reference value."),
                ],
            )
        )
    return out


class CTBodyPipeline:
    name: ClassVar[str] = "ct_body"
    version: ClassVar[str] = "0.1.0"

    def __init__(self, totalseg: Any = None, budget: Any = None) -> None:
        self._totalseg = totalseg
        self.budget = budget

    def applies(self, study: StudyInfo) -> float:
        best = choose_ct_series(study)
        if best is None:
            return 0.0
        if best.sequence == "CTA" or best.body_part == "vessels":
            return 0.5  # a vessels pipeline should win for angiography
        return 0.6 if best.body_part == "brain" else 0.9

    def plan(self, study: StudyInfo) -> PipelinePlan:
        return PipelinePlan(
            pipeline=self.name,
            stages=[
                Stage("load", 8),
                Stage("segment", 30),
                Stage("surface", 40),
                Stage("glb", 4),
                Stage("stats", 4),
                Stage("labels", 8),
                Stage("thumbs", 6),
            ],
        )

    def backends(self) -> dict[str, bool]:
        ts = self._totalseg if self._totalseg is not None else _totalseg_backend()
        return {"classical": True, "totalseg": bool(ts is not None and ts.available())}

    def run(self, ctx: JobLike, study_dir: Path, study: StudyInfo) -> dict[str, Any]:
        from medmereport.geometry.labels_surface import LabelBudget, SurfaceSpec, build_label_model
        from medmereport.pipelines.ct_body import classical as C
        from medmereport.pipelines.labelled import (
            NOT_DIAGNOSIS,
            ModelOutputs,
            block_downsample,
            load_series_volume,
            volume_measure,
            write_artifacts,
        )

        sp = StageProgress(ctx, self.plan(study))
        want = str(ctx.params.get("backend") or "auto")
        if want not in ("auto", "classical", "totalseg"):
            raise PipelineError("unknown_backend", f"Unknown backend: {want}")
        sp("load", 0)
        series = choose_ct_series(study)
        if series is None:
            raise PipelineError("no_series", "This study has no CT series suitable for a 3D model.")
        src = ctx.params.get("source")
        vol = load_series_volume(study_dir, series.id, "CT", Path(src) if src else None)
        work = block_downsample(vol, max_voxels=28_000_000, min_mm=1.0)
        del vol
        sp("load", 100)
        sp.check_cancelled()

        ts = None
        if want in ("auto", "totalseg"):
            ts = self._totalseg if self._totalseg is not None else _totalseg_backend()
            if ts is not None and not ts.available():
                ts = None
            if ts is None and want == "totalseg":
                raise PipelineError(
                    "backend_unavailable",
                    "TotalSegmentator is not installed or its weights are missing "
                    "(medmereport models pull totalseg-total-fast).",
                )
            if ts is None:
                sp.warn("Detailed organ labels need the optional TotalSegmentator extra; showing classical surfaces.")

        sp("segment", 0)
        hu = work.data
        geom = work.geometry
        vox = float(np.prod(geom.spacing))
        seg = C.segment_ct(hu, geom)
        for w in seg.warnings:
            sp.warn(w)
        if not seg.body.any():
            raise PipelineError("segmentation_empty", "No body was found on this CT.")
        caveats = [
            "Surfaces come from fixed Hounsfield-unit thresholds (body > -500, air < -400, bone > 250 HU).",
            "Contrast-filled vessels, calcifications and metal can appear as bone; the couch is removed "
            "automatically but small remnants are possible.",
        ]
        lm: LabelMap | None = None
        if ts is not None:
            lm = ts.segment(Volume(hu, geom, "CT", series.id), [], sp.sub("segment"))
            caveats = [*lm.caveats, caveats[0]]
        sp("segment", 100)
        sp.check_cancelled()

        if lm is None:
            labels = seg.labels.astype(np.int16)
            specs = [
                SurfaceSpec("H|skin", (C.SOFT, C.BONE, C.LUNG_L, C.LUNG_R, C.AIRWAY), smooth_mm=2.0, weight=0.6),
                SurfaceSpec("B|skeleton", (C.BONE,), smooth_mm=0.7, weight=1.6, min_faces=20_000),
                SurfaceSpec("L|lung", (C.LUNG_L,), smooth_mm=1.5),
                SurfaceSpec("R|lung", (C.LUNG_R,), smooth_mm=1.5),
                SurfaceSpec("M|airway", (C.AIRWAY,), smooth_mm=0.8, min_faces=4_000),
            ]
            backend, licence = "classical-hu@1", CLASSICAL_LICENCE
        else:
            labels = lm.labels.astype(np.int16)
            labels[(labels == 0) & seg.body] = _BODY_CODE
            by_key: dict[str, list[int]] = {}
            for code, r in lm.regions.items():
                by_key.setdefault(f"{r.hemi}|{r.structure}", []).append(code)
            all_codes = (*sorted(c for cs in by_key.values() for c in cs), _BODY_CODE)
            specs = [SurfaceSpec("H|skin", all_codes, smooth_mm=2.0, weight=0.6)]
            from medmereport.knowledge.structures import ALL

            for key, codes in sorted(by_key.items()):
                bone = ALL[key.split("|", 1)[1]][1] == "bone"
                specs.append(SurfaceSpec(key, tuple(codes), smooth_mm=0.8 if bone else 1.2))
            backend, licence = lm.backend, lm.licence

        budget = self.budget or LabelBudget()
        model = build_label_model(labels, geom, specs, budget, progress=sp.sub("surface"))
        sp.check_cancelled()

        sp("stats", 0)
        summary: dict[str, Measurement] = {}
        regions: dict[str, list[Measurement]] = {}
        summary["body_volume"] = volume_measure(
            "body_volume",
            "Body volume in the scanned range",
            int(seg.body.sum()),
            vox,
            "Voxels inside the body outline (HU > -500, couch removed, holes filled) x voxel volume.",
            [NOT_DIAGNOSIS, Caveat(text="Only the scanned range is included; arms may be cut off.")],
        )
        bone_mask = seg.labels == C.BONE
        if bone_mask.any():
            bm = _hu_measures(hu, bone_mask, vox, "bone (> 250 HU)", [])
            summary["bone_volume"] = bm[0].model_copy(update={"key": "bone_volume", "label": "Bone volume"})
            if len(bm) > 1:
                summary["bone_mean_hu"] = bm[1].model_copy(update={"key": "bone_mean_hu", "label": "Bone mean density"})
        for spec in specs:
            if spec.clickable and spec.key in model.regions:
                mask = np.isin(labels, spec.codes)
                what = spec.structure.replace("_", " ")
                extra = []
                if spec.structure == "lung":
                    extra.append(Caveat(text="Lung volume depends on how deeply you breathed in during the scan."))
                regions[spec.key] = _hu_measures(hu, mask, vox, what, extra)
        lungs = [m for k in ("L|lung", "R|lung") for m in regions.get(k, [])[:1]]
        if lungs:
            summary["lung_volume"] = Measurement(
                key="lung_volume",
                label="Both lungs",
                value=round(sum(m.value or 0.0 for m in lungs), 1),
                unit="cm³",
                method="Sum of the left and right lung volumes.",
                caveats=[NOT_DIAGNOSIS, Caveat(text="Depends on breath-hold depth; not a lung-function test.")],
            )

        out = ModelOutputs(
            model=model,
            labels=labels,
            geometry=geom,
            specs=specs,
            reference=work,
            framing="body",
            backend=backend,
            licence=licence,
            caveats=caveats,
            summary=summary,
            regions=regions,
            label_series=[series.id],
            layer_defaults={"skin": False},
            extra_provenance={"series": series.id, "working_spacing_mm": [round(v, 3) for v in geom.spacing]},
        )
        return write_artifacts(self, sp, study_dir, out, budget.max_glb_bytes)
