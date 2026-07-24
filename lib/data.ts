import servicesJson from "@/data/services.json";

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

export const services = servicesJson as Service[];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
