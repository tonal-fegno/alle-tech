"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import type { z } from "zod";
import { db } from "@/db";
import { solutions } from "@/db/schema";
import { solutionSchema } from "@/lib/zod-schemas";

export type SolutionInput = z.infer<typeof solutionSchema>;

function revalidatePublicPages(slug?: string) {
  revalidatePath("/");
  revalidatePath("/solutions");
  revalidatePath("/industries");
  if (slug) revalidatePath(`/solutions/${slug}`);
}

export async function createSolution(input: SolutionInput) {
  const data = solutionSchema.parse(input);
  await db.insert(solutions).values(data);
  revalidatePath("/dashboard/solutions");
  revalidatePublicPages(data.slug);
}

export async function updateSolution(id: number, input: SolutionInput) {
  const data = solutionSchema.parse(input);
  await db.update(solutions).set(data).where(eq(solutions.id, id));
  revalidatePath("/dashboard/solutions");
  revalidatePublicPages(data.slug);
}

export async function deleteSolution(id: number) {
  await db.delete(solutions).where(eq(solutions.id, id));
  revalidatePath("/dashboard/solutions");
  revalidatePublicPages();
}

export async function toggleSolutionEnabled(id: number, enabled: boolean) {
  await db.update(solutions).set({ enabled }).where(eq(solutions.id, id));
  revalidatePath("/dashboard/solutions");
  revalidatePublicPages();
}

export async function reorderSolutions(orderedIds: number[]) {
  await Promise.all(
    orderedIds.map((id, index) =>
      db.update(solutions).set({ sortOrder: index }).where(eq(solutions.id, id))
    )
  );
  revalidatePath("/dashboard/solutions");
  revalidatePublicPages();
}
