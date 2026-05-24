import type { ReactNode } from "react";

import styles from "./AppContainer.module.scss";

type AppContainerProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function AppContainer({ id, className, children }: AppContainerProps) {
  return (
    <div data-home="" id={id} className={`${styles.container} ${className ?? ""}`}>
      {children}
    </div>
  );
}

