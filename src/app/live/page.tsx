import type { Metadata } from "next";
import Link from "next/link";

import { Sidenav } from "../../components/Sidenav";
import { MobileNav } from "../../components/MobileNav";
import { Spinner } from "../../components/Spinner";
import { AppContainer } from "../../components/AppContainer";
import { Icon } from "../../components/Icon";

import styles from "./live.module.scss";

export const metadata: Metadata = {
  title: "Live",
};

export default function Page() {
  return (
    <>
      <Spinner />

      <AppContainer id="live" className={`ativo ${styles.root}`}>
        <Sidenav activeHref="/live" variant="live" />

        <main className="content">
          <div className="publicacao-bg">
            <div className="container-live">
              <div className="live-on">
                <div className="live">
                  <span className="btn-live">
                    <Icon name="chevronRight" size={20} />
                  </span>
                  <span className="redimencionar">
                    <Icon name="minimize" size={20} />
                  </span>
                  <span className="menu btn-menu-live">
                    <Icon name="menu" size={20} />
                  </span>
                  <video
                    src="/img/live/God of War_ Ragnarok - Official Gameplay Trailer (4K) _ PlayStation Showcase 2021.mp4"
                    controls
                    autoPlay
                    loop
                  ></video>
                  <div className="player-live">
                    <div className="play-pause-volume">
                      <span className="play">
                        <Icon name="play" size={20} />
                      </span>
                      <span className="pause">
                        <Icon name="pause" size={20} />
                      </span>
                      <span className="volume">
                        <Icon name="volume" size={20} />
                      </span>
                    </div>
                    <div className="config-redimencionar-expandir">
                      <span className="redimencionar">
                        <Icon name="minimize" size={20} />
                      </span>
                      <span className="expandir">
                        <Icon name="maximize" size={20} />
                      </span>
                      <span className="configuracao-play-live">
                        <Icon name="settings" size={20} />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="infor-live">
                  <div className="perfil-live">
                    <div className="perfil-ao-vivo">
                      <img src="/img/live/live-on.png" alt="Perfil Live" />
                      <span>ao vivo</span>
                    </div>
                    <div className="perfil-info-live">
                      <h2 className="b8">PlayHard</h2>
                      <p className="b8">God Of War</p>
                      <div className="hashtags-live">
                        <span className="b8-2">game play</span>
                        <span className="b8-2">god of war</span>
                        <span className="b8-2">pc</span>
                      </div>
                    </div>
                  </div>
                  <div className="inscricao">
                    <div className="btn-inscrever-se">
                      <button>Inscrever-se</button>
                      <button>Seguir</button>
                    </div>
                    <div className="pessoas-vendo">
                      <span className="c7">15.203</span>
                      <span>
                        <Icon name="users" className="c7" size={20} />
                      </span>
                      <span>
                        <Icon name="share" className="b8" size={20} />
                      </span>
                      <span>
                        <Icon name="more" className="b8" size={20} />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="sobre-perfil">
                  <h2 className="f-16 b8">Sobre PlayHard</h2>
                  <p className="b8-2">
                    Play hard e um canal de games diversos a onde você se
                    diverti rindo e acompanhando todas as historias e gameplay
                    dos jogos, se inscreva para ter a maior imersão no seus
                    jogos favoritos de um jeito unico!
                  </p>
                  <p className="b8-2">
                    Play hard e um canal de games diversos a onde você se
                    diverti rindo e acompanhando todas as historias e gameplay
                    dos jogos, se inscreva para ter a maior imersão no seus
                    jogos favoritos de um jeito unico!
                  </p>
                  <p className="b8-2">
                    Play hard e um canal de games diversos a onde você se
                    diverti rindo e acompanhando todas as historias e gameplay
                    dos jogos, se inscreva para ter a maior imersão no seus
                    jogos favoritos de um jeito unico!
                  </p>
                  <p className="b8-2">
                    Play hard e um canal de games diversos a onde você se
                    diverti rindo e acompanhando todas as historias e gameplay
                    dos jogos, se inscreva para ter a maior imersão no seus
                    jogos favoritos de um jeito unico!
                  </p>
                </div>
                <span className="btn-texto-expandir">
                  <Icon name="chevronDown" size={20} />
                </span>
              </div>

              <div className="live-recomendado">
                <h2 className="f-16 b8">RECOMENDADO</h2>
                <div className="container-recomendado-live">
                  <ul>
                    <li>
                      <a href="#">
                        <img src="/img/live/rc.jpg" alt="live recomendada" />
                        <div className="perfil-live-recomendado">
                          <img
                            src="/img/live/perfil.png"
                            alt="perfil live recomendado"
                          />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/live/rc-1.jpg" alt="live recomendada" />
                        <div className="perfil-live-recomendado">
                          <img
                            src="/img/live/perfil-1.png"
                            alt="perfil live recomendado"
                          />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/live/rc-2.jpg" alt="live recomendada" />
                        <div className="perfil-live-recomendado">
                          <img
                            src="/img/live/perfil-2.png"
                            alt="perfil live recomendado"
                          />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/live/rc-3.jpg" alt="live recomendada" />
                        <div className="perfil-live-recomendado">
                          <img
                            src="/img/live/perfil-3.png"
                            alt="perfil live recomendado"
                          />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/live/rc-4.jpg" alt="live recomendada" />
                        <div className="perfil-live-recomendado">
                          <img
                            src="/img/live/perfil-2.png"
                            alt="perfil live recomendado"
                          />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/live/rc-6.jpg" alt="live recomendada" />
                        <div className="perfil-live-recomendado">
                          <img
                            src="/img/live/perfil-1.png"
                            alt="perfil live recomendado"
                          />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/live/rc-6.jpg" alt="live recomendada" />
                        <div className="perfil-live-recomendado">
                          <img
                            src="/img/live/perfil.png"
                            alt="perfil live recomendado"
                          />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/live/rc-7.jpg" alt="live recomendada" />
                        <div className="perfil-live-recomendado">
                          <img
                            src="/img/live/perfil-2.png"
                            alt="perfil live recomendado"
                          />
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="live-recomendado">
                <h2 className="f-16 b8">ALTA</h2>
                <div className="container-recomendado-live">
                  <ul>
                    <li>
                      <a href="#">
                        <img src="/img/live/rc.jpg" alt="live recomendada" />
                        <div className="perfil-live-recomendado">
                          <img
                            src="/img/live/perfil.png"
                            alt="perfil live recomendado"
                          />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/live/rc-1.jpg" alt="live recomendada" />
                        <div className="perfil-live-recomendado">
                          <img
                            src="/img/live/perfil-1.png"
                            alt="perfil live recomendado"
                          />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/live/rc-2.jpg" alt="live recomendada" />
                        <div className="perfil-live-recomendado">
                          <img
                            src="/img/live/perfil-2.png"
                            alt="perfil live recomendado"
                          />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/live/rc-3.jpg" alt="live recomendada" />
                        <div className="perfil-live-recomendado">
                          <img
                            src="/img/live/perfil-3.png"
                            alt="perfil live recomendado"
                          />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/live/rc-4.jpg" alt="live recomendada" />
                        <div className="perfil-live-recomendado">
                          <img
                            src="/img/live/perfil-2.png"
                            alt="perfil live recomendado"
                          />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/live/rc-6.jpg" alt="live recomendada" />
                        <div className="perfil-live-recomendado">
                          <img
                            src="/img/live/perfil-1.png"
                            alt="perfil live recomendado"
                          />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/live/rc-6.jpg" alt="live recomendada" />
                        <div className="perfil-live-recomendado">
                          <img
                            src="/img/live/perfil.png"
                            alt="perfil live recomendado"
                          />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/live/rc-7.jpg" alt="live recomendada" />
                        <div className="perfil-live-recomendado">
                          <img
                            src="/img/live/perfil-2.png"
                            alt="perfil live recomendado"
                          />
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>

        <MobileNav activeHref="/live" />

        <div className="chat">
          <div className="chat-btn-titulo">
            <span>
              <Icon name="chevronLeft" size={20} />
            </span>
            <h2>Chat</h2>
          </div>
          <div className="chat-aovivo">
            <div className="chat-view">
              <ul>
                <li>
                  <p className="nome-chat l1">
                    João Marinho:
                    <span className="b8-2">
                      Boa Tarde adson a live hoje ta top
                    </span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l2">
                    Pedro:
                    <span className="b8-2">Boa tarde adson como vai?</span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l3">
                    Juliana:
                    <span className="b8-2">Boa tarde adson como vai?</span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l4">
                    Paula:
                    <span className="b8-2">
                      Boa Tarde adson a live hoje ta top
                    </span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l5">
                    Jooh:
                    <span className="b8-2">
                      Boa Tarde adson a live hoje ta top
                    </span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l6">
                    Joshn:
                    <span className="b8-2">
                      Boa Tarde adson a live hoje ta top
                    </span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l6">
                    Adilson:
                    <span className="b8-2">
                      Boa Tarde adson a live hoje ta top
                    </span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l8">
                    FelipeG:
                    <span className="b8-2">
                      Boa Tarde adson a live hoje ta top
                    </span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l9">
                    Junio:
                    <span className="b8-2">
                      Boa Tarde adson a live hoje ta top
                    </span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l10">
                    Gerson:
                    <span className="b8-2">
                      Boa Tarde adson a live hoje ta top
                    </span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l11">
                    Gulagg:
                    <span className="b8-2">
                      Boa Tarde adson a live hoje ta top
                    </span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l12">
                    Pedrinho:
                    <span className="b8-2">
                      Boa Tarde adson a live hoje ta top
                    </span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l6">
                    Pedro:
                    <span className="b8-2">
                      Boa Tarde adson a live hoje ta top
                    </span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l4">
                    Paula:
                    <span className="b8-2">
                      Boa Tarde adson a live hoje ta top
                    </span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l8">
                    Jooh:
                    <span className="b8-2">
                      Boa Tarde adson a live hoje ta top
                    </span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l1">
                    João Marinho:
                    <span className="b8-2">
                      Boa Tarde adson a live hoje ta top
                    </span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l9">
                    Joshn:
                    <span className="b8-2">
                      Boa Tarde adson a live hoje ta top
                    </span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l5">
                    Adilson:
                    <span className="b8-2">
                      Boa Tarde adson a live hoje ta top
                    </span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l9">
                    Junio:
                    <span className="b8-2">
                      Boa Tarde adson a live hoje ta top
                    </span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l2">
                    Gerson:
                    <span className="b8-2">
                      Boa Tarde adson a live hoje ta top
                    </span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l1">
                    JPedrinho:
                    <span className="b8-2">
                      Boa Tarde adson a live hoje ta top
                    </span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l10">
                    Paula:
                    <span className="b8-2">
                      Boa Tarde adson a live hoje ta top
                    </span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l2">
                    Joshn:
                    <span className="b8-2">
                      Boa Tarde adson a live hoje ta top
                    </span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l3">
                    FelipeG:
                    <span className="b8-2">
                      Boa Tarde adson a live hoje ta top
                    </span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l6">
                    Gulagg:
                    <span className="b8-2">
                      Boa Tarde adson a live hoje ta top
                    </span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l7">
                    Pedrinho:
                    <span className="b8-2">
                      Boa Tarde adson a live hoje ta top
                    </span>
                  </p>
                </li>
              </ul>
            </div>
            <div className="chat-campo-texto">
              <div>
                <div className="input-container">
                  <div className="input-mensagem-emoji">
                    <button>
                      <Icon name="smileHearts" size={20} />
                    </button>
                    <input
                      type="text"
                      id="text"
                      name="text"
                      placeholder="mensagem"
                    />
                  </div>
                  <div className="enviar-anexo">
                    <input type="file" name="file" id="file" />
                    <label htmlFor="file" id="file">
                      <Icon name="clip" size={20} />
                    </label>
                    <button>
                      <Icon name="send" size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="canal-recomendado ativo">
          <div className="canais">
            <span>
              <Icon name="chevronLeft" size={20} />
            </span>
            <h2 className="b5">recomendado</h2>
          </div>
          <div className="canais-aovivo">
            <ul>
              <li>
                <a href="#">
                  <div className="canal-on">
                    <img src="/img/live/perfil-1.png" alt="" />
                  </div>
                  <p>PlayGames</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="canal-on">
                    <img src="/img/live/perfil-2.png" alt="" />
                  </div>
                  <p>DeadGames</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="canal-on">
                    <img src="/img/live/perfil-3.png" alt="" />
                  </div>
                  <p>Nik akl</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="canal-on">
                    <img src="/img/live/perfil.png" alt="" />
                  </div>
                  <p>Girl Games</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="canal-on">
                    <img src="/img/live/perfil-1.png" alt="" />
                  </div>
                  <p>PlayGames</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="canal-on">
                    <img src="/img/live/perfil-2.png" alt="" />
                  </div>
                  <p>DeadGames</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="canal-on">
                    <img src="/img/live/perfil-3.png" alt="" />
                  </div>
                  <p>Nik akl</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="canal-on">
                    <img src="/img/live/perfil.png" alt="" />
                  </div>
                  <p>Girl Games</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </AppContainer>
    </>
  );
}
