import Link from "next/link";
import { nichos } from "@/data/nichos";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap, Code2, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-sm font-bold text-white">
              L
            </div>
            <span className="text-lg font-semibold">LandingFactory</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="#nichos" className="text-sm font-medium text-zinc-600 hover:text-zinc-900">
              Nichos
            </Link>
            <Link href="#como-funciona" className="text-sm font-medium text-zinc-600 hover:text-zinc-900">
              Cómo funciona
            </Link>
            <Button size="sm" className="bg-zinc-900 text-white hover:bg-zinc-800">
              Crear mi landing
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-zinc-100 opacity-50 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-zinc-100 opacity-50 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium text-zinc-600">
            <Sparkles className="h-4 w-4" />
            Landing profesional en 24h
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Tu landing page en{" "}
            <span className="underline decoration-zinc-300 underline-offset-8">minutos</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Elegí tu nicho, completá un formulario y recibí tu landing profesional con código real
            (Next.js + Tailwind). Sin mensualidades, sin plataformas lentas.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg" className="bg-zinc-900 text-white hover:bg-zinc-800">
              Ver nichos disponibles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              { icon: Zap, title: "Rápido", desc: "24h de entrega" },
              { icon: Code2, title: "Código real", desc: "Next.js + Tailwind" },
              { icon: Globe, title: "Hosting incluido", desc: "1 año gratis" },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-2 rounded-xl border p-6">
                <item.icon className="h-6 w-6 text-zinc-900" />
                <span className="font-semibold">{item.title}</span>
                <span className="text-sm text-zinc-500">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nichos */}
      <section id="nichos" className="py-24 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Elegí tu nicho</h2>
            <p className="mt-4 text-lg text-zinc-600">
              Cada nicho tiene su template diseñado específicamente para convertir.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {nichos.map((nicho) => (
              <Link key={nicho.id} href={`/landing/${nicho.id}`}>
                <Card className="group h-full cursor-pointer border-2 border-transparent transition-all hover:border-zinc-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 text-3xl">{nicho.icon}</div>
                    <h3 className="text-xl font-semibold">{nicho.name}</h3>
                    <p className="mt-2 text-sm text-zinc-600">{nicho.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <Badge variant="secondary" className="text-sm">
                        Desde ${nicho.price}
                      </Badge>
                      <span className="text-sm font-medium text-zinc-900 opacity-0 transition-opacity group-hover:opacity-100">
                        Ver más →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Cómo funciona</h2>
            <p className="mt-4 text-lg text-zinc-600">
              3 simples pasos y tenés tu landing funcionando.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              { step: "1", title: "Elegí tu nicho", desc: "Seleccioná el template que mejor se adapte a tu negocio." },
              { step: "2", title: "Completá tus datos", desc: "Llenás un formulario con tu info, colores y contenido." },
              { step: "3", title: "Recibí tu landing", desc: "En 24h tenés tu sitio funcionando con tu dominio." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-zinc-900 py-12 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} LandingFactory. Creado por Emilio Ranucoli.
          </p>
        </div>
      </footer>
    </div>
  );
}
