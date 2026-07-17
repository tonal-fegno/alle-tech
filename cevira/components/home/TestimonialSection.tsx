"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

const testimonials = [
  {
    quote:
      "Alle Tech Team have always shown a marked ability to work with people in entrepreneurial spirit and an admirable work ethic. Their talent for solving complex problems is unique! We as Al Watani Group have invested in multiple solutions from Alle Tech which automated our business cycle and optimized workflow enabling control and increasing efficiency.",
    author: "Al Watani Group",
    role: "Digital Company",
    avatar: "/assets/client/alwatani.png",
  },
  {
    quote:
      "Alle Tech software development capabilities and unique and practical implementation of ERP systems helped us transform our complex business requirements through powerful, sophisticated, intuitive, and accessible solutions that streamlined our operations, automated our workflows, and improved our bottom line across all departments.",
    author: "Euro Poly Plast",
    role: "Plastic Factory",
    avatar: "/assets/client/euro-poly-plast.png",
  },
  {
    quote:
      "Alle Tech enabled us with real-time reports in a dynamic method which unlocked our opportunities in the market and optimized workflow performance.",
    author: "Beltel FZE",
    role: "Communication Company",
    avatar: "/assets/client/belltel.png",
  },
  {
    quote:
      "Is a leading car trading company specializing in Japanese vehicles. Operating across multiple locations, including Dubai, Oman, Libya, and North Africa, faced challenges in managing their logistics and intercompany transactions efficiently. With our TransSync add-on for SAP Business One and our comprehensive consultation services, we helped them transform their operations and achieve significant improvements.",
    author: "Middle East Group",
    role: "Digital Company",
    avatar: "/assets/client/middle-ease-group.png",
  },
  {
    quote:
      "Our logistics management was a cumbersome and error-prone process. With Freight Pulse, we now have a robust tool that handles everything from managing requests and tracking shipments to creating jobs, receiving goods, and arranging them in the warehouse. The ability to efficiently pack and arrange shipments for outbound logistics according to best practices has greatly improved our operations.",
    author: "Orbit logistics",
    role: "Logistics Company",
    avatar: "/assets/client/orbit-logistics.png",
  },
  {
    quote:
      "One of the standout features of Freight Pulse is its integration of billing and cost tracking. We can now easily manage the cost structure for each job, ensuring accurate billing and cost allocation. This integration has not only streamlined our financial processes but also provided us with a comprehensive view of our logistics costs, enhancing our financial management and planning.",
    author: "Captain Freight",
    role: "Freight & Logistics",
    avatar: "/assets/client/cfs.png",
  },
  {
    quote:
      "Working with ALLE TECH to implement SAP Business One has been a game-changer for our business. As a paint manufacturing and trading company with locations in Iraq we faced significant challenges in managing our operations and maintaining control over our extensive activities. The implementation of SAP Business One has not only addressed these challenges but also provided us with enhanced operational efficiency and control.",
    author: "United Colors",
    role: "Paint Factory",
    avatar: "/assets/client/united-colors.png",
  },
  // {
  //   quote:
  //     "ALLE TECH ensured that SAP Business One was seamlessly integrated with our existing systems. This integration has allowed for smooth data transfer and communication between different departments, further enhancing our operational efficiency. The system's flexibility and scalability also mean that it can grow with our business, adapting to our changing needs.",
  //   author: "Brightcom",
  //   role: "Electronics Distributor",
  //   avatar: "/assets/client/brightcom.png",
  // },
  {
    quote:
      "ALLE TECH ensured that SAP Business One was seamlessly integrated with our existing systems. This integration has allowed for smooth data transfer and communication between different departments, further enhancing our operational efficiency. The system's flexibility and scalability also mean that it can grow with our business, adapting to our changing needs.",
    author: "Najm Properties",
    role: "Real Estate Company",
    avatar: "/assets/client/najm.png",
  },
  {
    quote:
      "With ALLE TECH consultation along with SAP Business One, we now have a centralized platform that integrates all aspects of our trading operations. This has streamlined our processes, allowing us to manage vehicle trades more efficiently, track transactions in real-time, and ensure consistent data across all locations.",
    author: "AYT Motors",
    role: "Cars Dealer",
    avatar: "/assets/client/ayt.png",
  },
  {
    quote:
      "Partnering with ALLE TECH to implement SAP Business One has been a game-changer for our car spare parts dealership. Managing an inventory of over 150,000 items across multiple locations was a daunting task that often led to operational inefficiencies and challenges in maintaining control over trades. The implementation of SAP Business One has not only addressed these issues but has also significantly enhanced our overall operational efficiency and control.",
    author: "Explorations",
    role: "Vehicle Spare Parts Distribution",
    avatar: "/assets/client/exploration.png",
  },
  {
    quote:
      "In addition to the TransSync add-on, the consultation services provided by Alle Tech have been exceptional. Their team took the time to understand our unique challenges and provided tailored solutions that have greatly benefited our business. The ongoing support and guidance have been instrumental in our continued success.",
    author: "North Africa General Trading",
    role: "General Trading",
    avatar: "/assets/client/natco.png",
  },
  {
    quote:
      "The comprehensive tools provided by Van Sales solution of ALLE TECH have optimized our logistics operations. From managing incoming and outgoing shipments to tracking inventory and assigning sales reps, every aspect of our logistics is now more efficient and effective. The ability to set up price rules and promotions within the app has also helped us drive sales and better manage our distribution.",
    author: "Smart Electronics Company",
    role: "Digital Company",
    avatar: "/assets/client/sec.png",
  },
  {
    quote:
      "The integration of SAP Business One through ALLE TECH has significantly improved our day-to-day operations. Tasks such as processing orders, managing stock, and tracking financials are now automated, freeing up our team to focus on strategic initiatives and customer service. The system's intuitive interface and comprehensive features have made it easier for our staff to perform their duties efficiently.",
    author: "VAPEY",
    role: "Vape Wholesale",
    avatar: "/assets/client/vapey.png",
  },
  {
    quote:
      "We rely on ALLE TECH for streamline and accelerate our daily mass operation's transactions, and it has exceeded our expectations in terms of reliability and performance. The real-time updates and customizable features have allowed us to tailor the application to our unique needs, resulting in a more streamlined and productive operation.",
    author: "Focuz Company",
    role: "Spare Parts Trading",
    avatar: "/assets/client/ft.png",
  },
];

function Star() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="#F59E0B">
      <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
    </svg>
  );
}

export default function TestimonialSection() {
  const [active, setActive] = useState(0);
  const count = testimonials.length;
  const prev = () => setActive((active - 1 + count) % count);
  const next = () => setActive((active + 1) % count);

  const slideCls = (i: number) =>
    `col-start-1 row-start-1 transition-opacity duration-500 ${
      active === i ? "opacity-100" : "pointer-events-none opacity-0"
    }`;

  return (
    <section className="section-padding bg-[#F7F8FA] px-4 md:px-8">
      <div className="container-main flex flex-col gap-12 md:gap-16">
        <SectionHeader
          badge="Testimonial"
          title="Our Reputation, Built on Client Trust"
        />

        <div className="rounded-[28px] bg-white p-8 shadow-[0_10px_40px_rgba(0,11,34,0.06)] md:p-12 lg:p-14">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[240px_1fr] md:gap-14 lg:grid-cols-[260px_1fr]">
            {/* Logo */}
            <div className="grid justify-self-center md:justify-self-start">
              {testimonials.map((t, i) => (
                <div
                  key={t.author}
                  className={`flex h-[200px] w-[200px] items-center justify-center rounded-[24px] bg-bg-1 p-8 md:h-[240px] md:w-[240px] lg:h-[260px] lg:w-[260px] ${slideCls(i)}`}
                >
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    width={160}
                    height={160}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Content */}
            <div>
              <div className="mt-6 grid">
                {testimonials.map((t, i) => (
                  <blockquote
                    key={t.author}
                    className={`max-w-[640px] text-[22px] font-medium leading-[1.4] tracking-[-0.01em] text-ink md:text-[26px] ${slideCls(i)}`}
                  >
                    {t.quote}
                  </blockquote>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
                {/* Author */}
                <div className="grid">
                  {testimonials.map((t, i) => (
                    <div key={t.author} className={slideCls(i)}>
                      <p className="text-[15px] font-bold text-ink">
                        {t.author}
                      </p>
                      <p className="mt-0.5 text-[14px] text-body-gray">
                        {t.role}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Controls */}
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    aria-label="Previous testimonial"
                    onClick={prev}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-bg-1 text-ink transition-colors hover:bg-bg-2"
                  >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                      <path
                        d="M6 1L1 6l5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Show testimonial ${i + 1}`}
                        onClick={() => setActive(i)}
                        className={`h-[7px] w-[7px] rounded-full transition-colors duration-300 ${
                          active === i ? "bg-primary" : "bg-border-gray/60"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    aria-label="Next testimonial"
                    onClick={next}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink shadow-[0_2px_10px_rgba(0,11,34,0.15)] transition-colors hover:bg-bg-2"
                  >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                      <path
                        d="M1 1l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
