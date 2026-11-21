import pytest

from medmereport.knowledge import structures
from medmereport.knowledge.loader import LANGS, KnowledgeError, load_knowledge, load_model, read_raw, validate_coverage
from medmereport.knowledge.schema import (
    REQUIRED_SEQUENCES,
    REQUIRED_VESSELS,
    TAGLINE_MAX,
    UNTRANSLATED_STRUCTURE_FIELDS,
    Knowledge,
)


@pytest.mark.parametrize("lang", LANGS)
def test_raw_file_validates_against_schema(lang):
    kb = Knowledge.model_validate(read_raw(lang))
    validate_coverage(kb)


@pytest.mark.parametrize("lang", LANGS)
def test_every_vocabulary_id_and_lobe_covered(lang):
    kb = load_model(lang)
    assert set(kb.structures) == set(structures.ALL)
    assert set(kb.lobes) == set(structures.LOBES)
    assert set(REQUIRED_VESSELS) <= set(kb.arteries.vessels)
    assert set(REQUIRED_SEQUENCES) <= set(kb.sequences)


@pytest.mark.parametrize("lang", LANGS)
def test_lobe_consistency(lang):
    raw = read_raw(lang)
    for sid, entry in raw["structures"].items():
        assert entry["lobe"] == structures.lobe_of(sid), sid
        assert entry["lobe"] in structures.LOBES


@pytest.mark.parametrize("lang", LANGS)
def test_tagline_length(lang):
    raw = read_raw(lang)
    for group in ("structures", "lobes"):
        for key, entry in raw[group].items():
            assert 0 < len(entry["tagline"]) <= TAGLINE_MAX, (group, key, len(entry["tagline"]))


def _shape(obj):
    """Nested key structure with list lengths, ignoring the text itself."""
    if isinstance(obj, dict):
        return {k: _shape(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return len(obj)
    return type(obj).__name__


def test_en_hi_key_parity():
    en, hi = read_raw("en"), read_raw("hi")
    for group in ("structures", "lobes", "sequences"):
        assert _shape(en[group]) == _shape(hi[group]), group
    assert _shape(en["arteries"]) == _shape(hi["arteries"])


def test_hi_keeps_identifiers_and_citations_untranslated():
    en, hi = read_raw("en"), read_raw("hi")
    for sid, entry in en["structures"].items():
        for field in UNTRANSLATED_STRUCTURE_FIELDS:
            assert hi["structures"][sid][field] == entry[field], (sid, field)
    for lid, entry in en["lobes"].items():
        assert hi["lobes"][lid]["sources"] == entry["sources"], lid


def test_hi_is_actually_translated():
    en, hi = load_model("en"), load_model("hi")
    same = [sid for sid in en.structures if en.structures[sid].overview == hi.structures[sid].overview]
    assert not same
    assert any("ऀ" <= ch <= "ॿ" for ch in hi.structures["hippocampus"].name)


def test_fallback_to_english_per_field(monkeypatch):
    from medmereport.knowledge import loader

    en = read_raw("en")
    partial = {"structures": {"pons": {"tagline": "पोंस", "overview": ""}}}
    monkeypatch.setattr(loader, "read_raw", lambda lang: en if lang == "en" else partial)
    loader._load.cache_clear()
    try:
        kb = loader.load_model("hi")
        assert kb.lang == "hi"
        assert kb.structures["pons"].tagline == "पोंस"
        assert kb.structures["pons"].overview == en["structures"]["pons"]["overview"]
        assert kb.structures["medulla"].name == en["structures"]["medulla"]["name"]
    finally:
        loader._load.cache_clear()


def test_coverage_detects_missing_and_wrong_lobe():
    data = read_raw("en")
    broken = {**data, "structures": dict(data["structures"])}
    del broken["structures"]["pons"]
    broken["structures"]["thalamus"] = {**broken["structures"]["thalamus"], "lobe": "frontal"}
    with pytest.raises(KnowledgeError, match="pons") as exc:
        validate_coverage(Knowledge.model_validate(broken))
    assert "thalamus" in str(exc.value)


def test_unknown_language_rejected():
    with pytest.raises(KnowledgeError):
        load_model("xx")


def test_load_knowledge_returns_fresh_copy():
    a = load_knowledge("en")
    a["structures"]["pons"]["name"] = "changed"
    assert load_knowledge("en")["structures"]["pons"]["name"] != "changed"


@pytest.mark.parametrize("lang", LANGS)
def test_route_returns_language(authed, lang):
    r = authed.get(f"/api/knowledge?lang={lang}")
    assert r.status_code == 200
    body = r.json()
    assert body["lang"] == lang
    assert set(body["structures"]) == set(structures.ALL)
    assert body == load_knowledge(lang)


def test_route_defaults_to_english_and_rejects_unknown(authed):
    assert authed.get("/api/knowledge").json()["lang"] == "en"
    assert authed.get("/api/knowledge?lang=xx").status_code == 422


def test_route_in_openapi(authed):
    spec = authed.get("/api/openapi.json").json()
    assert "/api/knowledge" in spec["paths"]
    assert "Knowledge" in spec["components"]["schemas"]
