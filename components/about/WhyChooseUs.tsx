"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import whychoose from '@/public/images/about/about-why-choose.png';

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-8 lg:py-12 bg-white overflow-hidden">
      <div className="flex flex-col gap-8">

        {/* Header Block */}
        <div
          className={`flex flex-col gap-3 transition-all duration-[1200ms] ease-out will-change-transform ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[40px]"
            }`}
        >
          {/* Badge */}
          <Eyebrow>Why Choose Us</Eyebrow>

          {/* Heading */}
          <h2 className="font-inter font-bold text-[36px] leading-[44px] md:text-[48px] md:leading-[58px] text-ink tracking-tight">
            Built for Your Success
          </h2>

          {/* Subtitle */}
          <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[26px] sm:leading-[28px] text-body-gray max-w-[750px]">
            Expert team, proven strategies, personalized approach, and dedicated support to help your business thrive and grow.
          </p>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Left Column (Grid of Cards) */}
          <div
            className={`lg:col-span-8 flex flex-col gap-6 transition-all duration-[1200ms] ease-out delay-150 will-change-transform ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[60px]"
              }`}
          >
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

              {/* Card 1: Our Mission (Royal Blue Gradient) */}
              <div className="md:col-span-7 bg-gradient-primary text-white rounded-[24px] p-8 flex flex-col justify-between min-h-[240px] md:min-h-[260px] shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="font-inter font-bold text-[14px] uppercase tracking-wider text-white/80">
                  Our Mission
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-inter font-bold text-[20px] sm:text-[22px] leading-[28px] tracking-tight">
                    "Creating Measurable Business Value Through Technology"
                  </h3>
                  <p className="font-inter text-[14px] sm:text-[15px] leading-[22px] text-white/85">
                    Our mission is to help organizations improve operational performance, strengthen decision-making, increase productivity, and accelerate sustainable growth by delivering intelligent business technologies aligned with their strategic objectives.
                  </p>
                </div>
              </div>

              {/* Card 2: Our Vision (Light Gray Gradient) */}
              <div className="md:col-span-5 bg-gradient-to-br from-white to-bg-1 border border-border-gray/25 rounded-[24px] p-8 flex flex-col justify-between min-h-[240px] md:min-h-[260px] shadow-sm hover:shadow-md transition-shadow duration-300 group">
                <div className="font-inter font-bold text-[14px] uppercase tracking-wider text-primary">
                  Our Vision
                </div>
                <div className="flex flex-col gap-3 my-auto">
                  <h3 className="font-inter font-bold text-[18px] sm:text-[20px] leading-[26px] tracking-tight text-ink">
                    "Empowering Smarter Businesses Across the GCC"
                  </h3>
                  <p className="font-inter text-[13px] sm:text-[14px] leading-[20px] text-body-gray">
                    To become the GCC's most trusted Business Technology Partner by helping organizations transform the way they operate through intelligent enterprise technologies.
                  </p>
                </div>
              </div>

            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

              {/* Card 3: 12+ Industries (Light Gray Gradient) */}
              <div className="md:col-span-3 bg-gradient-to-br from-white to-bg-1 border border-border-gray/25 rounded-[24px] p-8 flex flex-col justify-between min-h-[240px] md:min-h-[260px] shadow-sm hover:shadow-md transition-shadow duration-300 group">
                <div className="font-inter font-bold text-[56px] leading-[56px] text-primary tracking-tight transition-transform duration-300 group-hover:scale-105 origin-left">
                  12+
                </div>
                <div className="font-inter font-bold text-[16px] text-ink uppercase tracking-wider">
                  Industries Served
                </div>
              </div>

              {/* Card 4: Our Purpose (Light Gray Gradient, Large Card) */}
              <div className="md:col-span-6 bg-gradient-to-br from-white to-bg-1 border border-border-gray/25 rounded-[24px] p-8 flex flex-col justify-between min-h-[240px] md:min-h-[260px] shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="font-inter font-bold text-[14px] uppercase tracking-wider text-primary">
                  Our Purpose
                </div>
                <div className="flex flex-col gap-2 my-auto">
                  <h4 className="font-inter font-bold text-[16px] sm:text-[18px] leading-[24px] text-dark-blue">
                    "Technology should simplify business—not complicate it."
                  </h4>
                  <p className="font-inter text-[13px] sm:text-[14px] leading-[20px] text-body-gray">
                    ALLE TECH exists to bridge the gap between business strategy and technology execution by empowering organizations with intelligent technology solutions.
                  </p>
                </div>
                <div className="font-inter font-semibold text-[13px] text-body-gray">
                  Empowering Smarter Businesses
                </div>
              </div>

              {/* Card 5: 98% Success (Dark Blue) */}
              <div className="md:col-span-3 bg-dark-blue text-white rounded-[24px] p-8 flex flex-col justify-between min-h-[240px] md:min-h-[260px] shadow-sm hover:shadow-md transition-shadow duration-300 group">
                <div className="font-inter font-bold text-[56px] leading-[56px] tracking-tight transition-transform duration-300 group-hover:scale-105 origin-left text-white">
                  98%
                </div>
                <div className="font-inter font-bold text-[16px] text-white uppercase tracking-wider">
                  Success Rate
                </div>
              </div>

            </div>

          </div>

          {/* Right Column (Tall Team Image) */}
          <div
            className={`lg:col-span-4 relative min-h-[400px] lg:min-h-full rounded-[24px] overflow-hidden shadow-md group transition-all duration-[1200ms] ease-out delay-300 will-change-transform ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[40px]"
              }`}
          >
            <Image
              src={whychoose.src}
              alt="ALLE TECH professional collaborative business technology consulting team"
              fill
              className="object-cover scale-105 transition-transform duration-700 ease-out group-hover:scale-100"
              sizes="(max-width: 1024px) 100vw, 30vw"
            />
            {/* Ambient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

            {/* Decorative white line arches at bottom-right */}
            <div className="absolute bottom-6 right-6 w-32 h-32 border-r-2 border-b-2 border-white/20 rounded-br-[24px] pointer-events-none hidden md:block" />
            <div className="absolute bottom-10 right-10 w-24 h-24 border-r-2 border-b-2 border-white/10 rounded-br-[16px] pointer-events-none hidden md:block" />
          </div>

        </div>

      </div>
    </section>
  );
}
