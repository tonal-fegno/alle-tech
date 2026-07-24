"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import type { blogs } from "@/db/schema";
import { deleteBlog, toggleBlogEnabled } from "@/lib/actions/blogs";
import { Button } from "@/components/dashboard/ui/button";
import { DataTable } from "@/components/dashboard/ui/data-table";
import { formatDate } from "@/lib/format-date";

type Blog = typeof blogs.$inferSelect;

export function BlogsTable({ initialItems }: { initialItems: Blog[] }) {
  const [items, setItems] = useState(initialItems);
  const router = useRouter();

  async function handleDelete(item: Blog) {
    if (!window.confirm(`Delete "${item.title}"?`)) return;
    await deleteBlog(item.id);
    setItems((prev) => prev.filter((i) => i.id !== item.id));
    toast.success("Blog deleted");
  }

  async function handleToggle(item: Blog, enabled: boolean) {
    setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, enabled } : i)));
    await toggleBlogEnabled(item.id, enabled);
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button asChild>
          <Link href="/dashboard/blogs/new">
            <Plus className="size-4" /> Add blog
          </Link>
        </Button>
      </div>

      <DataTable
        items={items}
        onEdit={(item) => router.push(`/dashboard/blogs/${item.id}/edit`)}
        onDelete={handleDelete}
        onToggleEnabled={handleToggle}
        emptyMessage="No blogs yet."
        columns={[
          {
            header: "Image",
            className: "flex-none w-16",
            cell: (item) => (
              <div className="relative h-10 w-10 overflow-hidden rounded-md border border-border bg-white">
                {item.image && <Image src={item.image} alt={item.title} fill className="object-cover" />}
              </div>
            ),
          },
          { header: "Title", cell: (item) => item.title },
          { header: "Category", cell: (item) => item.category },
          { header: "Published", cell: (item) => formatDate(item.publishedAt) },
        ]}
      />
    </div>
  );
}
