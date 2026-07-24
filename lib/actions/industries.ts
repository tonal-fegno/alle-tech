"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { db } from "@/db";
import { industries } from "@/db/schema";

const industrySchema = z.object({
  slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers and hyphens only"),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  image: z.string().min(1, "Image is required"),
  typicalSolutions: z.array(z.string()),
});

export type IndustryInput = z.infer<typeof industrySchema>;

function revalidatePublicPages() {
  revalidatePath("/");
  revalidatePath("/industries");
}

export async function createIndustry(input: IndustryInput) {
  const data = industrySchema.parse(input);
  await db.insert(industries).values(data);
  revalidatePath("/dashboard/industries");
  revalidatePublicPages();
}

export async function updateIndustry(id: number, input: IndustryInput) {
  const data = industrySchema.parse(input);
  await db.update(industries).set(data).where(eq(industries.id, id));
  revalidatePath("/dashboard/industries");
  revalidatePublicPages();
  revalidatePath(`/industries/${data.slug}`);
}

export async function deleteIndustry(id: number) {
  await db.delete(industries).where(eq(industries.id, id));
  revalidatePath("/dashboard/industries");
  revalidatePublicPages();
}

export async function toggleIndustryEnabled(id: number, enabled: boolean) {
  await db.update(industries).set({ enabled }).where(eq(industries.id, id));
  revalidatePath("/dashboard/industries");
  revalidatePublicPages();
}

export async function reorderIndustries(orderedIds: number[]) {
  await Promise.all(
    orderedIds.map((id, index) =>
      db.update(industries).set({ sortOrder: index }).where(eq(industries.id, id))
    )
  );
  revalidatePath("/dashboard/industries");
  revalidatePublicPages();
}
