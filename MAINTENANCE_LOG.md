# Maintenance Log

## 2026-04-18 - ODE 笔记勘误（对照 Savia 参考 PDF）

Scope:
- `docs/math/ode/index.md` 内容勘误
- 依据 `docs/《常微分方程》第 4 讲  线性微分方程组.pdf`

Fixed:
- 4.1 广义特征向量链递推式方向写反：原 `(A-λE)v_{j+1}=v_j` 改为 `(A-λE)v_{j-1}=v_j`，并补全 `(A-λE)^k v_0 = 0` 的种子步骤与链底为普通特征向量的说明
- 4.2 常系数非齐次方程组例题（23-24 夏）题目与参考 PDF 不符：方程组、初值、基本解矩阵全部按参考原题重写（`x'=2x+y, y'=x+2y-2e^{2t}, x(0)=y(0)=1`），求解步骤展开为 ①②③ 三步

## 2026-04-16 - Codex first-round repo maintenance

Scope:
- Repository hygiene only
- No note content changes
- No visual/site behavior changes intended

Completed:
- Added a repository-level `README.md`
- Added `.gitignore` for generated/transient local artifacts
- Updated Claude maintenance guidance to match the current collaboration model
- Wrote a Codex memory snapshot for this project

Findings preserved for follow-up:
- `site/` is still tracked in Git and currently produces frequent dirty diffs
- Root-level `_ode*.txt` files are transient extraction outputs from note generation
- `.claude/commands/notes-guide.md` had drifted from the real repository state
- Auto publish on session stop is an intentional owner workflow and must be treated as repository policy

Decisions:
- Do not remove tracked `site/` files in this round, because that is a repository policy change with broad diff impact
- Keep the existing auto-commit/auto-deploy behavior because it is an explicit owner requirement
- Treat `README.md`, this log, and `.claude/commands/notes-guide.md` as the shared maintenance contract for Codex and Claude

Recommended next maintenance round:
- Decide whether `site/` should remain tracked or move fully to build artifacts only
- Add a small scripted validation flow that builds into a disposable directory
- Move PDF/text extraction utilities into a dedicated script directory
- Normalize temporary-workflow docs between human README and Claude guidance

## 2026-04-16 - Codex second-round repo maintenance

Scope:
- Maintenance workflow only
- No note content changes
- No generated-site refresh

Completed:
- Added `scripts/validate-mkdocs.ps1` for disposable MkDocs validation builds
- Documented validation workflow in `README.md`
- Synced Claude guidance nav example with the current repository structure

Why:
- `site/` is tracked, so direct `mkdocs build` is noisy even for routine validation
- The maintenance guide should reflect the actual current nav, including the ODE entry

Follow-up:
- Consider moving more repeatable maintenance actions into `scripts/`
- If `site/` is ever untracked, simplify validation and deployment docs accordingly

Validation result:
- `scripts/validate-mkdocs.ps1` executed successfully with the repository's Python 3.13 path
- Build output was written to `.tmp_site_validation/` and did not require refreshing tracked `site/`

Warnings observed during validation:
- `docs/major/foundation/engineering-mechanics.md` has a PDF link path warning
- `docs/physics/optics/geometrical-optics.md` has a PDF link path warning
- `docs/physics/optics/interference.md` has a PDF link path warning
- `docs/major/foundation/thermodynamics/index.md` has at least one broken same-page anchor
- `docs/major/index.md` and `docs/notes/*` exist but are not included in `nav`

## 2026-04-16 - Codex content maintenance and Claude handoff prep

Scope:
- ODE note quality fixes
- Handoff documentation only
- No repository policy changes

Completed:
- Removed proof-ending `\blacksquare` markers from `docs/math/ode/index.md` to eliminate meaningless black square blocks in the rendered page
- Added a theorem-and-tools overview at the start of ODE section 5 to explain the proof questions' prerequisite machinery
- Preserved the existing section structure while making section 5 easier to study sequentially
- Expanded this maintenance log into a handoff-oriented record for Claude

Files changed in this round:
- `docs/math/ode/index.md`
- `MAINTENANCE_LOG.md`

Reason for the ODE fix:
- The rendered proof section showed visually meaningless black squares at line ends
- Section 5 used several results without a local recap, increasing reading friction

Outstanding maintenance items for Claude:
- Review the three PDF link-path warnings reported by MkDocs validation
- Fix the broken same-page anchor in `docs/major/foundation/thermodynamics/index.md`
- Decide whether `docs/major/index.md` and `docs/notes/*` should enter `nav` or remain intentionally hidden
- Decide whether temporary root files `_ode*.txt` should be moved into a dedicated workspace or scripted pipeline
- Decide whether tracked `site/` output should remain repository policy long-term

Suggested next order for Claude:
1. Run `powershell -ExecutionPolicy Bypass -File .\scripts\validate-mkdocs.ps1`
2. Fix MkDocs warnings with the lowest behavioral risk first
3. Rebuild into the disposable directory again
4. Only refresh tracked `site/` when the owner explicitly wants generated output updated

Handoff notes:
- Auto publish on Claude session stop is intentional owner policy; do not remove it without explicit instruction
- `site/` is noisy because it is tracked; prefer disposable validation builds for routine checks
- Repository workflow docs now live in `README.md`, `.claude/commands/notes-guide.md`, and this file

## 2026-04-16 - Claude content build-out and maintenance continuation

Scope:
- ODE notes full build-out from source materials and exam papers
- Site-wide bug fixes and maintenance handoff from Codex

### ODE 讲义完整构建

Source materials processed:
- `_ode1.txt` ~ `_ode4.txt`, `_ode_types.txt` (Savia 讲义 + Duo Xu 类型整理)
- `ODEnotes_beamer-xxu-2026.pdf` (徐翔 25-26 学年讲义, 444 pages)
- 三份历年卷: 24-25 春 (Intl.), 23-24 夏, 24-25 夏

Content added to `docs/math/ode/index.md`:
- 基本概念速览 (阶、通解、特解、初值问题、Picard 定理)
- 1.5 Riccati 方程 (方法 + 例题 y'+y²=2/x²)
- 1.6 全微分方程例题 2 (24-25 凑微分技巧)
- 1.8 x,y 互换例题 2 (24-25夏)
- 1.9 Clairaut 方程与参数表示 (全新题型, 24-25)
- 2.2 不显含 x 的方程例题 2-3 (24-25, 24-25夏)
- 3.2 非齐次例题 2 (23-24 三角化简 + warning)
- 3.3 欧拉方程例题 2-3 (非齐次: 重根+xlnx, 单根+x³)
- 3.4 已知一解例题 1-2 (观察法 + 三阶降阶)
- 4.2 非齐次方程组例题 2 (常向量特解技巧)
- 4.4 二阶方程组化为一阶方程组 (全新题型)
- 五、证明题选讲 (5.1-5.4 四道典型证明, 后由 Codex 补充工具表)

### 站点 bug 修复

Rendering fixes:
- MathJax `\boldsymbol` 渲染失败 → 加载 boldsymbol 扩展 (`docs/javascripts/mathjax.js`)
- 目录中 `\(x,y\)` 等显示源码 → 标题改用纯文本 (1.7/2.1/2.2/3.1)
- 讲义说明修正: 适用范围改为 "1 学分工科常微分方程", 删除参考来源

Navigation fixes:
- `mkdocs.yml` 新增 ODE 导航入口和 `major/index.md` 入口
- `docs/math/index.md` 重写: 仅展示已完成讲义, 不罗列未写课程

### Codex 维护接续

Completed (from Codex outstanding items):
- ✅ 3 个 PDF 链接路径警告: `../xx.pdf` → `xx.pdf` (engineering-mechanics, geometrical-optics, interference)
- ✅ `major/index.md` 加入 nav
- ✅ `.gitignore` 移除 `site/` 排除规则 (项目需要追踪 site/ 用于 GitHub Pages 部署)
- ✅ 热力学锚点警告: 确认是 Windows 控制台中文编码假警告, 实际页面跳转正常

Remaining (policy decisions for owner):
- `notes/` 脚手架内容是否删除 (当前不在 nav 中, 不影响站点)
- `_ode*.txt` 源文件已被 .gitignore 排除, 本地可自行清理

Files changed:
- `docs/math/ode/index.md` — ODE 讲义主体
- `docs/math/index.md` — 数学板块首页
- `docs/javascripts/mathjax.js` — MathJax boldsymbol 扩展
- `docs/major/foundation/engineering-mechanics.md` — PDF 路径修复
- `docs/physics/optics/geometrical-optics.md` — PDF 路径修复
- `docs/physics/optics/interference.md` — PDF 路径修复
- `mkdocs.yml` — 导航更新
- `.gitignore` — 移除 site/ 排除
- `MAINTENANCE_LOG.md` — 本记录

## 2026-04-16 - ODE example block consistency fix and deploy

Scope:
- Restore visual separation between example problems and body text in ODE sections 1.7 and 1.8
- Validate the rendered page and publish the update to GitHub Pages

Completed:
- Wrapped the inline examples in `docs/math/ode/index.md` section `1.7 变量代换` into `!!! example` blocks:
  - `例题 1 (20-21)`
  - `例题 2 (20-21)`
- Wrapped the inline example in section `1.8 x, y 互换` into a `!!! example` block:
  - `例题 (23-24)`
- Kept the existing example styling pipeline unchanged and reused the repository's established `.example` admonition rendering
- Ran `scripts/validate-mkdocs.ps1` to confirm the page builds cleanly without touching tracked `site/`
- Verified generated HTML in `.tmp_site_validation/math/ode/index.html` shows these items as `<div class="admonition example">`
- Deployed with `python -m mkdocs gh-deploy --force`

Files changed:
- `docs/math/ode/index.md` — converted 1.7/1.8 inline examples into example blocks
- `MAINTENANCE_LOG.md` — appended this record

## 2026-04-16 - Added project SKILL.md logging rule

Scope:
- Add a repository-level `SKILL.md` so future agents inherit project maintenance rules directly
- Make "important updates must be logged" an explicit project skill requirement

Completed:
- Created `SKILL.md` at the repository root for Unbili maintenance workflows
- Added an explicit rule that important updates must be recorded in `MAINTENANCE_LOG.md` before ending work
- Defined important updates broadly to include content, style, structure, workflow, and deployment changes
- Updated `README.md` so repository convention changes now explicitly require reading `SKILL.md`

Files changed:
- `SKILL.md` — new project-level maintenance skill
- `README.md` — added `SKILL.md` to collaboration prerequisites
- `MAINTENANCE_LOG.md` — appended this record

## 2026-04-16 - Synced logging rule into Claude guide

Scope:
- Mirror the project-level logging requirement into `.claude/commands/notes-guide.md`
- Ensure Claude-side repo instructions directly require reading `SKILL.md` and writing logs for important updates

Completed:
- Added `SKILL.md` to the pre-read list in `.claude/commands/notes-guide.md`
- Added an explicit rule that important updates must be logged by default
- Listed the default important-update categories: content, style, structure, workflow, and deployment
- Added a fallback rule to log even short entries when there is uncertainty

Files changed:
- `.claude/commands/notes-guide.md` — synced project logging policy
- `MAINTENANCE_LOG.md` — appended this record

## 2026-04-16 - Standard site upgrade inspired by TonyCrane note

Scope:
- Standard visual and structural site upgrade
- No changes to course-note body content
- No tracked `site/` refresh in this round

Completed:
- Reworked `docs/index.md` into a landing-style homepage with hero section, status strip, subject cards, and quick-entry blocks
- Upgraded section landing pages in `docs/math/index.md`, `docs/physics/index.md`, `docs/chemistry/index.md`, `docs/major/index.md`, and `docs/notes/index.md`
- Rewrote `docs/about.md` to better explain site purpose, maintenance direction, and feedback path
- Added `docs/updates.md` and `docs/friends.md` as auxiliary pages inspired by reference notebook sites
- Reorganized `mkdocs.yml` navigation to expose `笔记`, `最近更新`, and `友链` as first-class entries
- Rebuilt `docs/stylesheets/extra.css` into a fuller visual system with hero components, card variants, badges, info/timeline blocks, and refreshed light/dark theme variables

Why:
- The previous site structure worked as a course directory but lacked a distinctive homepage and consistent section-entry experience
- The upgrade target was to move from a lightly customized Material site toward a more intentional personal notebook site
- The reference value taken from TonyCrane's notebook was mainly product structure and supporting pages, not direct visual copying

Validation:
- Ran `powershell -ExecutionPolicy Bypass -File .\scripts\validate-mkdocs.ps1`
- Validation build completed successfully in `.tmp_site_validation/`
- Confirmed generated HTML contains the new homepage and auxiliary page component classes (`hero-panel`, `cards--landing`, `section-hero`, `timeline`, `cards--friends`)

Files changed:
- `mkdocs.yml`
- `docs/index.md`
- `docs/about.md`
- `docs/math/index.md`
- `docs/physics/index.md`
- `docs/chemistry/index.md`
- `docs/major/index.md`
- `docs/notes/index.md`
- `docs/updates.md`
- `docs/friends.md`
- `docs/stylesheets/extra.css`
- `MAINTENANCE_LOG.md`

## 2026-04-16 - Homepage signature and blue-tone refinement

Scope:
- Visual refinement only
- No navigation or note-content changes

Completed:
- Refined the site palette in `docs/stylesheets/extra.css` toward a quieter, more melancholic blue-gray direction
- Reduced overly bright blue highlights in headers, hero glow, buttons, cards, and supporting surfaces while preserving the established blue identity
- Added the homepage signature line `或许是不知梦的缘故，流离之人追逐幻影。` below the status strip in `docs/index.md`
- Styled the signature as a restrained left-border quote block so it reads like a site motto rather than a main headline

Validation:
- Ran `powershell -ExecutionPolicy Bypass -File .\scripts\validate-mkdocs.ps1`
- Validation build completed successfully in `.tmp_site_validation/`

Files changed:
- `docs/index.md`
- `docs/stylesheets/extra.css`
- `MAINTENANCE_LOG.md`

## 2026-04-16 - Homepage opening compressed further

Scope:
- Homepage first-screen compression only
- No structural changes below the hero opening

Completed:
- Shortened the homepage opening copy in `docs/index.md`
- Tightened the three hero metric items so they take less vertical space
- Reduced compact-hero padding and heading spacing in `docs/stylesheets/extra.css`
- Kept the same melancholic blue-gray treatment while making the page get to content faster

Validation:
- Ran `powershell -ExecutionPolicy Bypass -File .\scripts\validate-mkdocs.ps1`
- Validation build completed successfully in `.tmp_site_validation/`

Note:
- A direct `mkdocs build --clean` into tracked `site/` was blocked because `site/index.html` was open and locked by another process

Files changed:
- `docs/index.md`
- `docs/stylesheets/extra.css`
- `MAINTENANCE_LOG.md`

## 2026-04-16 - Hero readability pass and updates page timeline upgrade

Scope:
- Homepage hero readability refinement
- Updates page structural/visual upgrade

Completed:
- Tuned the homepage hero image in `docs/stylesheets/extra.css` to be darker, less saturated, and slightly more contrast-controlled so the left-side heading area feels steadier
- Strengthened the hero overlay to better hold the site's melancholic blue-gray tone against the inserted illustration
- Rebuilt `docs/updates.md` from a simple dated list into a more intentional updates page with:
  - a summary block
  - timeline entries
  - update category badges
  - recommended follow-up entry cards
- Added timeline-specific styling in `docs/stylesheets/extra.css` for `updates-summary`, `updates-timeline`, `updates-entry`, and `update-badge`

Why:
- The inserted hero illustration was visually correct but still a little too bright in the window/sea area relative to the surrounding homepage copy
- The updates page was still structurally behind the rest of the upgraded site and needed to feel like a first-class page rather than a plain note list

Validation:
- Ran `powershell -ExecutionPolicy Bypass -File .\scripts\validate-mkdocs.ps1`
- Validation build completed successfully in `.tmp_site_validation/`
- Confirmed generated homepage still references `assets/images/hero/hero.png`
- Confirmed generated updates page includes `updates-summary`, `updates-timeline`, `updates-entry`, and `update-badge`

Files changed:
- `docs/updates.md`
- `docs/stylesheets/extra.css`
- `MAINTENANCE_LOG.md`

## 2026-04-16 - Homepage hero image rolled back to compact layout

Scope:
- Homepage layout correction only
- Remove oversized hero illustration treatment that harmed page rhythm

Completed:
- Removed the split hero image layout from `docs/index.md`
- Replaced it with a shorter, denser homepage opening more aligned with the site's content-first direction
- Preserved the melancholic blue-gray mood through background layers and typography instead of relying on a large illustration block
- Added compact inline quick links near the homepage introduction, taking inspiration from the reference notebook's short, high-density top section
- Removed now-unused large hero-art layout rules from `docs/stylesheets/extra.css`

Why:
- The large illustration card made the homepage too tall, visually heavy, and structurally inconsistent with the rest of the site
- The better reference to borrow from TonyCrane's homepage is compactness, direct entry points, and high information density, not a large decorative hero block

Validation:
- Rebuilt `site/` with `python -m mkdocs build --clean`
- Confirmed `site/index.html` now renders `hero-panel--compact` and inline quick links instead of the image-first hero block

Files changed:
- `docs/index.md`
- `docs/stylesheets/extra.css`
- `MAINTENANCE_LOG.md`

## 2026-04-16 - Homepage hero image integrated

Scope:
- Homepage hero image integration only
- No navigation or note-content changes

Completed:
- Replaced the CSS-only hero illustration placeholder in `docs/index.md` with the provided image asset at `docs/assets/images/hero/hero.png`
- Updated the hero visual caption to reflect that the homepage now uses a final illustration rather than a placeholder slot
- Tuned `docs/stylesheets/extra.css` so the hero image uses `object-fit: cover`, a slightly right-shifted crop, and a restrained blue-gray overlay for text harmony
- Added mobile-safe cropping behavior so the figure and window area remain readable on smaller screens

Validation:
- Ran `powershell -ExecutionPolicy Bypass -File .\scripts\validate-mkdocs.ps1`
- Validation build completed successfully in `.tmp_site_validation/`
- Confirmed generated output includes the `hero.png` asset and the homepage `<img>` tag wired to it

Files changed:
- `docs/index.md`
- `docs/stylesheets/extra.css`
- `MAINTENANCE_LOG.md`

## 2026-04-16 - Second refinement round for homepage, sub-index pages, and friends

Scope:
- Second-round site refinement only
- No course-note body edits
- Focus on homepage information architecture and section landing consistency

Completed:
- Expanded `docs/index.md` with three new homepage modules: `精选笔记`, `施工中`, and `推荐阅读顺序`
- Upgraded `docs/major/foundation/index.md` into a proper landing page with course cards, state badges, and reading guidance
- Upgraded `docs/physics/optics/index.md` into the same landing-page pattern for consistency with the rest of the site
- Reworked `docs/friends.md` into a fuller reference-card wall and limited entries to the three explicitly confirmed inspiration sites:
  - `https://note.isshikih.top/`
  - `https://savia7582.github.io/Exterior/`
  - `https://note.tonycrane.cc/`
- Added explicit “what was borrowed” framing so the references are documented as visual, structural, and product-level inspiration respectively
- Added supporting styles in `docs/stylesheets/extra.css` for muted feature cards, reading-path block, and friend tags

Why:
- The homepage needed stronger next-step guidance after the first visual overhaul
- The `专业基础课` and `光学` index pages lagged behind the new section-entry style used elsewhere
- The friend-links page should reflect the actual reference set and make the inspiration relationship explicit

Validation:
- Ran `powershell -ExecutionPolicy Bypass -File .\scripts\validate-mkdocs.ps1`
- Validation build completed successfully in `.tmp_site_validation/`
- Confirmed generated HTML includes homepage second-round sections, upgraded sub-index pages, and tagged friend cards

Files changed:
- `docs/index.md`
- `docs/major/foundation/index.md`
- `docs/physics/optics/index.md`
- `docs/friends.md`
- `docs/stylesheets/extra.css`
- `MAINTENANCE_LOG.md`

## 2026-04-16 - Homepage hero illustration slot and CSS fallback atmosphere

Scope:
- Homepage hero refinement only
- Prepare for future illustrated banner without requiring external image generation now

Completed:
- Reworked the homepage hero in `docs/index.md` into a two-column layout with text on the left and a dedicated illustration slot on the right
- Added a project-ready hero-art placeholder area meant for a future custom banner image
- Implemented a pure CSS fallback scene in `docs/stylesheets/extra.css` that evokes an empty classroom, cold sea light, and a solitary blue-gray figure silhouette
- Added a small caption under the hero visual so the placeholder reads as intentional and replaceable

Why:
- The user only has ChatGPT Plus and cannot use the OpenAI Images API fallback route
- The site still benefits from having a strong visual hero structure now, while preserving a clean upgrade path for a future final illustration

Validation:
- Ran `powershell -ExecutionPolicy Bypass -File .\scripts\validate-mkdocs.ps1`
- Validation build completed successfully in `.tmp_site_validation/`
- Confirmed generated homepage HTML includes `hero-panel--illustrated`, `hero-visual`, and `hero-art` blocks

Files changed:
- `docs/index.md`
- `docs/stylesheets/extra.css`
- `MAINTENANCE_LOG.md`
