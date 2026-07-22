"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { SwapLabel, SwapArrow } from "@/components/common/HoverSwap";

interface ProductCardProps {
  product: {
    slug: string;
    title: string;
    tagline: string;
    accentColor: string;
    conceptDesc: string;
    conceptBullets: string[];
  };
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Animation states
  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          delay: (index % 5) * 0.08,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
      viewport={{ once: true, margin: "-40px" }}
      className="group flex flex-col bg-white rounded-4xl border border-neutral-100/70 p-6 md:p-8 shadow-[0_6px_28px_-8px_rgba(0,0,0,0.05)] hover:shadow-[0_22px_48px_-12px_rgba(0,0,0,0.12)] hover:border-neutral-200/70 transition-all duration-300 h-full relative overflow-hidden"
    >
      {/* Decorative top gradient glow */}
      <span
        className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${product.accentColor}`}
      />

      <div className="flex flex-col h-full z-10">
        {/* Badge & Title */}
        <div className="flex items-center justify-between mb-4">
          <span className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${product.accentColor} bg-clip-text text-transparent`}>
            Enterprise Product
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>

        <h3 className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">
          {product.title}
        </h3>
        
        <p className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">
          {product.tagline}
        </p>

        {/* Description */}
        <p className="text-sm md:text-base text-body-gray leading-relaxed font-normal mb-6">
          {product.conceptDesc.length > 165 
            ? `${product.conceptDesc.substring(0, 160)}...` 
            : product.conceptDesc}
        </p>

        {/* Highlights / Features List */}
        <div className="mt-2 mb-8 flex-grow">
          <p className="text-xs font-bold text-neutral-800 uppercase tracking-widest mb-3">Key Solutions:</p>
          <ul className="flex flex-col gap-2.5">
            {product.conceptBullets.slice(0, 4).map((bullet, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-500 font-medium leading-tight">
                <span className={`w-5 h-5 rounded-full bg-neutral-50 flex items-center justify-center border border-neutral-100 mt-0.5 shrink-0`}>
                  <Check size={12} className="text-primary" />
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Button Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto pt-4 border-t border-neutral-100">
          <Link
            href={`/products/${product.slug}`}
            className="group/btn inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-2xl py-3 px-4 text-sm font-bold transition-all duration-300 hover:shadow-md cursor-pointer text-center"
          >
            <span>Learn More</span>
            <ArrowRight size={15} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-200 rounded-2xl py-3 px-4 text-sm font-bold transition-all duration-300 cursor-pointer text-center"
          >
            Request Demo
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
