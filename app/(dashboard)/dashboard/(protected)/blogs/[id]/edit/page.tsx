import { eq } from "drizzle-orm";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { blogs } from "@/db/schema";
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
    <BlogForm
      blogId={blog.id}
      defaultValues={{
        ...blog,
        shortDescription: blog.shortDescription ?? "",
      }}
    />
  );
}
