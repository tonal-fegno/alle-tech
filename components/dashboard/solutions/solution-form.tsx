"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  AlertTriangle,
  Boxes,
  Building2,
  GitBranch,
  HelpCircle,
  ImageIcon,
  Info,
  Lightbulb,
  Megaphone,
  Plug,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { createSolution, updateSolution } from "@/lib/actions/solutions";
import { solutionSchema, type SolutionFormValues } from "@/lib/zod-schemas";
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
import { FormShell, type FormShellSection } from "@/components/dashboard/ui/form-shell";
import { FormSection } from "@/components/dashboard/ui/form-section";

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

const SECTIONS: FormShellSection[] = [
  { id: "basics", label: "Basics" },
  { id: "hero", label: "Detail page hero" },
  { id: "why", label: "Why this solution" },
  { id: "challenges", label: "Challenges" },
  { id: "modules", label: "Modules" },
  { id: "lifecycle", label: "Lifecycle" },
  { id: "industries", label: "Related industries" },
  { id: "integrations", label: "Integrations" },
  { id: "outcomes", label: "Outcomes" },
  { id: "why-alle-tech", label: "Why Alle Tech" },
  { id: "faqs", label: "FAQs" },
  { id: "cta", label: "Call to action" },
];

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
      <form id="solution-form" onSubmit={form.handleSubmit(onSubmit)}>
        <FormShell
          title={solutionId ? `Edit solution${defaultValues?.title ? `: ${defaultValues.title}` : ""}` : "New solution"}
          backHref="/dashboard/solutions"
          formId="solution-form"
          sections={SECTIONS}
          isSubmitting={form.formState.isSubmitting}
          submitLabel={solutionId ? "Save changes" : "Create solution"}
        >
          <FormSection id="basics" title="Basics" description="Core identity and the listing card." icon={Info}>
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
              <FormItem><FormLabel>Listing image</FormLabel><FormControl><ImageUpload className="max-w-sm" prefix="solutions" value={field.value} onChange={field.onChange} /></FormControl><FormMessage /></FormItem>
            )} />
          </FormSection>

          <FormSection id="hero" title="Detail page hero" description="The banner at the top of the solution's own page." icon={ImageIcon}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField control={form.control} name="heroTitle" render={({ field }) => (
                <FormItem><FormLabel>Hero title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="heroSubtitle" render={({ field }) => (
                <FormItem><FormLabel>Hero subtitle</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
              )} />
            </div>
            <FormField control={form.control} name="heroImage" render={({ field }) => (
              <FormItem><FormLabel>Hero image</FormLabel><FormControl><ImageUpload className="max-w-lg" prefix="solutions" value={field.value ?? ""} onChange={field.onChange} /></FormControl><FormMessage /></FormItem>
            )} />
          </FormSection>

          <FormSection id="why" title="Why this solution" icon={Lightbulb}>
            <FormField control={form.control} name="whyTitle" render={({ field }) => (
              <FormItem><FormLabel>Section title</FormLabel><FormControl><Input className="max-w-md" {...field} /></FormControl><FormMessage /></FormItem>
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
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_180px]">
                          <Input placeholder="Title" value={item.title} onChange={(e) => update({ title: e.target.value })} />
                          <IconPicker value={item.icon} onChange={(icon) => update({ icon })} />
                        </div>
                        <Textarea placeholder="Description" rows={2} value={item.desc} onChange={(e) => update({ desc: e.target.value })} />
                      </>
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </FormSection>

          <FormSection id="challenges" title="Challenges" icon={AlertTriangle}>
            <FormField control={form.control} name="challengesTitle" render={({ field }) => (
              <FormItem><FormLabel>Section title</FormLabel><FormControl><Input className="max-w-md" {...field} /></FormControl><FormMessage /></FormItem>
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
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_180px]">
                          <Input placeholder="Title" value={item.title} onChange={(e) => update({ title: e.target.value })} />
                          <IconPicker value={item.icon} onChange={(icon) => update({ icon })} />
                        </div>
                        <Textarea placeholder="Description" rows={2} value={item.desc} onChange={(e) => update({ desc: e.target.value })} />
                      </>
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </FormSection>

          <FormSection id="modules" title="Modules" icon={Boxes}>
            <FormField control={form.control} name="modulesTitle" render={({ field }) => (
              <FormItem><FormLabel>Section title</FormLabel><FormControl><Input className="max-w-md" {...field} /></FormControl><FormMessage /></FormItem>
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
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_180px]">
                          <Input placeholder="Title" value={item.title} onChange={(e) => update({ title: e.target.value })} />
                          <IconPicker value={item.icon} onChange={(icon) => update({ icon })} />
                        </div>
                        <Textarea placeholder="Description" rows={2} value={item.desc ?? ""} onChange={(e) => update({ desc: e.target.value })} />
                      </>
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </FormSection>

          <FormSection id="lifecycle" title="Lifecycle" icon={GitBranch}>
            <FormField control={form.control} name="lifecycleTitle" render={({ field }) => (
              <FormItem><FormLabel>Section title</FormLabel><FormControl><Input className="max-w-md" {...field} /></FormControl><FormMessage /></FormItem>
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
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-[140px_1fr_180px]">
                          <Input placeholder="Phase (e.g. Phase 1)" value={item.phase} onChange={(e) => update({ phase: e.target.value })} />
                          <Input placeholder="Title" value={item.title} onChange={(e) => update({ title: e.target.value })} />
                          <IconPicker value={item.icon} onChange={(icon) => update({ icon })} />
                        </div>
                        <Textarea placeholder="Description" rows={2} value={item.desc} onChange={(e) => update({ desc: e.target.value })} />
                      </>
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </FormSection>

          <FormSection id="industries" title="Related industries" icon={Building2}>
            <FormField control={form.control} name="relatedIndustriesTitle" render={({ field }) => (
              <FormItem><FormLabel>Section title</FormLabel><FormControl><Input className="max-w-md" {...field} /></FormControl><FormMessage /></FormItem>
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
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                          <Input placeholder="Name" value={item.name} onChange={(e) => update({ name: e.target.value })} />
                          <Input placeholder="Heading" value={item.heading} onChange={(e) => update({ heading: e.target.value })} />
                        </div>
                        <Textarea placeholder="Description" rows={2} value={item.desc} onChange={(e) => update({ desc: e.target.value })} />
                        <TextList value={item.bullets} onChange={(bullets) => update({ bullets })} placeholder="Bullet points, comma-separated" />
                        <ImageUpload className="max-w-xs" prefix="solutions" value={item.image} onChange={(image) => update({ image })} />
                      </>
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </FormSection>

          <FormSection id="integrations" title="Integrations" icon={Plug}>
            <FormField control={form.control} name="integrationsTitle" render={({ field }) => (
              <FormItem><FormLabel>Section title</FormLabel><FormControl><Input className="max-w-md" {...field} /></FormControl><FormMessage /></FormItem>
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
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_180px]">
                          <Input placeholder="Name" value={item.name} onChange={(e) => update({ name: e.target.value })} />
                          <IconPicker value={item.icon} onChange={(icon) => update({ icon })} />
                        </div>
                        <Textarea placeholder="Description" rows={2} value={item.desc} onChange={(e) => update({ desc: e.target.value })} />
                      </>
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </FormSection>

          <FormSection id="outcomes" title="Outcomes" icon={TrendingUp}>
            <FormField control={form.control} name="outcomesTitle" render={({ field }) => (
              <FormItem><FormLabel>Section title</FormLabel><FormControl><Input className="max-w-md" {...field} /></FormControl><FormMessage /></FormItem>
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
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_180px]">
                          <Input placeholder="Title" value={item.title} onChange={(e) => update({ title: e.target.value })} />
                          <IconPicker value={item.icon} onChange={(icon) => update({ icon })} />
                        </div>
                        <Textarea placeholder="Description" rows={2} value={item.desc} onChange={(e) => update({ desc: e.target.value })} />
                      </>
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </FormSection>

          <FormSection id="why-alle-tech" title="Why Alle Tech" icon={ShieldCheck}>
            <FormField control={form.control} name="whyAlleTechTitle" render={({ field }) => (
              <FormItem><FormLabel>Section title</FormLabel><FormControl><Input className="max-w-md" {...field} /></FormControl><FormMessage /></FormItem>
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
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_180px]">
                          <Input placeholder="Title" value={item.title} onChange={(e) => update({ title: e.target.value })} />
                          <IconPicker value={item.icon} onChange={(icon) => update({ icon })} />
                        </div>
                        <Textarea placeholder="Description" rows={2} value={item.desc} onChange={(e) => update({ desc: e.target.value })} />
                      </>
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </FormSection>

          <FormSection id="faqs" title="FAQs" icon={HelpCircle}>
            <FormField control={form.control} name="faqsTitle" render={({ field }) => (
              <FormItem><FormLabel>Section title</FormLabel><FormControl><Input className="max-w-md" {...field} /></FormControl><FormMessage /></FormItem>
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
          </FormSection>

          <FormSection id="cta" title="Call to action" icon={Megaphone}>
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
          </FormSection>
        </FormShell>
      </form>
    </Form>
  );
}
