"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ProductDetail } from "@/data/productDetails";
import {
  Smartphone,
  Database,
  Truck,
  MessageSquare,
  ShieldCheck,
  Layers,
  ChevronRight,
} from "lucide-react";

interface ProductCardProps {
  product: ProductDetail;
  index: number;
}

// Local metadata mappings to inject modern enterprise tags into the cards
const PRODUCT_METADATA: Record<
  string,
  {
    category: string;
    status: string;
    icon: React.ComponentType<any>;
    features: string[];
    integrations: string[];
    categoryColor: string;
    statusColor: string;
  }
> = {
  repprox: {
    category: "Field Operations",
    status: "v3.2 Live",
    icon: Smartphone,
    features: ["SFA Mobility", "Merchandising", "Offline Engine", "Route Planner"],
    integrations: ["SAP B1", "Odoo ERP"],
    categoryColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  transsync: {
    category: "ERP & Automation",
    status: "v2.5 Live",
    icon: Database,
    features: ["PO/SO Automate", "Master Data Sync", "Reconciliations", "SQL & HANA"],
    integrations: ["SAP B1"],
    categoryColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  "freight-pulse": {
    category: "Digital Logistics",
    status: "v2.0 Live",
    icon: Truck,
    features: ["Freight Forwarding", "Warehouse Mobility", "Customs Clearance", "Job Costing"],
    integrations: ["SAP B1", "Power BI"],
    categoryColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  engageflow: {
    category: "Customer Experience",
    status: "v4.1 Live",
    icon: MessageSquare,
    features: ["Transaction Alerts", "WhatsApp API", "SOA Distribution", "Crystal PDFs"],
    integrations: ["SAP B1"],
    categoryColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  invoiceflow: {
    category: "Compliance & Tax",
    status: "UAE Mandate Ready",
    icon: ShieldCheck,
    features: ["XML Validation", "VAT Calculation", "Digital Signature", "Peppol Exchange"],
    integrations: ["SAP B1", "Odoo ERP"],
    categoryColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    statusColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
};

const defaultMeta = {
  category: "Enterprise Suite",
  status: "Ready",
  icon: Layers,
  features: ["Enterprise Sync", "Modular Engine", "Real-Time APIs"],
  integrations: ["SAP B1", "Odoo ERP"],
  categoryColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

export default function ProductCard({ product, index }: ProductCardProps) {
  const meta = PRODUCT_METADATA[product.slug] || defaultMeta;
  const ProductIcon = meta.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: (index % 3) * 0.08,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      viewport={{ once: true, margin: "-40px" }}
      className="group relative h-full flex flex-col"
    >
      {/* Outer Glow Backdrop Shadow (Increases on Hover) */}
      <div className="pointer-events-none absolute -bottom-3 inset-x-6 h-10 bg-gradient-to-r from-cyan-400/30 via-primary/20 to-[#001545]/60 blur-xl rounded-full z-0 opacity-50 scale-x-95 group-hover:opacity-90 group-hover:-bottom-5 group-hover:h-12 group-hover:blur-2xl group-hover:scale-x-105 transition-all duration-500 ease-out" />

      {/* Main Card Link Container */}
      <Link
        href={`/products/${product.slug}`}
        className="flex flex-col flex-1 rounded-2xl sm:rounded-[28px] p-5 sm:p-8 relative z-10 overflow-hidden bg-[#000b22] border border-white/10 text-white shadow-[0_20px_50px_rgba(0,11,34,0.3)] transition-all duration-500 hover:border-sky-400/40 hover:shadow-[0_30px_70px_-15px_rgba(44,143,206,0.3)] cursor-pointer"
      >
        {/* Subtle animated ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 group-hover:scale-110 transition-transform duration-700 ease-out z-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 90% at 50% -10%, rgba(44,143,206,0.18), transparent 75%)",
          }}
        />

        {/* Tech Circuit Grid & Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-20 group-hover:opacity-35 transition-opacity duration-500">
          <svg
            className="absolute inset-0 w-full h-full text-sky-400/10"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id={`tech-grid-${index}`}
                width="36"
                height="36"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 36 0 L 0 0 0 36"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeDasharray="3 3"
                />
                <circle
                  cx="36"
                  cy="36"
                  r="1.2"
                  fill="currentColor"
                  opacity="0.4"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill={`url(#tech-grid-${index})`}
            />
          </svg>

          {/* Animated Circles */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-sky-400/10 group-hover:rotate-45 group-hover:scale-110 group-hover:border-sky-400/30 transition-all duration-1000 ease-out" />
          <div className="absolute -top-6 -right-6 w-36 h-36 rounded-full border border-dashed border-primary/20 group-hover:-rotate-45 group-hover:scale-105 transition-all duration-1000 ease-out" />
        </div>

        {/* Handcrafted Emblem / Circuit Icon / Logo */}
        <div className="relative z-10 mb-4 sm:mb-5 flex items-center min-h-[56px] sm:min-h-[80px]">
          {product.logo ? (
            <img
              src={product.logo}
              alt={`${product.title} logo`}
              className="h-12 sm:h-16 w-auto object-contain max-w-[180px] sm:max-w-[220px] drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white shadow-xl group-hover:scale-105 group-hover:border-sky-400/30 group-hover:bg-white/[0.08] transition-all duration-500">
              <div className="absolute inset-0.5 rounded-lg sm:rounded-[14px] bg-gradient-to-tr from-sky-500/10 via-primary/5 to-transparent blur-[1px]" />
              <ProductIcon className="relative w-6 h-6 sm:w-8 sm:h-8 text-sky-400 drop-shadow-[0_2px_10px_rgba(56,189,248,0.45)] group-hover:text-sky-300 transition-colors duration-300" />
            </div>
          )}
        </div>

        {/* Product Identity */}
        <div className="relative z-10 mb-3 sm:mb-4">
          <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-white group-hover:text-sky-200 transition-colors duration-300">
            {product.title}
          </h3>
          <p className="text-[11px] sm:text-sm font-semibold tracking-wide text-sky-300/80 mt-0.5 sm:mt-1">
            {product.tagline}
          </p>
        </div>

        {/* Product Concept Description */}
        <p className="relative z-10 text-xs sm:text-sm leading-relaxed text-slate-300/70 font-normal mb-5 line-clamp-3">
          {product.conceptDesc}
        </p>

        {/* Feature Highlights Chips */}
        <div className="relative z-10 flex flex-wrap gap-1.5 mb-6">
          {meta.features.map((feat) => (
            <span
              key={feat}
              className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-slate-300/95 hover:bg-white/10 hover:text-white transition-colors duration-200"
            >
              {feat}
            </span>
          ))}
        </div>

        {/* Footer Area: Learn Details */}
        <div className="relative z-10 mt-auto pt-4 sm:pt-5 border-t border-white/10 flex justify-end">
          <div className="group/btn inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-sky-400 hover:text-sky-300 transition-colors duration-300">
            <span>Learn Details</span>
            <ChevronRight
              size={15}
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
