import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Badge from "@/components/ui/Badge";
import ContactFormSection from "@/components/ContactFormSection";
import { blogs, getBlog, formatBlogDate } from "@/lib/data";

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

  return (
    <>
      {/* Banner/Hero Image */}
      {blog.imageVisible && blog.image && (
        <section className="relative h-[400px] w-full overflow-hidden md:h-[500px] xl:h-[600px]">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </section>
      )}

      {/* Blog Header Info Section */}
      <section className="bg-white px-4 pb-8 pt-12 md:px-8 md:pb-12 md:pt-16">
        <div className="mx-auto max-w-[800px]">
          {/* Category Badge */}
          <div>
            <Badge>{blog.category}</Badge>
          </div>

          {/* Title */}
          <h1 className="heading-1 mt-4">{blog.title}</h1>

          {/* Meta Row */}
          <div className="mt-5 flex items-center gap-6 text-body-16 text-body-gray">
            <span>Posted: {formatBlogDate(blog.date)}</span>
            <span className="text-border-gray">•</span>
            <span>{blog.time}</span>
          </div>

          {/* Short Description */}
          <p className="mt-4 text-body-18 text-body-gray">
            {blog.shortDescription}
          </p>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="bg-white px-4 pb-16 md:px-8 md:pb-20">
        <div className="mx-auto max-w-[800px]">
          {/* Content 01 */}
          {blog.content01Visible && blog.content01 && (
            <div
              className="rich-text"
              dangerouslySetInnerHTML={{ __html: blog.content01 }}
            />
          )}

          {/* Body Image 01 */}
          {blog.bodyImageVisible && blog.bodyImage01 && (
            <div className="my-12">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-section">
                <Image
                  src={blog.bodyImage01}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 800px) 100vw, 800px"
                />
              </div>
            </div>
          )}

          {/* Banner Callout Box */}
          {blog.bannerVisible && blog.banner && (
            <div className="my-8 rounded-lg border-l-4 border-primary bg-bg-2 p-6 text-body-18 text-ink">
              {blog.banner}
            </div>
          )}

          {/* Body Image 02 */}
          {blog.bodyImageVisible && blog.bodyImage02 && (
            <div className="my-12">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-section">
                <Image
                  src={blog.bodyImage02}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 800px) 100vw, 800px"
                />
              </div>
            </div>
          )}

          {/* Content 02 */}
          {blog.content02Visible && blog.content02 && (
            <div
              className="rich-text"
              dangerouslySetInnerHTML={{ __html: blog.content02 }}
            />
          )}
        </div>
      </section>

      {/* Back Navigation */}
      <section className="bg-white px-4 pb-16 md:px-8">
        <div className="mx-auto max-w-[800px]">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-body-16 font-semibold text-primary transition-colors hover:underline"
          >
            <span>←</span>
            <span>Back to Blogs</span>
          </Link>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactFormSection />
    </>
  );
}
