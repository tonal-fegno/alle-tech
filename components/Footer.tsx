import Link from "next/link";
import Image from "next/image";
import {
  CONTACT_INFO,
  INDUSTRIES,
  LOGO_URL,
  PRODUCTS,
  SOCIAL_LINKS,
  SOLUTIONS,
} from "@/lib/constants";

const solutionLinks = SOLUTIONS.map((solution) => ({
  label: solution.title,
  href: `/solutions/${solution.slug}`,
}));

const productLinks = PRODUCTS.map((product) => ({
  label: product.title,
  href: `/products/${product.slug}`,
}));

const industryLinks = INDUSTRIES.map((industry) => ({
  label: industry.title,
  href: `/industries#${industry.slug}`,
}));

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#00081d] px-4 pb-8 pt-16 md:px-8 md:pt-20">
      {/* Ambient premium blue glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px]"
        style={{
          background:
            "radial-gradient(ellipse 70% 90% at 50% -20%, rgba(44,143,206,0.15), transparent 70%)",
        }}
      />

      <div className="container-main relative">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1.1fr_0.9fr_1.1fr] xl:grid-cols-[1.5fr_1.2fr_1fr_1.2fr]">
          {/* Logo + Address + Contact */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center">
              <Image
                src={LOGO_URL}
                alt="Alle Tech logo"
                width={123}
                height={77}
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-[15px] leading-relaxed text-white/70 font-inter">
              Enterprise Technology Solutions for Digital Transformation, ERP & Business Growth.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-white/70 font-inter text-[14px]">Follow Us</span>
              <div className="flex items-center gap-2.5">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/alle-tech-fzco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-white/5 border border-white/10 text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                >
                  <svg className="w-4 h-4 fill-[#2c8fce]" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full h-[1px] bg-white/10 my-1" />

            <div className="flex flex-col gap-4">
              <h4 className="text-[14px] font-bold tracking-wider text-primary uppercase">
                Contact Us
              </h4>

              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 shrink-0 text-primary mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-white/70 text-[15px] leading-relaxed font-inter">
                    {CONTACT_INFO.address}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-white/70 hover:text-white transition-colors text-[15px] font-inter">
                    {CONTACT_INFO.email}
                  </a>
                </li>
                {/* <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href={`mailto:${CONTACT_INFO.salesEmail}`} className="text-white/70 hover:text-white transition-colors text-[15px] font-inter">
                    {CONTACT_INFO.salesEmail}
                  </a>
                </li> */}
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href={`tel:${CONTACT_INFO.phone.replace(/[^+\d]/g, "")}`} className="text-white/70 hover:text-white transition-colors text-[15px] font-inter">
                    {CONTACT_INFO.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Solutions */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-[16px] font-bold tracking-wider text-white uppercase font-inter">
                Solutions
              </h4>
              <div className="w-10 h-[3px] bg-[#ff7c00] mt-2 rounded-full" />
            </div>
            <ul className="flex flex-col gap-3">
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between text-body-16 text-white/70 transition-colors hover:text-white py-1 font-inter"
                  >
                    <span className="max-w-[85%]">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-[16px] font-bold tracking-wider text-white uppercase font-inter">
                Products
              </h4>
              <div className="w-10 h-[3px] bg-[#ff7c00] mt-2 rounded-full" />
            </div>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between text-body-16 text-white/70 transition-colors hover:text-white py-1 font-inter"
                  >
                    <span className="max-w-[85%]">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-[16px] font-bold tracking-wider text-white uppercase font-inter">
                Industries
              </h4>
              <div className="w-10 h-[3px] bg-[#ff7c00] mt-2 rounded-full" />
            </div>
            <ul className="flex flex-col gap-3">
              {industryLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between text-body-16 text-white/70 transition-colors hover:text-white py-1 font-inter"
                  >
                    <span className="max-w-[85%]">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-center">
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-white/50 font-inter">
              © {currentYear} ALLE TECH. All rights reserved.
            </p>
            <p className="text-[14px] text-white/60 font-inter">
              Design and Developed By <Link href={"https://www.fegno.com/"} target="_blank" className="text-[#2c8fce] font-medium">Fegno Technologies</Link>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-white/50 text-[14px] font-inter">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="px-2 text-white/20">|</span>
            <Link href="/terms-of-use" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <span className="px-2 text-white/20">|</span>
            <Link href="/cookies-policy" className="hover:text-white transition-colors">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
