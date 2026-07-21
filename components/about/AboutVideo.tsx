"use client";

import React from "react";

export default function AboutVideo() {
  return (
    <section className="w-full max-w-[1380px] mx-auto">
      <div className="relative w-full overflow-hidden rounded-[24px] md:rounded-[32px] transition-shadow duration-500 group shadow-md hover:shadow-xl">
        <video
          src="/test-vdo.mp4"
          autoPlay
          loop
          muted
          playsInline
          controls
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
        />
        {/* Fine premium border overlay */}
        <div className="absolute inset-0 rounded-[24px] md:rounded-[32px] border border-border-gray/10 pointer-events-none" />
      </div>
    </section>
  );
}
