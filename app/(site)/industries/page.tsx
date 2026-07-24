import { asc, eq } from "drizzle-orm";
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
  Zap,
  Layers,
  ShieldCheck,
  UserCheck,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustryCard from "@/components/IndustryCard";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import CTABanner from "@/components/common/CTABanner";
import { db } from "@/db";
import {
  industries as industriesTable,
  solutions as solutionsTable,
  products as productsTable,
} from "@/db/schema";

export const metadata: Metadata = {
  title: "Industries",
};

const APPROACH_STEPS = [
  {
    title: "Understand the Industry",
    desc: "We study the compliance, operational standards, and standard requirements of your specific sector first.",
  },
  {
    title: "Understand the Business",
    desc: "We align with your unique team workflows, long-term growth goals, and current pain points.",
  },
  {
    title: "Analyze Processes",
    desc: "Our technology consultants map out current process flows to identify bottlenecks and integration gaps.",
  },
  {
    title: "Design the Solution",
    desc: "We blueprint a tailormade ecosystem linking your ERP, analytics, and business automation.",
  },
  {
    title: "Implement Technology",
    desc: "Our developers deploy, migrate, and configure systems safely using proven industry frameworks.",
  },
  {
    title: "Optimize Performance",
    desc: "We perform thorough testing, run user onboarding sessions, and monitor productivity metrics.",
  },
  {
    title: "Continuously Improve",
    desc: "We act as your long-term technology partner, supporting new upgrades and innovation as you scale.",
  },
];

const WHY_IT_MATTERS = [
  {
    title: "Faster implementations",
    icon: Zap,
    desc: "Pre-built templates and pre-configured industry logic accelerate deployment schedules.",
  },
  {
    title: "Better business processes",
    icon: Layers,
    desc: "Standardize your operations on time-tested workflows used by industry leaders.",
  },
  {
    title: "Reduced project risk",
    icon: ShieldCheck,
    desc: "Avoid costly errors and compliance issues with certified business processes.",
  },
  {
    title: "Higher user adoption",
    icon: UserCheck,
    desc: "Software configured for your team's everyday tasks feels intuitive and easy to adopt.",
  },
  {
    title: "Stronger return on investment",
    icon: TrendingUp,
    desc: "Optimized efficiency, automated tasks, and clean data result in real, fast ROI.",
  },
  {
    title: "Long-term scalability",
    icon: Rocket,
    desc: "A solid digital foundation supports expansion into new business models and markets.",
  },
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
  variant = "light",
}: {
  badge: string;
  title: string;
  subtitle?: string;
  variant?: "light" | "dark";
}) {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <Eyebrow variant={variant}>{badge}</Eyebrow>
      <h2 className={`heading-2 max-w-[800px] ${variant === "dark" ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-[700px] text-body-20 ${variant === "dark" ? "text-white/70" : "text-body-gray"}`}>
          {subtitle}
        </p>
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
      className={`group flex flex-col items-center gap-4 rounded-section border border-border-gray/30 bg-gradient-to-br from-bg-2/80 via-white to-blue-50/20 p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:from-bg-2 hover:to-primary/20 hover:border-primary/60 hover:shadow-[0_20px_40px_rgba(44,143,206,0.15)] ${className}`}
    >
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-white shadow-[0_4px_12px_rgba(44,143,206,0.25)] transition-transform duration-300 group-hover:scale-110">
        <Icon size={24} />
      </span>
      <div className="flex flex-col items-center gap-2">
        <span className="text-body-16 font-semibold text-ink transition-colors duration-300 group-hover:text-primary">
          {title}
        </span>
        <span className="h-[3px] w-8 rounded-full bg-gradient-primary transition-all duration-300 group-hover:w-12" />
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

export default async function IndustriesPage() {
  const industries = await db
    .select()
    .from(industriesTable)
    .where(eq(industriesTable.enabled, true))
    .orderBy(asc(industriesTable.sortOrder));

  const solutions = await db
    .select()
    .from(solutionsTable)
    .where(eq(solutionsTable.enabled, true))
    .orderBy(asc(solutionsTable.sortOrder));

  const products = await db
    .select()
    .from(productsTable)
    .where(eq(productsTable.enabled, true))
    .orderBy(asc(productsTable.sortOrder));

  return (
    <main>
      {/* Hero Section */}
      <IndustriesHero />
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
            {industries.map((industry) => (
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
              items={solutions.map((solution) => ({
                title: solution.title,
                icon: ENTERPRISE_ICONS[solution.slug] ?? Layers,
              }))}
            />
            <EcosystemGroup
              type="platform"
              label="Platform Solutions"
              items={products.map((product) => ({
                title: product.title,
                icon: PLATFORM_ICONS[product.slug] ?? Boxes,
              }))}
            />
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters Section (Immersive Dark Section) */}
      <section className="relative overflow-hidden bg-[#0B0714] px-4 section-padding md:px-8">
        {/* Ambient background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[480px]"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% -10%, rgba(76,29,149,0.4), transparent 70%)",
          }}
        />

        <div className="container-main relative z-10 flex flex-col items-center gap-12">
          <EyebrowHeader
            badge="The Difference"
            title="Why Industry Expertise Matters"
            subtitle="Technology alone doesn't create business success — industry knowledge does. We don't simply implement software. We implement industry best practices."
            variant="dark"
          />

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_IT_MATTERS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col gap-4 rounded-section border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:-translate-y-1.5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[18px] font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-white/70">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Approach Section (Premium Numbered Grid) */}
      <section className="bg-slate-50 px-4 section-padding md:px-8">
        <div className="container-main flex flex-col items-center gap-12">
          <EyebrowHeader
            badge="Our Methodology"
            title="The ALLE Industry Approach"
            subtitle="Technology should adapt to your industry — not the other way around. Every engagement follows a structured, business-first process."
          />

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {APPROACH_STEPS.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col gap-4 rounded-section border border-border-gray/30 bg-white p-6 shadow-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary text-[15px] font-extrabold">
                  0{index + 1}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[18px] font-bold text-ink tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-body-gray">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <CTABanner
        label="LET'S CONNECT"
        heading="Your Industry Is Unique. Your Technology Should Be Too."
        subtitle="At ALLE TECH, we combine deep business understanding with intelligent technology to help organizations operate more efficiently, make better decisions, and grow with confidence."
        ctaLabel="Book a Consultation"
        secondaryLabel="Speak with an Advisor"
        secondaryHref="/contact"
      />
    </main>
  );
}
