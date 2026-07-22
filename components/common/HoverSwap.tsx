"use client";

import React from "react";

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
