"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icon, type IconName } from "./Icon";
import styles from "./MobileNav.module.scss";

type MobileNavItem = {
  href: string;
  icon: IconName;
  label: string;
};

type MobileNavProps = {
  activeHref?: string;
};

const items: MobileNavItem[] = [
  { href: "/", icon: "feed", label: "Feed" },
  { href: "/explorar", icon: "explorar", label: "Explorar" },
  { href: "/short", icon: "short", label: "Shorts" },
  { href: "/notificacao", icon: "notificacao", label: "Alertas" },
  { href: "/perfil", icon: "perfil", label: "Perfil" },
];

function checkActiveRoute(currentPath: string, href: string) {
  if (href === "/") {
    return currentPath === "/";
  }

  return currentPath === href || currentPath.startsWith(`${href}/`);
}

export function MobileNav({ activeHref }: MobileNavProps) {
  const pathname = usePathname();
  const currentPath = activeHref ?? pathname;

  return (
    <nav className={styles.root} aria-label="Navegação principal">
      <div className={styles.navigation}>
        <ul className={styles.listContainer}>
          {items.map((item) => {
            const isActive = checkActiveRoute(currentPath, item.href);

            return (
              <li key={item.href} className={styles.list}>
                <Link
                  className={[styles.link, isActive ? styles.active : ""].join(
                    " ",
                  )}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className={styles.indicator} aria-hidden="true" />

                  <span className={styles.icon} aria-hidden="true">
                    <Icon name={item.icon} size={22} />
                  </span>

                  <span className={styles.text}>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
