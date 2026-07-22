"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

// Text label that slides the current text up and out while the same text
// slides in from below on hover — used inside buttons/links for a subtle
// affordance without changing layout width.
export function SwapLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block overflow-hidden align-middle h-[1.2em] leading-[1.2em]">
      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"
      >
        {children}
      </span>
    </span>
  );
}

// Arrow icon that slides out to the top-right while a duplicate slides in
// from the bottom-left on hover — the icon counterpart to SwapLabel, meant
// to sit next to it inside the same `group`.
export function SwapArrow({ size = 16 }: { size?: number }) {
  return (
    <span
      className="relative inline-block shrink-0 overflow-hidden"
      style={{ width: size, height: size }}
    >
      <ArrowUpRight
        size={size}
        className="absolute inset-0 transition-transform duration-300 ease-out group-hover:translate-x-full group-hover:-translate-y-full"
      />
      <ArrowUpRight
        size={size}
        className="absolute inset-0 -translate-x-full translate-y-full transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
      />
    </span>
  );
}
