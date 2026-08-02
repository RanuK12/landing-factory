import { notFound } from "next/navigation";
import { nichos } from "@/data/nichos";
import { LandingPage } from "@/components/landing/landing-page";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

// Read custom config if it exists
function getCustomConfig() {
  const configPath = join(process.cwd(), 'landing.config.json');
  if (existsSync(configPath)) {
    try {
      const configContent = readFileSync(configPath, 'utf-8');
      const config = JSON.parse(configContent);
      return config;
    } catch (error) {
      console.warn('Could not parse landing.config.json:', error);
    }
  }
  return null;
}

export function generateStaticParams() {
  return nichos.map((nicho) => ({ nicho: nicho.id }));
}

export default async function NichoPage({ params }: { params: Promise<{ nicho: string }> }) {
  const { nicho: nichoId } = await params;
  const nicho = nichos.find((n) => n.id === nichoId);
  if (!nicho) return notFound();

  // Check if we have custom config
  const customConfig = getCustomConfig();
  const businessName = customConfig?.businessName || `${nicho.name} Pro`;
  const tagline = customConfig?.tagline || `La mejor landing para ${nicho.name.toLowerCase()}`;

  return (
    <LandingPage
      nicho={nicho}
      businessName={businessName}
      tagline={tagline}
    />
  );
}
