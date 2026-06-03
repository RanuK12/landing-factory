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
  title: "Ranuk IT — ADA & WCAG Accessibility Audits",
  description:
    "Get a comprehensive WCAG 2.1 accessibility audit. Identify compliance gaps, avoid lawsuits, and make your site accessible to everyone. Free audit available.",
  keywords: [
    "ADA compliance",
    "WCAG audit",
    "accessibility testing",
    "ADA lawsuit prevention",
    "web accessibility",
    "WCAG 2.1",
    "Section 508",
    "ADA remediation",
  ],
  openGraph: {
    title: "Ranuk IT — ADA & WCAG Accessibility Audits",
    description:
      "Comprehensive WCAG 2.1 audits that protect your business from ADA lawsuits. Free audit — fix for a flat $1,200.",
    url: "https://ranuk.dev",
    siteName: "Ranuk IT Solutions",
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
