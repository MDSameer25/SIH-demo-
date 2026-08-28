import { PanelLeftClose, PanelLeftOpen, X } from "lucide-react";
import { navItems } from "./data";

type SidebarProps = {
  collapsed: boolean;
  mobileOpen: boolean;
  onToggleCollapsed: () => void;
  onCloseMobile: () => void;
};

const sidebarClasses =
  "border-r border-white/10 bg-slate-950/70 backdrop-blur-xl transition-all duration-300";

export function Sidebar({
  collapsed,
  mobileOpen,
  onToggleCollapsed,
  onCloseMobile,
}: SidebarProps) {
  return (
    <>
      <aside className={`hidden lg:flex lg:flex-col ${collapsed ? "lg:w-20" : "lg:w-72"} ${sidebarClasses}`}>
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
          <span className={`font-semibold text-[#22D3EE] transition-all ${collapsed ? "opacity-0" : "opacity-100"}`}>
            Dashboard
          </span>
          <button
            type="button"
            onClick={onToggleCollapsed}
            className="rounded-md border border-white/15 bg-white/5 p-2 text-slate-200 transition hover:border-[#22D3EE]/60 hover:text-[#22D3EE]"
            aria-label="Toggle sidebar"
          >
            {collapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
          </button>
        </div>

        <nav className="flex-1 px-3 py-5">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2 text-sm text-slate-300 transition duration-300 hover:border-[#22D3EE]/40 hover:bg-white/5 hover:text-white"
                >
                  <item.icon className="h-4 w-4 text-[#22D3EE]" />
                  <span className={`${collapsed ? "hidden" : "inline"}`}>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm lg:hidden">
          <aside className={`h-full w-72 ${sidebarClasses}`}>
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
              <span className="font-semibold text-[#22D3EE]">Dashboard</span>
              <button
                type="button"
                onClick={onCloseMobile}
                className="rounded-md border border-white/15 bg-white/5 p-2 text-slate-200 transition hover:border-[#22D3EE]/60 hover:text-[#22D3EE]"
                aria-label="Close mobile navigation"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <nav className="px-3 py-5">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href="#"
                      onClick={onCloseMobile}
                      className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2 text-sm text-slate-300 transition duration-300 hover:border-[#22D3EE]/40 hover:bg-white/5 hover:text-white"
                    >
                      <item.icon className="h-4 w-4 text-[#22D3EE]" />
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      ) : null}
    </>
  );
}
