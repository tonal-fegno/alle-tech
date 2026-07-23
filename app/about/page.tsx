import { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutWhoWeAre from "@/components/about/AboutWhoWeAre";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import AboutAwards from "@/components/about/AboutAwards";
import AboutVideo from "@/components/about/AboutVideo";
import AboutTeam from "@/components/about/AboutTeam";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import AboutValue from "@/components/about/AboutValue";

export const metadata: Metadata = {
  title: "About Us | ALLE TECH",
  description: "Learn how ALLE TECH helps organizations transform by combining deep business understanding with intelligent business technologies.",
};

export default function AboutPage() {
  return (
    <>
      <main className="flex-1 transition-colors duration-300 max-w-[1320px] w-full mx-auto flex flex-col gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <AboutHero />

        {/* Our Story Section */}
        <AboutWhoWeAre />

        {/* Why Choose Us Section (Purpose, Mission, Vision) */}
        <WhyChooseUs />

        {/* Philosophy: Business First, Technology Always */}
        <AboutPhilosophy />

        {/* Value Creation: More Than a Technology Provider */}
        <AboutValue />

        {/* Awards & Recognition Section */}
        {/* <AboutAwards /> */}

        {/* Video Section */}
        {/* <AboutVideo /> */}

        {/* Team Section */}
        <AboutTeam />
      </main>

      {/* CTA Section */}
      {/* <CtaSection /> */}

      {/* FAQ Section */}
      {/* <FaqSection /> */}
    </>
  );
}
