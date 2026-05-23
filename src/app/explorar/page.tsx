import type { Metadata } from "next";

import { LegacyHtml } from "@/presentation/legacy/LegacyHtml";

export const metadata: Metadata = {
  title: "Explorar"
};

export default function Page() {
  return <LegacyHtml fileName="explorar.html" />;
}

