"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { createProduct, updateProduct } from "@/lib/actions/products";
import { productSchema, type ProductFormValues } from "@/lib/zod-schemas";
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

const EMPTY: ProductFormValues = {
  slug: "",
  title: "",
  logo: "",
  cardBg: "",
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
            <FormItem><FormLabel>Logo</FormLabel><FormControl><ImageUpload prefix="products" value={field.value ?? ""} onChange={field.onChange} /></FormControl><FormMessage /></FormItem>
          )} />
        </section>

        {/* Hero */}
        <section className="space-y-4 rounded-lg border border-border p-5">
          <h2 className="text-sm font-semibold text-foreground">Detail page hero</h2>
          <FormField control={form.control} name="heroSubtitle" render={({ field }) => (
            <FormItem><FormLabel>Hero subtitle</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="heroDesc" render={({ field }) => (
            <FormItem><FormLabel>Hero description</FormLabel><FormControl><Textarea rows={2} {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="heroImage" render={({ field }) => (
            <FormItem><FormLabel>Hero image</FormLabel><FormControl><ImageUpload prefix="products" value={field.value ?? ""} onChange={field.onChange} /></FormControl><FormMessage /></FormItem>
          )} />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField control={form.control} name="accentColor" render={({ field }) => (
              <FormItem><FormLabel>Accent color (Tailwind gradient stops)</FormLabel><FormControl><Input placeholder="from-sky-500 to-blue-600" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="darkBgGradient" render={({ field }) => (
              <FormItem><FormLabel>Hero background gradient</FormLabel><FormControl><Input placeholder="from-[#0A1633] via-[#000B22] to-[#050C1F]" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
          </div>
        </section>

        {/* Concept */}
        <section className="space-y-4 rounded-lg border border-border p-5">
          <h2 className="text-sm font-semibold text-foreground">Core concept</h2>
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

        {/* Outcomes */}
        <section className="space-y-4 rounded-lg border border-border p-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField control={form.control} name="outcomesTitle" render={({ field }) => (
              <FormItem><FormLabel>Outcomes section title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="outcomesDesc" render={({ field }) => (
              <FormItem><FormLabel>Outcomes description</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
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

        {/* AI features */}
        <section className="space-y-4 rounded-lg border border-border p-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField control={form.control} name="aiTitle" render={({ field }) => (
              <FormItem><FormLabel>AI section title (optional)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="aiDesc" render={({ field }) => (
              <FormItem><FormLabel>AI section description</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
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
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField control={form.control} name="modulesTitle" render={({ field }) => (
              <FormItem><FormLabel>Modules section title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="modulesDesc" render={({ field }) => (
              <FormItem><FormLabel>Modules description</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
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
                      <Input placeholder="Title" value={item.title} onChange={(e) => update({ title: e.target.value })} />
                      <Textarea placeholder="Description" rows={2} value={item.desc ?? ""} onChange={(e) => update({ desc: e.target.value })} />
                      <TextList value={item.points ?? []} onChange={(points) => update({ points })} placeholder="Points, comma-separated" />
                      <IconPicker value={item.icon} onChange={(icon) => update({ icon })} />
                    </>
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </section>

        {/* Industries & Integrations */}
        <section className="space-y-4 rounded-lg border border-border p-5">
          <h2 className="text-sm font-semibold text-foreground">Industries</h2>
          <FormField control={form.control} name="industriesTitle" render={({ field }) => (
            <FormItem><FormLabel>Section title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="industriesDesc" render={({ field }) => (
            <FormItem><FormLabel>Description</FormLabel><FormControl><Textarea rows={2} {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="industries" render={({ field }) => (
            <FormItem><FormLabel>Industries</FormLabel><FormControl><TextList value={field.value} onChange={field.onChange} placeholder="Comma-separated" /></FormControl><FormMessage /></FormItem>
          )} />
        </section>

        <section className="space-y-4 rounded-lg border border-border p-5">
          <h2 className="text-sm font-semibold text-foreground">Integrations</h2>
          <FormField control={form.control} name="integrationsTitle" render={({ field }) => (
            <FormItem><FormLabel>Section title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="integrationsDesc" render={({ field }) => (
            <FormItem><FormLabel>Description</FormLabel><FormControl><Textarea rows={2} {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="integrations" render={({ field }) => (
            <FormItem><FormLabel>Integrations</FormLabel><FormControl><TextList value={field.value} onChange={field.onChange} placeholder="Comma-separated" /></FormControl><FormMessage /></FormItem>
          )} />
        </section>

        {/* Why choose */}
        <section className="space-y-4 rounded-lg border border-border p-5">
          <h2 className="text-sm font-semibold text-foreground">Why choose this product</h2>
          <FormField control={form.control} name="whyTitle" render={({ field }) => (
            <FormItem><FormLabel>Title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="whyDesc" render={({ field }) => (
            <FormItem><FormLabel>Description</FormLabel><FormControl><Textarea rows={2} {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="whyBullets" render={({ field }) => (
            <FormItem><FormLabel>Bullets</FormLabel><FormControl><TextList value={field.value} onChange={field.onChange} placeholder="Comma-separated" /></FormControl><FormMessage /></FormItem>
          )} />
        </section>

        {/* FAQs */}
        <section className="space-y-4 rounded-lg border border-border p-5">
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
                    <>
                      <Input placeholder="Label" value={item.label} onChange={(e) => update({ label: e.target.value })} />
                      <Input placeholder="Href" value={item.href} onChange={(e) => update({ href: e.target.value })} />
                    </>
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </section>

        <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
          {productId ? "Save changes" : "Create product"}
        </Button>
      </form>
    </Form>
  );
}
