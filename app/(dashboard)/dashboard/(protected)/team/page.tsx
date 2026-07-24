import { asc } from "drizzle-orm";
import type { Metadata } from "next";
import { db } from "@/db";
import { teamMembers } from "@/db/schema";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { TeamMembersTable } from "@/components/dashboard/team/team-members-table";

export const metadata: Metadata = {
  title: "Team",
};

export const dynamic = "force-dynamic";

export default async function TeamPage() {
  const items = await db.select().from(teamMembers).orderBy(asc(teamMembers.sortOrder));

  return (
    <div className="space-y-6 p-6 md:p-8">
      <DashboardPageHeader title="Team" description="The team members shown on the About Us page." />
      <TeamMembersTable initialItems={items} />
    </div>
  );
}
