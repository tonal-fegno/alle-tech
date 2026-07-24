"use client";

import { useState } from "react";
import FaqAccordionItem from "@/components/ui/FaqAccordionItem";
import type { faqs as faqsTable } from "@/db/schema";

export default function FaqAccordionList({ faqs }: { faqs: (typeof faqsTable.$inferSelect)[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex w-full max-w-[900px] flex-col gap-3">
      {faqs.map((faq, index) => (
        <FaqAccordionItem
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
