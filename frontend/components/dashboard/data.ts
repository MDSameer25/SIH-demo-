import {
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
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
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
  { title: "Active Schemes", value: "128", trend: "+12 this month", icon: LayoutGrid },
  { title: "Loan Eligibility", value: "82%", trend: "improved by 4%", icon: ShieldCheck },
  { title: "Project Cost", value: "₹24.8L", trend: "within projected range", icon: Wallet },
  { title: "Financial Score", value: "91/100", trend: "strong and stable", icon: Gauge },
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
