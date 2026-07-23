"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, WifiOff, Layers, Cpu, Check } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";

export default function ProductsWhyChoose() {
  const pillars = [
    {
      num: "01",
      icon: Database,
      title: "Direct SAP & Odoo ERP Connector",
      desc: "Built directly on native ERP schemas (HANA, SQL, OData). Zero third-party middleware latency or data duplication risks.",
      highlights: ["SAP Business One SQL & HANA", "Odoo Enterprise API", "Custom ERP Connectors"],
    },
    {
      num: "02",
      icon: WifiOff,
      title: "Uninterrupted Offline Operations",
      desc: "Empower field teams and warehouse drivers to work continuously without internet coverage. Auto-syncs seamlessly when online.",
      highlights: ["Encrypted Offline Storage", "Conflict-Free Sync Engine", "Zero Downtime"],
    },
    {
      num: "03",
      icon: Layers,
      title: "Flexible Micro-Modules",
      desc: "Activate only the modules your business needs today. Scale seamlessly and add new capabilities as your organization grows.",
      highlights: ["Pay for What You Use", "Instant Feature Toggles", "Multi-Entity Management"],
    },
    {
      num: "04",
      icon: Cpu,
      title: "AI-Driven Insights & Alerts Engine",
      desc: "Harness embedded AI algorithms for smart sales recommendations, route optimization, risk alerts, and executive summary dashboards.",
      highlights: ["Automated WhatsApp & Email Alerts", "Predictive Delay Flags", "Smart Visit Priorities"],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-neutral-50/70 border-y border-neutral-200/60 relative">
      <div className="container-main">
        
        {/* Centered Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="mb-3">
            <Eyebrow variant="light">ENTERPRISE STANDARDS</Eyebrow>
          </div>
          <h2 className="heading-2 text-ink mb-4">
            Why Industry Leaders Choose ALLE TECH Products
          </h2>
          <p className="text-body-18 text-body-gray leading-relaxed font-normal">
            Every product in our suite is architected specifically for enterprise complexity, zero-downtime reliability, and tight integration with core financial systems.
          </p>
        </div>

        {/* Full-Width Centered List */}
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                {/* Left Side: Icon & Title & Description */}
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20 mt-0.5">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold text-primary uppercase tracking-widest">{pillar.num}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-ink tracking-tight mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-body-gray font-normal leading-relaxed max-w-xl">
                      {pillar.desc}
                    </p>
                  </div>
                </div>

                {/* Right Side: Feature Highlight Badges */}
                <div className="flex flex-wrap md:flex-col gap-2 shrink-0 md:pl-6 md:border-l md:border-neutral-100">
                  {pillar.highlights.map((hl, hIdx) => (
                    <span
                      key={hIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200/60 text-xs font-semibold text-neutral-600"
                    >
                      <Check size={11} className="text-primary" />
                      <span>{hl}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
