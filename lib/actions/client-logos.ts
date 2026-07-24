"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { db } from "@/db";
import { clientLogos } from "@/db/schema";

const clientLogoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  image: z.string().min(1, "Image is required"),
});

export type ClientLogoInput = z.infer<typeof clientLogoSchema>;

function revalidatePublicPages() {
  revalidatePath("/");
}

export async function createClientLogo(input: ClientLogoInput) {
  const data = clientLogoSchema.parse(input);
  await db.insert(clientLogos).values(data);
  revalidatePath("/dashboard/client-logos");
  revalidatePublicPages();
}

export async function updateClientLogo(id: number, input: ClientLogoInput) {
  const data = clientLogoSchema.parse(input);
  await db.update(clientLogos).set(data).where(eq(clientLogos.id, id));
  revalidatePath("/dashboard/client-logos");
  revalidatePublicPages();
}

export async function deleteClientLogo(id: number) {
  await db.delete(clientLogos).where(eq(clientLogos.id, id));
  revalidatePath("/dashboard/client-logos");
  revalidatePublicPages();
}

export async function toggleClientLogoEnabled(id: number, enabled: boolean) {
  await db.update(clientLogos).set({ enabled }).where(eq(clientLogos.id, id));
  revalidatePath("/dashboard/client-logos");
  revalidatePublicPages();
}

export async function reorderClientLogos(orderedIds: number[]) {
  await Promise.all(
    orderedIds.map((id, index) =>
      db.update(clientLogos).set({ sortOrder: index }).where(eq(clientLogos.id, id))
    )
  );
  revalidatePath("/dashboard/client-logos");
  revalidatePublicPages();
}
