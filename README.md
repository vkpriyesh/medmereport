# medmereport · see inside your scans

**medmereport** turns the scans you receive from a hospital or diagnostic centre into an interactive 3D model and a full scan viewer, right in your browser. It runs **entirely on your own computer**: no account, no upload, no tracking.

> ⚠️ **medmereport is for education and curiosity, not diagnosis.** It does not detect disease, and its measurements are automated estimates. Your radiologist's report is the authority on your scans.

> 🚧 **Status: early preview (0.1, not yet a stable release).** Working today: importing discs (DICOMDIR, encrypted DcmBurner `burn.enc`, RadiAnt `dcmdata.zip`, ZIP/7z/folders, images/PDF), the 2D scan viewer, and 3D models from brain MRI, body CT, spine MRI and angiography. **Not yet:** X-ray overlays and relief view, optional AI explanations. Progress: [TASKS.md](TASKS.md).

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

## Install (about 5 minutes)
Paste **one line**. You do not need admin rights, git or Python: the installer brings everything it needs into your user folder and leaves your system Python alone. It downloads only uv (Astral's small Python installer), a private Python 3.12 and medmereport, and sends nothing about you.

**Windows:** open **PowerShell** (Start menu, type `PowerShell`) and paste:
```powershell
powershell -ExecutionPolicy ByPass -c "irm https://raw.githubusercontent.com/vkpriyesh/medmereport/v0.1.0/scripts/install.ps1 | iex"
```

**macOS / Linux:** open **Terminal** and paste:
```bash
curl -LsSf https://raw.githubusercontent.com/vkpriyesh/medmereport/v0.1.0/scripts/install.sh | sh
```

Then start medmereport from the **medmereport** shortcut: Start menu or desktop on Windows, `~/Applications/medmereport.command` on macOS, your applications menu on Linux. A small terminal window opens (keep it open while you use the app) and your browser shows the app. You can also type `medmereport serve` in a new terminal.

**Brain MRI needs a one-time model download (about 360 MB).** CT, spine and angiography need nothing extra. To download the brain models, open a new terminal and run `medmereport models pull atlas-ho` and then `medmereport models pull synthseg`, or install with them in one go:
- Windows: `$env:MEDMEREPORT_WITH_MODELS=1; irm https://raw.githubusercontent.com/vkpriyesh/medmereport/v0.1.0/scripts/install.ps1 | iex`
- macOS / Linux: `curl -LsSf https://raw.githubusercontent.com/vkpriyesh/medmereport/v0.1.0/scripts/install.sh | sh -s -- --with-models`

**Update:** run the install line of the newest release again (see the [releases page](https://github.com/vkpriyesh/medmereport/releases)). It upgrades in place and keeps your studies. `uv tool upgrade medmereport` does not move to a new release, because each install is pinned to one release file.

**Uninstall:** this removes the shortcuts and the program. You are asked whether to also delete your saved studies and downloaded models.
```powershell
powershell -ExecutionPolicy ByPass -c "irm https://raw.githubusercontent.com/vkpriyesh/medmereport/v0.1.0/scripts/uninstall.ps1 | iex"
```
```bash
curl -LsSf https://raw.githubusercontent.com/vkpriyesh/medmereport/v0.1.0/scripts/uninstall.sh | sh
```
To delete your data too without being asked: on Windows run `$env:MEDMEREPORT_PURGE=1; irm https://raw.githubusercontent.com/vkpriyesh/medmereport/v0.1.0/scripts/uninstall.ps1 | iex` (or `.\uninstall.ps1 -Purge` on a downloaded copy); on macOS / Linux end the line with `| sh -s -- --purge`.

<details>
<summary><b>Manual install</b> (if you prefer to see each step, or the script cannot run)</summary>

1. Install uv: Windows `powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"`, macOS / Linux `curl -LsSf https://astral.sh/uv/install.sh | sh`. Close and reopen the terminal.
2. Install medmereport from the release wheel (no git needed):
   ```bash
   uv tool install --python 3.12 "medmereport[ai] @ https://github.com/vkpriyesh/medmereport/releases/download/v0.1.0/medmereport-0.1.0-py3-none-any.whl"
   ```
3. Optional brain models: `medmereport models pull atlas-ho` and `medmereport models pull synthseg`.
4. Start it: `medmereport serve`.

Remove it with `medmereport purge` (only if you want your studies erased) and then `uv tool uninstall medmereport`.
</details>

**Windows warns about the script, or antivirus blocks it?** `-ExecutionPolicy ByPass` only applies to that one command; it does not change your system settings. Some antivirus programs flag any "download and run" command. You can read exactly what will run first: open the `install.ps1` link above in your browser. If your antivirus quarantines `uv.exe` or `medmereport.exe`, allow them (both live in `%USERPROFILE%\.local\bin`) or use the manual install above. On macOS, if Finder says `medmereport.command` cannot be opened, right-click it and choose **Open** once.

**Requirements:** Windows 10/11 (64-bit), macOS 12+, or Linux; 8 GB RAM (16 GB recommended); 2 GB free disk; Chrome, Edge, Firefox or Safari. No GPU needed.

## First run
1. Open the **medmereport** shortcut (or run `medmereport serve`). Your browser opens the app.
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
| "The selected method is not installed on this computer" (brain MRI) | Download the brain models (see Install: `medmereport models pull atlas-ho` and `medmereport models pull synthseg`). |
| `medmereport` not found after install | Close and reopen the terminal (the shortcut works either way), or run `uv tool update-shell`. |
| The shortcut window closes or shows an error | Run `medmereport doctor` in a terminal and include its output in a GitHub issue. Re-running the install line repairs most problems. |
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
