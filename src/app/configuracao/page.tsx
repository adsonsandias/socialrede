import type { Metadata } from "next";

import { Sidenav } from "../../components/Sidenav";
import { MobileNav } from "../../components/MobileNav";
import { Spinner } from "../../components/Spinner";
import { RightSidebar } from "../../components/RightSidebar";
import { TopSearchBar } from "../../components/TopSearchBar";
import { AppContainer } from "../../components/AppContainer";

import styles from "./configuracao.module.scss";

export const metadata: Metadata = {
  title: "Configuração",
};

export default function Page() {
  return (
    <>
      <Spinner />

      <AppContainer id="configuracao" className={styles.root}>
        <Sidenav activeHref="/configuracao" />

        <main className="content">
          <TopSearchBar />

          <div className="publicacao-bg">
            <h2 className="b8">Conta</h2>
            <div className="conta-bg">
              <div className="conta">
                <a href="#">
                  <i className="fi fi-rr-user"></i>
                  <p className="r-16 b8">Informações pessoais e da conta</p>
                </a>
                <a href="#">
                  <i className="fi fi-rr-shield-plus"></i>
                  <p className="r-16 b8">Senha e Segurança</p>
                </a>
                <a href="#">
                  <i className="fi fi-rr-credit-card"></i>
                  <p className="r-16 b8">Pagamentos</p>
                </a>
              </div>
            </div>

            <h2 className="b8">Preferências</h2>
            <div className="conta-bg">
              <div className="conta">
                <a href="#">
                  <i className="fi fi-rr-layout-fluid"></i>
                  <p className="r-16 b8">Feed de Notícias</p>
                </a>
                <a href="#">
                  <i className="fi fi-rr-bell"></i>
                  <p className="r-16 b8">Notificações</p>
                </a>
                <a href="#">
                  <i className="fi fi-rr-globe"></i>
                  <p className="r-16 b8">Idioma e região</p>
                </a>
                <a href="#">
                  <i className="fi fi-rr-moon"></i>
                  <p className="r-16 b8">Modo escuro</p>
                </a>
                <a href="#">
                  <i className="fi fi-rr-time-quarter-to"></i>
                  <p className="r-16 b8">Tempo de uso</p>
                </a>
              </div>
            </div>

            <h2 className="b8">Público e Visibilidade</h2>
            <div className="conta-bg">
              <div className="conta">
                <a href="#">
                  <i className="fi fi-rr-user"></i>
                  <p className="r-16 b8">Informações do perfil</p>
                </a>
                <a href="#">
                  <i className="fi fi-rr-following"></i>
                  <p className="r-16 b8">
                    Como as pessoas encontram e contatam você
                  </p>
                </a>
                <a href="#">
                  <i className="fi fi-rr-layout-fluid"></i>
                  <p className="r-16 b8">Publicações</p>
                </a>
                <a href="#">
                  <i className="fi fi-rr-playing-cards"></i>
                  <p className="r-16 b8">Stories</p>
                </a>
                <a href="#">
                  <i className="fi fi-rr-play-alt"></i>
                  <p className="r-16 b8">Shorts</p>
                </a>
              </div>
            </div>
          </div>
        </main>

        <MobileNav activeHref="/configuracao" />
        <RightSidebar />
      </AppContainer>
    </>
  );
}
