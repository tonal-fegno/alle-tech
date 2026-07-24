"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Badge from "@/components/badge";
import { ShieldCheck, Cpu, Zap, ArrowDown } from "lucide-react";
import heroimg from '@/public/images/products/banner.png';
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
    <section className="relative -mt-[80px] flex min-h-[74vh] flex-col items-center justify-center overflow-hidden bg-brand-navy px-4 pb-24 pt-[200px] text-center text-white lg:-mt-[99px]">
      <motion.div
        className="absolute inset-0"
        style={{ scale: bgScale, y: bgY }}
      >
        <Image
          src={heroimg.src}
          alt="Enterprise Software Products"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark/95 via-brand-navy-dark/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-dark/70 via-transparent to-brand-navy-dark/80" />

      <div className="container-main relative z-10 flex flex-col items-center">
        {/* Eyebrow Badge */}
        <div className="mb-6">
          <Badge text="ALLE TECH Software Suite" variant="light" />
        </div>

        {/* Animated Heading on 2 Lines */}
        <h1 className="text-[32px] sm:text-[44px] md:text-[50px] lg:text-[56px] xl:text-[60px] font-semibold leading-[1.15] tracking-tight mb-6 max-w-6xl text-center !text-white">
          <span className="block whitespace-nowrap sm:whitespace-normal md:whitespace-nowrap">
            {"Intelligent Enterprise Platforms".split(" ").map((word, idx) => (
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
          </span>
          <span className="block whitespace-nowrap sm:whitespace-normal md:whitespace-nowrap">
            {"Built for Operational Excellence".split(" ").map((word, idx) => (
              <motion.span
                key={`l2-${idx}`}
                initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.8,
                  delay: 0.25 + idx * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-xl text-body-18 font-medium leading-relaxed text-white/90 mb-6"
        >
          Specialized enterprise platforms for field operations, intercompany
          management, digital logistics, and UAE e-invoicing.
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
