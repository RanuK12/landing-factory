import Link from "next/link";
/* Using regular img tags for GitHub Pages basePath compatibility */
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
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white selection:bg-cyan-500/30">
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
              <span className="text-sm font-bold tracking-tight text-white">
                Landing Factory
              </span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-white/30">
                by Ranuk IT
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#nichos"
              className="text-sm font-medium text-white/50 transition-colors hover:text-white"
            >
              Nichos
            </a>
            <a
              href="#como-funciona"
              className="text-sm font-medium text-white/50 transition-colors hover:text-white"
            >
              Cómo funciona
            </a>
            <a
              href="#por-que-ranuk"
              className="text-sm font-medium text-white/50 transition-colors hover:text-white"
            >
              Por qué Ranuk
            </a>
            <a
              href="#nichos"
              className="inline-flex h-7 items-center gap-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-3 text-xs font-medium text-white transition-all hover:from-cyan-400 hover:to-blue-500"
            >
              Crear mi landing
              <ArrowRight className="h-3 w-3" />
            </a>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pb-20 pt-24 sm:pt-32">
        {/* Gradient orbs */}
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[128px]" />
        <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-blue-600/[0.05] blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Badge
            variant="outline"
            className="mb-8 border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-xs font-medium text-cyan-400"
          >
            <Sparkles className="mr-1.5 h-3 w-3" />
            Landing profesional en 24 horas
          </Badge>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Tu negocio merece una{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              landing que convierta
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/50 sm:text-xl">
            Elegí tu nicho, completá un formulario y recibí tu landing profesional
            con código real. Sin mensualidades, sin plataformas lentas.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#nichos"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 text-sm font-medium text-white transition-all hover:from-cyan-400 hover:to-blue-500"
            >
              Elegí tu nicho
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-6 text-sm font-medium text-white/70 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              Cómo funciona
            </a>
          </div>

          {/* Trust bar */}
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-8 border-t border-white/[0.06] pt-10">
            {[
              { icon: Zap, label: "24h", sub: "de entrega" },
              { icon: Code2, label: "Código real", sub: "Next.js + Tailwind" },
              { icon: Globe, label: "Hosting", sub: "1 año incluido" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1">
                <item.icon className="mb-1 h-5 w-5 text-cyan-400/70" />
                <span className="text-sm font-semibold text-white">{item.label}</span>
                <span className="text-xs text-white/40">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social proof ── */}
      <section className="border-y border-white/[0.04] bg-white/[0.01] py-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-white/20">
            Empresas y profesionales que ya confían en Ranuk IT
          </p>
        </div>
      </section>

      {/* ── Nichos ── */}
      <section id="nichos" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge
              variant="outline"
              className="mb-4 border-white/10 bg-white/[0.03] text-xs text-white/50"
            >
              Templates especializados
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Elegí tu nicho
            </h2>
            <p className="mt-4 text-lg text-white/40">
              Cada template está diseñado para convertir visitantes en clientes.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {nichos.map((nicho) => (
              <Link key={nicho.id} href={`/landing/${nicho.id}`}>
                <Card className="group relative h-full cursor-pointer overflow-hidden border-white/[0.06] bg-white/[0.02] transition-all duration-300 hover:border-cyan-500/20 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-cyan-500/[0.03]">
                  <CardContent className="p-6">
                    <div className="mb-4 text-3xl">{nicho.icon}</div>
                    <h3 className="text-lg font-semibold text-white">{nicho.name}</h3>
                    <p className="mt-2 text-sm text-white/40">{nicho.description}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-lg font-bold text-cyan-400">${nicho.price}</span>
                      <span className="flex items-center gap-1 text-sm font-medium text-white/30 transition-colors group-hover:text-cyan-400">
                        Ver más
                        <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo funciona ── */}
      <section id="como-funciona" className="border-y border-white/[0.04] bg-white/[0.01] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge
              variant="outline"
              className="mb-4 border-white/10 bg-white/[0.03] text-xs text-white/50"
            >
              Proceso simple
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Cómo funciona
            </h2>
            <p className="mt-4 text-lg text-white/40">
              3 pasos simples. De la idea a tu landing en menos de 24h.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Elegí tu nicho",
                desc: "Seleccioná el template que mejor se adapte a tu negocio.",
                icon: Shield,
              },
              {
                step: "02",
                title: "Completá tus datos",
                desc: "Llenás un formulario con tu info, colores y contenido.",
                icon: Clock,
              },
              {
                step: "03",
                title: "Recibí tu landing",
                desc: "En 24h tenés tu sitio funcionando con tu dominio.",
                icon: TrendingUp,
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.03]">
                  <item.icon className="h-6 w-6 text-cyan-400/70" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400/50">
                  Paso {item.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/40">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Por qué Ranuk IT ── */}
      <section id="por-que-ranuk" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge
              variant="outline"
              className="mb-4 border-white/10 bg-white/[0.03] text-xs text-white/50"
            >
              Ranuk IT Solutions
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              ¿Por qué Ranuk IT?
            </h2>
            <p className="mt-4 text-lg text-white/40">
              No somos una plataforma más. Somos un equipo de ingenieros que
              construye landings que realmente convierten.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Código real, no plantillas",
                desc: "Tu landing se construye con Next.js y Tailwind CSS. Rápida, responsive y escalable.",
                icon: Code2,
              },
              {
                title: "Diseño a medida",
                desc: "No usamos themes genéricos. Cada landing está diseñada para tu marca y tu audiencia.",
                icon: Sparkles,
              },
              {
                title: "SEO profesional incluido",
                desc: "Meta tags, Open Graph, structured data, sitemap. Listo para Google desde el día uno.",
                icon: TrendingUp,
              },
              {
                title: "Hosting rápido y gratis",
                desc: "1 año de hosting en Vercel (CDN global) sin costo. Después te lo dejamos por $0.",
                icon: Globe,
              },
              {
                title: "Soporte humano",
                desc: "15 días de ediciones ilimitadas. Después, soporte continuo. No te dejamos a la deriva.",
                icon: Shield,
              },
              {
                title: "Entrega en 24h",
                desc: "De la idea a la landing online en menos de 24 horas. Sin demoras, sin excusas.",
                icon: Clock,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-white/[0.12] hover:bg-white/[0.04]"
              >
                <item.icon className="mb-3 h-5 w-5 text-cyan-400/70" />
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/40">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="border-y border-white/[0.04] bg-gradient-to-b from-cyan-500/[0.03] to-transparent py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Listo para tener tu landing?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/40">
            Elegí tu nicho y empezá hoy. Tu presencia online profesional está a un
            clic de distancia.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#nichos"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 text-sm font-medium text-white transition-all hover:from-cyan-400 hover:to-blue-500"
            >
              Elegí tu nicho ahora
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:emilio@ranuk.dev"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-6 text-sm font-medium text-white/70 transition-all hover:border-white/20 hover:bg-white/[0.06]"
            >
              <Mail className="h-4 w-4" />
              Contactanos
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#06060a] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-4">
            <div className="sm:col-span-2">
              <div className="flex items-center gap-3">
                <img
                  src="/landing-factory/ranuk-icon.png"
                  alt="Ranuk IT"
                  width={28}
                  height={28}
                  className="rounded-lg"
                />
                <div>
                  <span className="text-sm font-bold text-white">Landing Factory</span>
                  <span className="block text-[10px] uppercase tracking-widest text-white/30">
                    by Ranuk IT Solutions
                  </span>
                </div>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/30">
                Landings profesionales con código real. Next.js, Tailwind CSS,
                hosting incluido. Sin mensualidades, sin plataformas limitantes.
              </p>
              <a
                href="https://ranuk.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs text-white/20 transition-colors hover:text-cyan-400"
              >
                ranuk.dev
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-white/20">
                Producto
              </h4>
              <ul className="space-y-2 text-sm text-white/40">
                <li><a href="#nichos" className="transition-colors hover:text-white">Nichos</a></li>
                <li><a href="#como-funciona" className="transition-colors hover:text-white">Cómo funciona</a></li>
                <li><a href="#por-que-ranuk" className="transition-colors hover:text-white">Por qué Ranuk</a></li>
                <li><a href="mailto:emilio@ranuk.dev" className="transition-colors hover:text-white">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-white/20">
                Legal
              </h4>
              <ul className="space-y-2 text-sm text-white/40">
                <li><a href="#" className="transition-colors hover:text-white">Términos</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Privacidad</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.04] pt-8 sm:flex-row">
            <p className="text-xs text-white/20">
              © {new Date().getFullYear()} Ranuk IT Solutions. Todos los derechos reservados.
            </p>
            <p className="text-xs text-white/15">
              Hecho con ☕ por Emilio Ranucoli
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
