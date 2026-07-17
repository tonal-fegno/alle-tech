import Image from "next/image";
import ArrowButton from "@/components/ui/ArrowButton";

const STRATEGY_ICONS = [
  // Target — strategy & goal-setting
  <svg key="target" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="1.5" fill="white" />
  </svg>,
  // Briefcase — business consulting
  <svg key="briefcase" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect
      x="3"
      y="7.5"
      width="18"
      height="12"
      rx="2"
      stroke="white"
      strokeWidth="1.8"
    />
    <path
      d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5"
      stroke="white"
      strokeWidth="1.8"
    />
    <path d="M3 12.5h18" stroke="white" strokeWidth="1.8" />
  </svg>,
  // Trending up — measurable business value
  <svg key="trending" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M3 17l6-6 4 4 8-8"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 7h6v6"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
];

const SPLASH_CARD_BG = "/assets/images/why-choose-us.png";

export default function FeaturesSection() {
  return (
    <section className="section-padding bg-white px-4 md:px-8">
      <div className="container-main flex flex-col gap-12 md:gap-14">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-body-16 font-semibold text-ink uppercase">
              Why Choose Us
            </span>
          </span>
          <h2 className="heading-2 max-w-[1000px]">
            Business-First Technology. Measurable Business Value.
          </h2>
          <p className="max-w-[800px] text-body-18 text-body-gray">
            We combine strategic consulting, industry expertise, and intelligent
            technology to help organizations simplify operations, improve
            decision-making, and achieve sustainable growth. Every solution is
            designed around your business objectives, not just technology.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:grid-rows-[auto_1fr_auto]">
          {/* Eco-Safe */}
          <div className="flex items-center justify-between gap-4 rounded-2xl bg-[#F7F8FA] p-6 lg:col-start-1 lg:row-start-1">
            <div>
              <h3 className="heading-6 !text-dark-blue">
                Business-First Consulting
              </h3>
              <p className="mt-1 text-body-16 text-body-gray">
                Strategy Before Software
              </p>
            </div>
            <div className="flex shrink-0 -space-x-1.5">
              {STRATEGY_ICONS.map((icon, i) => (
                <span
                  key={i}
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-primary to-dark-blue"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          {/* Expert Cleaners / 50+ */}
          <div className="flex min-h-[220px] flex-col justify-between rounded-2xl bg-[#F7F8FA] p-6 lg:col-start-1 lg:row-start-2">
            <p className="text-body-16 text-body-gray">Industry Expertise</p>
            <p className="text-[40px] font-semibold leading-none tracking-[-0.01em] text-ink md:text-[48px]">
              12+
            </p>
            <p className="text-body-16 text-body-gray">
            Industry Expertise. Business-Focused Solutions.
            </p>
          </div>

          {/* 1.2k Clean Spaces */}
          <div className="flex min-h-[300px] flex-col justify-between rounded-2xl bg-[#F7F8FA] p-6 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <p className="text-[40px] font-semibold leading-none tracking-[-0.01em] text-ink md:text-[48px]">
              20+
            </p>
            <div>
              <h3 className="heading-6 !text-dark-blue">
                Business Solutions & Products
              </h3>
              <p className="mt-2 text-body-16 text-body-gray">
                From ERP and AI to Business Intelligence, Automation, and
                Enterprise Integrations, we build connected technology
                ecosystems that drive measurable results.
              </p>
            </div>
          </div>

          {/* Support */}
          <div className="flex items-center gap-5 rounded-2xl bg-[#F7F8FA] p-6 lg:col-span-2 lg:col-start-1 lg:row-start-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-dark-blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.8" />
                <path
                  d="M3 12h18M12 3c2.5 2.5 3.75 5.5 3.75 9S14.5 18.5 12 21c-2.5-2.5-3.75-5.5-3.75-9S9.5 5.5 12 3Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <h3 className="heading-6 !text-dark-blue">
                Industries Supported
              </h3>
              <p className="mt-1 text-body-16 text-body-gray">
                Our consultants understand the operational realities of
                different industries, enabling us to deliver practical,
                business-focused solutions.
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
              Long-Term Partnership
              </h3>
              <p className="mt-3 text-body-16 font-medium text-white">
              We support your growth beyond implementation.
              </p>
              <ArrowButton href="/contact" size="sm" className="mt-6">
                Schedule Now
              </ArrowButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
