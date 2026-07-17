"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const INDUSTRIES = [
  {
    title: "Distribution & Wholesale",
    description:
      "Optimize inventory, sales, warehousing, and distribution operations.",
    image: encodeURI("/assets/images/industries/Distribution & Wholesale.png"),
  },
  {
    title: "Manufacturing",
    description:
      "Improve production, quality, inventory, and operational efficiency.",
    image: encodeURI("/assets/images/industries/Manufacturing.png"),
  },
  {
    title: "Logistics, Freight Forwarding & Supply Chain",
    description:
      "Streamline freight, warehousing, transportation, and supply chain operations.",
    image: encodeURI(
      "/assets/images/industries/Logistics, Freight Forwarding & Supply Chain.png"
    ),
  },
  {
    title: "Retail & E-Commerce",
    description:
      "Connect retail, e-commerce, inventory, and customer experiences.",
    image: encodeURI("/assets/images/industries/Retail & E-Commerce.png"),
  },
  {
    title: "Healthcare & Life Sciences",
    description:
      "Modernize healthcare operations, compliance, and resource management.",
    image: encodeURI(
      "/assets/images/industries/Healthcare & Life Sciences.png"
    ),
  },
  {
    title: "Construction, Engineering & Project-Based Businesses",
    description:
      "Manage projects, resources, procurement, and financial performance.",
    image: encodeURI(
      "/assets/images/industries/Construction, Engineering & Project-Based Businesses.png"
    ),
  },
  {
    title: "Professional Services, Consulting & Knowledge-Based Businesses",
    description:
      "Streamline projects, resources, clients, and business operations.",
    image: encodeURI(
      "/assets/images/industries/Professional Services, Consulting & Knowledge-Based Businesses.png"
    ),
  },
  {
    title: "Food, Beverage & FMCG",
    description:
      "Optimize production, quality, inventory, and distribution processes.",
    image: encodeURI("/assets/images/industries/Food, Beverage & FMCG.png"),
  },
  {
    title: "Automotive, Mobility & After-Sales Services",
    description:
      "Enhance vehicle sales, service, workshops, and after-sales operations.",
    image: encodeURI(
      "/assets/images/industries/Automotive, Mobility & After-Sales Services.png"
    ),
  },
];

const CARD_STEP = 384; // card width (360) + gap (24)
const SLIDE_DURATION = 4000; // ms per slide
const SET_WIDTH = INDUSTRIES.length * CARD_STEP;

// Render three copies back-to-back so the track always has real cards to
// scroll into in either direction; the boundary-correction effect below
// silently snaps between copies once they're out of view.
const DISPLAY_INDUSTRIES = [...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES];

export default function IndustriesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [cycle, setCycle] = useState(0);

  const scrollByCards = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * CARD_STEP, behavior: "smooth" });
    setCycle((c) => c + 1);
  }, []);

  // Start centered in the middle copy, and silently snap back into it
  // whenever a scroll (auto-advance, buttons, or manual drag) carries the
  // track into the first or third copy — since the copies are identical,
  // the jump is invisible and the carousel feels endless.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    el.scrollLeft = SET_WIDTH;

    let settleTimeout: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      clearTimeout(settleTimeout);
      settleTimeout = setTimeout(() => {
        const max = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft < SET_WIDTH - CARD_STEP / 2) {
          el.scrollLeft += SET_WIDTH;
        } else if (el.scrollLeft > max - SET_WIDTH + CARD_STEP / 2) {
          el.scrollLeft -= SET_WIDTH;
        }
      }, 120);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", handleScroll);
      clearTimeout(settleTimeout);
    };
  }, []);

  useEffect(() => {
    setProgress(0);
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const pct = Math.min((now - start) / SLIDE_DURATION, 1);
      setProgress(pct);
      if (pct < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        scrollByCards(1);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [cycle, scrollByCards]);

  return (
    <section className="overflow-hidden bg-[#0B0714] px-4 py-16 md:px-8 md:py-24 xl:py-[120px]">
      <div className="container-main grid grid-cols-1 items-center gap-12 lg:grid-cols-[360px_1fr] lg:gap-16">
        {/* Left column */}
        <div className="flex flex-col items-start">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white" />
            <span className="text-[14px] font-semibold uppercase tracking-[0.2em] text-white">
              Industry Expertise
            </span>
          </span>
          <h2 className="mt-6 text-[36px] font-medium leading-[1.2] tracking-[-0.01em] text-white md:text-[44px]">
            Technology for <br />
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text font-semibold text-transparent">
              Every Industry
            </span>
          </h2>
          <p className="mt-6 max-w-[420px] text-body-16 leading-[1.7] text-white/85">
            Every industry operates differently. We deliver industry-focused
            solutions that address unique operational challenges, improve
            efficiency, and accelerate digital transformation.
          </p>
          <Link
            href="/services"
            className="mt-8 inline-flex items-center rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] px-7 py-3.5 text-[15px] font-semibold text-white transition-opacity duration-300 hover:opacity-90"
          >
            See the industries we serve
          </Link>
        </div>

        {/* Right column — carousel */}
        <div className="min-w-0">
          <div
            ref={trackRef}
            style={{ marginRight: "calc(50% - 50vw)" }}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pr-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {DISPLAY_INDUSTRIES.map((item, i) => (
              <article
                key={`${item.title}-${i}`}
                className="flex h-[560px] w-[330px] shrink-0 snap-start flex-col overflow-hidden rounded-[18px] bg-white md:w-[360px]"
              >
                <div className="p-6 md:p-7">
                  <h3 className="text-[22px] font-semibold leading-[1.3] tracking-[-0.01em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-body-16 text-body-gray">
                    {item.description}
                  </p>
                </div>
                <div className="relative mt-auto flex-1">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="360px"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent" />
                </div>
              </article>
            ))}
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center gap-6">
            <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-white"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <div className="flex shrink-0 items-center gap-5">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => scrollByCards(-1)}
                className="text-white transition-opacity hover:opacity-70"
              >
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                  <path
                    d="M21 8H1m0 0l6.5-6.5M1 8l6.5 6.5"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => scrollByCards(1)}
                className="text-white transition-opacity hover:opacity-70"
              >
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                  <path
                    d="M1 8h20m0 0l-6.5-6.5M21 8l-6.5 6.5"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
