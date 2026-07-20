import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import CtaSection from "@/components/CtaSection";
import ContactFormSection from "@/components/ContactFormSection";
import FaqSection from "@/components/FaqSection";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-bg-3 px-4 pb-[120px] pt-[200px] md:px-8">
        <div className="container-main flex flex-col items-center gap-6 text-center">
          <SectionHeader
            badge="Cleaning Professionals"
            title="Dedicated Experts"
            subtitle="Experience a higher standard of cleanliness with precision, care, and consistent results."
          />
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="bg-bg-3 px-4 pb-[60px] md:px-8">
        <div className="container-main">
          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />

      {/* Contact Form Section */}
      <ContactFormSection />

      {/* FAQ Section */}
      <FaqSection />
    </main>
  );
}
