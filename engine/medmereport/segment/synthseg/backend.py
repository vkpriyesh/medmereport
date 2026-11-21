"""SynthSeg 2.0 on ONNX Runtime (CPU): whole-brain segmentation + optional Desikan-Killiany parcellation.

Contrast- and resolution-agnostic (T1, T2, FLAIR, ... at any slice thickness). TensorFlow is never used at
runtime: the official Keras weights are converted offline by ``scripts/convert_synthseg.py`` and fetched
into ``core.paths.models_dir()/synthseg/`` by the model registry. Nothing here touches the network.

Pipeline (mirrors ``SynthSeg/predict_synthseg.py``):
resample to 1 mm RAS (anti-aliased) -> robust [0, 1] rescale -> crop to the head -> pad to multiples of 32
-> U-Net (+ blur, + left/right flip TTA) tile by tile within a memory budget -> largest-component and
per-structure topology clean-up -> argmax -> optional parcellation of the cortical ribbon -> nearest-neighbour
back onto the patient's own grid -> vocabulary ids.
"""

from __future__ import annotations

import importlib.util
import os
from collections.abc import Callable
from pathlib import Path
from typing import Any

import numpy as np

from medmereport.core.paths import models_dir
from medmereport.core.system import memory_budget_gib
from medmereport.segment.base import LabelMap, ProgressFn, Volume
from medmereport.segment.synthseg import labels as L
from medmereport.segment.synthseg import processing as P

NAME = "synthseg-onnx"
VERSION = "2.0"
LICENCE = "Apache-2.0 (SynthSeg 2.0, B. Billot et al., https://github.com/BBillot/SynthSeg)"
SEG_FILE = "synthseg_2.0.onnx"
PARC_FILE = "synthseg_parc_2.0.onnx"
ROBUST_FILE = "synthseg_robust_2.0.onnx"

# Empirical ONNX Runtime peak (GiB) ~= base + slope * megavoxels per tile (CPU EP, no memory arena),
# measured on 96^3..160^3 tiles; slightly conservative.
_MEM_SLOPE = {SEG_FILE: 1.0, PARC_FILE: 1.15, ROBUST_FILE: 0.95}  # seg includes the flip-TTA output copy
_MEM_BASE_GIB = 0.25
THICK_SLICE_MM = 2.0  # caveat above this
ROBUST_AUTO_MM = 3.0  # auto-select the robust model above this slice thickness

CAVEAT_ML = "Labels come from SynthSeg, a machine-learning model; they can be wrong and are not a diagnosis."
CAVEAT_THICK = (
    "Cortical boundaries are approximate on thick-slice scans: this scan has {mm:.1f} mm slices and the "
    "1 mm labels are inferred between them."
)
CAVEAT_PARC = (
    "Cortical regions are the Desikan-Killiany parcellation mapped onto the closest gyrus names used here; "
    "region boundaries are approximate."
)
CAVEAT_NO_CORTEX = "The cortical ribbon is not labelled (the SynthSeg parcellation model is not installed)."


def model_dir() -> Path:
    return models_dir() / "synthseg"


class SynthSegOnnxBackend:
    name = NAME
    licence = LICENCE

    def __init__(
        self,
        *,
        parcellation: bool = True,
        robust: bool | None = None,
        max_memory_gib: float | None = None,
        overlap: int = 64,
        threads: int | None = None,
        directory: Path | None = None,
    ) -> None:
        """``robust=None`` picks SynthSeg-robust for slices thicker than 3 mm when that model is installed."""
        self.parcellation = parcellation
        self.robust = robust
        # None = adapt to this machine (~45% of RAM, 3-12 GiB); untiled inference needs ~6-12 GiB.
        self.max_memory_gib = max_memory_gib if max_memory_gib is not None else memory_budget_gib()
        self.overlap = overlap  # voxels shared by neighbouring tiles (half of it is discarded per side)
        self.threads = threads
        self._dir = directory

    # --------------------------------------------------------------------------------------------- availability
    @property
    def directory(self) -> Path:
        return self._dir if self._dir is not None else model_dir()

    def _has(self, filename: str) -> bool:
        return (self.directory / filename).is_file()

    def available(self) -> bool:
        return importlib.util.find_spec("onnxruntime") is not None and self._has(SEG_FILE)

    # --------------------------------------------------------------------------------------------- inference
    def _session(self, filename: str) -> Any:
        import onnxruntime as ort

        so = ort.SessionOptions()
        so.enable_cpu_mem_arena = False  # the arena roughly doubles peak memory for these 3D convs
        so.intra_op_num_threads = self.threads or max(1, min(16, (os.cpu_count() or 2) // 2))
        so.log_severity_level = 3
        return ort.InferenceSession(str(self.directory / filename), so, providers=["CPUExecutionProvider"])

    @staticmethod
    def _runner(sess: Any) -> Callable[[np.ndarray], np.ndarray]:
        name = sess.get_inputs()[0].name

        def run(x: np.ndarray) -> np.ndarray:  # [X,Y,Z,C] -> [X,Y,Z,K]
            out: np.ndarray = sess.run(None, {name: x[None].astype(np.float32, copy=False)})[0][0]
            return out

        return run

    def _tiles(self, shape: tuple[int, ...], filename: str, resident_gib: float) -> list[P.Tile]:
        allowance = max(self.max_memory_gib - resident_gib - _MEM_BASE_GIB, 0.4)
        max_vox = int(allowance / _MEM_SLOPE[filename] * 1e6)
        return P.plan_tiles(shape, P.plan_tile_shape(shape, max_vox, self.overlap), self.overlap)

    def _plan(self, reference: Volume) -> tuple[bool, bool]:
        """(use robust model, run parcellation)."""
        slice_mm = float(max(reference.geometry.spacing))
        robust = self.robust if self.robust is not None else slice_mm > ROBUST_AUTO_MM and self._has(ROBUST_FILE)
        if robust and not self._has(ROBUST_FILE):
            raise RuntimeError("SynthSeg-robust model not installed")
        return robust, self.parcellation and self._has(PARC_FILE)

    def predict_native(self, reference: Volume, progress: ProgressFn) -> np.ndarray:
        """SynthSeg labels (FreeSurfer aseg / DK codes, int16) on ``reference``'s own grid."""
        if not self.available():
            raise RuntimeError("SynthSeg ONNX model not installed (run `medmereport models pull synthseg`)")
        geom = reference.geometry
        robust, do_parc = self._plan(reference)
        seg_file = ROBUST_FILE if robust else SEG_FILE

        progress("preprocess", 2, "resampling to 1 mm")
        img, grid = P.to_network_grid(reference.data, geom)
        img = P.rescale(img, ct=reference.sequence.upper() == "CT")
        full_shape = img.shape
        box = P.head_bbox(img)
        crop = img[box]
        del img
        x, inner = P.pad_centered(crop[..., None], P.pad_shape(crop.shape))
        n_out = len(L.SEG_LABELS)

        # Posteriors are kept only for the unpadded region, in float16 (half the memory; argmax and the
        # 0.2/0.25 thresholds are unaffected in practice).
        post = np.zeros((*crop.shape, n_out), np.float16)
        resident = (post.nbytes + x.nbytes) / 2**30 + 0.1  # + labels, masks, interpolation scratch
        sess = self._session(seg_file)
        net = self._runner(sess)
        if not robust:
            net = P.flip_tta(net, L.flip_indices())
        tiles = self._tiles(x.shape, seg_file, resident)
        span = 55.0 if do_parc else 75.0
        progress("inference", 10, f"{len(tiles)} tile(s)")
        P.run_blended(
            net, x, tiles, post,
            lambda i, n: progress("inference", 10 + span * i / n, f"tile {i}/{n}"), window=inner,
        )  # fmt: skip
        del sess, net

        parc_idx = None
        if do_parc:
            # parcellation input: image + one-hot cortex mask from the *raw* segmentation (as in SynthSeg)
            ctx = np.zeros(x.shape[:3], np.float32)
            ctx[inner] = np.isin(L.SEG_LABELS[np.argmax(post, axis=-1)], L.CORTEX)
            xp = np.concatenate([x, (1 - ctx)[..., None], ctx[..., None]], axis=-1)
            del ctx
            sess = self._session(PARC_FILE)
            parc_idx = np.zeros(crop.shape, np.uint8)
            tiles = self._tiles(x.shape, PARC_FILE, resident + xp.nbytes / 2**30)
            P.run_tiled(
                self._runner(sess), xp, tiles, lambda p: np.argmax(p[..., 1:], axis=-1).astype(np.uint8), parc_idx,
                lambda i, n: progress("parcellation", 65 + 20 * i / n, f"tile {i}/{n}"), window=inner,
            )  # fmt: skip
            del sess, xp
        del x

        progress("postprocess", 87, "topology clean-up")
        seg = P.postprocess(post, None if robust else L.TOPOLOGY_CLASSES, L.SEG_LABELS)
        del post
        if parc_idx is not None:
            seg = P.merge_parcellation(seg, parc_idx, L.PARC_LABELS, L.CORTEX)

        full = np.zeros(full_shape, np.int32)
        full[box] = seg
        progress("postprocess", 93, "resampling labels to the scan grid")
        return P.from_network_grid(full, grid, geom, reference.data.shape)

    def segment(self, reference: Volume, extra: list[Volume], progress: ProgressFn) -> LabelMap:
        """Segment ``reference`` (``extra`` is unused: SynthSeg is single-contrast)."""
        robust, do_parc = self._plan(reference)
        native = self.predict_native(reference, progress)
        slice_mm = float(max(reference.geometry.spacing))
        lut, regions = L.build_lut(native)
        labels = lut[native]
        brain = (native > 0) & (native != L.CSF)

        caveats = [CAVEAT_ML]
        if slice_mm > THICK_SLICE_MM:
            caveats.append(CAVEAT_THICK.format(mm=slice_mm))
        if do_parc:
            caveats.append(CAVEAT_PARC)
        elif L.native_to_vocab(L.CORTEX[0]) is None:
            caveats.append(CAVEAT_NO_CORTEX)
        progress("done", 100, "")
        return LabelMap(
            labels=labels.astype(np.int16),
            geometry=reference.geometry,
            regions=regions,
            backend=f"{NAME}@{VERSION}{'-robust' if robust else ''}{'+parc' if do_parc else ''}",
            licence=LICENCE,
            caveats=caveats,
            brain_mask=brain,
        )
