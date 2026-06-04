export type Lang = "en" | "es" | "it";

export const langLabels: Record<Lang, string> = {
  en: "English",
  es: "Español",
  it: "Italiano",
};

export const langFlags: Record<Lang, string> = {
  en: "🇬🇧",
  es: "🇪🇸",
  it: "🇮🇹",
};

type Translations = {
  // ── Navbar ──
  nav_services: string;
  nav_pricing: string;
  nav_faq: string;
  nav_contact: string;
  nav_get_started: string;

  // ── Hero ──
  hero_badge: string;
  hero_title_line1: string;
  hero_title_line2: string;
  hero_title_line3: string;
  hero_subtitle: string;
  hero_cta: string;
  hero_examples: string;
  hero_tagline: string;

  // ── How It Works ──
  how_title: string;
  how_subtitle: string;
  how_step1_title: string;
  how_step1_desc: string;
  how_step2_title: string;
  how_step2_desc: string;
  how_step3_title: string;
  how_step3_desc: string;

  // ── Why Ranuk ──
  why_title: string;
  why_subtitle: string;
  why_1_title: string;
  why_1_desc: string;
  why_2_title: string;
  why_2_desc: string;
  why_3_title: string;
  why_3_desc: string;
  why_4_title: string;
  why_4_desc: string;

  // ── Niches ──
  niches_title: string;
  niches_subtitle: string;
  niches_from: string;

  // ── Features (landing page) ──
  features_title: string;
  features_subtitle: string;
  features_included: string;

  // ── Pricing ──
  pricing_title: string;
  pricing_subtitle: string;
  pricing_popular: string;
  pricing_onetime: string;
  pricing_complete: string;
  pricing_buy: string;
  pricing_extras_title: string;

  // ── FAQ ──
  faq_title: string;
  faq_subtitle: string;
  faq_1_q: string;
  faq_1_a: string;
  faq_2_q: string;
  faq_2_a: string;
  faq_3_q: string;
  faq_3_a: string;
  faq_4_q: string;
  faq_4_a: string;
  faq_5_q: string;
  faq_5_a: string;
  faq_6_q: string;
  faq_6_a: string;

  // ── Contact ──
  contact_title: string;
  contact_subtitle: string;
  contact_name: string;
  contact_phone: string;
  contact_email: string;
  contact_business: string;
  contact_message: string;
  contact_submit: string;
  contact_whatsapp: string;

  // ── CTA Banner ──
  cta_title: string;
  cta_subtitle: string;
  cta_button: string;

  // ── Footer ──
  footer_tagline: string;
  footer_product: string;
  footer_company: string;
  footer_terms: string;
  footer_privacy: string;
  footer_built: string;

  // ── Extra ──
  extra_seo: string;
  extra_blog: string;
  extra_form: string;
  extra_social: string;
  extra_hosting: string;
  extra_domain: string;
  extra_support: string;
  extra_edits: string;
};

export const translations: Record<Lang, Translations> = {
  en: {
    // Navbar
    nav_services: "Services",
    nav_pricing: "Pricing",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    nav_get_started: "Get Started",

    // Hero
    hero_badge: "Professional landing in 24h",
    hero_title_line1: "We build your",
    hero_title_line2: "landing page",
    hero_title_line3: "that converts",
    hero_subtitle: "High-converting landing pages for any business. Professional design, real code, zero monthly fees.",
    hero_cta: "Get My Landing",
    hero_examples: "See Examples",
    hero_tagline: "⚡ Real Code · Hosting Included · No Monthly Fees",

    // How It Works
    how_title: "How it works",
    how_subtitle: "Three simple steps to your professional landing",
    how_step1_title: "Tell us about you",
    how_step1_desc: "Fill out a quick form with your business info, brand colors, and what you need.",
    how_step2_title: "We build it",
    how_step2_desc: "Our team designs and codes your landing in 24-48 hours. Real code, not templates.",
    how_step3_title: "Launch & grow",
    how_step3_desc: "We deploy it for you. Hosting included for 1 year. 15 days of unlimited edits.",

    // Why Ranuk
    why_title: "Why Ranuk IT",
    why_subtitle: "We're not a template factory. We build real products.",
    why_1_title: "Real Code",
    why_1_desc: "Next.js, React, Tailwind — no WordPress, no Wix. Your landing loads fast and ranks high.",
    why_2_title: "SEO Built-in",
    why_2_desc: "Meta tags, Open Graph, structured data, sitemap. Everything Google needs to find you.",
    why_3_title: "Delivered in 24h",
    why_3_desc: "Fast turnaround. You need your landing NOW, not in 2 weeks.",
    why_4_title: "One-time Price",
    why_4_desc: "Pay once, own forever. No subscriptions, no hidden fees.",

    // Niches
    niches_title: "Landing pages for every business",
    niches_subtitle: "Choose your industry. We already have the perfect template.",
    niches_from: "from",

    // Features
    features_title: "Everything you need",
    features_subtitle: "Your landing comes with everything included. No surprises, no add-ons.",
    features_included: "Included in your landing",

    // Pricing
    pricing_title: "Simple pricing, no strings",
    pricing_subtitle: "Pay once and the landing is yours forever.",
    pricing_popular: "Most Popular",
    pricing_onetime: "/ one-time",
    pricing_complete: "Complete landing for",
    pricing_buy: "Buy Now",
    pricing_extras_title: "Everything included",

    // FAQ
    faq_title: "Frequently asked questions",
    faq_subtitle: "Everything you need to know before buying.",
    faq_1_q: "How long does it take?",
    faq_1_a: "Between 24 and 48 business hours. You fill out a form with your details and we generate your landing automatically.",
    faq_2_q: "Can I customize it later?",
    faq_2_a: "Yes. We give you access to the code (Next.js) or you can request changes. We include 15 days of unlimited edits.",
    faq_3_q: "Does it include hosting?",
    faq_3_a: "Yes. We host your landing for 1 year at no additional cost on Vercel. After that, you can keep it with us or take it anywhere.",
    faq_4_q: "What if I don't like it?",
    faq_4_a: "We make all the changes you need until it's perfect. No additional cost during the first 15 days.",
    faq_5_q: "Can I use my own domain?",
    faq_5_a: "Yes, we include a free .com domain for the first year. If you already have one, we set it up at no cost.",
    faq_6_q: "Is it optimized for Google?",
    faq_6_a: "Absolutely. Every landing comes with on-page SEO, meta tags, Open Graph, structured data, and sitemap. We aim for top rankings.",

    // Contact
    contact_title: "Ready for your landing?",
    contact_subtitle: "Fill out the form and get your professional website in 24 hours.",
    contact_name: "Name",
    contact_phone: "Phone",
    contact_email: "Email",
    contact_business: "Your business name",
    contact_message: "Tell us about your project...",
    contact_submit: "Submit & Get a Quote",
    contact_whatsapp: "WhatsApp",

    // CTA
    cta_title: "Ready to stand out?",
    cta_subtitle: "Get your professional landing page in 24 hours. No templates. Real code.",
    cta_button: "Get Started Now",

    // Footer
    footer_tagline: "Professional landing pages. Real code. No monthly fees.",
    footer_product: "Product",
    footer_company: "Company",
    footer_terms: "Terms",
    footer_privacy: "Privacy",
    footer_built: "Built with ☕ by Emilio Ranucoli",

    // Extras
    extra_seo: "Advanced SEO + Google Analytics",
    extra_blog: "Integrated blog",
    extra_form: "Multi-step contact form",
    extra_social: "Social media integration",
    extra_hosting: "1 year hosting included",
    extra_domain: "Free .com domain",
    extra_support: "30 days support",
    extra_edits: "Unlimited edits for 15 days",
  },

  es: {
    // Navbar
    nav_services: "Servicios",
    nav_pricing: "Precios",
    nav_faq: "Preguntas",
    nav_contact: "Contacto",
    nav_get_started: "Empezar",

    // Hero
    hero_badge: "Landing profesional en 24h",
    hero_title_line1: "Creamos tu",
    hero_title_line2: "landing page",
    hero_title_line3: "que convierte",
    hero_subtitle: "Landing de alta conversión para cualquier negocio. Diseño profesional, código real, cero cuotas mensuales.",
    hero_cta: "Mi Landing",
    hero_examples: "Ver Ejemplos",
    hero_tagline: "⚡ Código Real · Hosting Incluido · Sin Cuotas Mensuales",

    // How It Works
    how_title: "Cómo funciona",
    how_subtitle: "Tres pasos simples para tu landing profesional",
    how_step1_title: "Contanos sobre vos",
    how_step1_desc: "Completá un formulario rápido con la info de tu negocio, colores de marca y lo que necesitás.",
    how_step2_title: "Nosotros la creamos",
    how_step2_desc: "Nuestro equipo diseña y programa tu landing en 24-48 horas. Código real, no plantillas.",
    how_step3_title: "Lanzá y crecé",
    how_step3_desc: "La desplegamos por vos. Hosting incluido 1 año. 15 días de ediciones ilimitadas.",

    // Why Ranuk
    why_title: "Por qué Ranuk IT",
    why_subtitle: "No somos una fábrica de plantillas. Construimos productos reales.",
    why_1_title: "Código Real",
    why_1_desc: "Next.js, React, Tailwind — nada de WordPress, nada de Wix. Tu landing carga rápido y rankea alto.",
    why_2_title: "SEO Integrado",
    why_2_desc: "Meta tags, Open Graph, datos estructurados, sitemap. Todo lo que Google necesita para encontrarte.",
    why_3_title: "Entrega en 24h",
    why_3_desc: "Rápido. Necesitás tu landing AHORA, no en 2 semanas.",
    why_4_title: "Precio Único",
    why_4_desc: "Pagás una vez, es tuya para siempre. Sin suscripciones, sin costos ocultos.",

    // Niches
    niches_title: "Landings para cada negocio",
    niches_subtitle: "Elegí tu industria. Ya tenemos la plantilla perfecta.",
    niches_from: "desde",

    // Features
    features_title: "Todo lo que necesitás",
    features_subtitle: "Tu landing viene con todo incluido. Sin sorpresas, sin extras.",
    features_included: "Incluido en tu landing",

    // Pricing
    pricing_title: "Precios simples, sin letras chiquitas",
    pricing_subtitle: "Pagás una vez y la landing es tuya para siempre.",
    pricing_popular: "Más Popular",
    pricing_onetime: "/ pago único",
    pricing_complete: "Landing completa para",
    pricing_buy: "Comprar Ahora",
    pricing_extras_title: "Todo incluido",

    // FAQ
    faq_title: "Preguntas frecuentes",
    faq_subtitle: "Todo lo que necesitás saber antes de comprar.",
    faq_1_q: "¿Cuánto tarda?",
    faq_1_a: "Entre 24 y 48 horas hábiles. Completás un formulario con tus datos y generamos tu landing automáticamente.",
    faq_2_q: "¿Puedo personalizarla después?",
    faq_2_a: "Sí. Te damos acceso al código (Next.js) o podés pedirnos cambios. Incluimos 15 días de ediciones ilimitadas.",
    faq_3_q: "¿Incluye hosting?",
    faq_3_a: "Sí. Alojamos tu landing 1 año sin costo adicional en Vercel. Después, podés quedártela con nosotros o llevarla a donde quieras.",
    faq_4_q: "¿Qué pasa si no me gusta?",
    faq_4_a: "Hacemos todos los cambios que necesites hasta que quede perfecta. Sin costo adicional durante los primeros 15 días.",
    faq_5_q: "¿Puedo usar mi propio dominio?",
    faq_5_a: "Sí, incluimos un dominio .com gratis el primer año. Si ya tenés uno, lo configuramos sin costo.",
    faq_6_q: "¿Está optimizada para Google?",
    faq_6_a: "Absolutamente. Cada landing incluye SEO on-page, meta tags, Open Graph, datos estructurados y sitemap. Apuntamos a los primeros puestos.",

    // Contact
    contact_title: "¿Lista tu landing?",
    contact_subtitle: "Completá el formulario y tené tu sitio web profesional en 24 horas.",
    contact_name: "Nombre",
    contact_phone: "Teléfono",
    contact_email: "Email",
    contact_business: "Nombre de tu negocio",
    contact_message: "Contanos sobre tu proyecto...",
    contact_submit: "Enviar y Recibir Presupuesto",
    contact_whatsapp: "WhatsApp",

    // CTA
    cta_title: "¿Listo para destacar?",
    cta_subtitle: "Tu landing profesional en 24 horas. Sin plantillas. Código real.",
    cta_button: "Empezar Ahora",

    // Footer
    footer_tagline: "Landings profesionales. Código real. Sin cuotas mensuales.",
    footer_product: "Producto",
    footer_company: "Empresa",
    footer_terms: "Términos",
    footer_privacy: "Privacidad",
    footer_built: "Hecho con ☕ por Emilio Ranucoli",

    // Extras
    extra_seo: "SEO Avanzado + Google Analytics",
    extra_blog: "Blog integrado",
    extra_form: "Formulario de contacto multi-paso",
    extra_social: "Integración redes sociales",
    extra_hosting: "1 año de hosting incluido",
    extra_domain: "Dominio .com gratis",
    extra_support: "30 días de soporte",
    extra_edits: "Ediciones ilimitadas por 15 días",
  },

  it: {
    // Navbar
    nav_services: "Servizi",
    nav_pricing: "Prezzi",
    nav_faq: "FAQ",
    nav_contact: "Contatto",
    nav_get_started: "Inizia",

    // Hero
    hero_badge: "Landing professionale in 24h",
    hero_title_line1: "Creiamo la tua",
    hero_title_line2: "landing page",
    hero_title_line3: "che converte",
    hero_subtitle: "Landing ad alta conversione per qualsiasi business. Design professionale, codice reale, zero quote mensili.",
    hero_cta: "La Mia Landing",
    hero_examples: "Vedi Esempi",
    hero_tagline: "⚡ Codice Reale · Hosting Incluso · Nessuna Quota Mensile",

    // How It Works
    how_title: "Come funziona",
    how_subtitle: "Tre semplici passi per la tua landing professionale",
    how_step1_title: "Raccontaci di te",
    how_step1_desc: "Compila un modulo veloce con le info del tuo business, i colori del brand e cosa ti serve.",
    how_step2_title: "Noi la creiamo",
    how_step2_desc: "Il nostro team progetta e sviluppa la tua landing in 24-48 ore. Codice reale, non template.",
    how_step3_title: "Lancia e cresci",
    how_step3_desc: "La mettiamo online per te. Hosting incluso per 1 anno. 15 giorni di modifiche illimitate.",

    // Why Ranuk
    why_title: "Perché Ranuk IT",
    why_subtitle: "Non siamo una fabbrica di template. Costruiamo prodotti reali.",
    why_1_title: "Codice Reale",
    why_1_desc: "Next.js, React, Tailwind — niente WordPress, niente Wix. La tua landing carica veloce e scala in alto.",
    why_2_title: "SEO Integrato",
    why_2_desc: "Meta tag, Open Graph, dati strutturati, sitemap. Tutto ciò che Google ti trovi.",
    why_3_title: "Consegna in 24h",
    why_3_desc: "Veloce. Hai bisogno della tua landing ORA, non tra 2 settimane.",
    why_4_title: "Prezzo Unico",
    why_4_desc: "Paghi una volta, è tua per sempre. Nessun abbonamento, nessun costo nascosto.",

    // Niches
    niches_title: "Landing per ogni tipo di business",
    niches_subtitle: "Scegli la tua industria. Abbiamo già il template perfetto.",
    niches_from: "da",

    // Features
    features_title: "Tutto ciò che ti serve",
    features_subtitle: "La tua landing viene con tutto incluso. Nessuna sorpresa, nessun extra.",
    features_included: "Incluso nella tua landing",

    // Pricing
    pricing_title: "Prezzi semplici, senza sorprese",
    pricing_subtitle: "Paghi una volta e la landing è tua per sempre.",
    pricing_popular: "Più Popolare",
    pricing_onetime: "/ pagamento unico",
    pricing_complete: "Landing completa per",
    pricing_buy: "Acquista Ora",
    pricing_extras_title: "Tutto incluso",

    // FAQ
    faq_title: "Domande frequenti",
    faq_subtitle: "Tutto ciò che devi sapere prima di acquistare.",
    faq_1_q: "Quanto ci vuole?",
    faq_1_a: "Tra le 24 e le 48 ore lavorative. Compili un modulo con i tuoi dati e generiamo la landing automaticamente.",
    faq_2_q: "Posso personalizzarla dopo?",
    faq_2_a: "Sì. Ti diamo accesso al codice (Next.js) o puoi richiedere modifiche. Includiamo 15 giorni di modifiche illimitate.",
    faq_3_q: "Include hosting?",
    faq_3_a: "Sì. Ospitiamo la tua landing per 1 anno senza costi aggiuntivi su Vercel. Dopo, puoi tenerla con noi o portarla dove vuoi.",
    faq_4_q: "E se non mi piace?",
    faq_4_a: "Facciamo tutte le modifiche necessarie fino a renderla perfetta. Nessun costo aggiuntivo nei primi 15 giorni.",
    faq_5_q: "Posso usare il mio dominio?",
    faq_5_a: "Sì, includiamo un dominio .com gratuito il primo anno. Se ne hai già uno, lo configuriamo senza costo.",
    faq_6_q: "È ottimizzata per Google?",
    faq_6_a: "Assolutamente. Ogni landing include SEO on-page, meta tag, Open Graph, dati strutturati e sitemap. Miriamo ai primi posti.",

    // Contact
    contact_title: "Pronto per la tua landing?",
    contact_subtitle: "Compila il modulo e ottieni il tuo sito web professionale in 24 ore.",
    contact_name: "Nome",
    contact_phone: "Telefono",
    contact_email: "Email",
    contact_business: "Nome del tuo business",
    contact_message: "Raccontaci del tuo progetto...",
    contact_submit: "Invia e Ricevi un Preventivo",
    contact_whatsapp: "WhatsApp",

    // CTA
    cta_title: "Pronto a distinguerti?",
    cta_subtitle: "La tua landing professionale in 24 ore. Nessun template. Codice reale.",
    cta_button: "Inizia Ora",

    // Footer
    footer_tagline: "Landing professionali. Codice reale. Nessuna quota mensile.",
    footer_product: "Prodotto",
    footer_company: "Azienda",
    footer_terms: "Termini",
    footer_privacy: "Privacy",
    footer_built: "Fatto con ☕ da Emilio Ranucoli",

    // Extras
    extra_seo: "SEO Avanzato + Google Analytics",
    extra_blog: "Blog integrato",
    extra_form: "Modulo di contatto multi-step",
    extra_social: "Integrazione social media",
    extra_hosting: "1 anno di hosting incluso",
    extra_domain: "Dominio .com gratuito",
    extra_support: "30 giorni di supporto",
    extra_edits: "Modifiche illimitate per 15 giorni",
  },
};
