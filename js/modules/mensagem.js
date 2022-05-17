export default function initMensagem() {
  // mensagem js
  const mensagemAberta = document.querySelector(".mensagem-aberta-bg");
  const mensagemHome = document.querySelector(".mensagem-pagina");
  const mensagemGrid = document.querySelector(".pagina-inicial-mensagem");
  const btnMensagemInternaDesk = document.querySelector(
    ".volta-mensagem-desktop"
  );
  const btnMensagemHome = document.querySelector(".mensagem-btn-abrir");
  const navMobileInterna = document.querySelector(
    "#mensagem .container-nav-mobile"
  );

  if (
    mensagemHome &&
    mensagemGrid &&
    btnMensagemInternaDesk &&
    btnMensagemHome &&
    navMobileInterna
  ) {
    function voltarAbrir() {
      mensagemHome.classList.toggle("ativo");
      mensagemGrid.classList.toggle("ativo");
      navMobileInterna.style.display = "none";
    }

    function voltarMensagemDeck() {
      mensagemHome.classList.toggle("ativo");
      mensagemGrid.classList.toggle("ativo");
      navMobileInterna.style.display = "flex";
    }

    btnMensagemInternaDesk.addEventListener("click", voltarMensagemDeck);
    btnMensagemHome.addEventListener("click", voltarAbrir);
  }
}
