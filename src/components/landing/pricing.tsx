"use client";

import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const extras = [
  "SEO avanzado + Google Analytics",
  "Blog integrado",
  "Formulario multi-paso",
  "Integración con redes sociales",
  "Hosting 1 año incluido",
  "Dominio .com gratis",
  "Soporte 30 días",
  "Ediciones ilimitadas por 15 días",
];

export function Pricing() {
  const { colors, nicho } = useTheme();

  return (
    <section id="precios" className="py-24" style={{ backgroundColor: colors.background }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight" style={{ color: colors.foreground }}>
            Precio único, sin vueltas
          </h2>
          <p className="mt-4 text-lg" style={{ color: colors.foreground, opacity: 0.7 }}>
            Pagás una vez y la landing es tuya para siempre.
          </p>
        </div>

        <div className="mt-16 mx-auto max-w-md">
          <Card
            className="relative overflow-hidden border-2"
            style={{ borderColor: colors.primary }}
          >
            <div
              className="absolute top-0 h-1 w-full"
              style={{ backgroundColor: colors.primary }}
            />
            <CardContent className="p-8">
              <Badge
                className="mb-4"
                style={{
                  backgroundColor: colors.primary,
                  color: "white",
                  opacity: 0.9,
                }}
              >
                Más elegido
              </Badge>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold" style={{ color: colors.foreground }}>
                  ${nicho.price}
                </span>
                <span className="text-sm" style={{ color: colors.foreground, opacity: 0.5 }}>
                  / único
                </span>
              </div>
              <p className="mt-2 text-sm" style={{ color: colors.foreground, opacity: 0.6 }}>
                Landing completa para {nicho.name.toLowerCase()}
              </p>

              <Button
                className="mt-6 w-full"
                size="lg"
                style={{ backgroundColor: colors.primary, color: "white" }}
              >
                Comprar ahora
              </Button>

              <div className="mt-8 space-y-3">
                {extras.map((extra, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0" style={{ color: colors.primary }} />
                    <span className="text-sm" style={{ color: colors.foreground, opacity: 0.7 }}>
                      {extra}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
