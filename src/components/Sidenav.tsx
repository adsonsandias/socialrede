"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import styles from "./Sidenav.module.scss";
import { useSidenav } from "../hooks/useSidenav";
import { useTheme } from "../hooks/useTheme";

type NavItem = {
  href: string;
  iconClassName: string;
  label: string;
  rightSlot?: ReactNode;
};

type SidenavProps = {
  activeHref: string;
  variant?: "default" | "live";
};

const navItems: NavItem[] = [
  { href: "/", iconClassName: "fi fi-rr-layout-fluid", label: "Feed" },
  {
    href: "/explorar",
    iconClassName: "fi fi-rr-navigation",
    label: "Explorar",
  },
  { href: "/short", iconClassName: "fi fi-rr-play-alt", label: "Shorts" },
  { href: "/mensagem", iconClassName: "fi fi-rr-comments", label: "Mensagem" },
  {
    href: "/notificacao",
    iconClassName: "fi fi-rr-bell",
    label: "Notificação",
    rightSlot: <span className={`${styles.notificacao} f-12`}>5</span>,
  },
  { href: "/live", iconClassName: "fi fi-rr-camera", label: "Live" },
];

const settingsItems: NavItem[] = [
  {
    href: "/configuracao",
    iconClassName: "fi fi-rr-settings",
    label: "Configuração",
  },
  { href: "/login", iconClassName: "fi fi-rr-sign-out-alt", label: "login" },
];

function getLinkClassName(href: string, activeHref: string): string {
  return href === activeHref
    ? `${styles.navLink} ${styles.activeLink}`
    : styles.navLink;
}

export function Sidenav({ activeHref, variant = "default" }: SidenavProps) {
  const { isOpen, close } = useSidenav();
  const { theme } = useTheme();

  return (
    <div className={`sidenav ${styles.root} ${isOpen ? styles.open : ""}`}>
      <div className={styles.top}>
        <div className={styles.logo}>
          {variant === "live" ? (
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="Pesquisar..."
                className={styles.searchInput}
              />
              <button type="button" className={styles.searchBtn}>
                <i className="fi fi-rr-search"></i>
              </button>
            </div>
          ) : (
            <>
              <img
                src={theme === "dark" ? "/img/logo-dark.svg" : "/img/logo.svg"}
                alt=""
              />
              <p className="f-18 b8">Social rede</p>
            </>
          )}
        </div>
        <button type="button" className={styles.close} onClick={close}>
          <span>
            <i className="fi fi-rr-cross"></i>
          </span>
        </button>
      </div>
      <div className={styles.bgNav}>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  className={getLinkClassName(item.href, activeHref)}
                  href={item.href}
                >
                  <i className={item.iconClassName}></i>
                  <h2 className="f-14 c8">{item.label}</h2>
                  {item.rightSlot}
                </Link>
              </li>
            ))}
            <span className={styles.sepNav}></span>
            {settingsItems.map((item) => (
              <li key={item.href}>
                <Link
                  className={getLinkClassName(item.href, activeHref)}
                  href={item.href}
                >
                  <i className={item.iconClassName}></i>
                  <h2 className="f-14 c8">{item.label}</h2>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.perfilSidenav}>
          <h2 className="f-18 b8">Perfil</h2>
          <div className={styles.bgPerfilNav}>
            <img src="/img/perfil-principal.jpg" alt="Perfil Usuario" />
            <div>
              <h3 className="f-12 b8">Adson Santos</h3>
              <p className="f-10 c7">on-line</p>
            </div>
            <Link href="/perfil">
              <i className="fi fi-rr-caret-down"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
