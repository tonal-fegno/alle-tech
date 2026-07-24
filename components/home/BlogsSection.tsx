"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Blog } from "@/lib/data";
import { blogs, formatBlogDate } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";
import { SwapLabel, SwapArrow } from "@/components/common/HoverSwap";

const ease = [0.16, 1, 0.3, 1] as const;

export default function BlogsSection() {
  // Get the 3 latest blog posts
  const latestBlogs = blogs.slice(0, 3);

  return (
    <section className="section-padding bg-[#F7F8FA] px-4 md:px-8">
      <div className="container-main">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-[650px] flex flex-col gap-4">
            <Eyebrow dotClassName="">Blogs & Insights</Eyebrow>
            <h2 className="font-inter font-bold text-[36px] leading-[44px] md:text-[48px] md:leading-[58px] text-ink tracking-tight">
              Latest Insights & Tech Trends
            </h2>
            <p className="text-body-gray font-inter home-body-text">
              Stay informed with our expert perspectives on enterprise systems, AI integrations, cloud solutions, and business transformation.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 border-2 border-black/30 rounded-full px-5 py-2.5 hover:bg-black hover:text-white cursor-pointer transition-all font-semibold text-sm"
            >
              View All Articles
            </Link>
          </div>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestBlogs.map((post, i) => {
            const targetId = post.slug || post.id;
            const href = `/blogs/${targetId}`;
            return (
              <motion.div
                key={post.id || post.slug}
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
                        src={encodeURI(post.image)}
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
                        {formatBlogDate(post.date)} · {post.readTime || post.time || "5 Min Read"}
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
      </div>
    </section>
  );
}
