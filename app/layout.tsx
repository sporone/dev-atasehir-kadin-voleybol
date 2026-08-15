import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev Ataşehir Spor Kulübü | Kadın Voleybol",
  description: "Dev Ataşehir Spor Kulübü Kadınlar 2. Ligi resmi takım, fikstür ve maç sayfası.",
  icons: { icon: "/logo.png", shortcut: "/logo.png" },
  openGraph: {
    title: "Dev Ataşehir | Sahada Tek Yürek",
    description: "Kadınlar 2. Ligi takım, fikstür ve maç merkezi.",
    images: [{ url: "/og-dev-atasehir.png", width: 1200, height: 630, alt: "Dev Ataşehir Spor Kulübü — Kadınlar 2. Ligi" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-dev-atasehir.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}
