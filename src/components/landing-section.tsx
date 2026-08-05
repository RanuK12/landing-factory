"use client";

import { LandingSection } from '@/lib/generator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Mail, Phone, MessageCircle } from 'lucide-react';

interface LandingSectionProps {
  section: LandingSection;
}

export const LandingSectionComponent: React.FC<LandingSectionProps> = ({ section }) => {
  const renderHero = () => (
    <section className="py-20 px-4 text-center bg-gradient-to-r from-blue-50 to-green-50">
      <h1 className="text-5xl font-bold mb-6 text-gray-900">{section.title}</h1>
      <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{section.content}</p>
      <div className="flex justify-center gap-4">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Comenzar Ahora
        </button>
        <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
          Ver Demo
        </button>
      </div>
    </section>
  );

  const renderFeatures = () => (
    <section className="py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">{section.content}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {(section.items as string[]).map((feature, index) => (
          <Card key={index} className="text-center p-6 hover:shadow-lg transition">
            <CardContent className="pt-6">
              <Check className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );

  const renderPricing = () => (
    <section className="py-20 px-4 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">{section.content}</p>
      </div>
      <div className="max-w-4xl mx-auto">
        {(section.items as any[]).map((plan, index) => (
          <Card key={index} className="overflow-hidden border-2 border-blue-200">
            <CardHeader className="bg-blue-600 text-white text-center">
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div className="text-4xl font-bold mt-2">{plan.price}</div>
              <p className="text-blue-100">por mes</p>
            </CardHeader>
            <CardContent className="p-8">
              <ul className="space-y-4 mb-8">
                {(plan.features as string[]).map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
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
        <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">{section.content}</p>
      </div>
      <div className="max-w-3xl mx-auto space-y-6">
        {(section.items as any[]).map((faq, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-xl">{faq.q}</CardTitle>
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
    <section className="py-20 px-4 bg-blue-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">{section.content}</p>
      </div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-gray-600">{(section.items as any[])[0].email}</p>
        </div>
        <div className="text-center">
          <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
          <p className="text-gray-600">{(section.items as any[])[0].phone}</p>
        </div>
        <div className="text-center">
          <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
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