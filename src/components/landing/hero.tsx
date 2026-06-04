"use client";

import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const { businessName, tagline, colors, nicho } = useTheme();

  return (
    <section className="relative overflow-hidden pb-20 pt-24 sm:pt-32">
      {/* Background decoration */}
      <div
        className="absolute -top-40 right-0 h-96 w-96 rounded-full opacity-[0.07] blur-[128px]"
        style={{ backgroundColor: colors.primary }}
      />
      <div
        className="absolute -bottom-40 left-0 h-80 w-80 rounded-full opacity-[0.05] blur-[100px]"
        style={{ backgroundColor: colors.accent }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
            style={{ borderColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}
          >
            <Sparkles className="h-4 w-4" />
            Professional landing in 24h
          </div>

          <h1
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            {tagline}
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/50">
            {businessName} — {nicho.description}. Designed to convert visitors into customers.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Button
              size="lg"
              style={{ backgroundColor: colors.primary, color: "white" }}
              className="hover:opacity-90"
            >
              Get My Landing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/10 bg-white/[0.03] text-white/70 hover:border-white/20 hover:bg-white/[0.06]"
            >
              See Examples
            </Button>
          </div>

          <p className="mt-4 text-sm text-white/30">
            ⚡ Real Code · Hosting Included · No Monthly Fees
          </p>
        </div>
      </div>
    </section>
  );
}
