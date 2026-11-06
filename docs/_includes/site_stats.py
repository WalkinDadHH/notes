"""把首页的 site-stats 占位符换成页面数和字数。"""
import re
from datetime import date

SINCE = date(2026, 4, 16)
SKIP = ("_includes/", "notes/example.md")
stats = {"pages": 0, "chars": 0}


def on_files(files, config):
    stats.update(pages=0, chars=0)
    for file in files.documentation_pages():
        if file.src_uri.startswith(SKIP):
            continue
        text = open(file.abs_src_path, encoding="utf-8").read()
        text = re.sub(r"<svg.*?</svg>", "", text, flags=re.S)
        stats["pages"] += 1
        stats["chars"] += len(re.sub(r"\s+", "", text))
    return files


def on_page_markdown(markdown, page, config, files):
    if "<!-- site-stats -->" not in markdown:
        return markdown
    days = (date.today() - SINCE).days
    line = (
        f'<p class="site-stats">{stats["pages"]} 个页面 · 约 {stats["chars"] / 10000:.1f} 万字 · '
        f'运行 <span data-since="{SINCE}">{days}</span> 天</p>'
    )
    return markdown.replace("<!-- site-stats -->", line)
