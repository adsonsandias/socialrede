import { useContext } from "react";

import { SidenavContext } from "../context/SidenavContext";

export function useSidenav() {
  const value = useContext(SidenavContext);
  if (!value) {
    throw new Error("useSidenav must be used within SidenavProvider");
  }
  return value;
}

