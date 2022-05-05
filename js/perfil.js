const btnSugestao = document.querySelector(".btn-sugestao-amizade");
const gridSugestao = document.querySelector(".sugestao-de-amizade");

function expandirSugestao() {
  gridSugestao.classList.toggle("ativo");
}

btnSugestao.addEventListener("click", expandirSugestao);

// seleção home
const btnSelecao = document.querySelectorAll(".selecao-perfil-home span");

function ativaItemGaleria() {
  btnSelecao.forEach((item) => {
    item.classList.remove("ativo");
  });
  this.classList.add("ativo");
}

btnSelecao.forEach((item) => {
  item.addEventListener("click", ativaItemGaleria);
});
