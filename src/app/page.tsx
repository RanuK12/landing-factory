import { Navbar, Hero, Features, Pricing, Testimonials, CTA, Footer } from "@/components/landing";

const landingLinks = [
  { label: "Features", href: "#features" },
  { label: "Precios", href: "#pricing" },
  { label: "Testimonios", href: "#testimonials" },
  { label: "Contacto", href: "#contact" },
];

const features = [
  {
    icon: "⚡",
    title: "Rápido como un rayo",
    description: "Optimizado para velocidad. Carga en menos de 1 segundo en cualquier dispositivo.",
  },
  {
    icon: "🎨",
    title: "Diseño moderno",
    description: "Interfaces limpias y profesionales que convierten visitantes en clientes.",
  },
  {
    icon: "🔒",
    title: "Seguro y confiable",
    description: "Protegé tus datos con encriptación de nivel empresarial y uptime del 99.9%.",
  },
  {
    icon: "📱",
    title: "100% responsive",
    description: "Se ve perfecto en cualquier pantalla, desde mobile hasta 4K.",
  },
  {
    icon: "🤖",
    title: "IA integrada",
    description: "Automatizá procesos con inteligencia artificial sin complicaciones.",
  },
  {
    icon: "📊",
    title: "Analytics en vivo",
    description: "Métricas en tiempo real para tomar decisiones basadas en datos.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "$29",
    features: ["1 proyecto", "5GB de almacenamiento", "Soporte por email", "API básica"],
    ctaText: "Empezar gratis",
  },
  {
    name: "Pro",
    price: "$79",
    features: ["10 proyectos", "50GB de almacenamiento", "Soporte prioritario", "API completa", "IA incluida", "Analytics avanzado"],
    highlighted: true,
    ctaText: "Elegir Pro",
  },
  {
    name: "Enterprise",
    price: "$199",
    features: ["Proyectos ilimitados", "1TB de almacenamiento", "Soporte 24/7", "API personalizada", "IA dedicada", "On-premise opcional"],
    ctaText: "Contactar",
  },
];

const testimonials = [
  {
    name: "María García",
    role: "CEO, TechStart",
    avatar: "MG",
    quote: "Transformó nuestra presencia digital. Las conversiones aumentaron un 340% en solo 3 meses.",
  },
  {
    name: "Carlos López",
    role: "CTO, DataFlow",
    avatar: "CL",
    quote: "La mejor plataforma que hemos usado. Simple, potente y con un soporte increíble.",
  },
  {
    name: "Ana Martínez",
    role: "Founder, SaaS Labs",
    avatar: "AM",
    quote: "Pasamos de idea a producción en 2 semanas. El template nos ahorró meses de desarrollo.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar
        logo="Ranukita"
        links={landingLinks}
        ctaButton={{ text: "Comenzar", href: "#cta" }}
      />

      <Hero
        title="Construí tu próximo proyecto en minutos"
        subtitle="Landing pages profesionales, rápidas y optimizadas para conversión. Sin complicaciones, sin código innecesario."
        ctaText="Empezar ahora"
        ctaLink="#cta"
        badgeText="🚀 Nuevo: Landing Factory v1.0"
      />

      <Features features={features} />

      <Pricing plans={plans} />

      <Testimonials testimonials={testimonials} />

      <CTA
        title="¿Listo para transformar tu idea?"
        subtitle="Unite a más de 500 empresas que ya confían en Ranukita para sus landing pages."
        buttonText="Comenzar gratis"
        buttonLink="#"
      />

      <Footer
        companyName="Ranukita"
        links={[
          { label: "Features", href: "#features" },
          { label: "Precios", href: "#pricing" },
          { label: "Testimonios", href: "#testimonials" },
          { label: "Blog", href: "#" },
          { label: "Documentación", href: "#" },
        ]}
        social={[
          { icon: "𝕏", href: "#" },
          { icon: "in", href: "#" },
          { icon: "GH", href: "#" },
        ]}
      />
    </div>
  );
}
