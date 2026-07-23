"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Badge from "../badge";

export default function ContactHero() {
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
    <section className="relative -mt-[80px] lg:-mt-[99px] min-h-[45vh] pt-[150px] lg:pt-[170px] pb-16 px-4 sm:px-6 bg-brand-navy text-white flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Full-bleed background image */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: bgScale, y: bgY }}
      >
        <Image
          src="/images/contact/contact.png"
          alt="Contact Us"
          fill
          priority
          className="object-cover object-bottom"
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
        >
          <Badge text="Contact Us" variant="light" />
        </motion.div>

        {/* Heading */}
        <h1 className="heading-1 !text-white tracking-tight max-w-4xl mb-6 flex flex-wrap justify-center !font-semibold">
          {"Get in touch with us"
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
          className="text-neutral-200 text-base md:text-lg max-w-2xl leading-relaxed font-medium"
        >
          Have a question, a project in mind, or just want to learn more?
          We&rsquo;re here to listen and help you move forward with clarity
          and care.
        </motion.p>
      </div>
    </section>
  );
}
