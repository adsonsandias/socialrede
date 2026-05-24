"use client";

import Link from "next/link";
import { useId } from "react";

import { useTheme } from "../hooks/useTheme";
import { useSidenav } from "../hooks/useSidenav";
import styles from "./TopSearchBar.module.scss";

export function TopSearchBar() {
  const itemCheckId = useId();
  const searchId = useId();
  const { theme, setTheme } = useTheme();
  const { open } = useSidenav();

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.menuAndSearch}>
          <div className={styles.menu}>
            <button type="button" className={styles.menuButton} onClick={open}>
              <i className="fi fi-rr-menu-burger"></i>
            </button>
          </div>
          <input
            type="checkbox"
            id={itemCheckId}
            className={styles.itemCheck}
          />
          <div className={styles.searchConversa}>
            <label className={styles.searchLabel} htmlFor={itemCheckId}>
              <i className="fi fi-rr-search"></i>
            </label>
            <input
              type="search"
              id={searchId}
              className={styles.searchInput}
              placeholder="Pesquisar..."
            />
          </div>
        </div>
        <div className={styles.modoNoturno}>
          <button
            type="button"
            className={[
              styles.themeButton,
              styles.themeButtonSun,
              theme === "light" ? styles.activeLight : "",
            ].join(" ")}
            onClick={() => setTheme("light")}
          >
            <i className="fi fi-rr-sun"></i>
          </button>
          <button
            type="button"
            className={[
              styles.themeButton,
              theme === "dark" ? styles.activeDark : "",
            ].join(" ")}
            onClick={() => setTheme("dark")}
          >
            <i className="fi fi-rr-moon"></i>
          </button>
          <Link className={styles.messageButton} href="/mensagem">
            <i className="fi fi-rr-comments"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
