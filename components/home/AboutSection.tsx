"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";

const ABOUT_IMAGE = "/images/about-us.png";

const stats = [
  { top: "Industry Expertise", number: "12+", bottom: "Industries Served" },
  {
    top: "Technology Experience",
    number: "10+",
    bottom: "Years of Excellence",
  },
  {
    top: "Trusted Partner",
    number: "100+",
    bottom: "Business Transformations",
  },
];

function AnimatedCounter({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  // Extract number and suffix (e.g., "12+" -> 12 and "+")
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          let startTimestamp: number | null = null;
          const duration = 2000; // Duration of animation in ms

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Ease out quad function: f(t) = t * (2 - t)
            const easeProgress = progress * (2 - progress);
            
            setCount(Math.floor(easeProgress * target));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };

          window.requestAnimationFrame(step);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [target]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section className="section-padding bg-[#F7F8FA] px-4 md:px-8">
      <div className="container-main ">
        <Eyebrow className="md:pt-2">About Us</Eyebrow>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_390px] lg:gap-12 pt-12">
          {/* Left: label, heading, stat cards */}
          <div className="flex flex-col">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-8">
              <h2 className="text-[24px] font-normal leading-[1.35] tracking-[-0.01em] text-ink md:text-[28px] xl:text-[24px]">
                At <span className="font-semibold">ALLE</span>
                <span className="font-semibold"> TECH</span>, we help businesses
                simplify operations, accelerate growth, and make smarter
                decisions through enterprise technology, AI, automation, and
                data-driven solutions. As your trusted Business Technology
                Partner, we empower organizations to innovate, optimize
                performance, and achieve sustainable success.
              </h2>
            </div>

            <div className="mt-12 grid flex-1 grid-cols-1 gap-5 sm:grid-cols-3 lg:mt-auto lg:pt-12">
              {stats.map((stat) => (
                <div
                  key={stat.number}
                  className="flex min-h-[200px] flex-col justify-between rounded-2xl bg-white px-5 py-6 shadow-[0_2px_12px_rgba(0,11,34,0.04)]"
                >
                  <p className="text-body-16 text-ink">{stat.top}</p>
                  <div>
                    <p className="text-[40px] font-semibold leading-[1.1] tracking-[-0.01em] text-ink md:text-[44px]">
                      <AnimatedCounter value={stat.number} />
                    </p>
                    <p className="mt-2 text-[14px] leading-normal text-body-gray">
                      {stat.bottom}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: photo */}
          <div className="relative min-h-[340px] overflow-hidden rounded-[20px] md:min-h-[420px]">
            <Image
              src={ABOUT_IMAGE}
              alt="Cleaning professional wiping a window sill"
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover object-left-top"
            />
          </div>
        </div>
        <div className="mt-3 flex w-full justify-center pt-10">
          <Link
            href="/about"
            className="border-2 border-black/30 rounded-full px-5 py-2 hover:bg-black hover:text-white cursor-pointer transition-all font-semibold text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </section>
  );
}
