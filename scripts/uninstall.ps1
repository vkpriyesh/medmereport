# medmereport uninstaller for Windows (PowerShell 5.1 or later). No admin rights needed.
#
#   powershell -ExecutionPolicy ByPass -c "irm https://raw.githubusercontent.com/vkpriyesh/medmereport/v0.1.0/scripts/uninstall.ps1 | iex"
#
# Removes the shortcuts and the medmereport program. Your saved studies and downloaded models are
# kept unless you agree to delete them (you are asked), or you pass -Purge / set MEDMEREPORT_PURGE=1.
# uv itself and its Python are left in place (other programs may use them).
# Set MEDMEREPORT_PURGE=0 to keep the data without being asked.
# MEDMEREPORT_SHORTCUT_DIR has the same meaning as for install.ps1.

param([switch]$Purge)

function Write-Step([string]$msg) { Write-Host "==> $msg" -ForegroundColor Cyan }

function Find-Uv {
    $dirs = @()
    foreach ($v in @($env:UV_UNMANAGED_INSTALL, $env:UV_INSTALL_DIR)) {
        if ($v) { $dirs += $v; $dirs += (Join-Path $v 'bin') }
    }
    $cmd = Get-Command uv -ErrorAction SilentlyContinue
    if ($cmd) { $dirs += (Split-Path -Parent $cmd.Source) }
    if ($env:XDG_BIN_HOME) { $dirs += $env:XDG_BIN_HOME }
    $dirs += (Join-Path $env:USERPROFILE '.local\bin')
    $dirs += (Join-Path $env:USERPROFILE '.cargo\bin')
    foreach ($d in $dirs) {
        $p = Join-Path $d 'uv.exe'
        if (Test-Path -LiteralPath $p) { return $p }
    }
    return $null
}

function Get-ShortcutPath {
    if ($env:MEDMEREPORT_SHORTCUT_DIR) {
        return @((Join-Path $env:MEDMEREPORT_SHORTCUT_DIR 'Start Menu\medmereport.lnk'),
                 (Join-Path $env:MEDMEREPORT_SHORTCUT_DIR 'Desktop\medmereport.lnk'))
    }
    return @((Join-Path ([Environment]::GetFolderPath('Programs')) 'medmereport.lnk'),
             (Join-Path ([Environment]::GetFolderPath('Desktop')) 'medmereport.lnk'))
}

function Test-WantPurge {
    if ($Purge -or $env:MEDMEREPORT_PURGE -eq '1') { return $true }
    if ($env:MEDMEREPORT_PURGE -eq '0' -or $env:CI -or -not [Environment]::UserInteractive) { return $false }
    try {
        $ans = Read-Host 'Also delete your saved studies and downloaded models from this computer? [y/N]'
    } catch {
        return $false
    }
    return ($ans.Trim().ToLower() -in @('y', 'yes'))
}

function Uninstall-Medmereport {
    $ErrorActionPreference = 'Stop'
    $uv = Find-Uv
    $exe = $null
    if ($uv) {
        $bin = (& $uv tool dir --bin | Select-Object -Last 1).Trim()
        $candidate = Join-Path $bin 'medmereport.exe'
        if (Test-Path -LiteralPath $candidate) { $exe = $candidate }
    }

    $purged = $false
    if ($exe -and (Test-WantPurge)) {
        Write-Step 'Deleting saved studies, temporary files and downloaded models'
        & $exe purge --yes
        if ($LASTEXITCODE -ne 0) { throw 'Deleting your data failed; nothing else was removed. Close medmereport if it is running and try again.' }
        $purged = $true
    }

    Write-Step 'Removing shortcuts'
    foreach ($s in Get-ShortcutPath) {
        if (Test-Path -LiteralPath $s) { Remove-Item -LiteralPath $s -Force; Write-Host "    removed $s" }
    }

    if ($uv) {
        Write-Step 'Removing the medmereport program'
        $list = (& $uv tool list) -join "`n"
        if ($list -match '(?m)^medmereport ') {
            & $uv tool uninstall medmereport
            if ($LASTEXITCODE -ne 0) { throw 'uv could not remove medmereport. Close medmereport if it is running and try again.' }
        } else {
            Write-Host '    medmereport is not installed (nothing to remove).'
        }
    } else {
        Write-Host '    uv was not found, so there is no medmereport program to remove.'
    }

    Write-Host ''
    Write-Host '  medmereport has been removed.' -ForegroundColor Green
    if (-not $purged) {
        $data = Join-Path $env:LOCALAPPDATA 'medmereport'
        if ($env:MEDMEREPORT_HOME) { $data = $env:MEDMEREPORT_HOME }
        if (Test-Path -LiteralPath $data) { Write-Host "  Any data you kept is in $data (delete that folder to remove it)." }
    }
    Write-Host ''
}

try {
    Uninstall-Medmereport
} catch {
    Write-Host ''
    Write-Host "  Uninstall stopped: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host ''
    if ($PSCommandPath) { exit 1 }
}
