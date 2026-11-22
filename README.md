# medmereport · see inside your scans

**medmereport** turns the scans you receive from a hospital or diagnostic centre into an interactive 3D model and a full scan viewer, right in your browser. It runs **entirely on your own computer**: no account, no upload, no tracking.

> ⚠️ **medmereport is for education and curiosity, not diagnosis.** It does not detect disease, and its measurements are automated estimates. Your radiologist's report is the authority on your scans.

> 🚧 **Status: early preview (0.1, not yet a stable release).** Working today: importing discs (DICOMDIR, encrypted DcmBurner `burn.enc`, RadiAnt `dcmdata.zip`, ZIP/7z/folders, images/PDF), the 2D scan viewer, and 3D models from brain MRI, body CT, spine MRI and angiography. **Not yet:** one-click installers, X-ray overlays and relief view, optional AI explanations. Progress: [TASKS.md](TASKS.md).

---

## What you can give it
| You received… | medmereport handles it |
|---|---|
| A CD/DVD/USB with a `DICOMDIR` and a viewer `.exe` | ✅ reads the DICOM directly and never runs the `.exe` |
| An **encrypted** disc (e.g. `burn.enc` + `decrypt_win.exe`, or `dcmdata.zip`) | ✅ asks for **your** disc password, decrypts in memory |
| A ZIP / folder of DICOM files from a portal or link | ✅ |
| X-ray as DICOM, JPEG, PNG, a phone photo of the film, or a PDF | ✅ shown in the 2D viewer (outlines and relief view coming; see the X-ray note) |

## What you get
- **3D model of your anatomy** built from *your* scans: brain regions from MRI, bones/organs from CT, arteries from angiography. Click any part.
- **My Scan mode:** per-region size, left/right comparison and signal values, each with plain-language caveats, plus where that region appears on your images.
- **Learn mode:** what each part does, guided tours and quizzes.
- **Full scan viewer:** scroll, contrast, zoom, measure in mm, and a dedicated sagittal (side) view.
- Works offline. English and हिन्दी.

**X-ray note:** a single X-ray is a 2D shadow and cannot be honestly turned into true 3D. medmereport shows it in 2D with optional outlines and a "relief" view clearly marked as *not* real anatomy.

---

## Install (preview, about 10 minutes)
One-click installers are coming (see TASKS.md, T7.1). For now, use a terminal. Nothing needs admin rights, and your system Python is not touched.

**1. Install uv.** It brings its own Python.
- Windows (PowerShell): `powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"`
- macOS / Linux: `curl -LsSf https://astral.sh/uv/install.sh | sh`

Close and reopen the terminal afterwards.

**2. Install medmereport:**
```bash
uv tool install --python 3.12 "medmereport[ai] @ git+https://github.com/vkpriyesh/medmereport@main#subdirectory=engine"
```

**3. Download the brain models, once (about 360 MB).** This is the only time medmereport uses the internet.
```bash
medmereport models pull atlas-ho
medmereport models pull synthseg
```
CT, spine and angiography models need no download.

**4. Start it:**
```bash
medmereport serve
```
Your browser opens a private page on this computer. Keep the terminal open while you use it.

To update, run `uv tool upgrade medmereport`. To remove it, run `uv tool uninstall medmereport` and then `medmereport purge` beforehand if you want your stored studies erased too.

**Requirements:** Windows 10/11, macOS 12+, or Linux; 8 GB RAM (16 GB recommended); 2 GB free disk; Chrome, Edge, Firefox or Safari. No GPU needed.

## First run
1. Run `medmereport serve`. Your browser opens the app.
2. Click **Open scans** and choose your disc folder or ZIP (or paste its path).
3. If the disc is encrypted, type the password from the hospital slip. It is never saved. medmereport never runs the `.exe` on the disc.
4. On the study page, open the **scan viewer** or click **Build my 3D model**. A brain model takes 1–5 minutes; CT and spine take seconds to a minute.
5. Explore: click any part for its card, or switch to **Learn**.

Imported studies are kept in medmereport's own data folder on your computer until you run `medmereport purge`.

## Privacy, in plain words
- medmereport's server listens only on your own computer (`127.0.0.1`) and is protected by a one-time key.
- It makes **no internet connections** while working. The only exception is the optional, one-time AI-model download you choose to run.
- No analytics, no crash reporting, no accounts.
- Turning on **full-disk encryption** (BitLocker / FileVault) is the best protection for any medical files on your laptop.

### Optional AI explanations (planned, off by default)
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
| "The selected method is not installed on this computer" (brain MRI) | Run step 3 of the install (`medmereport models pull atlas-ho`). |
| `medmereport` not found after install | Close and reopen the terminal, or run `uv tool update-shell`. |
| Page won't open | Run `medmereport serve` in a terminal and open the link it prints. |
| Unknown disc format | Run `medmereport diagnose <folder>`. It creates an anonymous file-structure report (no images, no names) you can attach to a GitHub issue. |

## For developers
```bash
git clone https://github.com/vkpriyesh/medmereport && cd medmereport
cd engine && uv sync --extra ai && uv run medmereport serve --dev --port 8765
cd ../web && npm ci && npm run dev
```
Architecture: [PLAN.md](PLAN.md) · Research: [docs/RESEARCH.md](docs/RESEARCH.md) · Work board: [TASKS.md](TASKS.md).
**Never commit real patient data.** Tests use synthetic fixtures only (`uv run pytest`).

## Licences & credits
Code: Apache-2.0. Brain atlas: Harvard-Oxford (CC BY-SA 4.0, FMRIB/Harvard CMA). Template: MNI ICBM152 2009c (© McConnell Brain Imaging Centre). Segmentation: SynthSeg (Apache-2.0), TotalSegmentator open tasks (Apache-2.0). Full list in `NOTICE`.
