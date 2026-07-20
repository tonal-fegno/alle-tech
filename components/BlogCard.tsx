import Link from "next/link";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import type { Blog } from "@/lib/data";
import { formatBlogDate } from "@/lib/data";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group flex flex-col overflow-hidden rounded-card border border-border-gray/40 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
    >
      {blog.imageVisible && blog.image && (
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          />
        </div>
      )}

      <div className="flex flex-col gap-3 p-6">
        {/* Meta Row */}
        <div className="flex items-center gap-3 text-body-16 text-body-gray">
          <span>Posted: {formatBlogDate(blog.date)}</span>
          <span className="text-border-gray">•</span>
          <span>{blog.time}</span>
        </div>

        {/* Category Badge */}
        <div>
          <Badge>{blog.category}</Badge>
        </div>

        {/* Title */}
        <h3 className="heading-6 line-clamp-2">{blog.title}</h3>

        {/* Description */}
        <p className="line-clamp-3 text-body-16 text-body-gray">
          {blog.shortDescription}
        </p>

        {/* Read More Link */}
        <div className="mt-2 flex items-center gap-2 text-body-16 font-semibold text-primary">
          <span>Read More</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
