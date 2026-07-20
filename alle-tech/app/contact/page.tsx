import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactCallBanner from "@/components/ContactCallBanner";
import ContactFormSection from "@/components/ContactFormSection";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-bg-3 px-4 py-20 md:px-8 md:py-28 lg:py-[140px]">
        <div className="container-main mx-auto max-w-[900px]">
          <PageHero
            badge="Contact Us"
            title="Get in touch with us"
            subtitle="Have a question, a project in mind, or just want to learn more? We're here to listen and help you move forward with clarity and care."
          />
        </div>
      </section>

      {/* Call Us Now Section */}
      <ContactCallBanner />

      {/* Contact Form Section */}
      <ContactFormSection />

      {/* FAQ Section */}
      <FaqSection />
    </>
  );
}
