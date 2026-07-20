"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";

const LOGO_URL = "/assets/images/logo.png";
const IDLE_HIDE_DELAY = 4000;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const idleTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;

      if (idleTimeout.current) clearTimeout(idleTimeout.current);
      if (currentScrollY > 0) {
        idleTimeout.current = setTimeout(() => setVisible(false), IDLE_HIDE_DELAY);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (idleTimeout.current) clearTimeout(idleTimeout.current);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full px-4 pt-4 transition-transform duration-300 md:px-8 ${
        visible || mobileOpen ? "translate-y-0" : "-translate-y-[150%]"
      }`}
    >
      <div className="container-main">
        <nav className="flex items-center justify-between rounded-[20px] bg-white p-3 shadow-[0_4px_20px_rgba(0,11,34,0.06)] md:px-6">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center" onClick={() => setMobileOpen(false)}>
            <Image
              src={LOGO_URL}
              alt="Alle Tech logo"
              width={123}
              height={77}
              priority
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-body-18 font-semibold transition-colors hover:text-primary ${
                  pathname === link.href ? "text-primary" : "text-dark-blue"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button href="/contact">Schedule Now</Button>
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
            <Button
              href="/contact"
              className="mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Schedule Now
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
