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
