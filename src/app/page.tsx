import Link from "next/link";
import { nichos } from "@/data/nichos";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

export default function Home() {
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

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#industries"
              className="text-sm font-medium text-white/50 transition-colors hover:text-white"
            >
              Industries
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-white/50 transition-colors hover:text-white"
            >
              How It Works
            </a>
            <a
              href="#why-ranuk"
              className="text-sm font-medium text-white/50 transition-colors hover:text-white"
            >
              Why Ranuk
            </a>
            <a
              href="#industries"
              className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 px-4 text-xs font-semibold text-white transition-all hover:from-emerald-400 hover:to-teal-500"
            >
              Get Your Landing
              <ArrowRight className="h-3 w-3" />
            </a>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pb-20 pt-24 sm:pt-32">
        {/* Gradient orbs */}
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/[0.07] blur-[128px]" />
        <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-teal-600/[0.05] blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Badge
            variant="outline"
            className="mb-8 border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-xs font-medium text-emerald-400"
          >
            <Sparkles className="mr-1.5 h-3 w-3" />
            Professional landing in 24 hours
          </Badge>

          <h1
            className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Your business deserves a{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              landing that converts
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/50 sm:text-xl">
            Pick your industry, fill out a form, and get a professional landing page
            with real code. No monthly fees, no slow platforms.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#industries"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 px-7 text-sm font-semibold text-white transition-all hover:from-emerald-400 hover:to-teal-500"
            >
              Choose Your Industry
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-7 text-sm font-medium text-white/70 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              How It Works
            </a>
          </div>

          {/* Trust bar */}
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/[0.06] pt-10 sm:grid-cols-4">
            {[
              { icon: <Zap className="h-4 w-4 text-emerald-400" />, label: "24h Delivery" },
              { icon: <Code2 className="h-4 w-4 text-emerald-400" />, label: "Real Code" },
              { icon: <Shield className="h-4 w-4 text-emerald-400" />, label: "No Monthly Fees" },
              { icon: <Search className="h-4 w-4 text-emerald-400" />, label: "SEO Optimized" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                {item.icon}
                <span className="text-xs font-medium text-white/40">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section id="industries" className="relative border-t border-white/[0.04] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <Badge
              variant="outline"
              className="mb-4 border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-400"
            >
              Industries
            </Badge>
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Choose your industry
            </h2>
            <p className="mt-4 text-lg text-white/40">
              Pre-built templates designed to convert visitors into customers.
              Pick yours and get started.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {nichos.map((nicho) => (
              <Link key={nicho.id} href={`/landing/${nicho.id}`}>
                <Card className="group relative overflow-hidden border-white/[0.06] bg-white/[0.02] transition-all hover:border-emerald-500/20 hover:bg-white/[0.04]">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-3xl">{nicho.icon}</span>
                      <span className="text-lg font-bold text-emerald-400">
                        ${nicho.price}
                      </span>
                    </div>
                    <h3
                      className="mb-2 text-lg font-bold text-white"
                      style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                    >
                      {nicho.name}
                    </h3>
                    <p className="mb-4 text-sm text-white/40">{nicho.description}</p>
                    <ul className="mb-6 space-y-1.5">
                      {nicho.features.slice(0, 4).map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-xs text-white/50"
                        >
                          <Check className="h-3 w-3 text-emerald-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-1.5 text-sm font-medium text-emerald-400 transition-colors group-hover:text-emerald-300">
                      View details
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="relative border-t border-white/[0.04] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <Badge
              variant="outline"
              className="mb-4 border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-400"
            >
              Process
            </Badge>
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              How it works
            </h2>
            <p className="mt-4 text-lg text-white/40">
              Three simple steps to your professional landing page.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                icon: <Layout className="h-6 w-6 text-emerald-400" />,
                title: "Pick your industry",
                desc: "Choose from our 6 pre-built templates designed for specific industries.",
              },
              {
                step: "02",
                icon: <Mail className="h-6 w-6 text-emerald-400" />,
                title: "Fill out a form",
                desc: "Tell us about your business, colors, content, and what you need.",
              },
              {
                step: "03",
                icon: <Rocket className="h-6 w-6 text-emerald-400" />,
                title: "Get your landing",
                desc: "We build it with real code in 24 hours. You own everything. No lock-in.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
                  {item.icon}
                </div>
                <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-emerald-500/40">
                  Step {item.step}
                </span>
                <h3
                  className="mb-2 text-xl font-bold text-white"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/40">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Ranuk ── */}
      <section id="why-ranuk" className="relative border-t border-white/[0.04] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <Badge
              variant="outline"
              className="mb-4 border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-400"
            >
              Why Us
            </Badge>
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Why Ranuk IT
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Code2 className="h-5 w-5 text-emerald-400" />,
                title: "Real Code",
                desc: "No WordPress, no Wix, no Squarespace. Pure Next.js + Tailwind that you own.",
              },
              {
                icon: <Zap className="h-5 w-5 text-emerald-400" />,
                title: "24h Delivery",
                desc: "Your landing page ready in 24 hours or less. Fast turnaround, no delays.",
              },
              {
                icon: <Shield className="h-5 w-5 text-emerald-400" />,
                title: "No Lock-in",
                desc: "You own the code. Host it anywhere. No monthly fees. No dependencies.",
              },
              {
                icon: <TrendingUp className="h-5 w-5 text-emerald-400" />,
                title: "SEO Optimized",
                desc: "Built-in SEO best practices. Fast loading, semantic HTML, meta tags.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
                  {item.icon}
                </div>
                <h3
                  className="mb-2 text-lg font-bold text-white"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/40">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Banner ── */}
      <section className="relative border-t border-white/[0.04] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-teal-500/10" />
            <div className="relative px-8 py-16 text-center sm:px-16">
              <h2
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
              >
                Ready to grow your business?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/40">
                Get a professional landing page that converts visitors into customers.
                Starting at $97. No monthly fees.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#industries"
                  className="inline-flex h-12 items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 px-8 text-sm font-semibold text-white transition-all hover:from-emerald-400 hover:to-teal-500"
                >
                  Get Started Now
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:emilio@ranuk.dev"
                  className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-8 text-sm font-medium text-white/70 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  Contact Us
                </a>
              </div>
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
              <p className="mt-3 text-sm text-white/40">
                Professional landing pages. Real code. No monthly fees.
              </p>
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
                Product
              </h4>
              <ul className="space-y-2 text-sm text-white/40">
                <li>
                  <a href="#industries" className="transition-colors hover:text-white">
                    Industries
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="transition-colors hover:text-white">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#why-ranuk" className="transition-colors hover:text-white">
                    Why Ranuk
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/20">
                Company
              </h4>
              <ul className="space-y-2 text-sm text-white/40">
                <li>
                  <a
                    href="mailto:emilio@ranuk.dev"
                    className="transition-colors hover:text-white"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Privacy
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
              <p className="text-xs text-white/15">
                Built with ☕ by Emilio Ranucoli
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
