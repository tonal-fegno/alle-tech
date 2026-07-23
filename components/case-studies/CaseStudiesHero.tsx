import React from "react";
import PageHero from "@/components/PageHero";

export default function CaseStudiesHero() {
  return (
    <PageHero
      badgeText="Case Studies"
      title="Client success stories"
      subtitle="Real results from real deployments — see how we help enterprises modernize operations, unlock analytics, and scale with confidence."
      imageSrc="/images/case-studies/case-study.png"
      imageAlt="Case Studies"
    />
  );
}
