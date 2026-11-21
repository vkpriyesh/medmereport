"""Generic anatomy knowledge base (same for every study): ``GET /api/knowledge?lang=en|hi``."""

from __future__ import annotations

from typing import Literal

from fastapi import APIRouter, Query

from medmereport.knowledge.loader import load_model
from medmereport.knowledge.schema import Knowledge

router = APIRouter(prefix="/api")


@router.get("/knowledge", response_model=Knowledge)
def knowledge(lang: Literal["en", "hi"] = Query("en")) -> Knowledge:
    return load_model(lang)
