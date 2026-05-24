"use client";

import { useEffect, useState } from "react";

import styles from "./Spinner.module.scss";

export function Spinner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIsVisible(false);
    }, 250);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div
      aria-hidden={!isVisible}
      className={`spinner-bg ${styles.root} ${isVisible ? "" : styles.hidden}`}
    >
      <div className="spinner"></div>
    </div>
  );
}
