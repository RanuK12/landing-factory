"use client";

import { LandingSection } from '@/lib/generator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Mail, Phone, MessageCircle } from 'lucide-react';

interface LandingSectionProps {
  section: LandingSection;
  colorScheme?: {
    primary: string;
    accent: string;
  };
}

export const LandingSectionComponent: React.FC<LandingSectionProps> = ({ section, colorScheme }) => {
  // Use provided color scheme or section's color scheme
  const colors = colorScheme || section.colorScheme || {
    primary: '#3b82f6',
    accent: '#1d4ed8',
  };
  const renderHero = () => (
    <section className="py-20 px-4 text-center" style={{ 
      background: `linear-gradient(to right, ${colors.primary}20, ${colors.accent}20)` 
    }}>
      <h1 className="text-5xl font-bold mb-6 text-gray-900">{section.title}</h1>
      <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{section.content}</p>
      <div className="flex justify-center gap-4">
        <button className="text-white px-8 py-3 rounded-lg font-semibold transition" 
                style={{ backgroundColor: colors.primary }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.accent}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.primary}>
          Comenzar Ahora
        </button>
        <button className="border-2 text-white px-8 py-3 rounded-lg font-semibold transition"
                style={{ borderColor: colors.primary, color: colors.primary }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.primary}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
          Ver Demo
        </button>
      </div>
    </section>
  );

  const renderFeatures = () => (
    <section className="py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4" style={{ color: colors.primary }}>{section.title}</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">{section.content}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {(section.items as string[]).map((feature, index) => (
          <Card key={index} className="text-center p-6 hover:shadow-lg transition border-2" 
                style={{ borderColor: colors.primary + '20' }}>
            <CardContent className="pt-6">
              <Check className="h-12 w-12 mx-auto mb-4" style={{ color: colors.primary }} />
              <h3 className="text-xl font-semibold mb-2">{feature}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );

  const renderPricing = () => (
    <section className="py-20 px-4" style={{ backgroundColor: colors.primary + '10' }}>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4" style={{ color: colors.primary }}>{section.title}</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">{section.content}</p>
      </div>
      <div className="max-w-4xl mx-auto">
        {(section.items as any[]).map((plan, index) => (
          <Card key={index} className="overflow-hidden border-2" 
                style={{ borderColor: colors.primary + '20' }}>
            <CardHeader className="text-center" style={{ backgroundColor: colors.primary, color: 'white' }}>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div className="text-4xl font-bold mt-2">{plan.price}</div>
              <p>por mes</p>
            </CardHeader>
            <CardContent className="p-8">
              <ul className="space-y-4 mb-8">
                {(plan.features as string[]).map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="h-5 w-5 mr-3" style={{ color: colors.primary }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full text-white py-3 rounded-lg font-semibold transition"
                      style={{ backgroundColor: colors.primary }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.accent}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.primary}>
                Elegir Plan
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );

  const renderFAQ = () => (
    <section className="py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4" style={{ color: colors.primary }}>{section.title}</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">{section.content}</p>
      </div>
      <div className="max-w-3xl mx-auto space-y-6">
        {(section.items as any[]).map((faq, index) => (
          <Card key={index} className="border-2" style={{ borderColor: colors.primary + '20' }}>
            <CardHeader>
              <CardTitle className="text-xl" style={{ color: colors.primary }}>{faq.q}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{faq.a}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );

  const renderContact = () => (
    <section className="py-20 px-4" style={{ backgroundColor: colors.primary + '10' }}>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4" style={{ color: colors.primary }}>{section.title}</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">{section.content}</p>
      </div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <Mail className="h-12 w-12 mx-auto mb-4" style={{ color: colors.primary }} />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-gray-600">{(section.items as any[])[0].email}</p>
        </div>
        <div className="text-center">
          <Phone className="h-12 w-12 mx-auto mb-4" style={{ color: colors.primary }} />
          <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
          <p className="text-gray-600">{(section.items as any[])[0].phone}</p>
        </div>
        <div className="text-center">
          <MessageCircle className="h-12 w-12 mx-auto mb-4" style={{ color: colors.primary }} />
          <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
          <p className="text-gray-600">{(section.items as any[])[0].whatsApp}</p>
        </div>
      </div>
    </section>
  );

  switch (section.type) {
    case 'hero':
      return renderHero();
    case 'features':
      return renderFeatures();
    case 'pricing':
      return renderPricing();
    case 'faq':
      return renderFAQ();
    case 'contact':
      return renderContact();
    default:
      return null;
  }
};