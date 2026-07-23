"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PRODUCT_DETAILS } from "@/data/productDetails";
import ProductDetailLayout from "@/components/products/ProductDetailLayout";
import { SwapLabel } from "@/components/common/HoverSwap";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = (params?.slug as string) ?? "";
  const product = PRODUCT_DETAILS.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-brand-bg flex flex-col items-center justify-center text-center px-6">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">404</p>
        <h1 className="text-3xl font-semibold text-ink mb-3">Product not found</h1>
        <p className="text-body-gray max-w-sm mb-8">
          The product you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <Link
          href="/products"
          className="group inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-xl px-6 py-3.5 font-bold text-sm transition-colors"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          <SwapLabel>Back to Products</SwapLabel>
        </Link>
      </div>
    );
  }

  return <ProductDetailLayout key={product.slug} product={product} />;
}
