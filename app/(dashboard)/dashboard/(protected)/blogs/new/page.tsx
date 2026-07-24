import type { Metadata } from "next";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { BlogForm } from "@/components/dashboard/blogs/blog-form";

export const metadata: Metadata = {
  title: "New Blog",
};

export default function NewBlogPage() {
  return (
    <div className="space-y-6 p-6 md:p-8">
      <DashboardPageHeader title="New Blog" />
      <BlogForm />
    </div>
  );
}
