"use client";

import { useState, useEffect } from 'react';
import { generateLandingSections } from '@/lib/generator';
import { LandingSectionComponent } from '@/components/landing-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { nichos } from '@/data/nichos';
import { ArrowRight, Download, Eye } from 'lucide-react';

export default function PreviewPage() {
  const [selectedNicho, setSelectedNicho] = useState<string>('ecopulse-air');
  const [sections, setSections] = useState<any[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    generatePreview();
  }, [selectedNicho]);

  const generatePreview = async () => {
    setIsGenerating(true);
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Import the landing config dynamically
    const config = await import('@/../landing.config.json');
    // Update the nicho based on selection
    config.nicho = nichos.find(n => n.id === selectedNicho)!;
    
    // Generate sections with the selected config
    setSections(generateLandingSections());
    setIsGenerating(false);
  };

  const exportLanding = () => {
    // Create a simple HTML export of the landing
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${nichos.find(n => n.id === selectedNicho)?.name} Landing</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0; line-height: 1.6; }
          .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
          .hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 100px 20px; text-align: center; border-radius: 10px; margin-bottom: 40px; }
          .section { padding: 60px 20px; }
          .features { background: #f8f9fa; }
          .pricing { background: white; }
          .faq { background: #f8f9fa; }
          .contact { background: #667eea; color: white; }
          .card { background: white; border-radius: 10px; padding: 30px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px; }
          .feature-item { display: flex; align-items: center; margin-bottom: 15px; }
          .feature-item i { margin-right: 10px; color: #28a745; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="hero">
            <h1>${nichos.find(n => n.id === selectedNicho)?.name}</h1>
            <p>${nichos.find(n => n.id === selectedNicho)?.description}</p>
          </div>
          
          <div class="section features">
            <h2>Características</h2>
            ${nichos.find(n => n.id === selectedNicho)?.features.map(f => `
              <div class="feature-item">
                <i>✓</i>
                <span>${f}</span>
              </div>
            `).join('')}
          </div>
          
          <div class="section pricing">
            <h2>Precios</h2>
            <div class="card">
              <h3>${nichos.find(n => n.id === selectedNicho)?.name}</h3>
              <p><strong>$${nichos.find(n => n.id === selectedNicho)?.price}</strong></p>
              <p>por mes</p>
              <button style="background: #007bff; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">Comenzar Ahora</button>
            </div>
          </div>
          
          <div class="section contact">
            <h2>Contacto</h2>
            <p>¿Listo para comenzar? Contáctanos hoy mismo</p>
          </div>
        </div>
      </body>
      </html>
    `;
    
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedNicho}-landing.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Generador de Landings</h1>
          <p className="text-gray-600">Crea landings personalizadas en segundos</p>
        </div>
        
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Selecciona un nicho</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {nichos.map((nicho) => (
                  <button
                    key={nicho.id}
                    onClick={() => setSelectedNicho(nicho.id)}
                    className={`p-4 rounded-lg border-2 text-left transition ${
                      selectedNicho === nicho.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{nicho.icon}</div>
                    <h3 className="font-semibold">{nicho.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{nicho.description}</p>
                    <Badge variant="outline" className="mt-2">
                      ${nicho.price}
                    </Badge>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Vista Previa</h2>
          <div className="flex gap-2">
            <Button onClick={generatePreview} disabled={isGenerating}>
              {isGenerating ? 'Generando...' : 'Regenerar'}
            </Button>
            <Button onClick={exportLanding} variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Exportar HTML
            </Button>
          </div>
        </div>
        
        {isGenerating ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Generando landing...</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {sections.map((section) => (
              <LandingSectionComponent 
                key={section.id} 
                section={section} 
                colorScheme={section.colorScheme}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
