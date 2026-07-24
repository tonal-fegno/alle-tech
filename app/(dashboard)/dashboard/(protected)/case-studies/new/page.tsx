import type { Metadata } from "next";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { CaseStudyForm } from "@/components/dashboard/case-studies/case-study-form";

export const metadata: Metadata = {
  title: "New Case Study",
};

export default function NewCaseStudyPage() {
  return (
    <div className="space-y-6 p-6 md:p-8">
      <DashboardPageHeader title="New Case Study" />
      <CaseStudyForm />
    </div>
  );
}
