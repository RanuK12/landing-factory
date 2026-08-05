"use client";

import { generateLandingSections } from '@/lib/generator';
import { LandingSectionComponent } from '@/components/landing-section';

export default function GeneratePage() {
  const sections = generateLandingSections();

  return (
    <div className="min-h-screen bg-white">
      {sections.map((section) => (
        <LandingSectionComponent key={section.id} section={section} />
      ))}
    </div>
  );
}