import HeroSection from "@/components/home/HeroSection";
import BrandTicker from "@/components/home/BrandTicker";
import AboutSection from "@/components/home/AboutSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CtaSection from "@/components/CtaSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import BlogsSection from "@/components/home/BlogsSection";
import FaqSection from "@/components/FaqSection";
import ContactFormSection from "@/components/ContactFormSection";
import SolutionsSection from "@/components/home/ServicesSection";
import ServicesSection from "@/components/home/SolutionsSection";
import FloatingActions from "@/components/FloatingActions";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandTicker />
      <AboutSection />
      <SolutionsSection />
      <ServicesSection />
      <FeaturesSection />
      {/* <CtaSection /> */}
      <IndustriesSection />
      <TestimonialSection />
      <BlogsSection />
      <FaqSection />
      <ContactFormSection />
      <FloatingActions />
    </>
  );
}
