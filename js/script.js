const sidenav = document.querySelectorAll(".bg-nav nav ul li a");
function activeLink() {
  sidenav.forEach((item) => item.classList.remove("active-sidenav"));
  this.classList.add("active-sidenav");
}
sidenav.forEach((item) => item.addEventListener("click", activeLink));

const bntCurti = document.querySelectorAll(".nav-publicacao li a");
function activeCurti() {
  bntCurti.forEach((item) => item.classList.remove("btn-p-ative"));
  this.classList.add("btn-p-ative");
}
bntCurti.forEach((item) => item.addEventListener("click", activeCurti));

const bntModo = document.querySelectorAll(".modo-noturno a");
function activeModo() {
  bntModo.forEach((item) => item.classList.remove("on-modo"));
  this.classList.add("on-modo");
}
bntModo.forEach((item) => item.addEventListener("click", activeModo));

const choseBtn = document.querySelector(".close");
const sideNav = document.querySelector(".sidenav");
const menu = document.querySelector(".menu");

choseBtn.addEventListener("click", () => {
  sideNav.style.display = "none";
  // menu.style.display = "flex";
  // choseBtn.style.display = "none";
});

menu.addEventListener("click", () => {
  sideNav.style.display = "flex";
  // menu.style.display = "none";
  // choseBtn.style.display = "flex";
});
