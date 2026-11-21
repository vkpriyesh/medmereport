"""Segmentation backend registry: which backends exist, which are usable offline, which to pick.

Order of preference for brain MR: ``synthseg-onnx`` (contrast/resolution agnostic, fast) then
``atlas-ho`` (registration fallback, T1-tuned). ``available()`` never touches the network.
"""

from __future__ import annotations

from collections.abc import Callable

from medmereport.segment.atlas import AtlasBackend
from medmereport.segment.base import SegmentationBackend, Volume

_FACTORIES: dict[str, Callable[[], SegmentationBackend]] = {}


def register(name: str, factory: Callable[[], SegmentationBackend]) -> None:
    _FACTORIES[name] = factory


try:  # optional: needs onnxruntime + converted weights (built by another lane)
    from medmereport.segment.synthseg import SynthSegOnnxBackend

    register("synthseg-onnx", SynthSegOnnxBackend)
except Exception:  # noqa: BLE001,S110 - any import problem just means "not offered"
    pass
register("atlas-ho", AtlasBackend)

PREFERENCE = ("synthseg-onnx", "atlas-ho")


def all_backends() -> list[str]:
    return list(_FACTORIES)


def get_backend(name: str) -> SegmentationBackend:
    try:
        return _FACTORIES[name]()
    except KeyError:
        raise KeyError(f"unknown segmentation backend {name!r}; known: {', '.join(_FACTORIES)}") from None


def available_backends() -> list[SegmentationBackend]:
    """Backends whose dependencies and weights/atlases are installed, in preference order."""
    out: list[SegmentationBackend] = []
    for name in sorted(_FACTORIES, key=lambda n: PREFERENCE.index(n) if n in PREFERENCE else len(PREFERENCE)):
        try:
            b = _FACTORIES[name]()
            if b.available():
                out.append(b)
        except Exception:  # noqa: BLE001,S112 - a broken optional backend must not break the others
            continue
    return out


def best_backend(volume: Volume | None = None) -> SegmentationBackend | None:
    """The preferred usable backend for ``volume`` (None when nothing is installed).

    SynthSeg handles any contrast; the atlas fallback is T1-tuned but still preferred over nothing.
    """
    backends = available_backends()
    return backends[0] if backends else None
