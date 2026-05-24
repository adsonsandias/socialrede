import type { Metadata } from "next";

import { Sidenav } from "../../components/Sidenav";
import { MobileNav } from "../../components/MobileNav";
import { Spinner } from "../../components/Spinner";
import { RightSidebar } from "../../components/RightSidebar";
import { TopSearchBar } from "../../components/TopSearchBar";
import { AppContainer } from "../../components/AppContainer";

import styles from "./short.module.scss";

export const metadata: Metadata = {
  title: "Shorts",
};

export default function Page() {
  return (
    <>
      <Spinner />

      <AppContainer id="short" className={styles.root}>
        <Sidenav activeHref="/short" />

        <main className="content">
          <TopSearchBar />

          <div className="publicacao-bg">
            <div className="container-short">
              <div className="short">
                <div className="short-top">
                  <h2 className="b8">Em Alta</h2>
                  <a href="#">Ver mais</a>
                </div>
                <div className="short-img">
                  <a href="#">
                    <img src="/img/short/interna/short-alto.jpg" alt="" />
                    <div className="info-short">
                      <div className="info-imgs-short">
                        <img src="/img/short/info/0.png" alt="" />
                        <img src="/img/short/info/1.png" alt="" />
                        <img src="/img/short/info/2.png" alt="" />
                      </div>
                      <div className="info-span-short">
                        <span className="f-12 b8">100m</span>
                        <span className="f-10 b8">13:00 min</span>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <img src="/img/short/interna/short-alto-2.jpg" alt="" />
                    <div className="info-short">
                      <div className="info-imgs-short">
                        <img src="/img/short/info/0.png" alt="" />
                        <img src="/img/short/info/1.png" alt="" />
                        <img src="/img/short/info/2.png" alt="" />
                      </div>
                      <div className="info-span-short">
                        <span className="f-12 b8">78m</span>
                        <span className="f-10 b8">2:00 min</span>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <img src="/img/short/interna/short-alto-3.jpg" alt="" />
                    <div className="info-short">
                      <div className="info-imgs-short">
                        <img src="/img/short/info/0.png" alt="" />
                        <img src="/img/short/info/1.png" alt="" />
                        <img src="/img/short/info/2.png" alt="" />
                      </div>
                      <div className="info-span-short">
                        <span className="f-12 b8">54m</span>
                        <span className="f-10 b8">5:28 min</span>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <img src="/img/short/interna/short-alto-4.jpg" alt="" />
                    <div className="info-short">
                      <div className="info-imgs-short">
                        <img src="/img/short/info/0.png" alt="" />
                        <img src="/img/short/info/1.png" alt="" />
                        <img src="/img/short/info/2.png" alt="" />
                      </div>
                      <div className="info-span-short">
                        <span className="f-12 b8">45m</span>
                        <span className="f-10 b8">5:00 min</span>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <img src="/img/short/interna/short-alto-5.jpg" alt="" />
                    <div className="info-short">
                      <div className="info-imgs-short">
                        <img src="/img/short/info/0.png" alt="" />
                        <img src="/img/short/info/1.png" alt="" />
                        <img src="/img/short/info/2.png" alt="" />
                      </div>
                      <div className="info-span-short">
                        <span className="f-12 b8">32m</span>
                        <span className="f-10 b8">10:23 min</span>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <img src="/img/short/interna/short-alto-6.jpg" alt="" />
                    <div className="info-short">
                      <div className="info-imgs-short">
                        <img src="/img/short/info/0.png" alt="" />
                        <img src="/img/short/info/1.png" alt="" />
                        <img src="/img/short/info/2.png" alt="" />
                      </div>
                      <div className="info-span-short">
                        <span className="f-12 b8">20m</span>
                        <span className="f-10 b8">09:30 min</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="short-favorito">
                <div className="short-top">
                  <h2 className="b8">Favoritos</h2>
                  <a href="#">Ver mais</a>
                </div>
                <div className="short-img">
                  <a href="#">
                    <img src="/img/short/interna/favorito.jpg" alt="" />
                    <div className="info-short">
                      <div className="info-imgs-short">
                        <img src="/img/short/info/0.png" alt="" />
                        <img src="/img/short/info/1.png" alt="" />
                        <img src="/img/short/info/2.png" alt="" />
                      </div>
                      <div className="info-span-short">
                        <span className="f-12 b8">45m</span>
                        <span className="f-10 b8">13:00 min</span>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <img src="/img/short/interna/favorito-1.jpg" alt="" />
                    <div className="info-short">
                      <div className="info-imgs-short">
                        <img src="/img/short/info/0.png" alt="" />
                        <img src="/img/short/info/1.png" alt="" />
                        <img src="/img/short/info/2.png" alt="" />
                      </div>
                      <div className="info-span-short">
                        <span className="f-12 b8">30m</span>
                        <span className="f-10 b8">04:00 min</span>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <img src="/img/short/interna/favorito-2.jpg" alt="" />
                    <div className="info-short">
                      <div className="info-imgs-short">
                        <img src="/img/short/info/0.png" alt="" />
                        <img src="/img/short/info/1.png" alt="" />
                        <img src="/img/short/info/2.png" alt="" />
                      </div>
                      <div className="info-span-short">
                        <span className="f-12 b8">20m</span>
                        <span className="f-10 b8">01:40 min</span>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <img src="/img/short/interna/favorito.jpg" alt="" />
                    <div className="info-short">
                      <div className="info-imgs-short">
                        <img src="/img/short/info/0.png" alt="" />
                        <img src="/img/short/info/1.png" alt="" />
                        <img src="/img/short/info/2.png" alt="" />
                      </div>
                      <div className="info-span-short">
                        <span className="f-12 b8">14m</span>
                        <span className="f-10 b8">06:00 min</span>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <img src="/img/short/interna/favorito-1.jpg" alt="" />
                    <div className="info-short">
                      <div className="info-imgs-short">
                        <img src="/img/short/info/0.png" alt="" />
                        <img src="/img/short/info/1.png" alt="" />
                        <img src="/img/short/info/2.png" alt="" />
                      </div>
                      <div className="info-span-short">
                        <span className="f-12 b8">32m</span>
                        <span className="f-10 b8">04:20 min</span>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <img src="/img/short/interna/favorito-2.jpg" alt="" />
                    <div className="info-short">
                      <div className="info-imgs-short">
                        <img src="/img/short/info/0.png" alt="" />
                        <img src="/img/short/info/1.png" alt="" />
                        <img src="/img/short/info/2.png" alt="" />
                      </div>
                      <div className="info-span-short">
                        <span className="f-12 b8">73m</span>
                        <span className="f-10 b8">23:00 min</span>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <img src="/img/short/interna/favorito.jpg" alt="" />
                    <div className="info-short">
                      <div className="info-imgs-short">
                        <img src="/img/short/info/0.png" alt="" />
                        <img src="/img/short/info/1.png" alt="" />
                        <img src="/img/short/info/2.png" alt="" />
                      </div>
                      <div className="info-span-short">
                        <span className="f-12 b8">8m</span>
                        <span className="f-10 b8">04:30 min</span>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <img src="/img/short/interna/favorito-1.jpg" alt="" />
                    <div className="info-short">
                      <div className="info-imgs-short">
                        <img src="/img/short/info/0.png" alt="" />
                        <img src="/img/short/info/1.png" alt="" />
                        <img src="/img/short/info/2.png" alt="" />
                      </div>
                      <div className="info-span-short">
                        <span className="f-12 b8">35m</span>
                        <span className="f-10 b8">07:20 min</span>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <img src="/img/short/interna/favorito-2.jpg" alt="" />
                    <div className="info-short">
                      <div className="info-imgs-short">
                        <img src="/img/short/info/0.png" alt="" />
                        <img src="/img/short/info/1.png" alt="" />
                        <img src="/img/short/info/2.png" alt="" />
                      </div>
                      <div className="info-span-short">
                        <span className="f-12 b8">51m</span>
                        <span className="f-10 b8">02:57 min</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="short">
                <div className="short-top">
                  <h2 className="b8">Novos</h2>
                  <a href="#">Ver mais</a>
                </div>
                <div className="short-img">
                  <a href="#">
                    <img src="/img/short/interna/short-alto.jpg" alt="" />
                    <div className="info-short">
                      <div className="info-imgs-short">
                        <img src="/img/short/info/0.png" alt="" />
                        <img src="/img/short/info/1.png" alt="" />
                        <img src="/img/short/info/2.png" alt="" />
                      </div>
                      <div className="info-span-short">
                        <span className="f-12 b8">100m</span>
                        <span className="f-10 b8">01:50 min</span>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <img src="/img/short/interna/short-alto-2.jpg" alt="" />
                    <div className="info-short">
                      <div className="info-imgs-short">
                        <img src="/img/short/info/0.png" alt="" />
                        <img src="/img/short/info/1.png" alt="" />
                        <img src="/img/short/info/2.png" alt="" />
                      </div>
                      <div className="info-span-short">
                        <span className="f-12 b8">78m</span>
                        <span className="f-10 b8">10:20 min</span>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <img src="/img/short/interna/short-alto-3.jpg" alt="" />
                    <div className="info-short">
                      <div className="info-imgs-short">
                        <img src="/img/short/info/0.png" alt="" />
                        <img src="/img/short/info/1.png" alt="" />
                        <img src="/img/short/info/2.png" alt="" />
                      </div>
                      <div className="info-span-short">
                        <span className="f-12 b8">13m</span>
                        <span className="f-10 b8">03:26 min</span>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <img src="/img/short/interna/short-alto-4.jpg" alt="" />
                    <div className="info-short">
                      <div className="info-imgs-short">
                        <img src="/img/short/info/0.png" alt="" />
                        <img src="/img/short/info/1.png" alt="" />
                        <img src="/img/short/info/2.png" alt="" />
                      </div>
                      <div className="info-span-short">
                        <span className="f-12 b8">40m</span>
                        <span className="f-10 b8">02:00 min</span>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <img src="/img/short/interna/short-alto-5.jpg" alt="" />
                    <div className="info-short">
                      <div className="info-imgs-short">
                        <img src="/img/short/info/0.png" alt="" />
                        <img src="/img/short/info/1.png" alt="" />
                        <img src="/img/short/info/2.png" alt="" />
                      </div>
                      <div className="info-span-short">
                        <span className="f-12 b8">3m</span>
                        <span className="f-10 b8">24:00 min</span>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <img src="/img/short/interna/short-alto-6.jpg" alt="" />
                    <div className="info-short">
                      <div className="info-imgs-short">
                        <img src="/img/short/info/0.png" alt="" />
                        <img src="/img/short/info/1.png" alt="" />
                        <img src="/img/short/info/2.png" alt="" />
                      </div>
                      <div className="info-span-short">
                        <span className="f-12 b8">13m</span>
                        <span className="f-10 b8">04:20 min</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        <MobileNav activeHref="/short" />
        <RightSidebar />
      </AppContainer>
    </>
  );
}
