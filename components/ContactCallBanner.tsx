import Image from "next/image";
import { CONTACT_INFO } from "@/lib/constants";

interface ContactCallBannerProps {
  heading?: string;
}

export default function ContactCallBanner({
  heading = "Call Us Now",
}: ContactCallBannerProps) {
  return (
    <section className="section-padding bg-white px-4 md:px-8">
      <div className="container-main">
        <div className="flex flex-col items-center justify-between gap-8 rounded-[20px] bg-bg-1 px-6 py-12 md:flex-row md:px-[60px] md:py-12">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <h2 className="heading-4">{heading}</h2>
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/[^+\d]/g, "")}`}
              className="text-body-20 font-medium text-primary transition-colors hover:text-dark-blue"
            >
              {CONTACT_INFO.phone}
            </a>
          </div>
          <div className="flex shrink-0 items-center justify-center">
            <Image
              src="https://framerusercontent.com/images/b4xacu7YK9Qi77BMad3SvSbD0DU.png"
              alt="Phone"
              width={80}
              height={80}
              className="h-20 w-20 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
