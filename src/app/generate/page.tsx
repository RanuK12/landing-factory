"use client";

import { generateLandingSections } from '@/lib/generator';
import { LandingSectionComponent } from '@/components/landing-section';
import { colorSchemes } from '@/data/nichos';

export default function GeneratePage() {
  const sections = generateLandingSections();
  
  // Get the color scheme from the first section or use default
  const colorScheme = sections[0]?.colorScheme || {
    primary: '#3b82f6',
    accent: '#1d4ed8',
  };

  return (
    <div className="min-h-screen bg-white">
      {sections.map((section) => (
        <LandingSectionComponent 
          key={section.id} 
          section={section} 
          colorScheme={colorScheme}
        />
      ))}
    </div>
  );
}