import Image from "next/image";
import Badge from "@/components/badge";

const HERO_IMAGE = "/assets/images/hero-bg.png";

export default function SolutionsHero() {
  return (
    <section className="relative -mt-[80px] overflow-hidden lg:-mt-[99px]">
      <Image
        src={HERO_IMAGE}
        alt="Business technology solutions"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/75 via-dark-blue/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink/40 to-transparent" />

      <div className="container-main relative flex flex-col items-center gap-6 px-4 pb-[120px] pt-[200px] text-center md:px-8">
        <Badge text="Solutions" variant="light" />
        <h1 className="heading-1 max-w-[800px] !text-white">
          Business Technology Solutions
        </h1>
        <p className="max-w-[700px] text-body-18 text-white/90">
          Streamline operations, unlock insights, and drive growth with ERP,
          AI, and enterprise technology built around your business.
        </p>
      </div>
    </section>
  );
}
