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

const industryColumns = [
  industryLinks.slice(0, Math.ceil(industryLinks.length / 2)),
  industryLinks.slice(Math.ceil(industryLinks.length / 2)),
];

const socialIcons: Record<string, React.ReactNode> = {
  LinkedIn: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.8-2.2 4 0 4.8 2.7 4.8 6.1V24h-4v-8.5c0-2-.04-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.5V24H8V8z" />
    </svg>
  ),
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0B0714] px-4 pb-8 pt-16 md:px-8 md:pt-20">
      {/* Ambient purple glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px]"
        style={{
          background:
            "radial-gradient(ellipse 70% 90% at 50% -20%, rgba(76,29,149,0.75), transparent 70%)",
        }}
      />

      <div className="container-main relative">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1.6fr]">
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
            <ul className="flex flex-col gap-2 text-body-16 text-white/70">
              <li>
                <p
                  className="transition-colors hover:text-white"
                >
                  {CONTACT_INFO.address}
                </p>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="transition-colors hover:text-white"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.salesEmail}`}
                  className="transition-colors hover:text-white"
                >
                  {CONTACT_INFO.salesEmail}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/[^+\d]/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="flex flex-col gap-5">
            <p className="text-body-18 font-semibold text-white">Solutions</p>
            <ul className="flex flex-col gap-3">
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-body-16 text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-5">
            <p className="text-body-18 font-semibold text-white">Products</p>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-body-16 text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="flex flex-col gap-5">
            <p className="text-body-18 font-semibold text-white">Industries</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {industryColumns.map((column, columnIndex) => (
                <ul key={columnIndex} className="flex flex-col gap-3">
                  {column.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-body-16 text-white/70 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/[0.13] pt-8 md:flex-row">
          <p className="text-body-16 text-white/60">
            © {currentYear} All rights reserved Alle Tech. Designed and developed by{" "}
            <a
              href="https://www.fegno.com/?utm_source=client_website&utm_medium=agency_credit&utm_campaign=portfolio_referral&utm_id=AlleTech&utm_content=AlleTech"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Fegno Technologies
            </a>
          </p>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.13] text-white transition-colors duration-300 hover:bg-gradient-primary"
              >
                {socialIcons[social.label]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
