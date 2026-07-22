"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SwapLabel } from "@/components/common/HoverSwap";

interface CTABannerProps {
  label?: string;
  heading: string;
  subtitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  label = "LET'S GET STARTED",
  heading,
  subtitle,
  ctaHref = "/contact",
  ctaLabel = "Contact Us",
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section className="px-4 sm:px-6 pt-16 md:pt-20 mb-12 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-7xl mx-auto rounded-[32px] overflow-hidden px-8 md:px-14 py-14 md:py-20"
        style={{ backgroundColor: "#1E293B" }}
      >
        {/* Decorative glow */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-7 text-left">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4 block">
              {label}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.12] mb-5">
              {heading}
            </h2>
            {subtitle && (
              <p className="text-neutral-400 text-sm md:text-[18px] leading-relaxed font-medium max-w-xl">
                {subtitle}
              </p>
            )}
          </div>

          {/* Right: Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-4 items-start lg:items-end w-full">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-full max-w-xs"
            >
              <Link
                href={ctaHref}
                className="group flex items-center justify-between gap-3 pl-7 pr-3 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-sm tracking-wide shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_-5px_rgba(59,130,246,0.7)] transition-all duration-300"
              >
                <SwapLabel>{ctaLabel}</SwapLabel>
                <div className="w-8 h-8 rounded-xl bg-white/20 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 group-hover:translate-x-0.5 shrink-0">
                  <ArrowUpRight size={16} />
                </div>
              </Link>
            </motion.div>

            {secondaryLabel && secondaryHref && (
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-full max-w-xs"
              >
                <Link
                  href={secondaryHref}
                  className="group flex items-center justify-between gap-3 pl-7 pr-3 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold text-sm tracking-wide border border-white/20 hover:border-white/40 shadow-[0_0_20px_-5px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.25)] transition-all duration-300"
                >
                  <SwapLabel>{secondaryLabel}</SwapLabel>
                  <div className="w-8 h-8 rounded-xl bg-white/10 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:translate-x-0.5 shrink-0">
                    <ArrowUpRight size={16} />
                  </div>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
