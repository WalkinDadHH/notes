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

  // 长文顶部的阅读进度线
  const header = document.querySelector(".md-header");
  if (!header) return;
  const line = document.createElement("div");
  line.className = "reading-progress";
  line.setAttribute("aria-hidden", "true");
  header.append(line);

  let queued = false;
  const update = () => {
    queued = false;
    const range = document.documentElement.scrollHeight - window.innerHeight;
    line.style.transform = `scaleX(${range > 0 ? Math.min(window.scrollY / range, 1) : 0})`;
  };
  const queue = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  };
  window.addEventListener("scroll", queue, { passive: true });
  window.addEventListener("resize", queue);
  document.addEventListener("toggle", queue, true);
  update();
})();

console.log("%c流离之人，追逐幻影。%c\nψ = U (r − a²/r) sin θ", "color:#b5331f;font-size:14px", "color:#565b66");
