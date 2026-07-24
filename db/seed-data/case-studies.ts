export const CASE_STUDIES_SEED = [
  {
    slug: "cs-manufacturing-iot",
    title: "Nordwind Industrial Cut Unplanned Downtime by 38%",
    description:
      "A three-plant industrial manufacturer connected its machinery to SAP Business One and real-time IoT telemetry, replacing reactive repairs with predictive maintenance — and reclaiming thousands of lost production hours a year.",
    shortDescription:
      "A three-plant industrial manufacturer connected its machinery to SAP Business One and real-time IoT telemetry.",
    category: "Manufacturing",
    categories: ["Manufacturing", "IoT", "SAP Business One"],
    image: "/images/case-studies/manufacturing-ai.png",
    client: "Nordwind Industrial",
    industry: "Industrial Manufacturing",
    readTime: "7 min read",
    size: "large" as const,
    featured: true,
    results: [
      { value: "38%", label: "Less unplanned downtime" },
      { value: "+22%", label: "Overall equipment effectiveness" },
      { value: "9 mo", label: "Payback period" },
    ],
    bodyHtml:
      "<h2>The challenge</h2><p>Nordwind ran three plants on a patchwork of spreadsheets and standalone machine controllers. Maintenance was almost entirely reactive.</p><h2>What we did</h2><p>We connected the factory floor to a single SAP Business One core and layered IoT sensors onto the critical assets, streaming vibration, temperature and cycle data in real time.</p><ul><li>Retrofitted 60+ machines with condition-monitoring sensors</li><li>Unified maintenance, inventory and production on one ERP</li><li>Predictive alerts routed straight to technicians' tablets</li></ul><blockquote>For the first time we can see a failure coming and fix it on our schedule, not the machine's. — VP of Operations, Nordwind Industrial</blockquote>",
  },
  {
    slug: "cs-retail-inventory-turnaround",
    title: "Regional Retailer Cuts Stockouts by 30% with Unified Inventory",
    description:
      "A multi-branch retail group replaced disconnected spreadsheets with a single ERP-driven inventory view across stores and warehouses.",
    shortDescription:
      "A multi-branch retail group replaced disconnected spreadsheets with a single ERP-driven inventory view.",
    category: "Retail",
    categories: ["Retail", "Inventory", "SAP Business One"],
    image: "/images/case-studies/retail-inventory.png",
    client: "Confidential Retail Group",
    industry: "Retail",
    readTime: "5 min read",
    size: "medium" as const,
    featured: false,
    results: [
      { value: "30%", label: "Fewer stockouts" },
      { value: "18%", label: "Faster replenishment" },
    ],
    bodyHtml:
      "<h2>The challenge</h2><p>Stock levels were tracked per-branch in spreadsheets, leading to frequent stockouts and overstock in different locations at the same time.</p><h2>What we did</h2><p>We rolled out a unified inventory module across all branches, giving planners a real-time, single view of stock and automated reorder points.</p>",
  },
];
