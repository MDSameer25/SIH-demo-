"use client";

import { AIAssistantPreview } from "./AIAssistantPreview";
import { AnalyticsPlaceholder } from "./AnalyticsPlaceholder";
import { DashboardLayout } from "./DashboardLayout";
import { KpiCards } from "./KpiCards";
import { QuickActions } from "./QuickActions";
import { RecentRecommendations } from "./RecentRecommendations";

export function DashboardShell() {
  return (
    <DashboardLayout>
      <KpiCards />
      <QuickActions />
      <AnalyticsPlaceholder />
      <div className="grid gap-6 xl:grid-cols-2">
        <RecentRecommendations />
        <AIAssistantPreview />
      </div>
    </DashboardLayout>
  );
}
