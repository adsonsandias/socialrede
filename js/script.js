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

const choseBtn = document.querySelector(".close");
const sideNav = document.querySelector(".sidenav");
const menu = document.querySelector(".menu");

choseBtn.addEventListener("click", () => {
  sideNav.style.display = "none";
});

menu.addEventListener("click", () => {
  sideNav.style.display = "flex";
});

const bntModoLight = document.querySelectorAll(".modo-noturno a.light");
const bntModoDark = document.querySelectorAll(".modo-noturno a.dark");
const logoDark = document.querySelectorAll(".dark-logo");
const logoLight = document.querySelectorAll(".light-logo");
const placeHoder = document.querySelector("input#pesquisa::placeholder");

function activeModoLight() {
  bntModoLight.forEach((item) => item.classList.remove("on-modo"));
  this.classList.add("on-modo");
  document.body.classList.add("light");
  document.body.classList.remove("dark");
  bntModoDark.forEach((item) => item.classList.remove("on-modo"));
  logoDark.forEach((item) => (item.style.display = "none"));
  logoLight.forEach((item) => (item.style.display = "block"));
}
bntModoLight.forEach((item) => item.addEventListener("click", activeModoLight));

function activeModoDark() {
  bntModoDark.forEach((item) => item.classList.remove("on-modo"));
  this.classList.add("on-modo");
  document.body.classList.add("dark");
  document.body.classList.remove("light");
  bntModoLight.forEach((item) => item.classList.remove("on-modo"));
  logoDark.forEach((item) => (item.style.display = "block"));
  logoLight.forEach((item) => (item.style.display = "none"));
}
bntModoDark.forEach((item) => item.addEventListener("click", activeModoDark));
