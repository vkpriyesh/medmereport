"""``vessels`` model pipeline (T3.3): MR TOF angiography or CT angiography -> artery surface model.

Stages: load (best angiography series), extract (classical tracer, :mod:`.extract`), mesh, write. Writes the
same artifact set as every model pipeline (docs/API_CONTRACT.md §5/§6): ``model/scene.glb`` (``V__cow`` /
``V__neck`` for TOF, ``V__body`` for CTA, plus ``H__skin`` for TOF), ``regions.json`` (with ``pipeline``,
``framing``, ``layers``), ``stats.json`` and ``status.json``. No diagnostic claims: the only numbers are
traced lumen volumes, each with its method and caveats.
"""

from __future__ import annotations

import shutil
from pathlib import Path
from typing import Any, ClassVar

import numpy as np

from medmereport.core.models import SeriesInfo, StudyInfo
from medmereport.core.studies import write_json
from medmereport.pipelines.base import JobLike, PipelineError, PipelinePlan, Stage, StageProgress, provenance
from medmereport.segment.base import Volume

BACKEND = "classical-vessels@1"
LICENCE = "Apache-2.0 (medmereport classical filters; no model weights)"
MAX_GLB_BYTES = 30_000_000


def _is_angio(s: SeriesInfo, sequence: str, modality: str) -> bool:
    return (
        s.modality == modality
        and s.sequence == sequence
        and s.role == "primary"
        and s.plane in ("axial", "sagittal", "coronal", "oblique")
        and s.n_images >= 20
    )


def _rank(c: Any) -> tuple[float, int]:
    return (float(np.prod(c.geometry.spacing)), -int(c.n))


class VesselsPipeline:
    name: ClassVar[str] = "vessels"
    version: ClassVar[str] = "0.1.0"

    def applies(self, study: StudyInfo) -> float:
        score = 0.0
        for s in study.series:
            if _is_angio(s, "TOF", "MR"):
                score = max(score, 0.9)
            elif _is_angio(s, "CTA", "CT"):
                score = max(score, 0.95)
        return score

    def plan(self, study: StudyInfo) -> PipelinePlan:
        return PipelinePlan(
            pipeline=self.name,
            stages=[Stage("load", 10), Stage("extract", 60), Stage("mesh", 22), Stage("write", 8)],
        )

    def _pick(self, study_dir: Path, study: StudyInfo) -> tuple[Volume, str]:
        from medmereport.pipelines.brain_mr.fusion import candidates_from_study

        ids_tof = {s.id for s in study.series if _is_angio(s, "TOF", "MR")}
        ids_cta = {s.id for s in study.series if _is_angio(s, "CTA", "CT")}
        cands = candidates_from_study(study_dir, study)
        tof = sorted((c for c in cands if c.id in ids_tof), key=_rank)
        if tof:
            c = tof[0]
            return Volume(data=c.load(), geometry=c.geometry, sequence="TOF", series_id=c.id), "tof"
        cta = sorted(
            (c for c in cands if c.id in ids_cta and (study_dir / "volumes" / f"{c.id}.npz").is_file()), key=_rank
        )
        if cta:
            c = cta[0]
            return Volume(data=c.load(), geometry=c.geometry, sequence="CTA", series_id=c.id), "cta"
        if ids_cta:
            raise PipelineError(
                "no_hu", "This CT angiogram was imported without full-precision values (HU); please re-import it."
            )
        raise PipelineError("no_angio_series", "No angiography series (MR TOF or CT angiogram) was found.")

    def run(self, ctx: JobLike, study_dir: Path, study: StudyInfo) -> dict[str, Any]:
        from medmereport.geometry.glb import glb_bytes
        from medmereport.geometry.mesh import decimate
        from medmereport.pipelines.vessels.extract import extract_cta, extract_tof
        from medmereport.pipelines.vessels.layers import (
            CTA_CAVEATS,
            TOF_CAVEATS,
            VESSEL_CAVEATS,
            layer_list,
            region_entry,
            skin_layer,
            vessel_layers,
            volume_measurement,
        )

        sp = StageProgress(ctx, self.plan(study))
        sp("load", 0)
        vol, kind = self._pick(study_dir, study)
        sp.check_cancelled()

        sp("extract", 0, kind)

        def prog(pct: float, msg: str = "") -> None:
            sp("extract", pct, msg)

        res = extract_tof(vol, progress=prog) if kind == "tof" else extract_cta(vol, progress=prog)
        for w in res.warnings:
            sp.warn(w)
        if not res.mask.any():
            raise PipelineError("vessels_empty", "No arteries could be traced in this series.")
        sp.check_cancelled()

        sp("mesh", 0)
        layers = vessel_layers(res)
        if kind == "tof" and res.head is not None:
            sp("mesh", 70, "skin")
            layers.merge(skin_layer(res.head, res.grid.geometry))
        if not any(k.startswith("V|") for k in layers.meshes):
            raise PipelineError("vessels_empty", "No arteries could be traced in this series.")

        sp("write", 0)
        model_dir = study_dir / "model"
        if model_dir.exists():
            shutil.rmtree(model_dir)
        model_dir.mkdir(parents=True)
        meshes = dict(layers.meshes)
        data = glb_bytes(meshes)
        for _ in range(4):
            if len(data) <= MAX_GLB_BYTES:
                break
            f = MAX_GLB_BYTES / len(data) * 0.9
            meshes = {k: decimate(m, max(4, int(m.n_faces * f))) for k, m in meshes.items()}
            data = glb_bytes(meshes)
        (model_dir / "scene.glb").write_bytes(data)

        caveats = [c.text for c in (*VESSEL_CAVEATS, *(TOF_CAVEATS if kind == "tof" else CTA_CAVEATS))]
        defaults = {"vessel": True, **{k: v for k, v in layers.defaults.items() if k != "vessel"}}
        if "V|neck" in meshes:
            # the neck arteries are half of a TOF vessels-only model: show them (the brain model keeps them hidden)
            defaults = {"vessel": True, "neck": True, **{k: v for k, v in defaults.items() if k != "vessel"}}
        write_json(
            model_dir / "regions.json",
            {
                "backend": BACKEND,
                "licence": LICENCE,
                "caveats": caveats,
                "pipeline": self.name,
                "framing": "head" if kind == "tof" else "body",
                "layers": layer_list(defaults),
                "regions": [region_entry(k, meshes[k]) for k in sorted(meshes)],
            },
        )
        total = volume_measurement(res.volume_mm3, kind)
        total.label = "Traced artery lumen volume (all)"
        summary = {"vessel_volume": total.model_dump()}
        prov = provenance(
            self,
            backend=BACKEND,
            licence=LICENCE,
            series=vol.series_id,
            kind=kind,
            grid_mm=round(res.grid.spacing, 3),
            components=res.components,
            glb_bytes=len(data),
            triangles=sum(m.n_faces for m in meshes.values()),
        )
        regions_out = {
            k: {"measurements": [m.model_dump() for m in layers.measurements.get(k, [])], "thumbs": []}
            for k in sorted(meshes)
        }
        write_json(model_dir / "stats.json", {"summary": summary, "regions": regions_out, "provenance": prov})
        warnings = list(dict.fromkeys([*sp.warnings, *layers.warnings]))
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
        sp("write", 100)
        return {"model": "model/", "regions": len(meshes), "warnings": len(warnings)}
