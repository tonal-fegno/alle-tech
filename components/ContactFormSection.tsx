import { asc, eq } from "drizzle-orm";
import { db } from "@/db";
import { solutions } from "@/db/schema";
import ContactFormClient from "@/components/ContactFormClient";

export default async function ContactFormSection() {
  const items = await db
    .select()
    .from(solutions)
    .where(eq(solutions.enabled, true))
    .orderBy(asc(solutions.sortOrder));

  return <ContactFormClient solutions={items} />;
}
