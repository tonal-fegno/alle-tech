"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { ProductDetail } from "@/data/productDetails";

interface ProductCardProps {
  product: ProductDetail;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: (index % 3) * 0.07,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      viewport={{ once: true, margin: "-30px" }}
      className="flex flex-col justify-between bg-white rounded-3xl border border-primary/30 p-6 sm:p-7 shadow-[0_16px_40px_-8px_rgba(44,143,206,0.12)] h-full relative"
    >
      <div>
        {/* Product Title */}
        <h3 className="text-2xl font-extrabold text-primary tracking-tight mb-5">
          {product.title}
        </h3>

        {/* Features Bullet List */}
        <ul className="flex flex-col gap-3 mb-6">
          {product.conceptBullets.slice(0, 4).map((bullet, i) => (
            <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-700 font-medium">
              <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Check size={11} />
              </span>
              <span className="truncate">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Clean Bottom Action Link */}
      <div className="pt-4 border-t border-neutral-100">
        <Link
          href={`/products/${product.slug}`}
          className="flex items-center justify-between w-full text-xs sm:text-sm font-bold text-primary"
        >
          <span>Learn Details</span>
          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
            <ArrowRight size={14} />
          </div>
        </Link>
      </div>
    </motion.article>
  );
}
