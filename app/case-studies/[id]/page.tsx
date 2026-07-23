"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import { caseStudies, getCaseStudy } from "@/lib/data";
import { SwapLabel } from "@/components/common/HoverSwap";

export default function CaseStudyDetailPage() {
  const params = useParams();
  const rawId = params?.id;
  const id = Array.isArray(rawId) ? rawId[0] : (rawId as string) ?? "";
  const study = getCaseStudy(id);

  const { scrollY } = useScroll();
  const bgScaleRaw = useTransform(scrollY, [0, 600], [1, 1.15]);
  const bgScale = useSpring(bgScaleRaw, {
    stiffness: 45,
    damping: 20,
    mass: 0.2,
  });
  const bgYRaw = useTransform(scrollY, [0, 600], [0, 80]);
  const bgY = useSpring(bgYRaw, { stiffness: 45, damping: 20, mass: 0.2 });

  // Graceful fallback if the id doesn't resolve to a case study.
  if (!study) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center bg-bg-1 px-6 text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
          404
        </p>
        <h1 className="mb-3 text-3xl font-extrabold text-neutral-900">
          Case study not found
        </h1>
        <p className="mb-8 max-w-sm text-neutral-500">
          The case study you&apos;re looking for doesn&apos;t exist or may have
          been moved.
        </p>
        <Link
          href="/case-studies"
          className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary/90"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          <SwapLabel>Back to Case Studies</SwapLabel>
        </Link>
      </div>
    );
  }

  const body = study.body || [];

  // Related case studies: same category first, then fill with remaining items.
  const related = [
    ...caseStudies.filter(
      (s) => s.id !== study.id && s.category === study.category,
    ),
    ...caseStudies.filter(
      (s) => s.id !== study.id && s.category !== study.category,
    ),
  ].slice(0, 3);

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <>
      {/* 1. Hero — dark, image-forward with scroll zoom animation from BlogDetailHero */}
      <section className="relative -mt-[80px] flex min-h-[64vh] items-end overflow-hidden bg-brand-navy pb-20 pt-32 text-white lg:-mt-[99px]">
        {study.image && (
          <motion.div
            className="absolute inset-0"
            style={{ scale: bgScale, y: bgY }}
          >
            <Image
              src={encodeURI(study.image)}
              alt={study.title}
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
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/case-studies"
              className="group mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft
                size={14}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back to Case Studies
            </Link>
          </motion.div>

          {/* Title */}
          <h1 className="heading-1 mb-8 flex max-w-4xl flex-wrap !text-white">
            {study.title.split(" ").map((word, idx) => (
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

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm"
          >
            <span className="inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-white shadow-lg shadow-primary/40 ring-1 ring-inset ring-white/30">
              {study.category}
            </span>
            <span className="hidden h-8 w-px bg-white/15 sm:block" />
            <div className="flex items-center gap-2 font-bold text-white">
              {study.client}
            </div>
            <span className="hidden h-8 w-px bg-white/15 sm:block" />
            <div className="flex items-center gap-2 font-semibold text-white/80">
              {study.industry}
            </div>
            <span className="hidden h-8 w-px bg-white/15 sm:block" />
            <div className="flex items-center gap-2 font-semibold text-white/80">
              <Clock size={15} className="text-white/60" />
              {study.readTime}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Case study body */}
      <section className="bg-white px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Lead paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
            className="text-lg md:text-xl text-neutral-700 leading-relaxed font-medium mb-10"
          >
            {study.description}
          </motion.p>

          {/* Headline results */}
          {study.results && study.results.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
            >
              {study.results.map((result, i) => (
                <div
                  key={i}
                  className="bg-bg-3 rounded-2xl border border-neutral-100 p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary">
                    {result.value}
                  </div>
                  <div className="text-xs font-semibold text-neutral-500 mt-2 leading-snug">
                    {result.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Body content blocks */}
          <div className="flex flex-col gap-6">
            {body.map((block, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease }}
              >
                {block.type === "h2" && (
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 mt-6 mb-1">
                    {block.text}
                  </h2>
                )}
                {block.type === "p" && (
                  <p className="text-base md:text-[17px] text-neutral-600 leading-relaxed">
                    {block.text}
                  </p>
                )}
                {block.type === "quote" && (
                  <blockquote className="border-l-4 border-primary bg-bg-3 rounded-r-2xl px-6 py-5 my-2">
                    <p className="text-lg md:text-xl font-semibold text-neutral-800 italic leading-snug">
                      “{block.text}”
                    </p>
                    {block.attribution && (
                      <footer className="mt-3 text-xs font-bold uppercase tracking-wider text-primary not-italic">
                        — {block.attribution}
                      </footer>
                    )}
                  </blockquote>
                )}
                {block.type === "list" && (
                  <ul className="flex flex-col gap-3">
                    {block.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-base md:text-[17px] text-neutral-600 leading-relaxed"
                      >
                        <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Related case studies */}
      {related.length > 0 && (
        <section className="bg-bg-3 px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease }}
              className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 mb-8"
            >
              Related case studies
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((s, i) => (
                <motion.div
                  key={s.id || s.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                >
                  <Link
                    href={`/case-studies/${s.id || s.slug}`}
                    className="group block h-full bg-white rounded-[18px] border border-neutral-100 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-50">
                      <Image
                        src={encodeURI(s.image)}
                        alt={s.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 280px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 bg-primary text-white rounded-full px-3 py-1 text-[8px] uppercase font-extrabold tracking-widest shadow-sm shadow-primary/20">
                        {s.category}
                      </span>
                    </div>
                    <div className="p-4">
                      <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                        {s.readTime}
                      </div>
                      <h3 className="text-sm font-bold text-neutral-900 leading-snug mt-1.5 line-clamp-2 group-hover:text-primary transition-colors">
                        {s.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
