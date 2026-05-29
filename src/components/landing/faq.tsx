"use client";

import { useTheme } from "./theme-provider";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto tarda en estar lista?",
    a: "Entre 24 y 48 horas hábiles. Completás un formulario con tus datos y nosotros generamos la landing automágicamente.",
  },
  {
    q: "¿Puedo personalizarla después?",
    a: "Sí. Te damos acceso al código (Next.js) o podés pedirnos cambios. Incluimos 15 días de ediciones ilimitadas.",
  },
  {
    q: "¿Incluye hosting?",
    a: "Sí. Hosteamos tu landing por 1 año sin costo adicional en Vercel. Después podés mantenerlo con nosotros o llevarlo a donde quieras.",
  },
  {
    q: "¿Qué pasa si no me gusta?",
    a: "Te hacemos los cambios que necesites hasta que quede perfecta. Sin costo adicional durante los primeros 15 días.",
  },
  {
    q: "¿Puedo tener mi propio dominio?",
    a: "Sí, incluimos un dominio .com gratis el primer año. Si ya tenés uno, lo configuramos sin costo.",
  },
  {
    q: "¿Está optimizada para Google?",
    a: "Totalmente. Cada landing viene con SEO on-page, meta tags, Open Graph, structured data y sitemap. Apuntamos a las primeras posiciones.",
  },
];

export function FAQ() {
  const { colors } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24" style={{ backgroundColor: "white" }}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight" style={{ color: colors.foreground }}>
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-lg" style={{ color: colors.foreground, opacity: 0.7 }}>
            Todo lo que necesitás saber antes de comprar.
          </p>
        </div>

        <div className="mt-16 space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border transition-all"
              style={{ borderColor: colors.border }}
            >
              <button
                className="flex w-full items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-medium" style={{ color: colors.foreground }}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  style={{ color: colors.foreground, opacity: 0.5 }}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-sm leading-relaxed" style={{ color: colors.foreground, opacity: 0.7 }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
