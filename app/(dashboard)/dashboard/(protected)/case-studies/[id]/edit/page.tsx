import { eq } from "drizzle-orm";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { caseStudies } from "@/db/schema";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { CaseStudyForm } from "@/components/dashboard/case-studies/case-study-form";

export const metadata: Metadata = {
  title: "Edit Case Study",
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditCaseStudyPage({ params }: PageProps) {
  const { id } = await params;
  const [caseStudy] = await db.select().from(caseStudies).where(eq(caseStudies.id, Number(id)));

  if (!caseStudy) notFound();

  return (
    <div className="space-y-6 p-6 md:p-8">
      <DashboardPageHeader title={`Edit: ${caseStudy.title}`} />
      <CaseStudyForm
        caseStudyId={caseStudy.id}
        defaultValues={{
          ...caseStudy,
          shortDescription: caseStudy.shortDescription ?? "",
        }}
      />
    </div>
  );
}
