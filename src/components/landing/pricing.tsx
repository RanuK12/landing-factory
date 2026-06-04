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
  const { nicho } = useTheme();

  return (
    <section id="precios" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Precio único, sin vueltas
          </h2>
          <p className="mt-4 text-lg text-white/40">
            Pagás una vez y la landing es tuya para siempre.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-md">
          <Card className="relative overflow-hidden border-2 border-cyan-500/30 bg-white/[0.03]">
            <div className="absolute top-0 h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-500" />
            <CardContent className="p-8">
              <Badge className="mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                Más elegido
              </Badge>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">${nicho.price}</span>
                <span className="text-sm text-white/40">/ único</span>
              </div>
              <p className="mt-2 text-sm text-white/50">
                Landing completa para {nicho.name.toLowerCase()}
              </p>

              <Button
                className="mt-6 w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500"
                size="lg"
              >
                Comprar ahora
              </Button>

              <div className="mt-8 space-y-3">
                {extras.map((extra, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-cyan-400" />
                    <span className="text-sm text-white/50">{extra}</span>
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
