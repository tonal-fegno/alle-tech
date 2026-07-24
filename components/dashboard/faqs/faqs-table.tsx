"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import type { faqs } from "@/db/schema";
import { createFaq, deleteFaq, reorderFaqs, toggleFaqEnabled, updateFaq } from "@/lib/actions/faqs";
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

type Faq = typeof faqs.$inferSelect;

const formSchema = z.object({
  question: z.string().min(1, "Question is required"),
  answer: z.string().min(1, "Answer is required"),
});

type FormValues = z.infer<typeof formSchema>;

export function FaqsTable({ initialItems }: { initialItems: Faq[] }) {
  const [items, setItems] = useState(initialItems);
  const [editing, setEditing] = useState<Faq | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { question: "", answer: "" },
  });

  function openCreate() {
    setEditing(null);
    form.reset({ question: "", answer: "" });
    setIsDialogOpen(true);
  }

  function openEdit(item: Faq) {
    setEditing(item);
    form.reset({ question: item.question, answer: item.answer });
    setIsDialogOpen(true);
  }

  async function onSubmit(values: FormValues) {
    if (editing) {
      await updateFaq(editing.id, values);
      setItems((prev) => prev.map((item) => (item.id === editing.id ? { ...item, ...values } : item)));
      toast.success("FAQ updated");
    } else {
      await createFaq(values);
      toast.success("FAQ added");
      window.location.reload();
    }
    setIsDialogOpen(false);
  }

  async function handleDelete(item: Faq) {
    if (!window.confirm("Delete this FAQ?")) return;
    await deleteFaq(item.id);
    setItems((prev) => prev.filter((i) => i.id !== item.id));
    toast.success("FAQ removed");
  }

  async function handleToggle(item: Faq, enabled: boolean) {
    setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, enabled } : i)));
    await toggleFaqEnabled(item.id, enabled);
  }

  async function handleReorder(orderedIds: (number | string)[]) {
    const ids = orderedIds as number[];
    const reordered = ids.map((id) => items.find((item) => item.id === id)).filter((i): i is Faq => Boolean(i));
    setItems(reordered);
    await reorderFaqs(ids);
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button onClick={openCreate}>
          <Plus className="size-4" /> Add FAQ
        </Button>
      </div>

      <DataTable
        items={items}
        reorderable
        onReorder={handleReorder}
        onEdit={openEdit}
        onDelete={handleDelete}
        onToggleEnabled={handleToggle}
        emptyMessage="No FAQs yet."
        columns={[
          { header: "Question", cell: (item) => item.question },
          { header: "Answer", className: "flex-[2]", cell: (item) => item.answer },
        ]}
      />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editing ? "Edit FAQ" : "Add FAQ"}</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="question"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Question</FormLabel>
                    <FormControl>
                      <Input placeholder="What does ALLE TECH do?" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="answer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Answer</FormLabel>
                    <FormControl>
                      <Textarea rows={4} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                {editing ? "Save changes" : "Add FAQ"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
