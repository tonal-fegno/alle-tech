// Shared JSONB row shapes for db/schema.ts columns and the matching zod
// validators in lib/actions/*. Icon fields are string lucide icon names
// (resolved client-side via components/dashboard/menu-icon.tsx /
// components/ui/DynamicIcon.tsx), not LucideIcon component references.

export interface WhyItem {
  title: string;
  desc: string;
  icon: string;
}

export interface ChallengeItem {
  title: string;
  desc: string;
  icon: string;
  color?: string;
}

export interface FlowStep {
  id: string;
  label: string;
  title: string;
  desc: string;
}

export interface ModuleItem {
  title: string;
  desc?: string;
  points?: string[];
  icon: string;
  color?: string;
  bgColor?: string;
}

export interface LifecycleStep {
  phase: string;
  title: string;
  desc: string;
  icon: string;
}

export interface RelatedIndustryItem {
  name: string;
  heading: string;
  desc: string;
  bullets: string[];
  image: string;
}

export interface IntegrationItem {
  name: string;
  desc: string;
  icon: string;
  color?: string;
  border?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface OutcomeItem {
  title: string;
  desc: string;
  icon: string;
}

export interface CtaButton {
  label: string;
  href: string;
  variant?: string;
}

export interface CaseStudyResult {
  value: string;
  label: string;
}
