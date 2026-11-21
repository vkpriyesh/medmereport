"""`medmereport` command-line entry point (alias: `mmr`)."""

from __future__ import annotations

import argparse
import os
import platform
import secrets
import socket
import sys
import threading
import webbrowser

from medmereport import __version__


def _free_port() -> int:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(("127.0.0.1", 0))
        return int(s.getsockname()[1])


def cmd_serve(args: argparse.Namespace) -> int:
    import uvicorn

    from medmereport.core.logging import get_logger
    from medmereport.core.paths import SessionTemp, wipe_stale_sessions
    from medmereport.server.app import create_app, secure_asgi

    log = get_logger()
    stale = wipe_stale_sessions()
    if stale:
        log.info("Removed %d leftover temporary session folder(s).", stale)
    port = args.port or _free_port()
    token = os.environ.get("MEDMEREPORT_TOKEN") if args.dev else None
    token = token or secrets.token_urlsafe(32)
    dev_origins = ("http://127.0.0.1:5173", "http://localhost:5173") if args.dev else ()
    session = SessionTemp()
    app = create_app(port=port, token=token, session=session, dev_origins=dev_origins)
    url = f"http://127.0.0.1:{port}/#token={token}"
    print(f"\n  medmereport {__version__} is running privately on this computer.", flush=True)
    print(f"  Open: {url}", flush=True)
    print("  Nothing is uploaded. Press Ctrl+C to stop (temporary files are deleted).\n", flush=True)
    if args.dev:
        print(f"  Dev UI: http://127.0.0.1:5173/#token={token}  (vite proxies /api to port {port})\n", flush=True)
    if not args.no_browser:
        threading.Timer(1.0, lambda: webbrowser.open(url)).start()
    try:
        uvicorn.run(secure_asgi(app), host="127.0.0.1", port=port, log_level="warning", access_log=False)
    finally:
        session.close()
    return 0


def cmd_doctor(_: argparse.Namespace) -> int:
    import importlib.util

    from medmereport.core.paths import data_dir

    print(f"medmereport {__version__}", flush=True)
    print(f"Python      {platform.python_version()} ({sys.executable})", flush=True)
    print(f"System      {platform.system()} {platform.release()} {platform.machine()}", flush=True)
    print(f"CPU cores   {os.cpu_count()}", flush=True)
    try:
        import psutil

        print(f"RAM         {psutil.virtual_memory().total / 2**30:.1f} GB")
    except ImportError:
        pass
    print(f"Data dir    {data_dir()}", flush=True)
    for mod, label in [("onnxruntime", "AI models (onnxruntime)"), ("totalsegmentator", "TotalSegmentator")]:
        ok = importlib.util.find_spec(mod) is not None
        print(f"{label:<26}{'installed' if ok else 'not installed (optional)'}")
    import pydicom

    print(f"{'DICOM decoders':<26}", ", ".join(sorted(_decoders(pydicom))), flush=True)
    return 0


def _decoders(pydicom) -> set[str]:  # type: ignore[no-untyped-def]
    out = set()
    for name in ("gdcm", "pylibjpeg", "openjpeg", "rle"):
        import importlib.util

        if importlib.util.find_spec(name) is not None or importlib.util.find_spec(f"pylibjpeg_{name}") is not None:
            out.add(name)
    return out


def cmd_purge(args: argparse.Namespace) -> int:
    from medmereport.core.paths import purge_all

    if not args.yes:
        ans = input("Delete ALL saved studies, temporary files and downloaded models? [y/N] ")
        if ans.strip().lower() not in ("y", "yes"):
            print("Nothing deleted.")
            return 1
    removed = purge_all()
    print("Deleted:" if removed else "Nothing to delete.", flush=True)
    for r in removed:
        print("  ", r)
    return 0


def cmd_openapi(args: argparse.Namespace) -> int:
    from medmereport.core.paths import SessionTemp
    from medmereport.server.app import create_app, openapi_json

    s = SessionTemp()
    try:
        text = openapi_json(create_app(port=1, token="x", session=s))  # noqa: S106 - schema export only
    finally:
        s.close()
    if args.out:
        with open(args.out, "w", encoding="utf-8") as f:
            f.write(text)
    else:
        print(text)
    return 0


def main(argv: list[str] | None = None) -> int:
    p = argparse.ArgumentParser(prog="medmereport", description="See inside your scans: privately, on your computer.")
    p.add_argument("--version", action="version", version=f"medmereport {__version__}")
    sub = p.add_subparsers(dest="cmd")
    s = sub.add_parser("serve", help="start the app and open it in your browser")
    s.add_argument("--port", type=int, default=0)
    s.add_argument("--no-browser", action="store_true")
    s.add_argument("--dev", action="store_true", help=argparse.SUPPRESS)
    s.set_defaults(fn=cmd_serve)
    sub.add_parser("doctor", help="check your installation").set_defaults(fn=cmd_doctor)
    pu = sub.add_parser("purge", help="delete all saved studies, temp files and models")
    pu.add_argument("-y", "--yes", action="store_true")
    pu.set_defaults(fn=cmd_purge)
    dg = sub.add_parser("diagnose", help="make a de-identified report about a disc we can't read yet")
    dg.add_argument("path")
    dg.add_argument("--out")
    dg.set_defaults(fn=lambda a: __import__("medmereport.cli.diagnose", fromlist=["run"]).run(a.path, a.out))
    o = sub.add_parser("openapi", help=argparse.SUPPRESS)
    o.add_argument("--out")
    o.set_defaults(fn=cmd_openapi)
    args = p.parse_args(argv)
    if not getattr(args, "fn", None):
        args = p.parse_args(["serve", *(argv or [])])
    return int(args.fn(args))


if __name__ == "__main__":
    sys.exit(main())
