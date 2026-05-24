import Link from "next/link";

import styles from "./MobileNav.module.scss";

type MobileNavItem = {
  href: string;
  iconClassName: string;
  label: string;
};

type MobileNavProps = {
  activeHref: string;
};

const items: MobileNavItem[] = [
  { href: "/", iconClassName: "fi fi-rr-layout-fluid", label: "Feed" },
  { href: "/explorar", iconClassName: "fi fi-rr-navigation", label: "Explo" },
  { href: "/short", iconClassName: "fi fi-rr-play-alt", label: "Short" },
  { href: "/notificacao", iconClassName: "fi fi-rr-bell", label: "Noti" },
  { href: "/perfil", iconClassName: "fi fi-rr-user", label: "User" },
];

export function MobileNav({ activeHref }: MobileNavProps) {
  return (
    <div className={styles.root}>
      <div className={styles.navigation}>
        <ul>
          {items.map((item) => (
            <li
              key={item.href}
              className={[
                styles.list,
                item.href === activeHref ? styles.active : "",
              ].join(" ")}
            >
              <Link className={styles.link} href={item.href}>
                <span className={styles.icon}>
                  <i className={item.iconClassName}></i>
                </span>
                <span className={styles.text}>{item.label}</span>
              </Link>
              <div className={styles.indicator}></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
