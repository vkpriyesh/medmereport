"""Series classification (rules first; an ML model may be added later behind the same API)."""

from medmereport.classify.rules import Classification, classify_header, classify_series

__all__ = ["Classification", "classify_header", "classify_series"]
