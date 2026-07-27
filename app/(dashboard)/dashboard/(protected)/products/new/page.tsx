import type { Metadata } from "next";
import { ProductForm } from "@/components/dashboard/products/product-form";

export const metadata: Metadata = {
  title: "New Product",
};

export default function NewProductPage() {
  return <ProductForm />;
}
