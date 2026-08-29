import { insightIcons } from "./data";

const { gauge: Gauge } = insightIcons;

export function AnalyticsPlaceholder() {
  return (
    <section className="rounded-[20px] border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Analytics Overview</h2>
        <span className="inline-flex items-center gap-2 rounded-full border border-[#22D3EE]/40 bg-[#22D3EE]/10 px-3 py-1 text-xs text-[#22D3EE]">
          <Gauge className="h-3.5 w-3.5" />
          Placeholder Widget
        </span>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className="h-24 rounded-[20px] border border-white/10 bg-slate-950/45 transition duration-300 hover:border-[#22D3EE]/40"
          />
        ))}
      </div>
    </section>
  );
}
