import { recommendations } from "./data";

export function RecentRecommendations() {
  return (
    <section className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
      <h2 className="text-xl font-semibold text-white">Recent Recommendations</h2>
      <ul className="mt-4 space-y-3">
        {recommendations.map((item) => (
          <li
            key={item.title}
            className="rounded-xl border border-white/10 bg-slate-950/45 p-4 transition duration-300 hover:border-[#22D3EE]/40"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-white">{item.title}</h3>
              <span className="rounded-full border border-emerald-400/40 bg-emerald-400/15 px-2 py-1 text-xs text-emerald-300">
                {item.impact}
              </span>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
