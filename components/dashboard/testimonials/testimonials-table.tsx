"use client";

import Image from "next/image";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import type { testimonials } from "@/db/schema";
import {
  createTestimonial,
  deleteTestimonial,
  reorderTestimonials,
  toggleTestimonialEnabled,
  updateTestimonial,
} from "@/lib/actions/testimonials";
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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/dashboard/ui/form";
import { Input } from "@/components/dashboard/ui/input";
import { Textarea } from "@/components/dashboard/ui/textarea";
import { ImageUpload } from "@/components/dashboard/ui/image-upload";

type Testimonial = typeof testimonials.$inferSelect;

const formSchema = z.object({
  quote: z.string().min(1, "Quote is required"),
  author: z.string().min(1, "Author is required"),
  role: z.string().min(1, "Role is required"),
  avatar: z.string().min(1, "Avatar image is required"),
});

type FormValues = z.infer<typeof formSchema>;

export function TestimonialsTable({ initialItems }: { initialItems: Testimonial[] }) {
  const [items, setItems] = useState(initialItems);
  const [editing, setEditing] = useState<Testimonial | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { quote: "", author: "", role: "", avatar: "" },
  });

  function openCreate() {
    setEditing(null);
    form.reset({ quote: "", author: "", role: "", avatar: "" });
    setIsDialogOpen(true);
  }

  function openEdit(item: Testimonial) {
    setEditing(item);
    form.reset({ quote: item.quote, author: item.author, role: item.role, avatar: item.avatar });
    setIsDialogOpen(true);
  }

  async function onSubmit(values: FormValues) {
    if (editing) {
      await updateTestimonial(editing.id, values);
      setItems((prev) => prev.map((item) => (item.id === editing.id ? { ...item, ...values } : item)));
      toast.success("Testimonial updated");
    } else {
      await createTestimonial(values);
      toast.success("Testimonial added");
      window.location.reload();
    }
    setIsDialogOpen(false);
  }

  async function handleDelete(item: Testimonial) {
    if (!window.confirm(`Remove testimonial from "${item.author}"?`)) return;
    await deleteTestimonial(item.id);
    setItems((prev) => prev.filter((i) => i.id !== item.id));
    toast.success("Testimonial removed");
  }

  async function handleToggle(item: Testimonial, enabled: boolean) {
    setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, enabled } : i)));
    await toggleTestimonialEnabled(item.id, enabled);
  }

  async function handleReorder(orderedIds: (number | string)[]) {
    const ids = orderedIds as number[];
    const reordered = ids
      .map((id) => items.find((item) => item.id === id))
      .filter((i): i is Testimonial => Boolean(i));
    setItems(reordered);
    await reorderTestimonials(ids);
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button onClick={openCreate}>
          <Plus className="size-4" /> Add testimonial
        </Button>
      </div>

      <DataTable
        items={items}
        reorderable
        onReorder={handleReorder}
        onEdit={openEdit}
        onDelete={handleDelete}
        onToggleEnabled={handleToggle}
        emptyMessage="No testimonials yet."
        columns={[
          {
            header: "Avatar",
            className: "flex-none w-14",
            cell: (item) => (
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border bg-white">
                {item.avatar && <Image src={item.avatar} alt={item.author} fill className="object-contain p-1" />}
              </div>
            ),
          },
          { header: "Author", cell: (item) => item.author },
          { header: "Role", cell: (item) => item.role },
          { header: "Quote", className: "flex-[2]", cell: (item) => item.quote },
        ]}
      />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editing ? "Edit testimonial" : "Add testimonial"}</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="quote"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quote</FormLabel>
                    <FormControl>
                      <Textarea rows={4} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Author</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Al Watani Group" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Digital Company" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="avatar"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Avatar image</FormLabel>
                    <FormControl>
                      <ImageUpload prefix="testimonials" value={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                {editing ? "Save changes" : "Add testimonial"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
