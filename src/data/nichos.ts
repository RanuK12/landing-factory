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

export const nichos: Nicho[] = [
  {
    id: "restaurant",
    name: "Restaurantes",
    description: "Landing con menú, galería, reservas y ubicación",
    price: 97,
    icon: "🍕",
    features: [
      "Menú digital interactivo",
      "Galería de platos",
      "Sistema de reservas",
      "Google Maps integrado",
      "Horarios y contacto",
      "SEO local optimizado",
    ],
    colorScheme: "restaurant",
  },
  {
    id: "professional",
    name: "Profesionales",
    description: "Landing para médicos, abogados, contadores y más",
    price: 147,
    icon: "👨‍⚕️",
    features: [
      "Perfil profesional",
      "Servicios detallados",
      "Booking de turnos",
      "Testimonios",
      "Blog integrado",
      "SEO profesional",
    ],
    colorScheme: "professional",
  },
  {
    id: "startup",
    name: "Startups / SaaS",
    description: "Landing moderna con waitlist, features y pricing",
    price: 197,
    icon: "🚀",
    features: [
      "Waitlist con captura de emails",
      "Sección de features",
      "Tabla de precios",
      "Demo / Video integrado",
      "Analytics listo",
      "Modo oscuro incluido",
    ],
    colorScheme: "startup",
  },
  {
    id: "creative",
    name: "Creativos / Portfolio",
    description: "Landing galería con portfolio y bio",
    price: 97,
    icon: "🎨",
    features: [
      "Galería de proyectos",
      "Bio y experiencia",
      "Formulario de contacto",
      "Redes sociales integradas",
      "CV descargable",
      "Animaciones sutiles",
    ],
    colorScheme: "creative",
  },
  {
    id: "ecommerce",
    name: "E-commerce chico",
    description: "Landing tienda con productos y contacto",
    price: 147,
    icon: "🛒",
    features: [
      "Catálogo de productos",
      "Carrito simple",
      "WhatsApp integrado",
      "Métodos de pago",
      "Políticas de envío",
      "SEO productos",
    ],
    colorScheme: "ecommerce",
  },
  {
    id: "realestate",
    name: "Inmobiliarias",
    description: "Landing con propiedades, tours y contacto",
    price: 197,
    icon: "🏢",
    features: [
      "Galería de propiedades",
      "Filtros de búsqueda",
      "Tour virtual integrado",
      "Contacto por propiedad",
      "Mapa interactivo",
      "Calculadora de hipoteca",
    ],
    colorScheme: "realestate",
  },
];
