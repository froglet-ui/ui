import { Atma, JetBrains_Mono, Nunito } from "next/font/google";
import type { ReactNode } from "react";
import { Providers } from "./providers";
import "../styles/globals.css";
import "@froglet/ui/styles";

const atma = Atma({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: { default: "Froglet UI", template: "%s – Froglet UI" },
  description: "A playful, accessible React component library.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${atma.variable} ${nunito.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
