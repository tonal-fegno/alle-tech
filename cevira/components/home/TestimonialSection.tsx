"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

const testimonials = [
  {
    quote:
      "Fast, reliable, and always spotless. The best cleaning service we’ve used so far.",
    author: "Cody Fisher",
    role: "Manager",
    avatar:
      "https://framerusercontent.com/images/ReG9tf6xQAp2D3CqssK3eEP0Xk.jpg",
  },
  {
    quote:
      "Spotless, stress-free, healthier spaces. Booking takes minutes and the results speak for themselves.",
    author: "Leslie Alexander",
    role: "Operations Lead",
    avatar:
      "https://framerusercontent.com/images/wdpdbLQu1F6oAUX7W0gwIxxako.png",
  },
  {
    quote:
      "Professional, punctual, and thorough. Our office has never looked better, week after week.",
    author: "Darrell Steward",
    role: "Facility Manager",
    avatar:
      "https://framerusercontent.com/images/vpbgrsXqJUpUxCOtbvNNuf8bP0.png",
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
            {/* Portrait */}
            <div className="grid justify-self-center md:justify-self-start">
              {testimonials.map((t, i) => (
                <Image
                  key={t.author}
                  src={t.avatar}
                  alt={t.author}
                  width={260}
                  height={260}
                  className={`h-[200px] w-[200px] rounded-full object-cover md:h-[240px] md:w-[240px] lg:h-[260px] lg:w-[260px] ${slideCls(i)}`}
                />
              ))}
            </div>

            {/* Content */}
            <div>
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} />
                ))}
              </div>

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
                        &mdash; {t.author}
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
