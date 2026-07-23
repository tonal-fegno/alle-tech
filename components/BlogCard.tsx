"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Blog } from "@/lib/data";
import { formatBlogDate } from "@/lib/data";
import { SwapLabel, SwapArrow } from "@/components/common/HoverSwap";

interface BlogCardProps {
  blog: Blog;
  index: number;
  /** Route prefix for the post link (e.g. "/blogs" or "/case-studies"). */
  basePath?: string;
  /** Show the "Posted" date in the metadata card. */
  showDate?: boolean;
}

export default function BlogCard({
  blog,
  index,
  basePath = "/blogs",
  showDate = true,
}: BlogCardProps) {
  const targetId = blog.id || blog.slug;
  const href = `${basePath}/${targetId}`;
  const descriptionText = blog.description || blog.shortDescription;
  const timeText = blog.readTime || blog.time || "5 Min Read";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 260,
          damping: 24,
          mass: 0.9,
          delay: (index % 3) * 0.08,
        },
      }}
      viewport={{ once: true, margin: "-40px" }}
      exit={{
        opacity: 0,
        scale: 0.96,
        transition: { duration: 0.2, ease: "easeIn" },
      }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className="group flex w-full flex-col items-stretch gap-4 lg:flex-row mb-6"
    >
      {/* Metadata card — desktop only */}
      <div className="hidden w-45 shrink-0 flex-col justify-between rounded-card border border-border-gray/20 bg-white p-7 shadow-xs transition-all duration-300 group-hover:shadow-[0_12px_30px_rgba(0,11,34,0.06)] lg:flex">
        {showDate && (
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-body-gray/70">
              Posted
            </span>
            <span className="mt-1 block text-sm font-bold text-ink">
              {formatBlogDate(blog.date)}
            </span>
          </div>
        )}
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-body-gray/70">
          {timeText}
        </span>
      </div>

      {/* Content card */}
      <div className="flex grow flex-col gap-6 rounded-card border border-border-gray/20 bg-white p-4 shadow-xs transition-all duration-300 group-hover:border-border-gray/40 group-hover:shadow-[0_12px_30px_rgba(0,11,34,0.06)] sm:p-7 md:flex-row lg:flex-row">
        {blog.image && (
          <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-card border border-border-gray/10 bg-bg-1 md:aspect-auto md:w-70 lg:w-80">
            <Image
              src={encodeURI(blog.image)}
              alt={blog.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 280px, 320px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        )}

        <div className="flex grow flex-col items-start justify-between p-0 sm:p-3 sm:py-4">
          <div className="mb-4 flex w-full flex-wrap items-center gap-x-3 gap-y-2">
            <span className="inline-block rounded-full bg-primary px-4 py-2 text-sm font-medium tracking-wide text-white shadow-xs">
              {blog.category}
            </span>
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-body-gray/70 lg:hidden">
              {showDate && <span>{formatBlogDate(blog.date)}</span>}
              {showDate && (
                <span className="h-1 w-1 rounded-full bg-border-gray" />
              )}
              <span>{timeText}</span>
            </div>
          </div>

          <div className="w-full">
            <h3 className="heading-6 mb-3 line-clamp-2 lg:line-clamp-1">
              <Link href={href}>{blog.title}</Link>
            </h3>
            <p className="mb-6 line-clamp-2 text-body-16 text-body-gray">
              {descriptionText}
            </p>
          </div>

          <Link
            href={href}
            className="inline-flex w-fit items-center gap-2 text-body-16 font-semibold text-ink transition-colors group-hover:text-primary"
          >
            <SwapLabel>Read More</SwapLabel>
            <SwapArrow size={18} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
