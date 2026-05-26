"use client";

import { useState } from "react";

import styles from "./PublicationNav.module.scss";
import { Icon } from "./Icon";

type PublicationAction = "curti" | "comen" | "compar";

export function PublicationNav({
  defaultActive = "curti",
}: {
  defaultActive?: PublicationAction;
}) {
  const [active, setActive] = useState<PublicationAction>(defaultActive);

  return (
    <ul className={styles.nav_publicacao}>
      <li>
        <button
          type="button"
          onClick={() => setActive("curti")}
          className={`${styles.item_button} ${active === "curti" ? styles.active : ""}`}
        >
          <Icon name="heart" size={20} />
          <h2 className="f-12 b8">Curti</h2>
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => setActive("comen")}
          className={`${styles.item_button} ${active === "comen" ? styles.active : ""}`}
        >
          <Icon name="message" size={20} />
          <h2 className="f-12 b8">Comen</h2>
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => setActive("compar")}
          className={`${styles.item_button} ${active === "compar" ? styles.active : ""}`}
        >
          <Icon name="share" size={20} />
          <h2 className="f-12 b8">Compar</h2>
        </button>
      </li>
    </ul>
  );
}
