from pathlib import Path

from medmereport.core.paths import SessionTemp, wipe_stale_sessions


def test_session_temp_wiped_on_close():
    s = SessionTemp()
    f = s.subdir("x") / "secret.bin"
    f.write_bytes(b"phi")
    s.close()
    assert not Path(s.path).exists()


def test_stale_sessions_wiped_after_crash():
    s = SessionTemp()
    (s.path / "left.bin").write_bytes(b"x")  # simulate a crash: never closed
    assert wipe_stale_sessions() >= 1
    assert not s.path.exists()
