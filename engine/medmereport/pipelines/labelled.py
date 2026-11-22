"""Shared plumbing for label-volume model pipelines (``ct_body``, ``spine_mr``; docs/API_CONTRACT.md §5-§6).

* :func:`load_series_volume` reads the importer's full-precision ``volumes/{sid}.npz`` (real units:
  HU for CT), falling back to re-reading the DICOM files of the series when a source folder is given.
* :func:`block_downsample` / :func:`axis_aligned` prepare a working grid.
* :func:`write_artifacts` writes ``scene.glb``, ``regions.json``, label maps, thumbnails,
  ``stats.json`` and ``status.json`` exactly like the brain pipeline does.
"""

from __future__ import annotations

import shutil
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

import numpy as np
import SimpleITK as sitk
from PIL import Image

from medmereport.core.models import Caveat, Measurement
from medmereport.core.studies import write_json
from medmereport.dicom.series import Geometry
from medmereport.geometry.labels_surface import (
    LabelModel,
    SurfaceSpec,
    coded_labels,
    regions_document,
    write_model_glb,
)
from medmereport.geometry.space import from_sitk, index_to_lps, resample_into, to_sitk
from medmereport.pipelines.base import Pipeline, PipelineError, StageProgress, provenance
from medmereport.segment.base import Volume

NOT_DIAGNOSIS = Caveat(text="Automated estimate for education; not a diagnosis.")


def load_series_volume(study_dir: Path, sid: str, sequence: str, source: Path | None = None) -> Volume:
    """Full-precision volume of series ``sid``: the importer's npz, else the DICOM files under ``source``."""
    npz = Path(study_dir) / "volumes" / f"{sid}.npz"
    if npz.is_file():
        with np.load(npz) as z:
            geom = Geometry(
                origin=tuple(float(v) for v in z["origin"]),  # type: ignore[arg-type]
                spacing=tuple(float(v) for v in z["spacing"]),  # type: ignore[arg-type]
                direction=tuple(float(v) for v in z["direction"]),  # type: ignore[arg-type]
            )
            data = np.asarray(z["data"], np.float32)
        return Volume(data=data, geometry=geom, sequence=sequence, series_id=sid)
    if source is not None:
        from medmereport.dicom import load_volume
        from medmereport.dicom.read import read_header
        from medmereport.dicom.series import group_series, instance_from_header

        insts = []
        for p in sorted(Path(source).rglob("*")):
            if p.is_file():
                try:
                    insts.append(instance_from_header(p, read_header(p)))
                except Exception:  # noqa: BLE001,S112 - not DICOM
                    continue
        groups = [g for g in group_series(insts) if g.is_volume and g.geometry is not None]
        if groups:
            g = max(groups, key=lambda g: len(g.files))
            arr, geom = load_volume(g)
            return Volume(data=arr.astype(np.float32), geometry=geom, sequence=sequence, series_id=sid)
    raise PipelineError(
        "no_volume", "The full-precision volume of this series is missing; please import the disc again.", series=sid
    )


def block_downsample(vol: Volume, max_voxels: int, min_mm: float) -> Volume:
    """Integer block-mean downsampling so the grid has at most ``max_voxels`` and spacing >= ``min_mm``."""
    sp = np.array([vol.geometry.spacing[2], vol.geometry.spacing[1], vol.geometry.spacing[0]], float)  # z,y,x
    target = float(min_mm)
    shape = np.array(vol.data.shape, float)
    while True:
        f = np.maximum(1, np.floor(target / sp)).astype(int)
        if np.prod(np.floor(shape / f)) <= max_voxels or target > 20:
            break
        target *= 1.2
    if np.all(f == 1):
        return vol
    nz, ny, nx = (int(n // k) for n, k in zip(vol.data.shape, f, strict=True))
    d = vol.data[: nz * f[0], : ny * f[1], : nx * f[2]]
    d = d.reshape(nz, f[0], ny, f[1], nx, f[2]).mean(axis=(1, 3, 5), dtype=np.float32)
    g = vol.geometry
    centre = index_to_lps(g, np.array([[(f[0] - 1) / 2, (f[1] - 1) / 2, (f[2] - 1) / 2]], float))[0]
    geom = Geometry(
        origin=(float(centre[0]), float(centre[1]), float(centre[2])),
        spacing=(g.spacing[0] * f[2], g.spacing[1] * f[1], g.spacing[2] * f[0]),
        direction=g.direction,
    )
    return Volume(data=np.ascontiguousarray(d), geometry=geom, sequence=vol.sequence, series_id=vol.series_id)


def axis_aligned(vol: Volume) -> Volume:
    """Resample onto an identity-direction (LPS-aligned) grid keeping each axis's native spacing.

    Array axes become [z=Superior, y=Posterior, x=Left] increasing, which the spine pipeline relies on.
    """
    g = vol.geometry
    d = np.array(g.direction, float).reshape(3, 3)  # columns: LPS direction of array x, y, z (index i, j, k)
    if np.allclose(d, np.eye(3), atol=1e-4):
        return vol
    native = np.array(g.spacing, float)  # along array x, y, z
    spacing = np.zeros(3)
    for axis in range(3):  # LPS axis -> spacing of the most aligned array axis
        spacing[axis] = native[int(np.argmax(np.abs(d[axis, :])))]
    nz, ny, nx = vol.data.shape
    corners = np.array([[z, y, x] for z in (0, nz - 1) for y in (0, ny - 1) for x in (0, nx - 1)], float)
    pts = index_to_lps(g, corners)
    lo, hi = pts.min(0), pts.max(0)
    size = [int(np.floor((hi[i] - lo[i]) / spacing[i] + 1e-6)) + 1 for i in range(3)]
    ref = sitk.Image(size, sitk.sitkFloat32)
    ref.SetOrigin(tuple(float(v) for v in lo))
    ref.SetSpacing(tuple(float(v) for v in spacing))
    out = resample_into(to_sitk(vol.data.astype(np.float32), g), ref, default=float(np.min(vol.data)))
    arr, geom = from_sitk(out)
    return Volume(data=arr.astype(np.float32), geometry=geom, sequence=vol.sequence, series_id=vol.series_id)


def volume_measure(
    key: str, label: str, voxels: int, vox_mm3: float, method: str, caveats: list[Caveat]
) -> Measurement:
    return Measurement(
        key=key, label=label, value=round(voxels * vox_mm3 / 1000.0, 1), unit="cm³", method=method, caveats=caveats
    )


@dataclass
class ModelOutputs:
    """Everything :func:`write_artifacts` needs besides the pipeline itself."""

    model: LabelModel
    labels: np.ndarray  # int label volume on ``geometry``
    geometry: Geometry
    specs: list[SurfaceSpec]
    reference: Volume  # intensity volume on ``geometry`` (virtual thumbnails)
    framing: str
    backend: str
    licence: str
    caveats: list[str]
    summary: dict[str, Measurement]
    regions: dict[str, list[Measurement]]
    label_series: list[str]  # exported series that get 2D label maps (the segmented one first)
    primary_series: str | None = None
    layer_defaults: dict[str, bool] = field(default_factory=dict)
    extra_provenance: dict[str, Any] = field(default_factory=dict)


def _write_label_maps(
    study_dir: Path, sids: list[str], coded: np.ndarray, geom: Geometry, table: dict[str, str]
) -> dict[str, np.ndarray]:
    from medmereport.export.labelmaps import label_stack, read_meta, stack_from_meta

    out: dict[str, np.ndarray] = {}
    for sid in sids:
        sdir = study_dir / "series" / sid
        if not (sdir / "meta.json").is_file():
            continue
        meta = read_meta(sdir)
        stack = stack_from_meta(meta)
        if stack is None:
            continue
        labs = label_stack(stack, coded, geom)
        if not labs.any():
            continue
        for k in range(stack.n):
            Image.fromarray(labs[k]).save(sdir / f"L{k:03d}.png", optimize=True)
        meta["labels"] = True
        meta["labelTable"] = table
        write_json(sdir / "meta.json", meta)
        out[sid] = labs
    return out


def write_artifacts(
    pipeline: Pipeline, sp: StageProgress, study_dir: Path, out: ModelOutputs, max_glb_bytes: int = 30_000_000
) -> dict[str, Any]:
    """Write the §5 artifact set for ``out`` under ``study_dir/model`` and return the job result."""
    from medmereport.export.labelmaps import read_meta
    from medmereport.export.thumbs import ViewSource, native_source, virtual_source, write_thumbs

    model_dir = study_dir / "model"
    if model_dir.exists():
        shutil.rmtree(model_dir)
    model_dir.mkdir(parents=True)

    sp("glb", 0)
    glb_size = write_model_glb(out.model, model_dir / "scene.glb", max_glb_bytes)
    caveats = list(dict.fromkeys([*out.caveats, *out.model.warnings]))
    doc = regions_document(
        out.model,
        pipeline=pipeline.name,
        framing=out.framing,
        backend=out.backend,
        licence=out.licence,
        caveats=caveats,
        layer_defaults=out.layer_defaults,
        primary_series=out.primary_series,
    )
    write_json(model_dir / "regions.json", doc)

    sp("labels", 0)
    coded = coded_labels(out.labels, out.model, out.specs)
    table = {str(c): k for k, c in sorted(out.model.codes.items(), key=lambda kv: kv[1])}
    stacks = _write_label_maps(study_dir, out.label_series, coded, out.geometry, table)
    sp.check_cancelled()

    sp("thumbs", 0)
    sources: dict[str, ViewSource] = {}
    for view in ("axial", "sagittal", "coronal"):
        src = None
        for sid in stacks:
            if read_meta(study_dir / "series" / sid).get("plane") == view:
                src = native_source(study_dir, sid, stacks[sid])
                break
        sources[view] = src or virtual_source(view, out.reference.data, coded, out.geometry)
    thumbs = write_thumbs(model_dir / "thumbs", "model/thumbs", sources, out.model.codes)

    prov = provenance(
        pipeline,
        backend=out.backend,
        licence=out.licence,
        glb_bytes=glb_size,
        triangles=out.model.n_faces,
        **out.extra_provenance,
    )
    regions_out: dict[str, Any] = {}
    for key in sorted(set(out.regions) | set(out.model.regions)):
        ms = out.regions.get(key, [])
        regions_out[key] = {"measurements": [m.model_dump() for m in ms], "thumbs": thumbs.get(key, [])}
    write_json(
        model_dir / "stats.json",
        {
            "summary": {k: m.model_dump() for k, m in out.summary.items()},
            "regions": regions_out,
            "provenance": prov,
        },
    )
    warnings = list(dict.fromkeys(sp.warnings))
    write_json(
        model_dir / "status.json",
        {
            "pipeline": pipeline.name,
            "version": pipeline.version,
            "created": prov["created"],
            "warnings": warnings,
            "provenance": prov,
        },
    )
    sp("thumbs", 100)
    return {"model": "model/", "regions": len(doc["regions"]), "warnings": len(warnings)}
