"use client";

import Link from "next/link";
import { nichos } from "@/data/nichos";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LanguageProvider, useLang } from "@/components/language-provider";
import { LanguageToggle } from "@/components/language-toggle";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Code2,
  Globe,
  Shield,
  Clock,
  TrendingUp,
  ChevronRight,
  Mail,
  ExternalLink,
  Check,
  Rocket,
  Layout,
  Search,
} from "lucide-react";

function HomeInner() {
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white selection:bg-emerald-500/30">
      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/landing-factory/ranuk-icon.png"
              alt="Ranuk IT"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <div className="flex flex-col">
              <span
                className="text-sm font-bold tracking-tight text-white"
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
              >
                Landing Factory
              </span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-emerald-500/60">
                by Ranuk IT Solutions
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {[
              [t("nav_services"), "#industries"],
              [t("nav_pricing"), "#pricing"],
              [t("nav_faq"), "#faq"],
              [t("nav_contact"), "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-white/50 transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
            <LanguageToggle />
            <Button
              size="sm"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-400 hover:to-teal-500"
            >
              {t("nav_get_started")}
            </Button>
          </nav>

          {/* Mobile */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageToggle />
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pb-20 pt-24 sm:pt-32">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-emerald-500 opacity-[0.07] blur-[128px]" />
        <div className="absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-teal-400 opacity-[0.05] blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm font-medium text-white/50">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              {t("hero_badge")}
            </div>

            <h1
              className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              {t("hero_title_line1")}{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                {t("hero_title_line2")}
              </span>{" "}
              {t("hero_title_line3")}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/45">
              {t("hero_subtitle")}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-400 hover:to-teal-500 px-8"
              >
                {t("hero_cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/10 bg-white/[0.03] text-white/70 hover:border-white/20 hover:bg-white/[0.06]"
              >
                {t("hero_examples")}
              </Button>
            </div>

            <p className="mt-5 text-sm text-white/25">{t("hero_tagline")}</p>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="border-y border-white/[0.04] bg-white/[0.01] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              {t("how_title")}
            </h2>
            <p className="mt-4 text-lg text-white/40">{t("how_subtitle")}</p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              {
                icon: <Search className="h-5 w-5" />,
                title: t("how_step1_title"),
                desc: t("how_step1_desc"),
                num: "01",
              },
              {
                icon: <Code2 className="h-5 w-5" />,
                title: t("how_step2_title"),
                desc: t("how_step2_desc"),
                num: "02",
              },
              {
                icon: <Rocket className="h-5 w-5" />,
                title: t("how_step3_title"),
                desc: t("how_step3_desc"),
                num: "03",
              },
            ].map((step) => (
              <div key={step.num} className="relative text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                  {step.icon}
                </div>
                <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-emerald-500/40">
                  Step {step.num}
                </span>
                <h3
                  className="text-lg font-bold text-white"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/40">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries / Niches ── */}
      <section id="industries" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              {t("niches_title")}
            </h2>
            <p className="mt-4 text-lg text-white/40">{t("niches_subtitle")}</p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {nichos.map((nicho) => (
              <Link key={nicho.id} href={`/nicho/${nicho.id}`}>
                <Card className="group h-full cursor-pointer border-white/[0.06] bg-white/[0.02] transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-emerald-500/5">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-3xl">{nicho.icon}</span>
                      <Badge
                        variant="secondary"
                        className="bg-emerald-500/10 text-emerald-400 border-0"
                      >
                        {t("niches_from")} ${nicho.price}
                      </Badge>
                    </div>
                    <h3
                      className="text-lg font-bold text-white"
                      style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                    >
                      {nicho.name}
                    </h3>
                    <p className="mt-2 text-sm text-white/40">{nicho.description}</p>
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-emerald-400 opacity-0 transition-opacity group-hover:opacity-100">
                      {t("hero_cta")}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Ranuk IT ── */}
      <section className="border-y border-white/[0.04] bg-white/[0.01] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              {t("why_title")}
            </h2>
            <p className="mt-4 text-lg text-white/40">{t("why_subtitle")}</p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2">
            {[
              {
                icon: <Code2 className="h-5 w-5" />,
                title: t("why_1_title"),
                desc: t("why_1_desc"),
              },
              {
                icon: <Search className="h-5 w-5" />,
                title: t("why_2_title"),
                desc: t("why_2_desc"),
              },
              {
                icon: <Zap className="h-5 w-5" />,
                title: t("why_3_title"),
                desc: t("why_3_desc"),
              },
              {
                icon: <TrendingUp className="h-5 w-5" />,
                title: t("why_4_title"),
                desc: t("why_4_desc"),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-white/[0.12]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  {item.icon}
                </div>
                <div>
                  <h3
                    className="font-bold text-white"
                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/40">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent p-12 text-center sm:p-16">
            <div className="absolute -top-20 right-0 h-64 w-64 rounded-full bg-emerald-500 opacity-[0.08] blur-[100px]" />
            <div className="relative">
              <h2
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
              >
                {t("cta_title")}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/40">{t("cta_subtitle")}</p>
              <Button
                size="lg"
                className="mt-8 bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-400 hover:to-teal-500 px-10"
              >
                {t("cta_button")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.04] bg-[#0a0a0f]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <div className="flex items-center gap-2.5">
                <img
                  src="/landing-factory/ranuk-icon.png"
                  alt="Ranuk IT"
                  width={28}
                  height={28}
                  className="rounded-md"
                />
                <div>
                  <span
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                  >
                    Landing Factory
                  </span>
                  <span className="block text-[9px] uppercase tracking-widest text-emerald-500/50">
                    by Ranuk IT Solutions
                  </span>
                </div>
              </div>
              <p className="mt-3 text-sm text-white/40">{t("footer_tagline")}</p>
              <a
                href="https://ranuk.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs text-white/20 transition-colors hover:text-emerald-400"
              >
                ranuk.dev
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/20">
                {t("footer_product")}
              </h4>
              <ul className="space-y-2 text-sm text-white/40">
                <li>
                  <a href="#industries" className="transition-colors hover:text-white">
                    {t("nav_services")}
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="transition-colors hover:text-white">
                    {t("nav_pricing")}
                  </a>
                </li>
                <li>
                  <a href="#faq" className="transition-colors hover:text-white">
                    {t("nav_faq")}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="transition-colors hover:text-white">
                    {t("nav_contact")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/20">
                {t("footer_company")}
              </h4>
              <ul className="space-y-2 text-sm text-white/40">
                <li>
                  <a href="mailto:emilio@ranuk.dev" className="transition-colors hover:text-white">
                    {t("nav_contact")}
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    {t("footer_terms")}
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    {t("footer_privacy")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-white/[0.04] pt-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-xs text-white/20">
                © {new Date().getFullYear()} Ranuk IT Solutions. All rights reserved.
              </p>
              <p className="text-xs text-white/15">{t("footer_built")}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeInner />
    </LanguageProvider>
  );
}
