import type { Metadata } from "next";

import { LegacyHtml } from "@/presentation/legacy/LegacyHtml";

export const metadata: Metadata = {
  title: "Login"
};

export default function Page() {
  return <LegacyHtml fileName="login.html" />;
}

