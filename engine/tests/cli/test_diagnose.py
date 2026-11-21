import json

from medmereport.cli.diagnose import build_report
from tests.fixtures import containers as C
from tests.fixtures.synth import FAKE_NAME


def test_report_is_deidentified(tmp_path):
    disc = C.make_dcmburner_disc(tmp_path / "PATIENT_SMITH_JOHN", "pw")
    (disc / "SMITH JOHN report.pdf").write_bytes(b"%PDF-1.4 fake")
    text = json.dumps(build_report(disc))
    for bad in ("SMITH", "JOHN", FAKE_NAME.split("^")[0], str(tmp_path)):
        assert bad not in text
    rep = json.loads(text)
    names = {e["name"] for e in rep["entries"]}
    assert "burn.enc" in names and "decrypt_win.exe" in names
    assert any(e["magic"].startswith("53616c7465645f5f") for e in rep["entries"])  # "Salted__"
