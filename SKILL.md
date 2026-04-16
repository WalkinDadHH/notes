---
name: unbili-maintainer
description: Use when working in the Unbili MkDocs notes repository to follow the project's maintenance, validation, deployment, and logging conventions. Trigger for content edits, theme/config changes, workflow updates, or site publishing in this repo.
---

# Unbili Maintainer

This repository is a MkDocs + Material notes site rooted at `D:\Unbili`.

Before changing repository conventions, deployment behavior, structure, or content patterns, read:

- `README.md`
- `MAINTENANCE_LOG.md`
- `.claude/commands/notes-guide.md`
- `scripts/validate-mkdocs.ps1` when build validation is relevant

## Core rules

- Do not leave partial edits in `docs/` or `mkdocs.yml` if the task is meant to be published.
- Prefer `scripts/validate-mkdocs.ps1` for validation when you do not want to refresh tracked `site/`.
- Use plain `mkdocs build` only when you intentionally want updated generated output in `site/`.
- Do not disable or rewrite the repository's established deploy workflow unless the owner explicitly asks for that.

## Maintenance log policy

- Any important update must be recorded in `MAINTENANCE_LOG.md` before ending the task.
- Treat these as important updates by default:
  - content changes with visible user-facing impact
  - style or theme changes
  - navigation or structure changes
  - workflow, script, or deployment changes
  - publishing/deployment actions
- When in doubt, append a short log entry instead of skipping it.

## Deployment workflow

- Validate locally first when practical.
- If publishing is intended, follow the repository's current deployment flow and ensure the published result matches the edited source.

## Editing scope

- Reuse existing note patterns and admonition styles instead of inventing one-off formats.
- Keep repository conventions synchronized across `SKILL.md`, `README.md`, `.claude/commands/notes-guide.md`, and `MAINTENANCE_LOG.md` when relevant.
