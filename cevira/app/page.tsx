import HeroSection from "@/components/home/HeroSection";
import BrandTicker from "@/components/home/BrandTicker";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CtaSection from "@/components/CtaSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import FaqSection from "@/components/FaqSection";
import ContactFormSection from "@/components/ContactFormSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandTicker />
      <AboutSection />
      <ServicesSection />
      <SolutionsSection />
      <FeaturesSection />
      {/* <CtaSection /> */}
      <IndustriesSection />
      <TestimonialSection />
      <FaqSection />
      <ContactFormSection />
    </>
  );
}
