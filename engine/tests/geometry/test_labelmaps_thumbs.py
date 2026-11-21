"""2D label maps and region thumbnails on importer-style exported series (display slice order)."""

import json

import numpy as np
import pytest
from PIL import Image

from medmereport.export.labelmaps import coded_volume, read_meta, write_label_maps
from medmereport.export.thumbs import choose_series, native_source, virtual_source, write_thumbs
from tests.geometry.phantom import CODES, THAL, make_phantom, write_fake_study

KEYS = {c: f"{h}|{s}" for c, (s, h) in CODES.items()}


@pytest.fixture(scope="module")
def study(tmp_path_factory):
    p = make_phantom(2.0)
    d = write_fake_study(tmp_path_factory.mktemp("studies"), p)
    coded = coded_volume(p.labels.labels, {c: c for c in CODES})
    stacks = write_label_maps(d, ["s001", "s002"], coded, p.labels.geometry, KEYS)
    return p, d, coded, stacks


def _labels(d, sid, k):
    return np.asarray(Image.open(d / "series" / sid / f"L{k:03d}.png"))


def test_meta_updated_and_codes_match_label_table(study):
    _, d, _, stacks = study
    assert set(stacks) == {"s001", "s002"}
    for sid in stacks:
        meta = read_meta(d / "series" / sid)
        assert meta["labels"] is True
        table = meta["labelTable"]
        assert table == {str(c): k for c, k in KEYS.items()}
        for k in range(meta["n"]):
            lab = _labels(d, sid, k)
            assert lab.shape == (meta["h"], meta["w"])
            img = Image.open(d / "series" / sid / f"{k:03d}.{meta['ext']}")
            assert img.size == (meta["w"], meta["h"])
            assert {str(v) for v in np.unique(lab) if v} <= set(table)


def test_axial_label_pixel_hits_known_structure(study):
    _, d, _, _ = study
    meta = read_meta(d / "series" / "s001")
    pos = np.array([s["pos"] for s in meta["slices"]])
    assert pos[0][2] > pos[-1][2]  # superior first (importer order)
    (cx, cy, cz), _ = THAL
    for side, code in ((1, 11), (-1, 12)):
        k = int(np.argmin(np.abs(pos[:, 2] - cz)))
        ps_row, ps_col = meta["pixelSpacing"]
        col = (side * cx - pos[k][0]) / ps_col * meta["w"] / meta["cols"]
        row = (cy - pos[k][1]) / ps_row * meta["h"] / meta["rows"]
        assert _labels(d, "s001", k)[int(round(row)), int(round(col))] == code


def test_sagittal_order_right_to_left(study):
    _, d, _, _ = study
    meta = read_meta(d / "series" / "s002")
    xs = np.array([s["pos"][0] for s in meta["slices"]])
    assert xs[0] < xs[-1]
    k_left = int(np.argmin(np.abs(xs - THAL[0][0])))
    k_right = int(np.argmin(np.abs(xs + THAL[0][0])))
    assert 11 in _labels(d, "s002", k_left) and 12 not in _labels(d, "s002", k_left)
    assert 12 in _labels(d, "s002", k_right) and 11 not in _labels(d, "s002", k_right)


def test_thumbnails_point_at_exported_slices(study, tmp_path):
    p, d, coded, stacks = study
    metas = {sid: read_meta(d / "series" / sid) for sid in stacks}
    chosen = choose_series(metas, set(stacks))
    assert chosen == {"axial": "s001", "sagittal": "s002"}
    sources = {v: native_source(d, chosen[v], stacks[chosen[v]]) for v in chosen}
    sources["coronal"] = virtual_source("coronal", p.reference.data, coded, p.labels.geometry)
    codes = {k: c for c, k in KEYS.items()}
    thumbs = write_thumbs(tmp_path / "thumbs", "model/thumbs", sources, codes)
    assert set(thumbs) == set(codes)
    for key, ts in thumbs.items():
        assert [t["view"] for t in ts] == ["axial", "sagittal", "coronal"], key
        for t in ts:
            img = Image.open(tmp_path / "thumbs" / t["img"].split("/")[-1])
            assert max(img.size) == 300 and img.format == "JPEG"
            if t["series"] is None:
                assert t["view"] == "coronal"
                continue
            n = metas[t["series"]]["n"]
            assert 0 <= t["slice"] < n
            areas = [(_labels(d, t["series"], k) == codes[key]).sum() for k in range(n)]
            assert areas[t["slice"]] == max(areas) > 0
    th = {t["view"]: t for t in thumbs["L|thalamus"]}
    assert th["axial"]["series"] == "s001" and th["sagittal"]["series"] == "s002"
    json.dumps(thumbs)
