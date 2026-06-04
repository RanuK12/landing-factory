"use client";

import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, MessageCircle } from "lucide-react";

export function Contact() {
  const { businessName } = useTheme();

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Ready for your landing?
          </h2>
          <p className="mt-4 text-lg text-white/40">
            Fill out the form and get your professional website in 24 hours.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-lg">
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                placeholder="Name"
                className="border-white/10 bg-white/[0.03] text-white placeholder:text-white/30"
              />
              <Input
                placeholder="Phone"
                type="tel"
                className="border-white/10 bg-white/[0.03] text-white placeholder:text-white/30"
              />
            </div>
            <Input
              placeholder="Email"
              type="email"
              className="border-white/10 bg-white/[0.03] text-white placeholder:text-white/30"
            />
            <Input
              placeholder="Your business name"
              className="border-white/10 bg-white/[0.03] text-white placeholder:text-white/30"
            />
            <Textarea
              placeholder="Tell us about your project..."
              className="min-h-[120px] border-white/10 bg-white/[0.03] text-white placeholder:text-white/30"
            />
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-400 hover:to-teal-500"
              size="lg"
            >
              <Send className="mr-2 h-4 w-4" />
              Submit & Get a Quote
            </Button>
          </form>

          <div className="mt-8 flex items-center justify-center gap-6">
            <a
              href="mailto:emilio@ranuk.dev"
              className="flex items-center gap-2 text-sm font-medium text-emerald-400/70 transition-colors hover:text-emerald-400"
            >
              <Mail className="h-4 w-4" />
              emilio@ranuk.dev
            </a>
            <a
              href="https://wa.me/393445721753"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-emerald-400/70 transition-colors hover:text-emerald-400"
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
