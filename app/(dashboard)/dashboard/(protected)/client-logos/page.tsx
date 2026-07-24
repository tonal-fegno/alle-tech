import { asc } from "drizzle-orm";
import type { Metadata } from "next";
import { db } from "@/db";
import { clientLogos } from "@/db/schema";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { ClientLogosTable } from "@/components/dashboard/client-logos/client-logos-table";

export const metadata: Metadata = {
  title: "Client Logos",
};

export const dynamic = "force-dynamic";

export default async function ClientLogosPage() {
  const items = await db.select().from(clientLogos).orderBy(asc(clientLogos.sortOrder));

  return (
    <div className="space-y-6 p-6 md:p-8">
      <DashboardPageHeader
        title="Client Logos"
        description="Logos shown in the home page brand ticker."
      />
      <ClientLogosTable initialItems={items} />
    </div>
  );
}
