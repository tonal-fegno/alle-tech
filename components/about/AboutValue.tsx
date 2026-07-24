"use client";

import { useEffect, useRef, useState } from "react";
import Eyebrow from "@/components/ui/Eyebrow";

export default function AboutValue() {
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

  const outcomes = [
    "Improve operational efficiency",
    "Increase business visibility",
    "Automate repetitive processes",
    "Strengthen financial control",
    "Enable data-driven decision-making",
    "Improve customer experience",
    "Accelerate digital transformation",
    "Scale with confidence",
  ];

  return (
    <section ref={sectionRef} className="w-full py-10 lg:py-14 border border-blue-200/20 bg-gradient-to-br from-[#E8F1FC] via-[#F4F8FD] to-white rounded-[32px] px-6 md:px-12 shadow-2xs overflow-hidden">
      <div className="flex flex-col gap-12">
        {/* Header Block */}
        <div
          className={`flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-[100px] transition-all duration-[1200ms] ease-out will-change-transform ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[60px]"
            }`}
        >
          {/* Badge & Title */}
          <div className="flex flex-col gap-4 max-w-[500px] w-full shrink-0">
            <Eyebrow>Value Creation</Eyebrow>
            <h2 className="font-inter font-bold text-[36px] leading-[44px] md:text-[48px] md:leading-[58px] text-ink tracking-tight">
              More Than a Technology Provider
            </h2>
          </div>

          {/* Leads */}
          <div className="max-w-[700px] flex flex-col gap-6 lg:pt-8 text-body-gray font-inter custom-body-text">
            <p className="font-medium text-dark-blue">
              We don't define ourselves by the software we implement. We define ourselves by the value we create.
            </p>
            <p className="text-dark-blue">
              Whether implementing ERP solutions, Artificial Intelligence, Business Intelligence, Automation, Mobile Applications, Cloud Technologies, or Enterprise Integrations, our focus never changes.
            </p>
          </div>
        </div>

        {/* We Help Organizations Title */}
        <div
          className={`font-inter font-bold text-[20px] text-ink tracking-tight transition-all duration-[1200ms] ease-out delay-100 will-change-transform ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
            }`}
        >
          We help organizations:
        </div>

        {/* Outcomes Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-[1200ms] ease-out delay-200 will-change-transform ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[80px]"
            }`}
        >
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="bg-white border border-border-gray/30 rounded-[24px] p-6 flex items-start gap-4 hover:shadow-md hover:border-primary/10 transition-all duration-300 group hover:-translate-y-0.5"
            >
              {/* Check Circle Icon */}
              <div className="w-[32px] h-[32px] bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <p className="font-inter font-semibold custom-body-text text-ink pt-1">
                {outcome}
              </p>
            </div>
          ))}
        </div>

        {/* Callout Outro */}
        <div
          className={`mt-4 border-t border-border-gray/30 pt-8 transition-all duration-[1200ms] ease-out delay-300 will-change-transform ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[40px]"
            }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-dark-blue to-ink rounded-[24px] p-8 md:p-10 shadow-md">
            <h3 className="font-inter font-bold text-[22px] sm:text-[26px] leading-[32px] text-white tracking-tight max-w-[600px] text-center md:text-left">
              Software is simply the platform. Business transformation is the objective.
            </h3>
            <div className="shrink-0 w-[6px] h-12 bg-primary rounded-full hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
