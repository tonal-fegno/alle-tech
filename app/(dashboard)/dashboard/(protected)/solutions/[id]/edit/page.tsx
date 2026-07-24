import { eq } from "drizzle-orm";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { solutions } from "@/db/schema";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { SolutionForm } from "@/components/dashboard/solutions/solution-form";

export const metadata: Metadata = {
  title: "Edit Solution",
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditSolutionPage({ params }: PageProps) {
  const { id } = await params;
  const [solution] = await db.select().from(solutions).where(eq(solutions.id, Number(id)));

  if (!solution) notFound();

  return (
    <div className="space-y-6 p-6 md:p-8">
      <DashboardPageHeader title={`Edit: ${solution.title}`} />
      <SolutionForm
        solutionId={solution.id}
        defaultValues={{
          ...solution,
          heroTitle: solution.heroTitle ?? "",
          heroSubtitle: solution.heroSubtitle ?? "",
          heroImage: solution.heroImage ?? "",
          whyTitle: solution.whyTitle ?? "",
          challengesTitle: solution.challengesTitle ?? "",
          flowTitle: solution.flowTitle ?? "",
          modulesTitle: solution.modulesTitle ?? "",
          lifecycleTitle: solution.lifecycleTitle ?? "",
          relatedIndustriesTitle: solution.relatedIndustriesTitle ?? "",
          integrationsTitle: solution.integrationsTitle ?? "",
          faqsTitle: solution.faqsTitle ?? "",
          outcomesTitle: solution.outcomesTitle ?? "",
          whyAlleTechTitle: solution.whyAlleTechTitle ?? "",
          ctaTitle: solution.ctaTitle ?? "",
          ctaSubtitle: solution.ctaSubtitle ?? "",
          ctaLabel: solution.ctaLabel ?? "",
          ctaSecondaryLabel: solution.ctaSecondaryLabel ?? "",
        }}
      />
    </div>
  );
}
