"use client";

import Image from "next/image";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import type { industries } from "@/db/schema";
import {
  createIndustry,
  deleteIndustry,
  reorderIndustries,
  toggleIndustryEnabled,
  updateIndustry,
} from "@/lib/actions/industries";
import { Button } from "@/components/dashboard/ui/button";
import { DataTable } from "@/components/dashboard/ui/data-table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/dashboard/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/dashboard/ui/form";
import { Input } from "@/components/dashboard/ui/input";
import { Textarea } from "@/components/dashboard/ui/textarea";
import { ImageUpload } from "@/components/dashboard/ui/image-upload";

type Industry = typeof industries.$inferSelect;

const formSchema = z.object({
  slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers and hyphens only"),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  image: z.string().min(1, "Image is required"),
  typicalSolutionsText: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

function toValues(item: Industry): FormValues {
  return {
    slug: item.slug,
    title: item.title,
    description: item.description,
    image: item.image,
    typicalSolutionsText: item.typicalSolutions.join(", "),
  };
}

export function IndustriesTable({ initialItems }: { initialItems: Industry[] }) {
  const [items, setItems] = useState(initialItems);
  const [editing, setEditing] = useState<Industry | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { slug: "", title: "", description: "", image: "", typicalSolutionsText: "" },
  });

  function openCreate() {
    setEditing(null);
    form.reset({ slug: "", title: "", description: "", image: "", typicalSolutionsText: "" });
    setIsDialogOpen(true);
  }

  function openEdit(item: Industry) {
    setEditing(item);
    form.reset(toValues(item));
    setIsDialogOpen(true);
  }

  async function onSubmit(values: FormValues) {
    const typicalSolutions = values.typicalSolutionsText
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    const payload = { slug: values.slug, title: values.title, description: values.description, image: values.image, typicalSolutions };

    if (editing) {
      await updateIndustry(editing.id, payload);
      setItems((prev) => prev.map((item) => (item.id === editing.id ? { ...item, ...payload } : item)));
      toast.success("Industry updated");
    } else {
      await createIndustry(payload);
      toast.success("Industry added");
      window.location.reload();
    }
    setIsDialogOpen(false);
  }

  async function handleDelete(item: Industry) {
    if (!window.confirm(`Remove "${item.title}"?`)) return;
    await deleteIndustry(item.id);
    setItems((prev) => prev.filter((i) => i.id !== item.id));
    toast.success("Industry removed");
  }

  async function handleToggle(item: Industry, enabled: boolean) {
    setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, enabled } : i)));
    await toggleIndustryEnabled(item.id, enabled);
  }

  async function handleReorder(orderedIds: (number | string)[]) {
    const ids = orderedIds as number[];
    const reordered = ids
      .map((id) => items.find((item) => item.id === id))
      .filter((i): i is Industry => Boolean(i));
    setItems(reordered);
    await reorderIndustries(ids);
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button onClick={openCreate}>
          <Plus className="size-4" /> Add industry
        </Button>
      </div>

      <DataTable
        items={items}
        reorderable
        onReorder={handleReorder}
        onEdit={openEdit}
        onDelete={handleDelete}
        onToggleEnabled={handleToggle}
        emptyMessage="No industries yet."
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editing ? "Edit industry" : "Add industry"}</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Manufacturing" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. manufacturing" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea rows={3} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="typicalSolutionsText"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Typical solutions</FormLabel>
                    <FormControl>
                      <Input placeholder="ERP, Warehouse Management, AI Analytics" {...field} />
                    </FormControl>
                    <FormDescription>Comma-separated list.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image</FormLabel>
                    <FormControl>
                      <ImageUpload prefix="industries" value={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                {editing ? "Save changes" : "Add industry"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
