"""Optional TotalSegmentator backend for body CT (``pip install medmereport[totalseg]``).

Hard rules enforced here:

* Only open tasks (allow-list in :mod:`.licence`); the check runs before anything is imported.
* Weights come only from ``medmereport models pull totalseg-total-fast`` (pinned zip in
  ``models/registry.py``), unpacked into ``models_dir()/totalseg``. TotalSegmentator normally
  downloads weights on first use and sends usage statistics; both are disabled: its home/weights
  directories point at our models folder, its config has ``send_usage_stats: false``, and its
  download / statistics / licence-check functions are replaced by stubs that refuse or do nothing.
* CPU and ``fast`` (3 mm) only.

When the package or the weights are missing, :meth:`TotalSegBackend.available` is False and the
``ct_body`` pipeline falls back to the classical HU-threshold segmentation.
"""

from __future__ import annotations

import contextlib
import importlib.util
import json
import os
import socket
import zipfile
from collections.abc import Iterator
from pathlib import Path
from typing import Any

import numpy as np

from medmereport.knowledge.structures import ALL, totalseg_structure
from medmereport.segment.base import Hemi, LabelMap, ProgressFn, Region, Volume
from medmereport.segment.totalseg.licence import WEIGHTS_LICENCE, TaskNotAllowed, check_task

ASSET_BY_DATASET = {297: "totalseg-total-fast"}
_FOLDERS = {297: "Dataset297_TotalSegmentator_total_3mm_1559subj"}


class TotalSegUnavailable(RuntimeError):
    pass


def home_dir() -> Path:
    from medmereport.core.paths import models_dir

    return models_dir() / "totalseg"


def weights_dir() -> Path:
    return home_dir() / "nnunet" / "results"


def package_installed() -> bool:
    return all(importlib.util.find_spec(m) is not None for m in ("totalsegmentator", "torch", "nibabel"))


def _dataset_dir(ds_id: int) -> Path:
    return weights_dir() / _FOLDERS[ds_id]


def weights_present(ds_id: int) -> bool:
    """Unpacked weights, or the verified zip from ``models pull`` (unpacked on first use). No network."""
    if (_dataset_dir(ds_id) / "nnUNetTrainer_4000epochs_NoMirroring__nnUNetPlans__3d_fullres").is_dir():
        return True
    from medmereport.models import registry

    return registry.available(ASSET_BY_DATASET[ds_id])


def _safe_unzip(zp: Path, dest: Path) -> None:
    dest.mkdir(parents=True, exist_ok=True)
    root = dest.resolve()
    with zipfile.ZipFile(zp) as z:
        for info in z.infolist():
            name = info.filename
            if "/._" in name or name.startswith("._") or name.endswith(".DS_Store"):
                continue
            target = (dest / name).resolve()
            if root not in target.parents and target != root:
                raise TotalSegUnavailable("unsafe path in the weights archive")
            if info.is_dir():
                target.mkdir(parents=True, exist_ok=True)
                continue
            target.parent.mkdir(parents=True, exist_ok=True)
            with z.open(info) as src, open(target, "wb") as out:
                while chunk := src.read(1 << 20):
                    out.write(chunk)


def ensure_weights(ds_id: int) -> Path:
    d = _dataset_dir(ds_id)
    if d.is_dir() and any(d.iterdir()):
        return d
    from medmereport.models import registry

    asset = ASSET_BY_DATASET[ds_id]
    if not registry.available(asset):
        raise TotalSegUnavailable(f"weights missing: run `medmereport models pull {asset}` first")
    _safe_unzip(registry.path(asset), weights_dir())
    if not d.is_dir():
        raise TotalSegUnavailable("the weights archive did not contain the expected folder")
    return d


def class_names(ds_id: int) -> dict[int, str]:
    """Label value -> TotalSegmentator class name, read from the weights' own ``dataset.json``."""
    for p in _dataset_dir(ds_id).rglob("dataset.json"):
        labels = json.loads(p.read_text(encoding="utf-8"))["labels"]
        return {int(v): str(k) for k, v in labels.items() if int(v) > 0}
    raise TotalSegUnavailable("dataset.json not found in the weights folder")


def map_classes(names: dict[int, str]) -> tuple[dict[int, Region], list[str]]:
    """TotalSegmentator classes -> vocabulary regions (``totalseg_structure``); unknown ids are reported."""
    regions: dict[int, Region] = {}
    unknown: list[str] = []
    for code, cls in sorted(names.items()):
        structure, hemi = totalseg_structure(cls)
        if structure in ALL:
            h: Hemi = "L" if hemi == "L" else "R" if hemi == "R" else "M"
            regions[code] = Region(code=code, structure=structure, hemi=h)
        else:
            unknown.append(structure)
    return regions, unknown


def _local_weights_only(task_id: Any = None, *args: Any, **kwargs: Any) -> None:
    """Stand-in for TotalSegmentator's ``download_pretrained_weights``: fine when present, never downloads."""
    try:
        ds = int(task_id)
    except (TypeError, ValueError):
        ds = -1
    if ds >= 0 and any(weights_dir().glob(f"Dataset{ds:03d}_*")):
        return None
    raise TotalSegUnavailable(f"TotalSegmentator needs weights {task_id!r}, which are not installed; medmereport never "
                              "downloads at runtime")  # fmt: skip


def _refuse_download(*args: Any, **kwargs: Any) -> None:
    raise TotalSegUnavailable("TotalSegmentator tried to download; medmereport never downloads at runtime")


def _noop(*args: Any, **kwargs: Any) -> None:
    return None


def isolate_environment() -> None:
    """Point TotalSegmentator at our models folder and switch off its network features."""
    home = home_dir()
    home.mkdir(parents=True, exist_ok=True)
    os.environ["TOTALSEG_HOME_DIR"] = str(home)
    os.environ["TOTALSEG_WEIGHTS_PATH"] = str(weights_dir())
    os.environ["nnUNet_results"] = str(weights_dir())  # noqa: SIM112 - nnU-Net's own spelling
    cfg = home / "config.json"
    data: dict[str, Any] = {}
    if cfg.is_file():
        try:
            data = json.loads(cfg.read_text(encoding="utf-8"))
        except ValueError:
            data = {}
    data.update({"totalseg_id": data.get("totalseg_id", "medmereport-local"), "send_usage_stats": False})
    data.setdefault("prediction_counter", 0)
    cfg.write_text(json.dumps(data), encoding="utf-8")


def _patch_network(modules: list[Any]) -> None:
    for mod in modules:
        if hasattr(mod, "download_pretrained_weights"):
            mod.download_pretrained_weights = _local_weights_only
        for name in ("download_model_with_license_and_unpack", "download_url_and_unpack"):
            if hasattr(mod, name):
                setattr(mod, name, _refuse_download)
        for name in ("send_usage_stats", "send_usage_stats_application"):
            if hasattr(mod, name):
                setattr(mod, name, _noop)
        if hasattr(mod, "is_valid_license"):
            mod.is_valid_license = lambda *a, **k: False


@contextlib.contextmanager
def no_outbound_network() -> Iterator[None]:
    """Block non-loopback socket connections while third-party code runs (belt and braces)."""
    orig = socket.socket.connect

    def connect(sock: socket.socket, address: Any) -> Any:
        host = address[0] if isinstance(address, tuple) else str(address)
        if not (str(host).startswith("127.") or host in ("::1", "localhost")):
            raise OSError("medmereport: outbound network access is disabled during segmentation")
        return orig(sock, address)

    socket.socket.connect = connect  # type: ignore[method-assign,assignment]
    try:
        yield
    finally:
        socket.socket.connect = orig  # type: ignore[method-assign]


def _to_nifti(vol: Volume) -> Any:
    import nibabel as nib

    lps_to_ras = np.diag([-1.0, -1.0, 1.0, 1.0])
    affine = lps_to_ras @ vol.geometry.affine()  # voxel (i=x, j=y, k=z) -> RAS
    data = np.ascontiguousarray(np.transpose(vol.data, (2, 1, 0)).astype(np.float32))
    return nib.Nifti1Image(data, affine)


class TotalSegBackend:
    name = "totalseg"
    licence = WEIGHTS_LICENCE

    def __init__(self, task: str = "total", fast: bool = True) -> None:
        self.dataset_id = check_task(task, fast)  # licence guard first: raises TaskNotAllowed
        self.task = task
        self.fast = fast

    def available(self) -> bool:
        try:
            return package_installed() and weights_present(self.dataset_id)
        except Exception:  # noqa: BLE001
            return False

    def segment(self, reference: Volume, extra: list[Volume], progress: ProgressFn) -> LabelMap:
        check_task(self.task, self.fast)
        if not package_installed():
            raise TotalSegUnavailable("TotalSegmentator is not installed (pip install medmereport[totalseg])")
        progress("segment", 2, "weights")
        ensure_weights(self.dataset_id)
        isolate_environment()
        import totalsegmentator.config as ts_config
        import totalsegmentator.libs as ts_libs
        import totalsegmentator.python_api as ts_api

        _patch_network([ts_api, ts_libs, ts_config])
        progress("segment", 10, "TotalSegmentator (fast, CPU)")
        with no_outbound_network():
            out = ts_api.totalsegmentator(
                _to_nifti(reference), None, ml=True, task=self.task, fast=self.fast, device="cpu", quiet=True
            )
        arr = np.asarray(out.dataobj).astype(np.int16)
        labels = np.ascontiguousarray(np.transpose(arr, (2, 1, 0)))
        if labels.shape != reference.data.shape:
            raise TotalSegUnavailable("TotalSegmentator returned a label map on a different grid")
        regions, unknown = map_classes(class_names(self.dataset_id))
        caveats = [
            "Organs and bones labelled by TotalSegmentator (fast 3 mm model, CPU); boundaries are approximate.",
        ]
        if unknown:
            caveats.append(f"{len(unknown)} TotalSegmentator classes are not in the vocabulary yet and are not shown.")
        progress("segment", 100, "")
        return LabelMap(
            labels=labels, geometry=reference.geometry, regions=regions, backend=f"totalseg-{self.task}-fast@2",
            licence=self.licence, caveats=caveats,
        )  # fmt: skip


__all__ = ["TaskNotAllowed", "TotalSegBackend", "TotalSegUnavailable", "check_task"]
