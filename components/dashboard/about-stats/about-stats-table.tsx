"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import type { aboutStats } from "@/db/schema";
import {
  createAboutStat,
  deleteAboutStat,
  reorderAboutStats,
  toggleAboutStatEnabled,
  updateAboutStat,
} from "@/lib/actions/about-stats";
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

type AboutStat = typeof aboutStats.$inferSelect;

const formSchema = z.object({
  topLabel: z.string().min(1, "Top label is required"),
  number: z.string().min(1, "Number is required"),
  bottomLabel: z.string().min(1, "Bottom label is required"),
});

type FormValues = z.infer<typeof formSchema>;

export function AboutStatsTable({ initialItems }: { initialItems: AboutStat[] }) {
  const [items, setItems] = useState(initialItems);
  const [editing, setEditing] = useState<AboutStat | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { topLabel: "", number: "", bottomLabel: "" },
  });

  function openCreate() {
    setEditing(null);
    form.reset({ topLabel: "", number: "", bottomLabel: "" });
    setIsDialogOpen(true);
  }

  function openEdit(item: AboutStat) {
    setEditing(item);
    form.reset({ topLabel: item.topLabel, number: item.number, bottomLabel: item.bottomLabel });
    setIsDialogOpen(true);
  }

  async function onSubmit(values: FormValues) {
    if (editing) {
      await updateAboutStat(editing.id, values);
      setItems((prev) => prev.map((item) => (item.id === editing.id ? { ...item, ...values } : item)));
      toast.success("Stat updated");
    } else {
      await createAboutStat(values);
      toast.success("Stat added");
      window.location.reload();
    }
    setIsDialogOpen(false);
  }

  async function handleDelete(item: AboutStat) {
    if (!window.confirm(`Remove "${item.topLabel}"?`)) return;
    await deleteAboutStat(item.id);
    setItems((prev) => prev.filter((i) => i.id !== item.id));
    toast.success("Stat removed");
  }

  async function handleToggle(item: AboutStat, enabled: boolean) {
    setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, enabled } : i)));
    await toggleAboutStatEnabled(item.id, enabled);
  }

  async function handleReorder(orderedIds: (number | string)[]) {
    const ids = orderedIds as number[];
    const reordered = ids
      .map((id) => items.find((item) => item.id === id))
      .filter((i): i is AboutStat => Boolean(i));
    setItems(reordered);
    await reorderAboutStats(ids);
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button onClick={openCreate}>
          <Plus className="size-4" /> Add stat
        </Button>
      </div>

      <DataTable
        items={items}
        reorderable
        onReorder={handleReorder}
        onEdit={openEdit}
        onDelete={handleDelete}
        onToggleEnabled={handleToggle}
        emptyMessage="No stats yet."
        columns={[
          { header: "Top label", cell: (item) => item.topLabel },
          { header: "Number", cell: (item) => item.number },
          { header: "Bottom label", cell: (item) => item.bottomLabel },
        ]}
      />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editing ? "Edit stat" : "Add stat"}</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="topLabel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Top label</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Industry Expertise" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 12+" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bottomLabel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bottom label</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Industries Served" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                {editing ? "Save changes" : "Add stat"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
