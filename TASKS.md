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
| T0.9 | `medmereport` CLI: serve (opens browser), process, doctor, purge, models, diagnose (de-identified file-tree + magic-bytes report for unknown discs) | E | T0.5 | `engine/medmereport/cli/` | `medmereport doctor` reports env, CPU, RAM, optional extras | doing | claude |

## M1 — Ingest & 2D viewing
| ID | Task | Lane | Deps | Paths | Acceptance | Status | Owner |
|---|---|---|---|---|---|---|---|
| T1.1 | Synthetic fixture generator: builds all 5 container types from public sample DICOM (pydicom test files) and generated phantoms | Q | T0.1 | `engine/tests/fixtures/` | `pytest --gen-fixtures` creates dicomdir/dcmburner/radiant/loose/images samples, with no real PHI | todo | |
| T1.2 | DICOM layer: sniffing (DICM + implicit VR), decoding (gdcm, openjpeg, rle), geometry, series grouping, multi-frame | I | T0.3 | `engine/medmereport/dicom/` | Decodes all codecs in fixtures; groups by SeriesUID+orientation+echo/b-value | todo | |
| T1.3 | Adapter registry (entry points) + `loose` (folders, zip, 7z, nested, zip-bomb limits) | I | T1.2 | `engine/medmereport/ingest/` | Fixtures import; a 10 GB zip-bomb is rejected | todo | |
| T1.4 | `dicomdir` adapter | I | T1.3 | `ingest/dicomdir.py` | Synapse-style fixture imports | todo | |
| T1.5 | `dcmburner` adapter (OpenSSL Salted__, EVP_BytesToKey SHA-256/MD5, AES-256-CBC, in-memory) | I | T1.3 | `ingest/dcmburner.py` | Fixture decrypts with password; wrong password gives a clear error; password zeroed | todo | |
| T1.6 | `radiant` adapter (AES zip → container.zip) | I | T1.3 | `ingest/radiant.py` | Fixture imports | todo | |
| T1.7 | `images` adapter (jpg/png/heic/tiff/pdf pages, EXIF rotate) | I | T1.3 | `ingest/images.py` | Photo + PDF fixtures become XR-photo series | todo | |
| T1.8 | Series classifier (modality, body part, plane, sequence, role incl. MIP/localizer) | P | T1.2 | `engine/medmereport/classify/` | ≥95% correct on labelled fixture set | todo | |
| T1.9 | Import API + slice-stack exporter (WebP/PNG + meta JSON, label maps) | E | T1.3,T0.6 | `server/routes/import.py`, `engine/medmereport/export/` | Import job emits catalogue + slices | todo | |
| T1.10 | Import wizard UI (drag-drop/path, password prompt, progress, catalogue) | W | T0.7,T1.9 | `web/src/routes/import/` | e2e: synthetic dcmburner disc → catalogue | todo | |
| T1.11 | 2D viewer (port prototype SliceViewer as a Svelte component: W/L, zoom/pan, measure, cine, labels, localizer, sync panes, sagittal preset) | W | T1.9 | `web/src/lib/viewer2d/` | e2e: scroll, W/L, measure mm matches fixture spacing | todo | |
| T1.12 | Study dashboard (series cards, sequence explainers, disclaimer) | W | T1.10 | `web/src/routes/study/` | Lists all series grouped by region | todo | |

## M2 — Brain MR 3D
| ID | Task | Lane | Deps | Paths | Acceptance | Status | Owner |
|---|---|---|---|---|---|---|---|
| T2.1 | Pipeline base API (plan/run/progress/cancel/provenance) + registry | P | T0.6 | `engine/medmereport/pipelines/base.py` | Dummy pipeline runs end to end | todo | |
| T2.2 | Spatial helpers: typed transforms, LPS↔three conversion, resample with an explicit direction | G | T0.3 | `engine/medmereport/geometry/space.py` | Shifted-phantom test catches a reversed transform | todo | |
| T2.3 | Multi-stack fusion (axial+sagittal+coronal → 1 mm iso, rigid motion correction) | P | T2.2,T1.2 | `pipelines/brain_mr/fusion.py` | Phantom test: fused resolution better than any single input | todo | |
| T2.4 | SynthSeg → ONNX conversion script (offline, documented) + `synthseg_onnx` backend | P | T2.1 | `engine/medmereport/segment/synthseg/`, `scripts/convert_synthseg.py` | Matches TF output (Dice ≥ 0.98) on public sample | todo | |
| T2.5 | Atlas-registration fallback backend (MNI152 2009c + Harvard-Oxford; prototype logic, fixed direction, SynthSeg-free skull strip) | P | T2.2 | `engine/medmereport/segment/atlas/` | Public T1 → labels with sanity checks | todo | |
| T2.6 | Surface builder: patient surface, hemisphere/cerebellum/brainstem split, vertex labelling, deep structures, decimation, GLB with node names | G | T2.4 or T2.5 | `engine/medmereport/geometry/` | GLB < 30 MB, ≥ 90 named regions | todo | |
| T2.7 | Stats & sanity checks (volume, ADC, FLAIR/T2 ratios, asymmetry; reference ranges with citations; plausibility flags) | G | T2.6 | `engine/medmereport/analysis/` | Each measurement has method + caveat fields | todo | |
| T2.8 | Region thumbnails "on your scan" | G | T2.6,T1.9 | `engine/medmereport/export/thumbs.py` | Three views per region | todo | |
| T2.9 | 3D explorer UI (port prototype: colour-by, layers, explode, clip, X-ray, pin, tooltips, presets, screenshot) | W | T0.7,T2.6 | `web/src/lib/viewer3d/` | 60 fps on an integrated GPU with the full brain | todo | |
| T2.10 | Region card UI (My Scan) + deep links to the 2D viewer | W | T2.7,T2.9,T1.11 | `web/src/lib/cards/` | Clicking a region shows measurements and thumbnails | todo | |
| T2.11 | Anatomy knowledge base (generic, cited, i18n-ready JSON; brain first) | K | – | `engine/medmereport/knowledge/` | Schema-validated; reviewed against textbooks | todo | |

## M3 — CT, vessels, spine
| ID | Task | Lane | Deps | Paths | Acceptance | Status | Owner |
|---|---|---|---|---|---|---|---|
| T3.1 | `ct_body` classical (skin/bone/lung/air via HU) | P | T2.1,T2.6 | `pipelines/ct_body/` | Public CT → 4 surfaces | todo | |
| T3.2 | TotalSegmentator backend (open tasks only, `[ai]` extra, model pull, licence guard) | P | T3.1 | `segment/totalseg/` | Licensed tasks unreachable; `--fast` runs on CPU | todo | |
| T3.3 | `vessels` pipeline (prototype top-hat + shape filters, CTA variant) | P | T2.1 | `pipelines/vessels/` | Public TOF → vessel mesh, no scalp fat | todo | |
| T3.4 | `spine_mr` pipeline + sagittal-first layout | P | T2.1 | `pipelines/spine_mr/` | Cord/CSF/vertebra surfaces | todo | |
| T3.5 | Knowledge base: body organs, bones, vessels, spine | K | T2.11 | `knowledge/` | Covers all TotalSegmentator open labels | todo | |

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
| T5.3 | Accessibility + responsive pass | W | T2.10 | web | Lighthouse a11y ≥ 90; usable at 390 px | todo | |
| T5.4 | Design polish pass (tokens, motion, empty/error states) | W | T5.3 | web | Design review checklist signed off | todo | |

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
