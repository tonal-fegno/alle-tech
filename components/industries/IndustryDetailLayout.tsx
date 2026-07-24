import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Boxes, Factory, Truck, ShoppingBag, Activity, Hammer, Car, Briefcase, Utensils, Globe, type LucideIcon } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import CTABanner from "@/components/common/CTABanner";
import type { industries } from "@/db/schema";

type Industry = typeof industries.$inferSelect;

const INDUSTRY_ICONS: Record<string, LucideIcon> = {
  "distribution-wholesale": Boxes,
  "manufacturing": Factory,
  "logistics-supply-chain": Truck,
  "retail": ShoppingBag,
  "healthcare": Activity,
  "construction": Hammer,
  "automotive": Car,
  "professional-services": Briefcase,
  "food-beverage": Utensils,
  "e-commerce": Globe,
};

export default function IndustryDetailLayout({ industry }: { industry: Industry }) {
  const Icon = INDUSTRY_ICONS[industry.slug] || Boxes;

  return (
    <main>
      <section className="bg-bg-3 px-4 section-padding md:px-8">
        <div className="container-main flex flex-col gap-8">
          <Link
            href="/industries"
            className="flex w-fit items-center gap-2 text-body-16 font-medium text-body-gray transition-colors hover:text-primary"
          >
            <ArrowLeft size={18} />
            Back to Industries
          </Link>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon size={28} strokeWidth={2} />
              </div>
              <Eyebrow>Industry</Eyebrow>
              <h1 className="heading-1">{industry.title}</h1>
              <p className="text-body-18 text-body-gray">{industry.description}</p>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-section">
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {industry.typicalSolutions.length > 0 && (
        <section className="bg-white px-4 section-padding md:px-8">
          <div className="container-main flex flex-col gap-8">
            <h2 className="heading-3">Typical Solutions</h2>
            <div className="flex flex-wrap gap-3">
              {industry.typicalSolutions.map((solution) => (
                <span
                  key={solution}
                  className="rounded-full border border-border-gray/40 px-5 py-2 text-body-16 text-body-gray"
                >
                  {solution}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        label="LET'S CONNECT"
        heading={`Ready to Transform Your ${industry.title} Operations?`}
        subtitle="Talk to our team about the right technology stack for your industry."
        ctaLabel="Book a Consultation"
        secondaryLabel="Speak with an Advisor"
        secondaryHref="/contact"
      />
    </main>
  );
}
