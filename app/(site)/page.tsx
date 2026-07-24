import HeroSection from "@/components/home/HeroSection";
import BrandTicker from "@/components/home/BrandTicker";
import AboutSection from "@/components/home/AboutSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CtaSection from "@/components/CtaSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import FaqSection from "@/components/FaqSection";
import ContactFormSection from "@/components/ContactFormSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import ProductsSliderSection from "@/components/home/ProductsSliderSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandTicker />
      <AboutSection />
      <SolutionsSection />
      <ProductsSliderSection />
      <FeaturesSection />
      {/* <CtaSection /> */}
      <IndustriesSection />
      <TestimonialSection />
      <FaqSection />
      <ContactFormSection />
    </>
  );
}
