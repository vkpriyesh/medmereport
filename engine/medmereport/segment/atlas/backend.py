"""``atlas-ho``: MNI152 2009c + Harvard-Oxford registration backend (CPU, no AI dependencies).

Pipeline (prototype logic, with the transform direction fixed):

1. resample the reference to a 1 mm isotropic working grid;
2. whole-head affine of the template to the patient, giving a brain *prior* (template mask);
3. morphological skull strip inside that prior (volume sanity-checked, 900-2000 cm3; falls back to the
   prior with a caveat);
4. register the masked MNI template (moving) to the masked patient brain (fixed): affine then B-spline,
   giving a patient -> MNI transform;
5. pull the vocabulary label map (built from HO in MNI space) into the *reference* grid with
   :func:`geometry.space.resample_into`, clip to the patient's own brain mask and fill gaps by nearest
   label.
"""

from __future__ import annotations

import time

import numpy as np
import SimpleITK as sitk
from scipy import ndimage as ndi

from medmereport.core.logging import get_logger
from medmereport.geometry.space import iso_grid, resample_into, to_sitk
from medmereport.models import registry
from medmereport.segment.atlas import labels as atlas_labels
from medmereport.segment.atlas import register as reg
from medmereport.segment.atlas.strip import PLAUSIBLE_CC, skull_strip
from medmereport.segment.base import LabelMap, ProgressFn, Volume

log = get_logger(__name__)

BUNDLE = "atlas-ho"
_CROP_MARGIN_MM = 12.0
_MIN_MASK_DICE = 0.75
_ISO_TOLERANCE = 0.15

# Progress budget per stage (start %, end %).
_STAGES = {
    "prepare": (0.0, 3.0),
    "head_align": (3.0, 12.0),
    "skull_strip": (12.0, 18.0),
    "affine": (18.0, 35.0),
    "bspline": (35.0, 92.0),
    "labels": (92.0, 100.0),
}


def _report(progress: ProgressFn, stage: str, frac: float, msg: str = "") -> None:
    lo, hi = _STAGES[stage]
    progress(stage, round(lo + (hi - lo) * min(max(frac, 0.0), 1.0), 1), msg)


def _is_iso_axis_aligned(img: sitk.Image, spacing: float) -> bool:
    sp = np.array(img.GetSpacing())
    return bool(
        np.allclose(sp, spacing, rtol=_ISO_TOLERANCE) and np.allclose(img.GetDirection(), np.eye(3).ravel(), atol=1e-6)
    )


def _normalise(img: sitk.Image, mask: np.ndarray | None = None) -> sitk.Image:
    a = sitk.GetArrayFromImage(img).astype(np.float32)
    sel = a[mask] if mask is not None else a[a > 0]
    p = float(np.percentile(sel, 99)) if sel.size else 1.0
    out = sitk.GetImageFromArray(np.clip(a / max(p, 1e-6), 0, 2).astype(np.float32))
    out.CopyInformation(img)
    return out


def _masked(img: sitk.Image, mask: np.ndarray) -> sitk.Image:
    a = sitk.GetArrayFromImage(img) * mask
    out = sitk.GetImageFromArray(a.astype(np.float32))
    out.CopyInformation(img)
    return out


def _crop(img: sitk.Image, mask: np.ndarray, margin_mm: float) -> sitk.Image:
    """Crop ``img`` to the mask's bounding box plus a margin (keeps registration fast)."""
    sl = ndi.find_objects(mask.astype(np.uint8))
    if not sl or sl[0] is None:
        return img
    sp = img.GetSpacing()[::-1]  # z, y, x
    lo, hi = [], []
    for ax, s in enumerate(sl[0]):
        m = int(np.ceil(margin_mm / sp[ax]))
        lo.append(max(s.start - m, 0))
        hi.append(min(s.stop + m, mask.shape[ax]))
    size = [hi[2] - lo[2], hi[1] - lo[1], hi[0] - lo[0]]
    return sitk.RegionOfInterest(img, size, [lo[2], lo[1], lo[0]])


def _dice(a: np.ndarray, b: np.ndarray) -> float:
    s = int(a.sum()) + int(b.sum())
    return 2.0 * float((a & b).sum()) / s if s else 1.0


class AtlasBackend:
    """SegmentationBackend using MNI152 2009c + Harvard-Oxford atlas registration."""

    name = "atlas-ho"
    version = "1"
    licence = "Harvard-Oxford CC BY-SA 4.0; MNI ICBM152 2009c (c) McConnell Brain Imaging Centre"

    def __init__(self, settings: reg.RegistrationSettings | None = None, working_spacing: float = 1.0) -> None:
        self.settings = settings or reg.RegistrationSettings()
        self.working_spacing = working_spacing

    def available(self) -> bool:
        return all(registry.available(n) for n in registry.names(BUNDLE))

    def _template(self) -> atlas_labels.TemplateLabels:
        return atlas_labels.load_template_labels(
            registry.path("mni152-2009c-t1"),
            registry.path("mni152-2009c-brain-mask"),
            registry.path("ho-cortical-lat"),
            registry.path("ho-subcortical"),
        )

    def segment(self, reference: Volume, extra: list[Volume], progress: ProgressFn) -> LabelMap:
        if not self.available():
            raise RuntimeError("atlas files are not installed; run `medmereport models pull atlas-ho`")
        t0 = time.perf_counter()
        caveats: list[str] = [
            "Regions come from a population atlas warped to this scan; boundaries are approximate.",
        ]
        if reference.sequence.upper() != "T1":
            caveats.append(f"The atlas method is tuned for T1-weighted images; this is {reference.sequence}.")
        _report(progress, "prepare", 0.0, "loading atlas")
        tpl = self._template()
        ref_img = to_sitk(reference.data.astype(np.float32), reference.geometry)
        if _is_iso_axis_aligned(ref_img, self.working_spacing):
            work = ref_img
        else:
            grid = iso_grid(reference.geometry, reference.data.shape, self.working_spacing)
            work = resample_into(ref_img, grid, None)
        _report(progress, "prepare", 1.0)

        mni_mask = sitk.GetArrayFromImage(tpl.mask) > 0
        _report(progress, "head_align", 0.0, "aligning head")
        head_fixed = _normalise(work)
        aff0, _ = reg.affine(
            head_fixed,
            _normalise(tpl.template),
            lambda f: _report(progress, "head_align", f, "aligning head"),
            self.settings,
            shrink=(4, 2),
        )
        prior = sitk.GetArrayFromImage(resample_into(tpl.mask, work, aff0, labels=True)) > 0

        _report(progress, "skull_strip", 0.0, "finding the brain")
        work_arr = sitk.GetArrayFromImage(work)
        strip = skull_strip(work_arr, self.working_spacing, prior=prior)
        strip_ok = strip.plausible
        caveats += strip.notes
        brain_w = strip.mask if strip_ok else prior & (work_arr > 0)
        if not strip_ok:
            caveats.append("Skull strip failed; the brain outline comes from the atlas (less accurate).")
        _report(progress, "skull_strip", 1.0, f"brain mask {strip.volume_cc:.0f} cm3")

        moving = _masked(_normalise(tpl.template, mni_mask), mni_mask)
        fixed = _crop(_masked(_normalise(work, brain_w), brain_w), brain_w, _CROP_MARGIN_MM)
        aff, m_aff = reg.affine(
            fixed, moving, lambda f: _report(progress, "affine", f, "aligning brain"), self.settings, initial=aff0
        )
        full, m_bs = reg.bspline(
            fixed, moving, aff, lambda f: _report(progress, "bspline", f, "warping atlas"), self.settings
        )
        log.info("atlas registration metrics: affine %.4f, bspline %.4f", m_aff, m_bs)

        _report(progress, "labels", 0.0, "labelling")
        warped_mask_w = sitk.GetArrayFromImage(resample_into(tpl.mask, work, full, labels=True)) > 0
        if strip_ok:
            d = _dice(brain_w, warped_mask_w)
            if d < _MIN_MASK_DICE:
                caveats.append(f"Atlas and brain mask disagree (overlap {d:.2f}); labels may be misplaced.")
        mask_img = sitk.GetImageFromArray(brain_w.astype(np.uint8))
        mask_img.CopyInformation(work)
        brain_ref = sitk.GetArrayFromImage(resample_into(mask_img, ref_img, None, labels=True)) > 0
        lab = sitk.GetArrayFromImage(resample_into(tpl.labels, ref_img, full, labels=True)).astype(np.int16)
        _report(progress, "labels", 0.5)
        lab[~brain_ref] = 0
        spacing_zyx = tuple(float(v) for v in reference.geometry.spacing[::-1])
        atlas_labels.fill_nearest(lab, brain_ref, spacing_zyx)  # type: ignore[arg-type]
        vol_cc = float(brain_ref.sum()) * float(np.prod(reference.geometry.spacing)) / 1000.0
        if not PLAUSIBLE_CC[0] <= vol_cc <= PLAUSIBLE_CC[1]:
            caveats.append(f"Brain mask volume {vol_cc:.0f} cm3 is outside 900-2000 cm3; check the result.")
        _report(progress, "labels", 1.0, f"done in {time.perf_counter() - t0:.0f} s")
        log.info("atlas backend finished in %.1f s", time.perf_counter() - t0)
        return LabelMap(
            labels=lab,
            geometry=reference.geometry,
            regions=atlas_labels.regions(),
            backend=f"{self.name}@{self.version}",
            licence=self.licence,
            caveats=caveats,
            brain_mask=brain_ref,
        )
