import { notFound } from "next/navigation";
import { nichos } from "@/data/nichos";
import { LandingPage } from "@/components/landing/landing-page";

export function generateStaticParams() {
  return nichos.map((nicho) => ({ nicho: nicho.id }));
}

export default async function NichoPage({ params }: { params: Promise<{ nicho: string }> }) {
  const { nicho: nichoId } = await params;
  const nicho = nichos.find((n) => n.id === nichoId);
  if (!nicho) return notFound();

  return (
    <LandingPage
      nicho={nicho}
      businessName={`${nicho.name} Pro`}
      tagline={`La mejor landing para ${nicho.name.toLowerCase()}`}
    />
  );
}
