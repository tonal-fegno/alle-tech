"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import { ShieldCheck, Cpu, Zap, ArrowDown, Sparkles } from "lucide-react";

interface ProductsHeroSectionProps {
  onExploreClick?: () => void;
}

export default function ProductsHeroSection({
  onExploreClick,
}: ProductsHeroSectionProps) {
  const { scrollY } = useScroll();
  const bgScaleRaw = useTransform(scrollY, [0, 600], [1, 1.15]);
  const bgScale = useSpring(bgScaleRaw, { stiffness: 45, damping: 20 });
  const bgYRaw = useTransform(scrollY, [0, 600], [0, 80]);
  const bgY = useSpring(bgYRaw, { stiffness: 45, damping: 20 });

  const metrics = [
    { icon: ShieldCheck, label: "Enterprise Ready", val: "100% ERP Native" },
    { icon: Cpu, label: "Architecture", val: "Modular Micro-Services" },
    { icon: Zap, label: "Sync Engine", val: "Real-Time & Offline" },
  ];

  return (
    <section className="relative -mt-[80px] lg:-mt-[99px] min-h-[74vh] pt-[170px] sm:pt-[200px] pb-20 sm:pb-24 px-4 sm:px-6 bg-brand-navy-dark text-white flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Dynamic Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Animated Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[350px] h-[350px] bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-[300px] h-[300px] bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Parallax Hero Image Background Layer */}
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-luminosity"
        style={{ scale: bgScale, y: bgY }}
      >
        <Image
          src="/assets/images/solutions/hero.png"
          alt="Enterprise Software Products"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Dark Vignette Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark/90 via-transparent to-brand-navy-dark/90 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-xs font-semibold uppercase tracking-widest"
        >
          <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
          <span>ALLE TECH Software Suite</span>
        </motion.div>

        {/* Animated Heading with Blur & Staggered Reveal */}
        <h1 className="heading-1 !text-white tracking-tight max-w-4xl mb-6 flex flex-wrap justify-center !font-bold leading-[1.15]">
          {"Intelligent Enterprise Platforms Built for Operational Excellence"
            .split(" ")
            .map((word, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.8,
                  delay: 0.1 + idx * 0.04,
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-body-18 md:text-body-20 text-white/75 max-w-2xl font-normal leading-relaxed mb-10"
        >
          Streamline field operations, intercompany management, digital
          logistics, automated customer communication, and UAE e-invoicing
          compliance—all natively synced with your ERP.
        </motion.p>

        {/* Scroll affordance / quick jump */}
        {onExploreClick && (
          <motion.button
            onClick={onExploreClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-white/60 hover:text-white transition-colors duration-200 uppercase cursor-pointer"
          >
            <span>Explore All Products</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <ArrowDown size={14} className="text-primary" />
            </motion.div>
          </motion.button>
        )}
      </div>
    </section>
  );
}
