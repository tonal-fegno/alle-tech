import Image from "next/image";
import Button from "@/components/ui/Button";

const HERO_IMAGE = "/assets/images/hero-bg.png";

export default function IndustriesHero() {
  return (
    <section className="relative -mt-[80px] overflow-hidden lg:-mt-[99px]">
      <Image
        src={HERO_IMAGE}
        alt="Industry-focused business technology"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/75 via-dark-blue/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink/40 to-transparent" />

      <div className="container-main relative flex flex-col items-center gap-6 px-4 pb-[120px] pt-[200px] text-center md:px-8">
        <span className="inline-flex w-fit items-center rounded-full bg-white/13 px-5 py-2 text-body-16 font-semibold text-white shadow-[0_2px_12px_rgba(0,11,34,0.15)] backdrop-blur-md">
          Industries
        </span>
        <h1 className="heading-1 max-w-[800px] !text-white">
          Technology Built Around Your Industry
        </h1>
        <p className="max-w-[760px] text-body-18 text-white/90">
          No two businesses operate the same way. That&apos;s why ALLE TECH
          doesn&apos;t deliver generic technology implementations — we
          combine industry expertise with intelligent business technology to
          design solutions that reflect the way your business actually
          operates.
        </p>
        <p className="text-body-18 font-semibold text-white">
          Business First. Technology Always.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact">Book an Industry Consultation</Button>
          <Button href="#industries-we-serve" variant="white">
            Explore Your Industry
          </Button>
        </div>
      </div>
    </section>
  );
}
