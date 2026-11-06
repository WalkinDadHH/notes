// 标记放不下、需要横滑的公式，样式见 extra.css
function markScrollableFormulas() {
  document.querySelectorAll(".arithmatex").forEach((el) => {
    el.classList.toggle("arithmatex--scrolls", el.scrollWidth - el.clientWidth > 6);
  });
}

let formulaMarkTimer;
function scheduleFormulaMark() {
  clearTimeout(formulaMarkTimer);
  formulaMarkTimer = setTimeout(markScrollableFormulas, 150);
}

window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    packages: { "[+]": ["boldsymbol"] },
  },
  loader: { load: ["[tex]/boldsymbol"] },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex",
  },
  startup: {
    pageReady: () =>
      MathJax.startup.defaultPageReady().then(() => {
        markScrollableFormulas();
        // 字体加载、折叠框展开和窗口变化都会改变页面尺寸，这时重新判断
        new ResizeObserver(scheduleFormulaMark).observe(document.body);
      }),
  },
};

document$.subscribe(() => {
  // 首次加载由 MathJax 自己排版，这时输出模块还没就绪
  if (!MathJax.startup || !MathJax.startup.output) return;
  MathJax.startup.output.clearCache();
  MathJax.typesetClear();
  MathJax.texReset();
  MathJax.typesetPromise();
});

// 搜索结果里的公式是 LaTeX 原文，排版后再显示
function typesetSearchResult(item) {
  const blocks = [...item.querySelectorAll("article h1, article h2, article p")];
  blocks.forEach((block) => {
    block.innerHTML = block.innerHTML
      .replace(/\\\[([\s\S]*?)\\\]|\\\(([\s\S]*?)\\\)/g, (_, display, inline) => {
        const tex = (display || inline).replace(/<\/?mark[^>]*>/g, "");
        return `<span class="arithmatex">\\(${tex}\\)</span>`;
      })
      .replace(/\\[(\[][^<]*$/, "…");
  });
  return MathJax.startup.promise.then(() => MathJax.typesetPromise(blocks));
}

const searchResults = document.querySelector(".md-search-result__list");
if (searchResults) {
  new MutationObserver((records) => {
    records.forEach((record) => {
      record.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) typesetSearchResult(node);
      });
    });
  }).observe(searchResults, { childList: true });
}
