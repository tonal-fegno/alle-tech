"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/lib/data";
import { SwapArrow, SwapLabel } from "@/components/common/HoverSwap";

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
  /** Route prefix for the case study link (e.g. "/case-studies"). */
  basePath?: string;
}

export default function CaseStudyCard({
  study,
  index,
  basePath = "/case-studies",
}: CaseStudyCardProps) {
  const targetId = study.id || study.slug;
  const href = `${basePath}/${targetId}`;
  // Alternate the image side for an editorial zig-zag layout.
  const reversed = index % 2 === 1;
  const categoriesList = study.categories || (study.category ? [study.category] : []);
  const descriptionText = study.description || study.shortDescription;

  return (
    <motion.article
      initial={{ opacity: 0, x: reversed ? 50 : -50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      whileHover={{
        y: -4,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true, margin: "-40px" }}
      className="group grid grid-cols-1 items-stretch overflow-hidden rounded-[28px] border border-neutral-100/70 bg-white shadow-[0_6px_28px_-8px_rgba(0,0,0,0.05)] transition-colors duration-300 hover:border-neutral-200/70 hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.10)] md:grid-cols-2"
    >
      {/* Image panel */}
      {study.image && (
        <Link
          href={href}
          className={`relative block aspect-[16/10] overflow-hidden bg-neutral-50 md:aspect-auto md:min-h-95 ${
            reversed ? "md:order-2" : "md:order-1"
          }`}
        >
          <Image
            src={encodeURI(study.image)}
            alt={study.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </Link>
      )}

      {/* Content panel */}
      <div
        className={`flex flex-col justify-center p-7 md:p-10 ${
          reversed ? "md:order-1" : "md:order-2"
        }`}
      >
        {categoriesList.length > 0 && (
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {categoriesList.map((cat) => (
              <span
                key={cat}
                className="inline-block rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary"
              >
                {cat}
              </span>
            ))}
          </div>
        )}

        <h3 className="mb-3 text-xl font-semibold leading-snug tracking-tight text-neutral-900 transition-colors group-hover:text-primary md:text-[28px]">
          <Link href={href}>{study.title}</Link>
        </h3>

        <p className="mb-7 line-clamp-3 text-[15px] font-normal leading-relaxed text-neutral-600 md:text-base">
          {descriptionText}
        </p>

        <Link
          href={href}
          className="inline-flex w-fit items-center gap-2 text-base font-bold text-neutral-900 transition-colors group-hover:text-primary"
        >
          <SwapLabel>Read case study</SwapLabel>
          <SwapArrow size={18} />
        </Link>
      </div>
    </motion.article>
  );
}
