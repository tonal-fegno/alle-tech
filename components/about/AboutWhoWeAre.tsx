"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";

export default function AboutWhoWeAre() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Animation starts when the top of the section enters the bottom of the viewport
      const start = viewportHeight;
      // Animation completes when the bottom of the section enters the bottom of the viewport
      const end = viewportHeight - rect.height;

      const range = start - end;
      const current = viewportHeight - rect.top;

      let progress = current / range;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    // Run once on load to set initial position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Compute staggered progress values for the two stats cards
  const card1Progress = scrollProgress;
  const card2Progress = Math.max(0, (scrollProgress - 0.15) / 0.85);

  const card1TranslateX = -60 + card1Progress * 60;
  const card2TranslateX = -60 + card2Progress * 60;

  // Compute image horizontal translate (starts at 40px translated, goes to 0px when in full view)
  const imageTranslateX = (1 - scrollProgress) * 40;

  // Compute text vertical translate (starts at 40px down, goes to 0px)
  const textTranslateY = (1 - scrollProgress) * 40;
  const textOpacity = scrollProgress;

  return (
    <section ref={sectionRef} className="w-full py-8 lg:py-12">
      <div className="flex flex-col gap-[50px]">

        {/* Top Header */}
        <div
          className="flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-[150px] transition-all duration-150 ease-out will-change-transform"
          style={{
            transform: `translateY(${textTranslateY}px)`,
            opacity: textOpacity,
          }}
        >
          <Eyebrow className="lg:pt-2 max-w-[140px] w-full shrink-0">Our Story</Eyebrow>

          <div className="max-w-[950px]">
            <p className="font-inter font-semibold leading-[34px] sm:leading-[42px] xl:leading-[48px] text-[20px] sm:text-[24px] lg:text-[28px] xl:text-[32px] text-dark-blue tracking-tight">
              Every successful business reaches a point where growth creates complexity. Operations become more demanding, processes become disconnected, information becomes fragmented, and decision-making becomes slower.
            </p>
          </div>
        </div>

        {/* Cards & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Narrative and Cards */}
          <div className="lg:col-span-7 flex flex-col gap-8 justify-between">
            {/* Story Paragraph */}
            <p className="font-inter font-normal text-[16px] leading-[26px] sm:text-[18px] sm:leading-[28px] text-body-gray">
              Many organizations begin their technology journey by searching for software. We believe the real challenge is understanding how technology can improve the way a business operates. That's why every engagement begins with understanding your business objectives, operational challenges, future growth plans, and industry requirements before recommending technology.
            </p>

            {/* Belief & Callout Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {/* Card 1: Business Insight */}
              <div
                className="bg-white rounded-[24px] flex flex-col gap-6 justify-between shadow-md hover:shadow-lg hover:-translate-y-1 p-[29px] border border-border-gray/20 transition-all duration-150 ease-out will-change-transform text-ink"
                style={{
                  transform: `translateX(${card1TranslateX}px)`,
                }}
              >
                <div className="font-inter font-semibold tracking-wider text-[12px] uppercase text-primary">
                  Business Insight
                </div>
                <div>
                  <div className="font-inter font-medium text-[18px] sm:text-[20px] leading-[28px] tracking-normal mb-4">
                    "Technology should simplify business—not complicate it."
                  </div>
                </div>
              </div>

              {/* Card 2: Callout */}
              <div
                className="bg-white rounded-[24px] flex flex-col gap-6 justify-between shadow-md hover:shadow-lg hover:-translate-y-1 p-[29px] border border-border-gray/20 transition-all duration-150 ease-out will-change-transform text-ink"
                style={{
                  transform: `translateX(${card2TranslateX}px)`,
                }}
              >
                <div className="font-inter font-semibold tracking-wider text-[12px] uppercase text-primary">
                  Digital Transformation
                </div>
                <div>
                  <div className="font-inter font-medium text-[18px] sm:text-[20px] leading-[28px] tracking-normal text-dark-blue">
                    "Successful digital transformation begins with understanding the business—not the software."
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-full rounded-[24px] overflow-hidden bg-bg-1/50">
            <div
              className="absolute inset-0 w-full h-full rounded-[24px] overflow-hidden group hover:shadow-xl transition-all duration-150 ease-out will-change-transform"
              style={{
                transform: `translateX(${imageTranslateX}px)`,
              }}
            >
              <Image
                src="/assets/images/about/about-img-1.avif"
                alt="ALLE TECH strategic business consulting and technology development"
                fill
                className="object-cover scale-110 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
