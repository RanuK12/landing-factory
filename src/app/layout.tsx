import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Landing Factory — Professional Landing Pages in 24h | Ranuk IT Solutions",
  description:
    "Professional landing pages for your business: restaurants, startups, e-commerce, portfolios. Real code (Next.js + Tailwind), hosting included, no monthly fees. Ranuk IT Solutions.",
  keywords: [
    "landing page",
    "professional website",
    "web design",
    "Next.js",
    "Ranuk IT",
    "web development",
    "hosting included",
    "landing page in 24h",
    "small business website",
  ],
  openGraph: {
    title: "Landing Factory — Professional Landing Pages in 24h",
    description:
      "Professional landing pages with real code. Hosting included. No monthly fees.",
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
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
