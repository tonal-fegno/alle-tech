"use client";

import { motion } from "framer-motion";
import type { caseStudies } from "@/db/schema";
import RichText from "@/components/ui/RichText";

type CaseStudy = typeof caseStudies.$inferSelect;

const ease = [0.16, 1, 0.3, 1] as const;

export default function CaseStudyBody({ study }: { study: CaseStudy }) {
  return (
    <section className="bg-white px-6 py-16 md:py-20">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="text-lg md:text-xl text-neutral-700 leading-relaxed font-medium mb-10"
        >
          {study.description}
        </motion.p>

        {study.results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
          >
            {study.results.map((result, i) => (
              <div key={i} className="bg-bg-3 rounded-2xl border border-neutral-100 p-6 text-center">
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

        <RichText html={study.bodyHtml} />
      </div>
    </section>
  );
}
