import { BarChart3, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    icon: Sparkles,
    title: "Premium UI",
    description: "Crafted interface with rich visuals and responsive behavior across devices.",
  },
  {
    icon: Layers3,
    title: "Reusable Components",
    description: "Composable building blocks to scale features while keeping UI consistent.",
  },
  {
    icon: BarChart3,
    title: "Performance Ready",
    description: "Optimized structure for smooth rendering and future Vercel deployments.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Foundation",
    description: "Type-safe frontend setup with clear patterns for maintainable growth.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10 md:py-20">
      <div className="mb-8 max-w-2xl">
        <h2 className="text-3xl font-bold text-slate-50">Core Features</h2>
        <p className="mt-2 text-slate-300">
          Four glassmorphism cards showcasing the frontend capabilities of this milestone.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
