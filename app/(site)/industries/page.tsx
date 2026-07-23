import type { Metadata } from "next";
import {
  TrendingUp,
  LayoutGrid,
  Users,
  PieChart,
  Share2,
  Cloud,
  Headset,
  Boxes,
  Link2,
  Truck,
  MessageCircle,
  FileText,
  type LucideIcon,
} from "lucide-react";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustryCard from "@/components/IndustryCard";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import { INDUSTRIES, SOLUTIONS, PRODUCTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Industries",
};

const APPROACH_STEPS = [
  "Understand the Industry",
  "Understand the Business",
  "Analyze Processes",
  "Design the Solution",
  "Implement Technology",
  "Optimize Performance",
  "Continuously Improve",
];

const WHY_IT_MATTERS = [
  "Faster implementations",
  "Better business processes",
  "Reduced project risk",
  "Higher user adoption",
  "Stronger return on investment",
  "Long-term scalability",
];

const ENTERPRISE_ICONS: Record<string, LucideIcon> = {
  "sap-business-one": TrendingUp,
  "odoo-erp": LayoutGrid,
  "technology-consulting": Users,
  "business-intelligence": PieChart,
  "erp-integration": Share2,
  "cloud-infrastructure": Cloud,
  "managed-services": Headset,
};

const PLATFORM_ICONS: Record<string, LucideIcon> = {
  repprox: Boxes,
  transsync: Link2,
  "freight-pulse": Truck,
  engageflow: MessageCircle,
  invoiceflow: FileText,
};

function EyebrowHeader({
  badge,
  title,
  subtitle,
}: {
  badge: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <Eyebrow>{badge}</Eyebrow>
      <h2 className="heading-2 max-w-[800px]">{title}</h2>
      {subtitle && (
        <p className="max-w-[700px] text-body-20 text-body-gray">{subtitle}</p>
      )}
    </div>
  );
}

function EcosystemCard({
  icon: Icon,
  title,
  className = "",
}: {
  icon: LucideIcon;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center gap-4 rounded-section border border-border-gray/40 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,11,34,0.08)] ${className}`}
    >
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-bg-2 text-primary">
        <Icon size={24} />
      </span>
      <div className="flex flex-col items-center gap-2">
        <span className="text-body-16 font-semibold text-ink">{title}</span>
        <span className="h-[3px] w-6 rounded-full bg-gradient-primary" />
      </div>
    </div>
  );
}

function EcosystemGroup({
  type,
  label,
  items,
}: {
  type: "enterprise" | "platform";
  label: string;
  items: { title: string; icon: LucideIcon }[];
}) {
  const cardWidth =
    type === "enterprise"
      ? "w-[calc(50%-10px)] md:w-[calc(25%-15px)]"
      : "w-[calc(50%-10px)] md:w-[calc(20%-16px)]";

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <span className="h-px flex-1 bg-border-gray/40" />
        <span className="text-body-16 font-semibold uppercase tracking-[0.15em] text-primary">
          {label}
        </span>
        <span className="h-px flex-1 bg-border-gray/40" />
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {items.map((item) => (
          <EcosystemCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            className={cardWidth}
          />
        ))}
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M4.5 12.75l6 6 9-13.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function IndustriesPage() {
  return (
    <main>
      {/* Hero Section */}
      <IndustriesHero />

      {/* Industry Expertise Section */}
      <section className="bg-white px-4 section-padding md:px-8">
        <div className="container-main flex flex-col items-center gap-8">
          <EyebrowHeader
            badge="Why It Matters"
            title="Industry Expertise That Creates Business Value"
            subtitle="Technology delivers the greatest value when it reflects industry best practices. Rather than forcing businesses to adapt to software, we configure technology around the way your industry operates."
          />
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section
        id="industries-we-serve"
        className="bg-bg-3 px-4 section-padding md:px-8"
      >
        <div className="container-main flex flex-col gap-12">
          <EyebrowHeader
            badge="Industries We Serve"
            title="Solutions Built for Your Sector"
          />
          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3">
            {INDUSTRIES.map((industry) => (
              <IndustryCard key={industry.slug} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="bg-white px-4 section-padding md:px-8">
        <div className="container-main flex flex-col gap-12">
          <EyebrowHeader
            badge="Our Ecosystem"
            title="Solutions Tailored to Your Industry"
            subtitle="Every industry combines different technology requirements. ALLE TECH brings together a complete technology ecosystem that supports your operational goals."
          />

          <div className="flex flex-col gap-10">
            <EcosystemGroup
              type="enterprise"
              label="Enterprise Solutions"
              items={SOLUTIONS.map((solution) => ({
                title: solution.title,
                icon: ENTERPRISE_ICONS[solution.slug],
              }))}
            />
            <EcosystemGroup
              type="platform"
              label="Platform Solutions"
              items={PRODUCTS.map((product) => ({
                title: product.title,
                icon: PLATFORM_ICONS[product.slug],
              }))}
            />
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters Section */}
      <section className="bg-bg-3 px-4 section-padding md:px-8">
        <div className="container-main flex flex-col items-center gap-12">
          <EyebrowHeader
            badge="The Difference"
            title="Why Industry Expertise Matters"
            subtitle="Technology alone doesn't create business success — industry knowledge does. We don't simply implement software. We implement industry best practices."
          />
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_IT_MATTERS.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-section border border-border-gray/40 bg-white p-6"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bg-2 text-primary">
                  <CheckIcon />
                </span>
                <span className="text-body-18 font-semibold text-ink">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Approach Section */}
      <section className="bg-white px-4 section-padding md:px-8">
        <div className="container-main flex flex-col items-center gap-12">
          <EyebrowHeader
            badge="Our Methodology"
            title="The ALLE Industry Approach"
            subtitle="Technology should adapt to your industry — not the other way around. Every engagement follows the same philosophy."
          />
          <div className="flex w-full flex-wrap items-center justify-center gap-3">
            {APPROACH_STEPS.map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <div className="flex items-center gap-3 rounded-full border border-border-gray/60 bg-bg-3 px-5 py-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-[14px] font-semibold text-white">
                    {index + 1}
                  </span>
                  <span className="whitespace-nowrap text-body-16 font-semibold text-ink">
                    {step}
                  </span>
                </div>
                {index < APPROACH_STEPS.length - 1 && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="hidden shrink-0 text-border-gray sm:block"
                  >
                    <path
                      d="M1 8h13m0 0L9.5 3.5M14 8l-4.5 4.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      {/* <section className="px-4 pb-16 pt-0 md:px-8 md:pb-24 xl:pb-[120px]">
        <div className="container-main">
          <div className="flex flex-col items-center gap-6 rounded-section bg-dark-blue px-6 py-16 text-center md:px-16 md:py-20">
            <h2 className="heading-2 !text-white">
              Your Industry Is Unique. Your Technology Should Be Too.
            </h2>
            <p className="max-w-[700px] text-body-20 text-white/70">
              At ALLE TECH, we combine deep business understanding with
              intelligent technology to help organizations operate more
              efficiently, make better decisions, and grow with confidence.
              Let&apos;s build a solution designed specifically for your
              industry.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact">Book an Industry Consultation</Button>
              <Button href="/contact" variant="white">
                Speak with an Industry Expert
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}
