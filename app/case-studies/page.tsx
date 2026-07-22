import type { Metadata } from "next";
import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import CaseStudyListGrid from "@/components/case-studies/CaseStudyListGrid";
import ContactFormSection from "@/components/ContactFormSection";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies",
};

export default function CaseStudiesPage() {
  return (
    <main>
      {/* Hero Section */}
      <CaseStudiesHero />

      {/* Case Study List Section */}
      <section className="section-padding bg-bg-3 px-4 md:px-8">
        <div className="container-main">
          <CaseStudyListGrid caseStudies={caseStudies} />
        </div>
      </section>

      {/* Contact Form Section */}
      {/* <ContactFormSection /> */}
    </main>
  );
}
