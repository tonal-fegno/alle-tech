"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { caseStudies } from "@/db/schema";

type CaseStudy = typeof caseStudies.$inferSelect;

const ease = [0.16, 1, 0.3, 1] as const;

export default function RelatedCaseStudies({ studies }: { studies: CaseStudy[] }) {
  return (
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
          {studies.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
            >
              <Link
                href={`/case-studies/${s.slug}`}
                className="group block h-full bg-white rounded-[18px] border border-neutral-100 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-50">
                  <Image
                    src={s.image}
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
  );
}
