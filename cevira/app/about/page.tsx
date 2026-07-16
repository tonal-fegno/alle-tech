import type { Metadata } from "next";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/about/StatCard";
import MissionVisionTabs from "@/components/about/MissionVisionTabs";
import AwardCard from "@/components/about/AwardCard";
import TeamCard from "@/components/about/TeamCard";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "About",
};

const AWARDS = [
  {
    imageUrl: "https://framerusercontent.com/images/emyH8marqFsJ6TuFzZViLdOztMg",
    title: "Service Excellence",
    subtitle: "Service Index (2025)",
  },
  {
    imageUrl: "https://framerusercontent.com/images/f6uS1OtdQ6XfYtvwnes1ezqSY",
    title: "Best in Class",
    subtitle: "Global Service (2024)",
  },
  {
    imageUrl: "https://framerusercontent.com/images/6vuo1kX0s6N245DVdvirFAwmo",
    title: "Top Rated Cleaning",
    subtitle: "Rated Year (2022)",
  },
  {
    imageUrl: "https://framerusercontent.com/images/6vuo1kX0s6N245DVdvirFAwmo",
    title: "Eco-Friendly Service",
    subtitle: "Clean Excellence (2023)",
  },
  {
    imageUrl: "https://framerusercontent.com/images/emyH8marqFsJ6TuFzZViLdOztMg",
    title: "Gold Standard",
    subtitle: "Quality Assurance (2024)",
  },
  {
    imageUrl: "https://framerusercontent.com/images/f6uS1OtdQ6XfYtvwnes1ezqSY",
    title: "Customer Choice",
    subtitle: "Client Satisfaction (2025)",
  },
];

const TEAM = [
  {
    imageUrl: "https://framerusercontent.com/images/vpbgrsXqJUpUxCOtbvNNuf8bP0",
    name: "Arlene McCoy",
    role: "Cleaning Specialist",
  },
  {
    imageUrl: "https://framerusercontent.com/images/ALtYw0twYSuNsXhS0UKZSgFRBGA",
    name: "Albert Flores",
    role: "Operations Manager",
  },
  {
    imageUrl: "https://framerusercontent.com/images/qSPVnovLawAhELGZ6GUNY1qF8Y",
    name: "Brooklyn Simmons",
    role: "Team Supervisor",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero/Banner Section */}
      <section className="bg-bg-3 px-4 pb-20 pt-[160px] md:px-8 md:pt-[200px]">
        <div className="container-main">
          <div className="flex flex-col items-center gap-6 text-center">
            <Badge>Committed to Healthier Spaces</Badge>
            <h1 className="heading-1">About Us</h1>
          </div>
          <div className="relative mx-auto mt-[60px] aspect-video w-full max-w-[1200px] overflow-hidden rounded-card shadow-[0px_20px_60px_rgba(0,0,0,0.08)]">
            <Image
              src="https://framerusercontent.com/images/YicLdfqHipAoteYHnsyRw9BGdhA"
              alt="Our cleaning team at work"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="container-main">
          <div className="grid grid-cols-1 items-center gap-[60px] lg:grid-cols-2">
            <div className="flex flex-col items-start gap-6">
              <Badge>Who We Are</Badge>
              <p className="max-w-[560px] text-body-18 text-body-gray">
                We are a team of experienced cleaning professionals committed
                to delivering high-quality results with attention to detail,
                reliability, and care in every service we provide.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <StatCard
                label="Business Growth"
                number="98%"
                description="Business revenue growth"
              />
              <StatCard
                label="Ongoing Project"
                number="850"
                description="Gardens Maintained"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-bg-3 px-4 md:px-8">
        <div className="container-main flex flex-col items-center gap-12 md:gap-16">
          <SectionHeader
            badge="Mission & Vision"
            title="Our Mission & Vision"
            subtitle="Guided by purpose and driven by excellence, we aim to deliver cleaning services that truly make a difference."
          />
          <MissionVisionTabs />
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="container-main flex flex-col items-center gap-12 md:gap-16">
          <SectionHeader
            badge="Recognition"
            title="Awards & Recognition"
            subtitle="Our commitment to quality, reliability, and customer satisfaction"
          />
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {AWARDS.map((award) => (
              <AwardCard key={award.title} {...award} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-bg-3 px-4 md:px-8">
        <div className="container-main flex flex-col items-center gap-12 md:gap-16">
          <SectionHeader
            badge="Team"
            title="Meet Our Professional Team"
            subtitle="A dedicated team of trained professionals committed to delivering consistent, high-quality cleaning services with care and attention to detail."
          />
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />

      {/* FAQ Section */}
      <FaqSection />
    </>
  );
}
