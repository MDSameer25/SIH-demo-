import {
  Activity,
  Bell,
  Brain,
  Calendar,
  ChartNoAxesCombined,
  Gauge,
  Home,
  LayoutGrid,
  MessageSquareText,
  Rocket,
  Settings,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  WandSparkles,
} from "lucide-react";
import type { KpiItem, NavItem, QuickAction, Recommendation } from "./types";

export const navItems: NavItem[] = [
  { label: "Overview", icon: Home },
  { label: "Analytics", icon: ChartNoAxesCombined },
  { label: "Projects", icon: LayoutGrid },
  { label: "Audience", icon: Users },
  { label: "Messages", icon: MessageSquareText },
  { label: "Settings", icon: Settings },
];

export const kpiItems: KpiItem[] = [
  { title: "Revenue Growth", value: "+18.4%", trend: "vs last month", icon: TrendingUp },
  { title: "Active Users", value: "24,680", trend: "+1,240 this week", icon: Users },
  { title: "Conversion", value: "7.2%", trend: "stable performance", icon: Target },
  { title: "System Health", value: "99.9%", trend: "uptime monitored", icon: Activity },
];

export const quickActions: QuickAction[] = [
  {
    title: "Launch Campaign",
    description: "Start a new marketing sequence for segmented users.",
    icon: Rocket,
  },
  {
    title: "Schedule Review",
    description: "Plan team sync to evaluate weekly goals and blockers.",
    icon: Calendar,
  },
  {
    title: "Smart Alerts",
    description: "Tune thresholds and notification priorities instantly.",
    icon: Bell,
  },
  {
    title: "AI Insight Draft",
    description: "Preview suggested narrative for executive reports.",
    icon: WandSparkles,
  },
];

export const recommendations: Recommendation[] = [
  {
    title: "Optimize onboarding sequence",
    detail: "Drop-off is highest at step 2. Introduce guided hints and shorter form fields.",
    impact: "High impact",
  },
  {
    title: "Prioritize high-intent regions",
    detail: "Emerald and cyan campaign variants perform best in top three metro regions.",
    impact: "Medium impact",
  },
  {
    title: "Refine retention reminders",
    detail: "Schedule follow-up notifications at 10am local time for better engagement.",
    impact: "Medium impact",
  },
];

export const insightIcons = {
  gauge: Gauge,
  brain: Brain,
  sparkles: Sparkles,
};
