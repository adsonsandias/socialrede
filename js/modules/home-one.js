export default function initHomeOne() {}

// const home = document.querySelector("[data-home]");
const links = document.querySelectorAll("[data-link]");

function handleClick(event) {
  event.preventDefault();
  fetchPage(event.target.href);
  window.history.pushState(null, null, event.target.href);
}

async function fetchPage(url) {
  const pageResponse = await fetch(url);
  const pageText = await pageResponse.text();
  replaceContent(pageText);
}

function replaceContent(newText) {
  const newHtml = document.createElement("div");
  newHtml.innerHTML = newText;

  const oldContent = document.querySelector("[data-home]");
  const newContent = newHtml.querySelector("[data-home]");

  oldContent.innerHTML = newContent.innerHTML;
  document.title = newHtml.querySelector("title").innerText;
}

window.addEventListener("popstate", () => {
  fetchPage(window.location.href);
});

links.forEach((link) => {
  link.addEventListener("click", handleClick);
});
