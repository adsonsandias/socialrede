export default function initLoad() {}

let load = document.querySelector(".spinner-bg");

window.addEventListener("load", () => {
  load.parentElement.removeChild(load);
});
