import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notificação",
};

export default function Page() {
  return (
    <>
      <div className="spinner-bg">
        <div className="spinner"></div>
      </div>

      <div data-home="" className="container" id="notificacao">
        <div className="sidenav">
          <div className="top">
            <div className="logo">
              <img className="light-logo" src="/img/logo.svg" alt="" />
              <img className="dark-logo" src="/img/logo-dark.svg" alt="" />
              <p className="f-18 b8">Social rede</p>
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
                  <Link
                    data-link=""
                    className="active-sidenav"
                    href="/notificacao"
                  >
                    <i className="fi fi-rr-bell"></i>
                    <h2 className="f-14 c8">Notificação</h2>
                    <span className="notificação f-12">5</span>
                  </Link>
                </li>
                <li>
                  <Link data-link="" href="/live">
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
          <div className="pesquisa-bg">
            <div className="pesquisa-cotainer">
              <div className="pesquisa-menu-e-ps">
                <div className="menu">
                  <a href="#">
                    <i className="fi fi-rr-menu-burger"></i>
                  </a>
                </div>
                <input type="checkbox" id="item-check" />
                <div className="search-conversa">
                  <label htmlFor="item-check">
                    <i className="fi fi-rr-search"></i>
                  </label>
                  <input type="search" id="search" placeholder="Pesquisar..." />
                </div>
              </div>
              <div className="modo-noturno">
                <a className="btn-light" href="#">
                  <i className="fi fi-rr-sun"></i>
                </a>
                <a className="btn-dark" href="#">
                  <i className="fi fi-rr-moon"></i>
                </a>
                <Link href="/mensagem">
                  <i className="fi fi-rr-comments"></i>
                </Link>
              </div>
            </div>
          </div>

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

        <div className="container-nav-mobile">
          <div className="navigation">
            <ul>
              <li className="list">
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
              <li className="list  active">
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

        <div className="barra-lateral">
          <div className="storys">
            <h2 className="f-14 b8">Story</h2>
            <ul className="storys-lista">
              <li>
                <a href="#">
                  <img className="perfil" src="/img/story/story10.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="perfil" src="/img/story/story1.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="perfil" src="/img/story/story2.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="perfil" src="/img/story/story3.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="perfil" src="/img/story/story4.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="perfil" src="/img/story/story5.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="perfil" src="/img/story/story6.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="perfil" src="/img/story/story7.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="perfil" src="/img/story/story8.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="perfil" src="/img/story/story9.jpg" alt="" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="f-14 b8 titulo-mensagem">Mensagem</h2>
            <div className="mensagem">
              <ul>
                <li>
                  <Link href="/mensagem">
                    <div className="online">
                      <img
                        className="perfil"
                        src="/img/story/story.jpg"
                        alt="foto perfil mensagem"
                      />
                    </div>
                    <div className="info-mensagem-barra">
                      <div className="top-mensagem-barra">
                        <h2 className="f-16 b8">Felipe</h2>
                        <p className="f-12">Agora</p>
                      </div>
                      <div className="mensagem-visto-barra">
                        <span className="b8-2">
                          Boa tarde adson como vai as
                        </span>
                        <div className="visto-mensagem">
                          <i className="fi fi-rr-check"></i>
                          <i className="fi fi-rr-check"></i>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/mensagem">
                    <div className="online">
                      <img
                        className="perfil"
                        src="/img/story/story1.jpg"
                        alt="foto perfil mensagem"
                      />
                    </div>
                    <div className="info-mensagem-barra">
                      <div className="top-mensagem-barra">
                        <h2 className="f-16 b8">João Marinho</h2>
                        <p className="f-12">09:15</p>
                      </div>
                      <div className="mensagem-visto-barra">
                        <span className="b8-2">
                          Boa tarde adson como vai as
                        </span>
                        <div className="visto-mensagem">
                          <i className="fi fi-rr-check"></i>
                          <i className="fi fi-rr-check"></i>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/mensagem">
                    <div className="online">
                      <img
                        className="perfil"
                        src="/img/story/story2.jpg"
                        alt="foto perfil mensagem"
                      />
                    </div>
                    <div className="info-mensagem-barra">
                      <div className="top-mensagem-barra">
                        <h2 className="f-16 b8">Ana Paula</h2>
                        <p className="f-12">09:00</p>
                      </div>
                      <div className="mensagem-visto-barra">
                        <span className="b8-2">
                          Boa tarde adson como vai as
                        </span>
                        <div className="visto-mensagem">
                          <i className="fi fi-rr-check"></i>
                          <i className="fi fi-rr-check"></i>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/mensagem">
                    <div className="offline">
                      <img
                        className="perfil"
                        src="/img/story/story3.jpg"
                        alt="foto perfil mensagem"
                      />
                    </div>
                    <div className="info-mensagem-barra">
                      <div className="top-mensagem-barra">
                        <h2 className="f-16 b8">Jhonatas</h2>
                        <p className="f-12">08:57</p>
                      </div>
                      <div className="mensagem-visto-barra">
                        <span className="b8-2">
                          Boa tarde adson como vai as
                        </span>
                        <div className="visto-mensagem">
                          <i className="fi fi-rr-check"></i>
                          <i className="fi fi-rr-check"></i>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/mensagem">
                    <div className="online">
                      <img
                        className="perfil"
                        src="/img/story/story4.jpg"
                        alt="foto perfil mensagem"
                      />
                    </div>
                    <div className="info-mensagem-barra">
                      <div className="top-mensagem-barra">
                        <h2 className="f-16 b8">Kauan</h2>
                        <p className="f-12">08:45</p>
                      </div>
                      <div className="mensagem-visto-barra">
                        <span className="b8-2">
                          Boa tarde adson como vai as
                        </span>
                        <div className="visto-mensagem">
                          <i className="fi fi-rr-check"></i>
                          <i className="fi fi-rr-check"></i>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/mensagem">
                    <div className="offline">
                      <img
                        className="perfil"
                        src="/img/story/story5.jpg"
                        alt="foto perfil mensagem"
                      />
                    </div>
                    <div className="info-mensagem-barra">
                      <div className="top-mensagem-barra">
                        <h2 className="f-16 b8">Andresa</h2>
                        <p className="f-12">08:20</p>
                      </div>
                      <div className="mensagem-visto-barra">
                        <span className="b8-2">
                          Boa tarde adson como vai as
                        </span>
                        <div className="visto-mensagem">
                          <i className="fi fi-rr-check"></i>
                          <i className="fi fi-rr-check"></i>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/mensagem">
                    <div className="online">
                      <img
                        className="perfil"
                        src="/img/story/story6.jpg"
                        alt="foto perfil mensagem"
                      />
                    </div>
                    <div className="info-mensagem-barra">
                      <div className="top-mensagem-barra">
                        <h2 className="f-16 b8">Claudia</h2>
                        <p className="f-12">08:12</p>
                      </div>
                      <div className="mensagem-visto-barra">
                        <span className="b8-2">
                          Boa tarde adson como vai as
                        </span>
                        <div className="visto-mensagem">
                          <i className="fi fi-rr-check"></i>
                          <i className="fi fi-rr-check"></i>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/mensagem">
                    <div className="offline">
                      <img
                        className="perfil"
                        src="/img/story/story.jpg"
                        alt="foto perfil mensagem"
                      />
                    </div>
                    <div className="info-mensagem-barra">
                      <div className="top-mensagem-barra">
                        <h2 className="f-16 b8">Felipe</h2>
                        <p className="f-12">07:58</p>
                      </div>
                      <div className="mensagem-visto-barra">
                        <span className="b8-2">
                          Boa tarde adson como vai as
                        </span>
                        <div className="visto-mensagem">
                          <i className="fi fi-rr-check"></i>
                          <i className="fi fi-rr-check"></i>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="shorts">
            <h2 className="f-14 b8">Short</h2>
            <div className="shorts-bg">
              <div className="shorts-container">
                <div className="novos-shorts">
                  <div className="texto-short">
                    <h2 className="f-14 b8">Novo</h2>
                    <a className="b5" href="#">
                      ver mais
                    </a>
                  </div>
                  <ul className="short-previu">
                    <li>
                      <a href="#">
                        <img src="/img/short/short1.jpg" alt="Short novo 1" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/short/short2.jpg" alt="Short novo 2" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/short/short3.jpg" alt="Short novo 3" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/short/short4.jpg" alt="Short novo 4" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/short/short5.jpg" alt="Short novo 5" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="novos-shorts">
                  <div className="texto-short">
                    <h2 className="f-14 b8">Alta</h2>
                    <a className="b5" href="#">
                      ver mais
                    </a>
                  </div>
                  <ul className="short-previu">
                    <li>
                      <a href="#">
                        <img src="/img/short/short6.jpg" alt="Short novo 6" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/short/short7.jpg" alt="Short novo 7" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/short/short1.jpg" alt="Short novo 1" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/short/short5.jpg" alt="Short novo 5" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/short/short3.jpg" alt="Short novo 3" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
