"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Blog } from "@/lib/data";
import { formatBlogDate } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function RelatedArticles({ posts }: { posts: Blog[] }) {
  return (
    <section className="bg-white px-4 pb-8 md:px-8">
      <div className="mx-auto max-w-[800px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
          className="heading-4 mb-8"
        >
          Related articles
        </motion.h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div
              key={post.id || post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
            >
              <Link
                href={`/blogs/${post.slug}`}
                className="group block h-full overflow-hidden rounded-card border border-border-gray/20 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,11,34,0.08)]"
              >
                {post.imageVisible && post.image && (
                  <div className="relative aspect-[16/10] overflow-hidden bg-bg-1">
                    <Image
                      src={encodeURI(post.image)}
                      alt={post.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 280px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-[8px] font-extrabold uppercase tracking-widest text-white shadow-xs">
                      {post.category}
                    </span>
                  </div>
                )}
                <div className="p-4">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-body-gray/70">
                    {formatBlogDate(post.date)} · {post.time}
                  </div>
                  <h3 className="mt-1.5 line-clamp-2 text-sm font-bold leading-snug text-ink transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
