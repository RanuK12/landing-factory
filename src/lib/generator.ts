import landingConfig from '@/../landing.config.json';

export interface LandingSection {
  id: string;
  type: 'hero' | 'features' | 'pricing' | 'faq' | 'contact';
  title?: string;
  content?: string;
  items?: any[];
  colorScheme?: {
    primary: string;
    accent: string;
  };
}

export const generateLandingSections = (configPath?: string): LandingSection[] => {
  // Use provided config path or default
  let config = landingConfig;
  
  if (configPath) {
    // Try to load a different config based on the path
    try {
      // This is a simplified implementation - in production you'd want
      // proper dynamic imports or a config management system
      if (configPath.includes('crypto-bot')) {
        // For demo purposes, we'll modify the default config
        config = {
          ...landingConfig,
          businessName: "CryptoCopyTrading",
          tagline: "Automated crypto trading bot that mirrors profitable traders on your account",
          primaryColor: "#7c3aed",
          accentColor: "#a855f7",
          nicho: {
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
              "Telegram alerts 24/7"
            ],
            colorScheme: "startup"
          },
          features: [
            "Copy professional traders automatically",
            "Real-time trade execution",
            "Advanced risk management controls",
            "Multi-exchange support (Binance, Coinbase, Kraken)",
            "Performance analytics dashboard",
            "24/7 Telegram notifications",
            "Customizable copying parameters",
            "Stop-loss and take-profit automation"
          ]
        };
      }
    } catch (error) {
      console.warn(`Failed to load config from ${configPath}:`, error);
    }
  }
    
  const sections: LandingSection[] = [];
  
  // Hero Section
  sections.push({
    id: 'hero',
    type: 'hero',
    title: config.businessName,
    content: config.tagline,
    colorScheme: {
      primary: config.primaryColor || '#3b82f6',
      accent: config.accentColor || '#1d4ed8',
    }
  });
  
  // Features Section
  if (config.features && config.features.length > 0) {
    sections.push({
      id: 'features',
      type: 'features',
      title: 'Características',
      content: 'Descubre todo lo que nuestra plataforma puede ofrecerte',
      items: config.features,
      colorScheme: {
        primary: config.primaryColor || '#3b82f6',
        accent: config.accentColor || '#1d4ed8',
      }
    });
  }
  
  // Pricing Section
  if (config.nicho && config.nicho.price) {
    sections.push({
      id: 'pricing',
      type: 'pricing',
      title: 'Precios',
      content: 'Elige el plan que mejor se adapte a tus necesidades',
      items: [{
        name: config.nicho.name,
        price: `$${config.nicho.price}`,
        features: config.nicho.features,
      }],
      colorScheme: {
        primary: config.primaryColor || '#3b82f6',
        accent: config.accentColor || '#1d4ed8',
      }
    });
  }
  
  // FAQ Section
  if (config.faqs && config.faqs.length > 0) {
    sections.push({
      id: 'faq',
      type: 'faq',
      title: 'Preguntas Frecuentes',
      content: 'Respuestas a las preguntas más comunes',
      items: config.faqs,
      colorScheme: {
        primary: config.primaryColor || '#3b82f6',
        accent: config.accentColor || '#1d4ed8',
      }
    });
  }
  
  // Contact Section
  sections.push({
    id: 'contact',
    type: 'contact',
    title: 'Contacto',
    content: '¿Listo para comenzar? Contáctanos hoy mismo',
    items: [{
      email: config.contact.email,
      phone: config.contact.phone,
      whatsApp: config.contact.whatsApp,
    }],
    colorScheme: {
      primary: config.primaryColor || '#3b82f6',
      accent: config.accentColor || '#1d4ed8',
    }
  });
  
  return sections;
};