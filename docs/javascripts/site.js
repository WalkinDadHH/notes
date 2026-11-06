// GitHub Pages 传大文件很慢，PDF 改从 jsDelivr 取
(function () {
  const site = "https://walkindadhh.github.io/notes/";
  const cdn = "https://cdn.jsdelivr.net/gh/WalkinDadHH/notes@gh-pages/";
  const toCdn = (url) => (url.startsWith(site) ? cdn + url.slice(site.length) : url);

  document.querySelectorAll('.md-content a[href*=".pdf"]').forEach((link) => {
    link.href = toCdn(link.href);
  });

  document.querySelectorAll('.md-content iframe[src*=".pdf"]').forEach((frame) => {
    const hint = document.createElement("p");
    hint.className = "pdf-hint";
    hint.textContent = "PDF 显示不出来或加载太慢时，切到图片模式。";
    frame.before(hint);
    frame.src = toCdn(frame.src);
  });
})();

// 首页的运行天数按访问当天计算
(function () {
  const days = document.querySelector("[data-since]");
  if (!days) return;
  const start = new Date(`${days.dataset.since}T00:00:00+08:00`);
  days.textContent = Math.floor((Date.now() - start) / 86400000);
})();

// 标题下显示字数和预计阅读时长，首页和短页面不显示
(function () {
  const article = document.querySelector(".md-content__inner");
  const title = article && article.querySelector("h1");
  if (!title || article.querySelector(".home-hero, .friend-links, .update-log")) return;

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
