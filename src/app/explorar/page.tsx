import type { Metadata } from "next";

import { Sidenav } from "../../components/Sidenav";
import { MobileNav } from "../../components/MobileNav";
import { RightSidebar } from "../../components/RightSidebar";
import { Spinner } from "../../components/Spinner";
import { TopSearchBar } from "../../components/TopSearchBar";
import { AppContainer } from "../../components/AppContainer";

import styles from "./explorar.module.scss";

export const metadata: Metadata = {
  title: "Explorar",
};

export default function Page() {
  return (
    <>
      <Spinner />

      <AppContainer id="explorar" className={styles.root}>
        <Sidenav activeHref="/explorar" />

        <main className="content">
          <TopSearchBar />

          <div className="publicacao-bg">
            <div className="explorar-container">
              <a className="video-explorar" href="#">
                <img src="/img/explorar/video-1.jpg" alt="Grau de motocross" />
              </a>
              <a href="#">
                <img
                  src="/img/explorar/foto-3.jpg"
                  alt="Picina no alto de predio"
                />
              </a>
              <a href="#">
                <img src="/img/explorar/foto-8.jpg" alt="Carro na estrada" />
              </a>
              <a href="#">
                <img src="/img/explorar/foto-4.jpg" alt="Taxi na cidade" />
              </a>
              <a className="video-explorar" href="#">
                <img src="/img/explorar/video.jpg" alt="" />
              </a>
              <a href="#">
                <img src="/img/explorar/foto.jpg" alt="" />
              </a>
              <a href="#">
                <img src="/img/explorar/foto-5.jpg" alt="Moto estacionada" />
              </a>
              <a href="#">
                <img
                  src="/img/explorar/foto-1.jpg"
                  alt="Sobremesa gourmet na mesa"
                />
              </a>
              <a href="#">
                <img
                  src="/img/explorar/foto-6.jpg"
                  alt="Prato gourmet com vinho"
                />
              </a>
              <a href="#">
                <img
                  src="/img/explorar/foto-9.jpg"
                  alt="Piloto de motocross parado"
                />
              </a>
              <a href="#">
                <img src="/img/explorar/foto-2.jpg" alt="Paisagem do mar" />
              </a>
              <a href="#">
                <img src="/img/explorar/foto-7.jpg" alt="Floresta verde" />
              </a>
              <a href="#">
                <img
                  src="/img/explorar/foto-10.jpg"
                  alt="Mulher com por do sol"
                />
              </a>
              <a href="#">
                <img
                  src="/img/explorar/foto-1.jpg"
                  alt="Sobremesa gourmet na mesa"
                />
              </a>
              <a href="#">
                <img
                  src="/img/explorar/foto-6.jpg"
                  alt="Prato gourmet com vinho"
                />
              </a>
              <a href="#">
                <img
                  src="/img/explorar/foto-9.jpg"
                  alt="Piloto de motocross parado"
                />
              </a>
              <a href="#">
                <img src="/img/explorar/foto-2.jpg" alt="Paisagem do mar" />
              </a>
              <a href="#">
                <img src="/img/explorar/foto-7.jpg" alt="Floresta verde" />
              </a>
              <a href="#">
                <img
                  src="/img/explorar/foto-10.jpg"
                  alt="Mulher com por do sol"
                />
              </a>
              <a href="#">
                <img
                  src="/img/explorar/foto-1.jpg"
                  alt="Sobremesa gourmet na mesa"
                />
              </a>
              <a href="#">
                <img
                  src="/img/explorar/foto-6.jpg"
                  alt="Prato gourmet com vinho"
                />
              </a>
              <a href="#">
                <img
                  src="/img/explorar/foto-9.jpg"
                  alt="Piloto de motocross parado"
                />
              </a>
              <a href="#">
                <img src="/img/explorar/foto-2.jpg" alt="Paisagem do mar" />
              </a>
              <a className="video-explorar" href="#">
                <img src="/img/explorar/video-1.jpg" alt="Grau de motocross" />
              </a>
              <a href="#">
                <img
                  src="/img/explorar/foto-3.jpg"
                  alt="Picina no alto de predio"
                />
              </a>
              <a href="#">
                <img src="/img/explorar/foto-8.jpg" alt="Carro na estrada" />
              </a>
              <a href="#">
                <img src="/img/explorar/foto-4.jpg" alt="Taxi na cidade" />
              </a>
              <a className="video-explorar" href="#">
                <img src="/img/explorar/video.jpg" alt="" />
              </a>
              <a href="#">
                <img src="/img/explorar/foto-7.jpg" alt="Floresta verde" />
              </a>
              <a href="#">
                <img
                  src="/img/explorar/foto-10.jpg"
                  alt="Mulher com por do sol"
                />
              </a>
              <a href="#">
                <img
                  src="/img/explorar/foto-1.jpg"
                  alt="Sobremesa gourmet na mesa"
                />
              </a>
              <a href="#">
                <img
                  src="/img/explorar/foto-6.jpg"
                  alt="Prato gourmet com vinho"
                />
              </a>
              <a href="#">
                <img
                  src="/img/explorar/foto-9.jpg"
                  alt="Piloto de motocross parado"
                />
              </a>
              <a href="#">
                <img src="/img/explorar/foto-2.jpg" alt="Paisagem do mar" />
              </a>
              <a href="#">
                <img src="/img/explorar/foto-7.jpg" alt="Floresta verde" />
              </a>
              <a href="#">
                <img
                  src="/img/explorar/foto-10.jpg"
                  alt="Mulher com por do sol"
                />
              </a>
              <a className="video-explorar" href="#">
                <img src="/img/explorar/video-1.jpg" alt="Grau de motocross" />
              </a>
              <a href="#">
                <img
                  src="/img/explorar/foto-3.jpg"
                  alt="Picina no alto de predio"
                />
              </a>
              <a href="#">
                <img src="/img/explorar/foto-8.jpg" alt="Carro na estrada" />
              </a>
              <a href="#">
                <img src="/img/explorar/foto-4.jpg" alt="Taxi na cidade" />
              </a>
            </div>
          </div>
        </main>

        <MobileNav activeHref="/explorar" />

        <RightSidebar />
      </AppContainer>
    </>
  );
}
