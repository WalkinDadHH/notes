# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概况

基于 MkDocs + Material 的中文工程课程笔记站（"WalkinDadHH's Notebook"），发布到 GitHub Pages：https://WalkinDadHH.github.io/notes/（仓库 `WalkinDadHH/notes`）。没有应用代码，日常工作就是 Markdown 内容、`mkdocs.yml`、少量 CSS/JS 和一个主题 override。

修改约定、目录结构或部署方式前，先读 `SKILL.md`、`README.md`、`MAINTENANCE_LOG.md` 和 `.claude/commands/notes-guide.md`（也就是 `/notes-guide` 技能，风格规范最全）。约定有变时，这几个文件要同步更新。

## 运行环境

仓库位于 macOS 的 `/Users/kaneki/Documents/unbili`，Python/MkDocs 来自 miniforge（`/Users/kaneki/miniforge3/bin/`，PATH 里直接用 `python3`、`mkdocs`、`gh`）。2026-10 之前在 Windows `D:\Unbili` 维护，`MAINTENANCE_LOG.md` 旧条目和 `scripts/validate-mkdocs.ps1`、`settings.local.json` 的权限白名单里仍有 Windows 路径，属历史遗留。

## 常用命令

```bash
pip install -r requirements.txt   # mkdocs、mkdocs-material、pymdown-extensions
mkdocs serve                       # 本地预览，地址带 /notes/ 前缀
./scripts/validate-mkdocs.sh       # 校验构建，输出到 .tmp_site_validation/（已 gitignore），不动 site/
mkdocs build                       # 会刷新被 Git 跟踪的 site/，仅在确实需要时用
mkdocs gh-deploy --force           # 发布到 gh-pages
```

没有测试和 lint。"校验"指构建成功且渲染结果正确（比如在输出 HTML 里 grep 残留的裸 `$`，见下文公式规范）。

`site/` 因历史原因仍被 Git 跟踪，直接 `mkdocs build` 会产生大量脏文件。除非任务要求，不要提交 `site/` 的改动。

## 部署与工作流规则（仓库所有者要求）

- `.claude/settings.local.json` 里有 **Stop 钩子**：会话结束时执行 `git add docs/ mkdocs.yml`，提交 "auto: sync notes to GitHub Pages"，推送 `main`，再跑 `mkdocs gh-deploy --force`。这是有意保留的流程，不要关闭。因此每轮结束时 `docs/`、`mkdocs.yml` 里不能留半成品；若改动只想留在本地，动手前先说明。
- 每次有可见影响的改动（内容、样式、导航、工作流、部署）都要在 `MAINTENANCE_LOG.md` 顶部插入一条带日期的记录（新的在上，格式 `## YYYY-MM-DD — 标题`，下接 Scope / Changed / Why / Validation）。拿不准就记。
- 发布完成后，固定说一句：`主人！您的更新完成了，请登录您的站点进行查看吧！`
- `_ode*.txt` 是 PDF 提取的临时文件，不要提交。
- `references/` 存放源资料 PDF（教材、课件），在 `docs/` 之外，不会发布。不要把受版权保护的教材放进 `docs/`。

## 内容架构

两种页面模式：

1. **单页长文课程笔记**：每门课一个 `index.md`，包含全部章节（如 `docs/major/foundation/thermodynamics/index.md`、`docs/math/ode/index.md`、`docs/major/foundation/fluid-mechanics/index.md`）。流体力学页另把手写讲义 PDF 放在同级 `sources/`，正文用 `[第二章手写稿第 8 页](sources/xxx.pdf#page=8)` 引到具体页。结构依次为：`# 课程名` → `!!! note "课程信息"` → 简介 → 符号速查 → 章节概览状态表（✅/🚧）→ 各 `## 第X章 · 标题`，章节间用 `---` 分隔，每章以 `!!! info "章节概览"` 开头；未完成章节放 `!!! warning "施工中"` 存根。
2. **PDF 页面**：一个 `.md` 与同名 `.pdf`、`*-imgs/` 目录并列，用 `pymdownx.tabbed` 分两个标签页：`<iframe>` PDF 预览加下载按钮，以及图片模式（"图片模式（iOS 可用）"，PyMuPDF 4x 渲染、JPEG 质量 95）。模板：`docs/major/foundation/engineering-mechanics.md`。

导航（`mkdocs.yml` 的 `nav`）：多章节课程只保留一个入口，不展开子章节；各分区索引页（`math/index.md` 等）用 H2 + 无序列表 `- [课程名](path/) —— 说明`，不用表格。课程名必须用 `notes-guide.md` 里列出的正式名称。

关键约定：

- **Admonition**：`info "章节概览"`、`definition`、`key-point`、`note`、`tip`、`warning "施工中"`。`definition` 和 `key-point` 是在 `docs/stylesheets/extra.css` 里自定义的类型，复用即可，不要另造新类型。
- **考情标签**：临近考试的长文笔记在标题下加 `exam-tags`，写法见 `notes-guide.md`。
- **PDF**：线上由 `docs/javascripts/site.js` 把 PDF 改到 jsDelivr 的 `gh-pages` 分支，GitHub Pages 传大文件太慢。同名 PDF 替换后要清 jsDelivr 缓存。
- **更新记录**：较大的改动同时写进 `docs/changelog.md`，语气要像本人写的。
- **友链**：数据只写在 `docs/_includes/friends.html`，友链页和首页都用 snippet 引入，改这一个文件即可。
- **插图**（长文笔记）：`<figure markdown="span">` + `![...](imgs/NN-slug.png){ width="90%" }` + `<figcaption>…（图源：课程课件）</figcaption>`；图片按章节号命名（如 `03-carnot-theorem.png`），放在页面同级 `imgs/` 下。
- **公式**：`pymdownx.arithmatex`（generic 模式）+ MathJax 3，配置在 `docs/javascripts/mathjax.js`。块级 `$$…$$` 前后必须留空行（admonition 缩进内同样），否则会渲染成裸 `$`。`<figcaption>` 里不要写 `$…$`（raw HTML 不会处理公式），改用纯文本/Unicode（如 `T_d<T_w<T`、`ΔH⁰`）。
- **评论**：Giscus，见 `overrides/partials/comments.html`，在页面 frontmatter 加 `comments: true` 启用。
- 字体通过 `docs/stylesheets/fonts.css` 从 CDN 加载（`theme.font: false`）。
