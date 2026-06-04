import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Landing Factory — Landings Profesionales en 24h | Ranuk IT Solutions",
  description:
    "Landings profesionales para tu negocio: restaurantes, startups, e-commerce, portfolios. Código real (Next.js + Tailwind), hosting incluido, sin mensualidades. Ranuk IT Solutions.",
  keywords: [
    "landing page",
    "página web profesional",
    "diseño web",
    "Next.js",
    "Ranuk IT",
    "desarrollo web",
    "hosting incluido",
  ],
  openGraph: {
    title: "Landing Factory — Landings Profesionales en 24h",
    description: "Landings profesionales con código real. Hosting incluido. Sin mensualidades.",
    siteName: "Landing Factory | Ranuk IT Solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
