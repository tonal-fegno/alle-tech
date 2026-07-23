"use client";

import React from "react";
import { PRODUCT_DETAILS } from "@/data/productDetails";
import ProductsHeroSection from "@/components/products/ProductsHeroSection";
import ProductCard from "@/components/products/ProductCard";
import ProductsWhyChoose from "@/components/products/ProductsWhyChoose";
import CTABanner from "@/components/common/CTABanner";
import Eyebrow from "@/components/ui/Eyebrow";

export default function ProductsPage() {
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
              <Eyebrow variant="light">ENTERPRISE SOFTWARE SUITE</Eyebrow>
            </div>
            <h2 className="heading-2 text-ink mb-5 font-bold tracking-tight">
              Our Enterprise Software Products
            </h2>
            <p className="text-body-18 text-body-gray leading-relaxed font-normal max-w-2xl">
              Specialized platforms built to streamline field operations, multi-company compliance, digital logistics, customer engagement, and UAE e-invoicing.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-stretch gap-8 sm:gap-10">
            {PRODUCT_DETAILS.map((product, index) => (
              <div
                key={product.slug}
                className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-27px)] flex flex-col"
              >
                <ProductCard product={product} index={index} />
              </div>
            ))}
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
