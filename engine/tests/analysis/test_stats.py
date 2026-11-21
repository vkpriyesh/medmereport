"""Stats on phantoms with known volumes and signal levels."""

import numpy as np
import pytest

from medmereport.analysis.stats import compute_stats
from medmereport.segment.base import LabelMap, Volume
from tests.geometry.phantom import CEREB, HEMI_R, STEM, VENT, ellipsoid_mm3, expected_tissue_mm3, make_phantom


@pytest.fixture(scope="module")
def phantom():
    return make_phantom(1.0)


@pytest.fixture(scope="module")
def stats(phantom):
    return compute_stats(phantom.reference, phantom.extras, phantom.labels)


def _m(ms, key):
    return next(m for m in ms if m.key == key)


def test_every_measurement_has_method_and_caveats(stats):
    all_ms = list(stats.summary.values()) + [m for ms in stats.regions.values() for m in ms]
    assert all_ms
    for m in all_ms:
        assert m.method.strip()
        assert isinstance(m.caveats, list)


def test_volumes_match_analytic_phantom(stats):
    s = stats.summary
    assert s["brain_tissue_volume"].value == pytest.approx(expected_tissue_mm3() / 1000, rel=0.05)
    hemi = (ellipsoid_mm3(HEMI_R) - ellipsoid_mm3(VENT[1])) / 1000
    assert s["hemi_L_volume"].value == pytest.approx(hemi, rel=0.05)
    assert s["hemi_R_volume"].value == pytest.approx(hemi, rel=0.05)
    assert s["ventricles_volume"].value == pytest.approx(2 * ellipsoid_mm3(VENT[1]) / 1000, rel=0.05)
    assert s["cerebellum_volume"].value == pytest.approx(ellipsoid_mm3(CEREB[1]) / 1000, rel=0.05)
    (_, _), r, (z0, z1) = STEM
    assert s["brainstem_volume"].value == pytest.approx(np.pi * r**2 * (z1 - z0) / 1000, rel=0.05)
    assert s["hemisphere_asymmetry_pct"].value == pytest.approx(0, abs=0.5)
    assert not stats.warnings


def test_region_volume_is_exact_voxel_count(phantom, stats):
    n = int((phantom.labels.labels == 11).sum())
    assert _m(stats.regions["L|thalamus"], "volume").value == pytest.approx(n / 1000, abs=0.01)


def test_contrast_ratios_and_adc(stats):
    sfg = stats.regions["L|sfg"]
    assert _m(sfg, "flair_ratio").value == pytest.approx(500 / 400, abs=0.01)
    assert _m(sfg, "t2_ratio").value == pytest.approx(450 / 300, abs=0.01)
    assert _m(sfg, "adc_median").value == pytest.approx(850, abs=1)
    assert _m(sfg, "adc_q1").value <= _m(sfg, "adc_median").value <= _m(sfg, "adc_q3").value
    wm = stats.summary["wm_adc_median"]
    assert wm.value == pytest.approx(750, abs=1) and "Helenius" in (wm.reference or "")
    assert _m(stats.regions["L|cerebral_white_matter"], "flair_ratio").value == pytest.approx(1.0, abs=0.01)
    assert _m(stats.regions["L|sfg"], "asym_volume_pct").value == pytest.approx(0, abs=0.5)
    assert _m(stats.regions["L|sfg"], "asym_adc_pct").value == pytest.approx(0, abs=0.5)
    assert all(m.key != "asym_volume_pct" for m in stats.regions["M|pons"])


def test_adc_unit_inferred_and_csf_partial_volume_excluded(phantom):
    ref = Volume(phantom.reference.data.copy(), phantom.reference.geometry, "T1", "s0")
    adc_src = next(v for v in phantom.extras if v.sequence == "ADC")
    adc = Volume(adc_src.data * 1e-6, adc_src.geometry, "ADC", "s3")  # stored in mm^2/s
    sfg = phantom.labels.labels == 1
    idx = np.argwhere(sfg)[::3]  # a third of the cortex becomes CSF-like (sulcal partial volume)
    ref.data[tuple(idx.T)] = 110.0
    adc.data[tuple(idx.T)] = 3000e-6
    st = compute_stats(ref, [adc], phantom.labels)
    assert _m(st.regions["L|sfg"], "adc_median").value == pytest.approx(850, abs=1)
    assert st.summary["wm_adc_median"].value == pytest.approx(750, abs=1)
    assert all(m.key not in ("flair_ratio", "t2_ratio") for m in st.regions["L|sfg"])


def test_hemisphere_asymmetry_warns():
    p = make_phantom(2.0, left_scale=0.75)
    st = compute_stats(p.reference, [], p.labels)
    a = st.summary["hemisphere_asymmetry_pct"]
    assert a.value < -10
    assert any(c.severity == "warn" for c in a.caveats)
    assert any("hemispheres differ" in w for w in st.warnings)
    assert "wm_adc_median" not in st.summary


def test_implausible_brain_volume_warns():
    p = make_phantom(2.0)
    lab = p.labels.labels.copy()
    lab[np.isin(lab, [1, 3, 5, 7, 9, 2, 4, 6, 8, 10])] = 0  # only deep structures left: ~ tens of cm3
    lm = LabelMap(lab, p.labels.geometry, p.labels.regions, "phantom@1", "CC0")
    st = compute_stats(p.reference, p.extras, lm)
    bt = st.summary["brain_tissue_volume"]
    assert bt.value < 900
    assert any(c.severity == "warn" for c in bt.caveats)
    assert any("outside 900-1800" in w for w in st.warnings)
