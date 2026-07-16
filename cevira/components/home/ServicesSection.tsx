"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    slug: "SAP-Business-One",
    number: "01",
    title: "SAP Business One",
    description:
      "Streamline your business with an integrated ERP solution that simplifies operations, improves visibility, and drives growth.",
    image:
      "https://framerusercontent.com/images/BHtyXThekWm38efWvDJkVyqbLVM.png",
    tags: ["Financial Management", "Sales & CRM"],
  },
  {
    slug: "Odoo-ERP",
    number: "02",
    title: "Odoo ERP",
    description:
      "Simplify and automate your business processes with a flexible ERP platform that connects every department in one system.",
    image:
      "https://framerusercontent.com/images/56ZqtDbQrIjdTAh4EfEp6NzsCS0.png",
    tags: ["Finance & Accounting", "Sales & CRM", "Inventory & Operations"],
  },
  {
    slug: "Technology-Consulting-&-Digital-Transformation",
    number: "03",
    title: "Technology Consulting & Digital Transformation",
    description:
      "Accelerate business growth with expert technology consulting, digital innovation, and tailored transformation strategies.",
    image:
      "https://framerusercontent.com/images/re8cwwnrRcBWlS63TvqlvS01NY.png",
    tags: ["Digital Strategy", "Process Automation", "IT Modernization"],
  },
  {
    slug: "Business-Intelligence-&-Power-BI",
    number: "04",
    title: "Business Intelligence & Power BI",
    description:
      "Transform your data into actionable insights with interactive dashboards, real-time analytics, and intelligent reporting.",
    image:
      "https://framerusercontent.com/images/6Paa4KhXEnAGF8Wm4oBiuJj7Rxw.png",
    tags: ["Interactive Dashboards", "Real-Time Analytics", "Custom Reports"],
  },
  {
    slug: "ERP-Integration-&-Enterprise-Connectivity",
    number: "05",
    title: "ERP Integration & Enterprise Connectivity",
    description:
      "Seamlessly connect your business systems to streamline workflows, improve data accuracy, and enable real-time collaboration.",
    image:
      "https://framerusercontent.com/images/6Paa4KhXEnAGF8Wm4oBiuJj7Rxw.png",
    tags: ["System Integration", "API Connectivity", "Data Synchronization"],
  },
  {
    slug: "Cloud-&-IT-Infrastructure-Services",
    number: "06",
    title: "Cloud & IT Infrastructure Services",
    description:
      "Build a secure, scalable, and reliable IT environment with modern cloud solutions and infrastructure management.",
    image:
      "https://framerusercontent.com/images/6Paa4KhXEnAGF8Wm4oBiuJj7Rxw.png",
    tags: ["Cloud Migration", "Infrastructure Management", "Security & Backup"],
  },
  {
    slug: "Managed-Services-&-Technology-Support",
    number: "07",
    title: "Managed Services & Technology Support",
    description:
      "Keep your business running smoothly with proactive IT management, continuous monitoring, and expert technical support.",
    image:
      "https://framerusercontent.com/images/6Paa4KhXEnAGF8Wm4oBiuJj7Rxw.png",
    tags: ["24/7 Monitoring", "Help Desk Support", "System Maintenance"],
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="whitespace-nowrap rounded-full border border-border-gray/50 bg-white px-4 py-2 text-[14px] leading-none text-body-gray">
      {children}
    </span>
  );
}

export default function ServicesSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-padding bg-[#F7F8FA] px-4 md:px-8">
      <div className="container-main flex flex-col gap-12 md:gap-14">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-body-16 font-semibold text-ink">
              Our Solutions
            </span>
          </span>
          <h2 className="heading-2">Technology That Drives Business Growth</h2>
          <p className="max-w-[860px] text-body-18 text-body-gray">
            From ERP and AI to automation and enterprise integrations, we
            deliver intelligent solutions that improve efficiency, enhance
            decision-making, and support long-term success.
          </p>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col gap-4">
          {SERVICES.map((service, i) =>
            open === i ? (
              <div
                key={service.slug}
                className="grid grid-cols-1 gap-6 rounded-2xl bg-white p-6 md:grid-cols-[72px_1fr] md:p-8"
              >
                <p className="text-[28px] font-semibold leading-none tracking-[-0.01em] text-ink md:self-center md:text-[32px]">
                  {service.number}
                </p>
                <div className="flex flex-col gap-6 md:flex-row md:gap-8">
                  <div className="relative h-[220px] w-full shrink-0 overflow-hidden rounded-xl md:h-[200px] md:w-[200px]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 768px) 200px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-6 !text-dark-blue">
                      {service.title}
                    </h3>
                    <p className="mt-2 max-w-[640px] text-body-16 text-body-gray">
                      {service.description}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group mt-5 inline-flex items-center gap-3 rounded-xl bg-primary py-2.5 pl-6 pr-2.5 text-body-16 font-semibold text-white transition-colors duration-300 hover:bg-dark-blue"
                    >
                      View Details
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/60 transition-transform duration-300 group-hover:translate-x-0.5">
                        <svg
                          width="14"
                          height="11"
                          viewBox="0 0 18 14"
                          fill="none"
                        >
                          <path
                            d="M1 7h15m0 0L10.5 1.5M16 7l-5.5 5.5"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                    <div className="mt-6 border-t border-border-gray/30 pt-6">
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <Tag key={tag}>{tag}</Tag>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={service.slug}
                role="button"
                tabIndex={0}
                aria-expanded={false}
                onClick={() => setOpen(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpen(i);
                  }
                }}
                className="flex cursor-pointer flex-col gap-4 rounded-2xl bg-white p-6 transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,11,34,0.08)] md:grid md:grid-cols-[72px_1fr_auto] md:items-center md:px-8 md:py-7"
              >
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
            )
          )}
        </div>
      </div>
    </section>
  );
}
