import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <article className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#22D3EE]/50">
      <div className="mb-4 inline-flex rounded-lg bg-[#22D3EE]/20 p-3 text-[#22D3EE]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-slate-50">{title}</h3>
      <p className="text-sm leading-6 text-slate-300">{description}</p>
    </article>
  );
}
