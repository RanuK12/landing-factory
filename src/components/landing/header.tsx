"use client";

import Link from "next/link";
import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const { businessName, colors } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b backdrop-blur-md"
      style={{ borderColor: colors.border, backgroundColor: "rgba(255,255,255,0.9)" }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white"
            style={{ backgroundColor: colors.primary }}
          >
            {businessName.charAt(0)}
          </div>
          <span className="text-lg font-semibold" style={{ color: colors.foreground }}>
            {businessName}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {["Servicios", "Precios", "FAQ", "Contacto"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium transition-colors hover:text-foreground"
              style={{ color: colors.foreground, opacity: 0.7 }}
            >
              {item}
            </Link>
          ))}
          <Button
            size="sm"
            style={{ backgroundColor: colors.primary, color: "white" }}
            className="hover:opacity-90"
          >
            Empezar
          </Button>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t md:hidden" style={{ borderColor: colors.border }}>
          <nav className="flex flex-col gap-2 p-4">
            {["Servicios", "Precios", "FAQ", "Contacto"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="py-2 text-sm font-medium"
                style={{ color: colors.foreground }}
                onClick={() => setOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Button
              size="sm"
              style={{ backgroundColor: colors.primary, color: "white" }}
              className="mt-2 w-full"
            >
              Empezar
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
