import type { Metadata } from "next";

import { LegacyHtml } from "@/presentation/legacy/LegacyHtml";

export const metadata: Metadata = {
  title: "Live"
};

export default function Page() {
  return <LegacyHtml fileName="live.html" />;
}

