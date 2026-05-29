"use client";

import { useTheme } from "./theme-provider";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const { colors, businessName } = useTheme();

  return (
    <footer style={{ backgroundColor: colors.foreground, opacity: 0.95 }}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold"
                style={{ backgroundColor: colors.primary, color: "white" }}
              >
                {businessName.charAt(0)}
              </div>
              <span className="text-lg font-semibold text-white">
                {businessName}
              </span>
            </div>
            <p className="mt-3 text-sm text-white/60">
              Landings profesionales. Código real. Sin mensualidades.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Producto</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-white">Servicios</a></li>
              <li><a href="#" className="hover:text-white">Precios</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Ejemplos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Empresa</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-white">Contacto</a></li>
              <li><a href="#" className="hover:text-white">Términos</a></li>
              <li><a href="#" className="hover:text-white">Privacidad</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <p className="text-center text-sm text-white/40">
          © {new Date().getFullYear()} {businessName}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
