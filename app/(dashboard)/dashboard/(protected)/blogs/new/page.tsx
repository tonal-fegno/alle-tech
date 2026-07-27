import type { Metadata } from "next";
import { BlogForm } from "@/components/dashboard/blogs/blog-form";

export const metadata: Metadata = {
  title: "New Blog",
};

export default function NewBlogPage() {
  return <BlogForm />;
}
