export type CaseBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "list"; items: string[] };

export interface CaseStudyResult {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  slug?: string;
  title: string;
  description: string;
  shortDescription?: string;
  category: string;
  categories?: string[];
  image: string;
  imageVisible?: boolean;
  client: string;
  industry: string;
  date: string;
  readTime: string;
  size?: "large" | "medium" | "small";
  featured?: boolean;
  results: CaseStudyResult[];
  body: CaseBlock[];
}

export const CASE_STUDY_CATEGORIES = [
  "All",
  "Manufacturing",
  "Retail",
  "Warehouse",
  "Cloud",
  "Finance",
  "Healthcare",
] as const;

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-manufacturing-iot",
    slug: "cs-manufacturing-iot",
    title: "Nordwind Industrial Cut Unplanned Downtime by 38%",
    description:
      "A three-plant industrial manufacturer connected its machinery to SAP Business One and real-time IoT telemetry, replacing reactive repairs with predictive maintenance — and reclaiming thousands of lost production hours a year.",
    shortDescription:
      "A three-plant industrial manufacturer connected its machinery to SAP Business One and real-time IoT telemetry, replacing reactive repairs with predictive maintenance — and reclaiming thousands of lost production hours a year.",
    category: "Manufacturing",
    categories: ["Manufacturing", "IoT", "SAP Business One"],
    image: "/images/case-studies/manufacturing-ai.png",
    imageVisible: true,
    client: "Nordwind Industrial",
    industry: "Industrial Manufacturing",
    date: "July 10, 2026",
    readTime: "7 min read",
    size: "large",
    featured: true,
    results: [
      { value: "38%", label: "Less unplanned downtime" },
      { value: "+22%", label: "Overall equipment effectiveness" },
      { value: "9 mo", label: "Payback period" },
    ],
    body: [
      { type: "h2", text: "The challenge" },
      {
        type: "p",
        text: "Nordwind ran three plants on a patchwork of spreadsheets and standalone machine controllers. Maintenance was almost entirely reactive: a line went down, technicians scrambled, and orders slipped. With no shared view of machine health, leadership couldn't tell whether a €2M line was about to fail or run for another year.",
      },
      { type: "h2", text: "What we did" },
      {
        type: "p",
        text: "We connected the factory floor to a single SAP Business One core and layered IoT sensors onto the critical assets, streaming vibration, temperature and cycle data in real time. Machine-learning models flagged anomalies days before failure, and work orders were generated automatically against live inventory.",
      },
      {
        type: "list",
        items: [
          "Retrofitted 60+ machines with condition-monitoring sensors",
          "Unified maintenance, inventory and production on one ERP",
          "Predictive alerts routed straight to technicians' tablets",
          "Rolled out plant-by-plant to de-risk each go-live",
        ],
      },
      {
        type: "quote",
        text: "For the first time we can see a failure coming and fix it on our schedule, not the machine's. That changed how the whole plant runs.",
        attribution: "VP of Operations, Nordwind Industrial",
      },
      { type: "h2", text: "The results" },
      {
        type: "p",
        text: "Within nine months Nordwind cut unplanned downtime by 38% and lifted overall equipment effectiveness by 22 points. The project paid for itself in under a year, and the model is now being rolled out to two additional facilities.",
      },
    ],
  },
  {
    id: "cs-retail-omnichannel",
    slug: "cs-retail-omnichannel",
    title: "Marloe & Finch Unified 120 Stores and Grew Margins 24%",
    description:
      "A fast-growing specialty retailer replaced fragmented point-of-sale and inventory systems with one real-time platform — giving every store live stock visibility and giving head office the numbers to act on.",
    shortDescription:
      "A fast-growing specialty retailer replaced fragmented point-of-sale and inventory systems with one real-time platform — giving every store live stock visibility and giving head office the numbers to act on.",
    category: "Retail",
    categories: ["Retail", "Omnichannel", "ERP"],
    image: "/images/common/retail-ops.png",
    imageVisible: true,
    client: "Marloe & Finch",
    industry: "Specialty Retail",
    date: "July 2, 2026",
    readTime: "6 min read",
    size: "medium",
    results: [
      { value: "+24%", label: "Gross margin uplift" },
      { value: "120", label: "Stores on one platform" },
      { value: "-60%", label: "Out-of-stock events" },
    ],
    body: [
      { type: "h2", text: "The challenge" },
      {
        type: "p",
        text: "After acquiring its way from 30 to 120 stores, Marloe & Finch was running four different POS systems and reconciling inventory by email. Buyers over-ordered to avoid stockouts, cash was trapped in the wrong locations, and no one trusted the numbers.",
      },
      { type: "h2", text: "What we did" },
      {
        type: "p",
        text: "We consolidated every channel onto a single ERP with real-time inventory across stores, warehouse and e-commerce. Automated replenishment used live sell-through to move stock to where demand actually was, and head office finally got one source of truth.",
      },
      {
        type: "list",
        items: [
          "Migrated 120 stores off four legacy POS systems",
          "Real-time, cross-channel inventory and pricing",
          "Demand-driven automatic replenishment",
          "Executive dashboards refreshed to the minute",
        ],
      },
      {
        type: "quote",
        text: "We stopped guessing. Every buyer now works from the same live picture, and it shows in the margin.",
        attribution: "Chief Merchandising Officer, Marloe & Finch",
      },
      { type: "h2", text: "The results" },
      {
        type: "p",
        text: "Unified operations drove a 24% lift in gross margin and cut out-of-stock events by 60%, while freeing millions in working capital previously tied up in mis-placed inventory.",
      },
    ],
  },
  {
    id: "cs-warehouse-wms",
    slug: "cs-warehouse-wms",
    title: "Vantage Logistics Tripled Peak Throughput with Predictive WMS",
    description:
      "Facing a make-or-break peak season, a third-party logistics operator layered AI-driven slotting and forecasting onto its warehouse management system — and moved three times the volume without expanding the building.",
    shortDescription:
      "Facing a make-or-break peak season, a third-party logistics operator layered AI-driven slotting and forecasting onto its warehouse management system — and moved three times the volume without expanding the building.",
    category: "Warehouse",
    categories: ["Warehouse", "WMS", "Logistics"],
    image: "/images/case-studies/warehouse-tech.png",
    imageVisible: true,
    client: "Vantage Logistics",
    industry: "Third-Party Logistics",
    date: "June 24, 2026",
    readTime: "5 min read",
    size: "medium",
    results: [
      { value: "3x", label: "Peak-season throughput" },
      { value: "-45%", label: "Pick errors" },
      { value: "+30%", label: "Space utilization" },
    ],
    body: [
      { type: "h2", text: "The challenge" },
      {
        type: "p",
        text: "Vantage had signed two large e-commerce clients whose combined peak volume would overwhelm its existing warehouse. Expanding the building wasn't an option on the timeline, and hiring alone couldn't close the gap.",
      },
      { type: "h2", text: "What we did" },
      {
        type: "p",
        text: "We introduced AI-driven slotting that continuously re-organized fast-moving SKUs closer to dispatch, and demand forecasting that pre-positioned labor and stock before each wave. Pick paths were optimized in real time, shrinking travel distance on every order.",
      },
      {
        type: "list",
        items: [
          "Dynamic slotting driven by live order velocity",
          "Wave and labor planning from demand forecasts",
          "Real-time pick-path optimization",
          "Handheld scanning with guided put-away",
        ],
      },
      {
        type: "quote",
        text: "We got three times the output out of the same four walls. Peak used to be survival — now it's our best margin of the year.",
        attribution: "Head of Operations, Vantage Logistics",
      },
      { type: "h2", text: "The results" },
      {
        type: "p",
        text: "Vantage tripled peak throughput in the same footprint, cut pick errors by 45% and improved space utilization by 30% — turning its most stressful season into its most profitable.",
      },
    ],
  },
  {
    id: "cs-cloud-migration",
    slug: "cs-cloud-migration",
    title: "Meridian Capital's Zero-Downtime Cloud Migration",
    description:
      "A regulated financial services group moved its core ERP to the cloud with a phased, dual-run strategy — achieving full cutover with zero downtime and a 40% cut in infrastructure spend.",
    shortDescription:
      "A regulated financial services group moved its core ERP to the cloud with a phased, dual-run strategy — achieving full cutover with zero downtime and a 40% cut in infrastructure spend.",
    category: "Cloud",
    categories: ["Cloud", "Finance", "Migration"],
    image: "/images/common/cloud-network.png",
    imageVisible: true,
    client: "Meridian Capital",
    industry: "Financial Services",
    date: "June 16, 2026",
    readTime: "6 min read",
    size: "large",
    results: [
      { value: "0", label: "Minutes of downtime" },
      { value: "-40%", label: "Infrastructure cost" },
      { value: "99.99%", label: "Post-migration uptime" },
    ],
    body: [
      { type: "h2", text: "The challenge" },
      {
        type: "p",
        text: "Meridian's ageing on-premise ERP was expensive to run and a growing compliance risk. But as a regulated firm, any downtime or data-integrity gap during migration was simply unacceptable — the cutover had to be invisible to clients and auditors alike.",
      },
      { type: "h2", text: "What we did" },
      {
        type: "p",
        text: "We ran the legacy and cloud systems in parallel, reconciling data continuously until we could prove the new platform was bit-for-bit correct. A rehearsed cutover plan, with a tested rollback at every step, let us switch over during a normal business window with no interruption.",
      },
      {
        type: "list",
        items: [
          "Dual-run with continuous data reconciliation",
          "Automated, encrypted migration pipelines",
          "Full audit trail for regulatory sign-off",
          "Rehearsed cutover with tested rollback",
        ],
      },
      {
        type: "quote",
        text: "Our clients never noticed a thing — which, for a migration of this size, is the highest compliment there is.",
        attribution: "CIO, Meridian Capital",
      },
      { type: "h2", text: "The results" },
      {
        type: "p",
        text: "Meridian completed full cutover with zero downtime, reduced infrastructure costs by 40%, and now runs at 99.99% uptime with a platform that scales on demand and passes audits with ease.",
      },
    ],
  },
  {
    id: "cs-finance-analytics",
    slug: "cs-finance-analytics",
    title: "Aldergrove Holdings Closes the Books in Days, Not Weeks",
    description:
      "A diversified holding company replaced month-long manual consolidations across nine subsidiaries with automated, real-time reporting — giving leadership a live view of group performance.",
    shortDescription:
      "A diversified holding company replaced month-long manual consolidations across nine subsidiaries with automated, real-time reporting — giving leadership a live view of group performance.",
    category: "Finance",
    categories: ["Finance", "Analytics", "Power BI"],
    image: "/images/common/featured-sap.png",
    imageVisible: true,
    client: "Aldergrove Holdings",
    industry: "Investment Holding",
    date: "June 8, 2026",
    readTime: "5 min read",
    size: "small",
    results: [
      { value: "3 days", label: "To close (was 4 weeks)" },
      { value: "9", label: "Subsidiaries consolidated" },
      { value: "1", label: "Source of truth" },
    ],
    body: [
      { type: "h2", text: "The challenge" },
      {
        type: "p",
        text: "Aldergrove's nine subsidiaries each kept their own books in their own formats. Every month-end became a scramble of spreadsheets, currency conversions and manual eliminations — and by the time the group report was ready, the numbers were already stale.",
      },
      { type: "h2", text: "What we did" },
      {
        type: "p",
        text: "We standardized the chart of accounts across all entities and automated inter-company eliminations and currency translation inside a single consolidation engine. Group results now assemble themselves in real time as the subsidiaries post.",
      },
      {
        type: "list",
        items: [
          "Standardized chart of accounts across nine entities",
          "Automated inter-company eliminations",
          "Real-time multi-currency consolidation",
          "Self-service dashboards for the board",
        ],
      },
      {
        type: "quote",
        text: "We went from arguing about whose spreadsheet was right to discussing what the numbers actually mean.",
        attribution: "Group CFO, Aldergrove Holdings",
      },
      { type: "h2", text: "The results" },
      {
        type: "p",
        text: "Aldergrove now closes the group books in three days instead of four weeks, with a single, trusted source of truth and a live view of performance across every subsidiary.",
      },
    ],
  },
  {
    id: "cs-healthcare-compliance",
    slug: "cs-healthcare-compliance",
    title: "Caldera MedSupply Halved Order-to-Delivery Time",
    description:
      "A medical device distributor rebuilt its traceability and compliance workflows on a modern ERP — passing audits effortlessly while cutting order-to-delivery time in half.",
    shortDescription:
      "A medical device distributor rebuilt its traceability and compliance workflows on a modern ERP — passing audits effortlessly while cutting order-to-delivery time in half.",
    category: "Healthcare",
    categories: ["Healthcare", "Compliance", "ERP"],
    image: "/images/common/cloud-network.png",
    imageVisible: true,
    client: "Caldera MedSupply",
    industry: "Medical Distribution",
    date: "May 30, 2026",
    readTime: "4 min read",
    size: "small",
    results: [
      { value: "-50%", label: "Order-to-delivery time" },
      { value: "100%", label: "Audit pass rate" },
      { value: "Full", label: "Batch traceability" },
    ],
    body: [
      { type: "h2", text: "The challenge" },
      {
        type: "p",
        text: "Caldera distributes regulated medical devices, where every unit must be traceable by lot and expiry. Their manual, paper-heavy processes made audits stressful and slowed fulfilment — and a single traceability gap could mean a costly recall or a failed inspection.",
      },
      { type: "h2", text: "What we did" },
      {
        type: "p",
        text: "We rebuilt fulfilment around lot- and expiry-level tracking with barcode scanning at every hand-off, and baked compliance rules directly into the workflow so non-conforming stock simply couldn't ship. Complete audit trails are now generated automatically.",
      },
      {
        type: "list",
        items: [
          "Lot- and expiry-level traceability end to end",
          "Barcode scanning at every hand-off",
          "Compliance rules enforced in the workflow",
          "Automatic, audit-ready documentation",
        ],
      },
      {
        type: "quote",
        text: "Audits used to take us a week to prepare for. Now the evidence is just there, generated as we work.",
        attribution: "Quality & Compliance Lead, Caldera MedSupply",
      },
      { type: "h2", text: "The results" },
      {
        type: "p",
        text: "Caldera cut order-to-delivery time in half, achieved a 100% audit pass rate, and gained full batch traceability — turning compliance from a liability into a competitive strength.",
      },
    ],
  },
];
