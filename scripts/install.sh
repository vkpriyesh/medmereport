#!/bin/sh
# medmereport installer for macOS and Linux. No admin rights (sudo) needed.
#
#   curl -LsSf https://raw.githubusercontent.com/vkpriyesh/medmereport/v0.1.0/scripts/install.sh | sh
#
# What it does (all inside your home folder):
#   1. installs uv (a small Python package manager by Astral) if it is not already installed,
#   2. installs medmereport with its own private Python 3.12 (your system Python is not touched),
#   3. adds a launcher: ~/Applications/medmereport.command on macOS, an app-menu entry on Linux.
# Re-running it upgrades or repairs the install. It downloads only uv, Python and medmereport;
# it sends nothing about you or your computer. Models are downloaded later, from inside the app.
#
# Options:
#   --with-models                   also download the brain models now (about 360 MB)
#                                   (with curl | sh: ... | sh -s -- --with-models)
# Environment variables:
#   MEDMEREPORT_VERSION=0.1.0       install another release
#   MEDMEREPORT_WHEEL=/path/x.whl   install a local wheel file instead of downloading (used by CI)
#   MEDMEREPORT_WITH_MODELS=1       same as --with-models
#   MEDMEREPORT_SHORTCUT_DIR=/dir   put the launcher in this folder instead (testing)
#   MEDMEREPORT_NO_MODIFY_PATH=1    do not change shell startup files (testing)
#   MEDMEREPORT_INSTALL_UV=1        install the pinned uv even if uv is already present (testing)
# uv's own variables (UV_TOOL_DIR, UV_TOOL_BIN_DIR, UV_PYTHON_INSTALL_DIR, UV_INSTALL_DIR,
# UV_UNMANAGED_INSTALL) are respected.

set -eu

MEDMEREPORT_DEFAULT_VERSION="0.1.0"
UV_PINNED_VERSION="0.13.1"
REPO="vkpriyesh/medmereport"

step() { printf '==> %s\n' "$*"; }
die() {
    printf '\n  medmereport was not installed: %s\n\n' "$*" >&2
    exit 1
}

with_models="${MEDMEREPORT_WITH_MODELS:-}"
for arg in "$@"; do
    case "$arg" in
        --with-models) with_models=1 ;;
        -h | --help)
            echo "Usage: install.sh [--with-models]"
            echo "See the comments at the top of this script for environment variables."
            exit 0
            ;;
        *) die "unknown option '$arg' (try --help)" ;;
    esac
done

os="$(uname -s)"
case "$os" in
    Darwin | Linux) ;;
    *) die "this installer is for macOS and Linux (found $os). On Windows use install.ps1." ;;
esac

download() { # url -> stdout
    if command -v curl >/dev/null 2>&1; then
        curl --proto '=https' --tlsv1.2 -LsSf "$1"
    elif command -v wget >/dev/null 2>&1; then
        wget --https-only -qO- "$1"
    else
        die "neither curl nor wget is available; please install one of them first."
    fi
}

find_uv() { # [any] -> path of uv, or nothing
    for d in "${UV_UNMANAGED_INSTALL:-}" "${UV_INSTALL_DIR:-}" "${UV_INSTALL_DIR:+$UV_INSTALL_DIR/bin}"; do
        if [ -n "$d" ] && [ -x "$d/uv" ]; then
            printf '%s\n' "$d/uv"
            return 0
        fi
    done
    if [ -n "${MEDMEREPORT_INSTALL_UV:-}" ] && [ "${1:-}" != "any" ]; then
        return 0
    fi
    if command -v uv >/dev/null 2>&1; then
        command -v uv
        return 0
    fi
    for d in "${XDG_BIN_HOME:-}" "$HOME/.local/bin" "$HOME/.cargo/bin"; do
        if [ -n "$d" ] && [ -x "$d/uv" ]; then
            printf '%s\n' "$d/uv"
            return 0
        fi
    done
}

install_uv() {
    step "Installing uv $UV_PINNED_VERSION (from astral.sh, into your home folder)"
    script="$(download "https://astral.sh/uv/$UV_PINNED_VERSION/install.sh")" || die "could not download the uv installer. Check your internet connection and try again."
    if [ -n "${MEDMEREPORT_NO_MODIFY_PATH:-}" ]; then
        printf '%s\n' "$script" | UV_NO_MODIFY_PATH=1 sh || die "the uv installer failed (see the messages above)."
    else
        printf '%s\n' "$script" | sh || die "the uv installer failed (see the messages above)."
    fi
}

version="${MEDMEREPORT_VERSION:-$MEDMEREPORT_DEFAULT_VERSION}"
version="${version#v}"
if [ -n "${MEDMEREPORT_WHEEL:-}" ]; then
    [ -f "$MEDMEREPORT_WHEEL" ] || die "MEDMEREPORT_WHEEL points to a file that does not exist: $MEDMEREPORT_WHEEL"
    wheel_dir="$(cd "$(dirname "$MEDMEREPORT_WHEEL")" && pwd)"
    source="file://$wheel_dir/$(basename "$MEDMEREPORT_WHEEL")"
    step "Installing medmereport from the local file $wheel_dir/$(basename "$MEDMEREPORT_WHEEL")"
else
    source="https://github.com/$REPO/releases/download/v$version/medmereport-$version-py3-none-any.whl"
    step "Installing medmereport $version"
fi

uv="$(find_uv)"
if [ -n "$uv" ]; then
    step "Using uv at $uv"
else
    install_uv
    uv="$(find_uv any)"
    [ -n "$uv" ] || die "uv was installed but could not be found. Open a new terminal and run the installer again."
fi

# Always a uv-managed Python 3.12, never the system Python.
UV_PYTHON_PREFERENCE=only-managed "$uv" tool install --python 3.12 --force --reinstall-package medmereport "medmereport[ai] @ $source" ||
    die "installing medmereport failed (see the messages above). Check your internet connection and run the installer again. If it keeps failing, please open an issue at https://github.com/$REPO/issues"

bin="$("$uv" tool dir --bin)"
exe="$bin/medmereport"
[ -x "$exe" ] || die "medmereport was installed but $exe is missing."
if [ -n "${MEDMEREPORT_NO_MODIFY_PATH:-}" ]; then
    step "Not changing PATH (MEDMEREPORT_NO_MODIFY_PATH is set)"
else
    # Adds the tool folder to your shell's PATH; a no-op when it is already there.
    "$uv" tool update-shell || printf '    (could not update PATH; the launcher still works)\n'
fi

installed="$("$exe" --version)" || die "medmereport was installed but does not start. Run '$exe doctor' to see why."

step "Creating a launcher"
if [ "$os" = "Darwin" ]; then
    dir="${MEDMEREPORT_SHORTCUT_DIR:-$HOME/Applications}"
    mkdir -p "$dir"
    launcher="$dir/medmereport.command"
    cat >"$launcher" <<EOF
#!/bin/sh
# Opens medmereport in your browser. Keep this window open while you use it.
"$exe" serve || { echo; echo "medmereport stopped with an error (see above)."; read -r _; }
EOF
    chmod +x "$launcher"
    open_hint="Double-click \"medmereport\" in the Applications folder of your home folder ($dir)."
else
    dir="${MEDMEREPORT_SHORTCUT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/applications}"
    mkdir -p "$dir"
    launcher="$dir/medmereport.desktop"
    cat >"$launcher" <<EOF
[Desktop Entry]
Type=Application
Name=medmereport
Comment=See inside your scans, privately on this computer
Exec="$exe" serve
Terminal=true
Categories=Science;MedicalSoftware;Education;
EOF
    chmod +x "$launcher"
    open_hint="Open \"medmereport\" from your applications menu (or run: medmereport serve)."
fi
printf '    %s\n' "$launcher"

if [ -n "$with_models" ]; then
    step "Downloading the brain models (about 360 MB)"
    for m in atlas-ho synthseg; do
        "$exe" models pull "$m" || die "downloading the model '$m' failed. medmereport itself is installed; you can download models later from inside the app."
    done
fi

cat <<EOF

  $installed is installed.

  Next steps:
    1. $open_hint
       A terminal window opens (keep it open) and your browser shows the app.
    2. When you are done, press Ctrl+C in that window (or close it).

  Run this installer again at any time to upgrade.
  To remove medmereport: curl -LsSf https://raw.githubusercontent.com/$REPO/v$MEDMEREPORT_DEFAULT_VERSION/scripts/uninstall.sh | sh

EOF
