"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Blog } from "@/lib/data";
import BlogCard from "@/components/BlogCard";
import { SwapArrow, SwapLabel } from "@/components/common/HoverSwap";

const PAGE_SIZE = 3;

export default function BlogListGrid({ blogs }: { blogs: Blog[] }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visibleBlogs = useMemo(
    () => blogs.slice(0, visibleCount),
    [blogs, visibleCount]
  );
  const hasMore = blogs.length > visibleCount;

  return (
    <>
      <div className="flex flex-col gap-6">
        <AnimatePresence mode="popLayout">
          {visibleBlogs.map((blog, index) => (
            <BlogCard
              key={blog.id || blog.slug}
              blog={blog}
              index={index}
            />
          ))}
        </AnimatePresence>
      </div>

      {hasMore && (
        <div className="mt-12 flex justify-center">
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
