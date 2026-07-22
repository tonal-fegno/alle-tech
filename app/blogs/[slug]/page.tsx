import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ImageFrame from "@/components/ui/ImageFrame";
import RichText from "@/components/ui/RichText";
import ContactFormSection from "@/components/ContactFormSection";
import BlogDetailHero from "@/components/blog/BlogDetailHero";
import RelatedArticles from "@/components/blog/RelatedArticles";
import { blogs, getBlog } from "@/lib/data";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.shortDescription,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blog = getBlog(slug);

  if (!blog) {
    notFound();
  }

  // Related: same category first, then fill with the rest.
  const related = [
    ...blogs.filter((b) => b.slug !== blog.slug && b.category === blog.category),
    ...blogs.filter((b) => b.slug !== blog.slug && b.category !== blog.category),
  ].slice(0, 3);

  return (
    <>
      {/* Hero */}
      <BlogDetailHero blog={blog} />

      {/* Blog Content Section */}
      <section className="bg-white px-4 pb-16 pt-14 md:px-8 md:pb-20 md:pt-16">
        <div className="mx-auto max-w-[800px]">
          {/* Short Description */}
          <p className="mb-10 text-body-20 font-medium text-ink/80">
            {blog.shortDescription}
          </p>

          {/* Content 01 */}
          {blog.content01Visible && blog.content01 && (
            <RichText html={blog.content01} />
          )}

          {/* Body Image 01 */}
          {blog.bodyImageVisible && blog.bodyImage01 && (
            <ImageFrame
              src={encodeURI(blog.bodyImage01)}
              alt=""
              aspect="aspect-[16/9]"
              sizes="(max-width: 800px) 100vw, 800px"
              className="my-12"
            />
          )}

          {/* Banner Callout Box */}
          {blog.bannerVisible && blog.banner && (
            <div className="my-8 rounded-lg border-l-4 border-primary bg-bg-2 p-6 text-body-18 text-ink">
              {blog.banner}
            </div>
          )}

          {/* Body Image 02 */}
          {blog.bodyImageVisible && blog.bodyImage02 && (
            <ImageFrame
              src={encodeURI(blog.bodyImage02)}
              alt=""
              aspect="aspect-[16/9]"
              sizes="(max-width: 800px) 100vw, 800px"
              className="my-12"
            />
          )}

          {/* Content 02 */}
          {blog.content02Visible && blog.content02 && (
            <RichText html={blog.content02} />
          )}
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && <RelatedArticles posts={related} />}

      {/* Contact Form Section */}
      <ContactFormSection />
    </>
  );
}
