"use client";

import React from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import FAQAccordion from "@/components/common/FAQAccordion";
import { contactFaqs } from "./constants";

export default function ContactPage() {
  return (
    <div className="text-neutral-900 bg-slate-50 antialiased">
      {/* 1. Hero Section */}
      <ContactHero />

      {/* 2. Main Content Form */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 py-12 md:py-16 relative z-20">
        <ContactForm />
      </main>

      {/* 3. Interactive FAQ Accordion Section */}
      <section className="pt-0 pb-12 lg:pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <FAQAccordion
            title="Common Inquiries"
            className="pt-0 pb-12 md:pb-16 xl:pb-20 bg-transparent"
            faqs={contactFaqs.map((faq) => ({
              question: faq.q,
              answer: faq.a,
            }))}
          />
        </div>
      </section>
    </div>
  );
}
