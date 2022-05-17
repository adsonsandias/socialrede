export default function initCurti() {
  const bntCurti = document.querySelectorAll(".nav-publicacao li a");
  if (bntCurti) {
    function activeCurti() {
      bntCurti.forEach((item) => item.classList.remove("btn-p-ative"));
      this.classList.add("btn-p-ative");
    }
    bntCurti.forEach((item) => item.addEventListener("click", activeCurti));
  }
}
