import type { Metadata } from "next";
import type { ReactNode } from "react";

import { ThemeProvider } from "../context/ThemeContext";
import { SidenavProvider } from "../context/SidenavContext";

import "../styles/globals.scss";

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
      </head>
      <body>
        <ThemeProvider>
          <SidenavProvider>{children}</SidenavProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
