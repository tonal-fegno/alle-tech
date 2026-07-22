"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/lib/data";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import { SwapArrow, SwapLabel } from "@/components/common/HoverSwap";

const PAGE_SIZE = 3;

export default function CaseStudyListGrid({
  caseStudies,
}: {
  caseStudies: CaseStudy[];
}) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visibleStudies = caseStudies.slice(0, visibleCount);
  const hasMore = caseStudies.length > visibleCount;

  return (
    <>
      <div className="flex flex-col gap-8">
        {visibleStudies.map((study, index) => (
          <CaseStudyCard key={study.slug} study={study} index={index} />
        ))}
      </div>

      {hasMore && (
        <div className="mb-6 mt-12 flex justify-center">
          <motion.button
            onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="group inline-flex cursor-pointer items-center gap-3.5 rounded-full border border-transparent bg-primary py-3 pl-7 pr-3 text-sm font-bold tracking-wide text-white shadow-lg shadow-primary/15 transition-colors hover:bg-primary/90"
          >
            <SwapLabel>Load More</SwapLabel>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary">
              <SwapArrow size={16} />
            </span>
          </motion.button>
        </div>
      )}
    </>
  );
}
