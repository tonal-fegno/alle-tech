import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE =
  "https://framerusercontent.com/images/T5ZwdF4fAv939hZRY9sN4JOX50.png";

const REVIEW_AVATARS = [
  "https://framerusercontent.com/images/ReG9tf6xQAp2D3CqssK3eEP0Xk.jpg",
  "https://framerusercontent.com/images/wdpdbLQu1F6oAUX7W0gwIxxako.png",
  "https://framerusercontent.com/images/vpbgrsXqJUpUxCOtbvNNuf8bP0.png",
];

function StarSmall() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="#ffffff">
      <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative -mt-[80px] overflow-hidden lg:-mt-[99px]">
      {/* Background image */}
      <Image
        src={HERO_IMAGE}
        alt="Professional cleaner keeping a modern office spotless"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Legibility overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/75 via-dark-blue/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink/40 to-transparent" />

      <div className="container-main relative flex min-h-[640px] flex-col pb-8 pt-[120px] md:min-h-[100svh] md:pb-10 md:pt-[150px] lg:pt-[170px]">
        {/* Badge */}
        <span className="inline-flex w-fit items-center gap-2.5 rounded-full bg-white/75 py-2.5 pl-3 pr-5 shadow-[0_2px_12px_rgba(0,11,34,0.15)] backdrop-blur-md">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-dark-blue">
            <svg width="11" height="9" viewBox="0 0 12 10" fill="none">
              <path
                d="M1 5.5L4.2 8.5L11 1.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-body-16 font-semibold text-ink">
            Trusted Cleaning Solutions
          </span>
        </span>

        {/* Heading */}
        <h1 className="mt-6 max-w-[860px] text-[42px] font-semibold leading-[1.15] tracking-[-0.01em] text-white md:text-[56px] lg:text-[68px]">
          Cleaning Made <br className="hidden sm:block" />
          Simple, Fast &amp; Reliable
        </h1>

        {/* Bottom row: copy + CTA on the left, stat card on the right */}
        <div className="mt-auto flex flex-col justify-between gap-10 pt-12 lg:flex-row lg:items-end">
          <div className="max-w-[480px]">
            <p className="text-body-18 text-white/95">
              Book expert cleaners in minutes. Transparent pricing, flexible
              scheduling, and guaranteed results.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-4 rounded-[14px] bg-white py-2.5 pl-8 pr-2.5 text-body-18 font-semibold text-ink transition-colors duration-300 hover:bg-bg-2"
            >
              Schedule Now
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary transition-transform duration-300 group-hover:translate-x-0.5">
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                  <path
                    d="M1 7h15m0 0L10.5 1.5M16 7l-5.5 5.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* Stat card */}
          <div className="w-full max-w-[380px] rounded-[20px] bg-primary p-7 shadow-[0_20px_50px_rgba(0,11,34,0.35)]">
            <div className="flex items-center gap-5">
              <span className="text-[52px] font-semibold leading-none tracking-[-0.01em] text-white md:text-[58px]">
                98.99%
              </span>
              <span className="whitespace-nowrap text-body-16 font-medium text-white">
                Trusted Rate
              </span>
            </div>
            <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/20 pt-5">
              <div className="flex items-center -space-x-3.5">
                {REVIEW_AVATARS.map((src) => (
                  <Image
                    key={src}
                    src={src}
                    alt="Happy customer"
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-white"
                  />
                ))}
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 text-white ring-2 ring-white">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 1v12M1 7h12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarSmall key={i} />
                  ))}
                </div>
                <p className="mt-1.5 text-body-16 font-medium text-white">
                  50K+ Verified Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
