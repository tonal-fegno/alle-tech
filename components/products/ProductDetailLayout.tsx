"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronRight,
  HelpCircle,
  ShieldCheck,
  Zap,
  Wrench,
  Users,
  Building2,
  ShoppingBag,
  Truck,
  Factory,
  Globe,
  Database,
  Server,
  Activity,
  Package,
  Target,
  Award,
  Sparkles,
  CheckCircle2,
  Briefcase,
  Boxes,
  ShieldAlert,
  Rocket,
  Share2,
  Cpu,
  Layers,
} from "lucide-react";
import { ProductDetail } from "@/data/productDetails";
import Eyebrow from "@/components/ui/Eyebrow";
import { SwapLabel } from "@/components/common/HoverSwap";

interface ProductDetailLayoutProps {
  product: ProductDetail;
}

const ease = [0.16, 1, 0.3, 1] as const;

function getIndustryIcon(name: string) {
  const n = name.toLowerCase();
  if (
    n.includes("fmcg") ||
    n.includes("retail") ||
    n.includes("ecommerce") ||
    n.includes("shop")
  )
    return ShoppingBag;
  if (
    n.includes("distrib") ||
    n.includes("logistics") ||
    n.includes("transport") ||
    n.includes("export") ||
    n.includes("3pl")
  )
    return Truck;
  if (n.includes("manufactur") || n.includes("industrial")) return Factory;
  if (n.includes("pharma") || n.includes("health") || n.includes("medical"))
    return Activity;
  if (n.includes("auto")) return Wrench;
  if (
    n.includes("utility") ||
    n.includes("facility") ||
    n.includes("holding") ||
    n.includes("branch")
  )
    return Building2;
  if (n.includes("service") || n.includes("maintenance")) return Wrench;
  if (n.includes("food") || n.includes("beverage")) return Package;
  return Briefcase;
}

function getIntegrationIcon(name: string) {
  const n = name.toLowerCase();
  if (
    n.includes("sap") ||
    n.includes("odoo") ||
    n.includes("erp") ||
    n.includes("database")
  )
    return Database;
  if (
    n.includes("power bi") ||
    n.includes("analytics") ||
    n.includes("dashboard")
  )
    return Cpu;
  if (n.includes("warehouse") || n.includes("wms") || n.includes("inventory"))
    return Boxes;
  if (
    n.includes("portal") ||
    n.includes("web") ||
    n.includes("api") ||
    n.includes("cloud")
  )
    return Globe;
  if (n.includes("whatsapp") || n.includes("email") || n.includes("messag"))
    return Share2;
  if (n.includes("bank") || n.includes("payment") || n.includes("tax"))
    return Zap;
  return Server;
}

export default function ProductDetailLayout({
  product,
}: ProductDetailLayoutProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Resolve product website URL or fallback
  const hasLiveSite = Boolean(
    product.displayUrl || (product.logo && product.logo.startsWith("http")),
  );
  let visitUrl = "";
  if (hasLiveSite) {
    if (product.displayUrl) {
      visitUrl = product.displayUrl.startsWith("http")
        ? product.displayUrl
        : `https://${product.displayUrl}`;
    } else if (product.logo && product.logo.startsWith("http")) {
      try {
        visitUrl = new URL(product.logo).origin;
      } catch (e) {
        visitUrl = "";
      }
    }
  }

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative -mt-[80px] lg:-mt-[99px] min-h-[500px] sm:min-h-[550px] md:min-h-[620px] lg:min-h-[700px] flex items-center bg-brand-navy text-white overflow-hidden pt-[120px] sm:pt-[140px] md:pt-[150px] lg:pt-0 pb-12 sm:pb-16 lg:pb-0">
        {/* Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${product.darkBgGradient} z-0`}
        />
        <div
          className={`absolute top-1/3 right-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-gradient-to-br ${product.accentColor} rounded-full blur-[160px] opacity-15 pointer-events-none z-0`}
        />
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left */}
          <div className="flex flex-col items-start w-full">
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/50 hover:text-white/80 transition-colors mb-6 sm:mb-8"
              >
                <ArrowLeft
                  size={13}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                Back to Products
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.06 }}
              className="mb-4"
            >
              <Eyebrow variant="dark" showDot={false}>
                {product.tagline}
              </Eyebrow>
            </motion.div>

            <div className="flex items-center gap-3 sm:gap-4 mb-4 flex-wrap">
              {product.logo && (
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  src={product.logo}
                  alt={`${product.title} logo`}
                  className="h-9 sm:h-10 md:h-12 w-auto object-contain max-w-[160px] sm:max-w-[200px] shrink-0 drop-shadow-xl"
                />
              )}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] flex flex-wrap">
                {product.title.split(" ").map((word, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 1,
                      delay: 0.1 + idx * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`h-[3px] w-16 rounded-full bg-gradient-to-r ${product.accentColor} mb-5 origin-left`}
            />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26 }}
              className="text-white/75 text-base sm:text-lg md:text-xl leading-relaxed font-normal mb-4 max-w-lg"
            >
              {product.heroSubtitle}
            </motion.p>

            {product.heroDesc && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.32 }}
                className="text-white/50 text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal mb-8 max-w-lg"
              >
                {product.heroDesc}
              </motion.p>
            )}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34 }}
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
            >
              <Link
                href={product.ctaButton1.href}
                className="group flex items-center justify-between gap-4 pl-6 pr-2.5 py-3 rounded-full font-bold text-sm text-white bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-300 w-full sm:w-auto"
              >
                <span>{product.ctaButton1.label}</span>
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 group-hover:translate-x-0.5 transition-all duration-300 shrink-0">
                  <ArrowUpRight size={14} />
                </div>
              </Link>
              {product.ctaButton2 && (
                <Link
                  href={product.ctaButton2.href}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-sm text-white/85 hover:text-white bg-white/8 hover:bg-white/12 border border-white/15 hover:border-white/25 backdrop-blur-md transition-all duration-300 w-full sm:w-auto"
                >
                  {product.ctaButton2.label}
                </Link>
              )}
            </motion.div>
          </div>

          {/* Right — Hero Image Showcase */}
          <div className="flex flex-col items-center md:items-end w-full max-w-[520px] mx-auto md:ml-auto mt-4 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden group/mockup"
            >
              <img
                src={product.heroImage}
                alt={`${product.title} Showcase`}
                className="w-full h-full object-cover rounded-2xl group-hover/mockup:scale-[1.03] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-navy/60 to-transparent pointer-events-none z-10" />
            </motion.div>

            {hasLiveSite && visitUrl && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-4"
              >
                <a
                  href={visitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/visit inline-flex items-center gap-2 text-base md:text-lg font-bold text-white hover:text-sky-300 transition-colors"
                >
                  <Globe
                    size={20}
                    className="text-primary shrink-0 transition-transform group-hover/visit:rotate-12 duration-300"
                  />
                  <span>Visit Website</span>
                  <ChevronRight
                    size={20}
                    className="transition-transform group-hover/visit:translate-x-1.5 text-primary duration-300"
                  />
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <div className="bg-brand-bg">
        {/* 2. OVERVIEW & CORE CONCEPT */}
        <section className="py-12 sm:py-20 md:py-28 bg-[#fafbfd] border-b border-neutral-100/60 px-4 sm:px-6 md:px-8 relative overflow-hidden">
          {/* Background decorative path */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <svg
              className="absolute -top-24 -left-24 w-96 h-96 text-primary/5"
              fill="currentColor"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center relative z-10">
            <div className="lg:col-span-7">
              <Eyebrow className="mb-4">Core Concept</Eyebrow>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-navy mb-4 sm:mb-6 leading-tight">
                {product.conceptTitle} <br />
                <span className="text-neutral-400 font-semibold block mt-1 text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {product.conceptSubtitle}
                </span>
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                {product.conceptDesc}
              </p>
            </div>

            <div className="lg:col-span-5 bg-white rounded-2xl sm:rounded-[32px] border border-neutral-200/60 p-5 sm:p-8 md:p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] relative overflow-hidden group/concept-card">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-primary" />
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl flex items-center justify-center bg-primary text-white shrink-0 shadow-md">
                  <Target size={18} />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-neutral-800 uppercase tracking-widest">
                  Target Operations
                </h3>
              </div>
              <ul className="flex flex-col gap-3.5 sm:gap-4">
                {product.conceptBullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-3 sm:gap-3.5 group"
                  >
                    <div className="mt-1 shrink-0 w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300">
                      <CheckCircle2 size={13} className="text-emerald-600" />
                    </div>
                    <span className="text-neutral-700 text-xs sm:text-sm md:text-base font-bold leading-normal">
                      {bullet}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 3. CHALLENGES SECTION */}
        <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto text-left">
          <div className="max-w-3xl mb-8 md:mb-16">
            <Eyebrow className="mb-3">Pain Points</Eyebrow>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-navy mb-3 sm:mb-5 leading-tight">
              {product.challengesTitle}
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm md:text-base leading-relaxed font-semibold">
              Many organizations struggle to manage their daily workflows
              efficiently. Our tools convert these persistent operational
              friction points into structured business assets.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-neutral-100">
            {product.challenges.map((challenge, idx) => {
              const IconComp = challenge.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: idx * 0.06, ease }}
                  className="group flex items-start gap-3 sm:gap-6 md:gap-10 py-4 sm:py-6 md:py-8 hover:bg-neutral-50/60 transition-colors duration-200 px-1 sm:px-2 rounded-xl"
                >
                  <span className="hidden sm:block shrink-0 text-4xl md:text-5xl font-black text-neutral-100 group-hover:text-neutral-200 transition-colors duration-300 leading-none select-none w-12 text-right">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-start gap-3 sm:gap-5 flex-1 min-w-0">
                    <div className="shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center mt-0.5 group-hover:scale-110 group-hover:bg-amber-100 transition-all duration-300">
                      <IconComp className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-amber-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base md:text-lg font-extrabold text-neutral-900 mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-200">
                        {challenge.title}
                      </h3>
                      <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-medium">
                        {challenge.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 4. BUSINESS OUTCOMES SECTION */}
        <section className="py-12 sm:py-20 md:py-28 bg-[#1c3849] text-white px-4 sm:px-6 md:px-8 overflow-hidden relative">
          {/* Glow overlay */}
          <div
            className={`absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-gradient-to-br ${product.accentColor} rounded-full filter blur-[130px] opacity-15 pointer-events-none`}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-3xl mb-10 md:mb-16">
              <Eyebrow className="mb-3" variant="dark">Outcomes</Eyebrow>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3 sm:mb-5 leading-tight">
                {product.outcomesTitle}
              </h2>
              <p className="text-neutral-350 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
                {product.outcomesDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {product.outcomes.map((outcome, idx) => {
                const IconComp = outcome.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="bg-white/[0.03] border border-white/10 hover:border-white/20 rounded-2xl sm:rounded-[24px] p-5 sm:p-7 hover:bg-white/[0.06] transition-all duration-300 group"
                  >
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-r ${product.accentColor} flex items-center justify-center mb-4 sm:mb-5 shadow-lg group-hover:scale-105 transition-transform`}
                    >
                      <IconComp className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                      {outcome.title}
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-normal">
                      {outcome.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. AI FEATURES SECTION (If present) */}
        {product.aiTitle && product.aiFeatures && (
          <section className="py-12 sm:py-20 md:py-32 bg-[#020716] text-white px-4 sm:px-6 md:px-8 relative overflow-hidden border-t border-white/5">
            {/* Futuristic Ambient Orbs & Mesh */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            />
            <div
              className={`absolute top-0 right-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-gradient-to-br ${product.accentColor} rounded-full blur-[120px] sm:blur-[160px] opacity-10 pointer-events-none`}
            />

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="max-w-3xl mb-10 md:mb-16">
                <Eyebrow className="mb-3 sm:mb-5" variant="dark">INTELLIGENCE & AI ENGINE</Eyebrow>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3 sm:mb-5 leading-tight">
                  {product.aiTitle}
                </h2>
                <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
                  {product.aiDesc}
                </p>
              </div>

              <div className="relative max-w-5xl mx-auto mt-8 sm:mt-16 md:mt-24">
                {/* Central glowing line */}
                <div className="absolute left-4 sm:left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent -translate-x-1/2" />

                {product.aiFeatures.map((ai, idx) => {
                  const IconComp = ai.icon;
                  const isEven = idx % 2 === 0;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: 0.7,
                        delay: idx * 0.15,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={`relative flex items-center mb-8 sm:mb-16 md:mb-24 last:mb-0 ${isEven ? "md:flex-row-reverse" : "md:flex-row"}`}
                    >
                      {/* Node on the line */}
                      <div className="absolute left-4 sm:left-8 md:left-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#000a1f] border-2 sm:border-[3px] border-primary/40 -translate-x-1/2 flex items-center justify-center z-10 shadow-lg">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-primary animate-pulse" />
                      </div>

                      {/* Spacer to push content to alternating sides on desktop */}
                      <div className="hidden md:block w-1/2" />

                      {/* Content Box */}
                      <div
                        className={`w-full pl-10 sm:pl-16 md:pl-0 md:w-1/2 ${isEven ? "md:pr-12 lg:pr-16" : "md:pl-12 lg:pl-16"} text-left`}
                      >
                        <div className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-primary/40 hover:bg-white/[0.04] rounded-2xl sm:rounded-[32px] p-4 sm:p-8 md:p-10 shadow-2xl transition-all duration-500 overflow-hidden">
                          {/* Glow inside card */}
                          <div
                            className={`absolute top-0 ${isEven ? "left-0" : "right-0"} w-36 h-36 sm:w-48 sm:h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/20 transition-all duration-500`}
                          />

                          {/* Header */}
                          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 mb-3 sm:mb-6 relative z-10 justify-start">
                            <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-indigo-500/20 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shrink-0">
                              <IconComp className="w-4.5 h-4.5 sm:w-6 sm:h-6" />
                            </div>
                            <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-primary/90 bg-primary/10 border border-primary/30 px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-full backdrop-blur-md">
                              AI Model
                            </span>
                          </div>

                          <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-4 group-hover:text-primary transition-colors duration-300 relative z-10">
                            {ai.title}
                          </h3>

                          <p className="text-neutral-400 text-xs sm:text-base leading-relaxed font-normal relative z-10">
                            {ai.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* 6. MODULES SECTION (Product Capabilities) */}
        <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl mb-8 md:mb-16">
            <Eyebrow className="mb-3">Product Capabilities</Eyebrow>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-navy mb-3 sm:mb-5">
              {product.modulesTitle}
            </h2>
            {product.modulesDesc && (
              <p className="text-neutral-500 text-xs sm:text-sm md:text-base leading-relaxed font-semibold">
                {product.modulesDesc}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-neutral-100 rounded-2xl sm:rounded-[28px] overflow-hidden shadow-xs">
            {product.modules.map((mod, i) => {
              const IconComp = mod.icon;
              const isOddTotal = product.modules.length % 2 === 1;
              const isLastItem = i === product.modules.length - 1;
              const isLastRow =
                i >= product.modules.length - (isOddTotal ? 1 : 2);
              const isRightCol = i % 2 === 1;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                  className={`group relative flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 md:p-8 bg-white hover:bg-neutral-50/80 transition-colors duration-200
                    ${!isLastItem ? "border-b border-neutral-100" : ""}
                    ${isLastRow && !isLastItem ? "md:border-b-0" : ""}
                    ${!isRightCol && !(isOddTotal && isLastItem) ? "md:border-r border-neutral-100" : ""}
                    ${isOddTotal && isLastItem ? "md:col-span-2" : ""}
                  `}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div
                      className={`shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl flex items-center justify-center ${mod.bgColor} ${mod.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComp className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-neutral-900 group-hover:text-primary transition-colors duration-200">
                      {mod.title}
                    </h3>
                  </div>
                  <div className="flex-1 min-w-0">
                    {mod.desc && (
                      <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-medium">
                        {mod.desc}
                      </p>
                    )}
                    {mod.points && mod.points.length > 0 && (
                      <ul className="mt-3 flex flex-col gap-1.5 list-none">
                        {mod.points.map((point, k) => (
                          <li
                            key={k}
                            className="flex items-center gap-2 text-xs font-semibold text-neutral-500"
                          >
                            <Check
                              size={11}
                              className="text-emerald-500 shrink-0"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 7. INDUSTRIES & ERP INTEGRATION SECTIONS */}
        <section className="py-12 sm:py-20 md:py-28 bg-[#fafbfd] border-y border-neutral-100 px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            {product.integrationsTitle &&
            product.integrations &&
            product.integrations.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
                {/* Left Column: Industries */}
                <div className="bg-white border border-neutral-150 rounded-2xl sm:rounded-[32px] p-5 sm:p-8 md:p-10 shadow-xs hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Building2 className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900">
                      {product.industriesTitle}
                    </h3>
                  </div>
                  <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 font-medium">
                    {product.industriesDesc}
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {product.industries.map((ind, i) => {
                      const IndIcon = getIndustryIcon(ind);
                      return (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.04 }}
                          className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-neutral-200 bg-neutral-50/60 text-neutral-700 text-xs sm:text-sm font-bold cursor-default hover:bg-white hover:border-primary/40 hover:text-primary transition-all duration-200 shadow-2xs"
                        >
                          <IndIcon
                            size={14}
                            className="text-primary shrink-0"
                          />
                          <span>{ind}</span>
                        </motion.span>
                      );
                    })}
                  </div>
                </div>

                {/* Right Column: ERP / Connectivity */}
                <div className="bg-white border border-neutral-150 rounded-2xl sm:rounded-[32px] p-5 sm:p-8 md:p-10 shadow-xs hover:shadow-md transition-shadow duration-300 relative overflow-hidden group/integ-card">
                  <div
                    className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${product.accentColor} rounded-full filter blur-[50px] opacity-10`}
                  />

                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                      <Server className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900">
                      {product.integrationsTitle}
                    </h3>
                  </div>
                  {product.integrationsDesc && (
                    <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 font-medium">
                      {product.integrationsDesc}
                    </p>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {product.integrations.map((item, i) => {
                      const IntegIcon = getIntegrationIcon(item);
                      return (
                        <motion.div
                          key={i}
                          whileHover={{ x: 4 }}
                          className="flex items-center gap-3 sm:gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-primary/30 hover:bg-white transition-all duration-200 shadow-2xs group"
                        >
                          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                            <IntegIcon size={16} />
                          </div>
                          <span className="text-xs sm:text-sm font-bold text-neutral-800">
                            {item}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              /* Full-Width Layout when no integrations block exists */
              <div className="bg-white border border-neutral-150 rounded-2xl sm:rounded-[32px] p-5 sm:p-8 md:p-12 shadow-xs hover:shadow-md transition-shadow duration-300">
                <div className="max-w-3xl mb-6 sm:mb-8">
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Building2 className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-neutral-900">
                      {product.industriesTitle}
                    </h3>
                  </div>
                  <p className="text-neutral-500 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
                    {product.industriesDesc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {product.industries.map((ind, i) => {
                    const IndIcon = getIndustryIcon(ind);
                    return (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.04 }}
                        className="inline-flex items-center gap-2 sm:gap-3 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full border border-neutral-200 bg-neutral-50/70 text-neutral-700 text-xs sm:text-sm font-bold cursor-default hover:bg-white hover:border-primary/40 hover:text-primary transition-all duration-200 shadow-2xs"
                      >
                        <IndIcon size={16} className="text-primary shrink-0" />
                        <span>{ind}</span>
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 8. WHY CHOOSE THIS PRODUCT */}
        <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3 block">
                <Award size={14} className="text-primary" />
                <span>Product Values</span>
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-navy mb-4 sm:mb-5 leading-tight">
                {product.whyTitle}
              </h2>
              <p className="text-neutral-500 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed font-semibold">
                {product.whyDesc}
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col">
              {product.whyBullets.map((bullet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group flex items-start gap-4 sm:gap-6 py-4 sm:py-6 border-b border-neutral-100 last:border-0 hover:bg-neutral-50/50 px-2 sm:px-3 rounded-lg transition-colors duration-200"
                >
                  <span className="shrink-0 text-2xl sm:text-3xl font-black text-neutral-200 sm:text-neutral-150 group-hover:text-primary/20 transition-colors duration-300 leading-none w-6 sm:w-8 text-right select-none">
                    {i + 1}
                  </span>
                  <p className="text-xs sm:text-sm md:text-base text-neutral-700 leading-relaxed font-bold pt-0.5 group-hover:text-neutral-900 transition-colors duration-200">
                    {bullet}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FAQs SECTION */}
        {product.faqs && product.faqs.length > 0 && (
          <section className="py-12 sm:py-20 md:py-28 bg-[#fafbfd] px-4 sm:px-6 md:px-8 border-t border-neutral-100">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10 md:mb-16">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3 block justify-center">
                  <HelpCircle size={14} className="text-primary" />
                  <span>Got Questions?</span>
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-navy mb-4">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4">
                {product.faqs.map((faq, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div
                      key={i}
                      className={`bg-white border rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 shadow-2xs ${
                        isOpen
                          ? "border-primary/30 shadow-xs"
                          : "border-neutral-150 hover:border-neutral-250"
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full flex items-center justify-between p-4 sm:p-6 text-left font-bold text-neutral-900 text-sm sm:text-base md:text-lg cursor-pointer hover:bg-neutral-50/20 gap-3"
                      >
                        <span
                          className={`${isOpen ? "text-primary" : "text-neutral-950"}`}
                        >
                          {faq.question}
                        </span>
                        <span
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                            isOpen
                              ? "bg-primary text-white rotate-90"
                              : "bg-neutral-50 text-neutral-500"
                          }`}
                        >
                          <ChevronRight size={16} />
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="p-4 sm:p-6 pt-0 border-t border-neutral-50 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed font-bold">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* 10. DYNAMIC FINAL CALL TO ACTION BANNER */}
        <section className="py-16 sm:py-24 md:py-32 bg-brand-navy text-white text-center relative px-4 sm:px-6 md:px-8 overflow-hidden">
          {/* Glow gradients */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[700px] sm:h-[700px] bg-gradient-to-br ${product.accentColor} rounded-full filter blur-[160px] opacity-20 pointer-events-none`}
          />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <Eyebrow variant="dark">Next Step</Eyebrow>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 sm:mb-6 leading-tight max-w-3xl mt-4">
              {product.ctaTitle}
            </h2>
            <p className="text-white/70 text-sm sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-8 sm:mb-12">
              {product.ctaSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-xl">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href={product.ctaButton1.href}
                  className="group flex items-center justify-between sm:justify-center gap-4 pl-6 sm:pl-8 pr-3.5 py-3.5 sm:py-4 bg-primary hover:bg-primary/95 text-white rounded-full font-bold text-sm tracking-wide transition-all duration-300 w-full sm:w-auto cursor-pointer shadow-lg shadow-primary/20"
                >
                  <SwapLabel>{product.ctaButton1.label}</SwapLabel>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 group-hover:translate-x-0.5 shrink-0">
                    <ArrowUpRight size={16} />
                  </div>
                </Link>
              </motion.div>

              {product.ctaButton2 && (
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="w-full sm:w-auto"
                >
                  <Link
                    href={product.ctaButton2.href}
                    className="group flex items-center justify-between sm:justify-center gap-4 pl-6 sm:pl-8 pr-3.5 py-3.5 sm:py-4 bg-white/10 hover:bg-white/15 text-white rounded-full font-bold text-sm tracking-wide border border-white/15 hover:border-white/30 transition-all duration-300 w-full sm:w-auto cursor-pointer backdrop-blur-md"
                  >
                    <SwapLabel>{product.ctaButton2.label}</SwapLabel>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:translate-x-0.5 shrink-0">
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
