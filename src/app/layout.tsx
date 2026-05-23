import type { Metadata } from "next";
import type { ReactNode } from "react";

import { LegacyClientInit } from "@/presentation/legacy/LegacyClientInit";

import "../../css/scss/style.scss";

export const metadata: Metadata = {
  title: {
    template: "%s | Social rede",
    default: "Social rede",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <link href="/css/uicons-regular-rounded.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <LegacyClientInit />
      </body>
    </html>
  );
}
