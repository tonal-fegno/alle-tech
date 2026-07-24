import { asc, eq } from "drizzle-orm";
import { db } from "@/db";
import { industries } from "@/db/schema";
import IndustriesCarousel from "@/components/home/IndustriesCarousel";

export default async function IndustriesSection() {
  const items = await db
    .select()
    .from(industries)
    .where(eq(industries.enabled, true))
    .orderBy(asc(industries.sortOrder));

  if (items.length === 0) return null;

  return <IndustriesCarousel industries={items} />;
}
