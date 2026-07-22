import {
  Coins,
  ShoppingCart,
  Users,
  Boxes,
  Factory,
  Wrench,
  FolderKanban,
  FileText,
  Settings,
  Sliders,
  Database,
  GraduationCap,
  Rocket,
  ShieldCheck,
  Search,
  TrendingUp,
  Warehouse,
  ShoppingBag,
  Zap,
  Layers,
  MessageSquare,
  Globe,
  LineChart,
  Server,
  Terminal,
  CheckCircle2,
  Clock,
  Lock,
  LucideIcon,
} from "lucide-react";

export interface WhyItem {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface ChallengeItem {
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
}

export interface FlowStep {
  id: string;
  label: string;
  title: string;
  desc: string;
}

export interface ModuleItem {
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

export interface LifecycleStep {
  phase: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface IndustryItem {
  name: string;
  heading: string;
  desc: string;
  bullets: string[];
  image: string;
}

export interface IntegrationItem {
  name: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  border: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SolutionDetail {
  id: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  whyTitle: string;
  whyItems: WhyItem[];
  challengesTitle: string;
  challenges: ChallengeItem[];
  flowTitle?: string;
  flowSteps?: FlowStep[];
  modulesTitle: string;
  modules: ModuleItem[];
  lifecycleTitle?: string;
  lifecycle?: LifecycleStep[];
  industriesTitle?: string;
  industries?: IndustryItem[];
  integrationsTitle?: string;
  integrations?: IntegrationItem[];
  faqsTitle?: string;
  faqs?: FAQItem[];
  whyAlleTechTitle?: string;
  whyAlleTechItems?: { title: string; desc: string; icon: LucideIcon }[];
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaLabel?: string;
  ctaSecondaryLabel?: string;
}

export const SOLUTION_DETAILS: SolutionDetail[] = [
  {
    id: "sap-business-one",
    heroTitle: "SAP Business One",
    heroSubtitle: "Enterprise ERP for Growing Businesses",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80",
    whyTitle: "Why SAP Business One?",
    whyItems: [
      {
        title: "What is SAP Business One ?",
        desc: "A single ERP software designed for fast-growing small and midmarket companies, unifying finance, inventory, sales, and operations in real time.",
        icon: Layers,
      },
      {
        title: "Why businesses choose it ?",
        desc: "Over 75,000 global companies trust it for scalability, strong analytics, compliance readiness, and modular design.",
        icon: CheckCircle2,
      },
      {
        title: "Which companies should use it ?",
        desc: "Ideal for companies outgrowing accounting tools like QuickBooks — manufacturers, distributors, retailers, and service companies needing deeper logistics controls.",
        icon: Users,
      },
    ],
    challengesTitle: "Business Challenges Solved",
    challenges: [
      {
        title: "Financial Management",
        desc: "Eliminate double entries and automate bookkeeping. Integrate sales, purchasing, and operations for real-time general ledgers, cash flow forecasting, and multi-currency reporting.",
        icon: Coins,
        color: "from-blue-500 to-indigo-600",
      },
      {
        title: "Inventory Control",
        desc: "Track stock across multiple warehouses in real time. Automate valuation, optimize reorder thresholds, and streamline transfer procedures to ensure high order fulfillment.",
        icon: Boxes,
        color: "from-cyan-500 to-blue-600",
      },
      {
        title: "Sales Management",
        desc: "Track opportunities from initial contact to close. Auto-generate quotes, manage sales orders, and convert deliveries to invoices with automated price rules.",
        icon: TrendingUp,
        color: "from-indigo-500 to-purple-600",
      },
      {
        title: "Purchasing",
        desc: "Automate and optimize procurement cycles. Track vendor quotes, manage purchase orders, reconcile invoices, and analyze vendor performance to reduce direct costs.",
        icon: ShoppingCart,
        color: "from-emerald-500 to-teal-600",
      },
      {
        title: "Production",
        desc: "Define multi-level Bills of Materials (BOM), run Material Requirements Planning (MRP), schedule production orders, and track exact shop-floor execution and capacity.",
        icon: Factory,
        color: "from-amber-500 to-orange-600",
      },
      {
        title: "Customer Relationship Management",
        desc: "Track campaigns, customer contacts, sales pipelines, and support tickets in one place. Keep customer history fully visible for better retention and upselling.",
        icon: Users,
        color: "from-pink-500 to-rose-600",
      },
    ],

    modulesTitle: "SAP Business One Modules",
    modules: [
      {
        title: "Finance",
        desc: "Automates daily bookkeeping, journal entries, accounts payable/receivable, budgets, and cash flow management.",
        icon: Coins,
        color: "text-blue-600",
        bgColor: "bg-blue-50/50",
      },
      {
        title: "Sales",
        desc: "Empowers sales teams to manage opportunities, build custom quotes, coordinate orders, and analyze the sales funnel.",
        icon: TrendingUp,
        color: "text-indigo-600",
        bgColor: "bg-indigo-50/50",
      },
      {
        title: "CRM",
        desc: "Syncs sales, marketing, and service. Build automated email campaigns and keep history consolidated.",
        icon: Users,
        color: "text-pink-600",
        bgColor: "bg-pink-50/50",
      },
      {
        title: "Inventory",
        desc: "Provides real-time warehouse counts, multi-location stock tracking, and automated inventory valuation methods.",
        icon: Boxes,
        color: "text-cyan-600",
        bgColor: "bg-cyan-50/50",
      },
      {
        title: "Purchasing",
        desc: "Manages vendor databases, purchase order approvals, goods receipts, and vendor credit reconciliation.",
        icon: ShoppingCart,
        color: "text-emerald-600",
        bgColor: "bg-emerald-50/50",
      },
      {
        title: "Production",
        desc: "Handles Bills of Materials (BOM), schedules production, and forecasts requirements via MRP.",
        icon: Factory,
        color: "text-amber-600",
        bgColor: "bg-amber-50/50",
      },
      {
        title: "Service",
        desc: "Simplifies warranty claims, service contract renewals, call tracking, and field-engineer assignments.",
        icon: Wrench,
        color: "text-rose-600",
        bgColor: "bg-rose-50/50",
      },
      {
        title: "Projects",
        desc: "Tracks tasks, milestones, project sub-stages, internal resource allocations, and actual-to-budget costs.",
        icon: FolderKanban,
        color: "text-purple-600",
        bgColor: "bg-purple-50/50",
      },
    ],
    lifecycleTitle: "Complete Implementation Lifecycle",
    lifecycle: [
      {
        phase: "Discovery",
        title: "Initial Scope & Alignment",
        desc: "We analyze your operations, highlight performance bottlenecks, and define the core objective roadmap.",
        icon: Search,
      },
      {
        phase: "Business Analysis",
        title: "Blueprint Design",
        desc: "Our SAP architects document your standard procedures and define exact data mapping fields and workflows.",
        icon: FileText,
      },
      {
        phase: "Configuration",
        title: "System Construction",
        desc: "We build the core SAP database structures, charts of accounts, users, and global permissions settings.",
        icon: Settings,
      },
      {
        phase: "Customization",
        title: "Add-on Development",
        desc: "We develop custom business rules, print layouts, alerts, and tailored add-on forms to match your exact workflows.",
        icon: Sliders,
      },
      {
        phase: "Data Migration",
        title: "Data Cleanse & Import",
        desc: "We extract, cleanse, and securely migrate open master records, accounts balances, and vendor files from legacy systems.",
        icon: Database,
      },
      {
        phase: "Training",
        title: "Key User Enablement",
        desc: "We conduct step-by-step role-based training programs to ensure your team feels confident and productive.",
        icon: GraduationCap,
      },
      {
        phase: "Go Live",
        title: "Production Transition",
        desc: "We run final data checks, execute cutover procedures, and stand up the production environment for active transactions.",
        icon: Rocket,
      },
      {
        phase: "Support",
        title: "Hypercare & Upgrades",
        desc: "We provide post-deployment support, monthly health-checks, and ongoing system refinement to ensure long-term ROI.",
        icon: ShieldCheck,
      },
    ],
    industriesTitle: "Industry Solutions",
    industries: [
      {
        name: "Manufacturing",
        heading: "Precision Production & MRP",
        desc: "Accelerate production turnarounds, lower material waste, and forecast supply requirements accurately.",
        bullets: [
          "Multi-level Bills of Materials (BOM) management",
          "Dynamic Material Requirements Planning (MRP) runs",
          "Yield and raw-material scrap tracking",
          "Floor resource capacity planning",
        ],
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Wholesale Distribution",
        heading: "Smart Multi-Warehouse Logistics",
        desc: "Maintain lean inventory levels while meeting fulfillment requirements across multiple channels and facilities.",
        bullets: [
          "Real-time stock valuation and updates",
          "Automated picking, packing, and dispatch routing",
          "Supplier evaluation and lead-time analytics",
          "Barcode scanning and WMS integration readiness",
        ],
        image:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Retail & eCommerce",
        heading: "Unified Omnichannel Experience",
        desc: "Sync online storefront sales, in-store point-of-sale registers, and central inventory databases automatically.",
        bullets: [
          "Real-time Shopify, Magento, or WooCommerce sync",
          "Centralized order fulfillment pipeline",
          "Customer loyalty database integration",
          "Returns and vendor-credit automation",
        ],
        image: "/assets/images/solutions/retail.jpg",
      },
      {
        name: "Professional Services",
        heading: "Project Profitability & Tracking",
        desc: "Track actual milestone costs against budgets, optimize resources, and invoice clients based on precise progress.",
        bullets: [
          "Timesheet entry and automated approvals",
          "Milestone and project budget controls",
          "Contract renewals and warranty tracking",
          "Service engineer assignment scheduling",
        ],
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      },
    ],
    integrationsTitle: "Integrations",
    integrations: [
      {
        name: "Power BI",
        desc: "SAP ↔ Power BI: Interactive dashboards & financial reports",
        icon: LineChart,
        color: "text-yellow-500",
        border: "hover:border-yellow-500/40",
      },
      {
        name: "WhatsApp",
        desc: "SAP ↔ WhatsApp: Automated invoice alerts & delivery notices",
        icon: MessageSquare,
        color: "text-emerald-500",
        border: "hover:border-emerald-500/40",
      },
      {
        name: "Banking",
        desc: "SAP ↔ Banking: Automated statement sync & bank ledger matching",
        icon: Coins,
        color: "text-blue-500",
        border: "hover:border-blue-500/40",
      },
      {
        name: "eCommerce",
        desc: "SAP ↔ eCommerce: Shopify / Magento inventory and order sync",
        icon: ShoppingBag,
        color: "text-indigo-500",
        border: "hover:border-indigo-500/40",
      },
      {
        name: "Mobile Apps",
        desc: "SAP ↔ Mobile Apps: Real-time field sales & inventory apps",
        icon: Globe,
        color: "text-cyan-500",
        border: "hover:border-cyan-500/40",
      },
      {
        name: "WMS",
        desc: "SAP ↔ WMS: Barcoding & paperless warehouse scanning",
        icon: Warehouse,
        color: "text-purple-500",
        border: "hover:border-purple-500/40",
      },
    ],
    whyAlleTechTitle: "Why ALLE TECH?",
    whyAlleTechItems: [
      {
        title: "SAP Certified Experts",
        desc: "Our consultants carry up-to-date SAP certifications and have successfully completed dozens of mid-market ERP deployments.",
        icon: ShieldCheck,
      },
      {
        title: "Deep Customization",
        desc: "We don't force your workflows into rigid software boxes. We design custom business logic and fields matching how you run.",
        icon: Sliders,
      },
      {
        title: "24/7 Support & Care",
        desc: "Our assistance doesn't end at go-live. We offer hypercare options, custom support SLAs, and monthly wellness scans.",
        icon: Wrench,
      },
      {
        title: "Data Integrity Focus",
        desc: "We deploy strict extraction scripts and matching models to ensure historical balance transfers remain perfectly balanced.",
        icon: Database,
      },
    ],
    faqsTitle: "FAQs",
    faqs: [
      {
        question:
          "How long does a typical SAP Business One implementation take?",
        answer:
          "Depending on scope, customizations, and modules used, a standard implementation typically takes 12 to 24 weeks. This includes detailed discovery, data cleansing, configurations, custom layout building, training, and parallel testing phases.",
      },
      {
        question:
          "Can we migrate historical data from QuickBooks or legacy files?",
        answer:
          "Yes. ALLE TECH specializes in database transitions. We assist you in extracting, cleansing, and importing master data records (customers, suppliers, items) and open financial entries securely into SAP Business One.",
      },
      {
        question: "Is SAP Business One available in the cloud or on-premise?",
        answer:
          "SAP Business One supports both configurations. You can host it in the cloud (managed secure hosting on AWS or Azure) for easy remote access with low upfront infrastructure cost, or deploy it on-premise on local enterprise servers.",
      },
      {
        question: "What are the licensing models (subscription vs. perpetual)?",
        answer:
          "We offer two models: Subscription licenses (monthly operating expenditure covering hosting, license, and basic maintenance) and Perpetual licenses (one-time capital purchase with an annual maintenance program for software updates).",
      },
      {
        question: "How does ALLE TECH handle custom integrations and add-ons?",
        answer:
          "We use the standard SAP Business One Integration Framework (B1iF) and SDK/API protocols. This guarantees that all custom connections (e.g. to CRM, custom portals, banking) remain fully functional and upgrade-safe.",
      },
    ],
  },
  {
    id: "odoo-erp",
    heroTitle: "Odoo ERP",
    heroSubtitle:
      "Transform Operations With a Flexible, All-in-One ERP Platform",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80",
    whyTitle: "Why Odoo?",
    whyItems: [
      {
        title: "Modular Architecture",
        desc: "Odoo contains 30+ core apps and over 20,000 community modules. Start with basic apps (like CRM or Billing) and plug in more apps as your business grows.",
        icon: Layers,
      },
      {
        title: "High Customizability",
        desc: "Open-source codebase allows complete customization. Odoo matches unique business flows without forcing complex standard software rules.",
        icon: Sliders,
      },
      {
        title: "Cost Efficiency",
        desc: "Eliminates heavy licensing overhead. Odoo represents an affordable, highly automated alternative to traditional legacy ERP systems.",
        icon: Coins,
      },
    ],
    challengesTitle: "Business Challenges Solved",
    challenges: [
      {
        title: "System Fragmentation",
        desc: "Ditch disconnected SaaS subscriptions. Odoo unifies accounting, inventory, CRM, and sales pipelines in a single dashboard.",
        icon: Boxes,
        color: "from-blue-500 to-indigo-600",
      },
      {
        title: "Manual Redundancy",
        desc: "Automate manual alerts, order entries, stock alerts, and recurring billing cycles to eliminate processing bottlenecks.",
        icon: Zap,
        color: "from-indigo-500 to-purple-600",
      },
      {
        title: "Limited Operational Visibility",
        desc: "Centralize your operations. Track exact stock levels, sales velocity, project costs, and gross margins in real time.",
        icon: TrendingUp,
        color: "from-pink-500 to-rose-600",
      },
    ],
    flowTitle: "Business Automation Journey",
    flowSteps: [
      {
        id: "manual",
        label: "Manual Work",
        title: "Fragmented Operations",
        desc: "Business relies on slow spreadsheets, scattered emails, and duplicate data entries leading to high human errors.",
      },
      {
        id: "digital",
        label: "Digital Process",
        title: "Digital Centralization",
        desc: "Operations are migrated to Odoo's central database, establishing single master files for items, customers, and transactions.",
      },
      {
        id: "automation",
        label: "Workflow Automation",
        title: "Automated Triggers",
        desc: "Odoo automatically handles sales-to-invoice conversions, routes purchasing triggers, and recalculates stock reserves.",
      },
      {
        id: "notifications",
        label: "Smart Alerts",
        title: "Real-time Notifications",
        desc: "Automatic email notifications, stock alert warnings, and approval workflows prevent stockouts and operational delays.",
      },
      {
        id: "ai",
        label: "AI Assisted",
        title: "Smart AI Assistant",
        desc: "Odoo uses predictive modules to forecast production materials, score leads, and compile automated financial projections.",
      },
    ],
    modulesTitle: "Odoo Ecosystem Available Modules",
    modules: [
      {
        title: "Accounting",
        desc: "Double-entry financial ledgers, bank syncs, automated invoicing, tax reports, and multi-currency support.",
        icon: Coins,
        color: "text-blue-600",
        bgColor: "bg-blue-50/50",
      },
      {
        title: "Sales",
        desc: "Quotation builders, signature integration, automated discounts, and price lists linked to warehouses.",
        icon: TrendingUp,
        color: "text-indigo-600",
        bgColor: "bg-indigo-50/50",
      },
      {
        title: "CRM",
        desc: "Track sales pipelines, log meetings, assign leads automatically, and configure marketing stages.",
        icon: Users,
        color: "text-pink-600",
        bgColor: "bg-pink-50/50",
      },
      {
        title: "Purchase",
        desc: "Manage supplier quotes, generate purchase orders, track deliveries, and match supplier bills.",
        icon: ShoppingCart,
        color: "text-emerald-600",
        bgColor: "bg-emerald-50/50",
      },
      {
        title: "Inventory",
        desc: "Double-entry traceability, barcodes, smart routing (drop-shipping, cross-docking), and stock adjustments.",
        icon: Boxes,
        color: "text-cyan-600",
        bgColor: "bg-cyan-50/50",
      },
      {
        title: "Manufacturing",
        desc: "BOM schedules, work orders, routing plans, production orders, and preventative maintenance schedules.",
        icon: Factory,
        color: "text-amber-600",
        bgColor: "bg-amber-50/50",
      },
      {
        title: "Projects",
        desc: "Milestones, collaborative tasks, employee timesheets, customer portals, and project resource tracking.",
        icon: FolderKanban,
        color: "text-purple-600",
        bgColor: "bg-purple-50/50",
      },
      {
        title: "HR & Employees",
        desc: "Contracts, attendance registers, expense reports, timesheet approvals, and leaves trackers.",
        icon: Users,
        color: "text-teal-600",
        bgColor: "bg-teal-50/50",
      },
    ],
    lifecycleTitle: "Odoo Deployment & Editions",
    lifecycle: [
      {
        phase: "Community",
        title: "Open-Source Base",
        desc: "Core ERP features hosted locally. Free software code ideal for basic logistics and developer customizing.",
        icon: FileText,
      },
      {
        phase: "Enterprise",
        title: "Complete Feature Set",
        desc: "Includes advanced studio tools, bank integration, mobile apps, full support, and advanced MRP.",
        icon: ShieldCheck,
      },
      {
        phase: "Hosted (Odoo.sh)",
        title: "Managed Cloud Platform",
        desc: "Fully managed cloud hosting platform. Includes automated daily backups, email integration, and staging builds.",
        icon: Server,
      },
      {
        phase: "On Premise",
        title: "Self-Hosted Infrastructure",
        desc: "Direct deployment on your local enterprise servers for companies requiring absolute physical database security.",
        icon: Database,
      },
    ],
    industriesTitle: "Supported Industries",
    industries: [
      {
        name: "eCommerce & POS",
        heading: "Omnichannel retail sync",
        desc: "Unify retail POS registers and Shopify or WooCommerce storefronts with central warehouses.",
        bullets: [
          "Real-time inventory levels update",
          "Automated shipping and barcode labeling",
          "Central customer purchase records",
        ],
        image: "/assets/images/solutions/pos.jpg",
      },
      {
        name: "Manufacturing",
        heading: "Flexible MRP planning",
        desc: "Schedule custom production work orders, track raw material waste, and forecast components requirements.",
        bullets: [
          "Flexible BOM versions and rules",
          "Capacity planning worksheets",
          "Work order timesheet tracking",
        ],
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      },
    ],
    integrationsTitle: "Integrations & Add-ons",
    integrations: [
      {
        name: "Payment Gateways",
        desc: "Stripe, PayPal, and Authorize.Net direct integrations",
        icon: Coins,
        color: "text-blue-500",
        border: "hover:border-blue-500/40",
      },
      {
        name: "eCommerce Sites",
        desc: "Shopify, Magento, WooCommerce API connectors",
        icon: ShoppingBag,
        color: "text-indigo-500",
        border: "hover:border-indigo-500/40",
      },
      {
        name: "Shipping APIs",
        desc: "DHL, FedEx, and UPS automated label triggers",
        icon: Warehouse,
        color: "text-emerald-500",
        border: "hover:border-emerald-500/40",
      },
    ],
    whyAlleTechTitle: "Why ALLE TECH?",
    whyAlleTechItems: [
      {
        title: "Certified Odoo Integrators",
        desc: "We design clean module add-ons, avoid database code bloat, and ensure upgrade safety.",
        icon: ShieldCheck,
      },
      {
        title: "Agile Deployments",
        desc: "We prioritize MVP module releases to get your staff operational in weeks rather than months.",
        icon: Rocket,
      },
      {
        title: "Custom App Development",
        desc: "We develop bespoke Odoo applications and tailor existing modules to match your proprietary business processes perfectly.",
        icon: Sliders,
      },
      {
        title: "End-to-End Support",
        desc: "From legacy data migrations to version upgrades and continuous functional training, we care for your system.",
        icon: Wrench,
      },
    ],
    faqsTitle: "Odoo FAQs",
    faqs: [
      {
        question:
          "What is the difference between Odoo Community and Enterprise?",
        answer:
          "Odoo Community is open-source and free, covering basic accounting and inventory. Odoo Enterprise requires active user license subscriptions and unlocks advanced features like full accounting, barcode support, mobile apps, and direct upgrade services.",
      },
      {
        question: "Is Odoo scalable?",
        answer:
          "Highly scalable. Odoo is run by thousands of small businesses as well as large enterprise corporations with over 300,000 daily transactions.",
      },
    ],
  },
  {
    id: "technology-consulting",
    heroTitle: "Technology Consulting",
    heroSubtitle: "Align Strategy with Practical Digital Transformation",
    heroImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1920&q=80",
    whyTitle: "Why Technology Consulting?",
    whyItems: [
      {
        title: "Unbiased Advice",
        desc: "We are technology-agnostic. We focus on finding the best tool that matches your specific budget, team size, and processes.",
        icon: ShieldCheck,
      },
      {
        title: "Risk Mitigation",
        desc: "Over 50% of ERP migrations fail due to poor planning. We establish rigid selection roadmaps to secure your technological transition.",
        icon: FileText,
      },
      {
        title: "AI Strategy",
        desc: "We assess your current data structures and operational rules to identify high-value opportunities for automation and AI integration.",
        icon: Zap,
      },
    ],
    challengesTitle: "Business Challenges Solved",
    challenges: [
      {
        title: "System Stagnation",
        desc: "Replace slow legacy systems with modern cloud alternatives that support remote workflows.",
        icon: Server,
        color: "from-blue-500 to-indigo-600",
      },
      {
        title: "Integration Gaps",
        desc: "Unify isolated departments. We align data formats to establish single data models across CRM, ERP, and BI.",
        icon: Layers,
        color: "from-indigo-500 to-purple-600",
      },
      {
        title: "Operational Inefficiency",
        desc: "Identify manual process bottlenecks and restructure workflows to scale operations without increasing headcount.",
        icon: Clock,
        color: "from-cyan-500 to-blue-600",
      },
    ],
    flowTitle: "Business Maturity Assessment",
    flowSteps: [
      {
        id: "manual",
        label: "Manual Business",
        title: "Traditional Workflows",
        desc: "Operations rely on manual entry, paper documents, and individual sheets. Uptime is at risk due to lack of central records.",
      },
      {
        id: "digitized",
        label: "Digitized",
        title: "Information Storage",
        desc: "Data is moved to standard cloud databases. Team accesses documents digitally, reducing physical storage dependencies.",
      },
      {
        id: "integrated",
        label: "Integrated",
        title: "Connected Departments",
        desc: "Front-office CRM and back-office ERP databases sync automatically, preventing duplicate entries and invoice delays.",
      },
      {
        id: "automated",
        label: "Automated",
        title: "Autonomous Actions",
        desc: "System triggers automated billing cycles, background stock level alerts, and custom client responses to automate routine steps.",
      },
      {
        id: "ai-driven",
        label: "AI Driven",
        title: "Predictive Analytics",
        desc: "System uses AI models to forecast sales trends, dynamically price services, and automate complex compliance checks.",
      },
    ],
    modulesTitle: "Consulting Services",
    modules: [
      {
        title: "Roadmap Design",
        desc: "Establishing practical digital transformation plans with clear timeline milestones and budget forecasting.",
        icon: FileText,
        color: "text-blue-600",
        bgColor: "bg-blue-50/50",
      },
      {
        title: "Tech Advisory",
        desc: "Evaluating database infrastructures, system configurations, and cloud network security setups.",
        icon: Settings,
        color: "text-indigo-600",
        bgColor: "bg-indigo-50/50",
      },
      {
        title: "ERP Selection",
        desc: "Conducting vendor audits, requirement mapping, and RFP evaluations to choose the right ERP.",
        icon: Search,
        color: "text-pink-600",
        bgColor: "bg-pink-50/50",
      },
      {
        title: "AI Readiness",
        desc: "Auditing data cleanliness and process structures to prepare for machine learning model integrations.",
        icon: Zap,
        color: "text-cyan-600",
        bgColor: "bg-cyan-50/50",
      },
      {
        title: "Optimization",
        desc: "Refining operational procedures to reduce overhead costs, improve velocity, and eliminate processing delays.",
        icon: TrendingUp,
        color: "text-emerald-600",
        bgColor: "bg-emerald-50/50",
      },
      {
        title: "Change Management",
        desc: "Coordinating training workshops and staff alignment exercises to guarantee high digital adoption rates.",
        icon: Users,
        color: "text-purple-600",
        bgColor: "bg-purple-50/50",
      },
      {
        title: "Security & Compliance",
        desc: "Reviewing cybersecurity architectures, data access controls, and regulatory compliance standards to secure business assets.",
        icon: ShieldCheck,
        color: "text-rose-600",
        bgColor: "bg-rose-50/50",
      },
      {
        title: "Data Strategy",
        desc: "Structuring enterprise data schemas, integration protocols, and warehousing pipelines to fuel real-time analytics.",
        icon: Database,
        color: "text-amber-600",
        bgColor: "bg-amber-50/50",
      },
    ],
    whyAlleTechTitle: "Why ALLE TECH?",
    whyAlleTechItems: [
      {
        title: "Expert Advisory Panel",
        desc: "Our team includes former CIOs and certified ERP architects with decades of hands-on operational leadership.",
        icon: Users,
      },
      {
        title: "Practical Outcomes",
        desc: "We focus on producing actionable implementation guides rather than long, theoretical slide presentations.",
        icon: Rocket,
      },
      {
        title: "Technology Agnostic",
        desc: "We recommend systems completely independent of vendor commissions, focusing strictly on what fits your budget and workflows.",
        icon: ShieldCheck,
      },
      {
        title: "Business-First Strategy",
        desc: "We align all technology roadmaps with actual strategic business outcomes, productivity gains, and measurable ROI.",
        icon: CheckCircle2,
      },
    ],
    faqsTitle: "Consulting FAQs",
    faqs: [
      {
        question: "How does the ERP selection process work?",
        answer:
          "We map your operational requirements, compile an RFP, evaluate vendor responses, arrange structured demos, and help negotiate license contracts objectively.",
      },
      {
        question: "What does an AI readiness check involve?",
        answer:
          "We review database cleanliness, file consistency, API accessibility, and process rules to see if your data supports AI automation models.",
      },
    ],
  },
  {
    id: "business-intelligence",
    heroTitle: "Business Intelligence & Power BI",
    heroSubtitle:
      "Turn Scattered Operational Data into Actionable Real-Time Insights",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80",
    whyTitle: "Why Business Intelligence?",
    whyItems: [
      {
        title: "Real-Time Tracking",
        desc: "No more waiting for month-end reports. Monitor transaction logs, stock updates, and sales pipelines instantly.",
        icon: LineChart,
      },
      {
        title: "Consolidated Dashboards",
        desc: "Combine scattered spreadsheets, ERP databases, CRM leads, and website metrics in a single central view.",
        icon: Layers,
      },
      {
        title: "Data-Driven Culture",
        desc: "Equip your teams with interactive filtering tools to investigate bottlenecks, track margins, and improve efficiency.",
        icon: TrendingUp,
      },
    ],
    challengesTitle: "Business Challenges Solved",
    challenges: [
      {
        title: "Information Silos",
        desc: "Unify data trapped in isolated accounting software, warehouse lists, and marketing trackers.",
        icon: Database,
        color: "from-blue-500 to-indigo-600",
      },
      {
        title: "Slow Reporting",
        desc: "Replace weekly manual reporting tasks with automated, auto-refreshing Power BI datasets.",
        icon: Zap,
        color: "from-indigo-500 to-purple-600",
      },
      {
        title: "Gut-Feel Decisions",
        desc: "Access clear, structured dashboards to track exact margins, customer lifetime value, and sales trends.",
        icon: TrendingUp,
        color: "from-pink-500 to-rose-600",
      },
    ],
    flowTitle: "Data Journey",
    flowSteps: [
      {
        id: "sources",
        label: "Data Sources",
        title: "Extracting Raw Data",
        desc: "We identify and connect data points across Excel sheets, SQL servers, online stores, and CRM lists.",
      },
      {
        id: "warehouse",
        label: "Data Warehouse",
        title: "Data Transformation",
        desc: "Raw data is cleansed, mapped, and stored in secure, cloud-based data warehouses for high-speed queries.",
      },
      {
        id: "powerbi",
        label: "Power BI",
        title: "Metrics & Modeling",
        desc: "We build logical data models, write DAX metrics, and configure direct database refresh gateways.",
      },
      {
        id: "dashboards",
        label: "Dashboards",
        title: "Interactive Visuals",
        desc: "Users view beautiful, interactive charts, filtering sales by rep, margins by item category, and stock by warehouse.",
      },
      {
        id: "decisions",
        label: "Decisions",
        title: "Strategic Actions",
        desc: "Executives monitor live metrics to make proactive business adjustments and spot growth trends instantly.",
      },
    ],
    modulesTitle: "Dashboard Types & Reports",
    modules: [
      {
        title: "Financial BI",
        desc: "Cash flow tracking, EBITDA charts, budget vs. actual reports, and margin analysis dashboards.",
        icon: Coins,
        color: "text-blue-600",
        bgColor: "bg-blue-50/50",
      },
      {
        title: "Sales Analysis",
        desc: "Tracking sales velocity, rep closing ratios, conversion rates, and client purchase histories.",
        icon: TrendingUp,
        color: "text-indigo-600",
        bgColor: "bg-indigo-50/50",
      },
      {
        title: "Supply Chain BI",
        desc: "Warehouse stock turn ratios, supplier lead times, delivery fulfillment logs, and scrap tracking.",
        icon: Boxes,
        color: "text-cyan-600",
        bgColor: "bg-cyan-50/50",
      },
      {
        title: "HR Dashboards",
        desc: "Tracking employee utilization ratios, commission structures, and department training logs.",
        icon: Users,
        color: "text-purple-600",
        bgColor: "bg-purple-50/50",
      },
    ],
    whyAlleTechTitle: "Why ALLE TECH?",
    whyAlleTechItems: [
      {
        title: "Certified Data Engineers",
        desc: "We write clean DAX formulas, build optimized data models, and ensure fast dashboard loading times.",
        icon: ShieldCheck,
      },
      {
        title: "System Integrations",
        desc: "We specialize in connecting Power BI with SAP Business One and Odoo ERP platforms.",
        icon: Layers,
      },
    ],
    faqsTitle: "Power BI FAQs",
    faqs: [
      {
        question: "What is Power BI and how does it help my business?",
        answer:
          "Power BI is a Microsoft analytics platform that transforms raw data from multiple sources into interactive dashboards and reports. It gives executives real-time visibility into sales, margins, inventory, and financial health without waiting for manual monthly reports.",
      },
      {
        question: "Can Power BI connect to our existing ERP system?",
        answer:
          "Yes. Power BI integrates directly with SAP Business One, Odoo, SQL databases, Excel files, and cloud services. We build secure data gateways and pre-configured connectors so your dashboards refresh automatically.",
      },
      {
        question: "How long does a Power BI deployment take?",
        answer:
          "A typical deployment takes 3 to 6 weeks. This includes source identification, data modeling, DAX metric writing, dashboard design, user training, and gateway setup for live data refresh.",
      },
      {
        question: "Do we need to replace our current reporting tools?",
        answer:
          "No. Power BI complements existing tools. Many clients continue using SAP Crystal Reports or Excel for operational tasks while adding Power BI for executive-level analytics and cross-department visibility.",
      },
    ],
  },
  {
    id: "erp-integration",
    heroTitle: "ERP Integration",
    heroSubtitle:
      "Eliminate Manual Data Entry by Connecting Your Business Ecosystem",
    heroImage:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1920&q=80",
    whyTitle: "Why ERP Integration?",
    whyItems: [
      {
        title: "Zero Data Entry Errors",
        desc: "Prevent human error. Information is passed directly between databases without manual transcription.",
        icon: ShieldCheck,
      },
      {
        title: "Seamless Operations",
        desc: "Sync customer orders with inventory counts and ledgers instantly to accelerate delivery speeds.",
        icon: Zap,
      },
      {
        title: "Unified System",
        desc: "Establish a single ERP core connecting all satellite apps, CRM tools, banking portals, and logistics sites.",
        icon: Layers,
      },
    ],
    challengesTitle: "Business Challenges Solved",
    challenges: [
      {
        title: "System Silos",
        desc: "Prevent isolation between accounting platforms and online shops, avoiding stock count mismatches.",
        icon: Warehouse,
        color: "from-blue-500 to-indigo-600",
      },
      {
        title: "Process Delays",
        desc: "Convert quotes to sales orders instantly without waiting for back-office transcription.",
        icon: Zap,
        color: "from-indigo-500 to-purple-600",
      },
      {
        title: "Data Entry Errors",
        desc: "Eliminate duplicate billing, incorrect inventory values, and shipping mistakes caused by manual data transcription.",
        icon: Database,
        color: "from-pink-500 to-rose-600",
      },
    ],
    flowTitle: "Enterprise Architecture",
    flowSteps: [
      {
        id: "edge",
        label: "Edge Systems",
        title: "Auxiliary Data Points",
        desc: "Customer places order on shop, sales logs deal in CRM, or warehouse scans a pallet barcode.",
      },
      {
        id: "integration",
        label: "Integration Layer",
        title: "Secure API Middleware",
        desc: "Secure API scripts translate data schemas, validate fields, and map structures between databases.",
      },
      {
        id: "unified",
        label: "Unified Platform",
        title: "Real-Time Posting",
        desc: "Transactions are posted directly into the ERP core ledger, updating stock reserves and bank ledgers.",
      },
    ],
    modulesTitle: "Integration Protocols & Middleware",
    modules: [
      {
        title: "REST APIs",
        desc: "Standard, secure, and fast JSON integrations compatible with modern cloud business applications.",
        icon: Globe,
        color: "text-blue-600",
        bgColor: "bg-blue-50/50",
      },
      {
        title: "Webhooks",
        desc: "Real-time event triggers posting transaction alerts instantly to external networks.",
        icon: Zap,
        color: "text-indigo-600",
        bgColor: "bg-indigo-50/50",
      },
      {
        title: "SOAP Services",
        desc: "Enterprise-grade XML messaging protocols ideal for legacy applications and banking portals.",
        icon: Terminal,
        color: "text-pink-600",
        bgColor: "bg-pink-50/50",
      },
      {
        title: "ETL Pipelines",
        desc: "Extracting, cleansing, and loading batch files automatically for scheduled data syncs.",
        icon: Database,
        color: "text-cyan-600",
        bgColor: "bg-cyan-50/50",
      },
    ],
    whyAlleTechTitle: "Why ALLE TECH?",
    whyAlleTechItems: [
      {
        title: "Upgrade-Safe Designs",
        desc: "We utilize standard API Service Layers to ensure database updates do not break custom integrations.",
        icon: ShieldCheck,
      },
      {
        title: "Robust Security",
        desc: "All custom connections utilize modern token authentication (OAuth 2.0) and TLS encryption.",
        icon: Lock,
      },
    ],
    faqsTitle: "ERP Integration FAQs",
    faqs: [
      {
        question: "What systems can you integrate with our ERP?",
        answer:
          "We integrate CRMs (Salesforce, HubSpot), eCommerce platforms (Shopify, Magento), banking portals, shipping APIs (DHL, FedEx), payment gateways (Stripe, PayPal), and custom in-house applications using REST, SOAP, or webhook protocols.",
      },
      {
        question: "How do you ensure data stays synchronized across systems?",
        answer:
          "We build bidirectional sync pipelines with conflict resolution rules, retry logic, and real-time event triggers. Every transaction is logged and auditable, ensuring zero data loss between connected platforms.",
      },
      {
        question: "Will integrations break when we upgrade our ERP?",
        answer:
          "No. We use standard API service layers and middleware abstraction, so custom integrations remain functional across ERP version upgrades. We also provide post-upgrade verification testing.",
      },
      {
        question:
          "Can you integrate legacy on-premise systems with cloud ERPs?",
        answer:
          "Yes. We deploy secure VPN tunnels, hybrid API gateways, and ETL batch pipelines to bridge legacy on-premise databases with modern cloud ERP environments.",
      },
    ],
  },
  {
    id: "cloud-infrastructure",
    heroTitle: "Cloud & IT Infrastructure",
    heroSubtitle:
      "Build a Secure, Connected, and Future-Ready Technology Infrastructure",
    heroImage: "/images/common/cloud-network.png",
    whyTitle: "Technology Should Support Your Business. Not Hold It Back.",
    whyItems: [
      {
        title: "Enable Productivity",
        desc: "A modern IT infrastructure provides more than connectivity. It creates a stable foundation that allows every business application to perform reliably and securely.",
        icon: Server,
      },
      {
        title: "Scale Operations",
        desc: "As businesses grow, technology environments become increasingly complex with remote employees, cloud applications, and ERP systems. We help build stable technology environments that support future growth.",
        icon: Layers,
      },
      {
        title: "Reduce Disruption",
        desc: "Without the right infrastructure, organizations experience downtime, performance issues, security risks, and operational disruptions. We help build technology environments that support productivity and resilience.",
        icon: ShieldCheck,
      },
    ],
    challengesTitle: "Common Infrastructure Challenges",
    challenges: [
      {
        title: "Aging Servers & Latency",
        desc: "Aging servers and slow network performance impact productivity, customer service, and overall application speed.",
        icon: Server,
        color: "from-blue-500 to-indigo-600",
      },
      {
        title: "System Downtime & Access",
        desc: "Frequent system downtime and inconsistent remote access prevent employees from securely reaching business applications.",
        icon: Clock,
        color: "from-cyan-500 to-blue-600",
      },
      {
        title: "Limited Scalability",
        desc: "Fragmented networks and outdated architectures struggle to scale alongside expanding corporate branches and new users.",
        icon: Database,
        color: "from-indigo-500 to-purple-600",
      },
      {
        title: "Weak Security Controls",
        desc: "Inadequate firewalls and poor remote connection security leave critical transaction data exposed to hacker threats.",
        icon: Lock,
        color: "from-emerald-500 to-teal-600",
      },
      {
        title: "Backup & Recovery Gaps",
        desc: "Lack of automated backup systems and disaster recovery plans risks physical or cloud database loss.",
        icon: ShieldCheck,
        color: "from-amber-500 to-orange-600",
      },
      {
        title: "Maintenance & Cloud Risk",
        desc: "Rising IT maintenance costs paired with cloud migration uncertainty make modernization difficult to execute.",
        icon: Coins,
        color: "from-pink-500 to-rose-600",
      },
    ],
    flowTitle: "Infrastructure Architecture",
    flowSteps: [
      {
        id: "internet",
        label: "Internet",
        title: "Secure User Requests",
        desc: "Staff requests are routed securely via web browsers or client connections through CDN routes.",
      },
      {
        id: "firewall",
        label: "Firewall",
        title: "Access Inspection",
        desc: "Web Application Firewalls inspect traffic, blocking SQL injections and brute force intrusion attempts.",
      },
      {
        id: "loadbalancer",
        label: "Load Balancer",
        title: "Traffic Distribution",
        desc: "Directs incoming connections to active virtual web application servers to optimize speeds.",
      },
      {
        id: "appserver",
        label: "App Server",
        title: "Process Processing",
        desc: "Compute nodes execute application logic, running ERP tasks and routing operations queries.",
      },
      {
        id: "database",
        label: "Database",
        title: "Persistent Storage",
        desc: "Highly secure, isolated database engines (like SAP HANA) store transactional business data.",
      },
      {
        id: "backup",
        label: "Backup",
        title: "Snapshot Redundancy",
        desc: "System auto-generates encrypted database backups daily and copies them to secondary cloud facilities.",
      },
      {
        id: "storage",
        label: "Cloud Storage",
        title: "File Operations",
        desc: "Static documents (like PDFs, attachments, logos) are archived in durable, scalable cloud buckets.",
      },
    ],
    modulesTitle: "Our Cloud & Infrastructure Services",
    modules: [
      {
        title: "Cloud Consulting & Migration",
        desc: "Plan and execute cloud migration strategies that improve flexibility, scalability, and cost efficiency while minimizing operational disruption.",
        icon: Rocket,
        color: "text-rose-600",
        bgColor: "bg-rose-50/50",
      },
      {
        title: "Cloud Hosting",
        desc: "Fully managed Azure or AWS cloud servers optimized for ERP performance.",
        icon: Server,
        color: "text-blue-600",
        bgColor: "bg-blue-50/50",
      },
      {
        title: "Cybersecurity",
        desc: "Multi-factor authentication, endpoint antivirus tools, and intrusion warning platforms.",
        icon: Lock,
        color: "text-indigo-600",
        bgColor: "bg-indigo-50/50",
      },
      {
        title: "Disaster Recovery",
        desc: "Failover setups copy data changes continuously to avoid data loss.",
        icon: Database,
        color: "text-pink-600",
        bgColor: "bg-pink-50/50",
      },
      {
        title: "Network Design",
        desc: "Establishing fast corporate VPNs, subnet routing, and secure cloud networking.",
        icon: Globe,
        color: "text-cyan-600",
        bgColor: "bg-cyan-50/50",
      },
    ],
    whyAlleTechTitle: "Business Outcomes That Matter",
    whyAlleTechItems: [
      {
        title: "Continuity & Risk Reduction",
        desc: "Improve business continuity and reduce operational downtime through reliable infrastructure, redundancy, and disaster recovery planning.",
        icon: ShieldCheck,
      },
      {
        title: "Security & Protection",
        desc: "Protect your business with modern security architecture, access controls, firewalls, endpoint protection, and secure remote connectivity.",
        icon: Lock,
      },
      {
        title: "Workforce Productivity",
        desc: "Provide employees with fast, reliable, and secure access to business applications from any location, optimizing performance.",
        icon: Users,
      },
      {
        title: "Scalable Business Growth",
        desc: "Deploy scalable infrastructure capable of supporting new users, branches, cloud services, and expanding operations.",
        icon: Rocket,
      },
    ],
    faqsTitle: "Cloud Infrastructure FAQs",
    faqs: [
      {
        question: "Should we move to the cloud or stay on-premise?",
        answer:
          "It depends on your security requirements, budget, and team access needs. We assess your infrastructure and recommend the optimal mix — many midmarket companies benefit from hybrid cloud setups that balance cost with data control.",
      },
      {
        question: "What cloud providers do you work with?",
        answer:
          "We deploy on Microsoft Azure, Amazon Web Services (AWS), and Google Cloud Platform (GCP). Provider selection is based on your existing ecosystem, ERP requirements, and compliance standards.",
      },
      {
        question: "How do you handle disaster recovery?",
        answer:
          "We configure automated daily backups, cross-region replication, and failover clusters. Recovery Point Objectives (RPO) and Recovery Time Objectives (RTO) are agreed upon during the discovery phase and tested quarterly.",
      },
      {
        question: "What is your uptime guarantee?",
        answer:
          "We target 99.9% uptime for production environments through redundant load balancers, auto-scaling groups, and proactive server health monitoring with 24/7 alerting.",
      },
    ],
  },
  {
    id: "managed-services",
    heroTitle: "Managed Services & Technology Support",
    heroSubtitle:
      "Proactive Support. Continuous Improvement. Long-Term Partnership.",
    heroImage:
      "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=1920&q=80",
    whyTitle: "Protect Your Technology Investment",
    whyItems: [
      {
        title: "What is Managed Services?",
        desc: "Our Managed Services are designed to ensure your business systems remain secure, reliable, efficient, and aligned with your strategic objectives—long after implementation is complete.",
        icon: ShieldCheck,
      },
      {
        title: "Maximize Investment",
        desc: "Enterprise technology is one of your organization's most valuable investments. Without proper support, even the best systems can gradually become inefficient, leading to reduced productivity.",
        icon: Coins,
      },
      {
        title: "Proactive Prevention",
        desc: "We help organizations maximize the value of their technology by providing continuous monitoring, optimization, user support, and strategic guidance. We don't simply fix problems—we help prevent them.",
        icon: CheckCircle2,
      },
    ],
    challengesTitle: "Common Challenges After Go-Live",
    challenges: [
      {
        title: "ERP Expertise & User Adoption",
        desc: "Limited internal ERP expertise leads to poor user adoption and slow resolution of day-to-day user issues.",
        icon: Users,
        color: "from-blue-500 to-indigo-600",
      },
      {
        title: "Outdated Business Processes",
        desc: "Processes become inconsistent and opportunities for automation are missed as your business evolves.",
        icon: Clock,
        color: "from-cyan-500 to-blue-600",
      },
      {
        title: "System Optimization & Performance",
        desc: "Lack of database maintenance leads to performance degradation and slow response times over time.",
        icon: Database,
        color: "from-indigo-500 to-purple-600",
      },
      {
        title: "Missed Software Updates",
        desc: "Running outdated software versions poses security risks and misses out on new standard features.",
        icon: ShieldCheck,
        color: "from-emerald-500 to-teal-600",
      },
      {
        title: "Reporting & Analytics Challenges",
        desc: "Data gets out of sync, reports lose accuracy, and decision makers struggle to get clean, real-time insights.",
        icon: LineChart,
        color: "from-amber-500 to-orange-600",
      },
      {
        title: "Maintenance & Integration Gaps",
        desc: "Growing customization requirements and integration maintenance between ERP and third-party systems become difficult to manage.",
        icon: Layers,
        color: "from-pink-500 to-rose-600",
      },
    ],
    modulesTitle: "Our Managed Services",
    modules: [
      {
        title: "Functional Support",
        desc: "Expert assistance for finance, sales, purchasing, inventory, manufacturing, CRM, HR, warehouse, and other business processes.",
        icon: Users,
        color: "text-blue-600",
        bgColor: "bg-blue-50/50",
      },
      {
        title: "Technical Support",
        desc: "Troubleshooting, system diagnostics, performance optimization, configuration, and technical issue resolution.",
        icon: Terminal,
        color: "text-indigo-600",
        bgColor: "bg-indigo-50/50",
      },
      {
        title: "Application Management",
        desc: "Ongoing management of SAP Business One, Odoo ERP, Microsoft Power BI, integrations, and enterprise applications.",
        icon: Layers,
        color: "text-pink-600",
        bgColor: "bg-pink-50/50",
      },
      {
        title: "System Health Checks",
        desc: "Regular assessments that identify performance issues, configuration improvements, security recommendations, and optimization opportunities.",
        icon: ShieldCheck,
        color: "text-emerald-600",
        bgColor: "bg-emerald-50/50",
      },
      {
        title: "Version Upgrades",
        desc: "Plan and execute application upgrades while minimizing business disruption.",
        icon: Rocket,
        color: "text-rose-600",
        bgColor: "bg-rose-50/50",
      },
      {
        title: "Enhancement & Continuous Development",
        desc: "Introduce new features, automate processes, develop custom enhancements, and continuously improve your technology landscape.",
        icon: Settings,
        color: "text-purple-600",
        bgColor: "bg-purple-50/50",
      },
      {
        title: "Training & Knowledge Transfer",
        desc: "Provide ongoing training for new employees, refresher sessions for existing users, and advanced workshops.",
        icon: GraduationCap,
        color: "text-teal-600",
        bgColor: "bg-teal-50/50",
      },
      {
        title: "Managed Infrastructure Support",
        desc: "Coordinate infrastructure monitoring, backups, cloud environments, security updates, and IT operational support.",
        icon: Server,
        color: "text-blue-600",
        bgColor: "bg-blue-50/50",
      },
    ],
    lifecycleTitle: "The Continuous Improvement Cycle",
    lifecycle: [
      {
        phase: "Discover",
        title: "Identify Opportunities",
        desc: "Identify new opportunities to improve efficiency, strengthen reporting, and support business growth.",
        icon: Search,
      },
      {
        phase: "Analyze",
        title: "Operational Audits",
        desc: "Evaluate operational processes, system performance, and customization requirements to design updates.",
        icon: FileText,
      },
      {
        phase: "Optimize",
        title: "System Fine-Tuning",
        desc: "Rebuild indexes, tune query codes, and align configuration parameters to boost system speeds.",
        icon: Settings,
      },
      {
        phase: "Improve",
        title: "Targeted Enhancements",
        desc: "Implement workflow automation, modify layout prints, and customize dashboard views for end users.",
        icon: Sliders,
      },
      {
        phase: "Innovate",
        title: "Scalable Growth",
        desc: "Introduce new features, execute platform version upgrades, and integrate advanced AI modules.",
        icon: Rocket,
      },
    ],
    integrationsTitle: "Technologies We Support",
    integrations: [
      {
        name: "Enterprise Applications",
        desc: "SAP Business One • Odoo ERP",
        icon: Layers,
        color: "text-blue-500",
        border: "hover:border-blue-500/40",
      },
      {
        name: "Business Intelligence",
        desc: "Microsoft Power BI",
        icon: LineChart,
        color: "text-yellow-500",
        border: "hover:border-yellow-500/40",
      },
      {
        name: "Enterprise Integrations",
        desc: "APIs • Third-Party Systems • Banking • eCommerce • WMS • UAE E-Invoicing",
        icon: Zap,
        color: "text-indigo-500",
        border: "hover:border-indigo-500/40",
      },
      {
        name: "Cloud & Infrastructure",
        desc: "Microsoft Azure • AWS • Servers • Networks • Security • Backup & Recovery",
        icon: Server,
        color: "text-cyan-500",
        border: "hover:border-cyan-500/40",
      },
      {
        name: "Custom Solutions",
        desc: "RepProX • Freight Pulse • TransSync • Auto Mailer • Custom Applications",
        icon: Terminal,
        color: "text-purple-500",
        border: "hover:border-purple-500/40",
      },
    ],
    whyAlleTechTitle: "Why Organizations Choose ALLE TECH",
    whyAlleTechItems: [
      {
        title: "Dedicated Technology Specialists",
        desc: "Benefit from dedicated technology specialists providing trusted advisory services and long-term planning.",
        icon: Users,
      },
      {
        title: "Business-First Consulting",
        desc: "We combine technical expertise with a deep business understanding to deliver value-driven support.",
        icon: CheckCircle2,
      },
      {
        title: "Proactive Monitoring",
        desc: "Continuous system monitoring and optimization to prevent issues before they impact operations.",
        icon: ShieldCheck,
      },
      {
        title: "Agile & Reliable Execution",
        desc: "Fast response times coupled with ongoing innovation to act as an extension of your team.",
        icon: Clock,
      },
    ],
    faqsTitle: "Frequently Asked Questions",
    faqs: [
      {
        question: "Do you provide support only for systems you implemented?",
        answer:
          "No. We also support organizations with existing SAP Business One, Odoo, Power BI, integrations, and other business technology environments, even if they were implemented by another partner.",
      },
      {
        question: "Can you provide remote and on-site support?",
        answer:
          "Yes. We offer both remote and on-site support based on your service agreement and business requirements.",
      },
      {
        question: "Do you offer Service Level Agreements (SLAs)?",
        answer:
          "Yes. We provide flexible support agreements with defined response times, service levels, and ongoing account management to match your operational needs.",
      },
      {
        question: "Can Managed Services include continuous enhancements?",
        answer:
          "Absolutely. Our managed services can include process improvements, custom developments, new reports, dashboards, integrations, training, and optimization initiatives.",
      },
    ],
    ctaTitle: "A Long-Term Technology Partner You Can Rely On",
    ctaSubtitle:
      "Technology is not a one-time project. It is an ongoing journey of improvement, innovation, and growth. Let's maximize the value of your technology investment together.",
    ctaLabel: "Request Managed Services",
    ctaSecondaryLabel: "Speak with Our Support Team",
  },
];
