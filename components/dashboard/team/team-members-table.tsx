"use client";

import Image from "next/image";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import type { teamMembers } from "@/db/schema";
import {
  createTeamMember,
  deleteTeamMember,
  reorderTeamMembers,
  toggleTeamMemberEnabled,
  updateTeamMember,
} from "@/lib/actions/team-members";
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

type TeamMember = typeof teamMembers.$inferSelect;

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  designation: z.string().min(1, "Designation is required"),
  image: z.string().min(1, "Image is required"),
});

type FormValues = z.infer<typeof formSchema>;

export function TeamMembersTable({ initialItems }: { initialItems: TeamMember[] }) {
  const [items, setItems] = useState(initialItems);
  const [editing, setEditing] = useState<TeamMember | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", designation: "", image: "" },
  });

  function openCreate() {
    setEditing(null);
    form.reset({ name: "", designation: "", image: "" });
    setIsDialogOpen(true);
  }

  function openEdit(item: TeamMember) {
    setEditing(item);
    form.reset({ name: item.name, designation: item.designation, image: item.image });
    setIsDialogOpen(true);
  }

  async function onSubmit(values: FormValues) {
    if (editing) {
      await updateTeamMember(editing.id, values);
      setItems((prev) => prev.map((item) => (item.id === editing.id ? { ...item, ...values } : item)));
      toast.success("Team member updated");
    } else {
      await createTeamMember(values);
      toast.success("Team member added");
      window.location.reload();
    }
    setIsDialogOpen(false);
  }

  async function handleDelete(item: TeamMember) {
    if (!window.confirm(`Remove "${item.name}"?`)) return;
    await deleteTeamMember(item.id);
    setItems((prev) => prev.filter((i) => i.id !== item.id));
    toast.success("Team member removed");
  }

  async function handleToggle(item: TeamMember, enabled: boolean) {
    setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, enabled } : i)));
    await toggleTeamMemberEnabled(item.id, enabled);
  }

  async function handleReorder(orderedIds: (number | string)[]) {
    const ids = orderedIds as number[];
    const reordered = ids
      .map((id) => items.find((item) => item.id === id))
      .filter((i): i is TeamMember => Boolean(i));
    setItems(reordered);
    await reorderTeamMembers(ids);
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button onClick={openCreate}>
          <Plus className="size-4" /> Add team member
        </Button>
      </div>

      <DataTable
        items={items}
        reorderable
        onReorder={handleReorder}
        onEdit={openEdit}
        onDelete={handleDelete}
        onToggleEnabled={handleToggle}
        emptyMessage="No team members yet."
        columns={[
          {
            header: "Photo",
            className: "flex-none w-14",
            cell: (item) => (
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border bg-white">
                {item.image && <Image src={item.image} alt={item.name} fill className="object-cover" />}
              </div>
            ),
          },
          { header: "Name", cell: (item) => item.name },
          { header: "Designation", cell: (item) => item.designation },
        ]}
      />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editing ? "Edit team member" : "Add team member"}</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Arlene McCoy" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="designation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Designation</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Managing Director" {...field} />
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
                    <FormLabel>Photo</FormLabel>
                    <FormControl>
                      <ImageUpload prefix="team" value={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                {editing ? "Save changes" : "Add team member"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
