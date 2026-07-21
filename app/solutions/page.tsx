import type { Metadata } from "next";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import SolutionCard from "@/components/SolutionCard";
import CtaSection from "@/components/CtaSection";
import ContactFormSection from "@/components/ContactFormSection";
import FaqSection from "@/components/FaqSection";
import { SOLUTIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Solutions",
};

export default function SolutionsPage() {
  return (
    <main>
      {/* Hero Section */}
      <SolutionsHero />

      {/* Solutions Grid Section */}
      <section className="bg-bg-3 px-4 pb-[60px] pt-16 md:px-8 md:pt-20">
        <div className="container-main">
          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3">
            {SOLUTIONS.map((solution) => (
              <SolutionCard key={solution.slug} solution={solution} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <CtaSection /> */}

      {/* Contact Form Section */}
      {/* <ContactFormSection /> */}

      {/* FAQ Section */}
      {/* <FaqSection /> */}
    </main>
  );
}
