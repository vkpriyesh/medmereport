"""Offline developer tool: convert the official SynthSeg 2.0 Keras models to ONNX for medmereport.

medmereport never runs TensorFlow. This script is run ONCE by a developer (or a release job) in a
throwaway environment, and the resulting ``.onnx`` files are hosted as release assets and listed (with
sha256) in ``engine/medmereport/models/registry.py``. Model files are never committed (``*.onnx`` is
git-ignored).

Provenance and licences
-----------------------
* Code + models: SynthSeg by Benjamin Billot et al., https://github.com/BBillot/SynthSeg, Apache-2.0
  (LICENSE.txt in that repo; the README's "Citation/Contact" section states the release is Apache-2.0).
  The SynthSeg 2.0 ``.h5`` weights were distributed by the authors from a UCL SharePoint folder linked
  in the README (the link returned HTTP 404 in Nov 2026). Byte-identical copies are mirrored by
  FreeSurfer (``mri_synthseg/`` in https://github.com/freesurfer/freesurfer, git-annex objects served
  from https://surfer.nmr.mgh.harvard.edu/pub/dist/freesurfer/repo/annex.git); ``fetch`` downloads from
  there and verifies the sha256 values pinned below. (The mirror's ``synthseg_1.0.h5`` is byte-identical
  to the one committed in the Apache-2.0 SynthSeg repo.)
* Please cite: Billot et al., Medical Image Analysis 2023 (SynthSeg) and PNAS 2023 (robust/parcellation).

What gets exported (channels-last, dynamic spatial dims, input ``[1, X, Y, Z, C]`` float32)
---------------------------------------------------------------------------------------------
* ``synthseg_2.0.onnx``        U-Net (1 ch) -> softmax (33) -> GaussianBlur(sigma=0.5). The L/R-flip
  test-time augmentation and all pre/post-processing are done in numpy by the engine (tile-friendly).
* ``synthseg_parc_2.0.onnx``   U-Net (image + one-hot cortex mask, 3 ch) -> softmax (69) -> blur(0.5).
* ``synthseg_robust_2.0.onnx`` full robust chain (unet -> argmax/one-hot -> l2l denoiser -> argmax/one-hot
  -> concat image -> unet2) -> softmax (33). No blur / flip (as in the official robust mode).

Usage (Windows example; never use the global Python or the engine venv)
-----------------------------------------------------------------------
    set SCR=%TEMP%\\synthseg-convert
    git clone --depth 1 https://github.com/BBillot/SynthSeg.git %SCR%\\SynthSeg
    uv venv --python 3.11 %SCR%\\tfenv
    uv pip install --python %SCR%\\tfenv\\Scripts\\python.exe tensorflow-cpu==2.15.1 tf2onnx==1.16.1 ^
        onnx==1.16.2 onnxruntime==1.19.2 numpy==1.23.5 scipy==1.11.4 nibabel==5.2.1
    set PY=%SCR%\\tfenv\\Scripts\\python.exe -I
    %PY% scripts\\convert_synthseg.py fetch     --out %SCR%\\h5
    %PY% scripts\\convert_synthseg.py export    --synthseg-src %SCR%\\SynthSeg --h5-dir %SCR%\\h5 --out %SCR%\\onnx
    %PY% scripts\\convert_synthseg.py reference --synthseg-src %SCR%\\SynthSeg --h5-dir %SCR%\\h5 ^
        --image t1.nii --out %SCR%\\ref [--parc] [--robust]
    REM then segment the same image with the engine backend and compare:
    %PY% scripts\\convert_synthseg.py compare  ref_seg.nii.gz onnx_seg.nii.gz

``export`` also validates every ONNX model against the TF/Keras model on a real (or synthetic) input and
writes ``manifest.json`` (filename, sha256, size, licence) for the model registry.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import sys
import time
import urllib.request
from pathlib import Path

FS_ANNEX = "https://surfer.nmr.mgh.harvard.edu/pub/dist/freesurfer/repo/annex.git"
# filename -> (size, sha256) of the official SynthSeg 2.0 Keras weights
H5: dict[str, tuple[int, str]] = {
    "synthseg_2.0.h5": (53079152, "f190bfd742f450ef3ca2c9df9ed4d2e0232b3a74471da5e51b7770bacdf80c3e"),
    "synthseg_parc_2.0.h5": (53090840, "83bb1de76fb6f173c6dacacd433f81209fc6abb1dbc179a930ec06ecabbeb684"),
    "synthseg_robust_2.0.h5": (214606800, "7bc30bf5c3d204f20c4a6cb5a283aedbcab6af1de927cda783f59b67d19cb01c"),
}
OPSET = 17
LICENCE = "Apache-2.0"
ATTRIBUTION = "SynthSeg 2.0, B. Billot et al. (MedIA 2023; PNAS 2023), https://github.com/BBillot/SynthSeg"


def sha256(path: Path) -> str:
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def _annex_url(name: str) -> str:
    size, digest = H5[name]
    key = f"SHA256E-s{size}--{digest}.0.h5"
    h = hashlib.md5(key.encode(), usedforsecurity=False).hexdigest()  # git-annex hashdirlower
    return f"{FS_ANNEX}/annex/objects/{h[:3]}/{h[3:6]}/{key}/{key}"


def cmd_fetch(a: argparse.Namespace) -> None:
    out = Path(a.out)
    out.mkdir(parents=True, exist_ok=True)
    for name, (size, digest) in H5.items():
        p = out / name
        if not (p.exists() and sha256(p) == digest):
            print(f"downloading {name} ({size / 1e6:.0f} MB)")
            urllib.request.urlretrieve(_annex_url(name), p)  # noqa: S310 - fixed https URL
        if sha256(p) != digest:
            raise SystemExit(f"sha256 mismatch for {name}")
        print(f"ok {name}")


# --------------------------------------------------------------------------------------------- TF side
def _setup_synthseg(src: str) -> None:
    os.environ.setdefault("TF_CPP_MIN_LOG_LEVEL", "2")
    os.environ.setdefault("CUDA_VISIBLE_DEVICES", "-1")
    sys.path.insert(0, str(Path(src).resolve()))


def _labels(src: str) -> dict:
    import numpy as np

    d = Path(src) / "data" / "labels_classes_priors"
    seg = np.unique(np.load(d / "synthseg_segmentation_labels_2.0.npy"))
    den = np.unique(np.load(d / "synthseg_denoiser_labels_2.0.npy"))
    parc = np.unique(np.load(d / "synthseg_parcellation_labels.npy"))
    return {"seg": seg, "denoiser": den, "parc": parc}


def _check_loaded(model, h5: Path) -> None:
    """``load_weights(by_name=True)`` silently skips missing layers: verify every weighted layer matched."""
    import h5py
    import numpy as np

    with h5py.File(h5, "r") as f:
        g = f.get("model_weights", f)
        names = {k for k in g if len(g[k].keys())}
        n = 0
        for layer in model.layers:
            if layer.weights and layer.name in names:
                grp = g[layer.name]
                stored = []
                grp.visititems(lambda _k, v, s=stored: s.append(v[()]) if hasattr(v, "shape") else None)
                for w in layer.get_weights():
                    if not any(s.shape == w.shape and np.array_equal(s, w) for s in stored):
                        raise SystemExit(f"weights of {layer.name} not loaded from {h5.name}")
                n += 1
        missing = [ly.name for ly in model.layers if ly.weights and ly.name not in names]
    if missing:
        raise SystemExit(f"{h5.name}: layers without stored weights: {missing[:5]}")
    print(f"  verified {n} weighted layers loaded from {h5.name}")


def build_keras(kind: str, src: str, h5_dir: Path):
    import keras.layers as KL
    import tensorflow as tf
    from ext.lab2im import layers
    from ext.neuron import models as nrn
    from keras.models import Model

    lab = _labels(src)
    n_seg = len(lab["seg"])
    common = dict(nb_levels=5, nb_conv_per_level=2, feat_mult=2, activation="elu", batch_norm=-1)
    if kind == "seg":
        net = nrn.unet(
            input_shape=[None, None, None, 1], nb_labels=n_seg, conv_size=3, nb_features=24, name="unet", **common
        )
        net.load_weights(str(h5_dir / "synthseg_2.0.h5"), by_name=True)
        _check_loaded(net, h5_dir / "synthseg_2.0.h5")
        out = layers.GaussianBlur(sigma=0.5)(net.output)
        return Model(inputs=net.inputs, outputs=out)
    if kind == "parc":
        net = nrn.unet(
            input_shape=[None, None, None, 3],
            nb_labels=len(lab["parc"]),
            conv_size=3,
            nb_features=24,
            name="unet_parc",
            **common,
        )
        net.load_weights(str(h5_dir / "synthseg_parc_2.0.h5"), by_name=True)
        _check_loaded(net, h5_dir / "synthseg_parc_2.0.h5")
        out = layers.GaussianBlur(sigma=0.5)(net.output)
        return Model(inputs=net.inputs, outputs=out)
    if kind == "robust":  # mirrors SynthSeg.predict_synthseg.build_model(robust=True)
        n_groups = len(lab["denoiser"])
        net = nrn.unet(
            input_shape=[None, None, None, 1], nb_labels=n_groups, conv_size=3, nb_features=24, name="unet", **common
        )
        t = KL.Lambda(lambda x: tf.one_hot(tf.cast(tf.argmax(x, axis=-1), "int32"), depth=n_groups, axis=-1))(
            net.output
        )
        net = Model(inputs=net.inputs, outputs=t)
        net = nrn.unet(
            input_model=net,
            input_shape=[None, None, None, 1],
            nb_labels=n_groups,
            conv_size=5,
            nb_features=16,
            skip_n_concatenations=2,
            name="l2l",
            **common,
        )
        img = net.inputs[0]
        t = KL.Lambda(lambda x: tf.one_hot(tf.cast(tf.argmax(x, axis=-1), "int32"), depth=n_groups, axis=-1))(
            net.output
        )
        t = KL.Lambda(lambda x: tf.cast(tf.concat(x, axis=-1), "float32"))([img, t])
        net = Model(inputs=net.inputs, outputs=t)
        net = nrn.unet(
            input_model=net,
            input_shape=[None, None, None, 2],
            nb_labels=n_seg,
            conv_size=3,
            nb_features=24,
            name="unet2",
            **common,
        )
        net.load_weights(str(h5_dir / "synthseg_robust_2.0.h5"), by_name=True)
        _check_loaded(net, h5_dir / "synthseg_robust_2.0.h5")
        return net
    raise ValueError(kind)


FILES = {"seg": "synthseg_2.0.onnx", "parc": "synthseg_parc_2.0.onnx", "robust": "synthseg_robust_2.0.onnx"}
CHANNELS = {"seg": 1, "parc": 3, "robust": 1}


def _sample_input(kind: str, image: str | None, shape: int = 96):
    """A realistic test tensor: centre crop of a 1 mm image (or a smooth synthetic blob)."""
    import numpy as np

    if image:
        import nibabel as nib

        im = np.asarray(nib.load(image).dataobj, dtype=np.float32)
        lo, hi = np.percentile(im, [0.5, 99.5])
        im = np.clip((im - lo) / (hi - lo), 0, 1)
        c = [s // 2 for s in im.shape]
        x = im[
            c[0] - shape // 2 : c[0] + shape // 2,
            c[1] - shape // 2 : c[1] + shape // 2,
            c[2] - shape // 2 : c[2] + shape // 2,
        ]
    else:
        g = np.mgrid[:shape, :shape, :shape].astype(np.float32) - shape / 2
        x = np.exp(-(g**2).sum(0) / (2 * (shape / 4) ** 2)).astype(np.float32)
    x = x[None, ..., None]
    if CHANNELS[kind] == 3:  # image + one-hot of a fake cortex shell
        shell = ((x > 0.3) & (x < 0.6)).astype(np.float32)
        x = np.concatenate([x, 1 - shell, shell], -1)
    return np.ascontiguousarray(x, dtype=np.float32)


def cmd_export(a: argparse.Namespace) -> None:
    _setup_synthseg(a.synthseg_src)
    import numpy as np
    import onnxruntime as ort
    import tensorflow as tf
    import tf2onnx

    out = Path(a.out)
    out.mkdir(parents=True, exist_ok=True)
    manifest = []
    for kind in a.kinds:
        print(f"[{kind}] building Keras model")
        model = build_keras(kind, a.synthseg_src, Path(a.h5_dir))
        spec = (tf.TensorSpec([1, None, None, None, CHANNELS[kind]], tf.float32, name="image"),)
        dst = out / FILES[kind]
        tf2onnx.convert.from_keras(model, input_signature=spec, opset=OPSET, output_path=str(dst))
        x = _sample_input(kind, a.image)
        t0 = time.perf_counter()
        ref = model.predict(x, verbose=0)
        t_tf = time.perf_counter() - t0
        sess = ort.InferenceSession(str(dst), providers=["CPUExecutionProvider"])
        t0 = time.perf_counter()
        got = sess.run(None, {sess.get_inputs()[0].name: x})[0]
        t_ort = time.perf_counter() - t0
        diff = float(np.abs(ref - got).max())
        agree = float((ref.argmax(-1) == got.argmax(-1)).mean())
        print(f"[{kind}] max|TF-ONNX|={diff:.2e} argmax agreement={agree:.6f} tf={t_tf:.1f}s ort={t_ort:.1f}s")
        # The robust chain contains two hard argmax steps: float rounding can flip a near-tie voxel in an
        # intermediate one-hot, which changes that voxel's posteriors discretely. So for it only the final
        # label agreement is meaningful; the plain U-Nets must match to float precision.
        if agree < 0.999 or (kind != "robust" and diff > 1e-3):
            raise SystemExit(f"[{kind}] ONNX output does not match TF")
        manifest.append(
            {
                "name": FILES[kind].removesuffix(".onnx").replace(".", "-"),
                "filename": FILES[kind],
                "sha256": sha256(dst),
                "size": dst.stat().st_size,
                "licence": LICENCE,
                "attribution": ATTRIBUTION,
                "opset": OPSET,
                "validation": {"max_abs_diff": diff, "argmax_agreement": agree, "input_shape": list(x.shape)},
            }
        )
    mpath = out / "manifest.json"
    if mpath.exists():  # keep entries of models exported in an earlier run
        done = {m["filename"] for m in manifest}
        manifest = [m for m in json.loads(mpath.read_text()) if m["filename"] not in done] + manifest
    mpath.write_text(json.dumps(manifest, indent=2))
    print(json.dumps(manifest, indent=2))


def cmd_reference(a: argparse.Namespace) -> None:
    """Run the *official* SynthSeg TF pipeline (unchanged code) to produce reference labels."""
    _setup_synthseg(a.synthseg_src)
    import tensorflow as tf
    from SynthSeg.predict_synthseg import predict

    tf.config.threading.set_inter_op_parallelism_threads(os.cpu_count() or 1)
    src = Path(a.synthseg_src)
    lab = src / "data" / "labels_classes_priors"
    h5 = Path(a.h5_dir)
    out = Path(a.out)
    out.mkdir(parents=True, exist_ok=True)
    stem = Path(a.image).name.split(".")[0]
    seg_path = out / f"{stem}_synthseg{'_robust' if a.robust else ''}{'_parc' if a.parc else ''}.nii.gz"
    t0 = time.perf_counter()
    predict(
        path_images=a.image, path_segmentations=str(seg_path),
        path_model_segmentation=str(h5 / ("synthseg_robust_2.0.h5" if a.robust else "synthseg_2.0.h5")),
        labels_segmentation=str(lab / "synthseg_segmentation_labels_2.0.npy"),
        robust=a.robust, fast=a.robust, v1=False, n_neutral_labels=19,
        labels_denoiser=str(lab / "synthseg_denoiser_labels_2.0.npy"),
        path_posteriors=None, path_resampled=None, path_volumes=str(out / f"{stem}_volumes.csv"),
        do_parcellation=a.parc, path_model_parcellation=str(h5 / "synthseg_parc_2.0.h5"),
        labels_parcellation=str(lab / "synthseg_parcellation_labels.npy"),
        path_qc_scores=None, path_model_qc=None, labels_qc=None, cropping=None,
        names_segmentation=str(lab / "synthseg_segmentation_names_2.0.npy"),
        names_parcellation=str(lab / "synthseg_parcellation_names.npy"),
        topology_classes=str(lab / "synthseg_topological_classes_2.0.npy"),
    )  # fmt: skip
    print(f"reference written to {seg_path} in {time.perf_counter() - t0:.1f}s")


def cmd_compare(a: argparse.Namespace) -> None:
    import nibabel as nib
    import numpy as np

    ra, rb = nib.load(a.a), nib.load(a.b)
    if ra.shape != rb.shape or not np.allclose(ra.affine, rb.affine, atol=1e-3):
        raise SystemExit("label maps are on different grids")
    x, y = np.asarray(ra.dataobj).astype(np.int32), np.asarray(rb.dataobj).astype(np.int32)
    dice = {}
    for v in sorted(set(np.unique(x)) | set(np.unique(y)) - {0}):
        p, q = x == v, y == v
        dice[int(v)] = float(2 * (p & q).sum() / max(p.sum() + q.sum(), 1))
    fg = float(2 * ((x > 0) & (y > 0)).sum() / ((x > 0).sum() + (y > 0).sum()))
    vals = np.array(list(dice.values()))
    print(json.dumps({"voxel_agreement": float((x == y).mean()), "foreground_dice": fg,
                      "mean_label_dice": float(vals.mean()), "min_label_dice": float(vals.min()),
                      "per_label": dice}, indent=1))  # fmt: skip


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = p.add_subparsers(dest="cmd", required=True)
    f = sub.add_parser("fetch", help="download the official .h5 weights (sha256-verified)")
    f.add_argument("--out", required=True)
    e = sub.add_parser("export", help="Keras .h5 -> ONNX (+ TF-vs-ONNX validation, manifest.json)")
    e.add_argument("--synthseg-src", required=True, help="clone of github.com/BBillot/SynthSeg")
    e.add_argument("--h5-dir", required=True)
    e.add_argument("--out", required=True)
    e.add_argument("--image", help="1 mm NIfTI used for the validation crop (else a synthetic blob)")
    e.add_argument("--kinds", nargs="+", default=["seg", "parc", "robust"], choices=list(FILES))
    r = sub.add_parser("reference", help="official TF SynthSeg prediction (for Dice vs the ONNX backend)")
    r.add_argument("--synthseg-src", required=True)
    r.add_argument("--h5-dir", required=True)
    r.add_argument("--image", required=True)
    r.add_argument("--out", required=True)
    r.add_argument("--parc", action="store_true")
    r.add_argument("--robust", action="store_true")
    c = sub.add_parser("compare", help="Dice between two label NIfTIs on the same grid")
    c.add_argument("a")
    c.add_argument("b")
    a = p.parse_args()
    {"fetch": cmd_fetch, "export": cmd_export, "reference": cmd_reference, "compare": cmd_compare}[a.cmd](a)


if __name__ == "__main__":
    main()
