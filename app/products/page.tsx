"use client";

import React from "react";
import { PRODUCT_DETAILS } from "@/data/productDetails";
import ProductsHeroSection from "@/components/products/ProductsHeroSection";
import ProductCard from "@/components/products/ProductCard";
import ProductsWhyChoose from "@/components/products/ProductsWhyChoose";
import CTABanner from "@/components/common/CTABanner";
import Eyebrow from "@/components/ui/Eyebrow";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-neutral-900 font-sans antialiased overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <ProductsHeroSection />

      {/* 2. Primary Products Listing Grid */}
      <main className="container-main section-padding py-16 md:py-24">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="mb-3">
            <Eyebrow variant="light">ENTERPRISE SOFTWARE SUITE</Eyebrow>
          </div>
          <h2 className="heading-2 mb-4">
            Our Enterprise Software Products
          </h2>
          <p className="text-body-18 text-body-gray leading-relaxed font-normal">
            Specialized platforms built to streamline field operations, multi-company compliance, digital logistics, customer engagement, and UAE e-invoicing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {PRODUCT_DETAILS.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
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
  );
}
