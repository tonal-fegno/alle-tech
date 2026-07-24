import { desc } from "drizzle-orm";
import type { Metadata } from "next";
import { db } from "@/db";
import { blogs } from "@/db/schema";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { BlogsTable } from "@/components/dashboard/blogs/blogs-table";

export const metadata: Metadata = {
  title: "Blogs",
};

export const dynamic = "force-dynamic";

export default async function BlogsPage() {
  const items = await db.select().from(blogs).orderBy(desc(blogs.updatedAt));

  return (
    <div className="space-y-6 p-6 md:p-8">
      <DashboardPageHeader title="Blogs & Articles" description="Publish and edit blog posts and articles." />
      <BlogsTable initialItems={items} />
    </div>
  );
}
