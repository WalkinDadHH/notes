// 标题下显示字数和预计阅读时长，首页和短页面不显示
(function () {
  const article = document.querySelector(".md-content__inner");
  const title = article && article.querySelector("h1");
  if (!title || article.querySelector(".home-hero, .friend-links")) return;

  const copy = article.cloneNode(true);
  copy
    .querySelectorAll("h1, .arithmatex, pre, script, style, svg, .headerlink, .exam-tags, .md-source-file")
    .forEach((el) => el.remove());
  const count = copy.textContent.replace(/\s+/g, "").length;
  if (count < 300) return;

  const meta = document.createElement("p");
  meta.className = "page-meta";
  meta.textContent = `约 ${count.toLocaleString("zh-CN")} 字 · 预计阅读 ${Math.ceil(count / 400)} 分钟`;
  title.after(meta);
})();
