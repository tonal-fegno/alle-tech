import { eq } from "drizzle-orm";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { solutions } from "@/db/schema";
import SolutionDetailLayout from "@/components/solutions/SolutionDetailLayout";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const [solution] = await db.select().from(solutions).where(eq(solutions.slug, id));
  return { title: solution?.title ?? "Solution" };
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { id } = await params;
  const [solution] = await db.select().from(solutions).where(eq(solutions.slug, id));

  if (!solution || !solution.enabled) notFound();

  return <SolutionDetailLayout solution={solution} />;
}
