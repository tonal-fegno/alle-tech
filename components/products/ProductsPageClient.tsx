"use client";

import React from "react";
import ProductsHeroSection from "@/components/products/ProductsHeroSection";
import ProductCard from "@/components/products/ProductCard";
import ProductsWhyChoose from "@/components/products/ProductsWhyChoose";
import CTABanner from "@/components/common/CTABanner";
import Badge from "@/components/badge";
import type { products } from "@/db/schema";

type Product = typeof products.$inferSelect;

export default function ProductsPageClient({ products }: { products: Product[] }) {
  const productsListRef = React.useRef<HTMLDivElement>(null);

  const handleExploreClick = () => {
    productsListRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* 1. Hero Section */}
      <ProductsHeroSection onExploreClick={handleExploreClick} />

      <div className="bg-[#f8fafc] text-neutral-900 relative overflow-hidden">
        {/* 2. Primary Products Listing Grid */}
        <main ref={productsListRef} className="container-main section-padding py-20 md:py-28 relative z-10 scroll-mt-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <div className="mb-4">
              <Badge text="ENTERPRISE SOFTWARE SUITE" variant="light" />
            </div>
            <h2 className="heading-2 text-ink mb-5 font-bold tracking-tight">
              Our Enterprise Software Products
            </h2>
            <p className="text-body-18 text-body-gray leading-relaxed font-normal max-w-2xl">
              Specialized platforms built to streamline field operations, multi-company compliance, digital logistics, customer engagement, and UAE e-invoicing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => {
              const isLastOdd =
                index === products.length - 1 && products.length % 2 !== 0;

              return (
                <div
                  key={product.slug}
                  className={
                    isLastOdd
                      ? "md:col-span-2 lg:col-span-1 md:max-w-[calc(50%-12px)] md:mx-auto lg:max-w-none w-full"
                      : "w-full"
                  }
                >
                  <ProductCard product={product} index={index} />
                </div>
              );
            })}
          </div>
        </main>

        {/* 3. Platform Architecture Pillars */}
        <ProductsWhyChoose />

        {/* 4. Enterprise Consultation Call to Action */}
        <CTABanner
          label="EVALUATE FOR YOUR ENTERPRISE"
          heading="Transform Your ERP Operations Today"
          subtitle="Schedule a consultation with our system engineers to match our modular software products with your operational challenges."
          ctaLabel="Schedule Product Consultation"
          ctaHref="/contact"
          secondaryLabel="Talk to System Specialist"
          secondaryHref="/contact"
        />
      </div>
    </>
  );
}
