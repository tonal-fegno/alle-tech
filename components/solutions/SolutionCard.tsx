"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Solution } from "@/data/solutions";

interface SolutionCardProps {
  solution: Solution;
  index: number;
}

export default function SolutionCard({ solution, index }: SolutionCardProps) {
  // Scroll-scrubbed zoom-out: scale tracks scroll position as the image
  // travels through the viewport, smoothed with a spring so it trails the
  // scroll instead of stepping with it (same treatment as the hero parallax).
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "center center"],
  });
  const imageScaleRaw = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
  const imageScale = useSpring(imageScaleRaw, { stiffness: 100, damping: 30, mass: 0.5 });

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: (index % 6) * 0.06,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeOut" } }}
      viewport={{ once: true, margin: "-40px" }}
      className="group flex flex-col bg-white rounded-4xl border border-neutral-100/70 p-6 shadow-[0_6px_28px_-8px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.10)] hover:border-neutral-200/70 transition-colors duration-300"
    >
      <Link href={`/solutions/${solution.id}`} className="flex flex-col h-full">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {solution.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full border border-neutral-200 text-brand-muted text-xs md:text-base font-normal"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Heading */}
        <h3 className="text-3xl md:text-[32px] font-medium text-brand-text tracking-tight leading-snug mb-3 transition-colors">
          {solution.title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-neutral-500 leading-relaxed font-medium mb-6">
          {solution.description}
        </p>

        {/* Image — zooms out linearly, scrubbed to scroll position */}
        <div
          ref={imageRef}
          className="relative mt-auto aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-100"
        >
          <motion.div style={{ scale: imageScale }} className="absolute inset-0">
            <Image
              src={solution.image}
              alt={solution.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </Link>
    </motion.article>
  );
}
