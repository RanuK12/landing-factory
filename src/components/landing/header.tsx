"use client";

import Link from "next/link";
/* img tags used instead of next/image for GitHub Pages basePath */
import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const { businessName, colors } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b backdrop-blur-xl"
      style={{ borderColor: colors.border, backgroundColor: "rgba(10,10,15,0.85)" }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <img
            src="/landing-factory/ranuk-icon.png"
            alt="Ranuk IT"
            width={28}
            height={28}
            className="rounded-md"
          />
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold text-white">{businessName}</span>
            <span className="text-[9px] uppercase tracking-widest text-white/30">
              by Ranuk IT
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {["Servicios", "Precios", "FAQ", "Contacto"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/50 transition-colors hover:text-white"
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

        <button className="text-white md:hidden" onClick={() => setOpen(!open)}>
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
                className="py-2 text-sm font-medium text-white/70"
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
