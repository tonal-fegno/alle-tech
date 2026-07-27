import type { Metadata } from "next";
import { CaseStudyForm } from "@/components/dashboard/case-studies/case-study-form";

export const metadata: Metadata = {
  title: "New Case Study",
};

export default function NewCaseStudyPage() {
  return <CaseStudyForm />;
}
