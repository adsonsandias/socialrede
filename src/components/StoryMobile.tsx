"use client";

import styles from "./StoryMobile.module.scss";
import { useDragToScroll } from "../hooks/useDragToScroll";

export function StoryMobile() {
  const listRef = useDragToScroll<HTMLUListElement>({ lockAxis: "x" });

  return (
    <div className={`story-mobile ${styles.root}`}>
      <ul ref={listRef} className="s-mobile">
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
  );
}
