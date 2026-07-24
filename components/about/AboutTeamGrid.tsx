"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import type { teamMembers } from "@/db/schema";

type TeamMember = typeof teamMembers.$inferSelect;

export default function AboutTeamGrid({ team }: { team: TeamMember[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getCardAnimation = (index: number) => {
    if (index === 0) {
      return isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[100px]";
    } else if (index === 1) {
      return isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[100px]";
    } else {
      return isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[100px]";
    }
  };

  if (team.length === 0) return null;

  return (
    <section ref={sectionRef} className="w-full py-8 lg:py-12 overflow-hidden mb-20">
      <div className="flex flex-col items-center">
        <div
          className={`flex flex-col items-center transition-all duration-[1200ms] ease-out will-change-transform ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[60px]"
            }`}
        >
          <Eyebrow className="mb-[13px]">Team</Eyebrow>

          <h2 className="font-inter font-semibold text-[36px] md:text-[48px] leading-[44px] md:leading-[58px] text-ink text-center mb-4">
            Meet Our Expert Team
          </h2>

          <p className="font-inter font-normal text-[18px] leading-[27px] text-body-gray text-center mb-16 max-w-[650px] mx-auto">
            A team of experienced technology professionals dedicated to delivering innovative, reliable, and scalable digital solutions tailored to your business needs.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 w-full max-w-[1300px]">
          {team.map((member, index) => (
            <div
              key={member.id}
              className={`flex flex-col items-center group cursor-pointer max-w-[420px] w-full flex-1 transition-all duration-[1200ms] ease-out will-change-transform ${getCardAnimation(
                index
              )}`}
            >
              <div className="relative w-full h-[350px] sm:h-[400px] md:h-[458px] rounded-[32px] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
              <h3 className="font-inter font-semibold text-[20px] md:text-[24px] leading-[29px] text-ink text-center mt-6 group-hover:text-primary transition-colors duration-300">
                {member.name}
              </h3>
              <p className="font-inter font-normal text-[15px] md:text-[16px] leading-[22px] text-body-gray text-center mt-1">
                {member.designation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
