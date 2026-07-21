"use client";

import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";

export default function AboutHero() {
  return (
    <section className="w-full py-8 lg:py-12">
      <div className="flex flex-col gap-[60px]">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start justify-between">
          {/* Main Heading */}
          <div className="max-w-[740px] flex flex-col gap-4">
            {/* Accent Line & Label */}
            <Eyebrow dotClassName="">About Us</Eyebrow>
            <h1 className="font-inter font-semibold text-[36px] leading-[44px] sm:text-[48px] sm:leading-[56px] lg:text-[56px] lg:leading-[68px] xl:text-[68px] xl:leading-[82px] text-dark-blue tracking-tight animate-slide-left">
              Future-Ready Business Solutions
            </h1>
          </div>

          {/* Description Paragraphs */}
          <div className="flex flex-col gap-6 text-body-gray font-inter text-[16px] leading-[26px] sm:text-[18px] sm:leading-[28px] lg:pt-8 animate-slide-right">
            <p>
              Business is evolving rapidly, and organizations need smarter ways to improve efficiency, reduce costs, and accelerate growth.
            </p>
            <p>
              At <b>ALLE TECH</b>, we help businesses transform their operations through intelligent technology solutions. By understanding your unique business needs, we deliver solutions that drive measurable results—not just software.

              Our expertise includes ERP, AI, Business Automation, Business Intelligence, Data & Analytics, Cloud Technologies, Enterprise Mobility, Warehouse Management, Enterprise Integrations, and Custom Business Applications—all designed to help your business work smarter and stay future-ready.

            </p>
          </div>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-6 sm:gap-8 items-start">
          {/* Left Image - Wide */}
          <div className="relative w-full aspect-[2038/1198] rounded-[24px] overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/assets/images/about/about-banner-1.avif"
              alt="Business technology solutions and collaborative planning"
              fill
              priority
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
            {/* Ambient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>

          {/* Right Image - Tall/Narrow */}
          <div className="relative w-full aspect-[966/1024] rounded-[24px] overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/assets/images/about/about-banner-2.avif"
              alt="Intelligent business automation planning session"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 35vw"
            />
            {/* Ambient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
