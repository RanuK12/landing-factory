"use client";

import Link from "next/link";
import { useTheme } from "./theme-provider";
import { useLang } from "@/components/language-provider";
import { LanguageToggle } from "@/components/language-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const { businessName, colors } = useTheme();
  const { t } = useLang();
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
            <span
              className="text-sm font-bold text-white"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              {businessName}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-emerald-500/50">
              by Ranuk IT Solutions
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {[t("nav_services"), t("nav_pricing"), t("nav_faq"), t("nav_contact")].map(
            (item, i) => (
              <a
                key={i}
                href={`#${["services", "pricing", "faq", "contact"][i]}`}
                className="text-sm font-medium text-white/50 transition-colors hover:text-white"
              >
                {item}
              </a>
            )
          )}
          <LanguageToggle />
          <Button
            size="sm"
            style={{ backgroundColor: colors.primary, color: "white" }}
            className="hover:opacity-90"
          >
            {t("nav_get_started")}
          </Button>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button className="text-white" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t md:hidden" style={{ borderColor: colors.border }}>
          <nav className="flex flex-col gap-2 p-4">
            {[t("nav_services"), t("nav_pricing"), t("nav_faq"), t("nav_contact")].map(
              (item, i) => (
                <a
                  key={i}
                  href={`#${["services", "pricing", "faq", "contact"][i]}`}
                  className="py-2 text-sm font-medium text-white/70"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              )
            )}
            <Button
              size="sm"
              style={{ backgroundColor: colors.primary, color: "white" }}
              className="mt-2 w-full"
            >
              {t("nav_get_started")}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
