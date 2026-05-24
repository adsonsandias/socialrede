import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Live",
};

export default function Page() {
  return (
    <>
      <div className="spinner-bg">
        <div className="spinner"></div>
      </div>

      <div data-home="" className="container ativo" id="live">
        <div className="sidenav">
          <div className="top">
            <div className="logo">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Pesquisar..."
                  className="search-input"
                />
                <a href="#" className="search-btn">
                  <i className="fi fi-rr-search"></i>
                </a>
              </div>
            </div>
            <div className="close" id="close-btn">
              <span>
                <i className="fi fi-rr-cross"></i>
              </span>
            </div>
          </div>
          <div className="bg-nav">
            <nav>
              <ul>
                <li>
                  <Link data-link="" href="/">
                    <i className="fi fi-rr-layout-fluid"></i>
                    <h2 className="f-14 c8">Feed</h2>
                  </Link>
                </li>
                <li>
                  <Link data-link="" href="/explorar">
                    <i className="fi fi-rr-navigation"></i>
                    <h2 className="f-14 c8">Explorar</h2>
                  </Link>
                </li>
                <li>
                  <Link data-link="" href="/short">
                    <i className="fi fi-rr-play-alt"></i>
                    <h2 className="f-14 c8">Shorts</h2>
                  </Link>
                </li>
                <li>
                  <Link data-link="" href="/mensagem">
                    <i className="fi fi-rr-comments"></i>
                    <h2 className="f-14 c8">Mensagem</h2>
                  </Link>
                </li>
                <li>
                  <Link data-link="" href="/notificacao">
                    <i className="fi fi-rr-bell"></i>
                    <h2 className="f-14 c8">Notificação</h2>
                    <span className="notificação f-12">5</span>
                  </Link>
                </li>
                <li>
                  <Link data-link="" className="active-sidenav" href="/live">
                    <i className="fi fi-rr-camera"></i>
                    <h2 className="f-14 c8">Live</h2>
                  </Link>
                </li>
                <span className="sep-nav"></span>
                <li>
                  <Link data-link="" href="/configuracao">
                    <i className="fi fi-rr-settings"></i>
                    <h2 className="f-14 c8">Configuração</h2>
                  </Link>
                </li>
                <li>
                  <Link data-link="" href="/login">
                    <i className="fi fi-rr-sign-out-alt"></i>
                    <h2 className="f-14 c8">login</h2>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="perfil-sidenav">
              <h2 className="f-18 b8">Perfil</h2>
              <div className="bg-perfilnav">
                <img src="/img/perfil-principal.jpg" alt="Perfil Usuario" />
                <div>
                  <h3 className="f-12 b8">Adson Santos</h3>
                  <p className="f-10 c7">on-line</p>
                </div>
                <Link data-link="" href="/perfil">
                  <i className="fi fi-rr-caret-down"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <main className="content">
          <div className="publicacao-bg">
            <div className="container-live">
              <div className="live-on">
                <div className="live">
                  <span className="btn-live">
                    <i className="fi fi-rr-arrow-from-right"></i>
                  </span>
                  <span className="redimencionar">
                    <i className="fi fi-rr-resize"></i>
                  </span>
                  <span className="menu btn-menu-live">
                    <i className="fi fi-rr-menu-burger"></i>
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
                        <i className="fi fi-rr-play"></i>
                      </span>
                      <span className="pause">
                        <i className="fi fi-rr-pause"></i>
                      </span>
                      <span className="volume">
                        <i className="fi fi-rr-signal-alt-2"></i>
                      </span>
                    </div>
                    <div className="config-redimencionar-expandir">
                      <span className="redimencionar">
                        <i className="fi fi-rr-resize"></i>
                      </span>
                      <span className="expandir">
                        <i className="fi fi-rr-expand"></i>
                      </span>
                      <span className="configuracao-play-live">
                        <i className="fi fi-rr-settings"></i>
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
                        <i className="c7 fi fi-rr-users-alt"></i>
                      </span>
                      <span>
                        <i className="b8 fi fi-rr-share"></i>
                      </span>
                      <span>
                        <i className="b8 fi fi-rr-menu-dots-vertical"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="sobre-perfil">
                  <h2 className="f-16 b8">Sobre PlayHard</h2>
                  <p className="b8-2">
                    Play hard e um canal de games diversos a onde você se diverti
                    rindo e acompanhando todas as historias e gameplay dos jogos,
                    se inscreva para ter a maior imersão no seus jogos favoritos
                    de um jeito unico!
                  </p>
                  <p className="b8-2">
                    Play hard e um canal de games diversos a onde você se diverti
                    rindo e acompanhando todas as historias e gameplay dos jogos,
                    se inscreva para ter a maior imersão no seus jogos favoritos
                    de um jeito unico!
                  </p>
                  <p className="b8-2">
                    Play hard e um canal de games diversos a onde você se diverti
                    rindo e acompanhando todas as historias e gameplay dos jogos,
                    se inscreva para ter a maior imersão no seus jogos favoritos
                    de um jeito unico!
                  </p>
                  <p className="b8-2">
                    Play hard e um canal de games diversos a onde você se diverti
                    rindo e acompanhando todas as historias e gameplay dos jogos,
                    se inscreva para ter a maior imersão no seus jogos favoritos
                    de um jeito unico!
                  </p>
                </div>
                <span className="btn-texto-expandir">
                  <i className="fi fi-rr-angle-square-down"></i>
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

        <div className="container-nav-mobile">
          <div className="navigation">
            <ul>
              <li>
                <Link data-link="" href="/">
                  <span className="icon">
                    <i className="fi fi-rr-layout-fluid"></i>
                  </span>
                  <span className="text">Feed</span>
                </Link>
                <div className="indicator"></div>
              </li>
              <li className="list">
                <Link data-link="" href="/explorar">
                  <span className="icon">
                    <i className="fi fi-rr-navigation"></i>
                  </span>
                  <span className="text">Explo</span>
                </Link>
                <div className="indicator"></div>
              </li>
              <li className="list">
                <Link data-link="" href="/short">
                  <span className="icon">
                    <i className="fi fi-rr-play-alt"></i>
                  </span>
                  <span className="text">Short</span>
                </Link>
                <div className="indicator"></div>
              </li>
              <li className="list">
                <Link data-link="" href="/notificacao">
                  <span className="icon">
                    <i className="fi fi-rr-bell"></i>
                  </span>
                  <span className="text">Noti</span>
                </Link>
                <div className="indicator"></div>
              </li>
              <li className="list">
                <Link data-link="" href="/perfil">
                  <span className="icon">
                    <i className="fi fi-rr-user"></i>
                  </span>
                  <span className="text">User</span>
                </Link>
                <div className="indicator"></div>
              </li>
            </ul>
          </div>
        </div>

        <div className="chat">
          <div className="chat-btn-titulo">
            <span>
              <i className="fi fi-rr-arrow-from-left"></i>
            </span>
            <h2>Chat</h2>
          </div>
          <div className="chat-aovivo">
            <div className="chat-view">
              <ul>
                <li>
                  <p className="nome-chat l1">
                    João Marinho:
                    <span className="b8-2">Boa Tarde adson a live hoje ta top</span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l2">
                    Pedro:<span className="b8-2">Boa tarde adson como vai?</span>
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
                    <span className="b8-2">Boa Tarde adson a live hoje ta top</span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l5">
                    Jooh:
                    <span className="b8-2">Boa Tarde adson a live hoje ta top</span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l6">
                    Joshn:
                    <span className="b8-2">Boa Tarde adson a live hoje ta top</span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l6">
                    Adilson:
                    <span className="b8-2">Boa Tarde adson a live hoje ta top</span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l8">
                    FelipeG:
                    <span className="b8-2">Boa Tarde adson a live hoje ta top</span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l9">
                    Junio:
                    <span className="b8-2">Boa Tarde adson a live hoje ta top</span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l10">
                    Gerson:
                    <span className="b8-2">Boa Tarde adson a live hoje ta top</span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l11">
                    Gulagg:
                    <span className="b8-2">Boa Tarde adson a live hoje ta top</span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l12">
                    Pedrinho:
                    <span className="b8-2">Boa Tarde adson a live hoje ta top</span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l6">
                    Pedro:
                    <span className="b8-2">Boa Tarde adson a live hoje ta top</span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l4">
                    Paula:
                    <span className="b8-2">Boa Tarde adson a live hoje ta top</span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l8">
                    Jooh:
                    <span className="b8-2">Boa Tarde adson a live hoje ta top</span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l1">
                    João Marinho:
                    <span className="b8-2">Boa Tarde adson a live hoje ta top</span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l9">
                    Joshn:
                    <span className="b8-2">Boa Tarde adson a live hoje ta top</span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l5">
                    Adilson:
                    <span className="b8-2">Boa Tarde adson a live hoje ta top</span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l9">
                    Junio:
                    <span className="b8-2">Boa Tarde adson a live hoje ta top</span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l2">
                    Gerson:
                    <span className="b8-2">Boa Tarde adson a live hoje ta top</span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l1">
                    JPedrinho:
                    <span className="b8-2">Boa Tarde adson a live hoje ta top</span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l10">
                    Paula:
                    <span className="b8-2">Boa Tarde adson a live hoje ta top</span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l2">
                    Joshn:
                    <span className="b8-2">Boa Tarde adson a live hoje ta top</span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l3">
                    FelipeG:
                    <span className="b8-2">Boa Tarde adson a live hoje ta top</span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l6">
                    Gulagg:
                    <span className="b8-2">Boa Tarde adson a live hoje ta top</span>
                  </p>
                </li>
                <li>
                  <p className="nome-chat l7">
                    Pedrinho:
                    <span className="b8-2">Boa Tarde adson a live hoje ta top</span>
                  </p>
                </li>
              </ul>
            </div>
            <div className="chat-campo-texto">
              <div>
                <div className="input-container">
                  <div className="input-mensagem-emoji">
                    <button>
                      <i className="fi fi-rr-grin-hearts"></i>
                    </button>
                    <input type="text" id="text" name="text" placeholder="mensagem" />
                  </div>
                  <div className="enviar-anexo">
                    <input type="file" name="file" id="file" />
                    <label htmlFor="file" id="file">
                      <i className="fi fi-rr-clip"></i>
                    </label>
                    <button>
                      <i className="fi fi-rr-paper-plane"></i>
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
              <i className="fi fi-rr-arrow-from-left"></i>
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
      </div>
    </>
  );
}
