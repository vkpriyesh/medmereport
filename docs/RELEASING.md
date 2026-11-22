# Releasing medmereport

Releases are authored by the maintainer account (vkpriyesh), never by a bot.

1. Bump `version` in `engine/pyproject.toml` and the pinned version in `scripts/install.ps1` / `scripts/install.sh`; add a CHANGELOG section. `tests/packaging` checks they agree.
2. Push to `main` and wait for the `ci` and `install` workflows to be green.
3. Tag and create the release as the maintainer:
   ```bash
   git tag -a vX.Y.Z -m "medmereport X.Y.Z" && git push origin vX.Y.Z
   gh release create vX.Y.Z --verify-tag --title "medmereport X.Y.Z" --notes-file <changelog section>
   ```
4. The `release` workflow (triggered by the tag) re-runs the clean-install checks, builds the wheel and sdist, smoke-tests them and attaches them plus `SHA256SUMS` to that release. If it ran before step 3 finished, re-run its failed job.
5. Test the real one-liner from the README on a clean machine.
