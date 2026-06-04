"use client";

import { useLang } from "./language-provider";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { translations, langLabels, langFlags, type Lang } from "@/lib/translations";

export function LanguageToggle() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const langs: Lang[] = ["en", "es", "it"];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs font-medium text-white/60 transition-all hover:border-white/20 hover:bg-white/[0.08] hover:text-white/80"
        aria-label="Change language"
      >
        <Globe className="h-3.5 w-3.5" />
        <span>{langFlags[lang]}</span>
        <span className="hidden sm:inline">{langLabels[lang]}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-1.5 w-40 overflow-hidden rounded-xl border border-white/10 bg-[#111118] shadow-2xl shadow-black/40">
          {langs.map((l) => (
            <button
              key={l}
              onClick={() => {
                setLang(l);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-sm transition-colors ${
                lang === l
                  ? "bg-emerald-500/15 text-emerald-400 font-medium"
                  : "text-white/50 hover:bg-white/[0.06] hover:text-white/80"
              }`}
            >
              <span className="text-base">{langFlags[l]}</span>
              <span>{langLabels[l]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
