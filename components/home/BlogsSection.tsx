import Link from "next/link";
import { desc, eq } from "drizzle-orm";
import { db } from "@/db";
import { blogs } from "@/db/schema";
import Eyebrow from "@/components/ui/Eyebrow";
import BlogsGrid from "@/components/home/BlogsGrid";

export default async function BlogsSection() {
  const latestBlogs = await db
    .select()
    .from(blogs)
    .where(eq(blogs.enabled, true))
    .orderBy(desc(blogs.publishedAt))
    .limit(3);

  if (latestBlogs.length === 0) return null;

  return (
    <section className="section-padding bg-[#F7F8FA] px-4 md:px-8">
      <div className="container-main">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-[650px] flex flex-col gap-4">
            <Eyebrow dotClassName="">Blogs & Insights</Eyebrow>
            <h2 className="font-inter font-bold text-[36px] leading-[44px] md:text-[48px] md:leading-[58px] text-ink tracking-tight">
              Latest Insights & Tech Trends
            </h2>
            <p className="text-body-gray font-inter home-body-text">
              Stay informed with our expert perspectives on enterprise systems, AI integrations, cloud solutions, and business transformation.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 border-2 border-black/30 rounded-full px-5 py-2.5 hover:bg-black hover:text-white cursor-pointer transition-all font-semibold text-sm"
            >
              View All Articles
            </Link>
          </div>
        </div>

        <BlogsGrid blogs={latestBlogs} />
      </div>
    </section>
  );
}
