import { asc } from "drizzle-orm";
import type { Metadata } from "next";
import { db } from "@/db";
import { solutions } from "@/db/schema";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { SolutionsTable } from "@/components/dashboard/solutions/solutions-table";

export const metadata: Metadata = {
  title: "Solutions",
};

export const dynamic = "force-dynamic";

export default async function SolutionsPage() {
  const items = await db.select().from(solutions).orderBy(asc(solutions.sortOrder));

  return (
    <div className="space-y-6 p-6 md:p-8">
      <DashboardPageHeader title="Solutions" description="Manage solution listing cards and detail pages." />
      <SolutionsTable initialItems={items} />
    </div>
  );
}
