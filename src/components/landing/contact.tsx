"use client";

import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, MessageCircle } from "lucide-react";

export function Contact() {
  const { colors, businessName } = useTheme();

  return (
    <section id="contacto" className="py-24" style={{ backgroundColor: colors.background }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight" style={{ color: colors.foreground }}>
            ¿Listo para tu landing?
          </h2>
          <p className="mt-4 text-lg" style={{ color: colors.foreground, opacity: 0.7 }}>
            Completá el formulario y en 24h tenés tu sitio web profesional.
          </p>
        </div>

        <div className="mt-16 mx-auto max-w-lg">
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input placeholder="Nombre" className="border" style={{ borderColor: colors.border }} />
              <Input placeholder="Teléfono" type="tel" className="border" style={{ borderColor: colors.border }} />
            </div>
            <Input placeholder="Email" type="email" className="border" style={{ borderColor: colors.border }} />
            <Input placeholder="Nombre de tu negocio" className="border" style={{ borderColor: colors.border }} />
            <Textarea
              placeholder="Contame un poco sobre tu proyecto..."
              className="min-h-[120px] border"
              style={{ borderColor: colors.border }}
            />
            <Button
              type="submit"
              className="w-full"
              size="lg"
              style={{ backgroundColor: colors.primary, color: "white" }}
            >
              <Send className="mr-2 h-4 w-4" />
              Enviar y recibir presupuesto
            </Button>
          </form>

          <div className="mt-8 flex items-center justify-center gap-6">
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80"
              style={{ color: colors.primary }}
            >
              <Mail className="h-4 w-4" />
              hola@{businessName.toLowerCase().replace(/\s+/g, "")}.com
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80"
              style={{ color: colors.primary }}
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
