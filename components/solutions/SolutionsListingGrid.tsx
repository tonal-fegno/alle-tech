"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SolutionCard from "@/components/solutions/SolutionCard";
import UIButton from "@/components/ui-button";
import type { solutions } from "@/db/schema";

type Solution = typeof solutions.$inferSelect;

const MotionUIButton = motion(UIButton);

export default function SolutionsListingGrid({ solutions }: { solutions: Solution[] }) {
  const [visibleCount, setVisibleCount] = useState(6);

  const visibleSolutions = solutions.slice(0, visibleCount);
  const hasMore = solutions.length > visibleCount;

  return (
    <main className="container-main section-padding">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {visibleSolutions.map((solution, index) => (
          <SolutionCard key={solution.id} solution={solution} index={index} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-12 mb-6">
          <MotionUIButton
            onClick={() => setVisibleCount((prev) => prev + 6)}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            Load More
          </MotionUIButton>
        </div>
      )}
    </main>
  );
}
