import type { Metadata } from "next";

import { LegacyHtml } from "@/presentation/legacy/LegacyHtml";

export const metadata: Metadata = {
  title: "Shorts"
};

export default function Page() {
  return <LegacyHtml fileName="short.html" />;
}

