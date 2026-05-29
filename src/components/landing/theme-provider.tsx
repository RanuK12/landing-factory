"use client";

import { createContext, useContext, ReactNode } from "react";
import type { ColorScheme, Nicho } from "@/data/nichos";

type ThemeContext = {
  nicho: Nicho;
  colors: ColorScheme;
  businessName: string;
  tagline: string;
};

const ThemeCtx = createContext<ThemeContext | null>(null);

export function ThemeProvider({
  children,
  nicho,
  colors,
  businessName,
  tagline,
}: ThemeContext & { children: ReactNode }) {
  return (
    <ThemeCtx.Provider value={{ nicho, colors, businessName, tagline }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
