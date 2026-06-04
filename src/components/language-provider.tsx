"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { translations, langLabels, langFlags, type Lang } from "@/lib/translations";

type LanguageContext = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof translations.en) => string;
  langLabel: string;
  langFlag: string;
};

const LangCtx = createContext<LanguageContext | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const t = useCallback(
    (key: keyof typeof translations.en): string => {
      return translations[lang]?.[key] ?? translations.en[key] ?? key;
    },
    [lang]
  );

  return (
    <LangCtx.Provider
      value={{
        lang,
        setLang,
        t,
        langLabel: langLabels[lang],
        langFlag: langFlags[lang],
      }}
    >
      {children}
    </LangCtx.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
