import { kpiItems } from "./data";

export function KpiCards() {
  return (
    <section aria-label="KPI cards" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {kpiItems.map((item) => (
        <article
          key={item.title}
          className="rounded-[20px] border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#22D3EE]/40"
        >
          <div className="mb-4 inline-flex rounded-lg bg-[#22D3EE]/15 p-2 text-[#22D3EE]">
            <item.icon className="h-4 w-4" />
          </div>
          <p className="text-sm text-slate-300">{item.title}</p>
          <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
          <p className="mt-1 text-xs text-emerald-400">{item.trend}</p>
        </article>
      ))}
    </section>
  );
}
