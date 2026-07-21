"use client";

import { useEffect, useRef, useState } from "react";
import Eyebrow from "@/components/ui/Eyebrow";

interface AwardItem {
  title: string;
  label: string;
  icon: React.ReactNode;
}

export default function AboutAwards() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const awards: AwardItem[] = [
    {
      title: "Service Excellence",
      label: "Service Index (2025)",
      icon: (
        <svg className="w-8 h-8 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
        </svg>
      ),
    },
    {
      title: "Best in Class",
      label: "Global Service (2024)",
      icon: (
        <svg className="w-8 h-8 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="9" r="4" />
          <circle cx="15" cy="9" r="4" />
          <circle cx="9" cy="15" r="4" />
          <circle cx="15" cy="15" r="4" />
        </svg>
      ),
    },
    {
      title: "Top Rated Cleaning",
      label: "Rated Year (2022)",
      icon: (
        <svg className="w-8 h-8 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      title: "Eco-Friendly Service",
      label: "Service Index (2025)",
      icon: (
        <svg className="w-8 h-8 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: "Clean Excellence",
      label: "Service Index (2025)",
      icon: (
        <svg className="w-8 h-8 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a15.3 15.3 0 0 1 4-10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12a15.3 15.3 0 0 1 10-4 15.3 15.3 0 0 1 10 4 15.3 15.3 0 0 1-10 4 15.3 15.3 0 0 1-10-4z" />
        </svg>
      ),
    },
    {
      title: "Gold Standard",
      label: "Rated Year (2022)",
      icon: (
        <svg className="w-8 h-8 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={sectionRef} className="w-full py-8 lg:py-12 border-t border-border-gray/20 bg-white rounded-[32px] overflow-hidden">
      <div className="flex flex-col items-center">
        {/* Header Text Block (animates bottom-to-top) */}
        <div
          className={`flex flex-col items-center transition-all duration-[1200ms] ease-out will-change-transform ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[60px]"
          }`}
        >
          {/* Sub Heading */}
          <Eyebrow className="mb-[13px]">Awards</Eyebrow>

          {/* Main Heading */}
          <h2 className="font-inter font-semibold text-[36px] md:text-[48px] leading-[44px] md:leading-[58px] text-ink text-center mb-4">
            Awards & Recognition
          </h2>

          {/* Description */}
          <p className="font-inter font-normal text-[18px] leading-[27px] text-body-gray text-center mb-12 max-w-[600px]">
            Our commitment to quality, reliability, and customer satisfaction
          </p>
        </div>

        {/* Grid of Cards (animates bottom-to-top) */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 w-full transition-all duration-[1200ms] ease-out delay-200 will-change-transform ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[80px]"
          }`}
        >
          {awards?.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] py-6 px-6 md:py-[45px] md:px-[45px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 md:gap-[30px]">
                {/* Icon Container */}
                <div className="text-ink shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {award.icon}
                </div>
                {/* Title */}
                <h3 className="font-inter font-semibold text-[20px] md:text-[24px] leading-[29px] text-ink">
                  {award.title}
                </h3>
              </div>

              {/* Sub Label */}
              <span className="font-inter font-semibold text-[14px] md:text-[16px] leading-[24px] text-body-gray shrink-0 sm:pl-4">
                {award.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
