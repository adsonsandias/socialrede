"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { initAllLegacyInteractions } from "@/presentation/legacy/init/initAll";

export function LegacyClientInit() {
  const pathname = usePathname();

  useEffect(() => {
    initAllLegacyInteractions();
  }, [pathname]);

  return null;
}

