"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgorlvoq";

interface LeadCaptureFormProps {
  /** Optional: show as a compact inline variant */
  variant?: "full" | "compact";
}

export default function LeadCaptureForm({ variant = "full" }: LeadCaptureFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", website: "" });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: `New ADA Audit Lead: ${formData.name} (${formData.website})`,
          name: formData.name,
          email: formData.email,
          website: formData.website,
          _template: "table",
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", website: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-lg text-center">
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
            ✅
          </div>
          <h3 className="text-xl font-bold text-green-900">Audit Request Received!</h3>
          <p className="mt-2 text-green-700">
            We&apos;ll send your free WCAG 2.1 compliance report to your email within 48 hours.
          </p>
          <button
            className="mt-4 text-sm font-medium text-green-600 underline hover:text-green-800"
            onClick={() => setStatus("idle")}
          >
            Submit another URL
          </button>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input type="hidden" name="_subject" value="New ADA Audit Lead" />
        <Input
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          value={formData.email}
          onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
          className="flex-1"
        />
        <Input
          type="url"
          name="website"
          placeholder="yourwebsite.com"
          required
          value={formData.website}
          onChange={(e) => setFormData((p) => ({ ...p, website: e.target.value }))}
          className="flex-1"
        />
        <Button type="submit" disabled={status === "sending"} className="whitespace-nowrap">
          {status === "sending" ? "Sending..." : "Get Free Audit"}
        </Button>
      </form>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-lg space-y-5 rounded-2xl bg-white/95 p-8 shadow-2xl backdrop-blur-sm ring-1 ring-white/20"
    >
      <div className="text-center">
        <Badge variant="secondary" className="mb-3 bg-blue-100 text-blue-700">
          🎯 Free WCAG 2.1 Audit
        </Badge>
        <h3 className="text-xl font-bold text-slate-900">
          Get Your Free Accessibility Report
        </h3>
        <p className="mt-1 text-sm text-slate-500">
          No commitment. We send a detailed compliance report within 48 hours.
        </p>
      </div>

      <div className="space-y-3">
        <div>
          <label htmlFor="lead-name" className="sr-only">
            Full Name
          </label>
          <Input
            id="lead-name"
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="lead-email" className="sr-only">
            Email Address
          </label>
          <Input
            id="lead-email"
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="lead-website" className="sr-only">
            Website URL
          </label>
          <Input
            id="lead-website"
            type="url"
            name="website"
            placeholder="https://yourwebsite.com"
            required
            value={formData.website}
            onChange={(e) => setFormData((p) => ({ ...p, website: e.target.value }))}
            className="w-full"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={status === "sending"}
        className="w-full text-base font-semibold"
        size="lg"
      >
        {status === "sending" ? (
          <>Sending...</>
        ) : (
          <>🔍 Get My Free Audit Report</>
        )}
      </Button>

      {status === "error" && (
        <p className="text-center text-sm text-red-500">
          Something went wrong. Please try again or email us at{" "}
          <a href="mailto:emilio@ranuk.dev" className="underline">
            emilio@ranuk.dev
          </a>
        </p>
      )}

      <p className="text-center text-xs text-slate-400">
        🔒 No spam, no credit card. Your data is safe.
      </p>
    </form>
  );
}
