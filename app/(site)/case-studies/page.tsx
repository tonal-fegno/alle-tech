import { desc, eq } from "drizzle-orm";
import type { Metadata } from "next";
import { db } from "@/db";
import { caseStudies } from "@/db/schema";
import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import CaseStudyListGrid from "@/components/case-studies/CaseStudyListGrid";

export const metadata: Metadata = {
  title: "Case Studies | ALLE TECH",
  description:
    "Real results from real deployments — see how we help enterprises modernize operations, unlock analytics, and scale with confidence.",
};

export default async function CaseStudiesPage() {
  const items = await db
    .select()
    .from(caseStudies)
    .where(eq(caseStudies.enabled, true))
    .orderBy(desc(caseStudies.publishedAt));

  return (
    <main>
      {/* Hero Section */}
      <CaseStudiesHero />

      {/* Case Study List Section */}
      <section className="bg-bg-3 px-4 section-padding md:px-8">
        <div className="container-main">
          <CaseStudyListGrid caseStudies={items} />
        </div>
      </section>
    </main>
  );
}
