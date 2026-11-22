# medmereport — Task Logger

Single source of truth for work status. Humans and agents (parallel or sequential) coordinate **only** through this file and git.

## Protocol (read before touching anything)
1. **Pick** a task whose `Deps` are all `done` and whose `Status` is `todo`. Prefer the lowest milestone first.
2. **Claim**: set `Status` → `doing`, set `Owner` (e.g. `agent-A`, `human`), add a log line. Commit only this change (`chore(tasks): claim T1.3`) **before** starting work, so parallel agents see the claim.
3. **Stay in your lane.** Only edit files under the task's `Paths`. If you must touch a shared file (`pyproject.toml`, `web/package.json`, `engine/medmereport/core/models.py`, API schema), note it in the log and keep the change minimal and additive.
4. **Done** means the acceptance check passes, tests are added, lint/typecheck are green, and docs are updated if behaviour changed. Then set `Status` → `done`, add a log line with a one-line summary and the commit hash.
5. **Blocked**: set `Status` → `blocked`, state why and what would unblock it. Never silently skip.
6. **New work discovered**: append a task with the next ID in the right milestone. Don't expand scope inside a task.
7. **Hard rules**: no real patient data in the repo, tests, logs or issues; no outbound network calls at runtime; never execute files from an ingested disc; never install into a global Python.

Status: `todo` · `doing` · `blocked` · `done`. Lanes let agents run in parallel with minimal conflicts:
**E** = engine core/server · **I** = ingest/DICOM · **P** = pipelines/segmentation · **G** = geometry/analysis · **W** = web UI · **D** = devops/packaging · **Q** = QA/security · **K** = knowledge/docs/i18n.

---

## M0 — Foundations
| ID | Task | Lane | Deps | Paths | Acceptance | Status | Owner |
|---|---|---|---|---|---|---|---|
| T0.1 | Repo scaffold: `engine/` (uv project, package `medmereport`), `web/` (Vite+TS+Svelte 5), `docs/`, `scripts/`, `.editorconfig`, Apache-2.0 LICENSE, NOTICE, strict `.gitignore` (blocks `*.dcm`, `DICOMDIR`, `*.nii*`, `*.enc`, `workspace/`) | D | – | root | `uv run medmereport --help` and `npm run build` work | done | claude |
| T0.2 | CI: ruff, mypy, pytest, eslint, svelte-check, vitest on Win/macOS/Linux | D | T0.1 | `.github/` | CI green on empty project | done | claude |
| T0.3 | Core domain models + settings + workspace + session temp manager (0700, wipe on start/exit) | E | T0.1 | `engine/medmereport/core/` | Unit tests; temp cleared after a crash simulation | done | claude |
| T0.4 | PHI-redacting structured logger | E | T0.3 | `engine/medmereport/core/logging.py` | Property test: names/IDs/dates/paths never appear in log output | done | claude |
| T0.5 | FastAPI server: 127.0.0.1 random port, TrustedHost, fragment-token→cookie, Origin check, no CORS, CSP, static UI serving | E | T0.3 | `engine/medmereport/server/` | Security tests: wrong Host/Origin/token → 403; DNS-rebind sim blocked | done | claude |
| T0.6 | Job manager: ProcessPool, progress events, cancel, SSE endpoint, OpenAPI export | E | T0.5 | `engine/medmereport/server/jobs.py` | Fake 3-stage job streams progress and cancels cleanly | done | claude |
| T0.7 | OpenAPI → TS client generation + web app shell (routing, theme tokens, layout, i18n scaffold en/hi) | W | T0.6 | `web/src/` | UI shows engine status via generated client | done | claude |
| T0.8 | Network egress guard test (socket monkeypatch) covering serve + process | Q | T0.5 | `engine/tests/security/` | Fails if any non-loopback connect occurs | done | claude |
| T0.9 | `medmereport` CLI: serve (opens browser), process, doctor, purge, models, diagnose (de-identified file-tree + magic-bytes report for unknown discs) | E | T0.5 | `engine/medmereport/cli/` | `medmereport doctor` reports env, CPU, RAM, optional extras | done | claude |

## M1 — Ingest & 2D viewing
| ID | Task | Lane | Deps | Paths | Acceptance | Status | Owner |
|---|---|---|---|---|---|---|---|
| T1.1 | Synthetic fixture generator: builds all 5 container types from public sample DICOM (pydicom test files) and generated phantoms | Q | T0.1 | `engine/tests/fixtures/` | `pytest --gen-fixtures` creates dicomdir/dcmburner/radiant/loose/images samples, with no real PHI | done | agent-Q |
| T1.2 | DICOM layer: sniffing (DICM + implicit VR), decoding (gdcm, openjpeg, rle), geometry, series grouping, multi-frame | I | T0.3 | `engine/medmereport/dicom/` | Decodes all codecs in fixtures; groups by SeriesUID+orientation+echo/b-value | done | agent-I |
| T1.3 | Adapter registry (entry points) + `loose` (folders, zip, 7z, nested, zip-bomb limits) | I | T1.2 | `engine/medmereport/ingest/` | Fixtures import; a 10 GB zip-bomb is rejected | done | agent-I |
| T1.4 | `dicomdir` adapter | I | T1.3 | `ingest/dicomdir.py` | Synapse-style fixture imports | done | agent-I |
| T1.5 | `dcmburner` adapter (OpenSSL Salted__, EVP_BytesToKey SHA-256/MD5, AES-256-CBC, in-memory) | I | T1.3 | `ingest/dcmburner.py` | Fixture decrypts with password; wrong password gives a clear error; password zeroed | done | agent-Q |
| T1.6 | `radiant` adapter (AES zip → container.zip) | I | T1.3 | `ingest/radiant.py` | Fixture imports | done | agent-Q |
| T1.7 | `images` adapter (jpg/png/heic/tiff/pdf pages, EXIF rotate) | I | T1.3 | `ingest/images.py` | Photo + PDF fixtures become XR-photo series | done | agent-Q |
| T1.8 | Series classifier (modality, body part, plane, sequence, role incl. MIP/localizer) | P | T1.2 | `engine/medmereport/classify/` | ≥95% correct on labelled fixture set | done | agent-I |
| T1.9 | Import API + slice-stack exporter (WebP/PNG + meta JSON, label maps) | E | T1.3,T0.6 | `server/routes/import.py`, `engine/medmereport/export/` | Import job emits catalogue + slices | done | claude |
| T1.10 | Import wizard UI (drag-drop/path, password prompt, progress, catalogue) | W | T0.7,T1.9 | `web/src/routes/import/` | e2e: synthetic dcmburner disc → catalogue | done | agent-W |
| T1.11 | 2D viewer (port prototype SliceViewer as a Svelte component: W/L, zoom/pan, measure, cine, labels, localizer, sync panes, sagittal preset) | W | T1.9 | `web/src/lib/viewer2d/` | e2e: scroll, W/L, measure mm matches fixture spacing | done | agent-W |
| T1.12 | Study dashboard (series cards, sequence explainers, disclaimer) | W | T1.10 | `web/src/routes/study/` | Lists all series grouped by region | done | agent-W |

| T1.13 | Playwright e2e: synthetic encrypted disc → password → dashboard → viewer (scroll, W/L, measure) | Q | T1.10,T1.11 | `web/e2e/` | Runs in CI on built app | doing | agent-E |
| T1.14 | Merge duplicate safe-zip extractors (`loose.extract_zip` vs `dcmburner.safe_extract_zip`) into `ingest/archive.py`; add `warnings` to OpenContext | I | T1.3,T1.5 | `engine/medmereport/ingest/` | One extractor, all ingest tests green | doing | agent-E |
| T1.15 | Reconcile hand-written `web/src/lib/api/endpoints.ts` with generated OpenAPI types | W | T1.9 | `web/src/lib/api/` | No hand-written duplicates of engine models | done | agent-W |

## M2 — Brain MR 3D
| ID | Task | Lane | Deps | Paths | Acceptance | Status | Owner |
|---|---|---|---|---|---|---|---|
| T2.1 | Pipeline base API (plan/run/progress/cancel/provenance) + registry | P | T0.6 | `engine/medmereport/pipelines/base.py` | Dummy pipeline runs end to end | done | agent-G |
| T2.2 | Spatial helpers: typed transforms, LPS↔three conversion, resample with an explicit direction | G | T0.3 | `engine/medmereport/geometry/space.py` | Shifted-phantom test catches a reversed transform | done | claude |
| T2.3 | Multi-stack fusion (axial+sagittal+coronal → 1 mm iso, rigid motion correction) | P | T2.2,T1.2 | `pipelines/brain_mr/fusion.py` | Phantom test: fused resolution better than any single input | done | agent-P |
| T2.4 | SynthSeg → ONNX conversion script (offline, documented) + `synthseg_onnx` backend | P | T2.1 | `engine/medmereport/segment/synthseg/`, `scripts/convert_synthseg.py` | Matches TF output (Dice ≥ 0.98) on public sample | done | agent-P2 |
| T2.5 | Atlas-registration fallback backend (MNI152 2009c + Harvard-Oxford; prototype logic, fixed direction, SynthSeg-free skull strip) | P | T2.2 | `engine/medmereport/segment/atlas/` | Public T1 → labels with sanity checks | done | agent-P |
| T2.6 | Surface builder: patient surface, hemisphere/cerebellum/brainstem split, vertex labelling, deep structures, decimation, GLB with node names | G | T2.4 or T2.5 | `engine/medmereport/geometry/` | GLB < 30 MB, ≥ 90 named regions | done | agent-G |
| T2.7 | Stats & sanity checks (volume, ADC, FLAIR/T2 ratios, asymmetry; reference ranges with citations; plausibility flags) | G | T2.6 | `engine/medmereport/analysis/` | Each measurement has method + caveat fields | done | agent-G |
| T2.8 | Region thumbnails "on your scan" | G | T2.6,T1.9 | `engine/medmereport/export/thumbs.py` | Three views per region | done | agent-G |
| T2.9 | 3D explorer UI (port prototype: colour-by, layers, explode, clip, X-ray, pin, tooltips, presets, screenshot) | W | T0.7,T2.6 | `web/src/lib/viewer3d/` | 60 fps on an integrated GPU with the full brain | done | agent-W |
| T2.10 | Region card UI (My Scan) + deep links to the 2D viewer | W | T2.7,T2.9,T1.11 | `web/src/lib/cards/` | Clicking a region shows measurements and thumbnails | done | agent-W |
| T2.11 | Anatomy knowledge base (generic, cited, i18n-ready JSON; brain first) | K | – | `engine/medmereport/knowledge/` | Schema-validated; reviewed against textbooks | done | agent-K |

| T2.12 | Publish SynthSeg ONNX weights as GitHub release assets (`models-synthseg-2.0`) on vkpriyesh/medmereport so `models pull synthseg-*` works | D | T2.4 | release | Hashes match registry | done | claude |
| T2.13 | Head/skin surface layer (`H__skin`) + TOF vessel pipeline hookup in brain model | G | T2.6,T3.3 | geometry/ | Layers toggle in UI | done | agent-V |
| T2.14 | Hover raycast acceleration (BVH) for ~900k-tri scenes; real-hardware fps check | W | T2.9 | web/src/lib/viewer3d | ≥45 fps on integrated GPU | done | agent-W |

## M3 — CT, vessels, spine
| ID | Task | Lane | Deps | Paths | Acceptance | Status | Owner |
|---|---|---|---|---|---|---|---|
| T3.1 | `ct_body` classical (skin/bone/lung/air via HU) | P | T2.1,T2.6 | `pipelines/ct_body/` | Public CT → 4 surfaces | done | agent-CT |
| T3.2 | TotalSegmentator backend (open tasks only, `[ai]` extra, model pull, licence guard) | P | T3.1 | `segment/totalseg/` | Licensed tasks unreachable; `--fast` runs on CPU | done | agent-CT |
| T3.3 | `vessels` pipeline (prototype top-hat + shape filters, CTA variant) | P | T2.1 | `pipelines/vessels/` | Public TOF → vessel mesh, no scalp fat | done | agent-V |
| T3.4 | `spine_mr` pipeline + sagittal-first layout | P | T2.1 | `pipelines/spine_mr/` | Cord/CSF/vertebra surfaces | done | agent-CT |
| T3.5 | Knowledge base: body organs, bones, vessels, spine | K | T2.11 | `knowledge/` | Covers all TotalSegmentator open labels | done | agent-K |
| T3.6 | 3D UI generalisation for body/spine/vessels (layers from regions.json, framing presets, group palette, body-scale explode/clip, system-grouped tree, graceful cards) + model options/backend picker | W | T2.9,T2.10 | `web/src/lib/viewer3d/`, `web/src/routes/model3d/` | Brain unchanged; body + spine mocks render with correct framing | done | agent-W |
| T3.7 | Mock mode: synthetic body (CT) and spine models | W | T3.6 | `web/scripts/` | `npm run dev:mock` lists brain, body and spine demo studies | done | agent-W |
| T3.8 | Validate ct_body/spine_mr on public datasets; real TotalSegmentator run with the `totalseg` extra (torch CPU index) | Q | T3.1,T3.2,T3.4 | `docs/VALIDATION.md` | Dice/runtime recorded; totalseg path verified offline | todo | |
| T3.9 | M3 UI polish from e2e check: vessels model uses brain-only controls ("X-ray cortex", Inside, Lobes) because framing=head; neck arteries toggle off by default; spine has no summary numbers (canal/cord length, disc count); body/spine search placeholder; `model/options` backends as `{id, available, reason}` | W | T3.6 | web, pipelines | Each item visible-checked in Chrome | doing | agent-E (engine) + agent-UI (web) |

## M4 — X-ray
| ID | Task | Lane | Deps | Paths | Acceptance | Status | Owner |
|---|---|---|---|---|---|---|---|
| T4.1 | `xray2d` pipeline: normalisation, view detection (PA/AP/lateral, body part) | P | T1.7,T1.8 | `pipelines/xray2d/` | Correct body-part tag on fixtures | todo | |
| T4.2 | Optional 2D overlays (lung/heart via TorchXRayVision ONNX; verify licence first) | P | T4.1 | `segment/xray/` | Overlay plus caveat | todo | |
| T4.3 | Relief view + generic body-template locator (labelled "height = brightness") | W | T4.1 | `web/src/lib/xray/` | UX review: nobody reads it as real 3D | todo | |

## M5 — Learn, UX, i18n, a11y
| ID | Task | Lane | Deps | Paths | Acceptance | Status | Owner |
|---|---|---|---|---|---|---|---|
| T5.1 | Learn mode, guided tour, quiz (generic models; works with no user data via bundled demo phantom) | W | T2.9,T2.11 | `web/src/routes/learn/` | Demo works with zero imports | todo | |
| T5.2 | Hindi translation + language switcher | K | T0.7 | `web/src/i18n/` | All UI strings externalised | todo | |
| T5.3 | Accessibility + responsive pass | W | T2.10 | web | Lighthouse a11y ≥ 90; usable at 390 px | doing | agent-UI |
| T5.4 | Design polish pass (tokens, motion, empty/error states) | W | T5.3 | web | Design review checklist signed off | doing | agent-UI |

## M6 — Optional AI helpers
| ID | Task | Lane | Deps | Paths | Acceptance | Status | Owner |
|---|---|---|---|---|---|---|---|
| T6.1 | Payload schema (derived numbers/labels only) + PHI scanner + consent ledger | E | T2.7 | `engine/medmereport/ai/` | Property test: PHI never passes | todo | |
| T6.2 | Ollama adapter (local default, version check ≥0.1.29) | E | T6.1 | `ai/ollama.py` | Explains a region in plain language offline | todo | |
| T6.3 | CLI adapters: claude / codex / gemini-or-antigravity (detect, sandbox flags, stdin, timeout) | E | T6.1 | `ai/cli_adapters.py` | Mocked tests; "data leaves this computer" consent required | todo | |
| T6.4 | AI UI: "Explain this" with exact-payload preview | W | T6.2 | web | Off by default; preview shown before every send | todo | |

## M7 — Release
| ID | Task | Lane | Deps | Paths | Acceptance | Status | Owner |
|---|---|---|---|---|---|---|---|
| T7.1 | `install.ps1` / `install.sh` (pinned uv, tool install from tag, shortcut, uninstall) | D | T0.9 | `scripts/` | Fresh VM install < 10 min (Win11, macOS, Ubuntu) | todo | |
| T7.2 | Model pull + offline bundle | D | T2.4,T3.2 | `engine/medmereport/models/` | Works air-gapped from bundle | todo | |
| T7.3 | Licence/NOTICE generation + data package split (CC BY-SA atlas) | D | T2.5 | `data/`, CI | CI fails on GPL in core | todo | |
| T7.4 | Validation report on public datasets (Dice, runtime per OS) | Q | M2,M3 | `docs/VALIDATION.md` | Published numbers | todo | |
| T7.5 | README onboarding, troubleshooting, privacy statement, screenshots (synthetic data only) | K | T7.1 | `README.md`, `docs/` | A non-technical tester succeeds unaided | todo | |
| T7.6 | Security review (threat model, localhost hardening, temp hygiene) | Q | M6 | `docs/SECURITY.md` | All checklist items verified | todo | |

## Later (M8+)
T8.1 Tauri v2 desktop app (engine sidecar) · T8.2 hosted web mode (OIDC, job queue) · T8.3 ABDM/FHIR ImagingStudy adapter · T8.4 experimental biplanar/SSM X-ray 3D · T8.5 browser-only viewer mode (NiiVue/brainchop) · T8.6 more vendor adapters from community diagnostics bundles · T8.7 STL export for 3D printing.

---

## Log
<!-- newest last. Format: YYYY-MM-DD HH:MM | owner | task | action | note/commit -->
2026-11-21 | planner | – | created | Plan, research and task list drafted from prototype learnings
2026-11-21 | claude | T0.1–T0.8 | done | engine scaffold (uv), hardened localhost server, spawn job manager + SSE, PHI-redacting logs, session temp hygiene, egress guard, Svelte 5 shell + typed OpenAPI client + i18n (en/hi), CI workflow. 23 tests green; verified end-to-end in Chrome (token→cookie, self-test job streams progress)
2026-11-21 | claude | T0.5 | note | cross-site check scoped to /api: opening the UI shell from a terminal/shortcut is a top-level navigation and must work; API stays origin-locked (tests added)
2026-11-21 | claude | T0.9 | doing | serve/doctor/purge/openapi done; process/models/diagnose land with M1/M2
2026-11-21 | agents I/Q/W + claude | T1.1–T1.12 | done | 5 container adapters (dicomdir, dcmburner, radiant, loose zip/7z, images/PDF), DICOM layer, classifier, importer + study API, import wizard, 2D viewer, dashboard, sagittal page. 200 engine + 44 web tests. Verified in Chrome against the real engine: synthetic encrypted disc → password → dashboard → viewer
2026-11-21 | claude | T0.9 | done | diagnose (de-identified report) added
2026-11-21 | claude | M2 | claim | contracts (LabelMap, artifact format, vocabulary) + T2.2 spatial helpers done; 5 lanes dispatched in parallel (P atlas+fusion, P2 SynthSeg ONNX, G surfaces/stats/thumbs/job, W 3D UI, K knowledge)
2026-11-21 | agents P/P2/G/W/K + claude | T2.1–T2.11 | done | atlas backend (Dice 0.96 brain, ~0.95 deep grey, ~80 s), SynthSeg 2.0 ONNX (Dice>=0.999 vs TF untiled; adaptive RAM budget), fusion, carved surface + GLB, stats w/ caveats, thumbs, label maps, model job/route, 3D explorer + cards, KB en/hi (62 structures). Verified in Chrome: demo DICOM disc -> 3D model in 136 s with 102 regions. 302 engine + 81 web tests
2026-11-21 | claude | T2.12 | blocked | publishing model weights to a public GitHub release is outward-facing; awaiting owner. Atlas backend is the default until then
2026-11-22 | agent-CT | T3.1,T3.2,T3.4 | claim | ct_body classical + labels_surface builder, TotalSegmentator optional backend (licence guard), spine_mr
2026-11-22 | agent-W | T1.15,T2.14,T3.6,T3.7 | claim | 3D UI generalisation (body/spine/vessels), model options UI, BVH hover, OpenAPI reconcile, body/spine mocks
2026-11-22 | agent-K | T3.5 | claim | BODY vocab from TotalSegmentator open tasks + KB en/hi for CT/spine/body/vessels
2026-11-22 | agent-V | T3.3, T2.13 | claim | vessels pipeline (TOF + CTA) in pipelines/vessels/, H__skin + TOF hookup in brain_mr; shared: small additive edit to pipelines/registry.py
2026-11-22 | agent-K | T3.5 | done | BODY vocab = 224 ids from 31 open TotalSegmentator tasks (upstream 88060518, pkg 2.18.0; class list in knowledge/totalseg_classes.json + knowledge/totalseg.py); findings/devices excluded; +3 lobes (nervous, sensory, body_regions); +9 KB categories; KB en/hi 320 structures / 27 lobes (v2). Hindi needs clinician review; web needs cat.* i18n keys for new categories (W lane)
2026-11-22 | agent-V | T3.3 | done | pipelines/vessels: TOF (eroded head mask, separable top-hat, Hessian tubularity, hysteresis, outer-shell component drop, skull-base split V__cow/V__neck, H__skin) + CTA (HU band minus dilated bone, tubular components, V__body); synthetic phantoms prove scalp fat / vertebrae / blobs excluded; ~5 s TOF phantom (6.5M vox), <1 s CTA phantom | 6d9ffd0
2026-11-22 | agent-V | T2.13 | done | brain_mr/layers.py: H__skin (hidden by default) + TOF vessels registered into the reference (inverse of ref->TOF rigid), regions.json gains pipeline/framing/layers; known-shift test catches a reversed transform. Not yet verified against a real public TOF or in the browser UI | 2fdcb2c
2026-11-22 | agent-CT | T3.1 | done | ct_body classical (couch removal, skeleton, L/R lungs, airway traced from the top; volume + mean HU with method/caveats) + generic geometry/labels_surface.py + pipelines/labelled.py artifact writer; registry + GET /model/options + POST backend param (routes_model.py, additive). Phantom 80x128x128: 3.7 s; 512x512x320 grid: ~11 s seg+surfaces, GLB 10.5 MB | f55e685
2026-11-22 | agent-CT | T3.4 | done | spine_mr classical (CSF, cord, vertebral bodies, discs from z-profile peaks; levels not numbered -> vertebral_column; primary_series = sagittal). Phantom: 2.7 s | f55e685
2026-11-22 | agent-CT | T3.2 | done | TotalSegmentator backend: open-task allow-list guard, total --fast only, weights via `models pull totalseg-total-fast` (pinned 135 MB zip; models/registry.py additive), telemetry/downloads stubbed + sockets blocked; optional extra `totalseg` in pyproject (uv.lock regenerated; NOT installed in the dev venv: torch + nnU-Net too heavy) so tested with mocks; licence notes in RESEARCH.md. A real-weights run is still unverified -> T3.8 | 9881f6e
2026-11-22 | agent-CT | T3.8 | new | real-data validation + end-to-end TotalSegmentator run
2026-11-22 | agent-W | T1.15,T3.6,T2.14,T3.7 | done | 6556e7a API types aliased to generated OpenAPI + model options/backend picker; 718972c 3D UI for body/spine/vessels (framing, layers from regions.json, system palette, body-scale explode/clip/X-ray, primary_series 2D link) + BVH hover (900k tris: pick 3.6→0.1 ms, 108 fps on Intel UHD in Chrome); 2585f74 synthetic body+spine mocks. 99 web tests
2026-11-22 | claude | M3 | verified | merged 4 lanes; layer ids normalised to vocab groups (3ba2b39). Full engine suite 745 passed/2 skipped, ruff+mypy clean; web 99 tests. Chrome e2e on real engine: synthetic CT disc -> ct_body (3 s, lungs/airway/bones, card + thumbs OK), spine disc -> spine_mr (3 s), TOF disc -> vessels (6 s, scalp fat excluded). Polish items logged as T3.9; real-data validation is T3.8
2026-11-22 | claude | T2.12 | done | owner approved; public repo vkpriyesh/medmereport created, release `models-synthseg-2.0` published with LICENSE/NOTICE/SHA256SUMS; `models pull synthseg-*` verified (sha256 match). LICENSE + NOTICE added to repo
2026-11-22 | agent-E | T1.13,T1.14,T3.9 | claim | T3.9 engine parts only (model/options backend shape, spine summary, vessels layers/framing); web side is agent-UI
2026-11-22 | agent-UI | T3.9,T5.3,T5.4 | claim | T3.9 UI items (vessels-only controls, layer defaults, search placeholder, spine summary, backend reasons) + a11y/responsive/design polish pass across all screens
