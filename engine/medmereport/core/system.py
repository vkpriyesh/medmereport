"""Host facts without third-party dependencies (used to size memory-hungry steps)."""

from __future__ import annotations

import ctypes
import os
import sys


def total_ram_gib() -> float | None:
    """Physical RAM in GiB, or None if it can't be determined."""
    try:
        if sys.platform == "win32":

            class MemStatus(ctypes.Structure):
                _fields_ = [
                    ("dwLength", ctypes.c_ulong),
                    ("dwMemoryLoad", ctypes.c_ulong),
                    ("ullTotalPhys", ctypes.c_ulonglong),
                    ("ullAvailPhys", ctypes.c_ulonglong),
                    ("ullTotalPageFile", ctypes.c_ulonglong),
                    ("ullAvailPageFile", ctypes.c_ulonglong),
                    ("ullTotalVirtual", ctypes.c_ulonglong),
                    ("ullAvailVirtual", ctypes.c_ulonglong),
                    ("ullAvailExtendedVirtual", ctypes.c_ulonglong),
                ]

            st = MemStatus()
            st.dwLength = ctypes.sizeof(MemStatus)
            if ctypes.windll.kernel32.GlobalMemoryStatusEx(ctypes.byref(st)):
                return float(st.ullTotalPhys) / 2**30
            return None
        pages, size = os.sysconf("SC_PHYS_PAGES"), os.sysconf("SC_PAGE_SIZE")
        return float(pages * size) / 2**30
    except (OSError, ValueError, AttributeError):
        return None


def memory_budget_gib(fraction: float = 0.45, lo: float = 3.0, hi: float = 12.0) -> float:
    """A conservative working-memory budget for one heavy step."""
    total = total_ram_gib()
    if total is None:
        return lo
    return max(lo, min(hi, total * fraction))
