export default function initModoDark() {
  const bntModoLight = document.querySelectorAll(".btn-light");
  const bntModoDark = document.querySelectorAll(".btn-dark");
  const logoDark = document.querySelectorAll(".dark-logo");
  const logoLight = document.querySelectorAll(".light-logo");
  const placeHoder = document.querySelector("input#pesquisa::placeholder");

  if (bntModoLight && bntModoDark && logoDark && logoLight) {
    function activeModoLight() {
      bntModoLight.forEach((item) => item.classList.remove("on-modo"));
      this.classList.add("on-modo");
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      bntModoDark.forEach((item) => item.classList.remove("on-modo"));
      logoDark.forEach((item) => (item.style.display = "none"));
      logoLight.forEach((item) => (item.style.display = "block"));
    }
    bntModoLight.forEach((item) =>
      item.addEventListener("click", activeModoLight)
    );

    function activeModoDark() {
      bntModoDark.forEach((item) => item.classList.remove("on-modo"));
      this.classList.add("on-modo");
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      bntModoLight.forEach((item) => item.classList.remove("on-modo"));
      logoDark.forEach((item) => (item.style.display = "block"));
      logoLight.forEach((item) => (item.style.display = "none"));
    }
    bntModoDark.forEach((item) =>
      item.addEventListener("click", activeModoDark)
    );
  }
}
