import { eq } from "drizzle-orm";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { products } from "@/db/schema";
import ProductDetailLayout from "@/components/products/ProductDetailLayout";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const [product] = await db.select().from(products).where(eq(products.slug, slug));
  return { title: product?.title ?? "Product" };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const [product] = await db.select().from(products).where(eq(products.slug, slug));

  if (!product || !product.enabled) notFound();

  return <ProductDetailLayout product={product} />;
}
