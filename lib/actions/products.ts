"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import type { z } from "zod";
import { db } from "@/db";
import { products } from "@/db/schema";
import { productSchema } from "@/lib/zod-schemas";

export type ProductInput = z.infer<typeof productSchema>;

function revalidatePublicPages(slug?: string) {
  revalidatePath("/");
  revalidatePath("/products");
  revalidatePath("/industries");
  if (slug) revalidatePath(`/products/${slug}`);
}

export async function createProduct(input: ProductInput) {
  const data = productSchema.parse(input);
  await db.insert(products).values(data);
  revalidatePath("/dashboard/products");
  revalidatePublicPages(data.slug);
}

export async function updateProduct(id: number, input: ProductInput) {
  const data = productSchema.parse(input);
  await db.update(products).set(data).where(eq(products.id, id));
  revalidatePath("/dashboard/products");
  revalidatePublicPages(data.slug);
}

export async function deleteProduct(id: number) {
  await db.delete(products).where(eq(products.id, id));
  revalidatePath("/dashboard/products");
  revalidatePublicPages();
}

export async function toggleProductEnabled(id: number, enabled: boolean) {
  await db.update(products).set({ enabled }).where(eq(products.id, id));
  revalidatePath("/dashboard/products");
  revalidatePublicPages();
}

export async function reorderProducts(orderedIds: number[]) {
  await Promise.all(
    orderedIds.map((id, index) =>
      db.update(products).set({ sortOrder: index }).where(eq(products.id, id))
    )
  );
  revalidatePath("/dashboard/products");
  revalidatePublicPages();
}
