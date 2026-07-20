import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

const gallery = [
  "https://framerusercontent.com/images/MWlTLm98CBsxZQh3SwlGpbrO8rM.png",
  "https://framerusercontent.com/images/6SpPNtvaL0e5EOLPwsQeQZL9718.png",
  "https://framerusercontent.com/images/SmXLUT0oPyMO7Jp8URkswgPRDqo.png",
  "https://framerusercontent.com/images/T5ZwdF4fAv939hZRY9sN4JOX50.png",
  "https://framerusercontent.com/images/q3rhsdhC9qmlSasFdtHkMupIeRc.png",
  "https://framerusercontent.com/images/lLkIn1WWWNEcJCGl0CrkA0n4dM.png",
  "https://framerusercontent.com/images/JEhYVzqNZxqI6KiSoG4EyNzZt8.png",
  "https://framerusercontent.com/images/HW6KdkHbVX5BfF7tT601iXYWI2s.png",
];

export default function ProvenSection() {
  return (
    <section className="section-padding bg-white px-0">
      <div className="flex flex-col gap-12 md:gap-16">
        <div className="px-4 md:px-8">
          <div className="container-main">
            <SectionHeader
              badge="Proven Results"
              title="See the Difference We Make"
              subtitle="Watch your space transform with our professional touch"
            />
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <div className="flex w-max animate-marquee-slow gap-6 pr-6">
            {[...gallery, ...gallery].map((src, i) => (
              <div
                key={i}
                className="relative h-[260px] w-[360px] shrink-0 overflow-hidden rounded-section md:h-[320px] md:w-[440px]"
              >
                <Image
                  src={src}
                  alt="Cleaning result"
                  fill
                  sizes="440px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
