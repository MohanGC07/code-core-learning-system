// Wait for DOM to load then initialize Mermaid
document.addEventListener("DOMContentLoaded", function () {
  mermaid.initialize({
    startOnLoad: true,
    theme: document.body.getAttribute("data-md-color-scheme") === "slate"
      ? "dark"
      : "default",
    securityLevel: "loose",
    flowchart: { useMaxWidth: true, htmlLabels: true },
    sequence:   { useMaxWidth: true },
    timeline:   { useMaxWidth: true }
  });
});

// Re-render when dark/light mode switches
var observer = new MutationObserver(function () {
  var scheme = document.body.getAttribute("data-md-color-scheme");
  mermaid.initialize({
    startOnLoad: false,
    theme: scheme === "slate" ? "dark" : "default"
  });
  mermaid.init(undefined, document.querySelectorAll(".mermaid"));
});
observer.observe(document.body, {
  attributes: true,
  attributeFilter: ["data-md-color-scheme"]
});