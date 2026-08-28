import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  icon: LucideIcon;
};

export type KpiItem = {
  title: string;
  value: string;
  trend: string;
  icon: LucideIcon;
};

export type QuickAction = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Recommendation = {
  title: string;
  detail: string;
  impact: string;
};
