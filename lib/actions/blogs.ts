"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import type { z } from "zod";
import { db } from "@/db";
import { blogs } from "@/db/schema";
import { blogSchema } from "@/lib/zod-schemas";

export type BlogInput = z.infer<typeof blogSchema>;

function revalidatePublicPages(slug?: string) {
  revalidatePath("/blogs");
  if (slug) revalidatePath(`/blogs/${slug}`);
}

export async function createBlog(input: BlogInput) {
  const data = blogSchema.parse(input);
  await db.insert(blogs).values(data);
  revalidatePath("/dashboard/blogs");
  revalidatePublicPages(data.slug);
}

export async function updateBlog(id: number, input: BlogInput) {
  const data = blogSchema.parse(input);
  await db.update(blogs).set(data).where(eq(blogs.id, id));
  revalidatePath("/dashboard/blogs");
  revalidatePublicPages(data.slug);
}

export async function deleteBlog(id: number) {
  await db.delete(blogs).where(eq(blogs.id, id));
  revalidatePath("/dashboard/blogs");
  revalidatePublicPages();
}

export async function toggleBlogEnabled(id: number, enabled: boolean) {
  await db.update(blogs).set({ enabled }).where(eq(blogs.id, id));
  revalidatePath("/dashboard/blogs");
  revalidatePublicPages();
}
