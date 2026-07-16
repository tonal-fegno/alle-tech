import Image from "next/image";

const ABOUT_IMAGE =
  "https://framerusercontent.com/images/RPiugULV1heoeVCjDfb9MXnVk.png";

const stats = [
  { top: "Work Completed", number: "1.2k", bottom: "Homes & Offices Cleaned" },
  { top: "Ongoing Projects", number: "850", bottom: "Gardens Maintained" },
  { top: "Total Shipments", number: "3.5k", bottom: "Items Delivered" },
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-[#F7F8FA] px-4 md:px-8">
      <div className="container-main grid grid-cols-1 gap-10 lg:grid-cols-[1fr_390px] lg:gap-12">
        {/* Left: label, heading, stat cards */}
        <div className="flex flex-col">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-8">
            <span className="flex shrink-0 items-center gap-2 md:pt-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span className="text-body-16 font-semibold text-ink">
                About Us
              </span>
            </span>
            <h2 className="text-[24px] font-semibold leading-[1.35] tracking-[-0.01em] text-ink md:text-[28px] xl:text-[32px]">
              We&rsquo;re a team of dedicated cleaning professionals committed
              to delivering spotless results with every visit. Our mission is
              simple to make your space cleaner, healthier, and more comfortable
              without adding stress to your day.
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
                    {stat.number}
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
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
