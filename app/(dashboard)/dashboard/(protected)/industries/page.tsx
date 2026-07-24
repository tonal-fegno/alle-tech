import { asc } from "drizzle-orm";
import type { Metadata } from "next";
import { db } from "@/db";
import { industries } from "@/db/schema";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { IndustriesTable } from "@/components/dashboard/industries/industries-table";

export const metadata: Metadata = {
  title: "Industries",
};

export const dynamic = "force-dynamic";

export default async function IndustriesPage() {
  const items = await db.select().from(industries).orderBy(asc(industries.sortOrder));

  return (
    <div className="space-y-6 p-6 md:p-8">
      <DashboardPageHeader
        title="Industries"
        description="Industries shown on the home page and the /industries listing + detail pages."
      />
      <IndustriesTable initialItems={items} />
    </div>
  );
}
