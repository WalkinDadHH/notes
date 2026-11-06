// 标记放不下、需要横滑的公式，样式见 extra.css
function markScrollableFormulas() {
  document.querySelectorAll(".arithmatex").forEach((el) => {
    el.classList.toggle("arithmatex--scrolls", el.scrollWidth - el.clientWidth > 6);
  });
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
    pageReady: () => MathJax.startup.defaultPageReady().then(markScrollableFormulas),
  },
};

// 折叠框和标签页里的公式隐藏时量不出宽度，打开后重新判断
window.addEventListener("resize", markScrollableFormulas);
document.addEventListener("toggle", markScrollableFormulas, true);
document.addEventListener("change", markScrollableFormulas);

document$.subscribe(() => {
  MathJax.startup.output.clearCache();
  MathJax.typesetClear();
  MathJax.texReset();
  MathJax.typesetPromise();
});
