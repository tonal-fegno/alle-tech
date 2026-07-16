import { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import PricingCard from "@/components/PricingCard";
import ComparisonTable from "@/components/pricing/ComparisonTable";
import FaqSection from "@/components/FaqSection";
import ContactFormSection from "@/components/ContactFormSection";
import CtaSection from "@/components/CtaSection";
import { PRICING_PLANS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero/Banner Section */}
      <section className="bg-bg-3 px-4 pb-[120px] pt-[200px] md:px-8">
        <div className="container-main mx-auto max-w-[900px]">
          <SectionHeader
            badge="Pricing Plan"
            title="Explore The Various Plans And Features For Your."
            subtitle="Choose the cleaning plan that fits you best. Enjoy clear pricing with no surprises—just reliable, quality cleaning services."
          />
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="bg-bg-3 px-4 pb-20 pt-[60px] md:px-8">
        <div className="container-main">
          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
            {PRICING_PLANS.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="bg-bg-3 px-4 pb-[120px] pt-20 md:px-8">
        <div className="container-main mx-auto max-w-[1200px]">
          <h2 className="heading-4 mb-10 text-center">Compare Plans</h2>
          <ComparisonTable />
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Contact Form Section */}
      <ContactFormSection />
    </>
  );
}
