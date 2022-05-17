export default function initNavMobile() {
  const list = document.querySelectorAll(".list");
  if (list) {
    function activeLink() {
      list.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    }
    list.forEach((item) => item.addEventListener("click", activeLink));
  }
}
