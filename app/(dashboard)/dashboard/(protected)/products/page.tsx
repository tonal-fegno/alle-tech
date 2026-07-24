import { asc } from "drizzle-orm";
import type { Metadata } from "next";
import { db } from "@/db";
import { products } from "@/db/schema";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { ProductsTable } from "@/components/dashboard/products/products-table";

export const metadata: Metadata = {
  title: "Products",
};

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const items = await db.select().from(products).orderBy(asc(products.sortOrder));

  return (
    <div className="space-y-6 p-6 md:p-8">
      <DashboardPageHeader title="Products" description="Manage product listing cards and detail pages." />
      <ProductsTable initialItems={items} />
    </div>
  );
}
