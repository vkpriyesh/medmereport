# medmereport installer for Windows (PowerShell 5.1 or later). No admin rights needed.
#
#   powershell -ExecutionPolicy ByPass -c "irm https://raw.githubusercontent.com/vkpriyesh/medmereport/v0.1.0/scripts/install.ps1 | iex"
#
# What it does (all inside your user profile):
#   1. installs uv (a small Python package manager by Astral) if it is not already installed,
#   2. installs medmereport with its own private Python 3.12 (your system Python is not touched),
#   3. adds a "medmereport" shortcut to the Start menu and the desktop.
# Re-running it upgrades or repairs the install. It downloads only uv, Python and medmereport;
# it sends nothing about you or your computer. Models are downloaded later, from inside the app.
#
# Options (environment variables, because `irm | iex` cannot pass arguments):
#   MEDMEREPORT_VERSION=0.1.0       install another release
#   MEDMEREPORT_WHEEL=C:\path\x.whl install a local wheel file instead of downloading (used by CI)
#   MEDMEREPORT_WITH_MODELS=1       also download the brain models now (about 360 MB)
#   MEDMEREPORT_SHORTCUT_DIR=C:\dir put both shortcuts in this folder instead (testing)
#   MEDMEREPORT_NO_MODIFY_PATH=1    do not change the user PATH (testing)
#   MEDMEREPORT_INSTALL_UV=1        install the pinned uv even if uv is already present (testing)
# uv's own variables (UV_TOOL_DIR, UV_TOOL_BIN_DIR, UV_PYTHON_INSTALL_DIR, UV_INSTALL_DIR,
# UV_UNMANAGED_INSTALL) are respected.
# When run as a file, `-WithModels` is the same as MEDMEREPORT_WITH_MODELS=1.

param([switch]$WithModels)

$MEDMEREPORT_DEFAULT_VERSION = '0.1.0'
$UV_PINNED_VERSION = '0.13.1'
$REPO = 'vkpriyesh/medmereport'

function Write-Step([string]$msg) { Write-Host "==> $msg" -ForegroundColor Cyan }

function Find-Uv([switch]$AnyLocation) {
    # Explicit uv locations first, then (unless a fresh uv is forced) PATH and uv's default folders.
    $dirs = @()
    foreach ($v in @($env:UV_UNMANAGED_INSTALL, $env:UV_INSTALL_DIR)) {
        if ($v) { $dirs += $v; $dirs += (Join-Path $v 'bin') }
    }
    $searchDefaults = $AnyLocation -or -not $env:MEDMEREPORT_INSTALL_UV
    if ($searchDefaults) {
        $cmd = Get-Command uv -ErrorAction SilentlyContinue
        if ($cmd) { $dirs += (Split-Path -Parent $cmd.Source) }
        if ($env:XDG_BIN_HOME) { $dirs += $env:XDG_BIN_HOME }
        $dirs += (Join-Path $env:USERPROFILE '.local\bin')
        $dirs += (Join-Path $env:USERPROFILE '.cargo\bin')
    }
    foreach ($d in $dirs) {
        $p = Join-Path $d 'uv.exe'
        if (Test-Path -LiteralPath $p) { return $p }
    }
    return $null
}

function Install-Uv {
    Write-Step "Installing uv $UV_PINNED_VERSION (from astral.sh, into your user profile)"
    $url = "https://astral.sh/uv/$UV_PINNED_VERSION/install.ps1"
    $saved = $env:UV_NO_MODIFY_PATH
    if ($env:MEDMEREPORT_NO_MODIFY_PATH) { $env:UV_NO_MODIFY_PATH = '1' }
    try {
        # A child PowerShell keeps the uv installer out of this session.
        & powershell -NoProfile -ExecutionPolicy Bypass -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.ServicePointManager]::SecurityProtocol -bor 3072; irm '$url' | iex" | Out-Host
        if ($LASTEXITCODE -ne 0) { throw "The uv installer failed (exit code $LASTEXITCODE)." }
    } finally {
        $env:UV_NO_MODIFY_PATH = $saved
    }
    $uv = Find-Uv -AnyLocation
    if (-not $uv) { throw "uv was installed but could not be found. Close this window, open a new PowerShell and run the installer again." }
    return $uv
}

function Save-Shortcut([string]$path, [string]$exe) {
    $dir = Split-Path -Parent $path
    if (-not (Test-Path -LiteralPath $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
    $shell = New-Object -ComObject WScript.Shell
    $lnk = $shell.CreateShortcut($path)
    # cmd keeps the window open with the error message if the app fails to start.
    $lnk.TargetPath = Join-Path $env:SystemRoot 'System32\cmd.exe'
    $lnk.Arguments = "/c `"`"$exe`" serve || pause`""
    $lnk.WorkingDirectory = $env:USERPROFILE
    $lnk.Description = 'medmereport: see inside your scans, privately on this computer'
    $lnk.WindowStyle = 1
    $lnk.Save()
}

function Get-ShortcutPath {
    if ($env:MEDMEREPORT_SHORTCUT_DIR) {
        return @((Join-Path $env:MEDMEREPORT_SHORTCUT_DIR 'Start Menu\medmereport.lnk'),
                 (Join-Path $env:MEDMEREPORT_SHORTCUT_DIR 'Desktop\medmereport.lnk'))
    }
    return @((Join-Path ([Environment]::GetFolderPath('Programs')) 'medmereport.lnk'),
             (Join-Path ([Environment]::GetFolderPath('Desktop')) 'medmereport.lnk'))
}

function Install-Medmereport {
    $ErrorActionPreference = 'Stop'
    [Net.ServicePointManager]::SecurityProtocol = [Net.ServicePointManager]::SecurityProtocol -bor 3072  # TLS 1.2
    if ([Environment]::OSVersion.Platform -ne 'Win32NT') { throw 'This installer is for Windows. On macOS or Linux use install.sh.' }
    if (-not [Environment]::Is64BitOperatingSystem) { throw 'medmereport needs 64-bit Windows.' }

    $version = $MEDMEREPORT_DEFAULT_VERSION
    if ($env:MEDMEREPORT_VERSION) { $version = $env:MEDMEREPORT_VERSION.TrimStart('v') }
    if ($env:MEDMEREPORT_WHEEL) {
        $wheel = (Resolve-Path -LiteralPath $env:MEDMEREPORT_WHEEL -ErrorAction SilentlyContinue)
        if (-not $wheel) { throw "MEDMEREPORT_WHEEL points to a file that does not exist: $($env:MEDMEREPORT_WHEEL)" }
        $source = ([System.Uri]$wheel.Path).AbsoluteUri
        Write-Step "Installing medmereport from the local file $($wheel.Path)"
    } else {
        $source = "https://github.com/$REPO/releases/download/v$version/medmereport-$version-py3-none-any.whl"
        Write-Step "Installing medmereport $version"
    }

    $uv = Find-Uv
    if ($uv) { Write-Step "Using uv at $uv" } else { $uv = Install-Uv }

    # Always a uv-managed Python 3.12, never the system Python.
    $savedPref = $env:UV_PYTHON_PREFERENCE
    $env:UV_PYTHON_PREFERENCE = 'only-managed'
    try {
        & $uv tool install --python 3.12 --force --reinstall-package medmereport "medmereport[ai] @ $source"
    } finally {
        $env:UV_PYTHON_PREFERENCE = $savedPref  # do not leave it set in the user's window (irm | iex)
    }
    if ($LASTEXITCODE -ne 0) {
        throw "Installing medmereport failed (uv exit code $LASTEXITCODE). Check your internet connection and run the installer again. If it keeps failing, please open an issue at https://github.com/$REPO/issues with the messages above."
    }

    $bin = (& $uv tool dir --bin | Select-Object -Last 1).Trim()
    $exe = Join-Path $bin 'medmereport.exe'
    if (-not (Test-Path -LiteralPath $exe)) { throw "medmereport was installed but $exe is missing." }
    if (($env:Path -split ';') -notcontains $bin) { $env:Path = "$bin;$env:Path" }
    if ($env:MEDMEREPORT_NO_MODIFY_PATH) {
        Write-Step "Not changing PATH (MEDMEREPORT_NO_MODIFY_PATH is set)"
    } else {
        # Adds the tool folder to the user PATH (no admin); a no-op when it is already there.
        & $uv tool update-shell
        if ($LASTEXITCODE -ne 0) { Write-Host '    (could not update PATH; the shortcuts still work)' }
    }

    $installed = (& $exe --version)
    if ($LASTEXITCODE -ne 0) { throw "medmereport was installed but does not start. Run `"$exe doctor`" to see why." }

    Write-Step 'Creating shortcuts'
    $shortcuts = Get-ShortcutPath
    foreach ($s in $shortcuts) { Save-Shortcut -path $s -exe $exe; Write-Host "    $s" }

    if ($WithModels -or $env:MEDMEREPORT_WITH_MODELS) {
        Write-Step 'Downloading the brain models (about 360 MB)'
        foreach ($m in @('atlas-ho', 'synthseg')) {
            & $exe models pull $m
            if ($LASTEXITCODE -ne 0) { throw "Downloading the model '$m' failed. medmereport itself is installed; you can download models later from inside the app." }
        }
    }

    Write-Host ''
    Write-Host "  $installed is installed." -ForegroundColor Green
    Write-Host ''
    Write-Host '  Next steps:'
    Write-Host '    1. Open "medmereport" from the Start menu or your desktop.'
    Write-Host '       A black window opens (keep it open) and your browser shows the app.'
    Write-Host '    2. When you are done, press Ctrl+C in the black window (or close it).'
    Write-Host ''
    Write-Host '  Run this installer again at any time to upgrade.'
    Write-Host "  To remove medmereport: irm https://raw.githubusercontent.com/$REPO/v$MEDMEREPORT_DEFAULT_VERSION/scripts/uninstall.ps1 | iex"
    Write-Host ''
}

try {
    Install-Medmereport
} catch {
    Write-Host ''
    Write-Host "  medmereport was not installed: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host ''
    # Exit with an error code when run as a file (CI); never close an interactive window (irm | iex).
    if ($PSCommandPath) { exit 1 }
}
