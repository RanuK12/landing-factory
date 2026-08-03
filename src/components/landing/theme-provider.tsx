"use client";

import { createContext, useContext, ReactNode } from "react";
import type { ColorScheme, Nicho } from "@/data/nichos";

type ThemeContext = {
  nicho: Nicho;
  colors: ColorScheme;
  businessName: string;
  tagline: string;
  customConfig: any;
  getFeatures: () => string[];
  getPricingExtras: () => string[];
  getFaqs: () => { q: string; a: string }[];
  getContactEmail: () => string;
  getContactPhone: () => string | undefined;
  getContactWhatsApp: () => string;
};

const ThemeCtx = createContext<ThemeContext | null>(null);

export function ThemeProvider({
  children,
  nicho,
  colors,
  businessName,
  tagline,
  customConfig = null,
}: {
  children: ReactNode;
  nicho: Nicho;
  colors: ColorScheme;
  businessName: string;
  tagline: string;
  customConfig?: any;
}) {
  const getFeatures = (): string[] => {
    if (customConfig?.features && Array.isArray(customConfig.features)) {
      return customConfig.features;
    }
    return nicho.features;
  };

  const getPricingExtras = (): string[] => {
    if (customConfig?.pricingExtras && Array.isArray(customConfig.pricingExtras)) {
      return customConfig.pricingExtras;
    }
    // default extras in Spanish
    return [
      "SEO incluido",
      "Blog integrado",
      "Formulario de contacto",
      "Integración con redes sociales",
      "Hosting de alto rendimiento",
      "Dominio personalizado",
      "Soporte prioritario 24/7",
      "Ediciones ilimitadas por 30 días",
    ];
  };

  const getFaqs = (): { q: string; a: string }[] => {
    if (customConfig?.faqs && Array.isArray(customConfig.faqs)) {
      return customConfig.faqs;
    }
    // default FAQs in Spanish about landing pages
    return [
      {
        q: "¿Qué incluye el precio?",
        a: "Incluye diseño profesional, desarrollo completo, hosting, dominio, SEO y soporte por 30 días.",
      },
      {
        q: "¿Cuánto tardan en entregar?",
        a: "La mayoría de las landings se entregan en 3-5 días hábiles.",
      },
      {
        q: "¿Puedo pedir cambios después?",
        a: "Sí, todas las landings incluyen 30 días de ediciones ilimitadas sin costo.",
      },
      {
        q: "¿Necesito saber de programación?",
        a: "No, nosotros nos encargamos de todo. Solo necesitas decirnos qué querés comunicar.",
      },
      {
        q: "¿Incluye dominio y hosting?",
        a: "Sí, el precio incluye dominio .com y hosting de alto rendimiento por el primer año.",
      },
      {
        q: "¿Qué pasa si no me gusta?",
        a: "Ofrecemos garantía de satisfacción: si no estás conforme, te devolvemos el dinero.",
      },
    ];
  };

  const getContactEmail = (): string => {
    return customConfig?.contact?.email || "emilio@ranuk.dev";
  };

  const getContactPhone = (): string | undefined => {
    return customConfig?.contact?.phone;
  };

  const getContactWhatsApp = (): string => {
    return customConfig?.contact?.whatsApp || "+393445721753";
  };

  return (
    <ThemeCtx.Provider
      value={{
        nicho,
        colors,
        businessName,
        tagline,
        customConfig,
        getFeatures,
        getPricingExtras,
        getFaqs,
        getContactEmail,
        getContactPhone,
        getContactWhatsApp,
      }}
    >
      {children}
    </ThemeCtx.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
