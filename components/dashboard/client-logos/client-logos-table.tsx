"use client";

import Image from "next/image";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import type { clientLogos } from "@/db/schema";
import {
  createClientLogo,
  deleteClientLogo,
  reorderClientLogos,
  toggleClientLogoEnabled,
  updateClientLogo,
} from "@/lib/actions/client-logos";
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
import { ImageUpload } from "@/components/dashboard/ui/image-upload";

type ClientLogo = typeof clientLogos.$inferSelect;

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  image: z.string().min(1, "Image is required"),
});

type FormValues = z.infer<typeof formSchema>;

export function ClientLogosTable({ initialItems }: { initialItems: ClientLogo[] }) {
  const [items, setItems] = useState(initialItems);
  const [editing, setEditing] = useState<ClientLogo | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", image: "" },
  });

  function openCreate() {
    setEditing(null);
    form.reset({ name: "", image: "" });
    setIsDialogOpen(true);
  }

  function openEdit(item: ClientLogo) {
    setEditing(item);
    form.reset({ name: item.name, image: item.image });
    setIsDialogOpen(true);
  }

  async function onSubmit(values: FormValues) {
    if (editing) {
      await updateClientLogo(editing.id, values);
      setItems((prev) => prev.map((item) => (item.id === editing.id ? { ...item, ...values } : item)));
      toast.success("Client logo updated");
    } else {
      await createClientLogo(values);
      toast.success("Client logo added");
      window.location.reload();
    }
    setIsDialogOpen(false);
  }

  async function handleDelete(item: ClientLogo) {
    if (!window.confirm(`Remove "${item.name}"?`)) return;
    await deleteClientLogo(item.id);
    setItems((prev) => prev.filter((i) => i.id !== item.id));
    toast.success("Client logo removed");
  }

  async function handleToggle(item: ClientLogo, enabled: boolean) {
    setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, enabled } : i)));
    await toggleClientLogoEnabled(item.id, enabled);
  }

  async function handleReorder(orderedIds: (number | string)[]) {
    const ids = orderedIds as number[];
    const reordered = ids
      .map((id) => items.find((item) => item.id === id))
      .filter((item): item is ClientLogo => Boolean(item));
    setItems(reordered);
    await reorderClientLogos(ids);
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button onClick={openCreate}>
          <Plus className="size-4" /> Add logo
        </Button>
      </div>

      <DataTable
        items={items}
        reorderable
        onReorder={handleReorder}
        onEdit={openEdit}
        onDelete={handleDelete}
        onToggleEnabled={handleToggle}
        emptyMessage="No client logos yet."
        columns={[
          {
            header: "Logo",
            className: "flex-none w-16",
            cell: (item) => (
              <div className="relative h-10 w-10 overflow-hidden rounded-md border border-border bg-white">
                {item.image && <Image src={item.image} alt={item.name} fill className="object-contain" />}
              </div>
            ),
          },
          { header: "Name", cell: (item) => item.name },
        ]}
      />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editing ? "Edit client logo" : "Add client logo"}</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Al Watani Group" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Logo image</FormLabel>
                    <FormControl>
                      <ImageUpload prefix="logos" value={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                {editing ? "Save changes" : "Add logo"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
