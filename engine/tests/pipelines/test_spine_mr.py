"""spine_mr: classical sagittal-T2 segmentation on the synthetic spine, and the pipeline on an imported phantom."""

import io
import json

import numpy as np
import pytest
import trimesh

from medmereport.core.models import SeriesInfo, StudyInfo
from medmereport.dicom.series import Geometry
from medmereport.geometry.glb import valid_node_name
from medmereport.pipelines import registry
from medmereport.pipelines.base import PipelineError
from medmereport.pipelines.importer import import_job
from medmereport.pipelines.labelled import axis_aligned
from medmereport.pipelines.spine_mr import classical as C
from medmereport.pipelines.spine_mr.pipeline import SpineMRPipeline, choose_spine_series
from medmereport.segment.base import Volume
from tests.fixtures.synth_spine import NC, NK, NR, PS, SS, canal_y, spine_phantom, write_spine_series
from tests.pipelines.helpers import FakeCtx


@pytest.fixture(scope="module")
def phantom():
    return spine_phantom()


@pytest.fixture(scope="module")
def aligned(phantom):
    # the sagittal series geometry exactly as write_series lays it out
    g = Geometry(origin=(NK / 2 * SS, -0.5 * NC * PS, 0.5 * NR * PS), spacing=(PS, PS, SS),
                 direction=(0, 0, -1, 1, 0, 0, 0, -1, 0))  # fmt: skip
    return axis_aligned(Volume(phantom.volume, g, "T2", "s000"))


@pytest.fixture(scope="module")
def seg(aligned):
    return C.segment_spine(aligned.data, aligned.geometry)


def test_axis_aligned_grid(aligned):
    assert aligned.data.shape == (NR, NC, NK)  # [z, y, x]
    assert np.allclose(np.array(aligned.geometry.direction), np.eye(3).ravel())
    assert aligned.geometry.spacing == pytest.approx((SS, PS, PS))


def test_cord_csf_and_conus(phantom, seg, aligned):
    cord = seg.labels == C.CORD
    assert cord.any() and (seg.labels == C.CSF).any()
    zs = np.nonzero(cord.any(axis=(1, 2)))[0]
    assert (len(zs) * PS) == pytest.approx(phantom.cord_len_mm, abs=6.0)
    # cord sits in the canal: its mean y (posterior) matches the phantom's canal centre at mid-height
    g = aligned.geometry
    k = int(np.median(zs))
    z_mm = g.origin[2] + k * PS
    y_mm = g.origin[1] + np.argwhere(cord[k])[:, 0].mean() * PS
    assert y_mm == pytest.approx(float(canal_y(np.array(z_mm))), abs=2.5)


def test_discs_and_bodies_counted(phantom, seg):
    assert len(seg.discs) == phantom.n_discs
    assert len(seg.bodies) == phantom.n_bodies
    assert all(5.0 <= h <= 12.0 for _, h in seg.discs)
    assert all(18.0 <= h <= 26.0 for h in seg.bodies)
    zc = [z for z, _ in seg.discs]
    assert zc == sorted(zc, reverse=True)  # top -> bottom
    assert any("not numbered" in w for w in seg.warnings)


def test_no_canal_gives_warning():
    s = C.segment_spine(np.random.default_rng(0).normal(100, 5, (40, 40, 10)).astype(np.float32),
                        Geometry((0, 0, 0), (1.0, 1.0, 1.0), (1, 0, 0, 0, 1, 0, 0, 0, 1)))  # fmt: skip
    assert not s.labels.any() and s.warnings


def _sag(**kw):
    base = {"id": "s001", "modality": "MR", "body_part": "spine", "plane": "sagittal", "sequence": "T2",
            "n_images": 15}  # fmt: skip
    base.update(kw)
    return SeriesInfo(**base)


def test_applies_and_choice():
    st = StudyInfo(
        id="x", adapter="loose", series=[_sag(id="s000", sequence="T1"), _sag(), _sag(id="s002", plane="axial")]
    )
    assert choose_spine_series(st).id == "s001"
    assert SpineMRPipeline().applies(st) == pytest.approx(0.9)
    assert registry.choose_pipeline(st) == "spine_mr"
    brain = StudyInfo(id="b", adapter="loose", series=[_sag(body_part="brain")])
    assert SpineMRPipeline().applies(brain) == 0.0


@pytest.fixture(scope="module")
def imported(tmp_path_factory):
    root = tmp_path_factory.mktemp("spine")
    write_spine_series(root / "src")
    (root / "work").mkdir()
    import_job(FakeCtx({"src": str(root / "src"), "out": str(root / "study"), "study_id": "sp1"}, root / "work"))
    return root, StudyInfo.model_validate_json((root / "study" / "study.json").read_text())


def test_pipeline_end_to_end(imported, phantom):
    root, study = imported
    d = root / "study"
    s = study.series[0]
    assert (s.body_part, s.plane, s.sequence) == ("spine", "sagittal", "T2")
    res = SpineMRPipeline().run(FakeCtx({}, root / "work"), d, study)
    assert res["regions"] == 4
    regions = json.loads((d / "model" / "regions.json").read_text())
    assert regions["pipeline"] == "spine_mr" and regions["framing"] == "spine"
    assert regions["primary_series"] == s.id
    assert {r["key"] for r in regions["regions"]} == {
        "M|spinal_cord", "M|spinal_csf", "M|vertebral_column", "M|intervertebral_disc"
    }  # fmt: skip
    assert {x["id"] for x in regions["layers"]} == {"spine", "bone"}
    scene = trimesh.load(io.BytesIO((d / "model" / "scene.glb").read_bytes()), file_type="glb")
    names = set(scene.graph.nodes_geometry)
    assert names == {"M__spinal_cord", "M__spinal_csf", "M__vertebral_column", "M__intervertebral_disc"}
    assert all(valid_node_name(n) for n in names)
    stats = json.loads((d / "model" / "stats.json").read_text())
    disc = {m["key"]: m for m in stats["regions"]["M|intervertebral_disc"]["measurements"]}
    assert disc["count_in_view"]["value"] == phantom.n_discs
    assert all(m["method"] and m["caveats"] for r in stats["regions"].values() for m in r["measurements"])
    cord = {m["key"]: m for m in stats["regions"]["M|spinal_cord"]["measurements"]}
    assert 5.0 <= cord["ap_diameter_median"]["value"] <= 10.0
    meta = json.loads((d / "series" / s.id / "meta.json").read_text())
    assert meta["labels"] is True and "M|spinal_cord" in meta["labelTable"].values()


def test_pipeline_rejects_totalseg_backend(imported):
    root, study = imported
    with pytest.raises(PipelineError) as e:
        SpineMRPipeline().run(FakeCtx({"backend": "totalseg"}, root), root / "study", study)
    assert e.value.code == "backend_unavailable"
