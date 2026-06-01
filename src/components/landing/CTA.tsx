import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export default function CTA({
  title,
  subtitle,
  buttonText,
  buttonLink,
}: CTAProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-20 lg:py-28">
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100 sm:text-xl">
          {subtitle}
        </p>
        <div className="mt-10">
          <Link href={buttonLink}>
            <Button
              size="lg"
              variant="secondary"
              className="px-8 text-base font-semibold"
            >
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
