"use client";

import { useEffect, useRef, useState } from "react";
import Eyebrow from "@/components/ui/Eyebrow";

export default function AboutPhilosophy() {
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

  const beliefs = [
    {
      number: "01",
      text: "Business should define technology—not the other way around.",
    },
    {
      number: "02",
      text: "Technology should empower people, not replace them.",
    },
    {
      number: "03",
      text: "Every technology investment should create measurable business value.",
    },
    {
      number: "04",
      text: "Long-term partnerships create long-term success.",
    },
  ];

  return (
    <section ref={sectionRef} className="w-full py-8 lg:py-12 border-t border-border-gray/20 overflow-hidden">
      <div className="flex flex-col gap-12">
        {/* Header Block */}
        <div
          className={`flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-[150px] transition-all duration-[1200ms] ease-out will-change-transform ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[60px]"
          }`}
        >
          {/* Badge & Title */}
          <div className="flex flex-col gap-4 max-w-[450px] w-full shrink-0">
            <Eyebrow>Our Philosophy</Eyebrow>
            <h2 className="font-inter font-bold text-[36px] leading-[44px] md:text-[48px] md:leading-[58px] text-ink tracking-tight">
              Business First. Technology Always.
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-[700px] flex flex-col gap-6 lg:pt-8 text-body-gray font-inter text-[18px] leading-[28px]">
            <p className="font-medium text-dark-blue">
              Technology alone does not create transformation. Successful transformation happens when technology, people, processes, and strategy work together.
            </p>
            <p className="text-[16px] leading-[26px]">
              At ALLE TECH, we believe that understanding the operational dynamics of an organization is key to deploying solutions that deliver long-term value.
            </p>
          </div>
        </div>

        {/* Beliefs Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-[1200ms] ease-out delay-200 will-change-transform ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[80px]"
          }`}
        >
          {beliefs.map((belief, index) => (
            <div
              key={index}
              className="bg-white border border-border-gray/20 hover:border-primary/20 rounded-[24px] p-8 flex flex-col gap-8 justify-between group transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="font-inter font-bold text-[36px] leading-[36px] text-primary/20 group-hover:text-primary/60 transition-colors duration-300">
                {belief.number}
              </div>
              <p className="font-inter font-semibold text-[18px] leading-[26px] text-ink group-hover:text-primary transition-colors duration-300">
                {belief.text}
              </p>
            </div>
          ))}
        </div>

        {/* Outro Block */}
        <div
          className={`mt-4 bg-white rounded-[24px] p-8 border border-primary/10 transition-all duration-[1200ms] ease-out delay-300 will-change-transform ${
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <p className="font-inter font-medium text-[16px] sm:text-[18px] leading-[28px] text-dark-blue text-center max-w-[900px] mx-auto">
            This business-first philosophy guides every consultation, every implementation, every recommendation, and every relationship we build.
          </p>
        </div>
      </div>
    </section>
  );
}
