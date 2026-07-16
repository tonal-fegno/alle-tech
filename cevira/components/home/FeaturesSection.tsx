import Image from "next/image";
import Link from "next/link";

const ECO_ICONS = [
  "https://framerusercontent.com/images/uI5IxtbxoXGcfJCaXFEuZHDCTE.png",
  "https://framerusercontent.com/images/WuLSFKD8Aj3fmYelKlFPDms7Qo.png",
  "https://framerusercontent.com/images/IqmnpO3EK4hlwcjBBmDPKlpRoO0.png",
];

const SUPPORT_ICON =
  "https://framerusercontent.com/images/rMyXhvdtTblyDFd24uiC3cpoJ9g.svg";

const SPLASH_CARD_BG =
  "https://framerusercontent.com/images/6SpPNtvaL0e5EOLPwsQeQZL9718.png";

export default function FeaturesSection() {
  return (
    <section className="section-padding bg-white px-4 md:px-8">
      <div className="container-main flex flex-col gap-12 md:gap-14">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-body-16 font-semibold text-ink">
              Why Choose Us
            </span>
          </span>
          <h2 className="heading-2">
            Our focus is on creating a <br className="hidden sm:block" />
            clean &amp; healthy environment
          </h2>
          <p className="max-w-[600px] text-body-18 text-body-gray">
            We deliver reliable, high-quality cleaning services designed to
            create fresh, comfortable environments for homes and businesses.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:grid-rows-[auto_1fr_auto]">
          {/* Eco-Safe */}
          <div className="flex items-center justify-between gap-4 rounded-2xl bg-[#F7F8FA] p-6 lg:col-start-1 lg:row-start-1">
            <div>
              <h3 className="heading-6 !text-dark-blue">Eco-Safe</h3>
              <p className="mt-1 text-body-16 text-body-gray">
                For home and the planet
              </p>
            </div>
            <div className="flex shrink-0 -space-x-1.5">
              {ECO_ICONS.map((icon) => (
                <Image
                  key={icon}
                  src={icon}
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-11"
                />
              ))}
            </div>
          </div>

          {/* Expert Cleaners / 50+ */}
          <div className="flex min-h-[220px] flex-col justify-between rounded-2xl bg-[#F7F8FA] p-6 lg:col-start-1 lg:row-start-2">
            <p className="text-body-16 text-body-gray">Expert Cleaners</p>
            <p className="text-[40px] font-semibold leading-none tracking-[-0.01em] text-ink md:text-[48px]">
              50+
            </p>
            <p className="text-body-16 text-body-gray">
              Cleaning that fits your schedule
            </p>
          </div>

          {/* 1.2k Clean Spaces */}
          <div className="flex min-h-[300px] flex-col justify-between rounded-2xl bg-[#F7F8FA] p-6 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <p className="text-[40px] font-semibold leading-none tracking-[-0.01em] text-ink md:text-[48px]">
              1.2k
            </p>
            <div>
              <h3 className="heading-6 !text-dark-blue">
                Clean Spaces Delivered
              </h3>
              <p className="mt-2 text-body-16 text-body-gray">
                Keep your home fresh, organized, and spotless with our regular
                and deep cleaning services.
              </p>
            </div>
          </div>

          {/* Support */}
          <div className="flex items-center gap-5 rounded-2xl bg-[#F7F8FA] p-6 lg:col-span-2 lg:col-start-1 lg:row-start-3">
            <Image
              src={SUPPORT_ICON}
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 shrink-0"
            />
            <div>
              <h3 className="heading-6 !text-dark-blue">
                Fast &amp; Reliable Customer Support
              </h3>
              <p className="mt-1 text-body-16 text-body-gray">
                Our team responds quickly to your inquiries, ensuring you get
                the help you need without delay.
              </p>
            </div>
          </div>

          {/* Blue CTA card */}
          <div className="relative min-h-[420px] overflow-hidden rounded-2xl lg:col-start-3 lg:row-span-3 lg:row-start-1 lg:min-h-0">
            <Image
              src={SPLASH_CARD_BG}
              alt=""
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
            />
            <div className="relative flex flex-col items-start p-7">
              <h3 className="text-[24px] font-semibold leading-[1.25] tracking-[-0.01em] text-white md:text-[28px]">
                Stay consistent <br />
                with cleaning routine
              </h3>
              <p className="mt-3 text-body-16 font-medium text-white">
                A better home starts with better cleaning.
              </p>
              <Link
                href="/contact"
                className="group mt-6 inline-flex items-center gap-3 rounded-xl bg-white py-2 pl-5 pr-2 text-[15px] font-semibold text-ink transition-colors duration-300 hover:bg-bg-2"
              >
                Schedule Now
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary transition-transform duration-300 group-hover:translate-x-0.5">
                  <svg width="14" height="11" viewBox="0 0 18 14" fill="none">
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
          </div>
        </div>
      </div>
    </section>
  );
}
