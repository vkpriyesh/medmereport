# Changelog

All notable changes to medmereport. Versions follow [Semantic Versioning](https://semver.org/); while the version starts with 0, any release may change behaviour.

## [0.1.0] - 2026-11-22

First public preview. For education and curiosity, not diagnosis.

### Works
- **Install with one pasted line** on Windows (PowerShell 5.1+), macOS and Linux: no admin rights, git or system Python needed. Adds a Start-menu/desktop shortcut (Windows), `~/Applications/medmereport.command` (macOS) or an app-menu entry (Linux). Re-running upgrades; matching uninstall scripts. The release wheel contains the built UI, so neither Node nor git is required.
- **Import** of the formats hospitals and diagnostic centres hand out: DICOMDIR discs (the viewer `.exe` is never run), encrypted DcmBurner `burn.enc` and RadiAnt `dcmdata.zip` discs (with your password, decrypted in memory), ZIP / 7z archives and plain folders of DICOM files, and X-ray images as JPEG / PNG / PDF. Archives are extracted with zip-slip, size and file-count limits.
- **2D scan viewer:** scroll through slices, contrast, zoom, measurements in mm, and a sagittal (side) view.
- **3D models built from your own scans:** brain regions from MRI (after a one-time model download of about 340 MB, offered inside the app with consent, checksums and pinned sources), bones and organs from body CT, spine from spine MRI, and arteries from angiography (TOF). Click any part for its card; My Scan mode shows sizes, left/right comparison and signal values with plain-language caveats.
- **Learn mode** in the 3D viewer: what each part does, a guided tour and a quiz on your model. (The standalone Learn page with a demo model, for use without any scans, is not finished yet.)
- **Languages:** English and Hindi (हिन्दी).
- Everything runs locally on `127.0.0.1` behind a one-time key; no analytics, no accounts, no uploads. `medmereport doctor`, `purge` and `diagnose` (anonymous disc-structure report) commands.

### Not yet
- X-ray outlines and the "relief" view (X-rays are shown in the 2D viewer only).
- Optional AI explanations (Ollama / CLI helpers): planned, off by default, not in this release.
- The optional TotalSegmentator backend (`medmereport[totalseg]`) is untested on real scans.

[0.1.0]: https://github.com/vkpriyesh/medmereport/releases/tag/v0.1.0
