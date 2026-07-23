"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { setLenisInstance, getLenisInstance } from "@/lib/lenis-instance";

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    let rafId: number;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    setLenisInstance(lenis);

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      setLenisInstance(null);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    // Reset scroll position to top immediately on route changes
    const lenis = getLenisInstance();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
