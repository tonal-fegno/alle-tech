import { asc } from "drizzle-orm";
import type { Metadata } from "next";
import { db } from "@/db";
import { aboutStats } from "@/db/schema";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { AboutStatsTable } from "@/components/dashboard/about-stats/about-stats-table";

export const metadata: Metadata = {
  title: "About Stats",
};

export const dynamic = "force-dynamic";

export default async function AboutStatsPage() {
  const items = await db.select().from(aboutStats).orderBy(asc(aboutStats.sortOrder));

  return (
    <div className="space-y-6 p-6 md:p-8">
      <DashboardPageHeader
        title="About Stats"
        description="The stat counters shown in the About Us section on the home page."
      />
      <AboutStatsTable initialItems={items} />
    </div>
  );
}
