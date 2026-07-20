"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import ArrowButton from "@/components/ui/ArrowButton";
import { NAV_LINKS } from "@/lib/constants";

const LOGO_URL = "/assets/images/logo.png";
const IDLE_HIDE_DELAY = 4000;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const idleTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    setScrolled(window.scrollY > 8);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 8);

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
      className={`sticky top-0 z-50 w-full px-4 pt-4 transition-transform duration-300 ease-out md:px-8 ${
        visible || mobileOpen ? "translate-y-0" : "-translate-y-[150%]"
      }`}
    >
      <div className="container-main">
        <nav
          className={`relative flex items-center justify-between overflow-hidden rounded-[20px]  p-3 backdrop-blur-2xl backdrop-saturate-150 transition-[background-color,box-shadow] duration-300 md:px-4 ${
            scrolled
              ? "bg-white/55"
              : "bg-white/55"
          }`}
        >
          {/* Glass sheen — sits between the frosted fill and the content */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0)_30%,rgba(255,255,255,0)_70%,rgba(255,255,255,0.4)_100%)]"
          />

          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center transition-opacity hover:opacity-80"
            onClick={() => setMobileOpen(false)}
          >
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
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-base font-normal transition-colors duration-200 ${
                    active ? "text-primary" : "text-dark-blue hover:text-primary"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="navActivePill"
                      className="absolute inset-0 rounded-full bg-bg-2"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <ArrowButton href="/contact" variant="solid" size="sm">
              Schedule Now
            </ArrowButton>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span
              className={`h-0.5 w-5 rounded-full bg-ink transition-transform duration-300 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-ink transition-opacity duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-ink transition-transform duration-300 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="relative mt-2 flex origin-top flex-col gap-1 overflow-hidden rounded-[20px] border border-white/60 bg-white/60 p-5 shadow-[0_20px_50px_rgba(0,11,34,0.16),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-2xl backdrop-saturate-150 lg:hidden"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_35%)]"
              />
              {NAV_LINKS.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className={`block rounded-lg px-3 py-3 text-body-18 font-semibold transition-colors ${
                        active
                          ? "bg-bg-2 text-primary"
                          : "text-dark-blue hover:bg-bg-2 hover:text-primary"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <ArrowButton
                href="/contact"
                variant="solid"
                className="mt-3 w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Schedule Now
              </ArrowButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
