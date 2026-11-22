import typing

import pytest

from medmereport.knowledge import structures, totalseg
from medmereport.knowledge.structures import totalseg_structure

PARTS = {
    "BRAIN": structures.BRAIN,
    "VESSELS": structures.VESSELS,
    "CT_CLASSICAL": structures.CT_CLASSICAL,
    "SPINE": structures.SPINE,
    "BODY": structures.BODY,
}


def _all_classes():
    return sorted({c for t in totalseg.open_tasks() for c in totalseg.task_classes(t).values()})


def test_source_is_pinned():
    src = totalseg.source()
    assert src["repo"] == "https://github.com/wasserth/TotalSegmentator"
    assert len(src["commit"]) == 40
    assert src["commit"] in src["file"]
    assert src["package_version"]


def test_total_task_is_the_v2_117_class_map():
    total = totalseg.task_classes("total")
    assert sorted(total) == list(range(1, 118))
    assert total[1] == "spleen" and total[52] == "aorta" and total[117] == "costal_cartilages"


def test_licensed_tasks_are_absent():
    licensed = ("heartchambers_highres", "appendicular_bones", "tissue_types", "brain_structures", "coronary_arteries")
    for task in licensed:
        assert task not in totalseg.open_tasks()
        with pytest.raises(KeyError):
            totalseg.task_classes(task)


@pytest.mark.parametrize("name", _all_classes())
def test_every_open_class_resolves_to_vocabulary(name):
    mapped = totalseg.map_class(name)
    if name in totalseg.excluded():
        assert mapped is None
        assert totalseg_structure(name)[0] not in structures.ALL
    else:
        assert mapped is not None
        sid, hemi = mapped
        assert sid in structures.ALL
        assert hemi in ("L", "R", "M")


def test_excluded_are_only_findings_and_devices():
    ex = totalseg.excluded()
    assert set(ex.values()) <= {"finding", "device"}
    assert set(ex) <= set(_all_classes())


def test_body_has_no_orphans():
    produced = {totalseg_structure(c)[0] for c in _all_classes() if c not in totalseg.excluded()}
    assert set(structures.BODY) <= produced


def test_no_id_defined_twice():
    seen: dict[str, str] = {}
    for part, d in PARTS.items():
        for sid in d:
            assert sid not in seen, f"{sid} in both {seen.get(sid)} and {part}"
            seen[sid] = part
    assert set(seen) == set(structures.ALL)


def test_vocab_entries_are_well_formed():
    groups = set(typing.get_args(structures.Group))
    for sid, (lobe, group, inner) in structures.ALL.items():
        assert sid == sid.lower() and " " not in sid
        assert lobe in structures.LOBES, sid
        assert group in groups, sid
        assert isinstance(inner, bool)


@pytest.mark.parametrize(
    ("name", "expected"),
    [
        ("kidney_left", ("kidney", "L")),
        ("rib_right_12", ("rib_12", "R")),
        ("vertebrae_L1", ("vertebrae_l1", "M")),
        ("upper_left_first_molar_fdi26", ("upper_first_molar_fdi26", "L")),
        ("left_mandibular_incisive_canal_fdi103", ("mandibular_incisive_canal_fdi103", "L")),
        ("lung_left", ("lung", "L")),
    ],
)
def test_mapping_examples(name, expected):
    assert totalseg.map_class(name) == expected


def test_teeth_cover_all_32_fdi_positions_with_pulp():
    teeth = [t for t in structures.BODY if "_fdi" in t and "canal" not in t]
    assert len(teeth) == 64
    assert sum("_pulp_" in t for t in teeth) == 32


def test_map_class_rejects_unknown():
    with pytest.raises(KeyError):
        totalseg.map_class("definitely_not_a_class")
