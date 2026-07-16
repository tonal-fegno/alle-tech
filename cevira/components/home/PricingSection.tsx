import SectionHeader from "@/components/SectionHeader";
import PricingCard from "@/components/PricingCard";
import { PRICING_PLANS } from "@/lib/constants";

export default function PricingSection() {
  return (
    <section className="section-padding bg-bg-2 px-4 md:px-8">
      <div className="container-main flex flex-col gap-12 md:gap-16">
        <SectionHeader
          badge="Pricing Plan"
          title="Professional Cleaning, Clearly Priced"
          subtitle="Choose the plan that fits your needs. No hidden fees—just reliable, high-quality cleaning you can trust."
        />
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
