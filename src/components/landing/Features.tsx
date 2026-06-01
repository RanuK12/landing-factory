import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesProps {
  features: Feature[];
  heading?: string;
  subheading?: string;
}

export default function Features({
  features,
  heading = "Everything you need",
  subheading = "Powerful features to help you succeed",
}: FeaturesProps) {
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

        {/* Features grid */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-slate-200 transition-shadow duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-2xl">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-slate-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-slate-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
