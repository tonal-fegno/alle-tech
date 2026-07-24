CREATE TYPE "public"."content_size" AS ENUM('large', 'medium', 'small');--> statement-breakpoint
CREATE TABLE "about_stats" (
	"id" serial PRIMARY KEY NOT NULL,
	"top_label" text NOT NULL,
	"number" text NOT NULL,
	"bottom_label" text NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"enabled" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "blogs" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"short_description" text,
	"category" text NOT NULL,
	"image" text NOT NULL,
	"body_html" text NOT NULL,
	"published_at" timestamp DEFAULT now() NOT NULL,
	"read_time" text NOT NULL,
	"size" "content_size" DEFAULT 'medium' NOT NULL,
	"featured" boolean DEFAULT false NOT NULL,
	"enabled" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "blogs_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "case_studies" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"short_description" text,
	"category" text NOT NULL,
	"categories" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"image" text NOT NULL,
	"client" text NOT NULL,
	"industry" text NOT NULL,
	"published_at" timestamp DEFAULT now() NOT NULL,
	"read_time" text NOT NULL,
	"size" "content_size" DEFAULT 'medium' NOT NULL,
	"featured" boolean DEFAULT false NOT NULL,
	"results" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"body_html" text NOT NULL,
	"enabled" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "case_studies_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "client_logos" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"image" text NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"enabled" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "faqs" (
	"id" serial PRIMARY KEY NOT NULL,
	"question" text NOT NULL,
	"answer" text NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"enabled" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "industries" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"image" text NOT NULL,
	"typical_solutions" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"enabled" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "industries_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"logo" text,
	"card_bg" text,
	"tagline" text NOT NULL,
	"website_url" text,
	"display_url" text,
	"hero_subtitle" text,
	"hero_image" text,
	"hero_desc" text,
	"accent_color" text,
	"accent_gradient" text,
	"dark_bg_gradient" text,
	"concept_title" text,
	"concept_subtitle" text,
	"concept_desc" text,
	"concept_bullets" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"challenges_title" text,
	"challenges" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"outcomes_title" text,
	"outcomes_desc" text,
	"outcomes" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"ai_title" text,
	"ai_desc" text,
	"ai_features" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"modules_title" text,
	"modules_desc" text,
	"modules" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"industries_title" text,
	"industries_desc" text,
	"industries" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"integrations_title" text,
	"integrations_desc" text,
	"integrations" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"why_title" text,
	"why_desc" text,
	"why_bullets" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"faqs" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"cta_title" text,
	"cta_subtitle" text,
	"cta_buttons" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"enabled" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "products_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "solutions" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"short_description" text NOT NULL,
	"image" text NOT NULL,
	"tags" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"features" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"hero_title" text,
	"hero_subtitle" text,
	"hero_image" text,
	"why_title" text,
	"why_items" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"challenges_title" text,
	"challenges" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"flow_title" text,
	"flow_steps" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"modules_title" text,
	"modules" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"lifecycle_title" text,
	"lifecycle" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"related_industries_title" text,
	"related_industries" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"integrations_title" text,
	"integrations" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"faqs_title" text,
	"faqs" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"outcomes_title" text,
	"outcomes" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"why_alle_tech_title" text,
	"why_alle_tech_items" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"cta_title" text,
	"cta_subtitle" text,
	"cta_label" text,
	"cta_secondary_label" text,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"enabled" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "solutions_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "team_members" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"designation" text NOT NULL,
	"image" text NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"enabled" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "testimonials" (
	"id" serial PRIMARY KEY NOT NULL,
	"quote" text NOT NULL,
	"author" text NOT NULL,
	"role" text NOT NULL,
	"avatar" text NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"enabled" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
