# Engine ↔ UI contract (v1)

The OpenAPI schema (`/api/openapi.json`, generated into `web/src/lib/api/schema.d.ts`) is authoritative for JSON shapes. This document explains the flows and the **file artifact formats** that are served as static files.

All `/api/*` calls need the session cookie (set via `POST /api/session`). Unsafe methods must come from the app's own origin.

## 1. Choosing what to import
- `GET /api/fs/roots` → `[{path, label, kind: "drive"|"home"|"removable"|"recent"}]`.
- `GET /api/fs/list?path=…` → `{path, parent, entries: [{name, path, kind: "dir"|"file", size, hint?}]}`. Directories only plus recognised files (zip/7z/enc/dcm/jpg/png/pdf). `hint` is set when a folder looks like a disc (`"dicomdir"`, `"dcmburner"`, `"radiant"`).
- `POST /api/inspect {path}` → `{adapter, label, encrypted, confidence, notes[]}`. Cheap detection, no extraction.

## 2. Import job
- `POST /api/import {path, password?, remember?: bool}` → `JobInfo` (kind `import`).
- Progress via `GET /api/jobs/{id}/events` (SSE). Stages: `detect`, `decrypt`, `extract`, `scan`, `group`, `classify`, `export`.
- On failure `JobInfo.error` is a human message and `JobInfo.result = {code, adapter?}` with codes:
  - `password_required`: show the password dialog, then re-POST with `password`.
  - `wrong_password`
  - `no_images`
  - `unsupported`: suggest `medmereport diagnose`.
  - `too_large`
  - `corrupt`: the archive or disc data is damaged (suggest copying the disc again).
- On success `JobInfo.result = {study_id}`.

The password travels only in this request body to the worker process. It is never logged, stored or echoed.

## 3. Study
- `GET /api/studies` → `[StudySummary]`
- `GET /api/studies/{id}` → `StudyInfo` (see `core/models.py`) incl. `series[]`.
- `DELETE /api/studies/{id}` deletes artifacts immediately.
- Artifact files: `GET /api/studies/{id}/files/{relpath}` (path-traversal protected, `Cache-Control: private, max-age=3600`).

### Slice stack artifact (per series)
`series/{series_id}/meta.json`:
```json
{
  "id": "s003", "title": "Axial FLAIR", "modality": "MR", "sequence": "FLAIR", "plane": "axial",
  "region": "brain|spine|chest|abdomen|limb|vessels|unknown", "role": "primary|mip|localizer|photo|document",
  "n": 38, "ext": "webp", "w": 512, "h": 512,
  "rows": 512, "cols": 512, "pixelSpacing": [0.43, 0.43], "thickness": 3.0,
  "TE": 94, "TR": 7000, "seriesNumber": 23, "desc": "AX FLAIR 3mm",
  "orientation": [1,0,0, 0,1,0],
  "slices": [{"pos": [-111.4, -123.4, -77.1]}],
  "window": {"lo": 0, "hi": 255},
  "labels": false
}
```
- Images: `series/{id}/{000..}.{ext}`, 8-bit greyscale. They are windowed from the 0.5–99.7 percentile range and downscaled so the longest side is at most 512 (1024 for X-ray/photos).
- Slices are ordered **superior→inferior** for axial, **right→left** for sagittal, **anterior→posterior** for coronal. MIP/photo frames are kept in acquisition order.
- `w/h` may differ per frame for MIP/photo series. The viewer must use each image's natural size.
- Optional label maps `series/{id}/L{000..}.png`: R channel = region code (0 = none). Present only when `labels: true` (from M2).
- `pixelSpacing` is in DICOM order `[row, col]` mm. Display mm per pixel = `pixelSpacing[1]*cols/w` (x) and `pixelSpacing[0]*rows/h` (y).
- For photos/PDF pages, `pixelSpacing` is `null`: no measurements, and the UI says so.

## 4. Codes and i18n
Error codes, stage names and sequence/region ids are stable identifiers. The UI translates them, so the engine never sends prose that needs translating except `msg` progress text (English, optional).

## 5. 3D model artifacts (M2+)
Produced by a model pipeline job (`POST /api/studies/{id}/model {pipeline?: "auto"}` → `JobInfo`; result `{model: "model/"}`), served from the study files route:

- `model/scene.glb`: one glTF 2.0 binary.
  - Every clickable region is a node named `{hemi}__{structure}` (`L__hippocampus`, `M__pons`), where `hemi` ∈ `L|R|M`.
  - Non-region layers use reserved prefixes: `V__<name>` for vessels (`V__cow`, `V__neck`), `H__skin` for the body/head surface, `B__<name>` for bones.
  - Coordinates are millimetres in **viewer space**: X = patient Left, Y = Superior, Z = Anterior (right-handed; converted from LPS by `geometry/space.py`).
  - No materials and no normals: the UI owns the appearance and computes normals.
  - Meshopt compression is optional; flagged by `extensionsUsed`.
- `model/regions.json`: `{ "backend", "licence", "caveats": [..], "regions": [{ "key": "L|hippocampus", "structure", "hemi", "code", "group": "hemi_L|hemi_R|cerebellum|brainstem|deep|vessel|body", "inner": bool, "centroid": [x,y,z] }] }` (centroid in viewer space).
- `model/stats.json`: `{ "summary": {Measurement..}, "regions": { "L|hippocampus": { "measurements": [Measurement], "thumbs": [{ "view": "axial|sagittal|coronal", "img": "model/thumbs/…jpg", "series": "s003"|null, "slice": 12 }] } } }`.
  - `Measurement` is defined in `core/models.py` and always carries `method` + `caveats`.
- Optional label maps for the 2D viewer: `series/{id}/L###.png`, with `meta.labels = true` and `meta.labelTable = {code: "L|hippocampus"}`.
- `model/status.json`: `{ "pipeline", "version", "created", "warnings": [] }`.

The structure vocabulary (`structure` ids, lobes and groups) and the anatomy knowledge base live in `engine/medmereport/knowledge/` and are served at `GET /api/knowledge` (same JSON for every study).

## 6. Non-brain models (M3)
Every model pipeline (`brain_mr`, `ct_body`, `vessels`, `spine_mr`) writes the **same artifact set** as §5 (`scene.glb`, `regions.json`, `stats.json`, `status.json`, optional label maps), so the 3D UI needs no pipeline-specific code paths beyond camera framing and layer lists.

- `POST /api/studies/{id}/model {pipeline?: "auto"|"brain_mr"|"ct_body"|"vessels"|"spine_mr", backend?: "auto"|"classical"|"totalseg"}`; `GET /api/studies/{id}/model/options` → `{ "auto": "ct_body"|null, "options": [{ "pipeline", "score", "backends": [{ "id": "classical"|"totalseg", "available": bool, "reason": str|null, "licence": str|null, "default": bool }] }] }`. Every backend the pipeline knows is listed; `available: false` comes with a plain-language `reason` (e.g. totalseg: optional install `uv tool install 'medmereport[totalseg]'` + `models pull`); `default` marks what `"auto"` picks. `POST` with an unavailable backend → 422.
- `regions.json` gains `"pipeline"` and `"framing": "head"|"body"|"spine"` (UI picks camera/default layers) plus `"layers": [{ "id": "hemi_L"|"bone"|"organ"|…, "default": bool }]` (the groups actually present). The `vessels` pipeline also lists `{ "id": "neck", "default": true }` when it traced neck arteries (`V__neck`); the brain model keeps neck arteries hidden.
- `framing` is camera/layout only. A TOF `vessels` model has `framing: "head"` but **no brain**: the UI decides brain-only controls (Inside view, "X-ray cortex", Lobes colouring, brain arteries overview) from `pipeline === "brain_mr"` / brain groups being present, not from `framing`.
- Summary numbers (`stats.json.summary`): `ct_body` and `vessels` volumes; `spine_mr` `canal_length_mm`, `cord_length_mm` (head-to-foot extent in view), `discs_detected`, `vertebral_bodies_detected` (counts, unit `""`). All carry `method` + `caveats`.
- Structure ids come from `knowledge/structures.py` (`CT_CLASSICAL`, `SPINE`, `VESSELS`, `BODY`). TotalSegmentator classes are mapped by `totalseg_structure()` (`kidney_left` → `L__kidney`, `vertebrae_L1` → `M__vertebrae_l1`).
- Layers without anatomy semantics keep reserved prefixes: `H__skin`, `B__skeleton`, `V__cow` / `V__neck` / `V__body`. Classical CT regions that *are* clickable: `L__lung`, `R__lung`, `M__airway`.
- CT measurements are volumes (cm³) and mean HU per structure; every one has `method` + `caveats`. No diagnostic thresholds.
- Spine: the sagittal series is the primary 2D view; `regions.json` sets `"primary_series"`.
