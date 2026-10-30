#!/usr/bin/env bash
# 一次性校验构建：输出到 .tmp_site_validation/（已 gitignore），不刷新被跟踪的 site/。
set -euo pipefail

PYTHON="${PYTHON:-python3}"
OUTPUT_DIR="${1:-.tmp_site_validation}"
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

if ! "$PYTHON" -c "import mkdocs" 2>/dev/null; then
    echo "MkDocs is not available for '$PYTHON'. Install dependencies first with 'pip install -r requirements.txt'." >&2
    exit 1
fi

cd "$REPO_ROOT"
rm -rf "$OUTPUT_DIR"
"$PYTHON" -m mkdocs build --clean --site-dir "$OUTPUT_DIR"
echo "Validation build completed: $REPO_ROOT/$OUTPUT_DIR"
