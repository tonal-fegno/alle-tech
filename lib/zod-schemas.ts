import { z } from "zod";

export const whyItemSchema = z.object({
  title: z.string().min(1),
  desc: z.string().min(1),
  icon: z.string().min(1),
});

export const challengeItemSchema = z.object({
  title: z.string().min(1),
  desc: z.string().min(1),
  icon: z.string().min(1),
  color: z.string().optional(),
});

export const flowStepSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  title: z.string().min(1),
  desc: z.string().min(1),
});

export const moduleItemSchema = z.object({
  title: z.string().min(1),
  desc: z.string().optional(),
  points: z.array(z.string()).optional(),
  icon: z.string().min(1),
  color: z.string().optional(),
  bgColor: z.string().optional(),
});

export const lifecycleStepSchema = z.object({
  phase: z.string().min(1),
  title: z.string().min(1),
  desc: z.string().min(1),
  icon: z.string().min(1),
});

export const relatedIndustryItemSchema = z.object({
  name: z.string().min(1),
  heading: z.string().min(1),
  desc: z.string().min(1),
  bullets: z.array(z.string()),
  image: z.string().min(1),
});

export const integrationItemSchema = z.object({
  name: z.string().min(1),
  desc: z.string().min(1),
  icon: z.string().min(1),
  color: z.string().optional(),
  border: z.string().optional(),
});

export const faqItemSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});

export const outcomeItemSchema = z.object({
  title: z.string().min(1),
  desc: z.string().min(1),
  icon: z.string().min(1),
});

export const ctaButtonSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  variant: z.string().optional(),
});

export const caseStudyResultSchema = z.object({
  value: z.string().min(1),
  label: z.string().min(1),
});

export const solutionSchema = z.object({
  slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers and hyphens only"),
  title: z.string().min(1, "Title is required"),
  shortDescription: z.string().min(1, "Short description is required"),
  image: z.string().min(1, "Image is required"),
  tags: z.array(z.string()),
  features: z.array(z.string()),

  heroTitle: z.string().optional(),
  heroSubtitle: z.string().optional(),
  heroImage: z.string().optional(),

  whyTitle: z.string().optional(),
  whyItems: z.array(whyItemSchema),

  challengesTitle: z.string().optional(),
  challenges: z.array(challengeItemSchema),

  flowTitle: z.string().optional(),
  flowSteps: z.array(flowStepSchema),

  modulesTitle: z.string().optional(),
  modules: z.array(moduleItemSchema),

  lifecycleTitle: z.string().optional(),
  lifecycle: z.array(lifecycleStepSchema),

  relatedIndustriesTitle: z.string().optional(),
  relatedIndustries: z.array(relatedIndustryItemSchema),

  integrationsTitle: z.string().optional(),
  integrations: z.array(integrationItemSchema),

  faqsTitle: z.string().optional(),
  faqs: z.array(faqItemSchema),

  outcomesTitle: z.string().optional(),
  outcomes: z.array(outcomeItemSchema),

  whyAlleTechTitle: z.string().optional(),
  whyAlleTechItems: z.array(outcomeItemSchema),

  ctaTitle: z.string().optional(),
  ctaSubtitle: z.string().optional(),
  ctaLabel: z.string().optional(),
  ctaSecondaryLabel: z.string().optional(),
});

export type SolutionFormValues = z.infer<typeof solutionSchema>;

export const productSchema = z.object({
  slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers and hyphens only"),
  title: z.string().min(1, "Title is required"),
  logo: z.string().optional(),
  cardBg: z.string().optional(),
  tagline: z.string().min(1, "Tagline is required"),
  websiteUrl: z.string().optional(),
  displayUrl: z.string().optional(),
  heroSubtitle: z.string().optional(),
  heroImage: z.string().optional(),
  heroDesc: z.string().optional(),
  accentColor: z.string().optional(),
  accentGradient: z.string().optional(),
  darkBgGradient: z.string().optional(),

  conceptTitle: z.string().optional(),
  conceptSubtitle: z.string().optional(),
  conceptDesc: z.string().optional(),
  conceptBullets: z.array(z.string()),

  challengesTitle: z.string().optional(),
  challenges: z.array(challengeItemSchema),

  outcomesTitle: z.string().optional(),
  outcomesDesc: z.string().optional(),
  outcomes: z.array(outcomeItemSchema),

  aiTitle: z.string().optional(),
  aiDesc: z.string().optional(),
  aiFeatures: z.array(outcomeItemSchema),

  modulesTitle: z.string().optional(),
  modulesDesc: z.string().optional(),
  modules: z.array(moduleItemSchema),

  industriesTitle: z.string().optional(),
  industriesDesc: z.string().optional(),
  industries: z.array(z.string()),

  integrationsTitle: z.string().optional(),
  integrationsDesc: z.string().optional(),
  integrations: z.array(z.string()),

  whyTitle: z.string().optional(),
  whyDesc: z.string().optional(),
  whyBullets: z.array(z.string()),

  faqs: z.array(faqItemSchema),

  ctaTitle: z.string().optional(),
  ctaSubtitle: z.string().optional(),
  ctaButtons: z.array(ctaButtonSchema),
});

export type ProductFormValues = z.infer<typeof productSchema>;

export const blogSchema = z.object({
  slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers and hyphens only"),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  shortDescription: z.string().optional(),
  category: z.string().min(1, "Category is required"),
  image: z.string().min(1, "Image is required"),
  bodyHtml: z.string().min(1, "Body is required"),
  publishedAt: z.date(),
  readTime: z.string().min(1, "Read time is required"),
  size: z.enum(["large", "medium", "small"]),
  featured: z.boolean(),
});

export type BlogFormValues = z.infer<typeof blogSchema>;

export const caseStudySchema = z.object({
  slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers and hyphens only"),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  shortDescription: z.string().optional(),
  category: z.string().min(1, "Category is required"),
  categories: z.array(z.string()),
  image: z.string().min(1, "Image is required"),
  client: z.string().min(1, "Client is required"),
  industry: z.string().min(1, "Industry is required"),
  publishedAt: z.date(),
  readTime: z.string().min(1, "Read time is required"),
  size: z.enum(["large", "medium", "small"]),
  featured: z.boolean(),
  results: z.array(caseStudyResultSchema),
  bodyHtml: z.string().min(1, "Body is required"),
});

export type CaseStudyFormValues = z.infer<typeof caseStudySchema>;
