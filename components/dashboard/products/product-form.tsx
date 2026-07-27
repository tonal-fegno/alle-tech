"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  AlertTriangle,
  Boxes,
  Building2,
  HelpCircle,
  ImageIcon,
  Info,
  Lightbulb,
  Megaphone,
  Plug,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { createProduct, updateProduct } from "@/lib/actions/products";
import { productSchema, type ProductFormValues } from "@/lib/zod-schemas";
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

const EMPTY: ProductFormValues = {
  slug: "",
  title: "",
  logo: "",
  cardBg: "",
  cardFeatures: [],
  tagline: "",
  websiteUrl: "",
  displayUrl: "",
  heroSubtitle: "",
  heroImage: "",
  heroDesc: "",
  accentColor: "",
  accentGradient: "",
  darkBgGradient: "",
  conceptTitle: "",
  conceptSubtitle: "",
  conceptDesc: "",
  conceptBullets: [],
  challengesTitle: "",
  challenges: [],
  outcomesTitle: "",
  outcomesDesc: "",
  outcomes: [],
  aiTitle: "",
  aiDesc: "",
  aiFeatures: [],
  modulesTitle: "",
  modulesDesc: "",
  modules: [],
  industriesTitle: "",
  industriesDesc: "",
  industries: [],
  integrationsTitle: "",
  integrationsDesc: "",
  integrations: [],
  whyTitle: "",
  whyDesc: "",
  whyBullets: [],
  faqs: [],
  ctaTitle: "",
  ctaSubtitle: "",
  ctaButtons: [],
};

const SECTIONS: FormShellSection[] = [
  { id: "basics", label: "Basics" },
  { id: "hero", label: "Detail page hero" },
  { id: "concept", label: "Core concept" },
  { id: "challenges", label: "Challenges" },
  { id: "outcomes", label: "Outcomes" },
  { id: "ai", label: "AI features" },
  { id: "modules", label: "Modules" },
  { id: "industries", label: "Industries" },
  { id: "integrations", label: "Integrations" },
  { id: "why", label: "Why choose" },
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

export function ProductForm({
  productId,
  defaultValues,
}: {
  productId?: number;
  defaultValues?: Partial<ProductFormValues>;
}) {
  const router = useRouter();
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: { ...EMPTY, ...defaultValues },
  });

  async function onSubmit(values: ProductFormValues) {
    if (productId) {
      await updateProduct(productId, values);
      toast.success("Product updated");
    } else {
      await createProduct(values);
      toast.success("Product created");
    }
    router.push("/dashboard/products");
  }

  return (
    <Form {...form}>
      <form id="product-form" onSubmit={form.handleSubmit(onSubmit)}>
        <FormShell
          title={productId ? `Edit product${defaultValues?.title ? `: ${defaultValues.title}` : ""}` : "New product"}
          backHref="/dashboard/products"
          formId="product-form"
          sections={SECTIONS}
          isSubmitting={form.formState.isSubmitting}
          submitLabel={productId ? "Save changes" : "Create product"}
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
            <FormField control={form.control} name="tagline" render={({ field }) => (
              <FormItem><FormLabel>Tagline</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField control={form.control} name="websiteUrl" render={({ field }) => (
                <FormItem><FormLabel>Website link (real &quot;Visit website&quot; URL)</FormLabel><FormControl><Input placeholder="https://..." {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="displayUrl" render={({ field }) => (
                <FormItem><FormLabel>Display URL (decorative, shown in hero mockup)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
              )} />
            </div>
            <FormField control={form.control} name="logo" render={({ field }) => (
              <FormItem><FormLabel>Logo</FormLabel><FormControl><ImageUpload className="max-w-[220px]" prefix="products" value={field.value ?? ""} onChange={field.onChange} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="cardFeatures" render={({ field }) => (
              <FormItem><FormLabel>Feature highlight chips (shown on the product listing card)</FormLabel><FormControl><TextList value={field.value} onChange={field.onChange} placeholder="Comma-separated, e.g. SFA Mobility, Merchandising, Offline Engine" /></FormControl><FormMessage /></FormItem>
            )} />
          </FormSection>

          <FormSection id="hero" title="Detail page hero" description="The banner at the top of the product's own page." icon={ImageIcon}>
            <FormField control={form.control} name="heroSubtitle" render={({ field }) => (
              <FormItem><FormLabel>Hero subtitle</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="heroDesc" render={({ field }) => (
              <FormItem><FormLabel>Hero description</FormLabel><FormControl><Textarea rows={2} {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="heroImage" render={({ field }) => (
              <FormItem><FormLabel>Hero image</FormLabel><FormControl><ImageUpload className="max-w-lg" prefix="products" value={field.value ?? ""} onChange={field.onChange} /></FormControl><FormMessage /></FormItem>
            )} />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField control={form.control} name="accentColor" render={({ field }) => (
                <FormItem><FormLabel>Accent color (Tailwind gradient stops)</FormLabel><FormControl><Input placeholder="from-sky-500 to-blue-600" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="darkBgGradient" render={({ field }) => (
                <FormItem><FormLabel>Hero background gradient</FormLabel><FormControl><Input placeholder="from-[#0A1633] via-[#000B22] to-[#050C1F]" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
            </div>
          </FormSection>

          <FormSection id="concept" title="Core concept" icon={Lightbulb}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField control={form.control} name="conceptTitle" render={({ field }) => (
                <FormItem><FormLabel>Title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="conceptSubtitle" render={({ field }) => (
                <FormItem><FormLabel>Subtitle</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
              )} />
            </div>
            <FormField control={form.control} name="conceptDesc" render={({ field }) => (
              <FormItem><FormLabel>Description</FormLabel><FormControl><Textarea rows={3} {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="conceptBullets" render={({ field }) => (
              <FormItem><FormLabel>Bullets</FormLabel><FormControl><TextList value={field.value} onChange={field.onChange} placeholder="Comma-separated" /></FormControl><FormMessage /></FormItem>
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

          <FormSection id="outcomes" title="Outcomes" icon={TrendingUp}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField control={form.control} name="outcomesTitle" render={({ field }) => (
                <FormItem><FormLabel>Section title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="outcomesDesc" render={({ field }) => (
                <FormItem><FormLabel>Description</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
              )} />
            </div>
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

          <FormSection id="ai" title="AI features" description="Optional — leave blank to hide this section on the page." icon={Sparkles}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField control={form.control} name="aiTitle" render={({ field }) => (
                <FormItem><FormLabel>Section title (optional)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="aiDesc" render={({ field }) => (
                <FormItem><FormLabel>Description</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
              )} />
            </div>
            <FormField control={form.control} name="aiFeatures" render={({ field }) => (
              <FormItem>
                <FormLabel>AI features</FormLabel>
                <FormControl>
                  <RepeatableList
                    value={field.value}
                    onChange={field.onChange}
                    emptyItem={() => ({ title: "", desc: "", icon: "" })}
                    addLabel="Add AI feature"
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
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField control={form.control} name="modulesTitle" render={({ field }) => (
                <FormItem><FormLabel>Section title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="modulesDesc" render={({ field }) => (
                <FormItem><FormLabel>Description</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
              )} />
            </div>
            <FormField control={form.control} name="modules" render={({ field }) => (
              <FormItem>
                <FormLabel>Modules</FormLabel>
                <FormControl>
                  <RepeatableList
                    value={field.value}
                    onChange={field.onChange}
                    emptyItem={() => ({ title: "", desc: "", points: [], icon: "" })}
                    addLabel="Add module"
                    renderItem={(item, update) => (
                      <>
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_180px]">
                          <Input placeholder="Title" value={item.title} onChange={(e) => update({ title: e.target.value })} />
                          <IconPicker value={item.icon} onChange={(icon) => update({ icon })} />
                        </div>
                        <Textarea placeholder="Description" rows={2} value={item.desc ?? ""} onChange={(e) => update({ desc: e.target.value })} />
                        <TextList value={item.points ?? []} onChange={(points) => update({ points })} placeholder="Points, comma-separated" />
                      </>
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </FormSection>

          <FormSection id="industries" title="Industries" icon={Building2}>
            <FormField control={form.control} name="industriesTitle" render={({ field }) => (
              <FormItem><FormLabel>Section title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="industriesDesc" render={({ field }) => (
              <FormItem><FormLabel>Description</FormLabel><FormControl><Textarea rows={2} {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="industries" render={({ field }) => (
              <FormItem><FormLabel>Industries</FormLabel><FormControl><TextList value={field.value} onChange={field.onChange} placeholder="Comma-separated" /></FormControl><FormMessage /></FormItem>
            )} />
          </FormSection>

          <FormSection id="integrations" title="Integrations" icon={Plug}>
            <FormField control={form.control} name="integrationsTitle" render={({ field }) => (
              <FormItem><FormLabel>Section title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="integrationsDesc" render={({ field }) => (
              <FormItem><FormLabel>Description</FormLabel><FormControl><Textarea rows={2} {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="integrations" render={({ field }) => (
              <FormItem><FormLabel>Integrations</FormLabel><FormControl><TextList value={field.value} onChange={field.onChange} placeholder="Comma-separated" /></FormControl><FormMessage /></FormItem>
            )} />
          </FormSection>

          <FormSection id="why" title="Why choose this product" icon={ShieldCheck}>
            <FormField control={form.control} name="whyTitle" render={({ field }) => (
              <FormItem><FormLabel>Title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="whyDesc" render={({ field }) => (
              <FormItem><FormLabel>Description</FormLabel><FormControl><Textarea rows={2} {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="whyBullets" render={({ field }) => (
              <FormItem><FormLabel>Bullets</FormLabel><FormControl><TextList value={field.value} onChange={field.onChange} placeholder="Comma-separated" /></FormControl><FormMessage /></FormItem>
            )} />
          </FormSection>

          <FormSection id="faqs" title="FAQs" icon={HelpCircle}>
            <FormField control={form.control} name="faqs" render={({ field }) => (
              <FormItem>
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
            </div>
            <FormField control={form.control} name="ctaButtons" render={({ field }) => (
              <FormItem>
                <FormLabel>CTA buttons</FormLabel>
                <FormControl>
                  <RepeatableList
                    value={field.value}
                    onChange={field.onChange}
                    emptyItem={() => ({ label: "", href: "/contact" })}
                    addLabel="Add button"
                    renderItem={(item, update) => (
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        <Input placeholder="Label" value={item.label} onChange={(e) => update({ label: e.target.value })} />
                        <Input placeholder="Href" value={item.href} onChange={(e) => update({ href: e.target.value })} />
                      </div>
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </FormSection>
        </FormShell>
      </form>
    </Form>
  );
}
