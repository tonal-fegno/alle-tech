"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { db } from "@/db";
import { testimonials } from "@/db/schema";

const testimonialSchema = z.object({
  quote: z.string().min(1, "Quote is required"),
  author: z.string().min(1, "Author is required"),
  role: z.string().min(1, "Role is required"),
  avatar: z.string().min(1, "Avatar image is required"),
});

export type TestimonialInput = z.infer<typeof testimonialSchema>;

export async function createTestimonial(input: TestimonialInput) {
  const data = testimonialSchema.parse(input);
  await db.insert(testimonials).values(data);
  revalidatePath("/dashboard/testimonials");
  revalidatePath("/");
}

export async function updateTestimonial(id: number, input: TestimonialInput) {
  const data = testimonialSchema.parse(input);
  await db.update(testimonials).set(data).where(eq(testimonials.id, id));
  revalidatePath("/dashboard/testimonials");
  revalidatePath("/");
}

export async function deleteTestimonial(id: number) {
  await db.delete(testimonials).where(eq(testimonials.id, id));
  revalidatePath("/dashboard/testimonials");
  revalidatePath("/");
}

export async function toggleTestimonialEnabled(id: number, enabled: boolean) {
  await db.update(testimonials).set({ enabled }).where(eq(testimonials.id, id));
  revalidatePath("/dashboard/testimonials");
  revalidatePath("/");
}

export async function reorderTestimonials(orderedIds: number[]) {
  await Promise.all(
    orderedIds.map((id, index) =>
      db.update(testimonials).set({ sortOrder: index }).where(eq(testimonials.id, id))
    )
  );
  revalidatePath("/dashboard/testimonials");
  revalidatePath("/");
}
