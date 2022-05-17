export default function initGeral() {
  const sidenav = document.querySelectorAll(".bg-nav nav ul li a");
  if (sidenav) {
    function activeLink() {
      sidenav.forEach((item) => item.classList.remove("active-sidenav"));
      this.classList.add("active-sidenav");
    }
    sidenav.forEach((item) => item.addEventListener("click", activeLink));
  }
}
