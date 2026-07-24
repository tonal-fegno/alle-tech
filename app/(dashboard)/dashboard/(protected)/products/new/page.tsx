import type { Metadata } from "next";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { ProductForm } from "@/components/dashboard/products/product-form";

export const metadata: Metadata = {
  title: "New Product",
};

export default function NewProductPage() {
  return (
    <div className="space-y-6 p-6 md:p-8">
      <DashboardPageHeader title="New Product" />
      <ProductForm />
    </div>
  );
}
