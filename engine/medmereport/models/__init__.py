"""Optional downloadable assets (atlases, templates, model weights). See :mod:`medmereport.models.registry`."""

from medmereport.models.registry import ASSETS, Asset, AssetError, available, names, path, pull

__all__ = ["ASSETS", "Asset", "AssetError", "available", "names", "path", "pull"]
