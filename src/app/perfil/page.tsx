import type { Metadata } from "next";
import Link from "next/link";

import { Sidenav } from "../../components/Sidenav";
import { MobileNav } from "../../components/MobileNav";
import { Spinner } from "../../components/Spinner";
import { AppContainer } from "../../components/AppContainer";
import { Icon } from "../../components/Icon";

import styles from "./perfil.module.scss";

export const metadata: Metadata = {
  title: "Perfil",
};

export default function Page() {
  return (
    <>
      <Spinner />

      <AppContainer id="perfil-home" className={styles.root}>
        <Sidenav activeHref="/perfil" />

        <main className="content">
          <img src="/img/perfil/foto-de-capa.jpeg" alt="" />
          <span className="menu btn-blur">
            <Icon name="menu" size={20} />
          </span>
          <input type="checkbox" id="checkbox-add-publicacao" />
          <span className="add-publicacao btn-blur">
            <label
              id="checkbox-add-publicacao"
              htmlFor="checkbox-add-publicacao"
            >
              <Icon name="plus" size={20} />
              <div className="add-publicacao-aberto">
                <ul>
                  <h1 className="f-16">Criar</h1>
                  <li>
                    <Icon name="apps" size={20} />
                    <h2 className="f-12">Publicar</h2>
                  </li>
                  <li>
                    <Icon name="smartphone" size={20} />
                    <h2 className="f-12">Story</h2>
                  </li>
                  <li>
                    <Icon name="short" size={20} />
                    <h2 className="f-12">Short</h2>
                  </li>
                  <li>
                    <Icon name="headset" size={20} />
                    <h2 className="f-12">Transmisão ao vivo</h2>
                  </li>
                </ul>
              </div>
            </label>
          </span>
          <span className="btn-light btn-blur">
            <Icon name="sun" size={20} />
          </span>
          <span className="btn-dark btn-blur">
            <Icon name="moon" size={20} />
          </span>
          <span className="configuracao-perfil btn-blur">
            <Link href="/configuracao">
              <Icon name="settings" size={20} />
            </Link>
          </span>

          <div className="perfil-home-bg">
            <div className="perfil-user-home">
              <div className="perfil-user-home-container">
                <div className="user-homer">
                  <img
                    className="perfil"
                    src="/img/perfil/perfil.png"
                    alt="foto de perfil do Usuario"
                  />
                  <div className="user-homer-texto">
                    <h1 className="b8">Adson Santos</h1>
                    <h2 className="b8">@adsonsandias</h2>
                    <span className="detalhes-sobre-user b8-2">
                      Frontend Developer | UI/UI Designer | Motion design{" "}
                    </span>
                  </div>
                </div>
                <div className="p-s-s-texto">
                  <ul>
                    <li>
                      <h2 className="b8">24</h2>
                      <span className="f-16 b8">Publicação</span>
                    </li>
                    <li>
                      <h2 className="b8">30mil</h2>
                      <span className="f-16 b8">Seguidores</span>
                    </li>
                    <li>
                      <h2 className="b8">609</h2>
                      <span className="f-16 b8">Seguindo</span>
                    </li>
                  </ul>
                </div>
                <div className="sobre-user-home">
                  <p className="b8-2">
                    Quer desenvolver seu site, webapp, ou aplicativo movel, com
                    elegrancia, design, responsividade e performace?!
                  </p>
                  <p className="b8-2">
                    Então você esta no perfil certo, conheça nosso portfolio
                    aqui, ou em nosso site oficial cliclando no link abaixo👇
                  </p>
                  <div className="links-perfil-home">
                    <a href="#">adsonsandias.com</a>
                    <ul>
                      <li>
                        <a href="#">
                          <Icon name="link" size={20} />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Icon name="at" size={20} />
                        </a>
                      </li>
                      <li>
                        <a className="btn-sugestao-amizade" href="#">
                          <Icon name="userPlus" size={20} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="sugestao-de-amizade">
                <h2 className="b8">Sugestões de amizades</h2>
                <div>
                  <ul>
                    <li>
                      <a href="#">
                        <img src="/img/perfil/sugestao.jpg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/perfil/sugestao1.jpg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/perfil/sugestao2.jpg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/perfil/sugestao3.jpg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/perfil/sugestao.jpg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/perfil/sugestao1.jpg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/perfil/sugestao2.jpg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/perfil/sugestao3.jpg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="perfil-galeria-home">
              <div className="selecao-perfil-home">
                <span className="f-12 ativo b2">foto</span>
                <span className="f-12 b2">short</span>
                <span className="f-12 b2">live</span>
                <span className="f-12 b2">menção</span>
              </div>
              <div className="galeria-perfil-home">
                <ul>
                  <li>
                    <img src="/img/perfil/foto.jpg" alt="" />
                  </li>
                  <li>
                    <img src="/img/perfil/foto-1.jpg" alt="" />
                  </li>
                  <li>
                    <img src="/img/perfil/foto-2.jpg" alt="" />
                  </li>
                  <li>
                    <img src="/img/perfil/foto-3.jpg" alt="" />
                  </li>
                  <li>
                    <img src="/img/perfil/foto-4.jpg" alt="" />
                  </li>
                  <li>
                    <img src="/img/perfil/foto-5.jpg" alt="" />
                  </li>
                  <li>
                    <img src="/img/perfil/foto-6.jpg" alt="" />
                  </li>
                  <li>
                    <img src="/img/perfil/foto-7.jpg" alt="" />
                  </li>
                  <li>
                    <img src="/img/perfil/foto-9.jpg" alt="" />
                  </li>
                  <li>
                    <img src="/img/perfil/foto-10.jpg" alt="" />
                  </li>
                  <li>
                    <img src="/img/perfil/foto-1.jpg" alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>

        <MobileNav activeHref="/perfil" />
      </AppContainer>
    </>
  );
}
