"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { Icon, type IconName } from "./Icon";
import styles from "./Sidenav.module.scss";
import { useSidenav } from "../hooks/useSidenav";
import { useTheme } from "../hooks/useTheme";

type NavItem = {
  href: string;
  icon: IconName;
  label: string;
  rightSlot?: ReactNode;
};

type SidenavProps = {
  activeHref: string;
  variant?: "default" | "live";
};

const navItems: NavItem[] = [
  { href: "/", icon: "feed", label: "Feed" },
  {
    href: "/explorar",
    icon: "explorar",
    label: "Explorar",
  },
  { href: "/short", icon: "short", label: "Shorts" },
  { href: "/mensagem", icon: "message", label: "Mensagem" },
  {
    href: "/notificacao",
    icon: "notificacao",
    label: "Notificação",
    rightSlot: <span className={`${styles.notificacao} f-12`}>5</span>,
  },
  { href: "/live", icon: "live", label: "Live" },
];

const settingsItems: NavItem[] = [
  {
    href: "/configuracao",
    icon: "settings",
    label: "Configuração",
  },
  { href: "/login", icon: "logout", label: "login" },
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
                <Icon name="search" size={16} />
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
            <Icon name="close" size={20} />
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
                  <Icon name={item.icon} size={24} />
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
                  <Icon name={item.icon} size={24} />
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
              <Icon name="chevronDown" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
