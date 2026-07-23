"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import type { Blog } from "@/lib/data";
import { formatBlogDate } from "@/lib/data";

export default function BlogDetailHero({ blog }: { blog: Blog }) {
  const { scrollY } = useScroll();
  const bgScaleRaw = useTransform(scrollY, [0, 600], [1, 1.15]);
  const bgScale = useSpring(bgScaleRaw, {
    stiffness: 45,
    damping: 20,
    mass: 0.2,
  });
  const bgYRaw = useTransform(scrollY, [0, 600], [0, 80]);
  const bgY = useSpring(bgYRaw, { stiffness: 45, damping: 20, mass: 0.2 });

  return (
    <section className="relative -mt-[80px] flex min-h-[64vh] items-end overflow-hidden bg-brand-navy pb-20 pt-32 text-white lg:-mt-[99px]">
      {blog.imageVisible && blog.image && (
        <motion.div
          className="absolute inset-0"
          style={{ scale: bgScale, y: bgY }}
        >
          <Image
            src={encodeURI(blog.image)}
            alt={blog.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      )}

      <div className="absolute inset-0 bg-brand-navy-light/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-dark/70 via-brand-navy-dark/60 to-brand-navy-dark/95" />

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/blogs"
            className="group mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft
              size={14}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Blogs
          </Link>
        </motion.div>

        <h1 className="heading-1 mb-8 flex max-w-4xl flex-wrap !text-white">
          {blog.title.split(" ").map((word, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 4, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1.1,
                delay: 0.15 + idx * 0.035,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mr-[0.25em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm"
        >
          <span className="inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-white shadow-lg shadow-primary/40 ring-1 ring-inset ring-white/30">
            {blog.category}
          </span>
          <span className="hidden h-8 w-px bg-white/15 sm:block" />
          <div className="flex items-center gap-2 font-semibold text-white/80">
            <Calendar size={15} className="text-white/60" />
            {formatBlogDate(blog.date)}
          </div>
          <div className="flex items-center gap-2 font-semibold text-white/80">
            <Clock size={15} className="text-white/60" />
            {blog.time || blog.readTime}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
