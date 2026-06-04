"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does it take?",
    a: "Between 24 and 48 business hours. You fill out a form with your details and we generate your landing automatically.",
  },
  {
    q: "Can I customize it later?",
    a: "Yes. We give you access to the code (Next.js) or you can request changes. We include 15 days of unlimited edits.",
  },
  {
    q: "Does it include hosting?",
    a: "Yes. We host your landing for 1 year at no additional cost on Vercel. After that, you can keep it with us or take it anywhere.",
  },
  {
    q: "What if I don't like it?",
    a: "We make all the changes you need until it's perfect. No additional cost during the first 15 days.",
  },
  {
    q: "Can I use my own domain?",
    a: "Yes, we include a free .com domain for the first year. If you already have one, we set it up at no cost.",
  },
  {
    q: "Is it optimized for Google?",
    a: "Absolutely. Every landing comes with on-page SEO, meta tags, Open Graph, structured data, and sitemap. We aim for top rankings.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="border-y border-white/[0.04] bg-white/[0.01] py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-white/40">
            Everything you need to know before buying.
          </p>
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
