"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { PRODUCT_DETAILS } from "@/data/productDetails";
import ProductCard from "@/components/products/ProductCard";
import CTABanner from "@/components/common/CTABanner";
import Eyebrow from "@/components/ui/Eyebrow";

export default function ProductsPage() {
  const { scrollY } = useScroll();
  const bgScaleRaw = useTransform(scrollY, [0, 600], [1, 1.12]);
  const bgScale = useSpring(bgScaleRaw, { stiffness: 45, damping: 20, mass: 0.2 });
  const bgYRaw = useTransform(scrollY, [0, 600], [0, 60]);
  const bgY = useSpring(bgYRaw, { stiffness: 45, damping: 20, mass: 0.2 });

  return (
    <div className="min-h-screen bg-brand-bg text-neutral-900 font-sans antialiased overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[58vh] pt-36 pb-24 px-4 sm:px-6 bg-brand-navy text-white flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Full-bleed background image with scale/y offset */}
        <motion.div
          className="absolute inset-0"
          style={{ scale: bgScale, y: bgY }}
        >
          <Image
            src="/assets/images/solutions/hero.png"
            alt="Enterprise Software Products"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        {/* Navy/dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark/95 via-brand-navy-dark/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-dark/70 via-transparent to-brand-navy-dark/85" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Eyebrow variant="dark">Our Products</Eyebrow>
          </motion.div>

          <h1 className="heading-1 !text-white tracking-tight max-w-4xl mb-6 flex flex-wrap justify-center !font-semibold">
            {"Intelligent software built for enterprise scale"
              .split(" ")
              .map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 1.1,
                    delay: 0.12 + idx * 0.035,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-18 text-white/70 max-w-2xl"
          >
            Empower your operations with specialized tools designed to streamline multi-company compliance, field productivity, logistics tracking, and customer engagement.
          </motion.p>
        </div>
      </section>

      {/* 2. Products Grid */}
      <main className="container-main section-padding py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCT_DETAILS.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      </main>

      {/* 3. Promo Banner */}
      <CTABanner
        heading="Find the Right Product for Your Needs"
        subtitle="Schedule a consultation with our system engineers to match our modular products with your operational challenges."
        secondaryLabel="Schedule a Call"
        secondaryHref="/contact"
      />
    </div>
  );
}
