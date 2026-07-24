import { desc } from "drizzle-orm";
import type { Metadata } from "next";
import { db } from "@/db";
import { caseStudies } from "@/db/schema";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { CaseStudiesTable } from "@/components/dashboard/case-studies/case-studies-table";

export const metadata: Metadata = {
  title: "Case Studies",
};

export const dynamic = "force-dynamic";

export default async function CaseStudiesPage() {
  const items = await db.select().from(caseStudies).orderBy(desc(caseStudies.updatedAt));

  return (
    <div className="space-y-6 p-6 md:p-8">
      <DashboardPageHeader title="Case Studies" description="Manage case study entries and client stories." />
      <CaseStudiesTable initialItems={items} />
    </div>
  );
}
