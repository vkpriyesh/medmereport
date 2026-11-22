#!/bin/sh
# medmereport uninstaller for macOS and Linux. No admin rights (sudo) needed.
#
#   curl -LsSf https://raw.githubusercontent.com/vkpriyesh/medmereport/v0.1.0/scripts/uninstall.sh | sh
#
# Removes the launcher and the medmereport program. Your saved studies and downloaded models are
# kept unless you agree to delete them (you are asked), or you pass --purge
# (with curl | sh: ... | sh -s -- --purge) or set MEDMEREPORT_PURGE=1. MEDMEREPORT_PURGE=0 keeps
# them without asking. uv itself and its Python are left in place (other programs may use them).
# MEDMEREPORT_SHORTCUT_DIR has the same meaning as for install.sh.

set -eu

step() { printf '==> %s\n' "$*"; }
die() {
    printf '\n  Uninstall stopped: %s\n\n' "$*" >&2
    exit 1
}

purge="${MEDMEREPORT_PURGE:-}"
for arg in "$@"; do
    case "$arg" in
        --purge) purge=1 ;;
        -h | --help)
            echo "Usage: uninstall.sh [--purge]"
            exit 0
            ;;
        *) die "unknown option '$arg' (try --help)" ;;
    esac
done

find_uv() {
    for d in "${UV_UNMANAGED_INSTALL:-}" "${UV_INSTALL_DIR:-}" "${UV_INSTALL_DIR:+$UV_INSTALL_DIR/bin}"; do
        if [ -n "$d" ] && [ -x "$d/uv" ]; then
            printf '%s\n' "$d/uv"
            return 0
        fi
    done
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

want_purge() {
    case "$purge" in
        1) return 0 ;;
        0) return 1 ;;
    esac
    [ -z "${CI:-}" ] || return 1
    # Works with curl | sh too: the question is asked on the terminal, not on the piped script.
    if [ -r /dev/tty ] && [ -w /dev/tty ]; then
        printf 'Also delete your saved studies and downloaded models from this computer? [y/N] ' >/dev/tty
        answer=""
        read -r answer </dev/tty || answer=""
        case "$answer" in
            y | Y | yes | YES | Yes) return 0 ;;
        esac
    fi
    return 1
}

uv="$(find_uv)"
exe=""
if [ -n "$uv" ]; then
    bin="$("$uv" tool dir --bin)"
    [ -x "$bin/medmereport" ] && exe="$bin/medmereport"
fi

purged=""
if [ -n "$exe" ] && want_purge; then
    step "Deleting saved studies, temporary files and downloaded models"
    "$exe" purge --yes || die "deleting your data failed; nothing else was removed. Stop medmereport if it is running and try again."
    purged=1
fi

step "Removing the launcher"
if [ "$(uname -s)" = "Darwin" ]; then
    launcher="${MEDMEREPORT_SHORTCUT_DIR:-$HOME/Applications}/medmereport.command"
else
    launcher="${MEDMEREPORT_SHORTCUT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/applications}/medmereport.desktop"
fi
if [ -e "$launcher" ]; then
    rm -f "$launcher"
    printf '    removed %s\n' "$launcher"
fi

if [ -n "$uv" ]; then
    step "Removing the medmereport program"
    if "$uv" tool list 2>/dev/null | grep -q '^medmereport '; then
        "$uv" tool uninstall medmereport || die "uv could not remove medmereport. Stop medmereport if it is running and try again."
    else
        echo "    medmereport is not installed (nothing to remove)."
    fi
else
    echo "    uv was not found, so there is no medmereport program to remove."
fi

printf '\n  medmereport has been removed.\n'
if [ -z "$purged" ]; then
    if [ -n "${MEDMEREPORT_HOME:-}" ]; then
        data="$MEDMEREPORT_HOME"
    elif [ "$(uname -s)" = "Darwin" ]; then
        data="$HOME/Library/Application Support/medmereport"
    else
        data="${XDG_DATA_HOME:-$HOME/.local/share}/medmereport"
    fi
    [ -d "$data" ] && printf '  Any data you kept is in %s (delete that folder to remove it).\n' "$data"
fi
echo
