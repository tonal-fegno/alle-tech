"use client";

import Image from "next/image";
import ArrowButton from "@/components/ui/ArrowButton";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Eyebrow from "@/components/ui/Eyebrow";
import { SOLUTIONS } from "@/lib/constants";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="whitespace-nowrap rounded-full border border-border-gray/50 bg-white px-4 py-2 text-[14px] leading-none text-body-gray">
      {children}
    </span>
  );
}

export default function SolutionsSection() {
  return (
    <section className="section-padding bg-[#F7F8FA] px-4 md:px-8">
      <div className="container-main flex flex-col gap-12 md:gap-14">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <Eyebrow>Our Solutions</Eyebrow>
          <AnimatedHeading className="heading-2">
            Technology That Drives Business Growth
          </AnimatedHeading>
          <p className="max-w-[860px] text-body-18 text-body-gray">
            From ERP and AI to automation and enterprise integrations, we
            deliver intelligent solutions that improve efficiency, enhance
            decision-making, and support long-term success.
          </p>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col gap-4">
          {SOLUTIONS.map((service) => (
            <div
              key={service.slug}
              tabIndex={0}
              className="group flex cursor-pointer flex-col gap-4 rounded-2xl bg-white p-6 shadow-[0_1px_2px_rgba(0,11,34,0.04)] transition-shadow duration-500 ease-in-out hover:shadow-[0_8px_24px_rgba(0,11,34,0.08)] focus-within:shadow-[0_8px_24px_rgba(0,11,34,0.08)] focus:outline-none md:px-8 md:py-7"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-[72px_1fr_auto] md:items-center">
                <p className="text-[28px] font-semibold leading-none tracking-[-0.01em] text-ink md:text-[32px]">
                  {service.number}
                </p>
                <div>
                  <h3 className="heading-6 !text-dark-blue">{service.title}</h3>
                  <p className="mt-2 max-w-[440px] text-body-16 text-body-gray">
                    {service.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {service.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>

              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-6 border-t border-border-gray/30 pt-6 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-focus-within:opacity-100 md:flex-row md:gap-8">
                    <div className="relative rounded-xl h-[280px] w-full shrink-0 md:h-[220px] md:w-[280px]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(min-width: 768px) 280px, 100vw"
                        className="rounded-xl object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-center">
                      <ArrowButton
                        href={`/solutions/${service.slug}`}
                        variant="solid"
                        size="sm"
                      >
                        View Details
                      </ArrowButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
