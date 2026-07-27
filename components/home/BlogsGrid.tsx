"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { blogs as blogsTable } from "@/db/schema";
import { formatDate } from "@/lib/format-date";
import { SwapLabel, SwapArrow } from "@/components/common/HoverSwap";

type Blog = typeof blogsTable.$inferSelect;

const ease = [0.16, 1, 0.3, 1] as const;

export default function BlogsGrid({ blogs }: { blogs: Blog[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((post, i) => {
        const href = `/blogs/${post.slug}`;
        return (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease, delay: i * 0.1 }}
            className="flex"
          >
            <Link
              href={href}
              className="group flex flex-col w-full overflow-hidden rounded-[24px] border border-border-gray/20 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,11,34,0.08)]"
            >
              {/* Blog Image */}
              {post.image && (
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg-1">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                    {post.category}
                  </span>
                </div>
              )}

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-6 md:p-8 justify-between">
                <div className="flex flex-col gap-3">
                  {/* Meta */}
                  <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-body-gray/70">
                    {formatDate(post.publishedAt)} · {post.readTime}
                  </div>
                  {/* Title */}
                  <h3 className="font-inter font-bold text-[20px] leading-[28px] text-ink group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  {/* Short Description */}
                  <p className="text-body-gray home-body-text line-clamp-3">
                    {post.description || post.shortDescription}
                  </p>
                </div>

                {/* CTA Link */}
                <div className="mt-6 pt-4 border-t border-border-gray/10 flex items-center gap-2 text-[15px] font-semibold text-ink transition-colors group-hover:text-primary">
                  <SwapLabel>Read Full Article</SwapLabel>
                  <SwapArrow size={16} />
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
