# medmereport — Research Summary (Nov 2026)

Condensed from three research passes plus a working prototype (brain MRI → labelled 3D model). Items marked **[weak]** have thin public evidence; **[unverified]** were not confirmed at source.

---

## 1. What a patient actually receives in India

Public evidence on hospital-to-patient image delivery in India is thin: chains do not publish PACS vendors or CD formats. So medmereport targets **container formats** (what lands on disk), not hospital brands.

| # | Delivery format (our "top 5" adapters) | Who produces it (evidence) | On-disk signature |
|---|---|---|---|
| 1 | **Standard DICOM disc (IHE-PDI)** | PACS export from Fujifilm Synapse (Manipal, verified), Medsynaptic (Indian; Fortis/Apollo/Max listed as clients), Philips, GE, Agfa, Carestream, Siemens | `DICOMDIR` at root, `DICOM/` tree of 8-char extensionless files, `autorun.inf`, a Windows viewer `.exe`, sometimes PDF/HTML |
| 2 | **DcmBurner encrypted disc** | DcmBurner (AES-256, embedded viewer; used by Parkway/IHH; Gleneagles India also IHH **[weak]**) | `burn.enc` (OpenSSL `Salted__`, AES-256-CBC, EVP_BytesToKey **SHA-256**, password → ZIP of DICOM + DICOMDIR), `decrypt_win.exe`, `VIEWER/` (Weasis) |
| 3 | **RadiAnt encrypted media** | RadiAnt CD/DVD burner (vendor-documented) | `dcmdata.zip` at root: 7-Zip AES-256 zip wrapping `container.zip` of DICOM |
| 4 | **Loose DICOM / portal download** | Cloud PACS links (Medixshare/MYAIRA, Telerad "My RAD View", SparkRad), USB copies, WhatsApp-forwarded zips **[weak]** | `.zip`/`.7z`/folder, no DICOMDIR, `.dcm` or no extension, nested folders |
| 5 | **Image exports & X-rays** | Film photos, paper prints, PDF reports, JPEG exports; CR/DX DICOM at corporate centres | `.jpg/.png/.pdf/.heic`, or DICOM with Modality CR/DX (often JPEG-lossless/J2K) |

Also seen: NHS-style password-protected **self-extracting .exe** (out of scope for v1: never execute vendor binaries).

**Design implications**
- Never trust DICOMDIR alone: sniff every file for `DICM` at offset 128 (plus implicit-VR fallback).
- Never execute anything from the disc (viewers, decryptors, autorun). Re-implement documented/standard crypto only, with the **user's own password**.
- Film/paper is still the most common X-ray deliverable → photo/PDF ingest matters.
- Pluggable adapter registry so community can add vendor formats.

**India law/standards**
- DPDP Act 2023 §3(c)(i) exempts processing by an individual for personal purposes; a local-only tool with zero telemetry keeps the developer out of "data fiduciary" scope (not legal advice). Any cloud sync/analytics changes that.
- ABDM/NRCeS FHIR R4 has `ImagingStudy` + `DiagnosticReportImaging` profiles → future input adapter (FHIR bundle with DICOM/PDF attachments).

**Existing OSS:** dovo (GPL-3, CD import → PACS), dcm2dir (MIT), pydicom `FileSet` (DICOMDIR), Weasis/3D Slicer/dcm2niix. **None handle vendor-encrypted containers** → a real gap medmereport fills.

---

## 2. 3D reconstruction engines (local, CPU-capable)

| Need | Choice | License | Notes |
|---|---|---|---|
| Brain MR parcellation (any contrast/resolution) | **SynthSeg 2.0** | Apache-2.0 | ~1 min CPU; robust to clinical 3–10 mm slices; ~100 labels + DK cortex. Replaces our 4-min registration. TF/Keras stack → convert to ONNX. |
| Brain fallback / "atlas view" | MNI152 2009c + **Harvard-Oxford** | MNI permissive; H-O **CC BY-SA 4.0** | Our prototype pipeline (SimpleITK affine+B-spline). Ship atlas in separate `data/` package with attribution. |
| Body CT/MR organs & bones | **TotalSegmentator** open tasks (`total`, `total_mr`, `body`, `vertebrae_pp`, `lung_vessels`) | Apache-2.0 (open tasks only) | Optional `[ai]` extra; `--fast` ≈ 1–2 min CPU. Licensed/NC tasks disabled. Weights downloaded on first use, never bundled. |
| Classical fallback (no AI deps) | HU thresholds (bone/skin/lung/air), Otsu, marching cubes | — | Always available, small install. |
| Vessels (TOF-MRA / CTA) | Top-hat + hysteresis + tubularity filters (prototype) | — | Proven on prototype data. |
| Browser reference (future) | **brainchop** (MIT, tfjs), **NiiVue** (BSD-2), Cornerstone3D (MIT), itk-wasm (Apache-2), onnxruntime-web (MIT) | permissive | For a later web/zero-install mode. |

**Atlases to avoid bundling:** FSL-Juelich/JHU (FSL non-commercial), Brainnetome (NC), Julich-Brain (likely NC-SA), DK from FreeSurfer (conflicting licenses — get DK via SynthSeg output instead).

**Codecs (permissive set):** pydicom + `python-gdcm` + `pylibjpeg-openjpeg` + `pylibjpeg-rle`. **Avoid `pylibjpeg-libjpeg` (GPL-3)** to keep the core permissive.

### X-ray → 3D: honest position
- Single/biplanar X-ray→CT deep models (X2CT-GAN, DX2CT, DiffuX2CT, AXON) are trained on synthetic DRRs, hallucinate anatomy, have unclear licenses, and are not clinically validated.
- **v1:** 2D diagnostic-style viewer + optional 2D anatomical overlays (TorchXRayVision lung/heart, Apache-2.0 **[unverified]**) + a **"relief" view clearly labelled "height = brightness, not anatomy"** + placement on a generic 3D body template showing *where* the X-ray was taken.
- Biplanar/SSM reconstruction and X-ray→CT only as clearly-flagged **experimental** plugins later.

### De-identification
- DICOM PS3.15 Annex E Basic Profile (+ Retain Longitudinal Temporal w/ Modified Dates, Clean Descriptors), consistent UID remap, strip filenames/paths, flag BurnedInAnnotation / US / SC for pixel masking.
- Libraries: pydicom primitives, **dicognito** (MIT) for headers; deid-style pixel masks.
- Used for: exports/sharing, optional AI-helper payloads, bug reports. The local viewer itself can show the patient's own name (it's their data).

---

## 3. Packaging, distribution, security

**Install (non-technical users, Win/macOS/Linux):**
- **Tier A (v1):** one-line `install.ps1` / `install.sh` → installs **uv** (pinned) → `uv tool install --python 3.12 git+https://github.com/vkpriyesh/medmereport@vX.Y.Z` → desktop shortcut that starts engine + opens browser. No admin, no system Python.
- Torch only in optional `[ai]` extra pinned to the PyTorch **CPU** index (`explicit = true` + `[tool.uv.sources]`); prefer **ONNX Runtime** models (~15–50 MB runtime). Lockfile + 3-OS CI (TotalSegmentator torch-pin breakage is a known pain).
- Model weights: first-run download into user data dir + offline bundle zip option.
- **Tier B (later):** Tauri v2 desktop app with the engine as a PyInstaller **sidecar** (or Electron if WebKitGTK/WebGL issues). Mobile = viewer-only.
- Web service later = same engine + OIDC auth + job queue (brings DPDP/HIPAA obligations). Browser-only WASM = light viewer mode only.

**Localhost security checklist** (incidents: Zoom CVE-2019-13450, Ollama DNS-rebinding CVE-2024-28224, Starlette BadHost CVE-2026-48710 → pin `starlette>=1.0.1`):
- Bind `127.0.0.1` only, random free port; `TrustedHostMiddleware` allow-list.
- 256-bit per-launch token passed via URL **fragment** → exchanged for HttpOnly SameSite=Strict cookie.
- Strict `Origin` check on every request incl. SSE/WebSocket; **no CORS**.
- CSP `default-src 'self'; connect-src 'self'; frame-ancestors 'none'`; `Referrer-Policy: no-referrer`.
- All JS/fonts/wasm vendored; **zero runtime network calls**; CI test fails on any outbound connection.
- Per-session temp dir (0700), wiped on exit and on next start; passwords in memory only (bytearray, zeroed), never in logs/argv; PHI-free logs. Recommend full-disk encryption (SSD overwrite isn't reliable).

**Optional AI helpers (opt-in, off by default):**
- Local first: **Ollama** (`127.0.0.1:11434`, require ≥0.1.29), 3–8B model on CPU.
- Cloud CLIs if installed: `claude -p --output-format json` (no tools), `codex exec --sandbox read-only --json`, `gemini -p … --output-format json` (detect Gemini vs Antigravity CLI). Subprocess argv list, no shell, timeout, empty scratch cwd, prompt via stdin.
- Payload = fixed schema of **derived numbers/labels only** (volumes, structure names, HU stats) → deny-list + PHI regex scan → user previews exact text → consent toggle labelled **"Cloud AI — data leaves this computer"**. Output rendered as plain text, never executed.
- The tool must be **fully functional with no AI at all**.

**Frontend:** Vite + TypeScript + **Svelte 5** + three.js, self-hosted fonts, i18n from day one (English + Hindi first), Web Workers for mesh parsing. Engine API: REST + **SSE** job events, OpenAPI → generated TS client so desktop/web share one contract.

---

## 4. Lessons from the prototype (keep / fix)

Keep: fused multi-plane T1 → 1 mm volume; patient-surface + atlas carving into ~100 regions; split hemispheres/cerebellum/brainstem; inner deep-structure meshes; per-region stats (volume, ADC, FLAIR/T2 ratio, asymmetry) with explicit disclaimers; region thumbnails "on your scan"; vessel extraction; 2D viewer with W/L, measure, hover-to-name labels, localizer line, synced panes; Learn mode + tour + quiz; GLB output.

Fix:
- **Transform direction bug**: SimpleITK `Resample` needs output→input (patient→atlas) transform. Encode as a typed helper + unit test with a synthetic shifted phantom.
- Morphological skull strip was fragile → SynthSeg mask, with volume sanity checks (flag brain volume outside 900–1800 cm³).
- Vessel junk (scalp fat, slab edges) → anatomical mask + white top-hat (separable box, not ball: 25 min → 1.5 min) + cross-section/vertical-extent filters.
- Long CPU steps need progress events + cancellation; never run unbounded without progress.
- Never `pip install` into the user's global Python; always isolated env.
- nilearn's MNI "brain mask" is generous (~1,880 cm³) — never report it as brain volume; use tissue voxels.
- Browser caching during dev → content-hashed asset filenames.
