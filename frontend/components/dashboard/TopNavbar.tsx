import { Menu, Search } from "lucide-react";

type TopNavbarProps = {
  onOpenMobile: () => void;
};

export function TopNavbar({ onOpenMobile }: TopNavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/75 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenMobile}
          className="rounded-lg border border-white/15 bg-white/5 p-2 text-slate-200 transition hover:border-[#22D3EE]/60 hover:text-[#22D3EE] lg:hidden"
          aria-label="Open mobile navigation"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="relative w-full max-w-xl">
          <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Search insights, reports, actions..."
            className="h-11 w-full rounded-xl border border-white/15 bg-white/5 pr-4 pl-10 text-sm text-slate-100 outline-none transition placeholder:text-slate-400 focus:border-[#22D3EE]/80"
          />
        </div>
      </div>
    </header>
  );
}
