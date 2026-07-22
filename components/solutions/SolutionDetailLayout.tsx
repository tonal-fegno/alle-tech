"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowLeft,
  ChevronRight,
  Check,
  Zap,
  ShieldCheck,
  Wrench,
  Database,
  CheckCircle2,
  Users,
} from "lucide-react";
import { Solution } from "@/data/solutions";
import { SOLUTION_DETAILS, SolutionDetail } from "@/data/solutionDetails";
import FAQAccordion from "@/components/common/FAQAccordion";
import CTABanner from "@/components/common/CTABanner";
import Eyebrow from "@/components/ui/Eyebrow";

// Animation presets
const ease = [0.16, 1, 0.3, 1] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface SolutionDetailLayoutProps {
  solution: Solution;
}

export default function SolutionDetailLayout({
  solution,
}: SolutionDetailLayoutProps) {
  // Find custom details for this solution
  const detail: SolutionDetail | undefined = SOLUTION_DETAILS.find(
    (d) => d.id === solution.id,
  );

  // States for interactive sections
  const [activeIndTab, setActiveIndTab] = useState(
    detail?.industries && detail.industries.length > 0
      ? detail.industries[0].name
      : "",
  );

  // Scroll parallax for Hero Image scale
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const bgScaleRaw = useTransform(scrollY, [0, 500], [1.02, 1.15]);
  const bgScale = useSpring(bgScaleRaw, {
    stiffness: 45,
    damping: 20,
    mass: 0.2,
  });

  const imageRef = useRef<HTMLDivElement>(null);
  const fallbackImageScaleRaw = useTransform(scrollY, [0, 600], [1.15, 1]);
  const fallbackImageScale = useSpring(fallbackImageScaleRaw, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });

  // If no custom details exist for this solution, render the fallback layout
  if (!detail) {
    return (
      <div className="min-h-screen bg-brand-bg text-ink font-sans antialiased overflow-x-hidden">
        {/* 1. Title block */}
        <section className="pt-40 pb-12 md:pb-16 px-6 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/solutions"
                className="group inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-body-gray hover:text-primary bg-white hover:bg-bg-1 border border-border-gray/40 hover:border-border-gray/60 rounded-full px-4 py-2 shadow-xs transition-all duration-300 mb-8"
              >
                <ArrowLeft
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                Back to Solutions
              </Link>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-brand-navy leading-[1.1] mb-6 flex flex-wrap justify-center">
              {solution.title.split(" ").map((word, idx) => (
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

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="text-body-gray text-base md:text-lg max-w-2xl leading-relaxed font-medium"
            >
              {solution.description}
            </motion.p>
          </div>
        </section>

        {/* 2. Large feature image */}
        <section className="max-w-6xl mx-auto px-6 mb-4">
          <div
            ref={imageRef}
            className="relative aspect-video rounded-4xl overflow-hidden bg-bg-1"
          >
            <motion.div
              style={{ scale: fallbackImageScale }}
              className="absolute inset-0"
            >
              <Image
                src={solution.image}
                alt={solution.title}
                fill
                sizes="(max-width: 1280px) 100vw, 1152px"
                priority
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* 3. Solution body */}
        <main className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease }}
            className="text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-6"
          >
            What&rsquo;s included
          </motion.h2>

          <div className="flex flex-col gap-4">
            {solution.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease }}
                className="flex items-start gap-4 bg-white rounded-2xl border border-border-gray/20 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.05)] p-5"
              >
                <CheckCircle2
                  size={22}
                  className="text-primary shrink-0 mt-0.5"
                />
                <p className="text-base md:text-[17px] text-body-gray leading-relaxed">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </main>

        <CTABanner
          heading={`Ready to get started with ${solution.title}?`}
          ctaHref="/contact"
          secondaryLabel="Schedule a Meeting"
          secondaryHref="/contact"
        />
      </div>
    );
  }

  // Define Why Alle Tech default values
  const defaultWhyAlleTechItems = [
    {
      title: "Business-First Approach",
      desc: "We understand your processes, challenges, and growth objectives before recommending technology—tailored to deliver measurable business value.",
      icon: ShieldCheck,
    },
    {
      title: "Industry Expertise",
      desc: "Practical experience across distribution, FMCG, manufacturing, retail, logistics, healthcare, construction, and professional services.",
      icon: Database,
    },
    {
      title: "Proven Technology Expertise",
      desc: "ERP, Business Intelligence, AI, mobile apps, enterprise integrations, and cloud technologies—connected ecosystems for smarter decisions.",
      icon: Zap,
    },
    {
      title: "End-to-End Implementation & Support",
      desc: "Implementation, training, optimization, technical support, and continuous improvements to sustain long-term value.",
      icon: Wrench,
    },
    {
      title: "Long-Term Partnership",
      desc: "We support innovation, scalability, and digital transformation long after deployment—your trusted Business Technology Partner.",
      icon: Users,
    },
  ];

  const whyAlleTechItems = detail.whyAlleTechItems ?? defaultWhyAlleTechItems;

  return (
    <div className="min-h-screen bg-brand-bg text-ink font-sans antialiased overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section
        ref={heroRef}
        className="relative min-h-[68vh] pt-32 pb-20 bg-brand-navy text-white flex items-end overflow-hidden"
      >
        {detail.heroImage.startsWith("http") ||
        detail.heroImage.startsWith("/") ? (
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              scale: bgScale,
              backgroundImage: `url('${detail.heroImage}')`,
            }}
          />
        ) : null}

        {/* Blue tint + darkening gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-dark/70 via-brand-navy-dark/60 to-brand-navy-dark/95" />

        <div className="relative z-10 max-w-4xl mx-auto w-full px-6 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/solutions"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft
                size={14}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back to Solutions
            </Link>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-1 leading-tight max-w-4xl flex flex-wrap">
            {detail.heroTitle.split(" ").map((word, idx) => (
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

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-xl md:text-2xl max-w-3xl leading-relaxed font-normal mb-10"
          >
            {detail.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* 2. INTRODUCTION / WHY SECTION */}
      <section
        id="intro-section"
        className="container-main section-padding border-b border-border-gray/20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <Eyebrow className="mb-4">Enterprise Standard</Eyebrow>
            <h2 className="heading-2 leading-tight">
              {detail.whyTitle}
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mt-6" />
          </div>

          {/* Right Column: List of items */}
          <div className="lg:col-span-8 flex flex-col divide-y divide-border-gray/20">
            {detail.whyItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="py-8 first:pt-0 last:pb-0 flex flex-col sm:flex-row gap-6 items-start group"
                >
                  {/* Icon Circle */}
                  <div className="w-12 h-12 rounded-full bg-bg-2 text-primary flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm">
                    <IconComp size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-ink mb-2 tracking-tight transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-body-gray leading-relaxed text-[15px] md:text-base font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. BUSINESS CHALLENGES SOLVED */}
      <section className="bg-bg-3/50 border-y border-border-gray/20 section-padding">
        <div className="container-main">
          <div className="text-center mb-16">
            <Eyebrow className="mb-3 justify-center">Pain Points Resolved</Eyebrow>
            <h2 className="heading-2">
              {detail.challengesTitle}
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {detail.challenges.map((ch, idx) => {
              const IconComp = ch.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="group bg-white rounded-3xl border border-border-gray/25 p-8 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.06)] hover:border-border-gray/40 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Card Title with Inline Icon */}
                  <h3 className="text-base font-semibold text-ink mb-4 flex items-center gap-3">
                    <IconComp size={22} className="text-ink shrink-0" />
                    <span>{ch.title}</span>
                  </h3>
                  {/* Card Description */}
                  <p className="text-body-gray text-[15px] md:text-[16px] leading-relaxed font-medium">
                    {ch.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 4. BUSINESS OUTCOMES */}
      {detail.outcomesTitle && detail.outcomes && detail.outcomes.length > 0 && (
        <section className="py-14 md:py-20 bg-white border-b border-neutral-100 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 block">
                Measurable Impact
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
                {detail.outcomesTitle}
              </h2>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {detail.outcomes.map((out, idx) => {
                const IconComp = out.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="group bg-neutral-50 rounded-3xl border border-neutral-100/90 p-8 hover:bg-blue-50/20 hover:border-blue-200/60 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                  >
                    {/* Icon Circle */}
                    <div className="w-12 h-12 rounded-2xl bg-white text-blue-600 flex items-center justify-center shrink-0 mb-6 shadow-sm border border-neutral-100 group-hover:scale-105 transition-transform duration-300">
                      <IconComp size={22} />
                    </div>
                    
                    {/* Card Content */}
                    <h3 className="text-lg font-bold text-neutral-900 mb-3 tracking-tight">
                      {out.title}
                    </h3>
                    <p className="text-neutral-500 text-sm md:text-[15px] leading-relaxed font-medium">
                      {out.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      )}

      {/* 5. MODULES MAP (Large Cards) */}
      <section className="py-14 md:py-20 bg-neutral-900 text-white px-6 overflow-hidden relative">
        <div className="absolute -left-40 top-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -right-40 bottom-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3 block font-mono">
              Module Map
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              {detail.modulesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {detail.modules.map((mod, idx) => {
              const IconComp = mod.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-6.5 flex flex-col h-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-xl shadow-black/10 group"
                >
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2.5">
                    <IconComp size={20} className="text-white shrink-0" />
                    <span>{mod.title}</span>
                  </h3>
                  <p className="text-neutral-400 text-xs md:text-sm leading-relaxed font-normal">
                    {mod.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. COMPLETE IMPLEMENTATION LIFECYCLE */}
      {detail.lifecycleTitle && detail.lifecycle && (
        <section className="overflow-hidden section-padding container-main">
          <div className="text-center mb-12">
            <Eyebrow className="mb-3 justify-center">Our Methodology</Eyebrow>
            <h2 className="heading-2">
              {detail.lifecycleTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {detail.lifecycle.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="relative overflow-hidden bg-white border border-border-gray/20 rounded-3xl p-6 shadow-[0_6px_25px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_35px_-12px_rgba(0,0,0,0.08)] hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Large faint step index */}
                  <span className="pointer-events-none absolute right-6 top-4 select-none text-7xl font-semibold text-bg-3">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div className="relative flex items-center gap-3 mb-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-bg-2 text-primary">
                      <IconComp size={20} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                        Phase {idx + 1}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-body-gray">
                        {step.phase}
                      </span>
                    </div>
                  </div>

                  <h4 className="relative text-lg font-semibold text-ink tracking-tight mb-2">
                    {step.title}
                  </h4>
                  <p className="relative text-body-gray text-sm leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      {/* 7. INDUSTRY SOLUTIONS (Tabs) */}
      {detail.industriesTitle &&
        detail.industries &&
        detail.industries.length > 0 && (
          <section className="bg-bg-3 border-y border-border-gray/20 section-padding">
            <div className="container-main">
              <div className="text-center mb-16">
                <Eyebrow className="mb-3 justify-center">Industry Segments</Eyebrow>
                <h2 className="heading-2">
                  {detail.industriesTitle}
                </h2>
              </div>

              <div className="flex flex-col gap-10">
                <div className="flex flex-wrap justify-center gap-3">
                  {detail.industries.map((ind) => (
                    <button
                      key={ind.name}
                      onClick={() => setActiveIndTab(ind.name)}
                      className={`px-6 py-3 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                        activeIndTab === ind.name
                          ? "bg-primary text-white shadow-md shadow-primary/15"
                          : "bg-white hover:bg-bg-1 text-body-gray border border-border-gray/40"
                      }`}
                    >
                      {ind.name}
                    </button>
                  ))}
                </div>

                <div className="bg-white border border-border-gray/30 rounded-[40px] p-6 md:p-12 shadow-[0_12px_45px_-15px_rgba(0,0,0,0.03)] overflow-hidden">
                  <AnimatePresence mode="wait">
                    {detail.industries.map((ind) => {
                      if (ind.name !== activeIndTab) return null;
                      return (
                        <motion.div
                          key={ind.name}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -15 }}
                          transition={{ duration: 0.4 }}
                          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                        >
                          <div className="flex flex-col pr-0 lg:pr-6">
                            <Eyebrow className="mb-3">Tailored for {ind.name}</Eyebrow>
                            <h3 className="text-2xl md:text-4xl font-semibold text-ink mb-4 tracking-tight leading-snug">
                              {ind.heading}
                            </h3>
                            <p className="text-body-gray text-base md:text-lg leading-relaxed font-medium mb-8">
                              {ind.desc}
                            </p>

                            <div className="space-y-3.5">
                              {ind.bullets.map((bullet, bIdx) => (
                                <div
                                  key={bIdx}
                                  className="flex items-center gap-3.5"
                                >
                                  <div className="w-5 h-5 rounded-full bg-bg-2 flex items-center justify-center shrink-0">
                                    <Check
                                      size={12}
                                      className="text-primary font-semibold"
                                    />
                                  </div>
                                  <span className="text-xs md:text-sm text-body-gray font-medium">
                                    {bullet}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="relative aspect-video lg:aspect-4/3 rounded-4xl overflow-hidden bg-bg-1 shadow-md">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={ind.image}
                              alt={ind.name}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </section>
        )}

      {/* 8. INTEGRATIONS (Ecosystem Hub) */}
      {detail.integrationsTitle &&
        detail.integrations &&
        detail.integrations.length > 0 && (
          <section className="container-main section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <Eyebrow className="mb-3">Connected Business</Eyebrow>
                <h2 className="heading-2 mb-6 leading-tight">
                  {detail.integrationsTitle}
                </h2>
                <p className="text-body-gray text-base md:text-lg leading-relaxed font-medium mb-8">
                  Unify workflows across all satellite tools. We integrate
                  systems to secure zero-delay transactions and automatic data
                  sharing.
                </p>

                <div className="flex gap-4 items-center bg-bg-2/60 rounded-2xl p-5 border border-primary/20">
                  <Zap size={24} className="text-primary shrink-0" />
                  <p className="text-xs text-dark-blue font-semibold leading-relaxed">
                    All links are built using secure API keys and standard
                    middleware, ensuring stability during system updates.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {detail.integrations.map((integ, idx) => {
                  const IconComp = integ.icon;
                  return (
                    <div
                      key={idx}
                      className={`bg-white border border-border-gray/20 rounded-3xl p-6 flex gap-4 hover:-translate-y-1 transition-all duration-300 shadow-[0_6px_25px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_35px_-12px_rgba(0,0,0,0.07)] border-t-2 ${integ.border}`}
                    >
                      <div
                        className={`w-10 h-10 rounded-xl bg-bg-1 flex items-center justify-center shrink-0 ${integ.color}`}
                      >
                        <IconComp size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-ink text-sm mb-1 flex items-center gap-1.5">
                          {integ.name}
                        </h3>
                        <p className="text-body-gray text-[11px] md:text-xs leading-normal font-medium">
                          {integ.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

      {/* 9. WHY ALLE TECH */}
      <section className="py-14 md:py-20 bg-brand-navy text-white px-6 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_40%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28 text-left">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3 block">
                Why Partner With Us
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
                {detail.whyAlleTechTitle ?? "Why ALLE TECH?"}
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
              {whyAlleTechItems.map((item, idx) => {
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

      {/* 10. FAQs */}
      {detail.faqsTitle && detail.faqs && detail.faqs.length > 0 && (
        <FAQAccordion title={detail.faqsTitle} faqs={detail.faqs} />
      )}

      {/* 11. CTA BANNER */}
      <CTABanner
        heading={detail.ctaTitle ?? `Ready to modernize with ${solution.title}?`}
        subtitle={
          detail.ctaSubtitle ??
          "Schedule a free discovery discussion and get a detailed roadmap for your operations migration plan."
        }
        ctaLabel={detail.ctaLabel ?? "Contact Us"}
        secondaryLabel={detail.ctaSecondaryLabel ?? "Schedule a Meeting"}
        secondaryHref="/contact"
      />
    </div>
  );
}
