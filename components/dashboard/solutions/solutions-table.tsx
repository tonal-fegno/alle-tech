"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import type { solutions } from "@/db/schema";
import { deleteSolution, reorderSolutions, toggleSolutionEnabled } from "@/lib/actions/solutions";
import { Button } from "@/components/dashboard/ui/button";
import { DataTable } from "@/components/dashboard/ui/data-table";

type Solution = typeof solutions.$inferSelect;

export function SolutionsTable({ initialItems }: { initialItems: Solution[] }) {
  const [items, setItems] = useState(initialItems);
  const router = useRouter();

  async function handleDelete(item: Solution) {
    if (!window.confirm(`Delete "${item.title}"?`)) return;
    await deleteSolution(item.id);
    setItems((prev) => prev.filter((i) => i.id !== item.id));
    toast.success("Solution deleted");
  }

  async function handleToggle(item: Solution, enabled: boolean) {
    setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, enabled } : i)));
    await toggleSolutionEnabled(item.id, enabled);
  }

  async function handleReorder(orderedIds: (number | string)[]) {
    const ids = orderedIds as number[];
    const reordered = ids
      .map((id) => items.find((item) => item.id === id))
      .filter((i): i is Solution => Boolean(i));
    setItems(reordered);
    await reorderSolutions(ids);
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button asChild>
          <Link href="/dashboard/solutions/new">
            <Plus className="size-4" /> Add solution
          </Link>
        </Button>
      </div>

      <DataTable
        items={items}
        reorderable
        onReorder={handleReorder}
        onEdit={(item) => router.push(`/dashboard/solutions/${item.id}/edit`)}
        onDelete={handleDelete}
        onToggleEnabled={handleToggle}
        emptyMessage="No solutions yet."
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
          { header: "Slug", cell: (item) => item.slug },
        ]}
      />
    </div>
  );
}
