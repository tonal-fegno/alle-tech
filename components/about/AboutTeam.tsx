import { asc, eq } from "drizzle-orm";
import { db } from "@/db";
import { teamMembers } from "@/db/schema";
import AboutTeamGrid from "@/components/about/AboutTeamGrid";

export default async function AboutTeam() {
  const team = await db
    .select()
    .from(teamMembers)
    .where(eq(teamMembers.enabled, true))
    .orderBy(asc(teamMembers.sortOrder));

  return <AboutTeamGrid team={team} />;
}
