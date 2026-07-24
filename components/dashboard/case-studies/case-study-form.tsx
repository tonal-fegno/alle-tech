"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { createCaseStudy, updateCaseStudy } from "@/lib/actions/case-studies";
import { caseStudySchema, type CaseStudyFormValues } from "@/lib/zod-schemas";
import { Button } from "@/components/dashboard/ui/button";
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
import { RichTextEditor } from "@/components/dashboard/ui/rich-text-editor";
import { Switch } from "@/components/dashboard/ui/switch";
import { RepeatableList } from "@/components/dashboard/ui/repeatable-list";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/dashboard/ui/select";

const EMPTY: CaseStudyFormValues = {
  slug: "",
  title: "",
  description: "",
  shortDescription: "",
  category: "",
  categories: [],
  image: "",
  client: "",
  industry: "",
  publishedAt: new Date(),
  readTime: "5 min read",
  size: "medium",
  featured: false,
  results: [],
  bodyHtml: "",
};

function toDateInputValue(date: Date) {
  return date.toISOString().slice(0, 10);
}

function TextList({ value, onChange, placeholder }: { value: string[]; onChange: (v: string[]) => void; placeholder?: string }) {
  return (
    <Input
      placeholder={placeholder}
      value={value.join(", ")}
      onChange={(e) => onChange(e.target.value.split(",").map((s) => s.trim()).filter(Boolean))}
    />
  );
}

export function CaseStudyForm({
  caseStudyId,
  defaultValues,
}: {
  caseStudyId?: number;
  defaultValues?: Partial<CaseStudyFormValues>;
}) {
  const router = useRouter();
  const form = useForm<CaseStudyFormValues>({
    resolver: zodResolver(caseStudySchema),
    defaultValues: { ...EMPTY, ...defaultValues },
  });

  async function onSubmit(values: CaseStudyFormValues) {
    if (caseStudyId) {
      await updateCaseStudy(caseStudyId, values);
      toast.success("Case study updated");
    } else {
      await createCaseStudy(values);
      toast.success("Case study created");
    }
    router.push("/dashboard/case-studies");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <section className="space-y-4 rounded-lg border border-border p-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField control={form.control} name="title" render={({ field }) => (
              <FormItem><FormLabel>Title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="slug" render={({ field }) => (
              <FormItem><FormLabel>Slug</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
          </div>
          <FormField control={form.control} name="description" render={({ field }) => (
            <FormItem><FormLabel>Description</FormLabel><FormControl><Textarea rows={3} {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="shortDescription" render={({ field }) => (
            <FormItem><FormLabel>Short description (optional)</FormLabel><FormControl><Textarea rows={2} {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField control={form.control} name="client" render={({ field }) => (
              <FormItem><FormLabel>Client</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="industry" render={({ field }) => (
              <FormItem><FormLabel>Industry</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField control={form.control} name="category" render={({ field }) => (
              <FormItem><FormLabel>Primary category</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="categories" render={({ field }) => (
              <FormItem><FormLabel>All categories</FormLabel><FormControl><TextList value={field.value} onChange={field.onChange} placeholder="Comma-separated" /></FormControl><FormMessage /></FormItem>
            )} />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <FormField control={form.control} name="readTime" render={({ field }) => (
              <FormItem><FormLabel>Read time</FormLabel><FormControl><Input placeholder="5 min read" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="publishedAt" render={({ field }) => (
              <FormItem>
                <FormLabel>Published date</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    value={toDateInputValue(field.value)}
                    onChange={(e) => field.onChange(new Date(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="size" render={({ field }) => (
              <FormItem>
                <FormLabel>Card size</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
          </div>
          <FormField control={form.control} name="featured" render={({ field }) => (
            <FormItem className="flex items-center justify-between rounded-md border border-input p-3">
              <FormLabel className="!mt-0">Featured</FormLabel>
              <FormControl>
                <Switch checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
            </FormItem>
          )} />
          <FormField control={form.control} name="image" render={({ field }) => (
            <FormItem><FormLabel>Image</FormLabel><FormControl><ImageUpload prefix="case-studies" value={field.value} onChange={field.onChange} /></FormControl><FormMessage /></FormItem>
          )} />
        </section>

        <section className="space-y-4 rounded-lg border border-border p-5">
          <h2 className="text-sm font-semibold text-foreground">Headline results</h2>
          <FormField control={form.control} name="results" render={({ field }) => (
            <FormItem>
              <FormControl>
                <RepeatableList
                  value={field.value}
                  onChange={field.onChange}
                  emptyItem={() => ({ value: "", label: "" })}
                  addLabel="Add result"
                  renderItem={(item, update) => (
                    <>
                      <Input placeholder="Value (e.g. 38%)" value={item.value} onChange={(e) => update({ value: e.target.value })} />
                      <Input placeholder="Label (e.g. Less unplanned downtime)" value={item.label} onChange={(e) => update({ label: e.target.value })} />
                    </>
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </section>

        <section className="space-y-4 rounded-lg border border-border p-5">
          <h2 className="text-sm font-semibold text-foreground">Body</h2>
          <FormField control={form.control} name="bodyHtml" render={({ field }) => (
            <FormItem>
              <FormControl>
                <RichTextEditor value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </section>

        <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
          {caseStudyId ? "Save changes" : "Create case study"}
        </Button>
      </form>
    </Form>
  );
}
