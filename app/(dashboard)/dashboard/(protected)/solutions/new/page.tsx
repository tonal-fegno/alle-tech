import type { Metadata } from "next";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { SolutionForm } from "@/components/dashboard/solutions/solution-form";

export const metadata: Metadata = {
  title: "New Solution",
};

export default function NewSolutionPage() {
  return (
    <div className="space-y-6 p-6 md:p-8">
      <DashboardPageHeader title="New Solution" />
      <SolutionForm />
    </div>
  );
}
