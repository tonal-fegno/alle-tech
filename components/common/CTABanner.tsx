"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SwapLabel } from "@/components/common/HoverSwap";

interface CTABannerProps {
  heading: string;
  subtitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  heading,
  subtitle,
  ctaHref = "/contact",
  ctaLabel = "Contact Us",
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section className="py-16 md:py-24 px-6 bg-brand-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.15),transparent_45%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-4">
          {heading}
        </h2>
        {subtitle && (
          <p className="text-white/80 text-base md:text-lg leading-relaxed font-medium mb-10">
            {subtitle}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <Link
            href={ctaHref}
            className="group inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-xl px-7 py-3.5 font-bold text-sm transition-colors"
          >
            <SwapLabel>{ctaLabel}</SwapLabel>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="group inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 text-white rounded-xl px-7 py-3.5 font-bold text-sm transition-colors"
            >
              <SwapLabel>{secondaryLabel}</SwapLabel>
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  );
}
