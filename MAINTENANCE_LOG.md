# Maintenance Log

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
