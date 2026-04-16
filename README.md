# Unbili

`Unbili` is a local MkDocs knowledge site for engineering course notes. The repository stores Markdown source content under `docs/`, a small amount of MkDocs theme customization, and a generated `site/` output directory that is still tracked in Git for historical reasons.

## Tech Stack

- Python 3.13
- MkDocs
- Material for MkDocs
- `pymdown-extensions`
- MathJax
- Giscus

## Repository Structure

- `mkdocs.yml`: build entry, navigation, theme, Markdown extensions, JS/CSS wiring
- `docs/`: source notes, PDFs, extracted images, local CSS/JS assets
- `overrides/`: MkDocs Material overrides
- `site/`: generated static site output
- `.claude/`: Claude-local maintenance guidance and permission settings
- `requirements.txt`: Python dependencies
- `MAINTENANCE_LOG.md`: human-readable maintenance history and follow-up notes

## Entry Points

- Source homepage: `docs/index.md`
- Build/config entry: `mkdocs.yml`
- Generated homepage: `site/index.html`

## Local Development

Install dependencies:

```bash
pip install -r requirements.txt
```

Run a preview server:

```bash
mkdocs serve
```

Build the site:

```bash
mkdocs build
```

Run a disposable validation build without touching tracked `site/` output:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\validate-mkdocs.ps1
```

## Content Patterns

This repository currently uses two note patterns:

1. Long-form Markdown pages, usually one course per `index.md`
2. PDF-backed pages with both embedded PDF preview and extracted image fallback

Representative examples:

- Long-form Markdown: `docs/math/ode/index.md`
- Long-form Markdown: `docs/major/foundation/thermodynamics/index.md`
- PDF-backed page: `docs/major/foundation/engineering-mechanics.md`
- PDF-backed page: `docs/physics/optics/interference.md`

## Deployment Policy

This repository uses an owner-approved Claude local stop hook that auto-commits and auto-deploys note/config changes. Treat that as an intentional workflow, not an accident.

Current behavior:

- Session stop may auto-commit `docs/` and `mkdocs.yml` changes
- Session stop may auto-push `main`
- Session stop may auto-run `mkdocs gh-deploy --force`

Because of that:

- Do not leave partial content edits in `docs/` or `mkdocs.yml`
- If a task should stay local only, state that explicitly before making those edits
- Review `.claude/settings.local.json` before changing deployment behavior

## Current Maintenance Constraints

- `site/` is still tracked in Git, so any local build can dirty the working tree.
- `_ode*.txt` files are temporary extraction artifacts and should not be committed.
- Workflow rules currently live partly in `.claude/` and must stay synchronized with repository docs.

Preferred local validation:

- Use `scripts/validate-mkdocs.ps1` for build verification when you do not intend to refresh tracked `site/`
- Use plain `mkdocs build` only when you intentionally want updated generated output

## Collaboration Notes

Codex and Claude should both read these files before editing repository conventions:

- `SKILL.md`
- `README.md`
- `MAINTENANCE_LOG.md`
- `.claude/commands/notes-guide.md`
- `scripts/validate-mkdocs.ps1`

When changing workflow, deployment, structure, or conventions, append a short log entry to `MAINTENANCE_LOG.md`.
