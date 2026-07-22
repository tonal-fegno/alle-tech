"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

/**
 * Bouncy easing (slight overshoot) shared by the hover-swap animations.
 * Place these inside any element that carries the Tailwind `group` class.
 */
const BOUNCE = "ease-[cubic-bezier(0.33,1.3,0.5,1)]";

/**
 * Label that, on group hover, slides the current text down and out while an
 * identical copy drops in from the top. Both copies are stacked in one grid
 * cell so they stay perfectly aligned regardless of padding.
 */
export function SwapLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`relative grid overflow-hidden ${className}`}>
      <span
        className={`col-start-1 row-start-1 transition-transform duration-500 ${BOUNCE} group-hover:translate-y-full`}
      >
        {children}
      </span>
      <span
        aria-hidden
        className={`col-start-1 row-start-1 -translate-y-full transition-transform duration-500 ${BOUNCE} group-hover:translate-y-0`}
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
