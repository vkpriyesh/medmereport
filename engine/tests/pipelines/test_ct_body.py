"""ct_body: classical HU segmentation on the synthetic torso, and the full pipeline on an imported phantom disc."""

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
from medmereport.pipelines.ct_body import classical as C
from medmereport.pipelines.ct_body.pipeline import CTBodyPipeline, choose_ct_series
from medmereport.pipelines.importer import import_job
from medmereport.segment.base import LabelMap, Region
from tests.fixtures.synth_ct import COUCH_Y, NY, PS, SS, ct_phantom, write_ct_series
from tests.pipelines.helpers import FakeCtx

GEOM = Geometry(origin=(0.0, 0.0, 0.0), spacing=(PS, PS, SS), direction=(1, 0, 0, 0, 1, 0, 0, 0, 1))


@pytest.fixture(scope="module")
def phantom():
    return ct_phantom()


@pytest.fixture(scope="module")
def seg(phantom):
    return C.segment_ct(phantom.hu, GEOM)


def test_lungs_volume_and_side(phantom, seg):
    vox = PS * PS * SS
    left = (seg.labels == C.LUNG_L).sum() * vox
    right = (seg.labels == C.LUNG_R).sum() * vox
    assert left == pytest.approx(phantom.lung_left_mm3, rel=0.1)
    assert right == pytest.approx(phantom.lung_right_mm3, rel=0.1)
    nx = seg.labels.shape[2]
    assert np.argwhere(seg.labels == C.LUNG_L)[:, 2].mean() > nx / 2  # array +x = patient Left
    assert np.argwhere(seg.labels == C.LUNG_R)[:, 2].mean() < nx / 2


def test_airway_traced_from_the_top(seg):
    aw = np.argwhere(seg.labels == C.AIRWAY)
    assert len(aw) > 0
    assert aw[:, 0].max() == seg.labels.shape[0] - 1  # reaches the most superior slice
    assert 5_000 < len(aw) * PS * PS * SS < 30_000  # trachea + main bronchi, not a lung


def test_couch_removed_and_specks_dropped(seg):
    y_couch = int(np.ceil(COUCH_Y[0] / PS + NY / 2))  # first row strictly below the body
    assert not seg.body[:, y_couch + 1 :, :].any()
    assert not (seg.labels == C.BONE)[:, y_couch + 1 :, :].any()
    lab, n = __import__("scipy.ndimage", fromlist=["label"]).label(seg.labels == C.BONE)
    sizes = np.bincount(lab.ravel())[1:] * PS * PS * SS
    assert sizes.min() >= 300.0  # the 2 mm speck is gone


def test_bowel_gas_is_not_lung(seg):
    gas_z = int(18.0 / SS)
    assert not np.isin(seg.labels[gas_z], (C.LUNG_L, C.LUNG_R)).any()


def test_touching_lungs_are_split():
    hu = np.full((20, 60, 60), 40.0, np.float32)
    hu[:, 2:-2, 2:-2] = 40.0
    hu[:, :2] = hu[:, -2:] = -1000
    hu[:, :, :2] = hu[:, :, -2:] = -1000
    hu[2:18, 15:45, 8:52] = -850  # one air block spanning the midline
    g = Geometry(origin=(0, 0, 0), spacing=(5.0, 5.0, 5.0), direction=(1, 0, 0, 0, 1, 0, 0, 0, 1))
    s = C.segment_ct(hu, g, C.CTParams(lung_min_mm3=1000))
    assert (s.labels == C.LUNG_L).any() and (s.labels == C.LUNG_R).any()
    assert any("midline" in w for w in s.warnings)


def _ct_study(**kw):
    s = SeriesInfo(id="s000", modality="CT", body_part="chest", plane="axial", sequence="CT", n_images=80,
                   slice_thickness=2.5, **kw)  # fmt: skip
    return StudyInfo(id="x", adapter="loose", series=[s])


def test_applies_and_registry():
    study = _ct_study()
    assert CTBodyPipeline().applies(study) == pytest.approx(0.9)
    assert registry.choose_pipeline(study) == "ct_body"
    thin = SeriesInfo(id="s001", modality="CT", plane="axial", sequence="CT", n_images=300, slice_thickness=0.625)
    loc = SeriesInfo(id="s002", modality="CT", plane="axial", role="localizer", n_images=3)
    st = StudyInfo(id="y", adapter="loose", series=[*study.series, thin, loc])
    assert choose_ct_series(st).id == "s001"
    mr = StudyInfo(id="z", adapter="loose", series=[SeriesInfo(id="s0", modality="MR", plane="axial", n_images=30)])
    assert CTBodyPipeline().applies(mr) == 0.0


@pytest.fixture(scope="module")
def imported(tmp_path_factory):
    root = tmp_path_factory.mktemp("ct")
    write_ct_series(root / "src")
    (root / "work").mkdir()
    import_job(FakeCtx({"src": str(root / "src"), "out": str(root / "study"), "study_id": "ct1"}, root / "work"))
    study = StudyInfo.model_validate_json((root / "study" / "study.json").read_text())
    return root, study


class _FakeTotalSeg:
    """Stands in for the optional backend: labels the vertebral column as vertebrae_l1 + the cord."""

    licence = "test-licence"

    def __init__(self, available=True):
        self._available = available
        self.called = False

    def available(self):
        return self._available

    def segment(self, reference, extra, progress):
        self.called = True
        hu = reference.data
        labels = np.zeros(hu.shape, np.int16)
        labels[hu > 300] = 31
        labels[(hu > -200) & (hu < 100) & (np.arange(hu.shape[1])[None, :, None] > hu.shape[1] * 0.7)] = 0
        progress("segment", 100)
        regions = {31: Region(31, "vertebrae_l1", "M"), 79: Region(79, "spinal_cord", "M")}
        return LabelMap(labels, reference.geometry, regions, "totalseg-total-fast@test", "test-licence", ["ts caveat"])


def test_pipeline_end_to_end_classical(imported):
    root, study = imported
    d = root / "study"
    assert study.series[0].modality == "CT"
    res = CTBodyPipeline(totalseg=_FakeTotalSeg(available=False)).run(FakeCtx({}, root / "work"), d, study)
    assert res["model"] == "model/" and res["regions"] == 3
    m = d / "model"
    regions = json.loads((m / "regions.json").read_text())
    assert regions["pipeline"] == "ct_body" and regions["framing"] == "body"
    assert regions["backend"].startswith("classical")
    assert {r["key"] for r in regions["regions"]} == {"L|lung", "R|lung", "M|airway"}
    lay = {x["id"]: x["default"] for x in regions["layers"]}
    assert lay == {"skin": False, "bone": True, "organ": True, "airway": True}
    left = next(r for r in regions["regions"] if r["key"] == "L|lung")
    assert left["centroid"][0] > 20  # viewer X = patient Left

    glb = (m / "scene.glb").read_bytes()
    assert len(glb) < 30_000_000
    scene = trimesh.load(io.BytesIO(glb), file_type="glb")
    names = set(scene.graph.nodes_geometry)
    assert names == {"H__skin", "B__skeleton", "L__lung", "R__lung", "M__airway"}
    assert all(valid_node_name(n) for n in names)
    skel = scene.geometry["B__skeleton"].bounds
    skin = scene.geometry["H__skin"].bounds
    assert skel[0][2] > skin[0][2] - 1  # skeleton inside the skin (viewer Z = anterior)

    stats = json.loads((m / "stats.json").read_text())
    for key in ("L|lung", "R|lung", "M|airway"):
        ms = {x["key"]: x for x in stats["regions"][key]["measurements"]}
        assert ms["volume"]["unit"] == "cm³" and ms["mean_hu"]["unit"] == "HU"
        assert all(x["method"] and x["caveats"] for x in ms.values())
        assert stats["regions"][key]["thumbs"]
    lung = {x["key"]: x for x in stats["regions"]["L|lung"]["measurements"]}
    assert -900 < lung["mean_hu"]["value"] < -700
    assert {"body_volume", "bone_volume", "lung_volume"} <= set(stats["summary"])
    status = json.loads((m / "status.json").read_text())
    assert status["pipeline"] == "ct_body" and status["provenance"]["series"] == "s000"
    meta = json.loads((d / "series" / "s000" / "meta.json").read_text())
    assert meta["labels"] is True and set(meta["labelTable"].values()) == {"L|lung", "R|lung", "M|airway"}
    assert (d / "series" / "s000" / "L000.png").is_file()


def test_pipeline_uses_totalseg_when_available(imported):
    root, study = imported
    ts = _FakeTotalSeg(available=True)
    CTBodyPipeline(totalseg=ts).run(FakeCtx({"backend": "auto"}, root / "work"), root / "study", study)
    assert ts.called
    regions = json.loads((root / "study" / "model" / "regions.json").read_text())
    assert regions["backend"] == "totalseg-total-fast@test" and regions["licence"] == "test-licence"
    assert [r["key"] for r in regions["regions"]] == ["M|vertebrae_l1"]
    assert "ts caveat" in regions["caveats"]
    scene = trimesh.load(io.BytesIO((root / "study" / "model" / "scene.glb").read_bytes()), file_type="glb")
    assert set(scene.graph.nodes_geometry) == {"H__skin", "M__vertebrae_l1"}


def test_pipeline_backend_choice_errors(imported):
    root, study = imported
    with pytest.raises(PipelineError) as e:
        CTBodyPipeline(totalseg=_FakeTotalSeg(False)).run(FakeCtx({"backend": "totalseg"}, root), root / "study", study)
    assert e.value.code == "backend_unavailable"
    with pytest.raises(PipelineError) as e:
        CTBodyPipeline().run(FakeCtx({"backend": "magic"}, root), root / "study", study)
    assert e.value.code == "unknown_backend"
    empty = StudyInfo(id="e", adapter="loose", series=[])
    with pytest.raises(PipelineError) as e:
        CTBodyPipeline().run(FakeCtx({}, root), root / "study", empty)
    assert e.value.code == "no_series"


def test_missing_volume_reports_code(tmp_path):
    from medmereport.pipelines.labelled import load_series_volume

    with pytest.raises(PipelineError) as e:
        load_series_volume(tmp_path, "s000", "CT")
    assert e.value.code == "no_volume"


def test_volume_falls_back_to_dicom_source(imported):
    from medmereport.pipelines.labelled import load_series_volume

    root, _ = imported
    v = load_series_volume(root / "nowhere", "s000", "CT", source=root / "src")
    assert v.data.shape == (80, 128, 128)
    assert -1100 < float(v.data.min()) < -900  # real HU (rescale applied)
