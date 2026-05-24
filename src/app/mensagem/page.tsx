import type { Metadata } from "next";
import Link from "next/link";

import { Sidenav } from "../../components/Sidenav";
import { MobileNav } from "../../components/MobileNav";
import { Spinner } from "../../components/Spinner";
import { RightSidebar } from "../../components/RightSidebar";
import { AppContainer } from "../../components/AppContainer";

import styles from "./mensagem.module.scss";

export const metadata: Metadata = {
  title: "Mensagem",
};

export default function Page() {
  return (
    <>
      <Spinner />

      <AppContainer id="mensagem" className={styles.root}>
        <Sidenav activeHref="/mensagem" />

        <main className="content">
          <div className="pesquisa-bg">
            <div className="pesquisa-cotainer">
              <div className="menu">
                <a data-sidenav-open="" href="#">
                  <i className="fi fi-rr-menu-burger"></i>
                </a>
              </div>
              <div id="pesquisa">
                <input type="text" placeholder="Pesquisar" />
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
            <div className="container-mensagem">
              <div className="pagina-inicial-mensagem">
                <div className="mensagem-pagina">
                  <div className="pesquisa-conversas">
                    <div className="pesquisa-menu-e-ps">
                      <div className="menu">
                        <a data-sidenav-open="" href="#">
                          <i className="fi fi-rr-menu-burger"></i>
                        </a>
                      </div>
                      <input type="checkbox" id="item-check" />
                      <div className="search-conversa">
                        <label htmlFor="item-check">
                          <i className="fi fi-rr-search"></i>
                        </label>
                        <input
                          type="search"
                          id="search"
                          placeholder="Pesquisar..."
                        />
                      </div>
                    </div>
                    <div className="modo-noturno">
                      <a className="btn-light" href="#">
                        <i className="fi fi-rr-sun"></i>
                      </a>
                      <a className="btn-dark" href="#">
                        <i className="fi fi-rr-moon"></i>
                      </a>
                      <a href="#">
                        <i className="fi fi-rr-comments"></i>
                      </a>
                    </div>
                  </div>
                  <ul className="lista-conversa-home">
                    <li>
                      <a className="mensagem-btn-abrir " href="#">
                        <div className="mensagem-bloco">
                          <img
                            className="perfil"
                            src="/img/story/story1.jpg"
                            alt="foto perfil mensagem"
                          />
                          <h2 className="f-16 b8">João Marinho</h2>
                          <span className="b8-2">
                            Boa tarde adson como vai as coisa mano?
                          </span>
                        </div>
                        <div className="informacao-masagem">
                          <div className="info-mensagem">
                            <div className="mensagem-visto">
                              <p className="f-12">Agora</p>
                              <div className="visto-mensagem">
                                <i className="fi fi-rr-check"></i>
                                <i className="fi fi-rr-check"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="mensagem-btn-abrir ativo" href="#">
                        <div className="mensagem-bloco">
                          <img
                            className="perfil"
                            src="/img/story/story.jpg"
                            alt="foto perfil mensagem"
                          />
                          <h2 className="f-16 b8">Felipe</h2>
                          <span className="b8-2">
                            adson como vai esta o andamendo do projeto?
                          </span>
                        </div>
                        <div className="informacao-masagem">
                          <div className="info-mensagem">
                            <div className="mensagem-visto">
                              <p className="f-12">17:00</p>
                              <div className="visto-mensagem">
                                <i className="fi fi-rr-check"></i>
                                <i className="fi fi-rr-check"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="mensagem-btn-abrir " href="#">
                        <div className="mensagem-bloco">
                          <img
                            className="perfil"
                            src="/img/story/story2.jpg"
                            alt="foto perfil mensagem"
                          />
                          <h2 className="f-16 b8">Ana Paula</h2>
                          <span className="b8-2">
                            Adson me manda as fotos de ontem?!
                          </span>
                        </div>
                        <div className="informacao-masagem">
                          <div className="info-mensagem">
                            <div className="mensagem-visto">
                              <p className="f-12">16:58</p>
                              <div className="visto-mensagem">
                                <i className="fi fi-rr-check"></i>
                                <i className="fi fi-rr-check"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="mensagem-btn-abrir " href="#">
                        <div className="mensagem-bloco">
                          <img
                            className="perfil"
                            src="/img/story/story3.jpg"
                            alt="foto perfil mensagem"
                          />
                          <h2 className="f-16 b8">João Marinho</h2>
                          <span className="b8-2">
                            Boa tarde adson ja te envie os projetos ta no
                            e-mail!
                          </span>
                        </div>
                        <div className="informacao-masagem">
                          <div className="info-mensagem">
                            <div className="mensagem-visto">
                              <p className="f-12">16:55</p>
                              <div className="visto-mensagem">
                                <i className="fi fi-rr-check"></i>
                                <i className="fi fi-rr-check"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="mensagem-btn-abrir " href="#">
                        <div className="mensagem-bloco">
                          <img
                            className="perfil"
                            src="/img/story/story4.jpg"
                            alt="foto perfil mensagem"
                          />
                          <h2 className="f-16 b8">Kauan</h2>
                          <span className="b8-2">
                            Cara como ta o trabalho e as novidades mano?
                          </span>
                        </div>
                        <div className="informacao-masagem">
                          <div className="info-mensagem">
                            <div className="mensagem-visto">
                              <p className="f-12">16:32</p>
                              <div className="visto-mensagem">
                                <i className="fi fi-rr-check"></i>
                                <i className="fi fi-rr-check"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="mensagem-btn-abrir " href="#">
                        <div className="mensagem-bloco">
                          <img
                            className="perfil"
                            src="/img/story/story5.jpg"
                            alt="foto perfil mensagem"
                          />
                          <h2 className="f-16 b8">João Marinho</h2>
                          <span className="b8-2">
                            Boa tarde adson o relatorio de hoje ja esta pronto?
                          </span>
                        </div>
                        <div className="informacao-masagem">
                          <div className="info-mensagem">
                            <div className="mensagem-visto">
                              <p className="f-12">16:12</p>
                              <div className="visto-mensagem">
                                <i className="fi fi-rr-check"></i>
                                <i className="fi fi-rr-check"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="mensagem-btn-abrir " href="#">
                        <div className="mensagem-bloco">
                          <img
                            className="perfil"
                            src="/img/story/story6.jpg"
                            alt="foto perfil mensagem"
                          />
                          <h2 className="f-16 b8">Claudia</h2>
                          <span className="b8-2">
                            Ei Adson você tem salvo as fotos de ontem?
                          </span>
                        </div>
                        <div className="informacao-masagem">
                          <div className="info-mensagem">
                            <div className="mensagem-visto">
                              <p className="f-12">15:30</p>
                              <div className="visto-mensagem">
                                <i className="fi fi-rr-check"></i>
                                <i className="fi fi-rr-check"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="mensagem-btn-abrir ativo" href="#">
                        <div className="mensagem-bloco">
                          <img
                            className="perfil"
                            src="/img/story/story7.jpg"
                            alt="foto perfil mensagem"
                          />
                          <h2 className="f-16 b8">Juliana</h2>
                          <span className="b8-2">
                            adson como você esta? fiquei sabendo de ontem e
                            tals?!
                          </span>
                        </div>
                        <div className="informacao-masagem">
                          <div className="info-mensagem">
                            <div className="mensagem-visto">
                              <p className="f-12">15:22</p>
                              <div className="visto-mensagem">
                                <i className="fi fi-rr-check"></i>
                                <i className="fi fi-rr-check"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="mensagem-btn-abrir " href="#">
                        <div className="mensagem-bloco">
                          <img
                            className="perfil"
                            src="/img/story/story8.jpg"
                            alt="foto perfil mensagem"
                          />
                          <h2 className="f-16 b8">João Moura</h2>
                          <span className="b8-2">
                            Cara foi muito massa o role de ontem zé!!
                          </span>
                        </div>
                        <div className="informacao-masagem">
                          <div className="info-mensagem">
                            <div className="mensagem-visto">
                              <p className="f-12">15:10</p>
                              <div className="visto-mensagem">
                                <i className="fi fi-rr-check"></i>
                                <i className="fi fi-rr-check"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="mensagem-btn-abrir " href="#">
                        <div className="mensagem-bloco">
                          <img
                            className="perfil"
                            src="/img/story/story9.jpg"
                            alt="foto perfil mensagem"
                          />
                          <h2 className="f-16 b8">Juh Santos</h2>
                          <span className="b8-2">
                            Ei meu anjo saiu ontem nem me chamou ne!
                          </span>
                        </div>
                        <div className="informacao-masagem">
                          <div className="info-mensagem">
                            <div className="mensagem-visto">
                              <p className="f-12">15:00</p>
                              <div className="visto-mensagem">
                                <i className="fi fi-rr-check"></i>
                                <i className="fi fi-rr-check"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="mensagem-btn-abrir " href="#">
                        <div className="mensagem-bloco">
                          <img
                            className="perfil"
                            src="/img/contatos/contato1.jpg"
                            alt="foto perfil mensagem"
                          />
                          <h2 className="f-16 b8">Maria Clara</h2>
                          <span className="b8-2">
                            Oi adson como você esta meu anjo?
                          </span>
                        </div>
                        <div className="informacao-masagem">
                          <div className="info-mensagem">
                            <div className="mensagem-visto">
                              <p className="f-12">14:46</p>
                              <div className="visto-mensagem">
                                <i className="fi fi-rr-check"></i>
                                <i className="fi fi-rr-check"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="mensagem-btn-abrir " href="#">
                        <div className="mensagem-bloco">
                          <img
                            className="perfil"
                            src="/img/contatos/contato2.jpg"
                            alt="foto perfil mensagem"
                          />
                          <h2 className="f-16 b8">Wesley Santos</h2>
                          <span className="b8-2">
                            Ze o casamento vai ser dia 30 sabado agora mano, sua
                            presensa é essencial lá man!
                          </span>
                        </div>
                        <div className="informacao-masagem">
                          <div className="info-mensagem">
                            <div className="mensagem-visto">
                              <p className="f-12">14:38</p>
                              <div className="visto-mensagem">
                                <i className="fi fi-rr-check"></i>
                                <i className="fi fi-rr-check"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="mensagem-btn-abrir ativo" href="#">
                        <div className="mensagem-bloco">
                          <img
                            className="perfil"
                            src="/img/contatos/contato3.jpg"
                            alt="foto perfil mensagem"
                          />
                          <h2 className="f-16 b8">Maria Eduarda</h2>
                          <span className="b8-2">
                            Adson ela desse que na sexta, é melhor pra ela!?
                          </span>
                        </div>
                        <div className="informacao-masagem">
                          <div className="info-mensagem">
                            <div className="mensagem-visto">
                              <p className="f-12">14:30</p>
                              <div className="visto-mensagem">
                                <i className="fi fi-rr-check"></i>
                                <i className="fi fi-rr-check"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="mensagem-btn-abrir " href="#">
                        <div className="mensagem-bloco">
                          <img
                            className="perfil"
                            src="/img/contatos/contato4.jpg"
                            alt="foto perfil mensagem"
                          />
                          <h2 className="f-16 b8">Marcela</h2>
                          <span className="b8-2">
                            Meu anjo eu to indo la na casa de Julia, você vai
                            comigo?
                          </span>
                        </div>
                        <div className="informacao-masagem">
                          <div className="info-mensagem">
                            <div className="mensagem-visto">
                              <p className="f-12">14:25</p>
                              <div className="visto-mensagem">
                                <i className="fi fi-rr-check"></i>
                                <i className="fi fi-rr-check"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="mensagem-btn-abrir " href="#">
                        <div className="mensagem-bloco">
                          <img
                            className="perfil"
                            src="/img/contatos/contato5.jpg"
                            alt="foto perfil mensagem"
                          />
                          <h2 className="f-16 b8">Kesia San</h2>
                          <span className="b8-2">
                            Nossa, foi top demais a noite de ontem meu anjo!
                          </span>
                        </div>
                        <div className="informacao-masagem">
                          <div className="info-mensagem">
                            <div className="mensagem-visto">
                              <p className="f-12">14:00</p>
                              <div className="visto-mensagem">
                                <i className="fi fi-rr-check"></i>
                                <i className="fi fi-rr-check"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="mensagem-btn-abrir " href="#">
                        <div className="mensagem-bloco">
                          <img
                            className="perfil"
                            src="/img/contatos/contato6.jpg"
                            alt="foto perfil mensagem"
                          />
                          <h2 className="f-16 b8">Mirela </h2>
                          <span className="b8-2">
                            Oi meu anjo, eu vi você passando hoje lá na rua, nem
                            falou comigo ne!?
                          </span>
                        </div>
                        <div className="informacao-masagem">
                          <div className="info-mensagem">
                            <div className="mensagem-visto">
                              <p className="f-12">14:02</p>
                              <div className="visto-mensagem">
                                <i className="fi fi-rr-check"></i>
                                <i className="fi fi-rr-check"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="mensagem-btn-abrir " href="#">
                        <div className="mensagem-bloco">
                          <img
                            className="perfil"
                            src="/img/contatos/contato7.jpg"
                            alt="foto perfil mensagem"
                          />
                          <h2 className="f-16 b8">Dev Luan</h2>
                          <span className="b8-2">
                            Boa tarde adson eu já fiz o commit das alterações do
                            projeto.
                          </span>
                        </div>
                        <div className="informacao-masagem">
                          <div className="info-mensagem">
                            <div className="mensagem-visto">
                              <p className="f-12">13:54</p>
                              <div className="visto-mensagem">
                                <i className="fi fi-rr-check"></i>
                                <i className="fi fi-rr-check"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="mensagem-btn-abrir " href="#">
                        <div className="mensagem-bloco">
                          <img
                            className="perfil"
                            src="/img/contatos/contato8.jpg"
                            alt="foto perfil mensagem"
                          />
                          <h2 className="f-16 b8">Milena</h2>
                          <span className="b8-2">
                            Meu anjo, eu queria te ver hoje meu bem? tem como ?
                          </span>
                        </div>
                        <div className="informacao-masagem">
                          <div className="info-mensagem">
                            <div className="mensagem-visto">
                              <p className="f-12">13:36</p>
                              <div className="visto-mensagem">
                                <i className="fi fi-rr-check"></i>
                                <i className="fi fi-rr-check"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mensagem-aberta-bg">
                  <div className="mesagem-aberta">
                    <div className="menu-mensagem">
                      <div className="volta-mensagem-container">
                        <a className="volta-mensagem-desktop" href="#">
                          <i className="fi fi-rr-angle-left"></i>
                        </a>
                      </div>
                      <div className="menu-interna-mensagem">
                        <div className="modo-noturno interna-modo-n">
                          <a className="btn-light" href="#">
                            <i className="fi fi-rr-sun"></i>
                          </a>
                          <a className="btn-dark" href="#">
                            <i className="fi fi-rr-moon"></i>
                          </a>
                          <a href="#">
                            <i className="fi fi-rr-comments"></i>
                          </a>
                        </div>
                        <a href="#">
                          <i className="fi fi-rr-apps"></i>
                        </a>
                        <a href="#">
                          <i className="fi fi-rr-menu-dots-vertical"></i>
                        </a>
                      </div>
                    </div>

                    <div className="mensagem-enviada">
                      <div className="resposta">
                        <div className="responder">
                          <h3 className="f-14 b8">João Marinho</h3>
                          <p className="f-12-n b8-2">
                            Dia hoje foi cheio mas obrigado Deus por tudo, dias
                            melhores viram fé em Deus
                          </p>
                        </div>
                        <p className="b8">
                          E ai man como foi la no trabalho man deu certo ?
                        </p>
                        <div className="info-mensagem-aberta">
                          <span className="h-recebida f-12-n">09:15</span>
                          <div className="visto-mensagem-aberta">
                            <i className="fi fi-rr-check"></i>
                            <i className="fi fi-rr-check"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mensagem-recebida">
                      <div className="resposta-recebida">
                        <div className="responder">
                          <h3 className="f-14 b8">Adson Santos</h3>
                          <p className="f-12-n b8-2">
                            E ai man como foi la no trabalho man deu certo ?
                          </p>
                        </div>
                        <p className="b8">
                          o trabalho de hoje foi cheio quase nao deu certo o
                          trabalho de hoje foi cheio quase nao deu certo o
                          trabalho de hoje foi cheio quase nao deu certo o
                          trabalho de hoje foi cheio quase nao deu certo o
                          trabalho de hoje foi cheio quase nao deu certo o
                          trabalho de hoje foi cheio quase nao deu certo o
                          trabalho de hoje foi cheio quase nao deu certo
                          Tmj{" "}
                        </p>
                        <div className="info-mensagem-aberta">
                          <span className="h-recebida f-12-n">09:15</span>
                          <div className="visto-mensagem-aberta">
                            <i className="fi fi-rr-check"></i>
                            <i className="fi fi-rr-check"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mensagem-enviada">
                      <div className="resposta">
                        <div className="responder">
                          <h3 className="f-14 b8">João Marinho</h3>
                          <p className="f-12-n b8-2">
                            Dia hoje foi cheio mas obrigado Deus por tudo, dias
                            melhores viram fé em Deus
                          </p>
                        </div>
                        <p className="b8">
                          E ai man como foi la no trabalho man deu certo ?
                        </p>
                        <div className="info-mensagem-aberta">
                          <span className="h-recebida f-12-n">09:15</span>
                          <div className="visto-mensagem-aberta">
                            <i className="fi fi-rr-check"></i>
                            <i className="fi fi-rr-check"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mensagem-recebida">
                      <div className="resposta-recebida">
                        <div className="responder">
                          <h3 className="f-14 b8">Adson Santos</h3>
                          <p className="f-12-n b8-2">
                            E ai man como foi la no trabalho man deu certo ?
                          </p>
                        </div>
                        <p className="b8">
                          o trabalho de hoje foi cheio quase nao deu certo o
                          trabalho de hoje foi cheio quase nao deu certo o
                          trabalho de hoje foi cheio quase nao deu certo o
                          trabalho de hoje foi cheio quase nao deu certo o
                          trabalho de hoje foi cheio quase nao deu certo o
                          trabalho de hoje foi cheio quase nao deu certo o
                          trabalho de hoje foi cheio quase nao deu certo
                          Tmj{" "}
                        </p>
                        <div className="info-mensagem-aberta">
                          <span className="h-recebida f-12-n">09:15</span>
                          <div className="visto-mensagem-aberta">
                            <i className="fi fi-rr-check"></i>
                            <i className="fi fi-rr-check"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="campo-texto">
                      <div className="input-container">
                        <div className="input-mensagem-emoji">
                          <button>
                            <i className="fi fi-rr-grin-hearts"></i>
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
            </div>
          </div>
        </main>

        <MobileNav activeHref="/mensagem" />
        <RightSidebar variant="mensagem" />
      </AppContainer>
    </>
  );
}
