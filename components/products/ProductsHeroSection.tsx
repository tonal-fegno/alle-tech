"use client";

import React from "react";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface ProductsHeroSectionProps {
  onExploreClick?: () => void;
}

export default function ProductsHeroSection({
  onExploreClick,
}: ProductsHeroSectionProps) {
  return (
    <PageHero
      badgeText="ALLE TECH Software Suite"
      title="Intelligent Enterprise Platforms"
      subtitle="Specialized enterprise platforms for field operations, intercompany management, digital logistics, and UAE e-invoicing."
      imageAlt="Enterprise Software Products"
    >
    </PageHero>
  );
}
