import { eq } from "drizzle-orm";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { blogs } from "@/db/schema";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { BlogForm } from "@/components/dashboard/blogs/blog-form";

export const metadata: Metadata = {
  title: "Edit Blog",
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditBlogPage({ params }: PageProps) {
  const { id } = await params;
  const [blog] = await db.select().from(blogs).where(eq(blogs.id, Number(id)));

  if (!blog) notFound();

  return (
    <div className="space-y-6 p-6 md:p-8">
      <DashboardPageHeader title={`Edit: ${blog.title}`} />
      <BlogForm
        blogId={blog.id}
        defaultValues={{
          ...blog,
          shortDescription: blog.shortDescription ?? "",
        }}
      />
    </div>
  );
}
