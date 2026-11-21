import logging

from hypothesis import given, settings
from hypothesis import strategies as st

from medmereport.core.logging import RedactingFilter, clear_sensitive, redact, register_sensitive

names = st.text(alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", min_size=3, max_size=12)


@settings(max_examples=200)
@given(family=names, given_=names)
def test_registered_names_never_logged(family, given_):
    clear_sensitive()
    register_sensitive(f"{family}^{given_}")
    out = redact(f"loaded study for {family} {given_} ok")
    assert family.lower() not in out.lower()
    assert given_.lower() not in out.lower()


@given(y=st.integers(1900, 2099), m=st.integers(1, 12), d=st.integers(1, 28))
def test_dates_redacted(y, m, d):
    for s in (f"{y}{m:02d}{d:02d}", f"{y}-{m:02d}-{d:02d}", f"{d:02d}/{m:02d}/{y}"):
        assert s not in redact(f"born {s} scanned")


def test_paths_ids_emails_uids_redacted():
    msg = r"read C:\Users\someone\Desktop\disc\DICOM\0001 id 12345678 mail a.b@c.org uid 1.2.840.113619.2.55.3"
    out = redact(msg)
    for bad in ("someone", "12345678", "a.b@c.org", "1.2.840.113619"):
        assert bad not in out
    assert "/home/user/scan" not in redact("open /home/user/scan.zip")


def test_filter_applies_to_records():
    clear_sensitive()
    register_sensitive("DOE^JANE")
    rec = logging.LogRecord("x", logging.INFO, __file__, 1, "patient %s", ("DOE^JANE",), None)
    RedactingFilter().filter(rec)
    assert "DOE" not in rec.getMessage() and "JANE" not in rec.getMessage()
