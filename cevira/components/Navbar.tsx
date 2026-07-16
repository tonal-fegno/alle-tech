"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, LOGO_URL } from "@/lib/constants";
import { services } from "@/lib/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4 md:px-8">
      <div className="container-main">
        <nav className="flex items-center justify-between rounded-[20px] bg-white p-3 shadow-[0_4px_20px_rgba(0,11,34,0.06)] md:px-6">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2.5" onClick={() => setMobileOpen(false)}>
            <Image
              src={LOGO_URL}
              alt="Cevira logo"
              width={40}
              height={40}
              priority
              className="h-10 w-10 rounded-full bg-primary"
            />
            <span className="text-[22px] font-bold tracking-[-0.01em] text-ink">
              Cevira
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) =>
              link.label === "Services" ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1.5 text-body-18 font-semibold transition-colors hover:text-primary ${
                      pathname.startsWith("/services") ? "text-primary" : "text-dark-blue"
                    }`}
                  >
                    {link.label}
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </Link>
                  {dropdownOpen && (
                    <div className="absolute left-1/2 top-full w-[240px] -translate-x-1/2 pt-3">
                      <div className="flex flex-col gap-1 rounded-2xl border border-border-gray/40 bg-white p-3 shadow-[0_10px_30px_rgba(0,11,34,0.1)]">
                        {services.slice(0, 6).map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="rounded-lg px-4 py-2.5 text-body-16 font-semibold text-dark-blue transition-colors hover:bg-bg-2 hover:text-primary"
                            onClick={() => setDropdownOpen(false)}
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-body-18 font-semibold transition-colors hover:text-primary ${
                    pathname === link.href ? "text-primary" : "text-dark-blue"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-[30px] py-4 text-body-18 font-semibold text-white transition-colors duration-300 hover:bg-dark-blue"
            >
              Schedule Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span
              className={`h-0.5 w-5 rounded-full bg-ink transition-transform duration-300 ${
                mobileOpen ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-ink transition-transform duration-300 ${
                mobileOpen ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="mt-2 flex flex-col gap-1 rounded-[20px] bg-white p-5 shadow-[0_10px_30px_rgba(0,11,34,0.1)] lg:hidden">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-body-18 font-semibold text-dark-blue hover:bg-bg-2 hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-primary px-[30px] py-4 text-body-18 font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Schedule Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
