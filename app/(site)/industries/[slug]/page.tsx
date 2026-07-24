import { eq } from "drizzle-orm";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { industries } from "@/db/schema";
import IndustryDetailLayout from "@/components/industries/IndustryDetailLayout";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const [industry] = await db.select().from(industries).where(eq(industries.slug, slug));
  return { title: industry?.title ?? "Industry" };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const [industry] = await db.select().from(industries).where(eq(industries.slug, slug));

  if (!industry || !industry.enabled) notFound();

  return <IndustryDetailLayout industry={industry} />;
}
