"""TotalSegmentator backend: licence guard, unavailable path, no implicit downloads, class mapping (all mocked)."""

import json
import socket
import sys
import types
import zipfile

import numpy as np
import pytest

import medmereport.segment.totalseg as TS
from medmereport.dicom.series import Geometry
from medmereport.segment.base import Volume
from medmereport.segment.totalseg.licence import LICENSED_TASKS, OPEN_TASKS, TaskNotAllowed, check_task

FOLDER = "Dataset297_TotalSegmentator_total_3mm_1559subj"
TRAINER = "nnUNetTrainer_4000epochs_NoMirroring__nnUNetPlans__3d_fullres"
LABELS = {"background": 0, "kidney_left": 3, "vertebrae_L1": 31, "spinal_cord": 79, "rib_left_3": 94}


@pytest.mark.parametrize("task", sorted(LICENSED_TASKS))
def test_licensed_tasks_unreachable(task):
    with pytest.raises(TaskNotAllowed):
        check_task(task)
    with pytest.raises(TaskNotAllowed):
        TS.TotalSegBackend(task)


def test_unknown_and_unwired_tasks_refused():
    assert not (OPEN_TASKS & LICENSED_TASKS)
    for task in ("brand_new_task", "TOTAL", ""):
        with pytest.raises(TaskNotAllowed, match="unknown"):
            check_task(task)
    with pytest.raises(TaskNotAllowed, match="registry"):
        check_task("lung_vessels")  # open, but no pinned weights yet
    with pytest.raises(TaskNotAllowed):
        check_task("total", fast=False)  # only the fast (3 mm, CPU) model is wired
    assert check_task("total", fast=True) == 297


def test_weights_are_registered_and_pinned():
    from medmereport.models import registry

    a = registry.get("totalseg-total-fast")
    assert a.url.startswith("https://github.com/wasserth/TotalSegmentator/releases/download/")
    assert len(a.sha256) == 64 and a.size > 100_000_000
    assert "Apache-2.0" in a.licence


@pytest.fixture
def home(tmp_path, monkeypatch):
    monkeypatch.setattr(TS, "home_dir", lambda: tmp_path / "totalseg")
    return tmp_path / "totalseg"


def _install_weights(home):
    d = home / "nnunet" / "results" / FOLDER / TRAINER
    d.mkdir(parents=True)
    (d / "dataset.json").write_text(json.dumps({"labels": LABELS}))


def test_unavailable_without_package(home, monkeypatch):
    _install_weights(home)
    monkeypatch.setattr(TS, "package_installed", lambda: False)
    b = TS.TotalSegBackend()
    assert b.available() is False
    with pytest.raises(TS.TotalSegUnavailable, match="not installed"):
        b.segment(_vol(), [], lambda *a, **k: None)


def test_unavailable_without_weights(home, monkeypatch):
    monkeypatch.setattr(TS, "package_installed", lambda: True)
    from medmereport.models import registry

    monkeypatch.setattr(registry, "available", lambda name: False)
    assert TS.TotalSegBackend().available() is False
    with pytest.raises(TS.TotalSegUnavailable, match="models pull totalseg-total-fast"):
        TS.ensure_weights(297)


def test_ct_body_falls_back_when_totalseg_missing(monkeypatch):
    from medmereport.pipelines.ct_body.pipeline import CTBodyPipeline

    monkeypatch.setattr(TS, "package_installed", lambda: False)
    assert CTBodyPipeline().backends() == {"classical": True, "totalseg": False}


def test_pulled_zip_is_unpacked_safely(home, tmp_path, monkeypatch):
    from medmereport.models import registry

    zp = tmp_path / "w.zip"
    with zipfile.ZipFile(zp, "w") as z:
        z.writestr(f"{FOLDER}/{TRAINER}/dataset.json", json.dumps({"labels": LABELS}))
        z.writestr(f"{FOLDER}/._.DS_Store", b"junk")
    monkeypatch.setattr(registry, "available", lambda name: True)
    monkeypatch.setattr(registry, "path", lambda name: zp)
    assert TS.weights_present(297)
    d = TS.ensure_weights(297)
    assert (d / TRAINER / "dataset.json").is_file() and not (d / "._.DS_Store").exists()
    assert TS.class_names(297)[31] == "vertebrae_L1"

    bad = tmp_path / "bad.zip"
    with zipfile.ZipFile(bad, "w") as z:
        z.writestr("../evil.txt", b"x")
    with pytest.raises(TS.TotalSegUnavailable, match="unsafe"):
        TS._safe_unzip(bad, tmp_path / "out")


def test_class_mapping_uses_vocabulary_rule():
    regions, unknown = TS.map_classes({31: "vertebrae_L1", 79: "spinal_cord", 999: "definitely_not_anatomy"})
    assert (regions[31].structure, regions[31].hemi) == ("vertebrae_l1", "M")
    assert regions[79].structure == "spinal_cord"
    assert "definitely_not_anatomy" in unknown


def _vol():
    g = Geometry(origin=(0.0, 0.0, 0.0), spacing=(3.0, 3.0, 3.0), direction=(1, 0, 0, 0, 1, 0, 0, 0, 1))
    data = np.zeros((6, 8, 10), np.float32)
    data[2:4, 3:5, 4:7] = 400.0
    return Volume(data, g, "CT", "s000")


@pytest.fixture
def fake_totalseg(monkeypatch):
    """A stand-in ``totalsegmentator`` package that behaves like upstream's network-touching code paths."""
    calls = {}
    pkg = types.ModuleType("totalsegmentator")
    libs = types.ModuleType("totalsegmentator.libs")
    config = types.ModuleType("totalsegmentator.config")
    api = types.ModuleType("totalsegmentator.python_api")

    def download_pretrained_weights(task_id):  # upstream would download when missing
        calls["download"] = task_id
        raise AssertionError("upstream downloader must never run")

    def send_usage_stats(*a, **k):
        calls["stats"] = True
        socket.create_connection(("stats.totalsegmentator.com", 443), timeout=0.1)

    libs.download_pretrained_weights = download_pretrained_weights
    config.send_usage_stats = send_usage_stats
    api.download_pretrained_weights = download_pretrained_weights
    api.send_usage_stats = send_usage_stats

    def totalsegmentator(img, output, ml, task, fast, device, quiet):
        calls["args"] = {"ml": ml, "task": task, "fast": fast, "device": device}
        api.download_pretrained_weights(297)
        arr = np.asarray(img.dataobj)
        seg = np.where(arr > 100, 31, 0).astype(np.int16)
        api.send_usage_stats({}, {})
        return types.SimpleNamespace(dataobj=seg)

    api.totalsegmentator = totalsegmentator
    for name, mod in (("totalsegmentator", pkg), ("totalsegmentator.libs", libs),
                      ("totalsegmentator.config", config), ("totalsegmentator.python_api", api)):  # fmt: skip
        monkeypatch.setitem(sys.modules, name, mod)
    pkg.libs, pkg.config, pkg.python_api = libs, config, api
    monkeypatch.setattr(TS, "package_installed", lambda: True)
    monkeypatch.setattr(TS, "_to_nifti", lambda v: types.SimpleNamespace(dataobj=np.transpose(v.data, (2, 1, 0))))
    return calls


def test_segment_runs_offline_with_local_weights(home, fake_totalseg, monkeypatch):
    _install_weights(home)
    for var in ("TOTALSEG_HOME_DIR", "TOTALSEG_WEIGHTS_PATH", "nnUNet_results"):
        monkeypatch.delenv(var, raising=False)
    b = TS.TotalSegBackend()
    assert b.available()
    lm = b.segment(_vol(), [], lambda *a, **k: None)
    assert fake_totalseg["args"] == {"ml": True, "task": "total", "fast": True, "device": "cpu"}
    assert "download" not in fake_totalseg and "stats" not in fake_totalseg  # both stubbed out
    assert lm.labels.shape == (6, 8, 10) and set(np.unique(lm.labels)) == {0, 31}
    assert lm.regions[31].structure == "vertebrae_l1"
    assert "Apache-2.0" in lm.licence
    cfg = json.loads((home / "config.json").read_text())
    assert cfg["send_usage_stats"] is False
    import os

    assert os.environ["TOTALSEG_HOME_DIR"] == str(home)
    assert os.environ["TOTALSEG_WEIGHTS_PATH"] == str(home / "nnunet" / "results")


def test_missing_weights_never_download(home, fake_totalseg, monkeypatch):
    from medmereport.models import registry

    monkeypatch.setattr(registry, "available", lambda name: False)
    with pytest.raises(TS.TotalSegUnavailable):
        TS.TotalSegBackend().segment(_vol(), [], lambda *a, **k: None)
    assert "download" not in fake_totalseg
    # the stand-in for upstream's downloader refuses unless the dataset folder exists locally
    with pytest.raises(TS.TotalSegUnavailable, match="never"):
        TS._local_weights_only(298)


def test_network_blocked_while_segmenting():
    with TS.no_outbound_network(), pytest.raises(OSError, match="outbound"):
        socket.create_connection(("192.0.2.1", 443), timeout=0.1)
