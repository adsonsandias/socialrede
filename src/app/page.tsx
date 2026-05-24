import type { Metadata } from "next";

import { Sidenav } from "../components/Sidenav";
import { MobileNav } from "../components/MobileNav";
import { RightSidebar } from "../components/RightSidebar";
import { StoryMobile } from "../components/StoryMobile";
import { Spinner } from "../components/Spinner";
import { TopSearchBar } from "../components/TopSearchBar";
import { AppContainer } from "../components/AppContainer";
import { PublicationNav } from "../components/PublicationNav";

export const metadata: Metadata = {
  title: "Feed",
};

function PublicacaoComentar() {
  return (
    <div className="puplicacao-comentar">
      <img
        className="perfil"
        src="/img/perfil-principal.jpg"
        alt="Foto perfil linha do tempo"
      />
      <input type="text" id="texto" placeholder="Escreva um comentário..." />
      <button className="btn">
        <i className="fi fi-rr-paper-plane"></i>
      </button>
    </div>
  );
}

type PublicacaoProps = {
  perfilSrc: string;
  nome: string;
  tempo: string;
  fotoSrc: string;
};

function Publicacao(props: PublicacaoProps) {
  return (
    <div className="publicacao-bg">
      <div className="publicacao-top">
        <div className="perfil-publicacao">
          <img
            className="perfil"
            src={props.perfilSrc}
            alt="Perfil Publicação"
          />
          <div>
            <h2 className="f-14 b8">{props.nome}</h2>
            <span className="f-12 b8-2">{props.tempo}</span>
          </div>
        </div>
        <div className="menu-publicacao">
          <a href="#">
            <i className="fi fi-rr-bookmark"></i>
          </a>
          <a href="#">
            <i className="fi fi-rr-menu-dots-vertical"></i>
          </a>
        </div>
      </div>
      <div className="foto-postada">
        <img src={props.fotoSrc} alt="Publicação Foto" />
      </div>
      <span className="sep-publicacao"></span>
      <div>
        <PublicationNav />
      </div>
      <span className="sep-publicacao"></span>
      <PublicacaoComentar />
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Spinner />

      <AppContainer>
        <Sidenav activeHref="/" />

        <main className="content">
          <TopSearchBar />

          <div className="time-line-bg">
            <div className="time-line">
              <img
                className="perfil"
                src="/img/perfil-principal.jpg"
                alt="Foto perfil linha do tempo"
              />
              <input
                type="text"
                id="texto"
                placeholder="No que você esta pensando ?"
              />
              <div>
                <div>
                  <a href="#">
                    <i className="fi fi-rr-camera"></i>
                    <p className="f-12 b5">Live Video</p>
                  </a>
                  <a href="#">
                    <i className="fi fi-rr-picture"></i>
                    <p className="f-12 b5">Fotos</p>
                  </a>
                  <a href="#">
                    <i className="fi fi-rr-play-alt"></i>
                    <p className="f-12 b5">Video</p>
                  </a>
                  <a href="#">
                    <i className="fi fi-rr-users-alt"></i>
                    <p className="f-12 b5">Grupos</p>
                  </a>
                </div>
                <button className="btn-postar">Postar</button>
              </div>
            </div>
          </div>

          <StoryMobile />

          <Publicacao
            perfilSrc="/img/perfil-principal.jpg"
            nome="Adson Santos"
            tempo="15 minutos"
            fotoSrc="/img/perfil.jpeg"
          />
          <Publicacao
            perfilSrc="/img/story/story1.jpg"
            nome="Wendel"
            tempo="30 minutos"
            fotoSrc="/img/explorar/foto-1.jpg"
          />
          <Publicacao
            perfilSrc="/img/story/story2.jpg"
            nome="Ana Paula"
            tempo="45 minutos"
            fotoSrc="/img/explorar/foto-2.jpg"
          />
          <Publicacao
            perfilSrc="/img/story/story3.jpg"
            nome="Jhonatas"
            tempo="1 hora"
            fotoSrc="/img/explorar/foto-3.jpg"
          />
          <Publicacao
            perfilSrc="/img/story/story4.jpg"
            nome="Kauan"
            tempo="1h e 30 minutos"
            fotoSrc="/img/explorar/foto-4.jpg"
          />
          <Publicacao
            perfilSrc="/img/story/story5.jpg"
            nome="Andresa"
            tempo="2 horas"
            fotoSrc="/img/explorar/foto-6.jpg"
          />
          <Publicacao
            perfilSrc="/img/story/story6.jpg"
            nome="Claudia"
            tempo="4 horas"
            fotoSrc="/img/explorar/foto-7.jpg"
          />
        </main>

        <MobileNav activeHref="/" />

        <RightSidebar />
      </AppContainer>
    </>
  );
}
