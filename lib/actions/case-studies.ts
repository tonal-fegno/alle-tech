"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import type { z } from "zod";
import { db } from "@/db";
import { caseStudies } from "@/db/schema";
import { caseStudySchema } from "@/lib/zod-schemas";

export type CaseStudyInput = z.infer<typeof caseStudySchema>;

function revalidatePublicPages(slug?: string) {
  revalidatePath("/case-studies");
  if (slug) revalidatePath(`/case-studies/${slug}`);
}

export async function createCaseStudy(input: CaseStudyInput) {
  const data = caseStudySchema.parse(input);
  await db.insert(caseStudies).values(data);
  revalidatePath("/dashboard/case-studies");
  revalidatePublicPages(data.slug);
}

export async function updateCaseStudy(id: number, input: CaseStudyInput) {
  const data = caseStudySchema.parse(input);
  await db.update(caseStudies).set(data).where(eq(caseStudies.id, id));
  revalidatePath("/dashboard/case-studies");
  revalidatePublicPages(data.slug);
}

export async function deleteCaseStudy(id: number) {
  await db.delete(caseStudies).where(eq(caseStudies.id, id));
  revalidatePath("/dashboard/case-studies");
  revalidatePublicPages();
}

export async function toggleCaseStudyEnabled(id: number, enabled: boolean) {
  await db.update(caseStudies).set({ enabled }).where(eq(caseStudies.id, id));
  revalidatePath("/dashboard/case-studies");
  revalidatePublicPages();
}
