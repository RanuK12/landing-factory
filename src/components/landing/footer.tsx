"use client";

/* img tags used instead of next/image for GitHub Pages basePath */
import { useTheme } from "./theme-provider";
import { ExternalLink } from "lucide-react";

export function Footer() {
  const { businessName } = useTheme();

  return (
    <footer className="bg-[#0a0a0f]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
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
                <span className="text-sm font-bold text-white">{businessName}</span>
                <span className="block text-[9px] uppercase tracking-widest text-white/30">
                  by Ranuk IT Solutions
                </span>
              </div>
            </div>
            <p className="mt-3 text-sm text-white/40">
              Landings profesionales. Código real. Sin mensualidades.
            </p>
            <a
              href="https://ranuk.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-xs text-white/20 transition-colors hover:text-cyan-400"
            >
              ranuk.dev
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/20">
              Producto
            </h4>
            <ul className="space-y-2 text-sm text-white/40">
              <li><a href="#servicios" className="transition-colors hover:text-white">Servicios</a></li>
              <li><a href="#precios" className="transition-colors hover:text-white">Precios</a></li>
              <li><a href="#faq" className="transition-colors hover:text-white">FAQ</a></li>
              <li><a href="#contacto" className="transition-colors hover:text-white">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/20">
              Empresa
            </h4>
            <ul className="space-y-2 text-sm text-white/40">
              <li><a href="mailto:emilio@ranuk.dev" className="transition-colors hover:text-white">Contacto</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Términos</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Privacidad</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/[0.04] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/20">
              © {new Date().getFullYear()} Ranuk IT Solutions. Todos los derechos reservados.
            </p>
            <p className="text-xs text-white/15">
              Hecho con ☕ por Emilio Ranucoli
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
