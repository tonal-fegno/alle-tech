"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { PRODUCTS } from "@/lib/constants";

const SOLUTION_ART = [
  {
    base: "linear-gradient(140deg,#071c4d 0%,#123a9e 30%,#2f7de0 55%,#5db4f5 72%,#0a2568 100%)",
    blobA:
      "radial-gradient(ellipse 60% 45% at 70% 25%, rgba(125,200,255,0.85), transparent 70%)",
    blobB:
      "radial-gradient(ellipse 55% 40% at 25% 65%, rgba(10,30,90,0.9), transparent 70%)",
  },
  {
    base: "linear-gradient(140deg,#22084d 0%,#5b21b6 32%,#a855f7 58%,#e9d5ff 75%,#3b0f78 100%)",
    blobA:
      "radial-gradient(ellipse 60% 45% at 65% 20%, rgba(240,225,255,0.9), transparent 70%)",
    blobB:
      "radial-gradient(ellipse 55% 45% at 30% 70%, rgba(40,8,90,0.9), transparent 70%)",
  },
  {
    base: "linear-gradient(140deg,#6b2447 0%,#c05585 30%,#f0a3c0 55%,#f7d4de 72%,#7c2d52 100%)",
    blobA:
      "radial-gradient(ellipse 60% 45% at 60% 30%, rgba(255,220,235,0.85), transparent 70%)",
    blobB:
      "radial-gradient(ellipse 55% 45% at 25% 75%, rgba(90,25,60,0.85), transparent 70%)",
  },
  {
    base: "linear-gradient(140deg,#02121c 0%,#0a3d4d 32%,#15818e 58%,#67d6d0 78%,#092c3e 100%)",
    blobA:
      "radial-gradient(ellipse 60% 45% at 70% 25%, rgba(150,235,225,0.8), transparent 70%)",
    blobB:
      "radial-gradient(ellipse 55% 45% at 25% 70%, rgba(4,20,35,0.9), transparent 70%)",
  },
  {
    base: "linear-gradient(140deg,#301c02 0%,#7a4a08 30%,#d68e1d 55%,#ffd98a 72%,#3d2404 100%)",
    blobA:
      "radial-gradient(ellipse 60% 45% at 70% 25%, rgba(255,224,160,0.85), transparent 70%)",
    blobB:
      "radial-gradient(ellipse 55% 45% at 25% 70%, rgba(45,25,4,0.9), transparent 70%)",
  },
];

export default function ServicesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollByCard = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.9;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0B0714] px-4 py-16 md:px-8 md:py-24 xl:py-[120px]">
      {/* Ambient purple glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px]"
        style={{
          background:
            "radial-gradient(ellipse 70% 90% at 50% -20%, rgba(76,29,149,0.75), transparent 70%)",
        }}
      />

      <div className="container-main relative flex flex-col gap-12 md:gap-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white" />
            <span className="text-16 font-semibold uppercase text-white">
              Our Products
            </span>
          </span>
          <AnimatedHeading className="max-w-[1020px] text-[32px] font-semibold leading-[1.25] tracking-[-0.01em] text-white md:text-[40px] xl:text-[46px]">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Enterprise AI solutions
            </span>{" "}
            for organizations at <br className="hidden sm:block" />
            every stage of adoption
          </AnimatedHeading>
        </div>

        {/* Slider */}
        <div className="relative">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {PRODUCTS.map((item, i) => (
              <div
                key={item.title}
                data-card={i === 0 ? "" : undefined}
                className="group relative min-h-[420px] w-[85%] shrink-0 snap-start overflow-hidden rounded-[20px] border border-white/10 transition-transform duration-300 hover:-translate-y-1.5 sm:w-[calc((100%-24px)/2)] xl:w-[calc((100%-72px)/4)]"
              >
                {/* Abstract gradient artwork */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[length:160%_160%] bg-[position:30%_20%] transition-[background-position,transform] duration-[1400ms] ease-out group-hover:scale-105 group-hover:bg-[position:70%_80%]"
                  style={{
                    backgroundImage: `${SOLUTION_ART[i].blobA}, ${SOLUTION_ART[i].blobB}, ${SOLUTION_ART[i].base}`,
                  }}
                />
                {/* Legibility scrim */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0B0714]/85 via-[#0B0714]/35 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                {/* Extra tint on hover so the title stays legible once it's over the artwork's top half */}
                <div className="absolute inset-0 bg-[#0B0714]/0 transition-colors duration-500 ease-in-out group-hover:bg-[#0B0714]/55" />

                <div className="absolute inset-0 z-10 flex flex-col p-7">
                  <div className="grow shrink-0 basis-0 transition-[flex-grow] duration-500 ease-in-out group-hover:grow-0" />
                  <div>
                    <h3 className="text-[22px] font-semibold leading-[1.3] tracking-[-0.01em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-body-16 text-white/85">
                      {item.description}
                    </p>
                  </div>
                  <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <ul className="mt-4 flex flex-col gap-2 border-t border-white/15 pt-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                        {item.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-center gap-2 text-[14px] text-white/80"
                          >
                            <span className="h-1 w-1 shrink-0 rounded-full bg-white/70" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Prev / next controls */}
          <div className="mt-6 flex items-center justify-end gap-4">
            <button
              type="button"
              aria-label="Previous"
              disabled={!canPrev}
              onClick={() => scrollByCard(-1)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur transition-colors duration-300 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white/5"
            >
              <svg width="20" height="14" viewBox="0 0 22 16" fill="none">
                <path
                  d="M21 8H1m0 0l6.5-6.5M1 8l6.5 6.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next"
              disabled={!canNext}
              onClick={() => scrollByCard(1)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur transition-colors duration-300 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white/5"
            >
              <svg width="20" height="14" viewBox="0 0 22 16" fill="none">
                <path
                  d="M1 8h20m0 0l-6.5-6.5M21 8l-6.5 6.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
