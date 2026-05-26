"use client";

import Link from "next/link";

import styles from "./RightSidebar.module.scss";
import { useDragToScroll } from "../hooks/useDragToScroll";
import { Icon } from "./Icon";

type RightSidebarVariant = "default" | "notificacao" | "mensagem";

type RightSidebarProps = {
  variant?: RightSidebarVariant;
};

export function RightSidebar({ variant = "default" }: RightSidebarProps) {
  const storyListRef = useDragToScroll<HTMLUListElement>({ lockAxis: "x" });
  const shortsListRefA = useDragToScroll<HTMLUListElement>({ lockAxis: "x" });
  const shortsListRefB = useDragToScroll<HTMLUListElement>({ lockAxis: "x" });

  if (variant === "notificacao") {
    return (
      <div className={`barra-lateral ${styles.root}`}>
        <div className="storys">
          <h2 className="f-14 b8">Story</h2>
          <ul ref={storyListRef} className="storys-lista">
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
                      <span className="b8-2">Boa tarde adson como vai as</span>
                      <div className="visto-mensagem">
                        <Icon name="check" size={14} />
                        <Icon name="check" size={14} />
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
                      <span className="b8-2">Boa tarde adson como vai as</span>
                      <div className="visto-mensagem">
                        <Icon name="check" size={14} />
                        <Icon name="check" size={14} />
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
                      <span className="b8-2">Boa tarde adson como vai as</span>
                      <div className="visto-mensagem">
                        <Icon name="check" size={14} />
                        <Icon name="check" size={14} />
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
                      <span className="b8-2">Boa tarde adson como vai as</span>
                      <div className="visto-mensagem">
                        <Icon name="check" size={14} />
                        <Icon name="check" size={14} />
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
                      <span className="b8-2">Boa tarde adson como vai as</span>
                      <div className="visto-mensagem">
                        <Icon name="check" size={14} />
                        <Icon name="check" size={14} />
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
                      <span className="b8-2">Boa tarde adson como vai as</span>
                      <div className="visto-mensagem">
                        <Icon name="check" size={14} />
                        <Icon name="check" size={14} />
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
                      <span className="b8-2">Boa tarde adson como vai as</span>
                      <div className="visto-mensagem">
                        <Icon name="check" size={14} />
                        <Icon name="check" size={14} />
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
                      <span className="b8-2">Boa tarde adson como vai as</span>
                      <div className="visto-mensagem">
                        <Icon name="check" size={14} />
                        <Icon name="check" size={14} />
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
                <ul ref={shortsListRefA} className="short-previu">
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
                <ul ref={shortsListRefB} className="short-previu">
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
    );
  }

  if (variant === "mensagem") {
    return (
      <div className={`barra-lateral ${styles.root}`}>
        <div className="storys">
          <h2 className="f-14 b8">Story</h2>
          <ul ref={storyListRef} className="storys-lista">
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
          <h2 className="f-14 b8 titulo-mensagem">Contatos</h2>
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
                      <span className="b8-2">Boa tarde adson como vai as</span>
                      <div className="visto-mensagem">
                        <Icon name="check" size={14} />
                        <Icon name="check" size={14} />
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
                      <span className="b8-2">Boa tarde adson como vai as</span>
                      <div className="visto-mensagem">
                        <Icon name="check" size={14} />
                        <Icon name="check" size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`barra-lateral ${styles.root}`}>
      <div className="storys">
        <h2 className="f-14 b8">Story</h2>
        <ul ref={storyListRef} className="storys-lista">
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
      <div className="publicacao-recente">
        <h2 className="f-14 b8">Publicação Recente</h2>
        <div className="publicacao-recente-bg">
          <div>
            <Link className="publicacao-recente-bg-interna" href="/notificacao">
              <div className="publicacao-recente-perfil">
                <img
                  className="perfil"
                  src="/img/pl-recente/foto-perfil.png"
                  alt="foto de perfil kauan"
                />
              </div>
              <div className="publicacao-recente-texto">
                <h3 className="f-14 b8">Kauan</h3>
                <span className=" b8-2">
                  Adionou bruno na sua lista de amigos
                </span>
              </div>
              <div className="publicacao-recente-previo">
                <img src="/img/pl-recente/foto.jpg" alt="Previo foto bruno" />
              </div>
            </Link>
          </div>
          <div>
            <Link className="publicacao-recente-bg-interna" href="/notificacao">
              <div className="publicacao-recente-perfil">
                <img
                  className="perfil"
                  src="/img/pl-recente/foto-perfil2.png"
                  alt="foto de perfil Claudia"
                />
              </div>
              <div className="publicacao-recente-texto">
                <h3 className="f-14 b8">Claudia</h3>
                <span className=" b8-2">
                  Adionou bruno na sua lista de amigos
                </span>
              </div>
              <div className="publicacao-recente-previo">
                <img src="/img/pl-recente/foto.jpg" alt="Previo foto bruno" />
              </div>
            </Link>
          </div>
          <div>
            <Link className="publicacao-recente-bg-interna" href="/notificacao">
              <div className="publicacao-recente-perfil">
                <img
                  className="perfil"
                  src="/img/pl-recente/foto-perfil3.png"
                  alt="foto de perfil Ana Paula"
                />
              </div>
              <div className="publicacao-recente-texto">
                <h3 className="f-14 b8">Ana Paula</h3>
                <span className="b8-2">
                  Adionou bruno na sua lista de amigos
                </span>
              </div>
              <div className="publicacao-recente-previo">
                <img src="/img/pl-recente/foto.jpg" alt="Previo foto bruno" />
              </div>
            </Link>
          </div>
          <div></div>
        </div>
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
                    <span className="b8-2">Boa tarde adson como vai as</span>
                    <div className="visto-mensagem">
                      <Icon name="check" size={14} />
                      <Icon name="check" size={14} />
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
                    <span className="b8-2">Boa tarde adson como vai as</span>
                    <div className="visto-mensagem">
                      <Icon name="check" size={14} />
                      <Icon name="check" size={14} />
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
                    <span className="b8-2">Boa tarde adson como vai as</span>
                    <div className="visto-mensagem">
                      <Icon name="check" size={14} />
                      <Icon name="check" size={14} />
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
                    <span className="b8-2">Boa tarde adson como vai as</span>
                    <div className="visto-mensagem">
                      <Icon name="check" size={14} />
                      <Icon name="check" size={14} />
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
                    <span className="b8-2">Boa tarde adson como vai as</span>
                    <div className="visto-mensagem">
                      <Icon name="check" size={14} />
                      <Icon name="check" size={14} />
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
                    <span className="b8-2">Boa tarde adson como vai as</span>
                    <div className="visto-mensagem">
                      <Icon name="check" size={14} />
                      <Icon name="check" size={14} />
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
                    <span className="b8-2">Boa tarde adson como vai as</span>
                    <div className="visto-mensagem">
                      <Icon name="check" size={14} />
                      <Icon name="check" size={14} />
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
                    <span className="b8-2">Boa tarde adson como vai as</span>
                    <div className="visto-mensagem">
                      <Icon name="check" size={14} />
                      <Icon name="check" size={14} />
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
                <h2 className="f-14 b8">Alta</h2>
                <Link className="b5" href="/short">
                  ver mais
                </Link>
              </div>
              <ul ref={shortsListRefA} className="short-previu">
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
                <h2 className="f-14 b8">Novo</h2>
                <Link className="b5" href="/short">
                  ver mais
                </Link>
              </div>
              <ul ref={shortsListRefB} className="short-previu">
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
  );
}
