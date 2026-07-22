"use client";

import React from "react";
import { Mail, Headphones, Clock, ChevronRight } from "lucide-react";

export default function ContactInfoList() {
  return (
    <div className="flex flex-col gap-3">
      {/* Sales Inquiries */}
      <div className="group relative flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-neutral-100/70 hover:border-blue-200 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all duration-300">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
          <Mail size={14} className="sm:w-4 sm:h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-[9px] sm:text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-0.5">
            Sales Inquiries
          </h4>
          <a
            href="mailto:yazan@alle-tech.com"
            className="text-xs sm:text-sm font-bold text-neutral-800 hover:text-blue-600 transition-colors block truncate"
          >
            yazan@alle-tech.com
          </a>
        </div>
        <div className="text-neutral-300 group-hover:text-blue-500 transition-colors self-center">
          <ChevronRight
            size={14}
            className="transform group-hover:translate-x-0.5 transition-transform"
          />
        </div>
      </div>

      {/* Customer Support */}
      <div className="group relative flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-neutral-100/70 hover:border-green-200 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all duration-300">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-green-500/10 text-green-600 flex items-center justify-center shrink-0">
          <Headphones size={14} className="sm:w-4 sm:h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-[9px] sm:text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-0.5">
            Customer Support
          </h4>
          <a
            href="mailto:info@alle-tech.com"
            className="text-xs sm:text-sm font-bold text-neutral-800 hover:text-blue-600 transition-colors block truncate"
          >
            info@alle-tech.com
          </a>
        </div>
        <div className="text-neutral-300 group-hover:text-green-500 transition-colors self-center">
          <ChevronRight
            size={14}
            className="transform group-hover:translate-x-0.5 transition-transform"
          />
        </div>
      </div>

      {/* Global Response */}
      <div className="group relative flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-neutral-100/70 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all duration-300">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-neutral-500/10 text-neutral-600 flex items-center justify-center shrink-0">
          <Clock size={14} className="sm:w-4 sm:h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-[9px] sm:text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-0.5">
            Global Response
          </h4>
          <p className="text-xs sm:text-sm font-bold text-neutral-800 block truncate">
            Typically within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
