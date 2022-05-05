// live js
const btnAbrirChat = document.querySelector(".btn-live");
const btnFechaChat = document.querySelector(".chat-btn-titulo span");
const chatBarra = document.querySelector(".chat");
const chatGrid = document.querySelector(".container#live.ativo");

function abrirChat() {
  chatBarra.style.display = "flex";
  btnAbrirChat.style.display = "none";
  chatGrid.classList.add("ativo");
}

function abrirFechar() {
  chatBarra.style.display = "none";
  btnAbrirChat.style.display = "flex";
  chatGrid.classList.remove("ativo");
}

btnAbrirChat.addEventListener("click", abrirChat);
btnFechaChat.addEventListener("click", abrirFechar);

// canais
const btnCanais = document.querySelector(".canais span");
const canalRecomendado = document.querySelector(".canal-recomendado");

function ativaCanais() {
  canalRecomendado.classList.toggle("ativo");
}

btnCanais.addEventListener("click", ativaCanais);

// redimencionar
const btnRedimendionarTela = document.querySelector(".redimencionar");
const resizeGrid = document.querySelector(".container");

function resizeTela() {
  resizeGrid.classList.toggle("resize");
  if (sideNav.style.display === "flex") {
    sideNav.style.display = "none";
  }
  if (chatBarra.style.display === "flex") {
    chatBarra.style.display = "none";
  }
}

btnRedimendionarTela.addEventListener("click", resizeTela);

// expandir texto live
const btntextoExpan = document.querySelector(".btn-texto-expandir");
const textoExpan = document.querySelector(".live-on");

function expanTextolive() {
  textoExpan.classList.toggle("expan");
}

btntextoExpan.addEventListener("click", expanTextolive);
