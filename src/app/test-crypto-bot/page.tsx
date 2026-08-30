"use client";

import { useState, useEffect } from 'react';
import { generateLandingSections, LandingSection } from '@/lib/generator';
import { LandingSectionComponent } from '@/components/landing-section';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';



export default function TestCryptoBotPage() {
  const [sections, setSections] = useState<LandingSection[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    generateCryptoBotLanding();
  }, []);

  const generateCryptoBotLanding = async () => {
    setIsGenerating(true);
    
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Generate sections with the crypto bot config
    const cryptoSections = generateLandingSections('./crypto-bot-config.json');
    setSections(cryptoSections);
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
        <title>CryptoCopyTrading Landing</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0; line-height: 1.6; }
          .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
          .hero { background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); color: white; padding: 100px 20px; text-align: center; border-radius: 10px; margin-bottom: 40px; }
          .section { padding: 60px 20px; }
          .features { background: #f8f9fa; }
          .pricing { background: white; }
          .faq { background: #f8f9fa; }
          .contact { background: #7c3aed; color: white; }
          .card { background: white; border-radius: 10px; padding: 30px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px; }
          .feature-item { display: flex; align-items: center; margin-bottom: 15px; }
          .feature-item i { margin-right: 10px; color: #7c3aed; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="hero">
            <h1>CryptoCopyTrading</h1>
            <p>Automated crypto trading bot that mirrors profitable traders on your account</p>
          </div>
          
          <div class="section features">
            <h2>Características</h2>
            <div class="card">
              <div class="feature-item">
                <i>✓</i>
                <span>Copy professional traders automatically</span>
              </div>
              <div class="feature-item">
                <i>✓</i>
                <span>Real-time trade execution</span>
              </div>
              <div class="feature-item">
                <i>✓</i>
                <span>Advanced risk management controls</span>
              </div>
              <div class="feature-item">
                <i>✓</i>
                <span>Multi-exchange support</span>
              </div>
              <div class="feature-item">
                <i>✓</i>
                <span>Performance analytics dashboard</span>
              </div>
              <div class="feature-item">
                <i>✓</i>
                <span>24/7 Telegram notifications</span>
              </div>
            </div>
          </div>
          
          <div class="section pricing">
            <h2>Precios</h2>
            <div class="card">
              <h3>Crypto Trading Bot</h3>
              <p><strong>$247</strong></p>
              <p>por mes</p>
              <button style="background: #7c3aed; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">Comenzar Ahora</button>
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
    a.download = `crypto-bot-landing.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Test: Crypto Bot Landing</h1>
          <p className="text-gray-600">Testing the JSON-to-landing functionality with a crypto bot configuration</p>
        </div>
        
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Generated Landing</h2>
          <div className="flex gap-2">
            <Button onClick={generateCryptoBotLanding} disabled={isGenerating}>
              {isGenerating ? 'Generating...' : 'Regenerate'}
            </Button>
            <Button onClick={exportLanding} variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export HTML
            </Button>
          </div>
        </div>
        
        {isGenerating ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Generating crypto bot landing...</p>
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