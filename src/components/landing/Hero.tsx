import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageUrl?: string;
  badgeText?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  imageUrl,
  badgeText,
}: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-100/50 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {badgeText && (
              <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium">
                {badgeText}
              </Badge>
            )}

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              {subtitle}
            </p>

            <div className="mt-10">
              <Link href={ctaLink}>
                <Button size="lg" className="px-8 text-base">
                  {ctaText}
                </Button>
              </Link>
            </div>
          </div>

          {/* Optional image */}
          {imageUrl && (
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-blue-200/40 to-indigo-200/40 blur-2xl" />
                <Image
                  src={imageUrl}
                  alt="Hero illustration"
                  width={600}
                  height={450}
                  className="relative rounded-2xl object-cover shadow-2xl"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
