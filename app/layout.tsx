import type { Metadata } from "next";
import { Oswald, Manrope } from "next/font/google";
import "./globals.css";

const display = Oswald({ variable: "--font-display", subsets: ["latin", "latin-ext"] });
const body = Manrope({ variable: "--font-body", subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Dev Ataşehir Spor Kulübü | Kadın Voleybol",
  description: "Dev Ataşehir Spor Kulübü Kadınlar 2. Ligi resmi takım, fikstür ve maç sayfası.",
  icons: { icon: "/logo.png", shortcut: "/logo.png" },
  openGraph: {
    title: "Dev Ataşehir | Sahada Tek Yürek",
    description: "Kadınlar 2. Ligi takım, fikstür ve maç merkezi.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dev Ataşehir Spor Kulübü — Sahada Tek Yürek" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body className={`${display.variable} ${body.variable}`}>{children}</body></html>;
}
