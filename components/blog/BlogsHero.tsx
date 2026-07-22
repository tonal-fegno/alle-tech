"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const HERO_IMAGE = "/assets/images/hero-bg.png";
const HEADING = "Our latest blogs & articles";

export default function BlogsHero() {
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
    <section className="relative -mt-[80px] flex min-h-[74vh] flex-col items-center justify-center overflow-hidden bg-brand-navy px-4 pb-24 pt-[200px] text-center text-white lg:-mt-[99px]">
      <motion.div
        className="absolute inset-0"
        style={{ scale: bgScale, y: bgY }}
      >
        <Image
          src={HERO_IMAGE}
          alt="Blogs"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark/95 via-brand-navy-dark/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-dark/70 via-transparent to-brand-navy-dark/80" />

      <div className="container-main relative z-10 flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex w-fit items-center rounded-full bg-white/13 px-5 py-2 text-body-16 font-semibold text-white shadow-[0_2px_12px_rgba(0,11,34,0.15)] backdrop-blur-md"
        >
          Blogs & Articles
        </motion.span>

        <h1 className="heading-1 mb-6 flex max-w-4xl flex-wrap justify-center !text-white">
          {HEADING.split(" ").map((word, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 4, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1.1,
                delay: 0.15 + idx * 0.035,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mr-[0.25em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-xl text-body-18 font-medium leading-relaxed text-white/90"
        >
          Expert advice, practical tips, and enterprise technology guides to
          help you maintain a modern, efficient, and growth-oriented
          business.
        </motion.p>
      </div>
    </section>
  );
}
