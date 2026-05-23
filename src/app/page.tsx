import type { Metadata } from "next";

import { LegacyHtml } from "@/presentation/legacy/LegacyHtml";

export const metadata: Metadata = {
  title: "Feed"
};

export default function Page() {
  return <LegacyHtml fileName="index.html" />;
}

