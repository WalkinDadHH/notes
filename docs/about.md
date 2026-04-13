# 关于本站

## 技术栈

| 组件 | 说明 |
|------|------|
| [MkDocs](https://www.mkdocs.org/) | 静态网站生成器 |
| [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) | 主题 |
| [霞鹜文楷](https://github.com/lxgw/LxgwWenKai) | 中文正文字体 |
| [JetBrains Mono](https://www.jetbrains.com/lp/mono/) | 代码字体 |

## 构建与部署

### 本地预览

```bash
# 安装依赖
pip install mkdocs-material

# 启动开发服务器
mkdocs serve

# 浏览器打开 http://127.0.0.1:8000
```

### 构建静态文件

```bash
mkdocs build
# 输出到 site/ 目录
```

### 部署到 GitHub Pages

```bash
mkdocs gh-deploy
```
