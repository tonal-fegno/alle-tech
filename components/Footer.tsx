import Link from "next/link";
import Image from "next/image";
import { CONTACT_INFO, LOGO_URL, SOCIAL_LINKS } from "@/lib/constants";

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Pricing", href: "/pricing" },
];

const pageLinks = [
  { label: "Services", href: "/services" },
  { label: "Service Details", href: "/services/home-cleaning" },
  { label: "Blogs", href: "/blogs" },
  {
    label: "Blog Details",
    href: "/blogs/5-simple-tips-to-keep-your-home-spotless-every-day",
  },
  { label: "404", href: "/404-page" },
];

const socialIcons: Record<string, React.ReactNode> = {
  Facebook: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.6V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.3H7.6V13h2.7v8h3.2z" />
    </svg>
  ),
  Instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Twitter: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 2.1h3.4l-7.4 8.5 8.7 11.5h-6.8l-5.3-7-6.1 7H1.9l7.9-9.1L1.5 2.1h7l4.8 6.4 5.6-6.4zm-1.2 18h1.9L7.4 4H5.3l12.4 16.1z" />
    </svg>
  ),
  LinkedIn: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.8-2.2 4 0 4.8 2.7 4.8 6.1V24h-4v-8.5c0-2-.04-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.5V24H8V8z" />
    </svg>
  ),
};

export default function Footer() {
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
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Logo + Working hours */}
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
            <div className="flex flex-col gap-2">
              <p className="text-body-18 font-semibold text-white">Working Hours</p>
              <p className="max-w-[300px] text-body-16 text-white/70">
                {CONTACT_INFO.workingHours}
              </p>
            </div>
          </div>

          {/* Menus */}
          <div className="flex flex-col gap-5">
            <p className="text-body-18 font-semibold text-white">Menus</p>
            <ul className="flex flex-col gap-3">
              {menuLinks.map((link) => (
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

          {/* Pages */}
          <div className="flex flex-col gap-5">
            <p className="text-body-18 font-semibold text-white">Menus</p>
            <ul className="flex flex-col gap-3">
              {pageLinks.map((link) => (
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

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <p className="text-body-18 font-semibold text-white">Contact</p>
            <ul className="flex flex-col gap-3 text-body-16 text-white/70">
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
                  href={`tel:${CONTACT_INFO.phone.replace(/[^+\d]/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>{CONTACT_INFO.address1}</li>
              <li>{CONTACT_INFO.address2}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/[0.13] pt-8 md:flex-row">
          <p className="text-body-16 text-white/60">
            © Designed by RedDevs Powered by Framer
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
