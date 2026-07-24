import { asc } from "drizzle-orm";
import type { Metadata } from "next";
import { db } from "@/db";
import { faqs } from "@/db/schema";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { FaqsTable } from "@/components/dashboard/faqs/faqs-table";

export const metadata: Metadata = {
  title: "FAQs",
};

export const dynamic = "force-dynamic";

export default async function FaqsPage() {
  const items = await db.select().from(faqs).orderBy(asc(faqs.sortOrder));

  return (
    <div className="space-y-6 p-6 md:p-8">
      <DashboardPageHeader title="FAQs" description="The site-wide FAQ list shown on the home page." />
      <FaqsTable initialItems={items} />
    </div>
  );
}
