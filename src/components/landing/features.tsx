"use client";

import { useTheme } from "./theme-provider";
import { useLang } from "@/components/language-provider";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export function Features() {
  const { nicho } = useTheme();
  const { t } = useLang();

  return (
    <section id="services" className="border-y border-white/[0.04] bg-white/[0.01] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            {t("features_title")}
          </h2>
          <p className="mt-4 text-lg text-white/40">
            {t("features_subtitle")}
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {nicho.features.map((feature, i) => (
            <Card
              key={i}
              className="border-white/[0.06] bg-white/[0.02] transition-all hover:border-white/[0.12] hover:bg-white/[0.04]"
            >
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                  <Check className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{feature}</h3>
                  <p className="mt-1 text-sm text-white/40">{t("features_included")}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
