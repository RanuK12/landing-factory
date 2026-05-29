"use client";

import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const { businessName, tagline, colors, nicho } = useTheme();

  return (
    <section
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ backgroundColor: colors.background }}
    >
      {/* Background decoration */}
      <div
        className="absolute -top-40 right-0 h-96 w-96 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: colors.primary }}
      />
      <div
        className="absolute -bottom-40 left-0 h-80 w-80 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: colors.accent }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
            style={{ borderColor: colors.border, color: colors.foreground, opacity: 0.7 }}>
            <Sparkles className="h-4 w-4" />
            Landing profesional en 24h
          </div>

          <h1
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: colors.foreground }}
          >
            {tagline}
          </h1>

          <p
            className="mt-6 text-lg leading-8"
            style={{ color: colors.foreground, opacity: 0.7 }}
          >
            {businessName} — {nicho.description}. Diseñada para convertir visitantes en clientes.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Button
              size="lg"
              style={{ backgroundColor: colors.primary, color: "white" }}
              className="hover:opacity-90"
            >
              Quiero mi landing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              style={{
                borderColor: colors.border,
                color: colors.foreground,
              }}
            >
              Ver ejemplos
            </Button>
          </div>

          <p
            className="mt-4 text-sm"
            style={{ color: colors.foreground, opacity: 0.5 }}
          >
            ⚡ Código real · Hosting incluido · Sin mensualidades
          </p>
        </div>
      </div>
    </section>
  );
}
