import landingConfig from '@/../landing.config.json';

export interface LandingSection {
  id: string;
  type: 'hero' | 'features' | 'pricing' | 'faq' | 'contact';
  title?: string;
  content?: string;
  items?: LandingSectionItem[];
  colorScheme?: {
    primary: string;
    accent: string;
  };
}

export interface LandingSectionItem {
  name?: string;
  price?: string;
  features?: string[];
  email?: string;
  phone?: string;
  whatsApp?: string;
  [key: string]: unknown;
}

interface LandingConfig {
  businessName: string;
  tagline: string;
  primaryColor?: string;
  accentColor?: string;
  features?: string[];
  nicho?: {
    name: string;
    price: number;
    features: string[];
  };
  faqs?: { question: string; answer: string }[];
  contact?: {
    email: string;
    phone: string;
    whatsApp: string;
  };
  sections?: string[];
}

export const generateLandingSections = (configPath?: string): LandingSection[] => {
  // Use provided config path or default
  let config: LandingConfig = landingConfig;
  
  if (configPath) {
    // Try to load a different config based on the path
    try {
      // This is a simplified implementation - in production you'd want
      // proper dynamic imports or a config management system
      if (configPath.includes('crypto-bot')) {
        // Import the crypto bot config
        const cryptoConfig = require('../../crypto-bot-config.json') as LandingConfig;
        config = cryptoConfig;
      }
    } catch (error) {
      console.warn(`Failed to load config from ${configPath}:`, error);
    }
  }
    
  const sections: LandingSection[] = [];
  
  // Determine the order of sections: use config.sections if present and valid, else default order
  const sectionOrder = Array.isArray(config.sections) && config.sections.every(s => 
    ['hero', 'features', 'pricing', 'faq', 'contact'].includes(s)
  ) ? config.sections : ['hero', 'features', 'pricing', 'faq', 'contact'];
  
  // Generate sections in the determined order, but only if they meet the existing conditions
  for (const sectionType of sectionOrder) {
    switch (sectionType) {
      case 'hero':
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
        break;
      case 'features':
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
        break;
      case 'pricing':
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
        break;
      case 'faq':
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
        break;
      case 'contact':
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
        break;
      default:
        // Unknown section type, skip
        break;
    }
  }
  
  return sections;
};