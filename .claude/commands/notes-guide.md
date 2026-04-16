# WalkinDadHH 笔记站维护指南

你是这个 MkDocs 笔记站的维护助手。在执行任何操作前，先通读此指南，确保行为与已有风格完全一致。

---

## 项目基本信息

- 项目目录：`D:\Unbili`
- 构建工具：MkDocs + Material 主题，Python 3.13
- mkdocs 路径：`C:\Users\KANEKI\AppData\Local\Programs\Python\Python313\Scripts\mkdocs.exe`
- Python 路径：`C:\Users\KANEKI\AppData\Local\Programs\Python\Python313\python.exe`
- GitHub CLI：`C:\Program Files\GitHub CLI\gh.exe`，已登录 WalkinDadHH

---

## 协作前置检查

在修改仓库结构、部署方式、维护规范前，先阅读：

- `README.md`
- `MAINTENANCE_LOG.md`
- 本文件

如果本次修改会影响后续维护流程，完成后必须在 `MAINTENANCE_LOG.md` 追加一条记录。

---

## 部署命令（每次更新必须执行）

```bash
cd D:/Unbili
git add . && git commit -m "feat/fix: 描述" && git push
/c/Users/KANEKI/AppData/Local/Programs/Python/Python313/Scripts/mkdocs.exe gh-deploy --force
```

**这是仓库所有者明确要求保留的工作流。不要擅自关闭自动提交/自动部署机制。**

---

## 添加新课程 PDF 笔记的完整流程

1. **复制 PDF** 到对应 `docs/` 子目录（如 `docs/major/foundation/`）
2. **转换图片**（PyMuPDF，4x 分辨率，quality=95）：
   ```python
   import fitz
   doc = fitz.open("笔记.pdf")
   for i, page in enumerate(doc):
       mat = fitz.Matrix(4.0, 4.0)
       pix = page.get_pixmap(matrix=mat)
       pix.save(f"imgs/page_{i+1:02d}.jpg", jpg_quality=95)
   ```
3. **创建 .md 页面**，格式参考 `docs/major/foundation/engineering-mechanics.md`（PDF iframe + 图片 tab）
4. **更新 `mkdocs.yml`** 的 nav（见下方导航规范）
5. **更新父级 `index.md`**（Savia 风格，见下方）
6. **部署**

---

## mkdocs.yml 导航规范

当前完整 nav（每次修改 nav 后以此为基础扩展，不要改变已有结构）：

```yaml
nav:
  - 首页: index.md
  - 数学:
    - math/index.md
    - 常微分方程: math/ode/index.md
  - 物理:
    - physics/index.md
    - 大学物理（下）:
      - 光学:
        - physics/optics/index.md
        - 几何光学: physics/optics/geometrical-optics.md
        - 光的干涉: physics/optics/interference.md
  - 化学:
    - chemistry/index.md
  - 专业课程:
    - 专业基础课:
      - major/foundation/index.md
      - 工程力学: major/foundation/engineering-mechanics.md
      - 工程热力学（甲）: major/foundation/thermodynamics/index.md
  - 关于: about.md
```

**关键规则：**
- 多章节课程（有独立 `index.md` 目录的）只保留一个入口，**不展开子章节**
- 单文件课程（PDF转图片笔记）直接 `- 课程名: path/file.md`

---

## 多章节 Markdown 课程笔记规范（单页滚动模式）

用于工程热力学等有多章内容的文字笔记。**不拆分独立页面**，所有章节合并到 `index.md`。

### 页面结构（从上到下）

```
# 课程名（甲/乙）

!!! note "课程信息"   ← 教师、教材、学分、考核

一段课程简介

---

## 符号速查   ← 如有，放在最前

---

## 章节概览   ← 所有章节状态表（必须有，放在笔记内容前）

| 章节 | 标题 | 状态 |
|------|------|------|
| 第X章 | 标题 | ✅ 或 🚧 |

!!! warning "施工中"   ← 如有未完成章节

---

## 第一章 · 标题   ← ## 级章节

!!! info "章节概览"

### 小节   ← ### 级
#### 子节   ← #### 级

---

## 第二章 · 标题

...（已完成章节）

---

## 第六章 · 标题   ← 未完成章节存根

!!! warning "施工中"
    本章笔记正在整理中，敬请期待。
```

### Admonition 类型约定

| 类型 | 用途 |
|------|------|
| `!!! info "章节概览"` | 每章开头的学习导引 |
| `!!! definition "..."` | 定义、定理 |
| `!!! key-point "..."` | 重要结论、需要记忆的规律 |
| `!!! note "..."` | 补充说明 |
| `!!! tip "..."` | 学习技巧、符号辨析、公式用法 |
| `!!! warning "施工中"` | 未完成章节 |

---

## 课程索引页（index.md）规范——Savia 风格

```markdown
## 课程类型（如：核心课程）

- [课程名](path/) —— 简短说明（教材/难度/状态）
```

**不要用表格**，用 H2 + 无序列表。

---

## 图片处理规范

- 分辨率：**4x**（`fitz.Matrix(4.0, 4.0)`）
- 质量：**95**（`jpg_quality=95`）
- 命名：`page_01.jpg`, `page_02.jpg` ...
- 目录：放在 `.md` 同级的 `imgs/` 子目录

---

## 课程名称（必须用正确名称）

- 数学：微积分甲（I）、微积分甲（II）、线性代数、概率论与数理统计
- 化学：普通化学（乙）
- 专业：工程力学、工程热力学（甲）

---

## Giscus 评论系统

启用方式：在笔记页 frontmatter 加 `comments: true`。已启用页面：几何光学、光的干涉、工程力学、工程热力学（甲）。

---

## 风格参考

- 样式来源：isshikih.top
- 结构来源：savia7582.github.io
- 热力学单页模式参考：czy1101kksk.github.io/energy/Engineering_Thermodynamics/

---

## Codex / Claude 协作约定

- 两者都把本仓库视为共享工作区，不要覆盖对方未理解的改动
- 优先修改 `docs/`、`mkdocs.yml`、维护文档；谨慎处理 `site/`
- `site/` 当前仍在 Git 跟踪中，本地构建会产生大量脏文件，除非任务明确要求，不要顺手提交这些产物
- 日常校验优先使用 `scripts/validate-mkdocs.ps1`，避免直接刷新已跟踪的 `site/`
- 自动发布是仓库所有者要求保留的流程，不要自行关闭
- 若更新了约定、脚本、目录策略，同步更新 `README.md` 或本文件，并记入 `MAINTENANCE_LOG.md`
