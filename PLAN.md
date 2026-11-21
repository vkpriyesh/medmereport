# medmereport — Plan & Architecture

> **medmereport**: a free, open-source, local-only tool that turns the scans a patient receives (disc folder, ZIP, DICOM, X-ray images) into an interactive, labelled 3D model and a full scan viewer in the browser. No account, no upload, no telemetry.

See `docs/RESEARCH.md` for evidence behind every decision. Work is tracked in `TASKS.md`.

---

## 1. Goals & non-goals

**Goals**
1. **Ingest anything a patient gets**: the 5 container adapters (standard DICOM disc, DcmBurner-encrypted, RadiAnt-encrypted, loose folder/ZIP/7z, image/PDF/X-ray exports), and keep it extensible.
2. **Auto-route** each series to the best pipeline: brain MR → parcellated 3D brain; CT → bones/organs/skin; angiography → vessels; spine MR → vertebrae/cord; X-ray → 2D + overlays + honest relief; unknown → generic surface + 2D viewer.
3. **A great browser UI**: 3D explorer (My Scan / Learn modes), 2D multi-planar viewer (incl. dedicated sagittal view), study dashboard, per-region measurements with disclaimers.
4. **Zero data leakage**: 127.0.0.1 only, no outbound network at runtime (except opt-in model downloads), no telemetry, ephemeral temp, de-identified exports.
5. **Runs on a mid-range laptop**, CPU-only, offline after install. One-line install from GitHub.
6. **Works without any AI service**; optionally uses local Ollama, or Claude Code / Codex / Gemini CLIs with explicit per-use consent and de-identified payloads.
7. **App-ready architecture**: same engine + UI later packaged as a Tauri desktop app, a mobile viewer, or a hosted web service.

**Non-goals (v1)**
- Diagnosis, findings detection or any clinical claim. The disclaimer is on every screen.
- Executing vendor binaries from discs, or cracking passwords. We decrypt only with the user's own password, using standard/documented crypto.
- True X-ray→3D reconstruction (experimental plugin later, clearly flagged).
- Cloud storage or accounts.

---

## 2. System architecture

```
 ┌───────────────────────── Browser (Chrome/Edge/Firefox/Safari) ─────────────────────────┐
 │  web/  (Vite + TS + Svelte 5 + three.js, i18n)                                           │
 │   Import wizard │ Study dashboard │ 3D Explorer │ 2D Viewer (MPR/sagittal) │ Learn/Tour  │
 │        └──────────── typed API client (generated from OpenAPI) ───────────┘               │
 └───────────────▲──────────────────────────── REST + SSE (token cookie, Origin-checked) ───┘
                 │ 127.0.0.1:<random port>
 ┌───────────────┴─────────────────────── Engine (Python 3.12, package `medmereport`) ─────────────┐
 │ server/   FastAPI app, security middleware, job manager (ProcessPool + cancel), SSE      │
 │ core/     domain models (Study, Series, Volume, Job, Artifact), settings, workspace, logs │
 │ ingest/   adapter registry → [dicomdir | loose | dcmburner | radiant | archive | images]  │
 │ dicom/    sniffing, decoding (gdcm/openjpeg/rle), geometry, series grouping, de-id       │
 │ classify/ modality/body-part/sequence classifier (rules first, ML optional)              │
 │ pipelines/ base Pipeline API → brain_mr, ct_body, vessels, spine_mr, xray2d, generic     │
 │ segment/  backends: synthseg_onnx, totalseg (opt), atlas_registration, classical         │
 │ geometry/ marching cubes, smoothing, decimation, labelling, GLB writer, thumbnails       │
 │ analysis/ per-structure stats, sanity checks, reference ranges (cited)                   │
 │ knowledge/ anatomy KB (JSON, i18n), sequence explainers, licences/attributions           │
 │ ai/       optional helpers: ollama, claude/codex/gemini CLI adapters, payload schema,    │
 │           PHI scanner, consent ledger                                                     │
 │ cli/      `medmereport` (serve | process | doctor | purge | models)                            │
 └──────────────────────────────────────────────────────────────────────────────────────────┘
        │ reads user files (read-only)          │ writes only to the workspace
        ▼                                         ▼
  user folder / disc / zip           ~/medmereport/workspace/<study-uuid>/ (opt-in persistence)
                                      session temp (0700, wiped on exit/start)
```

### Key principles
- **Engine/UI contract = OpenAPI.** The UI never touches files directly. The desktop app (Tauri sidecar) and a hosted web service reuse the same API. Only the auth middleware differs: localhost token vs OIDC.
- **Plugins everywhere.** `IngestAdapter`, `Pipeline` and `SegmentationBackend` are registered via Python entry points, so community vendor adapters need no core changes.
- **Artifacts are standard formats.** GLB (meshes + node names), NIfTI (label maps), PNG/WebP slice stacks + JSON meta, `study.json` manifest. Portable to Slicer/Blender/3D printing (STL export).
- **Deterministic, explainable pipelines.** Every artifact records its provenance: pipeline version, backend, parameters, atlas/model licence.
- **Honesty layer.** Every measurement carries `method`, `confidence` and `reference` fields. The UI renders caveats automatically, and sanity checks flag implausible results instead of showing them silently.

---

## 3. Data model (core)

```text
Study        id(uuid), source(adapter, path-hash), patient(display-only, never logged), date, modalities[], series[]
Series       uid, modality, body_part, plane, sequence(T1/T2/FLAIR/DWI/ADC/T2*/TOF/STIR/CT/CR/DX/…), n, spacing, orientation, role(primary|derived|mip|localizer)
Volume       image (SimpleITK) + geometry in LPS; never leaves engine except as artifacts
Job          id, study, pipeline, stage, pct, msgs[], status, cancel_flag, started/ended
Artifact     job, kind(glb|nifti|slices|thumbs|stats|report), path, sha256, provenance{}
Measurement  structure, side, value, unit, method, reference_range?, caveat
```

Coordinates: the engine works in **DICOM LPS** everywhere. The single conversion to three.js space (X=L, Y=S, Z=A, det +1) lives in `geometry/space.py`. Transform helpers are typed (`fixed_to_moving` vs `moving_to_fixed`) and unit-tested with a shifted phantom (prototype bug #1).

---

## 4. Ingest adapters (the "top 5")

| Adapter | Detect | Action |
|---|---|---|
| `dicomdir` | `DICOMDIR` file | pydicom `FileSet`; verify by sniffing |
| `loose` | any folder/zip/7z | walk + `DICM` sniff (+ implicit-VR fallback); nested archives up to depth 3; size/zip-bomb limits |
| `dcmburner` | `burn.enc` starting `Salted__` | ask password → OpenSSL EVP_BytesToKey (SHA-256 then MD5 fallback) AES-256-CBC in memory → ZIP → `loose` |
| `radiant` | `dcmdata.zip` with AES entries | ask password → `pyzipper`/`py7zr` AES → inner `container.zip` → `loose` |
| `images` | jpg/png/heic/pdf/tiff | PDF page extraction; EXIF orientation; treat as `XR-photo` series |

Rules: never execute disc binaries; open files read-only; decrypt into memory or session temp; zero the password buffer after use; wrong password gives a friendly retry with no lockout logic. A test-fixture generator builds **synthetic** discs of every type from public sample DICOM, so no real patient data ever enters the repo.

## 5. Pipelines

| Pipeline | Triggers | v1 output |
|---|---|---|
| `brain_mr` | MR + head + T1/T2/FLAIR | SynthSeg (ONNX) labels → patient surface carved into regions + deep structures; fallback atlas registration (prototype); stats (volume, ADC, FLAIR/T2 ratios, asymmetry); thumbnails; multi-plane fusion when several stacks exist |
| `vessels` | MR TOF / CTA | vessel mesh (top-hat + hysteresis + shape filters), MIP gallery |
| `ct_body` | CT | classical: skin, bone, lungs, air (HU); optional TotalSegmentator open tasks → organs/vertebrae/ribs labelled |
| `spine_mr` | MR + spine | 2D sagittal-first viewer, cord/CSF/vertebra surfaces (classical + `total_mr` optional) |
| `xray2d` | CR/DX/photos | 2D viewer, optional lung/heart overlays, labelled "relief" view, body-template locator |
| `generic` | anything else | 2D viewer + iso-surface with threshold slider |

Every pipeline follows `plan() → run(ctx) → yields Progress → returns Artifacts`, honours cancellation and runs in a worker process.

## 6. Frontend
- **Routes:** `/import` (drop folder/zip or pick path; password prompt), `/study/:id` (dashboard), `/study/:id/3d`, `/study/:id/view/:series` (2D, with a sagittal preset), `/learn`.
- Port the prototype's components: 3D explorer (colour-by, layers, explode, clip, X-ray, pin labels, tour, quiz), SliceViewer (W/L, zoom/pan, measure, cine, labels, localizer, sync), region cards.
- Svelte 5 + TS, three.js, Web Workers for GLB/slices, fonts self-hosted, i18n (en, hi; more later), WCAG AA, mobile-responsive.
- Large data: progressive GLB (meshopt), lazy slice loading, content-hashed assets.

## 7. Privacy & security (must-pass checks)
- Bind 127.0.0.1, random port, TrustedHost allow-list, URL-fragment token → HttpOnly cookie, Origin check incl. SSE, no CORS, strict CSP, vendored assets.
- **CI egress test:** run the full pipeline under a socket guard and fail on any outbound connect.
- PHI-free logging (structured logger with redaction filter + test).
- Workspace persistence is **opt-in**. `medmereport purge` wipes everything, temp is cleared at start and exit, and the docs recommend full-disk encryption.
- Exports and AI payloads de-identified (Annex E basic profile + UID remap + filename scrub).
- AI helpers: off by default, show the exact payload before sending, label cloud vs local, plain-text output only.

## 8. Distribution
- **v1:** `install.ps1` / `install.sh` (pinned uv → `uv tool install git+…@tag`) + `medmereport` CLI + desktop shortcut; optional `[ai]` extra (onnxruntime models; torch CPU index only if TotalSegmentator is enabled); `medmereport models pull` with an offline bundle option.
- **Later:** Tauri v2 app with a PyInstaller engine sidecar, signed installers, auto-update only with consent; Docker image for self-hosting labs.
- **Licences:** code Apache-2.0; atlas data in `medmereport-data` package (CC BY-SA 4.0 attribution for Harvard-Oxford, MNI notice); third-party notices generated in CI; avoid GPL codecs in core.

## 9. Quality
- Python: ruff, mypy (strict in `core/`, `dicom/`, `geometry/`), pytest + hypothesis for geometry; golden-image tests for meshes (vertex-count/volume tolerances).
- Web: eslint, svelte-check, vitest, Playwright e2e (import synthetic disc → 3D loads → click region → card shows).
- 3-OS CI matrix (Windows, macOS arm64, Ubuntu). Performance budget: brain MR study < 6 min on a 4-core CPU, UI first paint < 2 s, GLB < 30 MB.
- Accuracy validation on public datasets (e.g. OpenNeuro, TCIA open collections) with Dice vs reference where available; numbers published in docs.

## 10. Milestones
| M | Deliverable | Exit criteria |
|---|---|---|
| M0 | Repo scaffold, CI, security middleware, docs | `medmereport serve` opens empty UI with token; egress test green |
| M1 | Ingest (5 adapters) + series catalogue + 2D viewer | Synthetic fixtures of all 5 types import and view correctly |
| M2 | Brain MR 3D (SynthSeg + fallback) + explorer + stats | Public brain MR → labelled GLB; prototype feature parity |
| M3 | CT body + vessels + spine | Public CT → bones/organs; TOF → vessels |
| M4 | X-ray 2D + overlays + relief + template locator | CR/DX + photo/PDF flows |
| M5 | Learn mode, i18n (hi), accessibility, polish | UX review pass; Lighthouse a11y ≥ 90 |
| M6 | Optional AI helpers (Ollama/CLIs) with consent | Payload never contains PHI (property test) |
| M7 | Installers, docs, v1.0 release | Fresh-laptop install < 10 min on all 3 OSes |
| M8+ | Tauri app, web-service mode, FHIR/ABDM adapter, experimental X-ray 3D | — |

## 11. Risks
| Risk | Mitigation |
|---|---|
| Unknown Indian vendor formats | Plugin adapters, "unknown disc" diagnostics bundle (de-identified file tree + magic bytes only) users can share voluntarily |
| SynthSeg TF→ONNX conversion issues | Keep the atlas-registration fallback (proven); pin a TF env for conversion offline in CI |
| Heavy installs on Windows | Base install without torch; ONNX runtime; offline bundle |
| Users over-trusting numbers | Honesty layer, reference citations, sanity checks, "not a diagnosis" UI pattern |
| Licence contamination | Licence check in CI (pip-licenses, license-checker), separate data package |
| Data leak via logs/temp/AI | Redaction tests, egress test, consent ledger, purge command |
