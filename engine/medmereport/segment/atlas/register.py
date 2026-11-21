"""Template -> patient registration (SimpleITK affine + B-spline), patient = fixed.

With fixed = patient and moving = template, the returned transform maps **patient points -> template
points**, which is exactly the ``reference_to_moving`` transform :func:`geometry.space.resample_into`
needs to pull template labels into the patient grid.

Progress callbacks may raise to cancel; the exception is re-raised unchanged after SimpleITK aborts.
"""

from __future__ import annotations

from collections.abc import Callable
from dataclasses import dataclass

import SimpleITK as sitk

Tick = Callable[[float], None]  # fraction 0..1 of the current stage


@dataclass(frozen=True)
class RegistrationSettings:
    affine_shrink: tuple[int, ...] = (4, 2, 1)
    affine_smooth: tuple[float, ...] = (2.0, 1.0, 0.0)
    affine_iterations: int = 200
    affine_sampling: float = 0.05
    bspline_mesh: int = 8
    bspline_shrink: tuple[int, ...] = (4, 2)
    bspline_smooth: tuple[float, ...] = (2.0, 1.0)
    bspline_iterations: int = 60
    bspline_sampling: float = 0.08
    seed: int = 7


class _Guard:
    """Runs progress callbacks inside SimpleITK commands and keeps the first exception they raise."""

    def __init__(self) -> None:
        self.error: BaseException | None = None

    def wrap(self, fn: Callable[[], None]) -> Callable[[], None]:
        def run() -> None:
            try:
                fn()
            except BaseException as e:  # noqa: BLE001 - re-raised by execute()
                self.error = e
                raise

        return run

    def execute(self, reg: sitk.ImageRegistrationMethod, fixed: sitk.Image, moving: sitk.Image) -> sitk.Transform:
        try:
            return reg.Execute(fixed, moving)
        except RuntimeError:
            if self.error is not None:
                raise self.error from None
            raise


def as_affine(tx: sitk.Transform) -> sitk.AffineTransform:
    """Unwrap a (single-element composite) affine result into a plain AffineTransform copy."""
    while isinstance(tx, sitk.CompositeTransform) and tx.GetNumberOfTransforms() == 1:
        tx = tx.GetNthTransform(0)
    tx = tx.Downcast()
    if isinstance(tx, sitk.AffineTransform):
        return sitk.AffineTransform(tx)
    raise TypeError(f"expected an affine transform, got {type(tx).__name__}")


def _method(bins: int, sampling: float, seed: int) -> sitk.ImageRegistrationMethod:
    r = sitk.ImageRegistrationMethod()
    r.SetMetricAsMattesMutualInformation(bins)
    r.SetMetricSamplingStrategy(r.RANDOM)
    r.SetMetricSamplingPercentage(sampling, seed)
    r.SetInterpolator(sitk.sitkLinear)
    return r


def _progress(r: sitk.ImageRegistrationMethod, guard: _Guard, tick: Tick, iters: int, levels: int) -> None:
    state = {"level": -1}

    def on_level() -> None:
        state["level"] += 1

    def on_iter() -> None:
        lvl = max(state["level"], 0)
        frac = (lvl + min(r.GetOptimizerIteration() / max(iters, 1), 1.0)) / levels
        tick(min(frac, 1.0))

    r.AddCommand(sitk.sitkMultiResolutionIterationEvent, guard.wrap(on_level))
    r.AddCommand(sitk.sitkIterationEvent, guard.wrap(on_iter))


def affine(
    fixed: sitk.Image,
    moving: sitk.Image,
    tick: Tick,
    s: RegistrationSettings,
    *,
    initial: sitk.Transform | None = None,
    shrink: tuple[int, ...] | None = None,
    smooth: tuple[float, ...] | None = None,
) -> tuple[sitk.Transform, float]:
    """Affine registration; returns (fixed->moving transform, final metric).

    Initialised from ``initial`` (an affine) when given, else by aligning intensity moments.
    """
    if initial is None:
        init: sitk.Transform = sitk.CenteredTransformInitializer(
            fixed, moving, sitk.AffineTransform(3), sitk.CenteredTransformInitializerFilter.MOMENTS
        )
    else:
        init = as_affine(initial)
    shrink = shrink or s.affine_shrink
    r = _method(50, s.affine_sampling, s.seed)
    r.SetOptimizerAsRegularStepGradientDescent(2.0, 1e-4, s.affine_iterations, relaxationFactor=0.6)
    r.SetOptimizerScalesFromPhysicalShift()
    r.SetShrinkFactorsPerLevel(list(shrink))
    r.SetSmoothingSigmasPerLevel(list(smooth or s.affine_smooth[: len(shrink)]))
    r.SetInitialTransform(init, inPlace=False)
    guard = _Guard()
    _progress(r, guard, tick, s.affine_iterations, len(shrink))
    tx = guard.execute(r, fixed, moving)
    return tx, float(r.GetMetricValue())


def bspline(
    fixed: sitk.Image, moving: sitk.Image, initial: sitk.Transform, tick: Tick, s: RegistrationSettings
) -> tuple[sitk.Transform, float]:
    """B-spline refinement on top of ``initial``; returns (composite fixed->moving transform, metric)."""
    bs = sitk.BSplineTransformInitializer(fixed, [s.bspline_mesh] * 3, order=3)
    r = _method(50, s.bspline_sampling, s.seed)
    r.SetMovingInitialTransform(initial)
    r.SetInitialTransform(bs, inPlace=True)
    r.SetOptimizerAsLBFGSB(
        gradientConvergenceTolerance=1e-5,
        numberOfIterations=s.bspline_iterations,
        maximumNumberOfCorrections=5,
        maximumNumberOfFunctionEvaluations=1000,
        costFunctionConvergenceFactor=1e7,
    )
    r.SetShrinkFactorsPerLevel(list(s.bspline_shrink))
    r.SetSmoothingSigmasPerLevel(list(s.bspline_smooth))
    guard = _Guard()
    _progress(r, guard, tick, s.bspline_iterations, len(s.bspline_shrink))
    guard.execute(r, fixed, moving)
    # point -> bs -> initial: CompositeTransform applies the last-added transform first.
    return sitk.CompositeTransform([initial, bs]), float(r.GetMetricValue())
