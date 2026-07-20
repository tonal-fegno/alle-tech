"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import ArrowButton from "@/components/ui/ArrowButton";
import Button from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";
import { getLenisInstance } from "@/lib/lenis-instance";

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
    const lenis = getLenisInstance();
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    if (mobileOpen) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [mobileOpen]);

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
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-transform duration-300 ease-out lg:px-8 lg:pt-4 ${
          visible || mobileOpen ? "translate-y-0" : "-translate-y-[150%]"
        }`}
      >
        <nav
          className={`relative z-50 border-b border-border-gray/40 bg-white transition-[background-color,border-color,box-shadow] duration-300 lg:mx-auto lg:max-w-container lg:overflow-hidden lg:rounded-[20px] lg:border-0 lg:backdrop-blur-2xl lg:backdrop-saturate-150 ${
            scrolled
              ? "shadow-[0_4px_20px_rgba(0,11,34,0.06)] lg:bg-white/70 lg:shadow-[0_20px_50px_rgba(0,11,34,0.12)]"
              : "lg:bg-white/55"
          }`}
        >
          {/* Glass sheen — sits between the frosted fill and the content, desktop pill only */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 hidden bg-[linear-gradient(115deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0)_30%,rgba(255,255,255,0)_70%,rgba(255,255,255,0.4)_100%)] lg:block"
          />

          <div className="mx-auto flex max-w-container items-center justify-between px-5 py-4 lg:p-3 lg:px-4">
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
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl bg-gradient-primary lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span
                className={`h-0.5 w-5 rounded-full bg-white transition-transform duration-300 ${
                  mobileOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 rounded-full bg-white transition-opacity duration-200 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 rounded-full bg-white transition-transform duration-300 ${
                  mobileOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col gap-3 overflow-y-auto bg-white px-6 pb-8 pt-28 lg:hidden"
          >
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
                    className={`block px-3 py-2 text-body-20 font-medium transition-colors ${
                      active ? "text-primary" : "text-dark-blue hover:text-primary"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
            <Button
              href="/contact"
              variant="primary"
              className="mt-6 w-full"
              onClick={() => setMobileOpen(false)}
            >
              Schedule Now
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
