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
  title: "ADA Website Compliance Audit — Ranuk IT | Free WCAG 2.1 Report",
  description:
    "Get a comprehensive WCAG 2.1 accessibility audit for your website. Identify ADA compliance gaps, avoid costly lawsuits, and make your site accessible to everyone. Free audit available — fixes for a flat $1,200.",
  keywords: [
    "ADA compliance",
    "WCAG audit",
    "accessibility testing",
    "ADA lawsuit prevention",
    "web accessibility",
    "WCAG 2.1",
    "Section 508",
    "ADA remediation",
    "website accessibility audit",
    "ADA compliance check",
  ],
  authors: [{ name: "Ranuk IT Solutions" }],
  creator: "Ranuk IT Solutions",
  metadataBase: new URL("https://ranuk12.github.io"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ranuk12.github.io/landing-factory/",
    siteName: "Ranuk IT Solutions",
    title: "ADA Website Compliance Audit — Ranuk IT",
    description:
      "Comprehensive WCAG 2.1 audits that protect your business from ADA lawsuits. Get your free accessibility report — fix everything for a flat $1,200.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ranuk IT — ADA & WCAG Accessibility Audits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ADA Website Compliance Audit — Ranuk IT",
    description:
      "Free WCAG 2.1 accessibility audit. Protect your business from ADA lawsuits. Fix compliance gaps for a flat $1,200.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
