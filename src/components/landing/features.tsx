"use client";

import { useTheme } from "./theme-provider";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export function Features() {
  const { colors, nicho } = useTheme();

  return (
    <section id="servicios" className="py-24" style={{ backgroundColor: "white" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight" style={{ color: colors.foreground }}>
            Todo lo que necesitás
          </h2>
          <p className="mt-4 text-lg" style={{ color: colors.foreground, opacity: 0.7 }}>
            Tu landing viene con todo incluido. Sin sorpresas, sin add-ons.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {nicho.features.map((feature, i) => (
            <Card
              key={i}
              className="border transition-all hover:shadow-md"
              style={{ borderColor: colors.border }}
            >
              <CardContent className="flex items-start gap-4 p-6">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: colors.primary, opacity: 0.1 }}
                >
                  <Check className="h-4 w-4" style={{ color: colors.primary }} />
                </div>
                <div>
                  <h3
                    className="font-semibold"
                    style={{ color: colors.foreground }}
                  >
                    {feature}
                  </h3>
                  <p className="mt-1 text-sm" style={{ color: colors.foreground, opacity: 0.6 }}>
                    Incluido en tu landing
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
