# medmereport · see inside your scans

**medmereport** turns the scans you receive from a hospital or diagnostic centre into an interactive 3D model and a full scan viewer, right in your browser. It runs **entirely on your own computer**: no account, no upload, no tracking.

> ⚠️ **medmereport is for education and curiosity, not diagnosis.** It does not detect disease, and its measurements are automated estimates. Your radiologist's report is the authority on your scans.

> 🚧 **Status: planning.** This README describes the intended v1 experience. See [PLAN.md](PLAN.md) and [TASKS.md](TASKS.md).

---

## What you can give it
| You received… | medmereport handles it |
|---|---|
| A CD/DVD/USB with a `DICOMDIR` and a viewer `.exe` | ✅ reads the DICOM directly and never runs the `.exe` |
| An **encrypted** disc (e.g. `burn.enc` + `decrypt_win.exe`, or `dcmdata.zip`) | ✅ asks for **your** disc password, decrypts in memory |
| A ZIP / folder of DICOM files from a portal or link | ✅ |
| X-ray as DICOM, JPEG, PNG, a phone photo of the film, or a PDF | ✅ shown in 2D with overlays (see the X-ray note) |

## What you get
- **3D model of your anatomy** built from *your* scans: brain regions from MRI, bones/organs from CT, arteries from angiography. Click any part.
- **My Scan mode:** per-region size, left/right comparison and signal values, each with plain-language caveats, plus where that region appears on your images.
- **Learn mode:** what each part does, guided tours and quizzes.
- **Full scan viewer:** scroll, contrast, zoom, measure in mm, side-by-side comparison, and a dedicated sagittal (side) view.
- Works offline. English and हिन्दी.

**X-ray note:** a single X-ray is a 2D shadow and cannot be honestly turned into true 3D. medmereport shows it in 2D with optional outlines and a "relief" view clearly marked as *not* real anatomy.

---

## Install (5–10 minutes)

**Windows** (PowerShell):
```powershell
irm https://raw.githubusercontent.com/vkpriyesh/medmereport/main/scripts/install.ps1 | iex
```
**macOS / Linux** (Terminal):
```bash
curl -LsSf https://raw.githubusercontent.com/vkpriyesh/medmereport/main/scripts/install.sh | sh
```
The installer:
- downloads [uv](https://docs.astral.sh/uv/), which brings its own Python, so there's nothing to set up and no admin rights needed;
- installs medmereport in an isolated environment that doesn't touch your system;
- adds an **medmereport** shortcut to your desktop or Start menu.

<details><summary>Prefer to do it by hand?</summary>

```bash
# install uv first: https://docs.astral.sh/uv/getting-started/installation/
uv tool install --python 3.12 git+https://github.com/vkpriyesh/medmereport@v1.0.0
medmereport serve
```
Optional AI-model extras (better CT/brain labels, ~300 MB): `uv tool install "medmereport[ai] @ git+https://github.com/vkpriyesh/medmereport@v1.0.0"` then `medmereport models pull`.
</details>

**Requirements:** Windows 10/11, macOS 12+, or Linux; 8 GB RAM (16 GB recommended); 5 GB free disk; any modern browser. No GPU needed.

## First run
1. Double-click **medmereport** (or run `medmereport serve`). Your browser opens a private local page.
2. Drag in your disc folder or ZIP, or click **Choose folder**.
3. If the disc is encrypted, type the password the hospital gave you. It is never saved.
4. Wait a few minutes while medmereport builds your model; you'll see live progress.
5. Explore: **3D**, **Scans**, **Learn**.

When you close medmereport, temporary files are deleted. Your studies are kept only if you tick **"Remember this study"**. Run `medmereport purge` to erase everything.

## Privacy, in plain words
- medmereport's server listens only on your own computer (`127.0.0.1`) and is protected by a one-time key.
- It makes **no internet connections** while working. The only exception is the optional, one-time AI-model download you choose to run.
- No analytics, no crash reporting, no accounts.
- Turning on **full-disk encryption** (BitLocker / FileVault) is the best protection for any medical files on your laptop.

### Optional AI explanations (off by default)
If you have **Ollama** installed, medmereport can explain regions in plain language **fully offline**. If you have **Claude Code, Codex CLI or Gemini CLI**, you can opt in to use them too. These send text to that company's cloud, so medmereport:
- sends only anonymous numbers and anatomy names, never images, names, IDs or dates;
- shows you the **exact text** before anything is sent;
- asks for your consent every time.

## Troubleshooting
| Problem | Fix |
|---|---|
| "Wrong password" | Check the hospital slip; passwords are case-sensitive. |
| "No scans found" | Make sure you selected the whole disc folder; run `medmereport doctor`. |
| Slow processing | Close other apps; 3D building can take 3–8 minutes on older laptops. |
| Page won't open | Run `medmereport serve` in a terminal and open the link it prints. |
| Unknown disc format | Run `medmereport diagnose <folder>`. It creates an anonymous file-structure report (no images, no names) you can attach to a GitHub issue. |

## For developers
```bash
git clone https://github.com/vkpriyesh/medmereport && cd medmereport
cd engine && uv sync --all-extras && uv run medmereport serve --dev
cd ../web && npm ci && npm run dev
```
Architecture: [PLAN.md](PLAN.md) · Research: [docs/RESEARCH.md](docs/RESEARCH.md) · Work board: [TASKS.md](TASKS.md).
**Never commit real patient data.** Tests use synthetic fixtures (`uv run pytest --gen-fixtures`).

## Licences & credits
Code: Apache-2.0. Brain atlas: Harvard-Oxford (CC BY-SA 4.0, FMRIB/Harvard CMA). Template: MNI ICBM152 2009c (© McConnell Brain Imaging Centre). Segmentation: SynthSeg (Apache-2.0), TotalSegmentator open tasks (Apache-2.0). Full list in `NOTICE`.
