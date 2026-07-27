import type { Metadata } from "next";
import { SolutionForm } from "@/components/dashboard/solutions/solution-form";

export const metadata: Metadata = {
  title: "New Solution",
};

export default function NewSolutionPage() {
  return <SolutionForm />;
}
