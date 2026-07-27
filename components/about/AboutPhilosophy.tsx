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
          className={`flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-[150px] transition-all duration-[1200ms] ease-out will-change-transform ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[60px]"
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
          <div className="max-w-[700px] flex flex-col gap-6 lg:pt-8 text-body-gray font-inter custom-body-text">
            <p className="font-medium text-dark-blue">
              Technology alone does not create transformation. Successful transformation happens when technology, people, processes, and strategy work together.
            </p>
            <p className="text-dark-blue">
              At ALLE TECH, we believe that understanding the operational dynamics of an organization is key to deploying solutions that deliver long-term value.
            </p>
          </div>
        </div>

        {/* Beliefs Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-[1200ms] ease-out delay-200 will-change-transform ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[80px]"
            }`}
        >
          {beliefs.map((belief, index) => (
            <div
              key={index}
              className="relative p-[1.5px] overflow-hidden rounded-[24px] bg-border-gray/20 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex"
            >
              {/* Animated moving border line (blue color: primary / #2c8fce) */}
              <div
                className="absolute inset-0 w-[200%] h-[200%] -top-1/2 -left-1/2 bg-[conic-gradient(from_0deg,transparent_43%,#2c8fce_50%,transparent_57%)] animate-spin pointer-events-none"
                style={{
                  animationDuration: "8s",
                  animationDelay: `${index * -2}s`, // Staggered starting phase
                }}
              />

              {/* Inner card content wrapper */}
              <div className="relative z-10 bg-white rounded-[23px] p-8 flex flex-col gap-8 justify-between w-full group">
                <div className="font-inter font-bold text-[36px] leading-[36px] text-primary/20 group-hover:text-primary/60 transition-colors duration-300">
                  {belief.number}
                </div>
                <p className="font-inter font-semibold text-[18px] leading-[26px] text-ink group-hover:text-primary transition-colors duration-300">
                  {belief.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Outro Block */}
        <div
          className={`mt-4 bg-[#2C8FCE] rounded-[24px] p-8 border border-blue-200/30 shadow-2xs transition-all duration-[1200ms] ease-out delay-300 will-change-transform ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
          <p className="font-inter font-medium custom-body-text text-white text-center max-w-[900px] mx-auto">
            This business-first philosophy guides every consultation, every implementation, every recommendation, and every relationship we build.
          </p>
        </div>
      </div>
    </section>
  );
}
