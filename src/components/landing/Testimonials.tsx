import {
  Card,
  CardContent,
} from "@/components/ui/card";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  heading?: string;
  subheading?: string;
}

export default function Testimonials({
  testimonials,
  heading = "What our customers say",
  subheading = "Trusted by thousands of teams worldwide",
}: TestimonialsProps) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            {subheading}
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-slate-200">
              <CardContent className="flex flex-col pt-6">
                {/* Quote */}
                <div className="flex-1">
                  <svg
                    className="h-8 w-8 text-blue-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.689 11 13.159 11 15c0 1.933-1.567 3.5-3.5 3.5-1.208 0-2.329-.607-2.917-1.179zM14.583 17.321C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.689 21 13.159 21 15c0 1.933-1.567 3.5-3.5 3.5-1.208 0-2.329-.607-2.917-1.179z" />
                  </svg>
                  <blockquote className="mt-4 text-base leading-relaxed text-slate-700">
                    {testimonial.quote}
                  </blockquote>
                </div>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-semibold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
