from pathlib import Path

import numpy as np
import pytest
from PIL import Image

from medmereport.ingest import images as images_mod
from medmereport.ingest.base import IngestAdapter, OpenContext
from medmereport.ingest.dcmburner import DcmBurnerAdapter
from medmereport.ingest.images import ImagesAdapter, image_series_from_files
from medmereport.ingest.radiant import RadiantAdapter
from tests.fixtures.containers import (
    make_dcmburner_disc,
    make_dicomdir_disc,
    make_loose_folder,
    make_radiant_disc,
    make_xray_images,
)


@pytest.fixture(scope="module")
def xr(tmp_path_factory):
    return make_xray_images(tmp_path_factory.mktemp("xr") / "imgs")


def ctx(tmp_path: Path, progress=None) -> OpenContext:
    t = tmp_path / "session"
    t.mkdir(exist_ok=True)
    return OpenContext(tmp=t, progress=progress)


def test_protocol():
    assert isinstance(ImagesAdapter(), IngestAdapter)


def test_open_folder(xr, tmp_path):
    folder = xr["png"].parent
    d = ImagesAdapter().detect(folder)
    assert d is not None and d.adapter == "images" and not d.encrypted
    c = ctx(tmp_path)
    out = list(ImagesAdapter().open(folder, c))
    assert all(p.suffix == ".png" and p.is_relative_to(c.tmp) for p in out)
    assert len(out) == 3 + 2  # png, jpeg, photo + 2 PDF pages
    series = image_series_from_files(out)
    assert len(series) == 4
    assert sum(s["n"] for s in series) == 5
    pdf = next(s for s in series if s["source_kind"] == "pdf")
    assert pdf["n"] == 2 and pdf["title"] == "xray_report"
    assert {s["source_kind"] for s in series} == {"pdf", "photo", "image"}
    assert all(s["role"] == "photo" for s in series)


def test_exif_orientation_applied_and_stripped(xr, tmp_path):
    src = Image.open(xr["photo"])
    assert src.getexif().get(0x0112) == 6  # fixture sanity: rotated + has EXIF/GPS
    assert src.size == (400, 300)
    (out,) = list(ImagesAdapter().open(xr["photo"], ctx(tmp_path)))
    im = Image.open(out)
    assert im.size == (300, 400)  # transposed to portrait
    assert len(im.getexif()) == 0
    assert "exif" not in im.info and "icc_profile" not in im.info and "xmp" not in im.info
    raw = out.read_bytes()
    assert b"eXIf" not in raw and b"Exif" not in raw and b"SyntheticPhone" not in raw
    a = np.asarray(im.convert("RGB"))
    # stored top-left red marker -> top-right after a 90-degree clockwise turn
    r, g, _ = (int(v) for v in a[5, -5])
    assert r > 200 and g < 60
    assert im.mode == "RGB"  # has colour (red marker), so stays RGB


def test_grey_stays_grey(xr, tmp_path):
    (png,) = list(ImagesAdapter().open(xr["png"], ctx(tmp_path)))
    (jpg,) = list(ImagesAdapter().open(xr["jpeg"], ctx(tmp_path)))
    assert Image.open(png).mode == "L"
    assert Image.open(jpg).mode == "L"  # RGB-encoded grey JPEG becomes L


def test_pdf_pages_rendered(xr, tmp_path):
    pages = list(ImagesAdapter().open(xr["pdf"], ctx(tmp_path)))
    assert len(pages) == 2
    for p in pages:
        im = Image.open(p)
        # 300x380 px at 100 dpi -> 3.0x3.8 in -> ~450x570 at 150 dpi
        assert abs(im.size[0] - 450) <= 3 and abs(im.size[1] - 570) <= 3
        assert np.asarray(im).std() > 10  # not blank


def test_page_limit(xr, tmp_path, monkeypatch):
    monkeypatch.setattr(images_mod, "MAX_IMAGES", 2)
    msgs = []
    out = list(ImagesAdapter().open(xr["png"].parent, ctx(tmp_path, progress=lambda s, p, m: msgs.append(m))))
    assert len(out) == 2
    assert any("first 2" in m for m in msgs)


def test_megapixel_limit(tmp_path, monkeypatch):
    monkeypatch.setattr(images_mod, "MAX_PIXELS", 1000)
    p = tmp_path / "big.png"
    Image.new("L", (100, 100), 128).save(p)
    msgs = []
    out = list(ImagesAdapter().open(p, ctx(tmp_path, progress=lambda s, pct, m: msgs.append(m))))
    assert out == []
    assert any("megapixels" in m for m in msgs)


def test_heic_warns(tmp_path):
    d = tmp_path / "photos"
    d.mkdir()
    (d / "IMG_1.HEIC").write_bytes(b"\x00\x00\x00\x18ftypheic")
    msgs = []
    out = list(ImagesAdapter().open(d, ctx(tmp_path, progress=lambda s, p, m: msgs.append(m))))
    assert out == []
    assert any("HEIC" in m for m in msgs)


def test_broken_image_skipped(tmp_path):
    d = tmp_path / "photos"
    d.mkdir()
    (d / "broken.jpg").write_bytes(b"\xff\xd8\xff garbage")
    Image.new("L", (10, 10), 9).save(d / "ok.png")
    out = list(ImagesAdapter().open(d, ctx(tmp_path)))
    assert len(out) == 1


def test_detect_does_not_claim_discs(tmp_path):
    a = ImagesAdapter()
    burner = make_dcmburner_disc(tmp_path / "burner", "pw")
    make_xray_images(burner / "extras")  # images on the disc must not tip the balance
    assert a.detect(burner) is None
    wrap = tmp_path / "wrap"
    make_dcmburner_disc(wrap / "DISC", "pw")
    make_xray_images(wrap / "pics")
    assert a.detect(wrap) is None
    assert DcmBurnerAdapter().detect(wrap) is not None

    assert a.detect(make_dicomdir_disc(tmp_path / "pdi")) is None  # has a PDF report, but it's a DICOM disc
    assert a.detect(make_radiant_disc(tmp_path / "rad", "pw")) is None
    assert a.detect(make_loose_folder(tmp_path / "loose")) is None  # extensionless DICOM, sniffed


def test_detect_confidence_ordering(tmp_path):
    burner = make_dcmburner_disc(tmp_path / "burner", "pw")
    rad = make_radiant_disc(tmp_path / "rad", "pw")
    pics = make_xray_images(tmp_path / "pics")["png"].parent
    adapters = [ImagesAdapter(), DcmBurnerAdapter(), RadiantAdapter()]

    def best(src):
        hits = [d for d in (a.detect(src) for a in adapters) if d is not None]
        return max(hits, key=lambda d: d.confidence).adapter

    assert best(burner) == "dcmburner"
    assert best(rad) == "radiant"
    assert best(pics) == "images"


def test_image_series_without_sidecar(tmp_path):
    d = tmp_path / "x"
    d.mkdir()
    for i in range(3):
        Image.new("L", (4, 4)).save(d / f"{i}.png")
    (s,) = image_series_from_files(sorted(d.iterdir()))
    assert s["n"] == 3 and s["title"] == "x"
