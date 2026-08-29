import { insightIcons } from "./data";

const { brain: Brain, sparkles: Sparkles } = insightIcons;

export function AIAssistantPreview() {
  return (
    <section className="rounded-[20px] border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#22D3EE]/40 bg-[#22D3EE]/10 px-3 py-1 text-xs text-[#22D3EE]">
        <Brain className="h-3.5 w-3.5" />
        AI Assistant Preview
      </div>
      <h2 className="text-xl font-semibold text-white">Conversation Snapshot</h2>
      <p className="mt-2 text-sm text-slate-300">
        Preview of how future assistant insights can be surfaced in-context without backend dependencies.
      </p>
      <div className="mt-5 space-y-3">
        <div className="rounded-[20px] border border-white/10 bg-slate-950/45 p-3 text-sm text-slate-300">
          Suggest top three priorities based on this week&apos;s performance.
        </div>
        <div className="rounded-[20px] border border-emerald-400/35 bg-emerald-500/10 p-3 text-sm text-emerald-200">
          <div className="mb-1 inline-flex items-center gap-2 text-emerald-300">
            <Sparkles className="h-4 w-4" />
            Assistant Preview
          </div>
          Focus onboarding optimization, retention reminders, and high-intent region targeting.
        </div>
      </div>
    </section>
  );
}
