"use client";

import { ThemeProvider } from "./theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { Header } from "./header";
import { Hero } from "./hero";
import { Features } from "./features";
import { Pricing } from "./pricing";
import { FAQ } from "./faq";
import { Contact } from "./contact";
import { Footer } from "./footer";
import { colorSchemes, type Nicho } from "@/data/nichos";

interface LandingPageProps {
  nicho: Nicho;
  businessName?: string;
  tagline?: string;
}

export function LandingPage({
  nicho,
  businessName = "Your Business",
  tagline = "Your Professional Web Presence",
}: LandingPageProps) {
  const colors = colorSchemes[nicho.colorScheme];

  return (
    <LanguageProvider>
      <ThemeProvider
        nicho={nicho}
        colors={colors}
        businessName={businessName}
        tagline={tagline}
      >
        <div className="min-h-screen bg-[#0a0a0f] text-white">
          <Header />
          <main>
            <Hero />
            <Features />
            <Pricing />
            <FAQ />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}
