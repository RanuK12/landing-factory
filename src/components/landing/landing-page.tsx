"use client";

import { ThemeProvider } from "./theme-provider";
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
  businessName = "Tu Negocio",
  tagline = "Tu presencia profesional en la web",
}: LandingPageProps) {
  const colors = colorSchemes[nicho.colorScheme];

  return (
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
  );
}
