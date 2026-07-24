"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { createSolution, updateSolution } from "@/lib/actions/solutions";
import { solutionSchema, type SolutionFormValues } from "@/lib/zod-schemas";
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
import { IconPicker } from "@/components/dashboard/ui/icon-picker";
import { RepeatableList } from "@/components/dashboard/ui/repeatable-list";

const EMPTY: SolutionFormValues = {
  slug: "",
  title: "",
  shortDescription: "",
  image: "",
  tags: [],
  features: [],
  heroTitle: "",
  heroSubtitle: "",
  heroImage: "",
  whyTitle: "",
  whyItems: [],
  challengesTitle: "",
  challenges: [],
  flowTitle: "",
  flowSteps: [],
  modulesTitle: "",
  modules: [],
  lifecycleTitle: "",
  lifecycle: [],
  relatedIndustriesTitle: "",
  relatedIndustries: [],
  integrationsTitle: "",
  integrations: [],
  faqsTitle: "",
  faqs: [],
  outcomesTitle: "",
  outcomes: [],
  whyAlleTechTitle: "",
  whyAlleTechItems: [],
  ctaTitle: "",
  ctaSubtitle: "",
  ctaLabel: "",
  ctaSecondaryLabel: "",
};

function TextList({ value, onChange, placeholder }: { value: string[]; onChange: (v: string[]) => void; placeholder?: string }) {
  return (
    <Input
      placeholder={placeholder}
      value={value.join(", ")}
      onChange={(e) => onChange(e.target.value.split(",").map((s) => s.trim()).filter(Boolean))}
    />
  );
}

export function SolutionForm({
  solutionId,
  defaultValues,
}: {
  solutionId?: number;
  defaultValues?: Partial<SolutionFormValues>;
}) {
  const router = useRouter();
  const form = useForm<SolutionFormValues>({
    resolver: zodResolver(solutionSchema),
    defaultValues: { ...EMPTY, ...defaultValues },
  });

  async function onSubmit(values: SolutionFormValues) {
    if (solutionId) {
      await updateSolution(solutionId, values);
      toast.success("Solution updated");
    } else {
      await createSolution(values);
      toast.success("Solution created");
    }
    router.push("/dashboard/solutions");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
        {/* Basics */}
        <section className="space-y-4 rounded-lg border border-border p-5">
          <h2 className="text-sm font-semibold text-foreground">Basics</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField control={form.control} name="title" render={({ field }) => (
              <FormItem><FormLabel>Title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="slug" render={({ field }) => (
              <FormItem><FormLabel>Slug</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
          </div>
          <FormField control={form.control} name="shortDescription" render={({ field }) => (
            <FormItem><FormLabel>Short description (listing card)</FormLabel><FormControl><Textarea rows={3} {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField control={form.control} name="tags" render={({ field }) => (
              <FormItem><FormLabel>Tags</FormLabel><FormControl><TextList value={field.value} onChange={field.onChange} placeholder="Financial Management, Sales & CRM" /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="features" render={({ field }) => (
              <FormItem><FormLabel>Features</FormLabel><FormControl><TextList value={field.value} onChange={field.onChange} /></FormControl><FormMessage /></FormItem>
            )} />
          </div>
          <FormField control={form.control} name="image" render={({ field }) => (
            <FormItem><FormLabel>Listing image</FormLabel><FormControl><ImageUpload prefix="solutions" value={field.value} onChange={field.onChange} /></FormControl><FormMessage /></FormItem>
          )} />
        </section>

        {/* Hero */}
        <section className="space-y-4 rounded-lg border border-border p-5">
          <h2 className="text-sm font-semibold text-foreground">Detail page hero</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField control={form.control} name="heroTitle" render={({ field }) => (
              <FormItem><FormLabel>Hero title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="heroSubtitle" render={({ field }) => (
              <FormItem><FormLabel>Hero subtitle</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
          </div>
          <FormField control={form.control} name="heroImage" render={({ field }) => (
            <FormItem><FormLabel>Hero image</FormLabel><FormControl><ImageUpload prefix="solutions" value={field.value ?? ""} onChange={field.onChange} /></FormControl><FormMessage /></FormItem>
          )} />
        </section>

        {/* Why items */}
        <section className="space-y-4 rounded-lg border border-border p-5">
          <FormField control={form.control} name="whyTitle" render={({ field }) => (
            <FormItem><FormLabel>&quot;Why this solution&quot; section title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="whyItems" render={({ field }) => (
            <FormItem>
              <FormLabel>Why items</FormLabel>
              <FormControl>
                <RepeatableList
                  value={field.value}
                  onChange={field.onChange}
                  emptyItem={() => ({ title: "", desc: "", icon: "" })}
                  addLabel="Add why item"
                  renderItem={(item, update) => (
                    <>
                      <Input placeholder="Title" value={item.title} onChange={(e) => update({ title: e.target.value })} />
                      <Textarea placeholder="Description" rows={2} value={item.desc} onChange={(e) => update({ desc: e.target.value })} />
                      <IconPicker value={item.icon} onChange={(icon) => update({ icon })} />
                    </>
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </section>

        {/* Challenges */}
        <section className="space-y-4 rounded-lg border border-border p-5">
          <FormField control={form.control} name="challengesTitle" render={({ field }) => (
            <FormItem><FormLabel>Challenges section title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="challenges" render={({ field }) => (
            <FormItem>
              <FormLabel>Challenges</FormLabel>
              <FormControl>
                <RepeatableList
                  value={field.value}
                  onChange={field.onChange}
                  emptyItem={() => ({ title: "", desc: "", icon: "" })}
                  addLabel="Add challenge"
                  renderItem={(item, update) => (
                    <>
                      <Input placeholder="Title" value={item.title} onChange={(e) => update({ title: e.target.value })} />
                      <Textarea placeholder="Description" rows={2} value={item.desc} onChange={(e) => update({ desc: e.target.value })} />
                      <IconPicker value={item.icon} onChange={(icon) => update({ icon })} />
                    </>
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </section>

        {/* Modules */}
        <section className="space-y-4 rounded-lg border border-border p-5">
          <FormField control={form.control} name="modulesTitle" render={({ field }) => (
            <FormItem><FormLabel>Modules section title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="modules" render={({ field }) => (
            <FormItem>
              <FormLabel>Modules</FormLabel>
              <FormControl>
                <RepeatableList
                  value={field.value}
                  onChange={field.onChange}
                  emptyItem={() => ({ title: "", desc: "", icon: "" })}
                  addLabel="Add module"
                  renderItem={(item, update) => (
                    <>
                      <Input placeholder="Title" value={item.title} onChange={(e) => update({ title: e.target.value })} />
                      <Textarea placeholder="Description" rows={2} value={item.desc ?? ""} onChange={(e) => update({ desc: e.target.value })} />
                      <IconPicker value={item.icon} onChange={(icon) => update({ icon })} />
                    </>
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </section>

        {/* Lifecycle */}
        <section className="space-y-4 rounded-lg border border-border p-5">
          <FormField control={form.control} name="lifecycleTitle" render={({ field }) => (
            <FormItem><FormLabel>Lifecycle section title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="lifecycle" render={({ field }) => (
            <FormItem>
              <FormLabel>Lifecycle steps</FormLabel>
              <FormControl>
                <RepeatableList
                  value={field.value}
                  onChange={field.onChange}
                  emptyItem={() => ({ phase: "", title: "", desc: "", icon: "" })}
                  addLabel="Add step"
                  renderItem={(item, update) => (
                    <>
                      <Input placeholder="Phase (e.g. Phase 1)" value={item.phase} onChange={(e) => update({ phase: e.target.value })} />
                      <Input placeholder="Title" value={item.title} onChange={(e) => update({ title: e.target.value })} />
                      <Textarea placeholder="Description" rows={2} value={item.desc} onChange={(e) => update({ desc: e.target.value })} />
                      <IconPicker value={item.icon} onChange={(icon) => update({ icon })} />
                    </>
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </section>

        {/* Related industries */}
        <section className="space-y-4 rounded-lg border border-border p-5">
          <FormField control={form.control} name="relatedIndustriesTitle" render={({ field }) => (
            <FormItem><FormLabel>Related industries section title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="relatedIndustries" render={({ field }) => (
            <FormItem>
              <FormLabel>Related industries</FormLabel>
              <FormControl>
                <RepeatableList
                  value={field.value}
                  onChange={field.onChange}
                  emptyItem={() => ({ name: "", heading: "", desc: "", bullets: [], image: "" })}
                  addLabel="Add industry"
                  renderItem={(item, update) => (
                    <>
                      <Input placeholder="Name" value={item.name} onChange={(e) => update({ name: e.target.value })} />
                      <Input placeholder="Heading" value={item.heading} onChange={(e) => update({ heading: e.target.value })} />
                      <Textarea placeholder="Description" rows={2} value={item.desc} onChange={(e) => update({ desc: e.target.value })} />
                      <TextList value={item.bullets} onChange={(bullets) => update({ bullets })} placeholder="Bullet points, comma-separated" />
                      <ImageUpload prefix="solutions" value={item.image} onChange={(image) => update({ image })} />
                    </>
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </section>

        {/* Integrations */}
        <section className="space-y-4 rounded-lg border border-border p-5">
          <FormField control={form.control} name="integrationsTitle" render={({ field }) => (
            <FormItem><FormLabel>Integrations section title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="integrations" render={({ field }) => (
            <FormItem>
              <FormLabel>Integrations</FormLabel>
              <FormControl>
                <RepeatableList
                  value={field.value}
                  onChange={field.onChange}
                  emptyItem={() => ({ name: "", desc: "", icon: "" })}
                  addLabel="Add integration"
                  renderItem={(item, update) => (
                    <>
                      <Input placeholder="Name" value={item.name} onChange={(e) => update({ name: e.target.value })} />
                      <Textarea placeholder="Description" rows={2} value={item.desc} onChange={(e) => update({ desc: e.target.value })} />
                      <IconPicker value={item.icon} onChange={(icon) => update({ icon })} />
                    </>
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </section>

        {/* Outcomes */}
        <section className="space-y-4 rounded-lg border border-border p-5">
          <FormField control={form.control} name="outcomesTitle" render={({ field }) => (
            <FormItem><FormLabel>Outcomes section title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="outcomes" render={({ field }) => (
            <FormItem>
              <FormLabel>Outcomes</FormLabel>
              <FormControl>
                <RepeatableList
                  value={field.value}
                  onChange={field.onChange}
                  emptyItem={() => ({ title: "", desc: "", icon: "" })}
                  addLabel="Add outcome"
                  renderItem={(item, update) => (
                    <>
                      <Input placeholder="Title" value={item.title} onChange={(e) => update({ title: e.target.value })} />
                      <Textarea placeholder="Description" rows={2} value={item.desc} onChange={(e) => update({ desc: e.target.value })} />
                      <IconPicker value={item.icon} onChange={(icon) => update({ icon })} />
                    </>
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </section>

        {/* Why Alle Tech */}
        <section className="space-y-4 rounded-lg border border-border p-5">
          <FormField control={form.control} name="whyAlleTechTitle" render={({ field }) => (
            <FormItem><FormLabel>&quot;Why Alle Tech&quot; section title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="whyAlleTechItems" render={({ field }) => (
            <FormItem>
              <FormLabel>Why Alle Tech items</FormLabel>
              <FormControl>
                <RepeatableList
                  value={field.value}
                  onChange={field.onChange}
                  emptyItem={() => ({ title: "", desc: "", icon: "" })}
                  addLabel="Add item"
                  renderItem={(item, update) => (
                    <>
                      <Input placeholder="Title" value={item.title} onChange={(e) => update({ title: e.target.value })} />
                      <Textarea placeholder="Description" rows={2} value={item.desc} onChange={(e) => update({ desc: e.target.value })} />
                      <IconPicker value={item.icon} onChange={(icon) => update({ icon })} />
                    </>
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </section>

        {/* FAQs */}
        <section className="space-y-4 rounded-lg border border-border p-5">
          <FormField control={form.control} name="faqsTitle" render={({ field }) => (
            <FormItem><FormLabel>FAQs section title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="faqs" render={({ field }) => (
            <FormItem>
              <FormLabel>FAQs</FormLabel>
              <FormControl>
                <RepeatableList
                  value={field.value}
                  onChange={field.onChange}
                  emptyItem={() => ({ question: "", answer: "" })}
                  addLabel="Add FAQ"
                  renderItem={(item, update) => (
                    <>
                      <Input placeholder="Question" value={item.question} onChange={(e) => update({ question: e.target.value })} />
                      <Textarea placeholder="Answer" rows={2} value={item.answer} onChange={(e) => update({ answer: e.target.value })} />
                    </>
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </section>

        {/* CTA */}
        <section className="space-y-4 rounded-lg border border-border p-5">
          <h2 className="text-sm font-semibold text-foreground">Call to action</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField control={form.control} name="ctaTitle" render={({ field }) => (
              <FormItem><FormLabel>CTA title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="ctaSubtitle" render={({ field }) => (
              <FormItem><FormLabel>CTA subtitle</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="ctaLabel" render={({ field }) => (
              <FormItem><FormLabel>Primary button label</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="ctaSecondaryLabel" render={({ field }) => (
              <FormItem><FormLabel>Secondary button label</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
          </div>
        </section>

        <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
          {solutionId ? "Save changes" : "Create solution"}
        </Button>
      </form>
    </Form>
  );
}
