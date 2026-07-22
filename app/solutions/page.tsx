"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SwapLabel, SwapArrow } from "@/components/common/HoverSwap";
import { SOLUTIONS } from "@/data/solutions";
import SolutionCard from "@/components/solutions/SolutionCard";
import CTABanner from "@/components/common/CTABanner";
import { ShieldCheck, Zap, Wrench, Users } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import ArrowButton from "@/components/ui/ArrowButton";

export default function SolutionsPage() {
  const [visibleCount, setVisibleCount] = useState(6);
  const { scrollY } = useScroll();
  const bgScaleRaw = useTransform(scrollY, [0, 600], [1, 1.15]);
  const bgScale = useSpring(bgScaleRaw, {
    stiffness: 45,
    damping: 20,
    mass: 0.2,
  });

  const bgYRaw = useTransform(scrollY, [0, 600], [0, 80]);
  const bgY = useSpring(bgYRaw, { stiffness: 45, damping: 20, mass: 0.2 });

  const visibleSolutions = SOLUTIONS.slice(0, visibleCount);
  const hasMore = SOLUTIONS.length > visibleCount;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-neutral-900 font-sans antialiased overflow-x-hidden">
      {/* 1. Hero Section (Cevira Style) */}
      <section className="relative min-h-[64vh] pt-36 pb-24 px-4 sm:px-6 bg-brand-navy text-white flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Full-bleed background image */}
        <motion.div
          className="absolute inset-0"
          style={{ scale: bgScale, y: bgY }}
        >
          <Image
            src="/assets/images/solutions/hero.png"
            alt="Enterprise Technology Solutions"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        {/* Blue tint overlay and vignettes */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark/95 via-brand-navy-dark/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-dark/70 via-transparent to-brand-navy-dark/80" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Eyebrow variant="dark">Our Solutions</Eyebrow>
          </motion.div>

          {/* Heading */}
          <h1 className="heading-1 !text-white tracking-tight max-w-4xl mb-6 flex flex-wrap justify-center !font-semibold">
            {"Enterprise technology, delivered end-to-end"
              .split(" ")
              .map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 4, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 1.1,
                    delay: 0.15 + idx * 0.035,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-18 text-white/70 max-w-2xl"
          >
            From ERP implementation to managed IT support, we help you plan,
            build, and run the systems your business depends on.
          </motion.p>
        </div>
      </section>

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
            <motion.button
              onClick={handleLoadMore}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group inline-flex items-center gap-3.5 pl-7 pr-3 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-500/15 overflow-hidden font-bold text-sm tracking-wide cursor-pointer border border-transparent"
            >
              <SwapLabel>Load More</SwapLabel>
              <div className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center transition-transform duration-300">
                <SwapArrow size={16} />
              </div>
            </motion.button>
          </div>
        )}
      </main>

      {/* 3. Why ALLE TECH */}
      <section className="py-14 md:py-20 bg-[#0B0714] text-white px-6 overflow-hidden relative">
        {/* Ambient purple glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[560px]"
          style={{
            background:
              "radial-gradient(ellipse 70% 90% at 50% -20%, rgba(76,29,149,0.75), transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <Eyebrow variant="dark" className="mb-4">
                Why Partner With Us
              </Eyebrow>
              <AnimatedHeading className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-6">
                Why ALLE TECH?
              </AnimatedHeading>
              <p className="text-white/70 text-body-18 leading-relaxed font-normal mb-8">
                We combine business expertise with intelligent technology to
                help organizations streamline operations, improve productivity,
                and achieve measurable outcomes.
              </p>
              <ArrowButton href="/about" size="sm" variant="solid">
                Learn about our team
              </ArrowButton>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <IconComp size={20} className="text-primary" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
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
