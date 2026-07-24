import { asc, eq } from "drizzle-orm";
import { db } from "@/db";
import { products } from "@/db/schema";
import ProductsSliderCarousel from "@/components/home/ProductsSliderCarousel";

export default async function ProductsSliderSection() {
  const items = await db
    .select()
    .from(products)
    .where(eq(products.enabled, true))
    .orderBy(asc(products.sortOrder));

  return <ProductsSliderCarousel products={items} />;
}
