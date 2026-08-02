export type Nicho = {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
  features: string[];
  colorScheme: "restaurant" | "professional" | "startup" | "creative" | "ecommerce" | "realestate";
};

export type ColorScheme = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  muted: string;
  border: string;
};

export const colorSchemes: Record<string, ColorScheme> = {
  restaurant: {
    primary: "oklch(0.6 0.15 30)",
    secondary: "oklch(0.7 0.1 80)",
    accent: "oklch(0.8 0.12 50)",
    background: "oklch(0.98 0.02 60)",
    foreground: "oklch(0.2 0.02 30)",
    muted: "oklch(0.9 0.03 60)",
    border: "oklch(0.85 0.04 60)",
  },
  professional: {
    primary: "oklch(0.4 0.05 260)",
    secondary: "oklch(0.6 0.08 250)",
    accent: "oklch(0.7 0.1 220)",
    background: "oklch(0.99 0.01 260)",
    foreground: "oklch(0.15 0.02 260)",
    muted: "oklch(0.92 0.02 260)",
    border: "oklch(0.85 0.03 260)",
  },
  startup: {
    primary: "oklch(0.55 0.2 280)",
    secondary: "oklch(0.7 0.15 250)",
    accent: "oklch(0.8 0.15 200)",
    background: "oklch(0.98 0.02 280)",
    foreground: "oklch(0.15 0.02 280)",
    muted: "oklch(0.9 0.03 280)",
    border: "oklch(0.85 0.04 280)",
  },
  creative: {
    primary: "oklch(0.6 0.2 10)",
    secondary: "oklch(0.7 0.15 350)",
    accent: "oklch(0.75 0.15 30)",
    background: "oklch(0.98 0.02 20)",
    foreground: "oklch(0.15 0.02 20)",
    muted: "oklch(0.9 0.03 20)",
    border: "oklch(0.85 0.04 20)",
  },
  ecommerce: {
    primary: "oklch(0.5 0.15 150)",
    secondary: "oklch(0.65 0.1 170)",
    accent: "oklch(0.75 0.12 130)",
    background: "oklch(0.99 0.01 150)",
    foreground: "oklch(0.15 0.02 150)",
    muted: "oklch(0.92 0.02 150)",
    border: "oklch(0.85 0.03 150)",
  },
  realestate: {
    primary: "oklch(0.5 0.08 80)",
    secondary: "oklch(0.65 0.06 70)",
    accent: "oklch(0.75 0.08 60)",
    background: "oklch(0.99 0.01 80)",
    foreground: "oklch(0.15 0.02 80)",
    muted: "oklch(0.92 0.02 80)",
    border: "oklch(0.85 0.03 80)",
  },
};

export const nichos: Nicho[] = [{
    id: "restaurant",
    name: "Restaurants",
    description: "Landing with menu, gallery, reservations and location",
    price: 97,
    icon: "🍕",
    features: [
      "Interactive digital menu",
      "Food gallery",
      "Reservation system",
      "Google Maps integration",
      "Hours & contact info",
      "Local SEO optimized",
    ],
    colorScheme: "restaurant",
  },
  {
    id: "professional",
    name: "Professionals",
    description: "Landing for doctors, lawyers, accountants and more",
    price: 147,
    icon: "👨‍⚕️",
    features: [
      "Professional profile",
      "Detailed services",
      "Appointment booking",
      "Client testimonials",
      "Integrated blog",
      "Professional SEO",
    ],
    colorScheme: "professional",
  },
  {
    id: "startup",
    name: "Startups / SaaS",
    description: "Modern landing with waitlist, features and pricing",
    price: 197,
    icon: "🚀",
    features: [
      "Waitlist with email capture",
      "Feature showcase",
      "Pricing table",
      "Demo / Video embed",
      "Analytics ready",
      "Dark mode included",
    ],
    colorScheme: "startup",
  },
  {
    id: "creative",
    name: "Creatives / Portfolio",
    description: "Gallery landing with portfolio and bio",
    price: 97,
    icon: "🎨",
    features: [
      "Project gallery",
      "Bio & experience",
      "Contact form",
      "Social media links",
      "Downloadable CV",
      "Subtle animations",
    ],
    colorScheme: "creative",
  },
  {
    id: "ecommerce",
    name: "Small E-commerce",
    description: "Store landing with products and contact",
    price: 147,
    icon: "🛒",
    features: [
      "Product catalog",
      "Simple cart",
      "WhatsApp integration",
      "Payment methods",
      "Shipping policies",
      "Product SEO",
    ],
    colorScheme: "ecommerce",
  },
  {
    id: "realestate",
    name: "Real Estate",
    description: "Landing with properties, tours and contact",
    price: 197,
    icon: "🏢",
    features: [
      "Property gallery",
      "Search filters",
      "Virtual tour embed",
      "Per-property contact",
      "Interactive map",
      "Mortgage calculator",
    ],
    colorScheme: "realestate",
  },

  {
    id: "crypto-bot",
    name: "Crypto Trading Bot",
    description: "Automated copy-trading bot that mirrors profitable traders on your account",
    price: 247,
    icon: "🤖",
    features: [
      "Copy professional traders",
      "Real-time execution",
      "Risk management controls",
      "Multi-exchange support",
      "Performance dashboard",
      "Telegram alerts 24/7",
    ],
    colorScheme: "startup",
  },

  {
    id: "ecopulse-air",
    name: "Air Quality Monitoring",
    description: "Real-time air quality monitoring system with data visualization and alerts",
    price: 347,
    icon: "🌬️",
    features: [
      "Real-time air quality data",
      "Interactive maps and charts",
      "SMS/email alerts",
      "Historical data analysis",
      "API for third-party integration",
      "Mobile responsive dashboard",
    ],
    colorScheme: "professional",
  },

  {
    id: "bot-copy-trading",
    name: "Crypto Trading Bot",
    description: "Automated copy-trading bot that mirrors profitable traders on your account",
    price: 247,
    icon: "🤖",
    features: [
      "Copy professional traders",
      "Real-time execution",
      "Risk management controls",
      "Multi-exchange support",
      "Performance dashboard",
      "Telegram alerts 24/7",
    ],
    colorScheme: "startup",
  }
];
