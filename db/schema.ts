import type { AnyPgColumn } from "drizzle-orm/pg-core";
import {
  boolean,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import type {
  CaseStudyResult,
  ChallengeItem,
  CtaButton,
  FaqItem,
  FlowStep,
  IntegrationItem,
  LifecycleStep,
  ModuleItem,
  OutcomeItem,
  RelatedIndustryItem,
  WhyItem,
} from "./schema-types";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const menus = pgTable("menus", {
  id: serial("id").primaryKey(),
  label: text("label").notNull(),
  path: text("path"),
  icon: text("icon"),
  order: integer("order").notNull().default(0),
  parentId: integer("parent_id").references((): AnyPgColumn => menus.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const clientLogos = pgTable("client_logos", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  image: text("image").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
  enabled: boolean("enabled").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const aboutStats = pgTable("about_stats", {
  id: serial("id").primaryKey(),
  topLabel: text("top_label").notNull(),
  number: text("number").notNull(),
  bottomLabel: text("bottom_label").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
  enabled: boolean("enabled").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const faqs = pgTable("faqs", {
  id: serial("id").primaryKey(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
  enabled: boolean("enabled").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  quote: text("quote").notNull(),
  author: text("author").notNull(),
  role: text("role").notNull(),
  avatar: text("avatar").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
  enabled: boolean("enabled").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const teamMembers = pgTable("team_members", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  designation: text("designation").notNull(),
  image: text("image").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
  enabled: boolean("enabled").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const industries = pgTable("industries", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  typicalSolutions: jsonb("typical_solutions").$type<string[]>().notNull().default([]),
  sortOrder: integer("sort_order").notNull().default(0),
  enabled: boolean("enabled").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const solutions = pgTable("solutions", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  shortDescription: text("short_description").notNull(),
  image: text("image").notNull(),
  tags: jsonb("tags").$type<string[]>().notNull().default([]),
  features: jsonb("features").$type<string[]>().notNull().default([]),

  heroTitle: text("hero_title"),
  heroSubtitle: text("hero_subtitle"),
  heroImage: text("hero_image"),

  whyTitle: text("why_title"),
  whyItems: jsonb("why_items").$type<WhyItem[]>().notNull().default([]),

  challengesTitle: text("challenges_title"),
  challenges: jsonb("challenges").$type<ChallengeItem[]>().notNull().default([]),

  flowTitle: text("flow_title"),
  flowSteps: jsonb("flow_steps").$type<FlowStep[]>().notNull().default([]),

  modulesTitle: text("modules_title"),
  modules: jsonb("modules").$type<ModuleItem[]>().notNull().default([]),

  lifecycleTitle: text("lifecycle_title"),
  lifecycle: jsonb("lifecycle").$type<LifecycleStep[]>().notNull().default([]),

  relatedIndustriesTitle: text("related_industries_title"),
  relatedIndustries: jsonb("related_industries").$type<RelatedIndustryItem[]>().notNull().default([]),

  integrationsTitle: text("integrations_title"),
  integrations: jsonb("integrations").$type<IntegrationItem[]>().notNull().default([]),

  faqsTitle: text("faqs_title"),
  faqs: jsonb("faqs").$type<FaqItem[]>().notNull().default([]),

  outcomesTitle: text("outcomes_title"),
  outcomes: jsonb("outcomes").$type<OutcomeItem[]>().notNull().default([]),

  whyAlleTechTitle: text("why_alle_tech_title"),
  whyAlleTechItems: jsonb("why_alle_tech_items").$type<OutcomeItem[]>().notNull().default([]),

  ctaTitle: text("cta_title"),
  ctaSubtitle: text("cta_subtitle"),
  ctaLabel: text("cta_label"),
  ctaSecondaryLabel: text("cta_secondary_label"),

  sortOrder: integer("sort_order").notNull().default(0),
  enabled: boolean("enabled").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  logo: text("logo"),
  cardBg: text("card_bg"),
  tagline: text("tagline").notNull(),
  websiteUrl: text("website_url"),
  displayUrl: text("display_url"),
  heroSubtitle: text("hero_subtitle"),
  heroImage: text("hero_image"),
  heroDesc: text("hero_desc"),
  accentColor: text("accent_color"),
  accentGradient: text("accent_gradient"),
  darkBgGradient: text("dark_bg_gradient"),

  conceptTitle: text("concept_title"),
  conceptSubtitle: text("concept_subtitle"),
  conceptDesc: text("concept_desc"),
  conceptBullets: jsonb("concept_bullets").$type<string[]>().notNull().default([]),

  challengesTitle: text("challenges_title"),
  challenges: jsonb("challenges").$type<ChallengeItem[]>().notNull().default([]),

  outcomesTitle: text("outcomes_title"),
  outcomesDesc: text("outcomes_desc"),
  outcomes: jsonb("outcomes").$type<OutcomeItem[]>().notNull().default([]),

  aiTitle: text("ai_title"),
  aiDesc: text("ai_desc"),
  aiFeatures: jsonb("ai_features").$type<OutcomeItem[]>().notNull().default([]),

  modulesTitle: text("modules_title"),
  modulesDesc: text("modules_desc"),
  modules: jsonb("modules").$type<ModuleItem[]>().notNull().default([]),

  industriesTitle: text("industries_title"),
  industriesDesc: text("industries_desc"),
  industries: jsonb("industries").$type<string[]>().notNull().default([]),

  integrationsTitle: text("integrations_title"),
  integrationsDesc: text("integrations_desc"),
  integrations: jsonb("integrations").$type<string[]>().notNull().default([]),

  whyTitle: text("why_title"),
  whyDesc: text("why_desc"),
  whyBullets: jsonb("why_bullets").$type<string[]>().notNull().default([]),

  faqs: jsonb("faqs").$type<FaqItem[]>().notNull().default([]),

  ctaTitle: text("cta_title"),
  ctaSubtitle: text("cta_subtitle"),
  ctaButtons: jsonb("cta_buttons").$type<CtaButton[]>().notNull().default([]),

  sortOrder: integer("sort_order").notNull().default(0),
  enabled: boolean("enabled").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const contentSizeEnum = pgEnum("content_size", ["large", "medium", "small"]);

export const blogs = pgTable("blogs", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  shortDescription: text("short_description"),
  category: text("category").notNull(),
  image: text("image").notNull(),
  bodyHtml: text("body_html").notNull(),
  publishedAt: timestamp("published_at").notNull().defaultNow(),
  readTime: text("read_time").notNull(),
  size: contentSizeEnum("size").notNull().default("medium"),
  featured: boolean("featured").notNull().default(false),
  enabled: boolean("enabled").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const caseStudies = pgTable("case_studies", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  shortDescription: text("short_description"),
  category: text("category").notNull(),
  categories: jsonb("categories").$type<string[]>().notNull().default([]),
  image: text("image").notNull(),
  client: text("client").notNull(),
  industry: text("industry").notNull(),
  publishedAt: timestamp("published_at").notNull().defaultNow(),
  readTime: text("read_time").notNull(),
  size: contentSizeEnum("size").notNull().default("medium"),
  featured: boolean("featured").notNull().default(false),
  results: jsonb("results").$type<CaseStudyResult[]>().notNull().default([]),
  bodyHtml: text("body_html").notNull(),
  enabled: boolean("enabled").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
