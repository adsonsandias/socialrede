export default function initSideNavChose() {
  const choseBtn = document.querySelectorAll(".close");
  const sideNav = document.querySelector(".sidenav");
  const menu = document.querySelectorAll(".menu");

  if (choseBtn && sideNav && menu) {
    choseBtn.forEach((item) => {
      item.addEventListener("click", () => {
        sideNav.style.display = "none";
      });
    });

    menu.forEach((item) => {
      item.addEventListener("click", () => {
        sideNav.style.display = "flex";
      });
    });
  }
}
