"use client";

import { useState } from "react";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Eyebrow from "@/components/ui/Eyebrow";
import FaqAccordionItem from "@/components/ui/FaqAccordionItem";

interface Faq {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  title: string;
  faqs: Faq[];
  className?: string;
}

export default function FAQAccordion({
  title,
  faqs,
  className = "section-padding bg-[#F7F8FA]",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={`px-4 md:px-8 ${className}`}>
      <div className="container-main flex flex-col items-center gap-12 md:gap-14">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <Eyebrow>FAQs</Eyebrow>
          <AnimatedHeading className="heading-2">{title}</AnimatedHeading>
        </div>

        {/* Accordion cards */}
        <div className="flex w-full max-w-[900px] flex-col gap-3">
          {faqs.map((faq, index) => (
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
