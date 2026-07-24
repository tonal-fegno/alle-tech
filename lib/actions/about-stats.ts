"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { db } from "@/db";
import { aboutStats } from "@/db/schema";

const aboutStatSchema = z.object({
  topLabel: z.string().min(1, "Top label is required"),
  number: z.string().min(1, "Number is required"),
  bottomLabel: z.string().min(1, "Bottom label is required"),
});

export type AboutStatInput = z.infer<typeof aboutStatSchema>;

export async function createAboutStat(input: AboutStatInput) {
  const data = aboutStatSchema.parse(input);
  await db.insert(aboutStats).values(data);
  revalidatePath("/dashboard/about-stats");
  revalidatePath("/");
}

export async function updateAboutStat(id: number, input: AboutStatInput) {
  const data = aboutStatSchema.parse(input);
  await db.update(aboutStats).set(data).where(eq(aboutStats.id, id));
  revalidatePath("/dashboard/about-stats");
  revalidatePath("/");
}

export async function deleteAboutStat(id: number) {
  await db.delete(aboutStats).where(eq(aboutStats.id, id));
  revalidatePath("/dashboard/about-stats");
  revalidatePath("/");
}

export async function toggleAboutStatEnabled(id: number, enabled: boolean) {
  await db.update(aboutStats).set({ enabled }).where(eq(aboutStats.id, id));
  revalidatePath("/dashboard/about-stats");
  revalidatePath("/");
}

export async function reorderAboutStats(orderedIds: number[]) {
  await Promise.all(
    orderedIds.map((id, index) =>
      db.update(aboutStats).set({ sortOrder: index }).where(eq(aboutStats.id, id))
    )
  );
  revalidatePath("/dashboard/about-stats");
  revalidatePath("/");
}
