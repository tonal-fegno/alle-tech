import { desc, eq } from "drizzle-orm";
import type { Metadata } from "next";
import { db } from "@/db";
import { blogs } from "@/db/schema";
import BlogsHero from "@/components/blog/BlogsHero";
import BlogListGrid from "@/components/blog/BlogListGrid";

export const metadata: Metadata = {
  title: "Blogs",
};

export default async function BlogsPage() {
  const items = await db
    .select()
    .from(blogs)
    .where(eq(blogs.enabled, true))
    .orderBy(desc(blogs.publishedAt));

  return (
    <main>
      {/* Hero Section */}
      <BlogsHero />

      {/* Blog List Section */}
      <section className="section-padding bg-bg-3 px-4 md:px-8">
        <div className="container-main">
          <BlogListGrid blogs={items} />
        </div>
      </section>
    </main>
  );
}
