import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ImageFrame from "@/components/ui/ImageFrame";
import RichText from "@/components/ui/RichText";
import BlogDetailHero from "@/components/blog/BlogDetailHero";
import RelatedArticles from "@/components/blog/RelatedArticles";
import { blogs, getBlog } from "@/lib/data";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = new Set<string>();
  blogs.forEach((blog) => {
    if (blog.slug) slugs.add(blog.slug);
    if (blog.id) slugs.add(blog.id);
  });
  return Array.from(slugs).map((slug) => ({ slug }));
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
    description: blog.description || blog.shortDescription,
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
    ...blogs.filter(
      (b) =>
        b.id !== blog.id &&
        (b.slug ? b.slug !== blog.slug : true) &&
        b.category === blog.category
    ),
    ...blogs.filter(
      (b) =>
        b.id !== blog.id &&
        (b.slug ? b.slug !== blog.slug : true) &&
        b.category !== blog.category
    ),
  ].slice(0, 3);

  const bodyBlocks = blog.body || [];

  return (
    <>
      {/* Hero */}
      <BlogDetailHero blog={blog} />

      {/* Blog Content Section */}
      <section className="bg-white px-4 pb-16 pt-14 md:px-8 md:pb-20 md:pt-16">
        <div className="mx-auto max-w-[800px]">
          {/* Short Description */}
          <p className="mb-10 text-body-20 font-medium text-ink/80 leading-relaxed">
            {blog.description || blog.shortDescription}
          </p>

          {/* Structured Body Blocks (from extracted data) */}
          {bodyBlocks.length > 0 ? (
            <div className="flex flex-col gap-6">
              {bodyBlocks.map((block, i) => (
                <div key={i}>
                  {block.type === "h2" && (
                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 mt-6 mb-2">
                      {block.text}
                    </h2>
                  )}
                  {block.type === "p" && (
                    <p className="text-base md:text-[17px] text-neutral-600 leading-relaxed">
                      {block.text}
                    </p>
                  )}
                  {block.type === "quote" && (
                    <blockquote className="border-l-4 border-primary bg-bg-3 rounded-r-2xl px-6 py-5 my-2">
                      <p className="text-lg md:text-xl font-semibold text-neutral-800 italic leading-snug">
                        “{block.text}”
                      </p>
                      {block.attribution && (
                        <footer className="mt-3 text-xs font-bold uppercase tracking-wider text-primary not-italic">
                          — {block.attribution}
                        </footer>
                      )}
                    </blockquote>
                  )}
                  {block.type === "list" && (
                    <ul className="flex flex-col gap-3 my-2">
                      {block.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-base md:text-[17px] text-neutral-600 leading-relaxed"
                        >
                          <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* Fallback Content 01 */}
              {blog.content01Visible && blog.content01 && (
                <RichText html={blog.content01} />
              )}
            </>
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
    </>
  );
}
