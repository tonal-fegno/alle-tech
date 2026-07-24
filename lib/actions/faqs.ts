"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { db } from "@/db";
import { faqs } from "@/db/schema";

const faqSchema = z.object({
  question: z.string().min(1, "Question is required"),
  answer: z.string().min(1, "Answer is required"),
});

export type FaqInput = z.infer<typeof faqSchema>;

function revalidatePublicPages() {
  revalidatePath("/");
  revalidatePath("/services");
  revalidatePath("/pricing");
}

export async function createFaq(input: FaqInput) {
  const data = faqSchema.parse(input);
  await db.insert(faqs).values(data);
  revalidatePath("/dashboard/faqs");
  revalidatePublicPages();
}

export async function updateFaq(id: number, input: FaqInput) {
  const data = faqSchema.parse(input);
  await db.update(faqs).set(data).where(eq(faqs.id, id));
  revalidatePath("/dashboard/faqs");
  revalidatePublicPages();
}

export async function deleteFaq(id: number) {
  await db.delete(faqs).where(eq(faqs.id, id));
  revalidatePath("/dashboard/faqs");
  revalidatePublicPages();
}

export async function toggleFaqEnabled(id: number, enabled: boolean) {
  await db.update(faqs).set({ enabled }).where(eq(faqs.id, id));
  revalidatePath("/dashboard/faqs");
  revalidatePublicPages();
}

export async function reorderFaqs(orderedIds: number[]) {
  await Promise.all(
    orderedIds.map((id, index) => db.update(faqs).set({ sortOrder: index }).where(eq(faqs.id, id)))
  );
  revalidatePath("/dashboard/faqs");
  revalidatePublicPages();
}
