"use client";

import { useState } from "react";
import { useLang } from "@/components/language-provider";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLang();

  const faqs = [
    { q: t("faq_1_q"), a: t("faq_1_a") },
    { q: t("faq_2_q"), a: t("faq_2_a") },
    { q: t("faq_3_q"), a: t("faq_3_a") },
    { q: t("faq_4_q"), a: t("faq_4_a") },
    { q: t("faq_5_q"), a: t("faq_5_a") },
    { q: t("faq_6_q"), a: t("faq_6_a") },
  ];

  return (
    <section id="faq" className="border-y border-white/[0.04] bg-white/[0.01] py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            {t("faq_title")}
          </h2>
          <p className="mt-4 text-lg text-white/40">{t("faq_subtitle")}</p>
        </div>

        <div className="mt-16 space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] transition-all hover:border-white/[0.12]"
            >
              <button
                className="flex w-full items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-medium text-white">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-white/30 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-sm leading-relaxed text-white/40">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
