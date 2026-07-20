"use client";

import { useState } from "react";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { FAQS } from "@/lib/constants";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-[#F7F8FA] px-4 md:px-8">
      <div className="container-main flex flex-col items-center gap-12 md:gap-14">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-gradient-primary" />
            <span className="text-body-16 font-semibold text-ink">FAQ</span>
          </span>
          <AnimatedHeading className="heading-2">
            Common Questions, <br className="hidden sm:block" />
            Clearly Answered
          </AnimatedHeading>
          <p className="max-w-[480px] text-body-18 text-body-gray">
            Find answers to common questions about our services, approach,
            and what it&apos;s like to partner with ALLE TECH.
          </p>
        </div>

        {/* Accordion cards */}
        <div className="flex w-full max-w-[900px] flex-col gap-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="rounded-2xl bg-white">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left md:px-8"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-body-18 font-semibold text-dark-blue">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 text-ink transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M7 1V13M1 7H13"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[820px] px-6 pb-6 text-body-16 text-body-gray md:px-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
