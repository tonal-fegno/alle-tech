"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

const logos = [
  "/images/client/alwatani.png",
  // "/images/client/ayt.png",
  "/images/client/belltel.png",
  // "/images/client/brightcom.png",
  "/images/client/cfs.png",
  "/images/client/euro-poly-plast.png",
  "/images/client/exploration.png",
  "/images/client/ft.png",
  "/images/client/middle-ease-group.png",
  "/images/client/najm.png",
  "/images/client/natco.png",
  "/images/client/orbit-logistics.png",
  "/images/client/sec.png",
  "/images/client/united-colors.png",
  // "/images/client/vapey.png",
];

const NORMAL_SPEED = 2.2; // px per frame
const HOVER_SPEED = 0.8; // px per frame

export default function BrandTicker() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;
    let currentSpeed = NORMAL_SPEED;
    let frameId: number;

    const animate = () => {
      const targetSpeed = isHoveredRef.current ? HOVER_SPEED : NORMAL_SPEED;
      currentSpeed += (targetSpeed - currentSpeed) * 0.05;
      position -= currentSpeed;

      const halfWidth = track.scrollWidth / 2;
      if (halfWidth > 0 && Math.abs(position) >= halfWidth) {
        position += halfWidth;
      }

      track.style.transform = `translateX(${position}px)`;
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="bg-bg-1 py-16">
      <div className="flex flex-col items-center gap-8">
        <AnimatedHeading
          as="p"
          className="px-4 text-center text-xl font-semibold text-body-gray"
        >
          Trusted 100+ corporate partners!
        </AnimatedHeading>
        <div
          className="w-full overflow-hidden"
          onMouseEnter={() => {
            isHoveredRef.current = true;
          }}
          onMouseLeave={() => {
            isHoveredRef.current = false;
          }}
        >
          <div ref={trackRef} className="flex w-max items-center gap-5 pr-5">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="group flex h-[124px] w-[220px] shrink-0 items-center justify-center rounded-2xl bg-white"
              >
                <Image
                  src={logo}
                  alt="Client logo"
                  width={102}
                  height={102}
                  className="h-[102px] w-[102px] rounded-xl object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
