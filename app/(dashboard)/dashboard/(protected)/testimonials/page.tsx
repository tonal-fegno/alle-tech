import { asc } from "drizzle-orm";
import type { Metadata } from "next";
import { db } from "@/db";
import { testimonials } from "@/db/schema";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { TestimonialsTable } from "@/components/dashboard/testimonials/testimonials-table";

export const metadata: Metadata = {
  title: "Testimonials",
};

export const dynamic = "force-dynamic";

export default async function TestimonialsPage() {
  const items = await db.select().from(testimonials).orderBy(asc(testimonials.sortOrder));

  return (
    <div className="space-y-6 p-6 md:p-8">
      <DashboardPageHeader title="Testimonials" description="Client testimonials shown on the home page." />
      <TestimonialsTable initialItems={items} />
    </div>
  );
}
