"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/ui/Button";

const steps = [
  {
    number: "01",
    title: "Choose Your Service",
    description:
      "Browse our range of professional cleaning services and select the one that best suits your needs. Whether it\u2019s routine maintenance or a deep clean, we\u2019ve got you covered.",
    image:
      "https://framerusercontent.com/images/IqmnpO3EK4hlwcjBBmDPKlpRoO0.png",
  },
  {
    number: "02",
    title: "Schedule Your Cleaning",
    description:
      "Pick a date and time that works for you. Our flexible scheduling makes it easy to book a cleaning around your routine, with instant confirmation.",
    image:
      "https://framerusercontent.com/images/uI5IxtbxoXGcfJCaXFEuZHDCTE.png",
  },
  {
    number: "03",
    title: "Relax & Enjoy the Results",
    description:
      "Our trained professionals arrive on time, fully equipped, and ready to work. Sit back while we transform your space into a spotless, healthy environment.",
    image:
      "https://framerusercontent.com/images/WuLSFKD8Aj3fmYelKlFPDms7Qo.png",
  },
];

export default function WorkSection() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section className="section-padding bg-bg-2 px-4 md:px-8">
      <div className="container-main flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col items-center gap-8">
          <SectionHeader
            badge="How It Works"
            title="Get Started in 3 Simple Steps"
            subtitle="Booking your cleaning service is quick, easy, and hassle-free. We make cleaning easy so you can focus on what matters most."
          />
          <Button href="/contact">Schedule Now</Button>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 rounded-section bg-white p-6 md:p-12 lg:grid-cols-2">
          {/* Steps */}
          <div className="flex flex-col gap-4">
            {steps.map((s, index) => (
              <button
                key={s.number}
                type="button"
                onClick={() => setActive(index)}
                className={`flex flex-col gap-3 rounded-2xl border p-6 text-left transition-all duration-300 ${
                  active === index
                    ? "border-primary bg-bg-2"
                    : "border-border-gray/40 bg-white hover:border-primary/40"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full border-2 text-body-18 font-semibold ${
                      active === index
                        ? "border-primary bg-primary text-white"
                        : "border-primary text-primary"
                    }`}
                  >
                    {s.number}
                  </span>
                  <h3 className="heading-6">{s.title}</h3>
                </div>
                {active === index && (
                  <p className="text-body-18 text-body-gray">{s.description}</p>
                )}
              </button>
            ))}
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src={step.image}
              alt={step.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
