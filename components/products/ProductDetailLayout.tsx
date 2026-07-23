"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, ChevronRight, HelpCircle, ShieldCheck, Zap, Wrench, Users, Plus, Minus } from "lucide-react";
import { ProductDetail } from "@/data/productDetails";
import FAQAccordion from "@/components/common/FAQAccordion";
import Eyebrow from "@/components/ui/Eyebrow";
import { SwapLabel } from "@/components/common/HoverSwap";

interface ProductDetailLayoutProps {
  product: ProductDetail;
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function ProductDetailLayout({ product }: ProductDetailLayoutProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Parallax Scroll for Hero
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroBgScaleRaw = useTransform(scrollY, [0, 500], [1.02, 1.12]);
  const heroBgScale = useSpring(heroBgScaleRaw, { stiffness: 45, damping: 20, mass: 0.2 });

  return (
    <>
      {/* 1. HERO SECTION */}
      <section
        ref={heroRef}
        className="relative -mt-[80px] lg:-mt-[99px] min-h-[64vh] pt-36 sm:pt-40 lg:pt-44 pb-20 bg-brand-navy text-white flex items-end overflow-hidden"
      >
        {/* Dynamic Background Gradient / Image Overlay */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${product.darkBgGradient} will-change-transform`}
          style={{ scale: heroBgScale }}
        />
        
        {/* Visual mesh overlay for premium background depth */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15) 1px, transparent 1px), radial-gradient(circle at 75% 60%, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft
                size={14}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back to Products
            </Link>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-2 leading-tight max-w-4xl flex flex-wrap">
            {product.title.split(" ").map((word, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 1.1,
                  delay: 0.1 + idx * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`h-1 w-20 rounded bg-gradient-to-r ${product.accentColor} mb-6`}
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/80 text-lg md:text-2xl max-w-3xl leading-relaxed font-normal mb-8"
          >
            {product.heroSubtitle}
          </motion.p>
        </div>
      </section>

      <div className="bg-brand-bg">
        {/* 2. OVERVIEW & CORE CONCEPT */}
        <section className="py-16 md:py-24 bg-bg-2/40 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${product.accentColor} bg-clip-text text-transparent mb-3 block`}>
              Core Concept
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-brand-navy mb-6 leading-tight">
              {product.conceptTitle} <br />
              <span className="text-neutral-500 font-medium">{product.conceptSubtitle}</span>
            </h2>
            <p className="text-neutral-600 text-base md:text-lg leading-relaxed font-medium mb-6">
              {product.conceptDesc}
            </p>
          </div>

          <div className="lg:col-span-5 bg-white rounded-4xl border border-neutral-100 p-8 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.06)] relative overflow-hidden">
            <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${product.accentColor}`} />
            <h3 className="text-lg font-bold text-neutral-800 uppercase tracking-widest mb-6">Target Operations</h3>
            <ul className="flex flex-col gap-4">
              {product.conceptBullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className={`w-6 h-6 rounded-full bg-gradient-to-r ${product.accentColor} flex items-center justify-center mt-0.5 shrink-0 shadow-sm`}>
                    <Check size={13} className="text-white" />
                  </span>
                  <span className="text-neutral-700 text-sm md:text-base font-medium">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. CHALLENGES SECTION */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto text-left">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3 block">Pain Points</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-brand-navy mb-4">
            {product.challengesTitle}
          </h2>
          <p className="text-neutral-500 text-sm md:text-base leading-relaxed font-medium">
            Many organizations struggle to manage their daily workflows efficiently. Our tools convert these persistent operational friction points into structured business assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.challenges.map((challenge, idx) => {
            const IconComp = challenge.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease }}
                className="group bg-white border border-neutral-100 hover:border-neutral-200 rounded-3xl p-6 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-neutral-50 group-hover:bg-neutral-100 flex items-center justify-center mb-4 transition-colors">
                  <IconComp size={22} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{challenge.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed font-normal">{challenge.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. BUSINESS OUTCOMES SECTION */}
      <section className="py-16 md:py-24 bg-neutral-900 text-white px-6 overflow-hidden relative">
        {/* Glow overlay */}
        <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${product.accentColor} rounded-full filter blur-[120px] opacity-15 pointer-events-none`} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Outcomes</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              {product.outcomesTitle}
            </h2>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-normal">
              {product.outcomesDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.outcomes.map((outcome, idx) => {
              const IconComp = outcome.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 hover:border-white/20 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${product.accentColor} flex items-center justify-center mb-4`}>
                    <IconComp size={20} className="text-white" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{outcome.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed font-normal">{outcome.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. AI FEATURES SECTION (If present) */}
      {product.aiTitle && product.aiFeatures && (
        <section className="py-20 md:py-28 bg-[#03091E] text-white px-6 relative overflow-hidden border-t border-white/10">
          {/* Futuristic Ambient Orbs & Mesh */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[130px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-extrabold tracking-widest uppercase mb-4 backdrop-blur-md">
                <Zap size={14} className="text-primary animate-pulse" />
                <span>INTELLIGENCE & AI ENGINE</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                {product.aiTitle}
              </h2>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-normal">
                {product.aiDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {product.aiFeatures.map((ai, idx) => {
                const IconComp = ai.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.55, delay: idx * 0.08, ease }}
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                    className="group bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-primary/40 hover:bg-white/[0.08] rounded-3xl p-7 shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
                  >
                    {/* Corner Ambient Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/15 rounded-full blur-2xl pointer-events-none group-hover:bg-primary/25 transition-all duration-300" />
                    
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-indigo-500/20 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                          <IconComp size={22} />
                        </div>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary/90 bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                          AI Model
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                        {ai.title}
                      </h3>
                      
                      <p className="text-neutral-300 text-sm leading-relaxed font-normal">
                        {ai.desc}
                      </p>
                    </div>

                    <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 font-medium">
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Automated</span>
                      </span>
                      <span className="text-white/50">Real-Time Core</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 6. MODULES SECTION (Interactive Tabbed / Accordion View) */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3 block">Product Capabilities</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-brand-navy mb-4">
            {product.modulesTitle}
          </h2>
          {product.modulesDesc && (
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed font-medium">
              {product.modulesDesc}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tabs Navigation (Left side on desktop) */}
          <div className="lg:col-span-4 flex flex-col gap-2 w-full">
            {product.modules.map((mod, i) => {
              const TabIcon = mod.icon;
              return (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-3.5 px-5 py-4 rounded-2xl text-left font-bold text-sm tracking-wide transition-all duration-300 border cursor-pointer ${
                    activeTab === i
                      ? `bg-neutral-950 text-white border-neutral-950 shadow-lg shadow-neutral-950/15`
                      : "bg-white hover:bg-neutral-50 border-neutral-100 text-neutral-700"
                  }`}
                >
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    activeTab === i ? "bg-white/10 text-white" : `${mod.bgColor} ${mod.color}`
                  }`}>
                    <TabIcon size={16} />
                  </span>
                  <span>{mod.title}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display (Right side on desktop) */}
          <div className="lg:col-span-8 bg-white border border-neutral-100 rounded-4xl p-8 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.06)] min-h-[380px] flex flex-col justify-between relative overflow-hidden">
            <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${product.accentColor}`} />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${product.modules[activeTab].bgColor} ${product.modules[activeTab].color}`}>
                      {React.createElement(product.modules[activeTab].icon, { size: 24 })}
                    </div>
                    <h3 className="text-2xl font-extrabold text-neutral-900">{product.modules[activeTab].title}</h3>
                  </div>

                  {product.modules[activeTab].desc && (
                    <p className="text-neutral-500 text-base leading-relaxed mb-6 font-medium">
                      {product.modules[activeTab].desc}
                    </p>
                  )}

                  {product.modules[activeTab].points && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {product.modules[activeTab].points?.map((point, k) => (
                        <div key={k} className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50 border border-neutral-100/60">
                          <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-sm font-semibold text-neutral-700 leading-snug">{point}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES & ERP INTEGRATION SECTIONS */}
      <section className="py-16 md:py-24 bg-bg-2 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Industries */}
          <div className="bg-white border border-neutral-100 rounded-4xl p-8 shadow-sm">
            <h3 className="text-2xl font-extrabold text-neutral-900 mb-2">{product.industriesTitle}</h3>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6 font-medium">
              {product.industriesDesc}
            </p>
            <div className="flex flex-wrap gap-2">
              {product.industries.map((ind, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full border border-neutral-200 text-neutral-700 text-xs md:text-sm font-medium hover:bg-neutral-50 transition-colors"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: ERP / Connectivity (if present) */}
          {product.integrationsTitle && product.integrations && (
            <div className="bg-white border border-neutral-100 rounded-4xl p-8 shadow-sm relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${product.accentColor} rounded-full filter blur-[40px] opacity-10`} />
              
              <h3 className="text-2xl font-extrabold text-neutral-900 mb-2">{product.integrationsTitle}</h3>
              {product.integrationsDesc && (
                <p className="text-neutral-500 text-sm leading-relaxed mb-6 font-medium">
                  {product.integrationsDesc}
                </p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {product.integrations.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3.5 rounded-2xl bg-neutral-50 border border-neutral-100">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <Check size={11} />
                    </div>
                    <span className="text-sm font-bold text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 8. WHY CHOOSE THIS PRODUCT */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3 block">Product Values</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-brand-navy mb-4">
              {product.whyTitle}
            </h2>
            <p className="text-neutral-500 text-base leading-relaxed font-medium">
              {product.whyDesc}
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            {product.whyBullets.map((bullet, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-3xl border border-neutral-100 p-5 shadow-xs"
              >
                <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${product.accentColor} flex items-center justify-center mt-0.5 shrink-0 shadow-sm`}>
                  <Check size={13} className="text-white" />
                </div>
                <p className="text-base text-neutral-700 leading-relaxed font-bold">
                  {bullet}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQs SECTION */}
      {product.faqs && product.faqs.length > 0 && (
        <section className="py-16 md:py-24 bg-bg-3/50 px-6 border-t border-neutral-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3 block">Got Questions?</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-brand-navy mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="flex flex-col gap-3.5">
              {product.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white border border-neutral-100 rounded-3xl overflow-hidden shadow-xs transition-colors duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left font-bold text-neutral-900 text-base md:text-lg cursor-pointer hover:bg-neutral-50/50"
                  >
                    <span>{faq.question}</span>
                    <span className={`w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-500 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180 text-primary" : ""
                    }`}>
                      <ChevronRight size={18} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-6 pt-0 border-t border-neutral-50 text-neutral-500 text-sm md:text-base leading-relaxed font-medium">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. DYNAMIC FINAL CALL TO ACTION BANNER */}
      <section className="py-20 md:py-28 bg-brand-navy text-white text-center relative px-6 overflow-hidden">
        {/* Glow gradients */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br ${product.accentColor} rounded-full filter blur-[150px] opacity-15 pointer-events-none`} />
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <Eyebrow variant="dark">Next Step</Eyebrow>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-3xl mt-4">
            {product.ctaTitle}
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            {product.ctaSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-xl">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-full sm:w-auto"
            >
              <Link
                href={product.ctaButton1.href}
                className="group flex items-center justify-between gap-3.5 pl-7 pr-3 py-3.5 bg-primary hover:bg-primary/90 text-white rounded-full font-bold text-sm tracking-wide transition-all duration-300 w-full sm:w-auto cursor-pointer"
              >
                <SwapLabel>{product.ctaButton1.label}</SwapLabel>
                <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 group-hover:translate-x-0.5 shrink-0">
                  <ArrowUpRight size={16} />
                </div>
              </Link>
            </motion.div>

            {product.ctaButton2 && (
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href={product.ctaButton2.href}
                  className="group flex items-center justify-between gap-3.5 pl-7 pr-3 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold text-sm tracking-wide border border-white/20 hover:border-white/40 transition-all duration-300 w-full sm:w-auto cursor-pointer"
                >
                  <SwapLabel>{product.ctaButton2.label}</SwapLabel>
                  <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:translate-x-0.5 shrink-0">
                    <ArrowUpRight size={16} />
                  </div>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
