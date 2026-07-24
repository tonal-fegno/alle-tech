import { eq } from "drizzle-orm";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { products } from "@/db/schema";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { ProductForm } from "@/components/dashboard/products/product-form";

export const metadata: Metadata = {
  title: "Edit Product",
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditProductPage({ params }: PageProps) {
  const { id } = await params;
  const [product] = await db.select().from(products).where(eq(products.id, Number(id)));

  if (!product) notFound();

  return (
    <div className="space-y-6 p-6 md:p-8">
      <DashboardPageHeader title={`Edit: ${product.title}`} />
      <ProductForm
        productId={product.id}
        defaultValues={{
          ...product,
          logo: product.logo ?? "",
          cardBg: product.cardBg ?? "",
          websiteUrl: product.websiteUrl ?? "",
          displayUrl: product.displayUrl ?? "",
          heroSubtitle: product.heroSubtitle ?? "",
          heroImage: product.heroImage ?? "",
          heroDesc: product.heroDesc ?? "",
          accentColor: product.accentColor ?? "",
          accentGradient: product.accentGradient ?? "",
          darkBgGradient: product.darkBgGradient ?? "",
          conceptTitle: product.conceptTitle ?? "",
          conceptSubtitle: product.conceptSubtitle ?? "",
          conceptDesc: product.conceptDesc ?? "",
          challengesTitle: product.challengesTitle ?? "",
          outcomesTitle: product.outcomesTitle ?? "",
          outcomesDesc: product.outcomesDesc ?? "",
          aiTitle: product.aiTitle ?? "",
          aiDesc: product.aiDesc ?? "",
          modulesTitle: product.modulesTitle ?? "",
          modulesDesc: product.modulesDesc ?? "",
          industriesTitle: product.industriesTitle ?? "",
          industriesDesc: product.industriesDesc ?? "",
          integrationsTitle: product.integrationsTitle ?? "",
          integrationsDesc: product.integrationsDesc ?? "",
          whyTitle: product.whyTitle ?? "",
          whyDesc: product.whyDesc ?? "",
          ctaTitle: product.ctaTitle ?? "",
          ctaSubtitle: product.ctaSubtitle ?? "",
        }}
      />
    </div>
  );
}
