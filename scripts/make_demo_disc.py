"""Build a realistic *synthetic* brain MRI disc from the openly licensed MNI ICBM152 2009c template.

Usage (from engine/):  uv run python ../scripts/make_demo_disc.py OUTDIR
Requires `medmereport models pull mni152-2009c-t1`.

Produces clinical-style thick-slice DICOM series (axial T1 3 mm, sagittal T1 4 mm) of the template brain,
with a fake patient name. No real person's data is involved; the template is an average of many brains
(c) McConnell Brain Imaging Centre, MNI, McGill University (permissive licence, see models list).
"""

from __future__ import annotations

import sys
from pathlib import Path

import numpy as np
import SimpleITK as sitk

ENGINE = Path(__file__).resolve().parents[1] / "engine"
sys.path.insert(0, str(ENGINE))

from medmereport.models import registry  # noqa: E402
from tests.fixtures.synth import write_series  # noqa: E402

from pydicom.uid import generate_uid  # noqa: E402


def _to_identity_grid(img: sitk.Image, spacing: tuple[float, float, float]) -> np.ndarray:
    """Resample onto an axis-aligned LPS grid -> array [z(S), y(P), x(L)], uint16 0..4000."""
    size = img.GetSize()
    pts = [img.TransformIndexToPhysicalPoint((i, j, k)) for i in (0, size[0] - 1) for j in (0, size[1] - 1)
           for k in (0, size[2] - 1)]
    lo, hi = np.min(pts, 0), np.max(pts, 0)
    n = [int(np.ceil((hi[d] - lo[d]) / spacing[d])) + 1 for d in range(3)]
    ref = sitk.Image(n, sitk.sitkFloat32)
    ref.SetOrigin(tuple(float(v) for v in lo))
    ref.SetSpacing(spacing)
    out = sitk.Resample(img, ref, sitk.Transform(), sitk.sitkBSpline, 0.0)
    a = np.clip(sitk.GetArrayFromImage(out), 0, None)
    a = a / max(1e-6, np.percentile(a[a > 0], 99.5)) * 3000
    rng = np.random.default_rng(7)
    a = a + rng.normal(0, 25, a.shape) * (a > 50)  # mild MR-like noise inside the head
    return np.clip(a, 0, 4000).astype(np.uint16)


def main(out: Path) -> None:
    t1 = registry.path("mni152-2009c-t1")
    if t1 is None or not t1.exists():
        raise SystemExit("Run `medmereport models pull mni152-2009c-t1` first.")
    img = sitk.ReadImage(str(t1), sitk.sitkFloat32)
    disc = out / "demo_brain_disc"
    study = generate_uid()

    ax = _to_identity_grid(img, (0.9, 0.9, 3.0))  # [z, y, x]
    write_series(disc / "DICOM", volume=ax, plane="axial", description="AX T1 3mm DEMO", series_number=1,
                 pixel_spacing=(0.9, 0.9), slice_spacing=3.0, study_uid=study, extensionless=True,
                 echo_time=2.9, repetition_time=280)

    sg = _to_identity_grid(img, (4.0, 0.9, 0.9))  # x thick
    # sagittal stack: slice index along normal (-x), rows along -z (superior at top), cols along +y
    sag = np.transpose(sg, (2, 0, 1))[::-1, ::-1, :]
    write_series(disc / "DICOM", volume=np.ascontiguousarray(sag), plane="sagittal", description="SAG T1 4mm DEMO",
                 series_number=2, pixel_spacing=(0.9, 0.9), slice_spacing=4.0, study_uid=study,
                 extensionless=True, echo_time=2.7, repetition_time=270)
    print(f"Demo disc written to {disc}")


if __name__ == "__main__":
    main(Path(sys.argv[1] if len(sys.argv) > 1 else "demo-out"))
