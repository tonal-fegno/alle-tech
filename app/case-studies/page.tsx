import type { Metadata } from "next";
import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import CaseStudyListGrid from "@/components/case-studies/CaseStudyListGrid";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies | ALLE TECH",
  description:
    "Real results from real deployments — see how we help enterprises modernize operations, unlock analytics, and scale with confidence.",
};

export default function CaseStudiesPage() {
  return (
    <main>
      {/* Hero Section */}
      <CaseStudiesHero />

      {/* Case Study List Section */}
      <section className="bg-bg-3 px-4 section-padding md:px-8">
        <div className="container-main">
          <CaseStudyListGrid caseStudies={caseStudies} />
        </div>
      </section>
    </main>
  );
}
