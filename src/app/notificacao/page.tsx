import type { Metadata } from "next";

import { Sidenav } from "../../components/Sidenav";
import { MobileNav } from "../../components/MobileNav";
import { Spinner } from "../../components/Spinner";
import { RightSidebar } from "../../components/RightSidebar";
import { TopSearchBar } from "../../components/TopSearchBar";
import { AppContainer } from "../../components/AppContainer";

import styles from "./notificacao.module.scss";

export const metadata: Metadata = {
  title: "Notificação",
};

export default function Page() {
  return (
    <>
      <Spinner />

      <AppContainer id="notificacao" className={styles.root}>
        <Sidenav activeHref="/notificacao" />

        <main className="content">
          <TopSearchBar />

          <div className="publicacao-bg">
            <div className="container-notificacao">
              <div className="topo-notificacao">
                <h2 className="f-18 b8">Notificação</h2>
                <i className="fi fi-rr-settings"></i>
              </div>
              <div className="notificacao-container">
                <div className="info-notificacao">
                  <img
                    src="/img/notificacao/foto-perfil.png"
                    alt="Foto de perfil"
                  />
                  <div>
                    <h3 className="f-14 b8">Paulo</h3>
                    <p className="b5">
                      adicionou uma nova publicação na sua lista de linha do
                      tempo
                    </p>
                  </div>
                </div>
                <div className="previo-notificacao">
                  <img
                    src="/img/notificacao/foto.jpg"
                    alt="Previo Notificação"
                  />
                </div>
              </div>
              <div className="notificacao-container">
                <div className="info-notificacao">
                  <img
                    src="/img/notificacao/foto-perfil-1.png"
                    alt="Foto de perfil"
                  />
                  <div>
                    <h3 className="f-14 b8">Claudia</h3>
                    <p className=" b5">
                      adicionou Jhonatas na sua lista de amigos
                    </p>
                  </div>
                </div>
                <div className="previo-notificacao">
                  <img
                    src="/img/notificacao/foto-1.jpg"
                    alt="Previo Notificação"
                  />
                </div>
              </div>
              <div className="notificacao-container">
                <div className="info-notificacao">
                  <img
                    src="/img/notificacao/foto-perfil-2.png"
                    alt="Foto de perfil"
                  />
                  <div>
                    <h3 className="f-14 b8">Ana Paula</h3>
                    <p className=" b5">
                      adicionou uma foto na sua lista do tempo
                    </p>
                  </div>
                </div>
                <div className="previo-notificacao">
                  <img
                    src="/img/notificacao/foto-2.jpg"
                    alt="Previo Notificação"
                  />
                </div>
              </div>
              <div className="notificacao-container">
                <div className="info-notificacao">
                  <img
                    src="/img/notificacao/foto-perfil-3.png"
                    alt="Foto de perfil"
                  />
                  <div>
                    <h3 className="f-14 b8">Paulo</h3>
                    <p className=" b5">
                      adicionou bruno na sua lista de amigos
                    </p>
                  </div>
                </div>
                <div className="previo-notificacao">
                  <img
                    src="/img/notificacao/foto-3.jpg"
                    alt="Previo Notificação"
                  />
                </div>
              </div>
            </div>

            <div className="container-notificacao-s">
              <div className="topo-solicitacao">
                <h2 className="f-18 b8">Solicitações</h2>
              </div>
              <div className="solicitacoes">
                <div className="bg-solicitacao">
                  <img
                    src="/img/notificacao/foto-solicitacao.jpg"
                    alt="Previo solicitacao"
                  />
                  <div className="bg-confirmacao">
                    <p className="b8">
                      Jhonatas enviou uma solicitação de amizade para você
                    </p>
                    <button className="btn-c">Confirmar</button>
                    <button className="btn-e">Excluir</button>
                  </div>
                </div>
                <div className="bg-solicitacao">
                  <img
                    src="/img/notificacao/foto-solicitacao-1.jpg"
                    alt="Previo solicitacao"
                  />
                  <div className="bg-confirmacao">
                    <p className="b8">
                      Kleiton enviou uma solicitação de amizade para você
                    </p>
                    <button className="btn-c">Confirmar</button>
                    <button className="btn-e">Excluir</button>
                  </div>
                </div>
                <div className="bg-solicitacao">
                  <img
                    src="/img/notificacao/foto-solicitacao-2.jpg"
                    alt="Previo solicitacao"
                  />
                  <div className="bg-confirmacao">
                    <p className="b8">
                      Ana Clara enviou uma solicitação de amizade para você
                    </p>
                    <button className="btn-c">Confirmar</button>
                    <button className="btn-e">Excluir</button>
                  </div>
                </div>
                <div className="bg-solicitacao">
                  <img
                    src="/img/notificacao/foto-solicitacao-3.jpg"
                    alt="Previo solicitacao"
                  />
                  <div className="bg-confirmacao">
                    <p className="b8">
                      Bruna L. enviou uma solicitação de amizade para você
                    </p>
                    <button className="btn-c">Confirmar</button>
                    <button className="btn-e">Excluir</button>
                  </div>
                </div>
                <div className="bg-solicitacao">
                  <img
                    src="/img/notificacao/foto-solicitacao-4.jpg"
                    alt="Previo solicitacao"
                  />
                  <div className="bg-confirmacao">
                    <p className="b8">
                      Janile S. enviou uma solicitação de amizade para você
                    </p>
                    <button className="btn-c">Confirmar</button>
                    <button className="btn-e">Excluir</button>
                  </div>
                </div>
                <div className="bg-solicitacao">
                  <img
                    src="/img/notificacao/foto-solicitacao-5.jpg"
                    alt="Previo solicitacao"
                  />
                  <div className="bg-confirmacao">
                    <p className="b8">
                      Felipe N. enviou uma solicitação de amizade para você
                    </p>
                    <button className="btn-c">Confirmar</button>
                    <button className="btn-e">Excluir</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <MobileNav activeHref="/notificacao" />
        <RightSidebar variant="notificacao" />
      </AppContainer>
    </>
  );
}
