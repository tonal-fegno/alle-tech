"use client";

import { useState } from "react";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Eyebrow from "@/components/ui/Eyebrow";
import FaqAccordionItem from "@/components/ui/FaqAccordionItem";
import { FAQS } from "@/lib/constants";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-[#F7F8FA] px-4 md:px-8">
      <div className="container-main flex flex-col items-center gap-12 md:gap-14">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <Eyebrow>FAQ</Eyebrow>
          <AnimatedHeading className="heading-2">
            Common Questions, <br className="hidden sm:block" />
            Clearly Answered
          </AnimatedHeading>
          <p className="max-w-[480px] home-body-text text-body-gray">
            Find answers to common questions about our services, approach,
            and what it&apos;s like to partner with ALLE TECH.
          </p>
        </div>

        {/* Accordion cards */}
        <div className="flex w-full max-w-[900px] flex-col gap-3">
          {FAQS.map((faq, index) => (
            <FaqAccordionItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
