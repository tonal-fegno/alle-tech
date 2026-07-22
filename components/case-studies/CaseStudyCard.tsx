"use client";

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
  const href = `${basePath}/${study.slug}`;
  // Alternate the image side for an editorial zig-zag layout.
  const reversed = index % 2 === 1;

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
      className="group grid grid-cols-1 items-stretch overflow-hidden rounded-section border border-border-gray/20 bg-white shadow-[0_6px_28px_-8px_rgba(0,11,34,0.08)] transition-colors duration-300 hover:border-border-gray/40 hover:shadow-[0_20px_45px_-12px_rgba(0,11,34,0.14)] md:grid-cols-2"
    >
      {/* Image panel */}
      {study.imageVisible && study.image && (
        <Link
          href={href}
          className={`relative block aspect-[16/10] overflow-hidden bg-bg-1 md:aspect-auto md:min-h-95 ${
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
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/10 to-transparent" />
        </Link>
      )}

      {/* Content panel */}
      <div
        className={`flex flex-col justify-center p-7 md:p-10 ${
          reversed ? "md:order-1" : "md:order-2"
        }`}
      >
        {study.categories.length > 0 && (
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {study.categories.map((category) => (
              <span
                key={category}
                className="inline-block rounded-full bg-bg-2 px-4 py-1.5 text-body-16 font-semibold text-primary"
              >
                {category}
              </span>
            ))}
          </div>
        )}

        <h3 className="heading-4 mb-3 transition-colors group-hover:text-primary">
          <Link href={href}>{study.title}</Link>
        </h3>

        <p className="mb-7 line-clamp-3 text-body-16 text-body-gray">
          {study.shortDescription}
        </p>

        <Link
          href={href}
          className="inline-flex w-fit items-center gap-2 text-body-16 font-bold text-ink transition-colors group-hover:text-primary"
        >
          <SwapLabel>Read case study</SwapLabel>
          <SwapArrow size={18} />
        </Link>
      </div>
    </motion.article>
  );
}
