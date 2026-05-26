import type { Metadata } from "next";

import { Sidenav } from "../../components/Sidenav";
import { MobileNav } from "../../components/MobileNav";
import { Spinner } from "../../components/Spinner";
import { RightSidebar } from "../../components/RightSidebar";
import { TopSearchBar } from "../../components/TopSearchBar";
import { AppContainer } from "../../components/AppContainer";
import { Icon } from "../../components/Icon";

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
                  <Icon name="user" size={20} />
                  <p className="r-16 b8">Informações pessoais e da conta</p>
                </a>
                <a href="#">
                  <Icon name="shield" size={20} />
                  <p className="r-16 b8">Senha e Segurança</p>
                </a>
                <a href="#">
                  <Icon name="creditCard" size={20} />
                  <p className="r-16 b8">Pagamentos</p>
                </a>
              </div>
            </div>

            <h2 className="b8">Preferências</h2>
            <div className="conta-bg">
              <div className="conta">
                <a href="#">
                  <Icon name="feed" size={20} />
                  <p className="r-16 b8">Feed de Notícias</p>
                </a>
                <a href="#">
                  <Icon name="notificacao" size={20} />
                  <p className="r-16 b8">Notificações</p>
                </a>
                <a href="#">
                  <Icon name="globe" size={20} />
                  <p className="r-16 b8">Idioma e região</p>
                </a>
                <a href="#">
                  <Icon name="moon" size={20} />
                  <p className="r-16 b8">Modo escuro</p>
                </a>
                <a href="#">
                  <Icon name="time" size={20} />
                  <p className="r-16 b8">Tempo de uso</p>
                </a>
              </div>
            </div>

            <h2 className="b8">Público e Visibilidade</h2>
            <div className="conta-bg">
              <div className="conta">
                <a href="#">
                  <Icon name="user" size={20} />
                  <p className="r-16 b8">Informações do perfil</p>
                </a>
                <a href="#">
                  <Icon name="following" size={20} />
                  <p className="r-16 b8">
                    Como as pessoas encontram e contatam você
                  </p>
                </a>
                <a href="#">
                  <Icon name="feed" size={20} />
                  <p className="r-16 b8">Publicações</p>
                </a>
                <a href="#">
                  <Icon name="cards" size={20} />
                  <p className="r-16 b8">Stories</p>
                </a>
                <a href="#">
                  <Icon name="short" size={20} />
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
