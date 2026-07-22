import servicesJson from "@/data/services.json";
import blogsJson from "@/data/blogs.json";
import caseStudiesJson from "@/data/case-studies.json";

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

export interface Blog {
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  time: string;
  date: string;
  image: string | null;
  imageVisible: boolean;
  bodyImage01: string | null;
  bodyImage02: string | null;
  bodyImageVisible: boolean;
  banner: string | null;
  bannerVisible: boolean;
  content01: string | null;
  content01Visible: boolean;
  content02: string | null;
  content02Visible: boolean;
}

export interface CaseStudy {
  slug: string;
  title: string;
  shortDescription: string;
  categories: string[];
  image: string | null;
  imageVisible: boolean;
  bodyImage: string | null;
  bodyImageVisible: boolean;
  content01: string | null;
  content01Visible: boolean;
  content02: string | null;
  content02Visible: boolean;
}

export const services = servicesJson as Service[];
export const blogs = blogsJson as Blog[];
export const caseStudies = caseStudiesJson as CaseStudy[];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getBlog(slug: string): Blog | undefined {
  return blogs.find((b) => b.slug === slug);
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function formatBlogDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
