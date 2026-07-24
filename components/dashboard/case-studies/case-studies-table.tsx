"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import type { caseStudies } from "@/db/schema";
import { deleteCaseStudy, toggleCaseStudyEnabled } from "@/lib/actions/case-studies";
import { Button } from "@/components/dashboard/ui/button";
import { DataTable } from "@/components/dashboard/ui/data-table";
import { formatDate } from "@/lib/format-date";

type CaseStudy = typeof caseStudies.$inferSelect;

export function CaseStudiesTable({ initialItems }: { initialItems: CaseStudy[] }) {
  const [items, setItems] = useState(initialItems);
  const router = useRouter();

  async function handleDelete(item: CaseStudy) {
    if (!window.confirm(`Delete "${item.title}"?`)) return;
    await deleteCaseStudy(item.id);
    setItems((prev) => prev.filter((i) => i.id !== item.id));
    toast.success("Case study deleted");
  }

  async function handleToggle(item: CaseStudy, enabled: boolean) {
    setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, enabled } : i)));
    await toggleCaseStudyEnabled(item.id, enabled);
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button asChild>
          <Link href="/dashboard/case-studies/new">
            <Plus className="size-4" /> Add case study
          </Link>
        </Button>
      </div>

      <DataTable
        items={items}
        onEdit={(item) => router.push(`/dashboard/case-studies/${item.id}/edit`)}
        onDelete={handleDelete}
        onToggleEnabled={handleToggle}
        emptyMessage="No case studies yet."
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
          { header: "Client", cell: (item) => item.client },
          { header: "Published", cell: (item) => formatDate(item.publishedAt) },
        ]}
      />
    </div>
  );
}
