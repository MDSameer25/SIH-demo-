import { quickActions } from "./data";

export function QuickActions() {
  return (
    <section className="rounded-[20px] border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
      <h2 className="text-xl font-semibold text-white">Quick Actions</h2>
      <p className="mt-1 text-sm text-slate-300">Execute frequent workflows in one click.</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {quickActions.map((action) => (
          <button
            type="button"
            key={action.title}
            className="group rounded-[20px] border border-white/15 bg-slate-950/45 p-4 text-left transition duration-300 hover:border-[#16A34A]/70 hover:bg-[#16A34A]/15"
          >
            <div className="mb-3 inline-flex rounded-md bg-[#22D3EE]/15 p-2 text-[#22D3EE] transition group-hover:bg-[#16A34A]/25 group-hover:text-emerald-300">
              <action.icon className="h-4 w-4" />
            </div>
            <p className="font-medium text-white">{action.title}</p>
            <p className="mt-1 text-sm text-slate-300">{action.description}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
