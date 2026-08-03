"use client";

import { useTheme } from "./theme-provider";
import { useLang } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, MessageCircle } from "lucide-react";

export function Contact() {
  const { businessName, getContactEmail, getContactPhone, getContactWhatsApp } = useTheme();
  const { t } = useLang();

  const email = getContactEmail();
  const phone = getContactPhone();
  const whatsApp = getContactWhatsApp();

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            {t("contact_title")}
          </h2>
          <p className="mt-4 text-lg text-white/40">{t("contact_subtitle")}</p>
        </div>

        <div className="mx-auto mt-16 max-w-lg">
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                placeholder={t("contact_name")}
                className="border-white/10 bg-white/[0.03] text-white placeholder:text-white/30"
              />
              <Input
                placeholder={t("contact_phone")}
                type="tel"
                className="border-white/10 bg-white/[0.03] text-white placeholder:text-white/30"
              />
            </div>
            <Input
              placeholder={t("contact_email")}
              type="email"
              className="border-white/10 bg-white/[0.03] text-white placeholder:text-white/30"
            />
            <Input
              placeholder={t("contact_business")}
              className="border-white/10 bg-white/[0.03] text-white placeholder:text-white/30"
            />
            <Textarea
              placeholder={t("contact_message")}
              className="min-h-[120px] border-white/10 bg-white/[0.03] text-white placeholder:text-white/30"
            />
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-400 hover:to-teal-500"
              size="lg"
            >
              <Send className="mr-2 h-4 w-4" />
              {t("contact_submit")}
            </Button>
          </form>

          <div className="mt-8 flex items-center justify-center gap-6">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-sm font-medium text-emerald-400/70 transition-colors hover:text-emerald-400"
            >
              <Mail className="h-4 w-4" />
              {email}
            </a>
            {phone && (
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2 text-sm font-medium text-emerald-400/70 transition-colors hover:text-emerald-400"
              >
                <MessageCircle className="h-4 w-4" />
                {phone}
              </a>
            )}
            <a
              href={`https://wa.me/${whatsApp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-emerald-400/70 transition-colors hover:text-emerald-400"
            >
              <MessageCircle className="h-4 w-4" />
              {t("contact_whatsapp")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
