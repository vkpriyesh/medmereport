"""Multi-stack fusion (T2.3): synthetic phantoms only, no network, no real data."""

from __future__ import annotations

import numpy as np
import pytest
import SimpleITK as sitk

from medmereport.core.models import SeriesInfo, StudyInfo
from medmereport.dicom.series import Geometry
from medmereport.export.slices import export_stack
from medmereport.geometry.space import resample_into, to_sitk
from medmereport.pipelines.brain_mr import fusion as F
from medmereport.segment.base import Volume

N = 96  # truth grid (1 mm)
SLICE = 4  # mm, thick slices
AXIAL = (1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0)
# sagittal: columns run posterior (+y), rows run inferior (-z), normal = x_col x y_col = -x
SAGITTAL = (0.0, 0.0, -1.0, 1.0, 0.0, 0.0, 0.0, -1.0, 0.0)


def _truth(seed: int = 3) -> sitk.Image:
    rng = np.random.default_rng(seed)
    z, y, x = np.indices((N, N, N), dtype=np.float32)
    c = (N - 1) / 2
    a = np.zeros((N, N, N), np.float32)
    head = ((x - c) ** 2 + (y - c) ** 2 + (z - c) ** 2) < (0.42 * N) ** 2
    a[head] = 0.4
    for _ in range(140):  # small structures (2-5 mm) with detail along every axis
        p = rng.uniform(0.2 * N, 0.8 * N, 3)
        r = rng.uniform(1.0, 2.5)
        a += rng.uniform(0.3, 0.8) * np.exp(-((z - p[0]) ** 2 + (y - p[1]) ** 2 + (x - p[2]) ** 2) / (2 * r * r))
    img = sitk.GetImageFromArray(a * head)
    img.SetOrigin((-c, -c, -c))
    return img


def _stack(truth: sitk.Image, direction: tuple[float, ...], stack_to_truth: sitk.Transform, seed: int) -> Volume:
    """Thick-slice acquisition: sample 1 mm along the normal and box-average ``SLICE`` sub-slices."""
    d = np.array(direction).reshape(3, 3)
    c = (N - 1) / 2
    # cover the same cube; origin = cube corner expressed along the stack axes
    corner = -c * (d[:, 0] + d[:, 1] + d[:, 2])
    hr = sitk.Image([N, N, N], sitk.sitkFloat32)
    hr.SetOrigin(tuple(corner))
    hr.SetDirection(direction)
    a = sitk.GetArrayFromImage(resample_into(truth, hr, stack_to_truth))
    nz = N // SLICE
    thick = a[: nz * SLICE].reshape(nz, SLICE, N, N).mean(1)
    thick += np.random.default_rng(seed).normal(0, 0.01, thick.shape).astype(np.float32)
    origin = corner + d[:, 2] * (SLICE - 1) / 2
    geom = Geometry(tuple(origin), (1.0, 1.0, float(SLICE)), direction)  # type: ignore[arg-type]
    return Volume(np.clip(thick, 0, None).astype(np.float32), geom, "T1", f"s{seed}")


def _rmse(a: np.ndarray, b: np.ndarray, m: np.ndarray) -> float:
    return float(np.sqrt(np.mean((a[m] - b[m]) ** 2)))


@pytest.fixture(scope="module")
def phantom():
    truth = _truth()
    ax = _stack(truth, AXIAL, sitk.Euler3DTransform(), 1)
    motion = sitk.Euler3DTransform()  # head moved between the two acquisitions
    motion.SetRotation(*np.deg2rad([2.0, -1.5, 1.0]))
    motion.SetTranslation((1.5, -2.0, 1.0))
    sag = _stack(truth, SAGITTAL, motion, 2)
    return truth, ax, sag, motion


def test_fused_resolution_beats_each_input(phantom):
    truth, ax, sag, motion = phantom
    fused, warnings = F.fuse_stacks(ax, [sag], spacing=1.0)
    assert not warnings
    assert fused.data.shape[0] > ax.data.shape[0]  # iso grid
    assert np.allclose(fused.geometry.spacing, 1.0)
    grid = to_sitk(fused.data, fused.geometry)
    t = sitk.GetArrayFromImage(resample_into(truth, grid, None))
    # single-stack baselines on the same grid (the sagittal one even gets the true motion for free)
    a_only = sitk.GetArrayFromImage(resample_into(to_sitk(ax.data, ax.geometry), grid, None))
    s_only = sitk.GetArrayFromImage(resample_into(to_sitk(sag.data, sag.geometry), grid, motion.GetInverse()))
    avg, _ = F.fuse_stacks(ax, [sag], spacing=1.0, iterations=0)
    m = np.zeros(t.shape, bool)
    m[8:-8, 8:-8, 8:-8] = True
    m &= t > 0.05
    e_fused, e_ax, e_sag = _rmse(fused.data, t, m), _rmse(a_only, t, m), _rmse(s_only, t, m)
    e_avg = _rmse(avg.data, t, m)
    assert e_fused < 0.85 * min(e_ax, e_sag), (e_fused, e_ax, e_sag)
    assert e_fused < e_avg, (e_fused, e_avg)  # back-projection refines beyond plain averaging

    # through-plane detail: high-frequency energy along z (axial blur) and x (sagittal blur)
    def hf(a: np.ndarray, axis: int) -> float:
        return float(np.abs(np.diff(a[8:-8, 8:-8, 8:-8], axis=axis)).mean())

    assert hf(fused.data, 0) > 1.2 * hf(a_only, 0)
    assert hf(fused.data, 2) > 1.2 * hf(s_only, 2)


def test_single_stack_is_plain_iso_resample(phantom):
    _, ax, _, _ = phantom
    out, warnings = F.fuse_stacks(ax, [])
    assert not warnings
    assert np.allclose(out.geometry.spacing, 1.0)
    assert out.series_id == ax.series_id
    # intensity units are kept (99th percentile of the brain ~ unchanged)
    assert np.percentile(out.data[out.data > 0], 99) == pytest.approx(np.percentile(ax.data[ax.data > 0], 99), rel=0.1)


def test_resample_contrast_recovers_shift(phantom):
    truth, ax, _, _ = phantom
    shift = sitk.TranslationTransform(3, (2.0, -3.0, 1.5))
    other = _stack(truth, AXIAL, shift, 5)
    other = Volume(other.data * 3.0, other.geometry, "T2", "s5")
    target, _ = F.fuse_stacks(ax, [])
    moved, warn = F.resample_contrast(other, target)
    assert warn is None
    assert moved.data.shape == target.data.shape and moved.geometry == target.geometry
    naive, _ = F.resample_contrast(other, target, register=False)
    m = target.data > 0.1 * target.data.max()
    corr = np.corrcoef(moved.data[m], target.data[m])[0, 1]
    corr_naive = np.corrcoef(naive.data[m], target.data[m])[0, 1]
    assert corr > corr_naive and corr > 0.9


# ------------------------------------------------------------------------------------------- planning


def _cand(cid, seq, direction=AXIAL, spacing=(1.0, 1.0, 5.0), n=24, **kw):
    geom = Geometry((0.0, 0.0, 0.0), spacing, direction)
    return F.Candidate(
        id=cid,
        modality=kw.pop("modality", "MR"),
        sequence=seq,
        region=kw.pop("region", "brain"),
        role=kw.pop("role", "primary"),
        geometry=geom,
        n=n,
        load=lambda: np.zeros((n, 4, 4), np.float32),
        **kw,
    )


def test_plan_prefers_t1_and_fuses_orthogonal_same_contrast():
    cands = [
        _cand("ax_t1", "T1", spacing=(0.9, 0.9, 5.0)),
        _cand("ax_t1_thin", "T1", spacing=(0.9, 0.9, 3.0)),
        _cand("sag_t1", "T1", SAGITTAL, spacing=(0.9, 0.9, 4.0)),
        _cand("ax_t1_post", "T1", spacing=(0.5, 0.5, 1.0), enhanced=True),
        _cand("ax_flair", "FLAIR"),
        _cand("ax_t2", "T2"),
        _cand("dwi_b0", "DWI", b_value=0.0),
        _cand("dwi_b1000", "DWI", b_value=1000.0),
        _cand("adc", "ADC", role="derived"),
        _cand("loc", "T1", role="localizer"),
        _cand("spine", "T2", region="spine"),
        _cand("ct", "CT", modality="CT"),
    ]
    plan = F.plan_fusion(cands)
    assert plan is not None
    assert plan.contrast == "T1"
    assert plan.reference.id == "ax_t1_thin"  # finest pre-contrast T1
    assert [c.id for c in plan.fuse] == ["sag_t1"]  # parallel axial and post-contrast are not mixed in
    assert {k: v.id for k, v in plan.others.items()} == {
        "T2": "ax_t2",
        "FLAIR": "ax_flair",
        "ADC": "adc",
        "DWI": "dwi_b1000",
    }


def test_plan_falls_back_to_flair_then_none():
    plan = F.plan_fusion([_cand("t2", "T2"), _cand("flair", "FLAIR")])
    assert plan is not None and plan.contrast == "FLAIR" and plan.reference.id == "flair"
    assert F.plan_fusion([_cand("dwi", "DWI"), _cand("few", "T1", n=4)]) is None


def test_enhanced_text():
    assert F.is_enhanced_text("AX T1 +C")
    assert F.is_enhanced_text("T1 POST GAD")
    assert not F.is_enhanced_text("AX T1 3mm")
    assert F.is_enhanced_text("T1", agent="gadobutrol")


# ------------------------------------------------------------------------------------- study round trip


def _export(study_dir, sid, vol: Volume, plane: str, seq: str, desc: str):
    g = vol.geometry
    aff = g.affine()
    pos = [(aff @ np.array([0.0, 0.0, float(k), 1.0]))[:3] for k in range(vol.data.shape[0])]
    order = list(range(vol.data.shape[0]))
    if plane == "axial":
        order.sort(key=lambda k: -pos[k][2])  # display order superior -> inferior, like the importer
    d = np.array(g.direction).reshape(3, 3)
    meta = {
        "id": sid,
        "title": desc,
        "desc": desc,
        "modality": "MR",
        "sequence": seq,
        "plane": plane,
        "region": "brain",
        "role": "primary",
        "rows": vol.data.shape[1],
        "cols": vol.data.shape[2],
        "pixelSpacing": [g.spacing[1], g.spacing[0]],
        "orientation": [*d[:, 0].tolist(), *d[:, 1].tolist()],
        "slices": [{"pos": [float(v) for v in pos[k]]} for k in order],
    }
    export_stack([vol.data[k] for k in order], meta, study_dir / "series" / sid)
    return SeriesInfo(id=sid, modality="MR", plane=plane, sequence=seq, n_images=len(order))


def test_build_volumes_from_exported_study(tmp_path, phantom):
    _, ax, sag, _ = phantom
    infos = [
        _export(tmp_path, "s000", ax, "axial", "T1", "AX T1"),
        _export(tmp_path, "s001", sag, "sagittal", "T1", "SAG T1"),
        _export(tmp_path, "s002", Volume(ax.data[:, ::-1].copy(), ax.geometry, "FLAIR", "x"), "axial", "FLAIR", "FL"),
    ]
    study = StudyInfo(id="t", adapter="loose", series=infos)
    cands = F.candidates_from_study(tmp_path, study)
    by_id = {c.id: c for c in cands}
    assert set(by_id) == {"s000", "s001", "s002"}
    # geometry rebuilt from meta matches the source volume (slices re-sorted along the normal)
    g = by_id["s000"].geometry
    assert np.allclose(g.origin, ax.geometry.origin, atol=1e-3)
    assert np.allclose(g.spacing, ax.geometry.spacing, atol=1e-3)
    assert np.allclose(g.direction, ax.geometry.direction, atol=1e-6)
    a = by_id["s000"].load()
    assert a.shape == ax.data.shape
    assert np.corrcoef(a.ravel(), ax.data.ravel())[0, 1] > 0.99  # 8-bit export, same slice order
    assert np.allclose(by_id["s001"].geometry.direction, sag.geometry.direction, atol=1e-6)

    seen = []
    ref, extras = F.build_volumes(tmp_path, study, lambda s, p, m="": seen.append((s, p)))
    assert ref.sequence == "T1" and ref.series_id == "s000+s001"
    assert [e.sequence for e in extras] == ["FLAIR"]
    assert extras[0].data.shape == ref.data.shape and extras[0].geometry == ref.geometry
    assert seen and all(0 <= p <= 100 for _, p in seen)


def test_build_volumes_without_brain_series_raises(tmp_path):
    from medmereport.pipelines.base import PipelineError

    with pytest.raises(PipelineError) as e:
        F.build_volumes(tmp_path, StudyInfo(id="t", adapter="loose", series=[]))
    assert e.value.code == "no_brain_series"
