import landingConfig from '@/../landing.config.json';

export interface LandingSection {
  id: string;
  type: 'hero' | 'features' | 'pricing' | 'faq' | 'contact';
  title?: string;
  content?: string;
  items?: any[];
}

export const generateLandingSections = (): LandingSection[] => {
  const sections: LandingSection[] = [];
  
  // Hero Section
  sections.push({
    id: 'hero',
    type: 'hero',
    title: landingConfig.businessName,
    content: landingConfig.tagline,
  });
  
  // Features Section
  if (landingConfig.features && landingConfig.features.length > 0) {
    sections.push({
      id: 'features',
      type: 'features',
      title: 'Características',
      content: 'Descubre todo lo que nuestra plataforma puede ofrecerte',
      items: landingConfig.features as string[],
    });
  }
  
  // Pricing Section
  if (landingConfig.nicho && landingConfig.nicho.price) {
    sections.push({
      id: 'pricing',
      type: 'pricing',
      title: 'Precios',
      content: 'Elige el plan que mejor se adapte a tus necesidades',
      items: [{
        name: landingConfig.nicho.name,
        price: `$${landingConfig.nicho.price}`,
        features: landingConfig.nicho.features as string[],
      }],
    });
  }
  
  // FAQ Section
  if (landingConfig.faqs && landingConfig.faqs.length > 0) {
    sections.push({
      id: 'faq',
      type: 'faq',
      title: 'Preguntas Frecuentes',
      content: 'Respuestas a las preguntas más comunes',
      items: landingConfig.faqs,
    });
  }
  
  // Contact Section
  sections.push({
    id: 'contact',
    type: 'contact',
    title: 'Contacto',
    content: '¿Listo para comenzar? Contáctanos hoy mismo',
    items: [{
      email: landingConfig.contact.email,
      phone: landingConfig.contact.phone,
      whatsApp: landingConfig.contact.whatsApp,
    }],
  });
  
  return sections;
};