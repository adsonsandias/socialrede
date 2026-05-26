"use client";

import Link from "next/link";
import { useId } from "react";

import { Icon } from "./Icon";
import { useTheme } from "../hooks/useTheme";
import { useSidenav } from "../hooks/useSidenav";
import styles from "./TopSearchBar.module.scss";

export function TopSearchBar() {
  const searchId = useId();
  const { theme, setTheme } = useTheme();
  const { open } = useSidenav();

  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <div className={styles.menuAndSearch}>
          <div className={styles.menu}>
            <button
              type="button"
              className={styles.menuButton}
              onClick={open}
              aria-label="Abrir menu lateral"
            >
              <Icon name="menu" size={20} />
            </button>
          </div>

          <div className={styles.searchConversa}>
            <label
              className={styles.searchLabel}
              htmlFor={searchId}
              aria-label="Pesquisar"
            >
              <Icon name="search" size={17} />
            </label>

            <input
              type="search"
              id={searchId}
              className={styles.searchInput}
              placeholder="Pesquisar..."
              autoComplete="off"
              spellCheck={false}
            />
          </div>
        </div>

        <nav className={styles.actions} aria-label="Ações rápidas">
          <button
            type="button"
            className={[
              styles.actionButton,
              styles.sunButton,
              theme === "light" ? styles.activeLight : "",
            ].join(" ")}
            onClick={() => setTheme("light")}
            aria-label="Ativar modo claro"
            aria-pressed={theme === "light"}
            title="Modo claro"
          >
            <Icon name="sun" size={20} />
          </button>

          <button
            type="button"
            className={[
              styles.actionButton,
              styles.moonButton,
              theme === "dark" ? styles.activeDark : "",
            ].join(" ")}
            onClick={() => setTheme("dark")}
            aria-label="Ativar modo escuro"
            aria-pressed={theme === "dark"}
            title="Modo escuro"
          >
            <Icon name="moon" size={20} />
          </button>

          <Link
            className={styles.messageButton}
            href="/mensagem"
            aria-label="Abrir mensagens"
            title="Mensagens"
          >
            <Icon name="message" size={20} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
