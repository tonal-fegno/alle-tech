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

/**
 * Arrow that, on group hover, slides out to the right while an identical copy
 * enters from the left back to center.
 */
export function SwapArrow({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span className="grid overflow-hidden">
      <ArrowRight
        size={size}
        className={`col-start-1 row-start-1 transition-transform duration-500 ${BOUNCE} group-hover:translate-x-full ${className}`}
      />
      <ArrowRight
        size={size}
        aria-hidden
        className={`col-start-1 row-start-1 -translate-x-full transition-transform duration-500 ${BOUNCE} group-hover:translate-x-0 ${className}`}
      />
    </span>
  );
}
