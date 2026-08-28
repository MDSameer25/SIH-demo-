"use client";

import { useState } from "react";
import { AIAssistantPreview } from "./AIAssistantPreview";
import { AnalyticsPlaceholder } from "./AnalyticsPlaceholder";
import { KpiCards } from "./KpiCards";
import { QuickActions } from "./QuickActions";
import { RecentRecommendations } from "./RecentRecommendations";
import { Sidebar } from "./Sidebar";
import { TopNavbar } from "./TopNavbar";

export function DashboardShell() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-transparent text-slate-100">
      <div className={`grid min-h-screen ${collapsed ? "lg:grid-cols-[5rem_1fr]" : "lg:grid-cols-[18rem_1fr]"}`}>
        <Sidebar
          collapsed={collapsed}
          mobileOpen={mobileOpen}
          onToggleCollapsed={() => setCollapsed((prev) => !prev)}
          onCloseMobile={() => setMobileOpen(false)}
        />

        <div className="min-w-0">
          <TopNavbar onOpenMobile={() => setMobileOpen(true)} />

          <main className="space-y-6 px-4 py-6 sm:px-6 lg:px-8">
            <KpiCards />
            <QuickActions />
            <AnalyticsPlaceholder />
            <div className="grid gap-6 xl:grid-cols-2">
              <RecentRecommendations />
              <AIAssistantPreview />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
