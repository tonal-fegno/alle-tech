"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Badge from "@/components/badge";

interface PageHeroProps {
  badgeText?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}

export default function PageHero({
  badgeText,
  title,
  subtitle,
  imageSrc = "/assets/images/hero-bg.png",
  imageAlt = "Hero background",
  children,
}: PageHeroProps) {
  const { scrollY } = useScroll();
  const bgScaleRaw = useTransform(scrollY, [0, 600], [1, 1.15]);
  const bgScale = useSpring(bgScaleRaw, {
    stiffness: 45,
    damping: 20,
    mass: 0.2,
  });
  const bgYRaw = useTransform(scrollY, [0, 600], [0, 80]);
  const bgY = useSpring(bgYRaw, { stiffness: 45, damping: 20, mass: 0.2 });

  return (
    <section className="relative -mt-[80px] lg:-mt-[99px] h-[460px] sm:h-[500px] lg:h-[520px] flex flex-col justify-center overflow-hidden bg-brand-navy text-white">
      <motion.div
        className="absolute inset-0"
        style={{ scale: bgScale, y: bgY }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/75 via-dark-blue/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink/40 to-transparent" />

      <div className="container-main relative z-10 flex flex-col items-center justify-center gap-4 sm:gap-5 px-4 pt-[80px] lg:pt-[99px] text-center md:px-8 w-full h-full">
        {badgeText && <Badge text={badgeText} variant="light" />}
        {typeof title === "string" ? (
          <h1 className="heading-1 max-w-[850px] !text-white leading-tight">
            {title}
          </h1>
        ) : (
          title
        )}
        {subtitle &&
          (typeof subtitle === "string" ? (
            <p className="max-w-[700px] text-body-16 sm:text-body-18 leading-relaxed text-white/90">
              {subtitle}
            </p>
          ) : (
            subtitle
          ))}
        {children}
      </div>
    </section>
  );
}
