import { asc, eq } from "drizzle-orm";
import { db } from "@/db";
import { products } from "@/db/schema";
import ProductsPageClient from "@/components/products/ProductsPageClient";

export default async function ProductsPage() {
  const items = await db
    .select()
    .from(products)
    .where(eq(products.enabled, true))
    .orderBy(asc(products.sortOrder));

  return <ProductsPageClient products={items} />;
}
