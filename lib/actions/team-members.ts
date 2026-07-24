"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { db } from "@/db";
import { teamMembers } from "@/db/schema";

const teamMemberSchema = z.object({
  name: z.string().min(1, "Name is required"),
  designation: z.string().min(1, "Designation is required"),
  image: z.string().min(1, "Image is required"),
});

export type TeamMemberInput = z.infer<typeof teamMemberSchema>;

export async function createTeamMember(input: TeamMemberInput) {
  const data = teamMemberSchema.parse(input);
  await db.insert(teamMembers).values(data);
  revalidatePath("/dashboard/team");
  revalidatePath("/about");
}

export async function updateTeamMember(id: number, input: TeamMemberInput) {
  const data = teamMemberSchema.parse(input);
  await db.update(teamMembers).set(data).where(eq(teamMembers.id, id));
  revalidatePath("/dashboard/team");
  revalidatePath("/about");
}

export async function deleteTeamMember(id: number) {
  await db.delete(teamMembers).where(eq(teamMembers.id, id));
  revalidatePath("/dashboard/team");
  revalidatePath("/about");
}

export async function toggleTeamMemberEnabled(id: number, enabled: boolean) {
  await db.update(teamMembers).set({ enabled }).where(eq(teamMembers.id, id));
  revalidatePath("/dashboard/team");
  revalidatePath("/about");
}

export async function reorderTeamMembers(orderedIds: number[]) {
  await Promise.all(
    orderedIds.map((id, index) =>
      db.update(teamMembers).set({ sortOrder: index }).where(eq(teamMembers.id, id))
    )
  );
  revalidatePath("/dashboard/team");
  revalidatePath("/about");
}
