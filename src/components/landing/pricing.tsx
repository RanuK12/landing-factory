"use client";

import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const extras = [
  "Advanced SEO + Google Analytics",
  "Integrated blog",
  "Multi-step contact form",
  "Social media integration",
  "1 year hosting included",
  "Free .com domain",
  "30 days support",
  "Unlimited edits for 15 days",
];

export function Pricing() {
  const { nicho } = useTheme();

  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Simple pricing, no strings
          </h2>
          <p className="mt-4 text-lg text-white/40">
            Pay once and the landing is yours forever.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-md">
          <Card className="relative overflow-hidden border-2 border-emerald-500/30 bg-white/[0.03]">
            <div className="absolute top-0 h-1 w-full bg-gradient-to-r from-emerald-500 to-teal-500" />
            <CardContent className="p-8">
              <Badge className="mb-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                Most Popular
              </Badge>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">${nicho.price}</span>
                <span className="text-sm text-white/40">/ one-time</span>
              </div>
              <p className="mt-2 text-sm text-white/50">
                Complete landing for {nicho.name.toLowerCase()}
              </p>

              <Button
                className="mt-6 w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-400 hover:to-teal-500"
                size="lg"
              >
                Buy Now
              </Button>

              <div className="mt-8 space-y-3">
                {extras.map((extra, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-emerald-400" />
                    <span className="text-sm text-white/50">{extra}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
