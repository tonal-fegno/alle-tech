import type { Metadata } from "next";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import ContactFormSection from "@/components/ContactFormSection";
import FaqSection from "@/components/FaqSection";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-bg-3 px-4 py-20 md:px-8 md:py-28 lg:py-[140px]">
        <div className="container-main mx-auto max-w-[900px]">
          <div className="flex flex-col items-center gap-6 text-center">
            <Badge>Contact Us</Badge>
            <h1 className="heading-1">Get in touch with us</h1>
            <p className="max-w-[700px] text-body-18 text-body-gray">
              Have a question, a project in mind, or just want to learn more?
              We&apos;re here to listen and help you move forward with clarity
              and care.
            </p>
          </div>
        </div>
      </section>

      {/* Call Us Now Section */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="container-main">
          <div className="flex flex-col items-center justify-between gap-8 rounded-[20px] bg-bg-1 px-6 py-12 md:flex-row md:px-[60px] md:py-12">
            <div className="flex flex-col gap-3 text-center md:text-left">
              <h2 className="heading-4">Call Us Now</h2>
              <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
                <a
                  href="tel:+12095550104"
                  className="text-body-20 font-medium text-primary transition-colors hover:text-dark-blue"
                >
                  (209) 555-0104
                </a>
                <span className="text-body-20 font-medium text-primary">,</span>
                <a
                  href="tel:+12095550255"
                  className="text-body-20 font-medium text-primary transition-colors hover:text-dark-blue"
                >
                  (209) 555-0255
                </a>
              </div>
            </div>
            <div className="flex shrink-0 items-center justify-center">
              <Image
                src="https://framerusercontent.com/images/b4xacu7YK9Qi77BMad3SvSbD0DU.png"
                alt="Phone"
                width={80}
                height={80}
                className="h-20 w-20 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactFormSection />

      {/* FAQ Section */}
      <FaqSection />
    </>
  );
}
