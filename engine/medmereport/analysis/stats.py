"""Per-region measurements and plausibility checks (docs/PLAN.md "honesty layer").

Every number is a :class:`~medmereport.core.models.Measurement` with ``method`` and ``caveats``;
``reference`` is set only where a named source backs it. Plausibility checks never hide a value:
they attach warn-level caveats and add a study-level warning.

Conventions (from the prototype):
* Volumes: voxel count x voxel volume on the label-map grid.
* "Brain tissue": labelled voxels brighter than the CSF/GM mid-level of the T1-like reference,
  excluding ventricles. Never the (generous) brain mask.
* ADC: median and quartiles over the region's tissue voxels (CSF partial volume excluded with the
  same T1 tissue mask; ventricles use all voxels), in x10^-6 mm^2/s.
* FLAIR / T2 ratios: region median divided by the median of the patient's own cerebral white matter.
* Asymmetry: 200 x (L - R) / (L + R) percent; positive = left larger.
"""

from __future__ import annotations

from collections.abc import Mapping
from dataclasses import dataclass, field

import numpy as np

from medmereport.core.models import Caveat, Measurement
from medmereport.geometry.surface import RegionInfo, TissueModel, known_regions, region_key, region_table, tissue_model
from medmereport.knowledge.structures import ALL
from medmereport.segment.base import LabelMap, Volume

ADC_UNIT = "×10⁻⁶ mm²/s"
ADC_WM_REFERENCE = (
    "Normal adult white matter ADC is typically about 700-800 x10^-6 mm^2/s (0.7-0.8 x10^-3 mm^2/s); "
    "Helenius J et al., Diffusion-weighted MR imaging in normal human brains in various age groups, "
    "AJNR Am J Neuroradiol 2002;23:194-199. Values vary with scanner, b-value and age."
)
BRAIN_TISSUE_RANGE_CM3 = (900.0, 1800.0)
HEMI_ASYM_WARN_PCT = 10.0
MIN_VOXELS = 20

_NOT_DIAGNOSIS = Caveat(text="Automated estimate for education; not a diagnosis.")


@dataclass
class StudyStats:
    summary: dict[str, Measurement]
    regions: dict[str, list[Measurement]]
    warnings: list[str] = field(default_factory=list)


def _adc_scale(values: np.ndarray) -> float:
    """Factor converting the stored ADC values to x10^-6 mm^2/s (unit inferred from magnitude)."""
    pos = values[values > 0]
    if pos.size == 0:
        return 1.0
    med = float(np.median(pos))
    if med < 0.01:  # mm^2/s
        return 1e6
    if med < 10:  # x10^-3 mm^2/s
        return 1e3
    if med < 100:  # x10^-5 mm^2/s (rare)
        return 10.0
    return 1.0


def _pick(extras: list[Volume], *names: str) -> Volume | None:
    for name in names:
        for v in extras:
            if v.sequence.upper() == name:
                return v
    return None


def _vol_measure(key: str, label: str, voxels: int, vox_mm3: float, method: str, caveats: list[Caveat]) -> Measurement:
    return Measurement(
        key=key, label=label, value=round(voxels * vox_mm3 / 1000.0, 2), unit="cm³", method=method, caveats=caveats
    )


def _asym(a: float, b: float) -> float | None:
    s = a + b
    return None if s <= 0 else round(200.0 * (a - b) / s, 1)


def compute_stats(
    reference: Volume,
    extras: list[Volume],
    lm: LabelMap,
    tissue: TissueModel | None = None,
    table: dict[str, RegionInfo] | None = None,
) -> StudyStats:
    if reference.data.shape != lm.labels.shape:
        raise ValueError("reference volume and label map must share one grid")
    regions = known_regions(lm)
    table = table if table is not None else region_table(lm)
    labels = lm.labels
    tissue = tissue or tissue_model(reference.data, labels, regions)
    vox_mm3 = float(np.prod(lm.geometry.spacing))
    is_tissue = tissue.tissue_mask(reference.data, labels)
    backend = lm.backend
    seg_caveat = Caveat(text=f"Boundaries come from automatic segmentation ({backend}); they are approximate.")
    warnings: list[str] = []

    # codes per key (several label codes may map to one structure)
    codes: dict[str, list[int]] = {}
    for c, r in regions.items():
        codes.setdefault(region_key(r.hemi, r.structure), []).append(c)

    flat = labels.ravel()
    order = np.argsort(flat, kind="stable")
    sorted_labels = flat[order]

    def region_index(key: str) -> np.ndarray:
        """Flat voxel indices of a region (all its codes)."""
        parts = [
            order[np.searchsorted(sorted_labels, c, "left") : np.searchsorted(sorted_labels, c, "right")]
            for c in codes[key]
        ]
        out: np.ndarray = np.concatenate(parts) if parts else np.empty(0, np.int64)
        return out

    flair = _pick(extras, "FLAIR")
    t2 = _pick(extras, "T2")
    adc = _pick(extras, "ADC")
    for v in (flair, t2, adc):
        if v is not None and v.data.shape != labels.shape:
            raise ValueError("extra contrasts must be on the reference grid")
    wm_keys = [k for k in codes if table.get(k) and table[k].structure == "cerebral_white_matter"]
    wm = np.isin(labels, [c for k in wm_keys for c in codes[k]]) & is_tissue if wm_keys else None
    adc_scale = _adc_scale(
        adc.data[wm]
        if (adc is not None and wm is not None and wm.any())
        else (adc.data[labels > 0] if adc is not None else np.empty(0))
    )
    adc_data = adc.data * adc_scale if adc is not None else None
    adc_valid = (adc_data > 50) if adc_data is not None else None  # > 50 x10^-6: inside the ADC field of view
    adc_flat = adc_data.ravel() if adc_data is not None else None
    adc_valid_flat = adc_valid.ravel() if adc_valid is not None else None
    tissue_flat = is_tissue.ravel()
    fl_ref = t2_ref = None
    if wm is not None and wm.sum() >= MIN_VOXELS:
        if flair is not None and (wm & (flair.data > 0)).sum() >= MIN_VOXELS:
            fl_ref = float(np.median(flair.data[wm & (flair.data > 0)]))
        if t2 is not None and (wm & (t2.data > 0)).sum() >= MIN_VOXELS:
            t2_ref = float(np.median(t2.data[wm & (t2.data > 0)]))

    out: dict[str, list[Measurement]] = {}
    adc_medians: dict[str, float] = {}
    volumes: dict[str, float] = {}
    for key, info in sorted(table.items()):
        idx = region_index(key)
        nvox = int(idx.size)
        if nvox == 0:
            continue
        ms: list[Measurement] = []
        vol = _vol_measure(
            "volume", "Volume", nvox, vox_mm3, "Voxel count x voxel volume of the automatic label map.", [seg_caveat]
        )
        ms.append(vol)
        volumes[key] = float(vol.value or 0.0)
        ventricle = ALL[info.structure][1] == "ventricle"
        mt = idx if ventricle else idx[tissue_flat[idx]]
        if adc_flat is not None and adc_valid_flat is not None:
            sel = mt[adc_valid_flat[mt]]
            n_adc = int(sel.size)
            if n_adc >= MIN_VOXELS:
                vals = adc_flat[sel]
                q1, med, q3 = (float(v) for v in np.percentile(vals, [25, 50, 75]))
                cav = [
                    Caveat(
                        text="ADC unit inferred from the stored values; diffusion maps are low resolution "
                        "and were resampled to the 1 mm grid."
                    )
                ]
                if n_adc < 0.5 * int(mt.size):
                    cav.append(Caveat(text="Less than half of this region is inside the ADC map's coverage."))
                if ventricle:
                    cav.append(Caveat(text="Ventricles contain fluid; their ADC is expected to be high."))
                method = (
                    "Median of the region's ADC voxels"
                    + ("" if ventricle else ", excluding CSF partial volume with a T1 tissue mask")
                    + "."
                )
                ms.append(
                    Measurement(
                        key="adc_median",
                        label="ADC (median)",
                        value=round(med),
                        unit=ADC_UNIT,
                        method=method,
                        caveats=cav,
                    )
                )
                ms.append(
                    Measurement(
                        key="adc_q1",
                        label="ADC (25th percentile)",
                        value=round(q1),
                        unit=ADC_UNIT,
                        method="25th percentile of the same voxels.",
                        caveats=list(cav),
                    )
                )
                ms.append(
                    Measurement(
                        key="adc_q3",
                        label="ADC (75th percentile)",
                        value=round(q3),
                        unit=ADC_UNIT,
                        method="75th percentile of the same voxels.",
                        caveats=list(cav),
                    )
                )
                adc_medians[key] = med
        for vol_c, ref, mkey, mlabel in (
            (flair, fl_ref, "flair_ratio", "FLAIR signal vs own white matter"),
            (t2, t2_ref, "t2_ratio", "T2 signal vs own white matter"),
        ):
            if vol_c is None or ref is None or ref <= 0:
                continue
            vals_c = vol_c.data.ravel()[mt]
            vals_c = vals_c[vals_c > 0]
            if int(vals_c.size) < MIN_VOXELS:
                continue
            ratio = float(np.median(vals_c)) / ref
            ms.append(
                Measurement(
                    key=mkey,
                    label=mlabel,
                    value=round(ratio, 2),
                    unit="ratio",
                    method="Median signal in the region divided by the median signal of your own cerebral white matter.",  # noqa: E501
                    caveats=[
                        Caveat(
                            text="MR signal has no absolute unit; ratios depend on scanner and sequence "
                            "settings and are only comparable within this scan."
                        )
                    ],
                )
            )
        out[key] = ms

    # L/R asymmetry
    for key, ms in out.items():
        hemi, structure = key.split("|", 1)
        if hemi not in ("L", "R"):
            continue
        other = f"{'R' if hemi == 'L' else 'L'}|{structure}"
        if other not in volumes:
            continue
        lk, rk = (key, other) if hemi == "L" else (other, key)
        a = _asym(volumes[lk], volumes[rk])
        if a is not None:
            ms.append(
                Measurement(
                    key="asym_volume_pct",
                    label="Left-right volume difference",
                    value=a,
                    unit="%",
                    method="200 x (left - right) / (left + right); positive = left larger.",
                    caveats=[seg_caveat, Caveat(text="Small differences between sides are normal.")],
                )
            )
        if lk in adc_medians and rk in adc_medians:
            a = _asym(adc_medians[lk], adc_medians[rk])
            if a is not None:
                ms.append(
                    Measurement(
                        key="asym_adc_pct",
                        label="Left-right ADC difference",
                        value=a,
                        unit="%",
                        method="200 x (left - right) / (left + right) of the median ADC.",
                        caveats=[Caveat(text="Small differences between sides are normal.")],
                    )
                )

    summary = _summary(
        labels, regions, table, codes, is_tissue, vox_mm3, tissue, seg_caveat, adc_data, adc_valid, wm, warnings
    )
    return StudyStats(summary=summary, regions=out, warnings=warnings)


def _summary(
    labels: np.ndarray,
    regions: Mapping[int, object],
    table: dict[str, RegionInfo],
    codes: dict[str, list[int]],
    is_tissue: np.ndarray,
    vox_mm3: float,
    tissue: TissueModel,
    seg_caveat: Caveat,
    adc_data: np.ndarray | None,
    adc_valid: np.ndarray | None,
    wm: np.ndarray | None,
    warnings: list[str],
) -> dict[str, Measurement]:
    def codes_where(pred: object) -> list[int]:
        return [c for k, info in table.items() if pred(info) for c in codes.get(k, [])]  # type: ignore[operator]

    def count(cs: list[int], tissue_only: bool = False) -> int:
        m = np.isin(labels, cs)
        if tissue_only:
            m &= is_tissue
        return int(m.sum())

    group = {k: ALL[i.structure][1] for k, i in table.items()}
    ventricles = codes_where(lambda i: group[i.key] == "ventricle")
    brain_codes = codes_where(lambda i: group[i.key] in ("hemi", "deep", "ventricle", "cerebellum", "brainstem"))
    tissue_vox = int((np.isin(labels, brain_codes) & ~np.isin(labels, ventricles) & is_tissue).sum())
    s: dict[str, Measurement] = {}
    method_t = (
        "Labelled brain voxels brighter than the CSF/grey-matter mid-level of the T1-like scan, "
        "excluding the ventricles (not the generous brain mask)."
        if tissue.mode == "intensity"
        else "Labelled brain voxels excluding the ventricles (scan contrast not usable for a tissue mask)."
    )
    bt = _vol_measure(
        "brain_tissue_volume", "Brain tissue volume", tissue_vox, vox_mm3, method_t, [seg_caveat, _NOT_DIAGNOSIS]
    )
    lo, hi = BRAIN_TISSUE_RANGE_CM3
    if bt.value is not None and not lo <= bt.value <= hi:
        text = (
            f"Brain tissue volume {bt.value:.0f} cm3 is outside {lo:.0f}-{hi:.0f} cm3, which is implausible "
            "for an adult brain; the segmentation may have failed or the scan may not cover the whole brain."
        )
        bt.caveats.append(Caveat(text=text, severity="warn"))
        warnings.append(text)
    s["brain_tissue_volume"] = bt

    cerebral = ("hemi", "deep")
    hemi_vox = {}
    for h in ("L", "R"):
        cs = codes_where(lambda i, h=h: i.hemi == h and group[i.key] in cerebral)
        hemi_vox[h] = count(cs)
        s[f"hemi_{h}_volume"] = _vol_measure(
            f"hemi_{h}_volume",
            f"{'Left' if h == 'L' else 'Right'} cerebral hemisphere volume",
            hemi_vox[h],
            vox_mm3,
            "Sum of the hemisphere's cortical, white-matter and deep-grey labels (no cerebellum, brainstem or "
            "ventricles).",
            [seg_caveat],
        )
    a = _asym(float(hemi_vox["L"]), float(hemi_vox["R"]))
    if a is not None:
        am = Measurement(
            key="hemisphere_asymmetry_pct",
            label="Left-right hemisphere difference",
            value=a,
            unit="%",
            method="200 x (left - right) / (left + right) of the hemisphere volumes.",
            caveats=[seg_caveat],
        )
        if abs(a) > HEMI_ASYM_WARN_PCT:
            text = (
                f"The hemispheres differ by {abs(a):.0f}% in volume (more than {HEMI_ASYM_WARN_PCT:.0f}%); "
                "this is unusual and may reflect a segmentation problem or partial coverage."
            )
            am.caveats.append(Caveat(text=text, severity="warn"))
            warnings.append(text)
        s["hemisphere_asymmetry_pct"] = am
    for key, label, g in (
        ("ventricles_volume", "Ventricles volume", "ventricle"),
        ("cerebellum_volume", "Cerebellum volume", "cerebellum"),
        ("brainstem_volume", "Brainstem volume", "brainstem"),
    ):
        cs = codes_where(lambda i, g=g: group[i.key] == g)
        if cs:
            s[key] = _vol_measure(key, label, count(cs), vox_mm3, "Sum of the matching labels.", [seg_caveat])
    if adc_data is not None and adc_valid is not None and wm is not None:
        sel = wm & adc_valid
        if int(sel.sum()) >= MIN_VOXELS:
            med = float(np.median(adc_data[sel]))
            cav = [Caveat(text="ADC unit inferred from the stored values.")]
            if not 500 <= med <= 1100:
                cav.append(
                    Caveat(
                        text="White-matter ADC is far from typical adult values; check the ADC unit and "
                        "the registration of the diffusion scan.",
                        severity="warn",
                    )
                )
            s["wm_adc_median"] = Measurement(
                key="wm_adc_median",
                label="White matter ADC (median)",
                value=round(med),
                unit=ADC_UNIT,
                method="Median ADC over cerebral white-matter tissue voxels.",
                reference=ADC_WM_REFERENCE,
                caveats=cav,
            )
    return s
