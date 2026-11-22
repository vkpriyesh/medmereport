"""Which TotalSegmentator tasks medmereport may run (docs/RESEARCH.md §2, "TotalSegmentator licence").

TotalSegmentator's *code* is Apache-2.0. The weights of the "open" tasks are published under the
same terms ("Openly available for any usage (Apache-2.0 license)", project README, checked
2026-11-22). Other tasks need a licence number (free for non-commercial use, paid otherwise) and
``brain_aneurysm`` is CC BY-NC 4.0 with no commercial licence. medmereport only ever runs open
tasks, and of those only the ones whose weights are pinned in ``models/registry.py``.

The guard is deliberately an allow-list: a task that is not listed in ``OPEN_TASKS`` (including
any task added upstream later) is refused.
"""

from __future__ import annotations

# Open (Apache-2.0) tasks per the upstream README. Tasks marked "*" upstream (smaller training sets) are open too.
OPEN_TASKS: frozenset[str] = frozenset(
    {
        "total", "total_mr", "lung_vessels", "body", "body_mr", "vertebrae_mr", "head_glands_cavities",
        "head_muscles", "headneck_bones_vessels", "headneck_muscles", "lung_nodules", "kidney_cysts", "breasts",
        "craniofacial_structures", "teeth", "trunk_cavities", "ventricle_parts", "vertebrae_pp",
        "vertebrae_pp_refined", "vertebrae_body", "cerebral_bleed", "hip_implant", "pleural_pericard_effusion",
        "liver_vessels", "oculomotor_muscles", "liver_segments", "liver_segments_mr", "abdominal_muscles",
        "liver_lesions", "liver_lesions_mr",
    }
)  # fmt: skip

# Need a licence number (``commercial: True`` upstream) or are non-commercial only. Listed for the error text and tests.
LICENSED_TASKS: frozenset[str] = frozenset(
    {
        "heartchambers_highres", "appendicular_bones", "appendicular_bones_mr", "tissue_types", "tissue_types_mr",
        "tissue_4_types", "face", "face_mr", "brain_structures", "thigh_shoulder_muscles",
        "thigh_shoulder_muscles_mr", "coronary_arteries", "coronary_arteries_LEGACY", "aortic_sinuses",
        "renal_arteries", "aorta_annulus", "aortic_dissection", "pulmonary_artery_landmarks", "body_stats_mr",
        "body_stats_ct", "brain_aneurysm",
    }
)  # fmt: skip

# Tasks wired up end to end (weights pinned in the model registry): task -> {fast: nnU-Net dataset id}.
SUPPORTED: dict[str, dict[bool, int]] = {"total": {True: 297}}

WEIGHTS_LICENCE = "Apache-2.0 (TotalSegmentator open-task weights and code; Wasserthal et al., Radiol AI 2023)"


class TaskNotAllowed(PermissionError):
    """The task is licensed, non-commercial, unknown, or not wired up in medmereport."""

    def __init__(self, task: str, reason: str) -> None:
        super().__init__(f"TotalSegmentator task {task!r} is not available in medmereport: {reason}")
        self.task = task
        self.reason = reason


def check_task(task: str, fast: bool = True) -> int:
    """Return the nnU-Net dataset id for an allowed ``task``; raise :class:`TaskNotAllowed` otherwise."""
    if task in LICENSED_TASKS:
        raise TaskNotAllowed(task, "it needs a TotalSegmentator licence (not an open task)")
    if task not in OPEN_TASKS:
        raise TaskNotAllowed(task, "unknown task (only open tasks are allowed)")
    ids = SUPPORTED.get(task)
    if not ids or fast not in ids:
        raise TaskNotAllowed(task, "open, but its weights are not in the medmereport model registry yet")
    return ids[fast]
