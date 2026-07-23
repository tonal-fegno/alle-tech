import Image from "next/image";
import Badge from "../badge";
import UIButton from "@/components/ui-button";
import ArrowButton from "../ui/ArrowButton";
import industryhero from '@/public/images/inductries/hero.png';

export default function IndustriesHero() {
  return (
    <section className="relative -mt-[80px] lg:-mt-[99px] min-h-[64vh] pt-[180px] lg:pt-[200px] pb-24 px-4 sm:px-6 bg-brand-navy text-white flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src={industryhero.src}
          alt="Industry-focused business technology network background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
      </div>

      {/* Tint overlay (dark navy tint) */}
      <div className="absolute inset-0 bg-brand-navy/10" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
        <Badge text="Industries" variant="light" />

        <h1 className="heading-1 !text-white">
          Technology Built Around Your Industry
        </h1>

        <p className="max-w-[760px] text-body-18 text-white/70">
          We combine industry expertise with intelligent business technology to
          design solutions that reflect the way your business actually operates.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <UIButton href="/contact" className="py-4 pr-3">
            Book Consultation
          </UIButton>
          <ArrowButton href="/contact">
            Schedule Now
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}
