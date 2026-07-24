import { and, desc, eq, ne } from "drizzle-orm";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { caseStudies } from "@/db/schema";
import CaseStudyDetailHero from "@/components/case-studies/CaseStudyDetailHero";
import CaseStudyBody from "@/components/case-studies/CaseStudyBody";
import RelatedCaseStudies from "@/components/case-studies/RelatedCaseStudies";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const [study] = await db.select().from(caseStudies).where(eq(caseStudies.slug, id));
  return { title: study?.title ?? "Case Study" };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { id } = await params;
  const [study] = await db.select().from(caseStudies).where(eq(caseStudies.slug, id));

  if (!study || !study.enabled) notFound();

  const sameCategory = await db
    .select()
    .from(caseStudies)
    .where(and(eq(caseStudies.enabled, true), eq(caseStudies.category, study.category), ne(caseStudies.id, study.id)))
    .orderBy(desc(caseStudies.publishedAt))
    .limit(3);

  let related = sameCategory;
  if (related.length < 3) {
    const rest = await db
      .select()
      .from(caseStudies)
      .where(and(eq(caseStudies.enabled, true), ne(caseStudies.id, study.id)))
      .orderBy(desc(caseStudies.publishedAt))
      .limit(3);
    const existingIds = new Set(related.map((r) => r.id));
    related = [...related, ...rest.filter((r) => !existingIds.has(r.id))].slice(0, 3);
  }

  return (
    <>
      <CaseStudyDetailHero study={study} />
      <CaseStudyBody study={study} />
      {related.length > 0 && <RelatedCaseStudies studies={related} />}
    </>
  );
}
