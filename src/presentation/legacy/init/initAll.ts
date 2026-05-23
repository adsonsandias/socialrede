import { bindOnce } from "@/shared/dom/bindOnce";

function initGeral(): void {
  const links = document.querySelectorAll<HTMLAnchorElement>(
    ".bg-nav nav ul li a",
  );
  links.forEach((link) => {
    bindOnce(link, "SidenavActive", "click", function () {
      links.forEach((item) => item.classList.remove("active-sidenav"));
      link.classList.add("active-sidenav");
    });
  });
}

function initNavMobile(): void {
  const items = document.querySelectorAll<HTMLElement>(".list");
  items.forEach((item) => {
    bindOnce(item, "NavMobileActive", "click", function () {
      items.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
    });
  });
}

function initSideNavChose(): void {
  const closeButtons = document.querySelectorAll<HTMLElement>(".close");
  const sideNav = document.querySelector<HTMLElement>(".sidenav");
  const menuButtons = document.querySelectorAll<HTMLElement>(".menu");

  if (!sideNav) return;

  closeButtons.forEach((btn) => {
    bindOnce(btn, "SideNavClose", "click", () => {
      sideNav.style.display = "none";
    });
  });

  menuButtons.forEach((btn) => {
    bindOnce(btn, "SideNavOpen", "click", () => {
      sideNav.style.display = "flex";
    });
  });
}

function initCurti(): void {
  const buttons = document.querySelectorAll<HTMLElement>(
    ".nav-publicacao li a",
  );
  buttons.forEach((btn) => {
    bindOnce(btn, "PublicacaoActive", "click", () => {
      buttons.forEach((item) => item.classList.remove("btn-p-ative"));
      btn.classList.add("btn-p-ative");
    });
  });
}

function initPerfil(): void {
  const btnSugestao = document.querySelector<HTMLElement>(
    ".btn-sugestao-amizade",
  );
  const gridSugestao = document.querySelector<HTMLElement>(
    ".sugestao-de-amizade",
  );

  if (btnSugestao && gridSugestao) {
    bindOnce(btnSugestao, "SugestaoToggle", "click", () => {
      gridSugestao.classList.toggle("ativo");
    });
  }

  const btnSelecao = document.querySelectorAll<HTMLElement>(
    ".selecao-perfil-home span",
  );
  btnSelecao.forEach((btn) => {
    bindOnce(btn, "SelecaoPerfil", "click", () => {
      btnSelecao.forEach((item) => item.classList.remove("ativo"));
      btn.classList.add("ativo");
    });
  });
}

function initMensagem(): void {
  const mensagemHome = document.querySelector<HTMLElement>(".mensagem-pagina");
  const mensagemGrid = document.querySelector<HTMLElement>(
    ".pagina-inicial-mensagem",
  );
  const btnMensagemInternaDesk = document.querySelector<HTMLElement>(
    ".volta-mensagem-desktop",
  );
  const btnMensagemHome = document.querySelector<HTMLElement>(
    ".mensagem-btn-abrir",
  );
  const navMobileInterna = document.querySelector<HTMLElement>(
    "#mensagem .container-nav-mobile",
  );

  if (
    !mensagemHome ||
    !mensagemGrid ||
    !btnMensagemInternaDesk ||
    !btnMensagemHome ||
    !navMobileInterna
  )
    return;

  bindOnce(btnMensagemInternaDesk, "VoltarMensagemDesktop", "click", () => {
    mensagemHome.classList.toggle("ativo");
    mensagemGrid.classList.toggle("ativo");
    navMobileInterna.style.display = "flex";
  });

  bindOnce(btnMensagemHome, "AbrirMensagem", "click", () => {
    mensagemHome.classList.toggle("ativo");
    mensagemGrid.classList.toggle("ativo");
    navMobileInterna.style.display = "none";
  });
}

function initModoDark(): void {
  const btnModoLight = document.querySelectorAll<HTMLElement>(".btn-light");
  const btnModoDark = document.querySelectorAll<HTMLElement>(".btn-dark");
  const logoDark = document.querySelectorAll<HTMLElement>(".dark-logo");
  const logoLight = document.querySelectorAll<HTMLElement>(".light-logo");

  type Theme = "light" | "dark";

  const applyTheme = (theme: Theme) => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);

    btnModoLight.forEach((item) => item.classList.remove("on-modo"));
    btnModoDark.forEach((item) => item.classList.remove("on-modo"));

    if (theme === "light") {
      btnModoLight.forEach((item) => item.classList.add("on-modo"));
      logoDark.forEach((item) => (item.style.display = "none"));
      logoLight.forEach((item) => (item.style.display = "block"));
    } else {
      btnModoDark.forEach((item) => item.classList.add("on-modo"));
      logoDark.forEach((item) => (item.style.display = "block"));
      logoLight.forEach((item) => (item.style.display = "none"));
    }
  };

  const persistTheme = (theme: Theme) => {
    try {
      localStorage.setItem("theme", theme);
    } catch {
      return;
    }
  };

  const readStoredTheme = (): Theme | null => {
    try {
      const value = localStorage.getItem("theme");
      if (value === "light" || value === "dark") return value;
      return null;
    } catch {
      return null;
    }
  };

  const inferSystemTheme = (): Theme => {
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  applyTheme(readStoredTheme() ?? inferSystemTheme());

  btnModoLight.forEach((btn) => {
    bindOnce(btn, "ModoLight", "click", (event) => {
      event.preventDefault();
      applyTheme("light");
      persistTheme("light");
    });
  });

  btnModoDark.forEach((btn) => {
    bindOnce(btn, "ModoDark", "click", (event) => {
      event.preventDefault();
      applyTheme("dark");
      persistTheme("dark");
    });
  });
}

function initLive(): void {
  const btnAbrirChat = document.querySelector<HTMLElement>(".btn-live");
  const btnFechaChat = document.querySelector<HTMLElement>(
    ".chat-btn-titulo span",
  );
  const chatBarra = document.querySelector<HTMLElement>(".chat");
  const chatGrid = document.querySelector<HTMLElement>(".container#live");

  if (btnAbrirChat && btnFechaChat && chatBarra && chatGrid) {
    bindOnce(btnAbrirChat, "LiveAbrirChat", "click", () => {
      chatBarra.style.display = "flex";
      btnAbrirChat.style.display = "none";
      chatGrid.classList.add("ativo");
    });

    bindOnce(btnFechaChat, "LiveFecharChat", "click", () => {
      chatBarra.style.display = "none";
      btnAbrirChat.style.display = "flex";
      chatGrid.classList.remove("ativo");
    });
  }

  const btnCanais = document.querySelector<HTMLElement>(".canais span");
  const canalRecomendado =
    document.querySelector<HTMLElement>(".canal-recomendado");
  if (btnCanais && canalRecomendado) {
    bindOnce(btnCanais, "LiveCanais", "click", () => {
      canalRecomendado.classList.toggle("ativo");
    });
  }

  const btnRedimencionarTela =
    document.querySelector<HTMLElement>(".redimencionar");
  const resizeGrid = document.querySelector<HTMLElement>(".container");
  const sideNav = document.querySelector<HTMLElement>(".sidenav");

  if (btnRedimencionarTela && resizeGrid) {
    bindOnce(btnRedimencionarTela, "LiveResize", "click", () => {
      resizeGrid.classList.toggle("resize");
      if (sideNav?.style.display === "flex") sideNav.style.display = "none";
      if (chatBarra?.style.display === "flex") chatBarra.style.display = "none";
    });
  }

  const btntextoExpan = document.querySelector<HTMLElement>(
    ".btn-texto-expandir",
  );
  const textoExpan = document.querySelector<HTMLElement>(".live-on");
  if (btntextoExpan && textoExpan) {
    bindOnce(btntextoExpan, "LiveExpandirTexto", "click", () => {
      textoExpan.classList.toggle("expan");
    });
  }
}

function initLoad(): void {
  const spinner = document.querySelector<HTMLElement>(".spinner-bg");
  if (!spinner) return;

  const remove = () => {
    spinner.remove();
  };

  if (document.readyState === "complete") {
    remove();
    return;
  }

  window.addEventListener("load", remove, { once: true });
}

export function initAllLegacyInteractions(): void {
  initGeral();
  initLive();
  initMensagem();
  initNavMobile();
  initPerfil();
  initModoDark();
  initSideNavChose();
  initCurti();
  initLoad();
}
