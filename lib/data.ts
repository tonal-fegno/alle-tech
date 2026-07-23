import servicesJson from "@/data/services.json";
import {
  BLOG_POSTS,
  BlogPost as BlogPostType,
  BlogBlock as BlogBlockType,
} from "@/data/blogsData";
import {
  CASE_STUDIES,
  CaseStudy as CaseStudyType,
  CaseBlock as CaseBlockType,
  CaseStudyResult as CaseStudyResultType,
} from "@/data/caseStudies";

export interface Service {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  image: string | null;
  imageVisible: boolean;
  bodyImage: string | null;
  bodyImageVisible: boolean;
  categories: string[];
  content01: string | null;
  content01Visible: boolean;
  content02: string | null;
  content02Visible: boolean;
}

export type BlogBlock = BlogBlockType;
export type Blog = BlogPostType;

export type CaseBlock = CaseBlockType;
export type CaseStudyResult = CaseStudyResultType;
export type CaseStudy = CaseStudyType;

export const services = servicesJson as Service[];
export const blogs = BLOG_POSTS as unknown as Blog[];
export const caseStudies = CASE_STUDIES;

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getBlog(idOrSlug: string): Blog | undefined {
  return (blogs as any[]).find(
    (b) => b.id === idOrSlug || b.slug === idOrSlug
  );
}

export function getCaseStudy(idOrSlug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.id === idOrSlug || c.slug === idOrSlug);
}

export function formatBlogDate(isoOrDateStr: string): string {
  if (!isoOrDateStr) return "";
  const d = new Date(isoOrDateStr);
  if (isNaN(d.getTime())) return isoOrDateStr;
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
