"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import type { products } from "@/db/schema";
import { deleteProduct, reorderProducts, toggleProductEnabled } from "@/lib/actions/products";
import { Button } from "@/components/dashboard/ui/button";
import { DataTable } from "@/components/dashboard/ui/data-table";

type Product = typeof products.$inferSelect;

export function ProductsTable({ initialItems }: { initialItems: Product[] }) {
  const [items, setItems] = useState(initialItems);
  const router = useRouter();

  async function handleDelete(item: Product) {
    if (!window.confirm(`Delete "${item.title}"?`)) return;
    await deleteProduct(item.id);
    setItems((prev) => prev.filter((i) => i.id !== item.id));
    toast.success("Product deleted");
  }

  async function handleToggle(item: Product, enabled: boolean) {
    setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, enabled } : i)));
    await toggleProductEnabled(item.id, enabled);
  }

  async function handleReorder(orderedIds: (number | string)[]) {
    const ids = orderedIds as number[];
    const reordered = ids
      .map((id) => items.find((item) => item.id === id))
      .filter((i): i is Product => Boolean(i));
    setItems(reordered);
    await reorderProducts(ids);
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button asChild>
          <Link href="/dashboard/products/new">
            <Plus className="size-4" /> Add product
          </Link>
        </Button>
      </div>

      <DataTable
        items={items}
        reorderable
        onReorder={handleReorder}
        onEdit={(item) => router.push(`/dashboard/products/${item.id}/edit`)}
        onDelete={handleDelete}
        onToggleEnabled={handleToggle}
        emptyMessage="No products yet."
        columns={[
          {
            header: "Logo",
            className: "flex-none w-16",
            cell: (item) => (
              <div className="relative h-10 w-10 overflow-hidden rounded-md border border-border bg-white">
                {item.logo && <Image src={item.logo} alt={item.title} fill className="object-contain p-1" />}
              </div>
            ),
          },
          { header: "Title", cell: (item) => item.title },
          { header: "Slug", cell: (item) => item.slug },
          { header: "Website", cell: (item) => item.websiteUrl || "—" },
        ]}
      />
    </div>
  );
}
