import { Navbar, Hero, Features, Pricing, Testimonials, CTA, Footer } from "@/components/landing";

/* ─── Navigation ─── */
const navLinks = [
  { label: "What We Check", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Results", href: "#testimonials" },
  { label: "Contact", href: "#cta" },
];

/* ─── 17-point ADA/WCAG audit checklist ─── */
const features = [
  {
    icon: "🔍",
    title: "Full WCAG 2.1 Scan",
    description:
      "Automated + manual testing against every WCAG 2.1 Level AA success criterion — no shortcuts, no blind spots.",
  },
  {
    icon: "⌨️",
    title: "Keyboard Navigation",
    description:
      "We test every interactive element: tabs, modals, dropdowns, carousels. If it can't be reached by keyboard, we flag it.",
  },
  {
    icon: "🖥️",
    title: "Screen Reader Compat",
    description:
      "Tested with NVDA, VoiceOver, and JAWS. ARIA labels, roles, and live regions verified end-to-end.",
  },
  {
    icon: "🎨",
    title: "Color & Contrast",
    description:
      "4.5:1 text contrast ratios checked across every state — default, hover, focus, disabled. WCAG AA compliance guaranteed.",
  },
  {
    icon: "📝",
    title: "Form Accessibility",
    description:
      "Labels, error messages, fieldset/legend grouping, and autocomplete attributes audited for assistive technology.",
  },
  {
    icon: "🖼️",
    title: "Image Alt Text Audit",
    description:
      "Every image tag checked for meaningful alt attributes. Decorative images verified to be properly hidden from screen readers.",
  },
  {
    icon: "🎬",
    title: "Media & Captions",
    description:
      "Video captions, audio transcripts, and media controls tested for WCAG 1.2 compliance.",
  },
  {
    icon: "📐",
    title: "Content Reflow",
    description:
      "Text zoom to 200%, responsive layouts verified. No horizontal scrolling at 320px viewport width.",
  },
  {
    icon: "⚡",
    title: "Focus Indicators",
    description:
      "Visible focus rings on every interactive element. Custom focus styles verified against 3:1 contrast minimum.",
  },
  {
    icon: "📄",
    title: "Semantic HTML",
    description:
      "Landmarks, headings hierarchy, lists, tables, and skip-navigation links checked for proper document structure.",
  },
  {
    icon: "📱",
    title: "Mobile Accessibility",
    description:
      "Touch targets 44×44px minimum, pinch-zoom enabled, orientation tested. Mobile WCAG compliance is non-negotiable.",
  },
  {
    icon: "⏰",
    title: "Timing & Motion",
    description:
      "Auto-playing content, session timeouts, and CSS animations audited for pause/disable/extend controls.",
  },
  {
    icon: "🌐",
    title: "Language & Readability",
    description:
      "Page language declared, language changes marked up, and reading level assessed for plain language compliance.",
  },
  {
    icon: "📊",
    title: "Tables & Data",
    description:
      "Data tables verified for proper headers, scope attributes, and caption/summary elements for screen reader context.",
  },
  {
    icon: "🧭",
    title: "Navigation & Wayfinding",
    description:
      "Breadcrumbs, page titles, link purpose, and consistent navigation patterns validated across your entire site.",
  },
  {
    icon: "🐛",
    title: "Error Identification",
    description:
      "Form validation errors: suggestions provided, error messages linked via aria-describedby, and role='alert' tested.",
  },
  {
    icon: "📋",
    title: "Remediation Roadmap",
    description:
      "Prioritized fix list with WCAG criterion references, code snippets, and estimated effort. You know exactly what to fix first.",
  },
];

/* ─── Pricing: free audit + flat fix ─── */
const plans = [
  {
    name: "Free Audit",
    price: "$0",
    features: [
      "Automated WCAG 2.1 AA scan",
      "Top 10 issues identified",
      "Compliance risk score",
      "Email report in 48 hours",
      "No commitment required",
    ],
    ctaText: "Get Free Audit",
  },
  {
    name: "Full Audit + Fix",
    price: "$1,200",
    features: [
      "17-point manual audit",
      "Full remediation of all issues",
      "Screen reader testing (NVDA, VoiceOver, JAWS)",
      "Keyboard navigation fixes",
      "ARIA & semantic HTML overhaul",
      "Follow-up verification scan",
      "100% WCAG 2.1 AA compliance",
      "Satisfaction guarantee — we fix until compliant",
    ],
    highlighted: true,
    ctaText: "Start Now",
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Multi-site / multi-property audits",
      "Ongoing compliance monitoring",
      "Monthly re-scans & reports",
      "Priority remediation SLA",
      "Legal defensibility documentation",
      "Dedicated accessibility engineer",
    ],
    ctaText: "Contact Us",
  },
];

/* ─── Testimonials ─── */
const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "E-Commerce Director, ShopRight Inc.",
    avatar: "SM",
    quote:
      "We were 3 weeks from an ADA lawsuit. Ranuk IT found 94 issues in 48 hours and fixed everything in a week. Saved us six figures in legal fees.",
  },
  {
    name: "David Chen",
    role: "CTO, HealthBridge",
    avatar: "DC",
    quote:
      "Their audit was brutally thorough. Screen reader testing, keyboard traps, contrast — they caught things our internal team completely missed.",
  },
  {
    name: "Jennifer Okafor",
    role: "Marketing Lead, BrightPath Agency",
    avatar: "JO",
    quote:
      "We now include a Ranuk IT accessibility audit in every client launch. It's become our competitive advantage and our clients love the peace of mind.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar
        logo="Ranuk IT"
        links={navLinks}
        ctaButton={{ text: "Free Audit", href: "#cta" }}
      />

      <Hero
        title="Avoid ADA Lawsuits. Get Your Site Compliant."
        subtitle="A single ADA lawsuit costs $50k–$150k on average. Our comprehensive WCAG 2.1 audit finds every compliance gap — and we fix them all for a flat $1,200."
        ctaText="Get Your Free Audit"
        ctaLink="#cta"
        badgeText="🔒 Trusted by 100+ US businesses"
      />

      <Features
        heading="17-Point Accessibility Audit"
        subheading="We don't just run an automated scanner. We manually test your entire site against WCAG 2.1 Level AA — every criterion, every page, every interaction."
        features={features}
      />

      <Pricing
        heading="Simple, Transparent Pricing"
        subheading="Start with a free audit. If you need fixes, one flat price — no surprises."
        plans={plans}
      />

      <Testimonials
        heading="Results That Speak for Themselves"
        subheading="Businesses that chose compliance over risk"
        testimonials={testimonials}
      />

      <CTA />

      <Footer
        companyName="Ranuk IT Solutions"
        links={[
          { label: "ranuk.dev", href: "https://ranuk.dev" },
          { label: "Email Us", href: "mailto:emilio@ranuk.dev" },
          { label: "LinkedIn", href: "https://linkedin.com/in/emilio-ranucoli" },
        ]}
        social={[
          { icon: "in", href: "https://linkedin.com/in/emilio-ranucoli" },
          { icon: "✉", href: "mailto:emilio@ranuk.dev" },
        ]}
      />
    </div>
  );
}
