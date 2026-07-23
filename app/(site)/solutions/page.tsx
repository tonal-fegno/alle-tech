"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SwapLabel, SwapArrow } from "@/components/common/HoverSwap";
import { SOLUTIONS } from "@/data/solutions";
import SolutionCard from "@/components/solutions/SolutionCard";
import CTABanner from "@/components/common/CTABanner";
import { ShieldCheck, Zap, Wrench, Users } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Badge from "@/components/badge";
import UIButton from "@/components/ui-button";

import SolutionsHero from "@/components/solutions/SolutionsHero";

const MotionUIButton = motion(UIButton);

export default function SolutionsPage() {
  const [visibleCount, setVisibleCount] = useState(6);

  const visibleSolutions = SOLUTIONS.slice(0, visibleCount);
  const hasMore = SOLUTIONS.length > visibleCount;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="text-neutral-900 antialiased">
      {/* 1. Hero Section */}
      <SolutionsHero />

      {/* 2. Solutions Grid */}
      <main className="container-main section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visibleSolutions.map((solution, index) => (
            <SolutionCard key={solution.id} solution={solution} index={index} />
          ))}
        </div>

        {/* Load More Button (Cevira Style) */}
        {hasMore && (
          <div className="flex justify-center mt-12 mb-6">
            <MotionUIButton
              onClick={handleLoadMore}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              Load More
            </MotionUIButton>
          </div>
        )}
      </main>

      {/* 3. Why ALLE TECH */}
      <section className="py-14 md:py-20 bg-brand-navy text-white px-6 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_40%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28 text-left">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3 block">
                Why Partner With Us
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Why ALLE TECH?
              </h2>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-normal mb-8">
                We combine business expertise with intelligent technology to
                help organizations streamline operations, improve productivity,
                and achieve measurable outcomes.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-blue-400 hover:text-white uppercase transition-colors"
              >
                Learn about our team <ChevronRight size={16} />
              </Link>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
              {[
                {
                  title: "Business-First Approach",
                  desc: "We understand your processes, challenges, and growth objectives before recommending technology—tailored to deliver measurable business value.",
                  icon: ShieldCheck,
                },
                {
                  title: "Proven Technology Expertise",
                  desc: "ERP, Business Intelligence, AI, mobile apps, enterprise integrations, and cloud technologies—connected ecosystems for smarter decisions.",
                  icon: Zap,
                },
                {
                  title: "End-to-End Support",
                  desc: "Implementation, training, optimization, technical support, and continuous improvements to sustain long-term value.",
                  icon: Wrench,
                },
                {
                  title: "Long-Term Partnership",
                  desc: "We support innovation, scalability, and digital transformation long after deployment—your trusted Business Technology Partner.",
                  icon: Users,
                },
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                      <IconComp size={20} className="text-blue-400" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Promo Banner */}
      <CTABanner
        heading="Ready to Modernize Your Operations?"
        subtitle="Talk to our technology consultants and get a clear, practical plan for your business — no pressure, just answers."
        secondaryLabel="Schedule a Meeting"
        secondaryHref="/contact"
      />
    </div>
  );
}
