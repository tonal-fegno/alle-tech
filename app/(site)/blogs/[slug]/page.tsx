import { and, desc, eq, ne } from "drizzle-orm";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { blogs } from "@/db/schema";
import RichText from "@/components/ui/RichText";
import BlogDetailHero from "@/components/blog/BlogDetailHero";
import RelatedArticles from "@/components/blog/RelatedArticles";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const [blog] = await db.select().from(blogs).where(eq(blogs.slug, slug));

  if (!blog) {
    return { title: "Blog Not Found" };
  }

  return {
    title: blog.title,
    description: blog.description || blog.shortDescription || undefined,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const [blog] = await db.select().from(blogs).where(eq(blogs.slug, slug));

  if (!blog || !blog.enabled) {
    notFound();
  }

  const sameCategory = await db
    .select()
    .from(blogs)
    .where(and(eq(blogs.enabled, true), eq(blogs.category, blog.category), ne(blogs.id, blog.id)))
    .orderBy(desc(blogs.publishedAt))
    .limit(3);

  let related = sameCategory;
  if (related.length < 3) {
    const rest = await db
      .select()
      .from(blogs)
      .where(and(eq(blogs.enabled, true), ne(blogs.id, blog.id)))
      .orderBy(desc(blogs.publishedAt))
      .limit(3 - related.length + related.length);
    const existingIds = new Set(related.map((r) => r.id));
    related = [...related, ...rest.filter((r) => !existingIds.has(r.id))].slice(0, 3);
  }

  return (
    <>
      {/* Hero */}
      <BlogDetailHero blog={blog} />

      {/* Blog Content Section */}
      <section className="bg-white px-4 pb-16 pt-14 md:px-8 md:pb-20 md:pt-16">
        <div className="mx-auto max-w-[800px]">
          <p className="mb-10 text-body-20 font-medium text-ink/80 leading-relaxed">
            {blog.description || blog.shortDescription}
          </p>

          <RichText html={blog.bodyHtml} />
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && <RelatedArticles posts={related} />}
    </>
  );
}
