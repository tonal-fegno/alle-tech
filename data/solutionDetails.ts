import type { LucideIcon } from "lucide-react";
import {
  DollarSign,
  LayoutDashboard,
  TrendingUp,
  ShieldCheck,
  Package,
  Clock,
  BarChart3,
  ClipboardCheck,
  Building2,
  Users,
  Factory,
  Wrench,
  Smartphone,
  Search,
  Settings,
  Database,
  GraduationCap,
  LifeBuoy,
  Layers,
  Cog,
  RefreshCw,
  Rocket,
  CreditCard,
  Boxes,
  Globe,
  Target,
  Cpu,
  AlertTriangle,
  LineChart,
  PieChart,
  FileText,
  Plug,
  CheckCircle2,
  Truck,
  Network,
  Lock,
  Zap,
  Cloud,
  Server,
  Headphones,
} from "lucide-react";

export interface SolutionDetail {
  id: string;
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;

  whyTitle: string;
  whyItems: { title: string; desc: string; icon: LucideIcon }[];

  challengesTitle: string;
  challenges: { title: string; desc: string; icon: LucideIcon }[];

  modulesTitle: string;
  modules: { title: string; desc: string; icon: LucideIcon }[];

  lifecycleTitle?: string;
  lifecycle?: { phase: string; title: string; desc: string; icon: LucideIcon }[];

  industriesTitle?: string;
  industries?: {
    name: string;
    heading: string;
    desc: string;
    bullets: string[];
    image: string;
  }[];

  integrationsTitle?: string;
  integrations?: {
    name: string;
    desc: string;
    icon: LucideIcon;
    color: string;
    border: string;
  }[];

  whyAlleTechTitle?: string;
  whyAlleTechItems?: { title: string; desc: string; icon: LucideIcon }[];

  faqsTitle?: string;
  faqs?: { question: string; answer: string }[];

  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaLabel?: string;
  ctaSecondaryLabel?: string;
}

export const SOLUTION_DETAILS: SolutionDetail[] = [
  {
    id: "sap-business-one",
    heroImage: "/images/solutions/sap_one.png",
    heroTitle: "SAP Business One for Growing Enterprises",
    heroSubtitle:
      "One connected ERP for finance, sales, inventory, and production — built for businesses ready to scale beyond spreadsheets.",

    whyTitle: "Why SAP Business One Is the Enterprise Standard",
    whyItems: [
      {
        title: "Unified Financial Control",
        desc: "Real-time general ledger, multi-currency accounting, and automated reconciliation give finance teams a single source of truth.",
        icon: DollarSign,
      },
      {
        title: "End-to-End Visibility",
        desc: "Sales, purchasing, inventory, and production are connected in one system, so decisions are based on live data, not exports.",
        icon: LayoutDashboard,
      },
      {
        title: "Built to Scale",
        desc: "From a single warehouse to multi-entity operations, SAP Business One grows with your business without a platform switch.",
        icon: TrendingUp,
      },
      {
        title: "Global Track Record",
        desc: "Deployed by tens of thousands of small and mid-sized businesses worldwide, backed by SAP's long-term product roadmap.",
        icon: ShieldCheck,
      },
    ],

    challengesTitle: "Business Challenges SAP Business One Solves",
    challenges: [
      {
        title: "Disconnected Financial Data",
        desc: "Manual exports between accounting, sales, and inventory tools create reconciliation errors and delayed reporting.",
        icon: DollarSign,
      },
      {
        title: "No Real-Time Inventory Accuracy",
        desc: "Stock counts lag behind actual warehouse activity, leading to stockouts or overstocking.",
        icon: Package,
      },
      {
        title: "Slow Month-End Close",
        desc: "Finance teams spend days closing the books instead of hours because data lives in separate systems.",
        icon: Clock,
      },
      {
        title: "Limited Reporting Visibility",
        desc: "Leadership lacks a single dashboard to see sales, cash flow, and operations together.",
        icon: BarChart3,
      },
      {
        title: "Manual, Error-Prone Processes",
        desc: "Order entry, invoicing, and approvals rely on spreadsheets and email instead of automated workflows.",
        icon: ClipboardCheck,
      },
      {
        title: "Difficulty Scaling Operations",
        desc: "Legacy accounting software can't support multi-warehouse, multi-currency, or multi-entity growth.",
        icon: Building2,
      },
    ],

    modulesTitle: "Core SAP Business One Modules",
    modules: [
      {
        title: "Financial Management",
        desc: "General ledger, budgeting, banking, and multi-currency accounting in one module.",
        icon: DollarSign,
      },
      {
        title: "Sales & Customer Management",
        desc: "Quotes, orders, CRM, and opportunity tracking from first contact to invoice.",
        icon: Users,
      },
      {
        title: "Purchasing & Vendor Management",
        desc: "Purchase orders, vendor evaluation, and procurement approvals in a single workflow.",
        icon: ClipboardCheck,
      },
      {
        title: "Inventory & Warehouse",
        desc: "Real-time stock levels, bin locations, and multi-warehouse transfers.",
        icon: Package,
      },
      {
        title: "Production & MRP",
        desc: "Bills of materials, production orders, and material requirements planning.",
        icon: Factory,
      },
      {
        title: "Business Intelligence",
        desc: "Built-in Crystal Reports and Power BI integration for live operational insight.",
        icon: BarChart3,
      },
      {
        title: "Service Management",
        desc: "Track service calls, warranties, and customer equipment cards.",
        icon: Wrench,
      },
      {
        title: "Mobile & Cloud Access",
        desc: "Approve orders and view dashboards from anywhere via SAP mobile apps.",
        icon: Smartphone,
      },
    ],

    lifecycleTitle: "Our SAP Business One Implementation Methodology",
    lifecycle: [
      {
        phase: "Discovery",
        title: "Discovery & Process Assessment",
        desc: "We map your current financial, sales, and operational processes to define scope and success criteria.",
        icon: Search,
      },
      {
        phase: "Design",
        title: "Solution Design & Configuration",
        desc: "SAP Business One is configured to match your chart of accounts, approval flows, and reporting needs.",
        icon: Settings,
      },
      {
        phase: "Migration",
        title: "Data Migration & Integration",
        desc: "Historical financial and operational data is migrated and validated; third-party systems are connected.",
        icon: Database,
      },
      {
        phase: "Training",
        title: "Testing & Training",
        desc: "End users are trained on real workflows, with UAT sign-off before go-live.",
        icon: GraduationCap,
      },
      {
        phase: "Go-Live",
        title: "Go-Live & Support",
        desc: "We provide hypercare support at launch, then transition to ongoing managed services.",
        icon: LifeBuoy,
      },
    ],

    faqsTitle: "SAP Business One FAQs",
    faqs: [
      {
        question: "How long does a SAP Business One implementation take?",
        answer:
          "Most single-entity implementations go live in 10–16 weeks, depending on customization, integrations, and data complexity.",
      },
      {
        question: "Is SAP Business One suitable for our company size?",
        answer:
          "SAP Business One is purpose-built for small and mid-sized businesses, typically 10 to 500 employees, though it scales well beyond that.",
      },
      {
        question: "Can SAP Business One be customized for our industry?",
        answer:
          "Yes. Through add-ons and configuration, SAP Business One is tailored to distribution, manufacturing, retail, and service business models.",
      },
      {
        question: "Do you provide support after go-live?",
        answer:
          "Yes. We provide hypercare in the first weeks after launch, followed by ongoing managed services and version upgrades.",
      },
    ],
  },

  {
    id: "odoo-erp",
    heroImage: "/images/solutions/odoo.png",
    heroTitle: "Odoo ERP for Flexible, Connected Operations",
    heroSubtitle:
      "One open, modular platform for finance, sales, inventory, and HR — configured around how your business actually works.",

    whyTitle: "Why Odoo Is Built for Fast-Moving Businesses",
    whyItems: [
      {
        title: "Modular by Design",
        desc: "Start with the apps you need — Sales, Inventory, Accounting — and add more as you grow, without re-platforming.",
        icon: Layers,
      },
      {
        title: "Highly Configurable",
        desc: "Workflows, approvals, and views are adapted to your processes instead of forcing you into rigid templates.",
        icon: Settings,
      },
      {
        title: "Lower Total Cost of Ownership",
        desc: "Open architecture and flexible licensing keep implementation and maintenance costs predictable.",
        icon: DollarSign,
      },
      {
        title: "Fast Time to Value",
        desc: "Pre-built apps and integrations mean shorter implementation timelines than traditional ERP platforms.",
        icon: Rocket,
      },
    ],

    challengesTitle: "Business Challenges Odoo ERP Solves",
    challenges: [
      {
        title: "Siloed Departments",
        desc: "Sales, inventory, and accounting run on separate tools that don't talk to each other.",
        icon: Boxes,
      },
      {
        title: "Rigid Legacy Systems",
        desc: "Existing software can't be configured to match how your team actually works.",
        icon: Cog,
      },
      {
        title: "Manual Data Re-Entry",
        desc: "Staff re-key the same order or customer data across multiple disconnected systems.",
        icon: RefreshCw,
      },
      {
        title: "Limited Growth Flexibility",
        desc: "Adding a new business line or location means expensive custom development.",
        icon: TrendingUp,
      },
      {
        title: "Poor Customer Visibility",
        desc: "Sales and support teams don't have a unified view of customer orders and history.",
        icon: Users,
      },
      {
        title: "High Software Costs",
        desc: "Traditional ERP licensing scales poorly as headcount and transaction volume grow.",
        icon: CreditCard,
      },
    ],

    modulesTitle: "Core Odoo Apps We Implement",
    modules: [
      {
        title: "Accounting & Invoicing",
        desc: "Automated billing, bank reconciliation, and real-time financial reporting.",
        icon: DollarSign,
      },
      {
        title: "Sales & CRM",
        desc: "Pipeline management, quotations, and order tracking in one workspace.",
        icon: Users,
      },
      {
        title: "Inventory & Warehouse",
        desc: "Multi-warehouse stock control with barcode scanning and automated replenishment.",
        icon: Package,
      },
      {
        title: "Manufacturing (MRP)",
        desc: "Bills of materials, work orders, and production planning.",
        icon: Factory,
      },
      {
        title: "Purchasing",
        desc: "Vendor pricing, purchase agreements, and automated reorder rules.",
        icon: ClipboardCheck,
      },
      {
        title: "HR & Payroll",
        desc: "Employee records, time off, and payroll processing in a connected module.",
        icon: Users,
      },
      {
        title: "eCommerce",
        desc: "Native online store integration synced with inventory and orders.",
        icon: Globe,
      },
      {
        title: "Project Management",
        desc: "Task tracking, timesheets, and project profitability reporting.",
        icon: Target,
      },
    ],

    lifecycleTitle: "Our Odoo Implementation Approach",
    lifecycle: [
      {
        phase: "Discovery",
        title: "Discovery & Scoping",
        desc: "We identify which Odoo apps map to your workflows and define a phased rollout plan.",
        icon: Search,
      },
      {
        phase: "Configuration",
        title: "Configuration & Customization",
        desc: "Apps are configured, and where needed, custom modules are developed for unique requirements.",
        icon: Settings,
      },
      {
        phase: "Migration",
        title: "Data Migration",
        desc: "Customer, product, and financial data is migrated and validated against your legacy system.",
        icon: Database,
      },
      {
        phase: "Training",
        title: "Training & UAT",
        desc: "Teams are trained app-by-app, with structured user acceptance testing before go-live.",
        icon: GraduationCap,
      },
      {
        phase: "Go-Live",
        title: "Go-Live & Optimization",
        desc: "We support the transition and continuously refine workflows post-launch.",
        icon: LifeBuoy,
      },
    ],

    integrationsTitle: "Connect Odoo to Your Existing Tools",
    integrations: [
      {
        name: "eCommerce Platforms",
        desc: "Sync products, orders, and stock levels with your online storefront in real time.",
        icon: Globe,
        color: "text-blue-600",
        border: "border-blue-500",
      },
      {
        name: "Banking & Payments",
        desc: "Automated bank feeds and payment gateway integration for faster reconciliation.",
        icon: CreditCard,
        color: "text-emerald-600",
        border: "border-emerald-500",
      },
      {
        name: "Shipping & Logistics",
        desc: "Connect carriers and warehouses for automated label generation and tracking.",
        icon: Truck,
        color: "text-orange-600",
        border: "border-orange-500",
      },
      {
        name: "Third-Party APIs",
        desc: "Custom API connections to CRMs, marketplaces, and internal tools.",
        icon: Plug,
        color: "text-indigo-600",
        border: "border-indigo-500",
      },
    ],

    faqsTitle: "Odoo ERP FAQs",
    faqs: [
      {
        question: "How long does an Odoo implementation take?",
        answer:
          "Most single-entity implementations go live in 8–14 weeks, depending on the number of apps and level of customization required.",
      },
      {
        question: "Can Odoo replace multiple existing tools?",
        answer:
          "Yes. Odoo commonly replaces separate accounting, CRM, inventory, and HR tools with one connected system, reducing licensing overhead.",
      },
      {
        question: "Is our data safe during migration?",
        answer:
          "We run parallel validation between your legacy system and Odoo before cutover, so financial and operational data is verified before go-live.",
      },
      {
        question: "Do you offer support after go-live?",
        answer:
          "Yes. We provide hypercare in the first weeks after launch, followed by ongoing managed support and optimization.",
      },
    ],
  },

  {
    id: "technology-consulting",
    heroImage: "/images/solutions/technology.png",
    heroTitle: "Technology Consulting & Digital Transformation",
    heroSubtitle:
      "Practical strategy and hands-on execution to modernize operations, automate manual work, and prepare your business for what's next.",

    whyTitle: "Why Businesses Choose Us as Their Technology Partner",
    whyItems: [
      {
        title: "Business-First Strategy",
        desc: "We start with your goals and constraints, not a pre-set technology stack.",
        icon: Target,
      },
      {
        title: "Vendor-Neutral Advice",
        desc: "Recommendations are based on fit, not partnership incentives — we implement what's right for you.",
        icon: ShieldCheck,
      },
      {
        title: "Execution, Not Just Slides",
        desc: "Strategy is followed by hands-on implementation, so roadmaps actually get delivered.",
        icon: Rocket,
      },
      {
        title: "Cross-Industry Experience",
        desc: "Practical experience across distribution, manufacturing, retail, and services informs every recommendation.",
        icon: Building2,
      },
    ],

    challengesTitle: "Business Challenges We Help You Solve",
    challenges: [
      {
        title: "Unclear Technology Roadmap",
        desc: "Leadership isn't sure which systems to invest in next, or in what order.",
        icon: Target,
      },
      {
        title: "Fragmented Systems",
        desc: "Years of point solutions have created a patchwork of disconnected tools.",
        icon: Boxes,
      },
      {
        title: "Manual, Repetitive Work",
        desc: "Staff spend hours on tasks that could be automated, slowing down growth.",
        icon: RefreshCw,
      },
      {
        title: "Low Technology Adoption",
        desc: "Past software rollouts stalled because teams weren't properly onboarded.",
        icon: Users,
      },
      {
        title: "Data You Can't Trust",
        desc: "Reports from different systems don't agree, making decisions harder.",
        icon: AlertTriangle,
      },
      {
        title: "Uncertain AI Readiness",
        desc: "Leadership wants to use AI and automation but isn't sure where to start safely.",
        icon: Cpu,
      },
    ],

    modulesTitle: "How We Help You Transform",
    modules: [
      {
        title: "Digital Transformation Strategy",
        desc: "A prioritized roadmap aligned to business goals, budget, and timeline.",
        icon: Target,
      },
      {
        title: "Business Process Assessment",
        desc: "We map current-state workflows to find automation and efficiency opportunities.",
        icon: ClipboardCheck,
      },
      {
        title: "ERP & Systems Advisory",
        desc: "Vendor-neutral guidance on selecting or upgrading core business systems.",
        icon: Layers,
      },
      {
        title: "AI Readiness & Automation",
        desc: "Practical AI use cases identified and piloted where they deliver real value.",
        icon: Cpu,
      },
      {
        title: "Digital Maturity Assessment",
        desc: "A benchmark of where you stand today and what to prioritize next.",
        icon: BarChart3,
      },
      {
        title: "Executive Technology Advisory",
        desc: "Ongoing strategic guidance for leadership on technology investment decisions.",
        icon: Users,
      },
    ],

    lifecycleTitle: "Our Advisory & Delivery Methodology",
    lifecycle: [
      {
        phase: "Assess",
        title: "Current-State Assessment",
        desc: "We evaluate systems, processes, and data to establish a clear baseline.",
        icon: Search,
      },
      {
        phase: "Define",
        title: "Roadmap & Prioritization",
        desc: "Initiatives are prioritized by business impact, cost, and feasibility.",
        icon: Target,
      },
      {
        phase: "Design",
        title: "Solution Design",
        desc: "Detailed designs are built for the highest-priority initiatives.",
        icon: Settings,
      },
      {
        phase: "Deliver",
        title: "Implementation",
        desc: "We execute the roadmap in phased, measurable releases.",
        icon: Rocket,
      },
      {
        phase: "Sustain",
        title: "Continuous Improvement",
        desc: "Ongoing advisory keeps the roadmap current as the business evolves.",
        icon: RefreshCw,
      },
    ],

    faqsTitle: "Technology Consulting FAQs",
    faqs: [
      {
        question: "Do you recommend specific software vendors?",
        answer:
          "No. Our recommendations are vendor-neutral and based on what fits your business, budget, and existing systems.",
      },
      {
        question: "How long does a digital transformation roadmap take to build?",
        answer:
          "A typical assessment and roadmap takes 3–6 weeks, depending on the number of departments and systems involved.",
      },
      {
        question: "Do you implement the roadmap yourselves?",
        answer:
          "Yes. We combine strategy with hands-on implementation across ERP, BI, integrations, and cloud, so recommendations actually get delivered.",
      },
      {
        question: "Is this only for large enterprises?",
        answer:
          "No. We work with small and mid-sized businesses as often as larger organizations, scaling the engagement to fit your size and budget.",
      },
    ],
  },

  {
    id: "business-intelligence",
    heroImage: "/images/solutions/power_bi.png",
    heroTitle: "Business Intelligence & Power BI",
    heroSubtitle:
      "Turn scattered spreadsheets and disconnected systems into live dashboards your team can actually trust and act on.",

    whyTitle: "Why Live Dashboards Beat Static Reports",
    whyItems: [
      {
        title: "Real-Time Decision Making",
        desc: "Dashboards refresh automatically, so leadership acts on current data, not last month's export.",
        icon: LineChart,
      },
      {
        title: "One Source of Truth",
        desc: "Data from finance, sales, and operations is unified, eliminating conflicting reports.",
        icon: Database,
      },
      {
        title: "Self-Service Analytics",
        desc: "Teams explore their own data without waiting on IT to build a new report.",
        icon: Search,
      },
      {
        title: "Built on Microsoft Power BI",
        desc: "Enterprise-grade, secure, and integrates natively with your existing Microsoft stack.",
        icon: ShieldCheck,
      },
    ],

    challengesTitle: "Business Challenges Business Intelligence Solves",
    challenges: [
      {
        title: "Manual Spreadsheet Reporting",
        desc: "Analysts spend days compiling reports that are outdated the moment they're sent.",
        icon: FileText,
      },
      {
        title: "Conflicting Numbers",
        desc: "Sales, finance, and operations each report different figures for the same metric.",
        icon: AlertTriangle,
      },
      {
        title: "No Real-Time Visibility",
        desc: "Leadership can't see performance until the monthly close is finished.",
        icon: Clock,
      },
      {
        title: "Data Trapped in Silos",
        desc: "Critical data lives in separate systems that were never connected.",
        icon: Boxes,
      },
      {
        title: "Slow, Ad-Hoc Requests",
        desc: "Every new report request means another wait on a busy IT or finance team.",
        icon: RefreshCw,
      },
      {
        title: "Limited Forecasting Ability",
        desc: "Without historical trend visibility, planning relies on guesswork.",
        icon: TrendingUp,
      },
    ],

    modulesTitle: "What We Build",
    modules: [
      {
        title: "BI Strategy & Data Modeling",
        desc: "A governed data model that ties every dashboard back to a single source of truth.",
        icon: Database,
      },
      {
        title: "Power BI Dashboard Development",
        desc: "Interactive, drill-down dashboards tailored to each department's needs.",
        icon: BarChart3,
      },
      {
        title: "KPI & Executive Reporting",
        desc: "Board-ready scorecards tracking the metrics leadership actually cares about.",
        icon: Target,
      },
      {
        title: "Data Integration",
        desc: "Automated pipelines pulling data from ERP, CRM, and other core systems.",
        icon: Plug,
      },
      {
        title: "Financial & Operational Analytics",
        desc: "Deep-dive reporting on margins, cash flow, inventory, and operational efficiency.",
        icon: PieChart,
      },
      {
        title: "Custom BI Solutions",
        desc: "Bespoke analytics for unique reporting requirements not covered by standard dashboards.",
        icon: Settings,
      },
    ],

    lifecycleTitle: "Our BI Delivery Approach",
    lifecycle: [
      {
        phase: "Discover",
        title: "Requirements & Data Audit",
        desc: "We identify key metrics and audit source data quality and availability.",
        icon: Search,
      },
      {
        phase: "Model",
        title: "Data Modeling",
        desc: "A clean, governed data model is built to support accurate, consistent reporting.",
        icon: Database,
      },
      {
        phase: "Build",
        title: "Dashboard Development",
        desc: "Interactive Power BI dashboards are built and reviewed with stakeholders.",
        icon: BarChart3,
      },
      {
        phase: "Validate",
        title: "Testing & Sign-Off",
        desc: "Numbers are validated against source systems before rollout.",
        icon: CheckCircle2,
      },
      {
        phase: "Adopt",
        title: "Training & Rollout",
        desc: "Teams are trained to read, filter, and act on their new dashboards.",
        icon: GraduationCap,
      },
    ],

    faqsTitle: "Business Intelligence FAQs",
    faqs: [
      {
        question: "Do we need to clean our data first?",
        answer:
          "Not necessarily — data cleansing and modeling are part of our process, so messy source data doesn't block the project.",
      },
      {
        question: "Which systems can Power BI connect to?",
        answer:
          "Power BI connects to most ERP, CRM, accounting, and database systems, including SAP Business One and Odoo.",
      },
      {
        question: "How often do dashboards refresh?",
        answer:
          "Refresh schedules are configurable, from real-time streaming to daily or hourly refreshes depending on the data source.",
      },
      {
        question: "Can we still export to Excel?",
        answer:
          "Yes. Power BI dashboards support Excel export for teams that need to do further offline analysis.",
      },
    ],
  },

  {
    id: "erp-integration",
    heroImage: "/images/solutions/erp.png",
    heroTitle: "ERP Integration & Enterprise Connectivity",
    heroSubtitle:
      "Connect your ERP with eCommerce, CRM, banking, and logistics platforms to eliminate manual data entry and delays.",

    whyTitle: "Why Enterprise Connectivity Matters",
    whyItems: [
      {
        title: "No More Double Entry",
        desc: "Data flows automatically between systems, eliminating manual re-keying and errors.",
        icon: RefreshCw,
      },
      {
        title: "Real-Time Data Sync",
        desc: "Orders, inventory, and payments update across systems the moment they happen.",
        icon: Zap,
      },
      {
        title: "Built on Secure Standards",
        desc: "Integrations use secure API keys and standard middleware for reliable, auditable connections.",
        icon: Lock,
      },
      {
        title: "Future-Proof Architecture",
        desc: "Integrations are built to survive vendor updates without breaking your workflows.",
        icon: ShieldCheck,
      },
    ],

    challengesTitle: "Business Challenges ERP Integration Solves",
    challenges: [
      {
        title: "Manual Data Re-Entry",
        desc: "Staff manually copy orders between your webstore, ERP, and accounting systems.",
        icon: RefreshCw,
      },
      {
        title: "Delayed Order Processing",
        desc: "Orders sit unprocessed until someone manually transfers them into the ERP.",
        icon: Clock,
      },
      {
        title: "Inventory Mismatches",
        desc: "Stock levels differ between your ERP and sales channels, causing overselling.",
        icon: Package,
      },
      {
        title: "Disconnected Customer Data",
        desc: "Sales, support, and finance teams each see a different version of the customer record.",
        icon: Users,
      },
      {
        title: "Slow Financial Reconciliation",
        desc: "Payments and banking data must be manually matched against ERP records.",
        icon: CreditCard,
      },
      {
        title: "Fragile Point-to-Point Scripts",
        desc: "Ad-hoc scripts break every time a connected system updates.",
        icon: AlertTriangle,
      },
    ],

    modulesTitle: "Integration Services We Provide",
    modules: [
      {
        title: "ERP & CRM Integration",
        desc: "Sync customer, order, and opportunity data between your ERP and CRM.",
        icon: Users,
      },
      {
        title: "Warehouse & Logistics Integration",
        desc: "Connect carriers and warehouse systems for automated fulfillment.",
        icon: Truck,
      },
      {
        title: "eCommerce Integration",
        desc: "Real-time sync of products, orders, and stock with your online store.",
        icon: Globe,
      },
      {
        title: "Banking & Payment Integration",
        desc: "Automated bank feeds and payment reconciliation.",
        icon: CreditCard,
      },
      {
        title: "API Development",
        desc: "Custom, secure APIs for systems without native integration support.",
        icon: Plug,
      },
      {
        title: "Custom Enterprise Integrations",
        desc: "Bespoke connections between legacy and modern systems, however complex.",
        icon: Network,
      },
    ],

    lifecycleTitle: "Our Integration Delivery Process",
    lifecycle: [
      {
        phase: "Map",
        title: "Systems & Data Mapping",
        desc: "We document every system involved and how data should flow between them.",
        icon: Search,
      },
      {
        phase: "Design",
        title: "Integration Architecture",
        desc: "A secure, resilient integration design is built around API standards and middleware.",
        icon: Settings,
      },
      {
        phase: "Build",
        title: "Development & Configuration",
        desc: "Integrations are developed and configured against a staging environment.",
        icon: Cog,
      },
      {
        phase: "Test",
        title: "End-to-End Testing",
        desc: "Data flows are tested across every connected system before go-live.",
        icon: CheckCircle2,
      },
      {
        phase: "Monitor",
        title: "Go-Live & Monitoring",
        desc: "Integrations are monitored post-launch, with alerting for any sync failures.",
        icon: LifeBuoy,
      },
    ],

    integrationsTitle: "Systems We Commonly Connect",
    integrations: [
      {
        name: "eCommerce Platforms",
        desc: "Real-time product, order, and inventory sync with your online store.",
        icon: Globe,
        color: "text-blue-600",
        border: "border-blue-500",
      },
      {
        name: "Banking & Payment Gateways",
        desc: "Automated reconciliation between payments and your ERP ledger.",
        icon: CreditCard,
        color: "text-emerald-600",
        border: "border-emerald-500",
      },
      {
        name: "Warehouse & Logistics",
        desc: "Connect 3PLs and carriers for automated fulfillment and tracking.",
        icon: Truck,
        color: "text-orange-600",
        border: "border-orange-500",
      },
      {
        name: "CRM & Marketing Platforms",
        desc: "Keep customer and opportunity data consistent across sales and marketing tools.",
        icon: Users,
        color: "text-indigo-600",
        border: "border-indigo-500",
      },
    ],

    faqsTitle: "ERP Integration FAQs",
    faqs: [
      {
        question: "Can you integrate with systems that don't have an API?",
        answer:
          "In most cases, yes — we use middleware or custom connectors to bridge systems without native APIs.",
      },
      {
        question: "How do you keep integrations secure?",
        answer:
          "All integrations use secure API keys, encrypted connections, and standard middleware, with access scoped to only what's required.",
      },
      {
        question: "What happens if a connected system goes down?",
        answer:
          "Integrations are built with monitoring and alerting, and queued data is retried automatically once the system is back online.",
      },
      {
        question: "Can integrations scale with transaction volume?",
        answer:
          "Yes. Integrations are architected to handle growing order and data volumes without redevelopment.",
      },
    ],
  },

  {
    id: "cloud-infrastructure",
    heroImage: "/images/solutions/cloud_it.png",
    heroTitle: "Cloud & IT Infrastructure Services",
    heroSubtitle:
      "Secure, scalable infrastructure across Azure, AWS, and private environments — built for uptime, not just cost savings.",

    whyTitle: "Why Businesses Trust Us With Their Infrastructure",
    whyItems: [
      {
        title: "Built for Business Continuity",
        desc: "Architectures are designed around uptime and disaster recovery, not just lowest cost.",
        icon: ShieldCheck,
      },
      {
        title: "Multi-Cloud Expertise",
        desc: "We design and manage environments across Azure, AWS, and private infrastructure.",
        icon: Cloud,
      },
      {
        title: "Security-First Approach",
        desc: "Cybersecurity is built into every layer, from network design to backup strategy.",
        icon: Lock,
      },
      {
        title: "Proactive, Not Reactive",
        desc: "Continuous monitoring catches issues before they become outages.",
        icon: Zap,
      },
    ],

    challengesTitle: "Business Challenges Cloud & Infrastructure Services Solve",
    challenges: [
      {
        title: "Unplanned Downtime",
        desc: "Outages disrupt operations because infrastructure lacks redundancy.",
        icon: AlertTriangle,
      },
      {
        title: "Unclear Cloud Costs",
        desc: "Cloud spend grows unpredictably without governance or optimization.",
        icon: CreditCard,
      },
      {
        title: "Weak Security Posture",
        desc: "Systems are exposed to risk without proper network segmentation and monitoring.",
        icon: Lock,
      },
      {
        title: "No Disaster Recovery Plan",
        desc: "A single failure could mean permanent data loss without tested backups.",
        icon: RefreshCw,
      },
      {
        title: "Aging On-Premise Hardware",
        desc: "Legacy servers are costly to maintain and increasingly unreliable.",
        icon: Server,
      },
      {
        title: "Limited IT Capacity",
        desc: "Internal teams are stretched too thin to manage infrastructure proactively.",
        icon: Users,
      },
    ],

    modulesTitle: "Cloud & Infrastructure Services We Provide",
    modules: [
      {
        title: "Cloud Consulting & Migration",
        desc: "Assessment and migration of workloads to Azure, AWS, or hybrid environments.",
        icon: Cloud,
      },
      {
        title: "Cloud Hosting & Infrastructure",
        desc: "Managed hosting environments sized and secured for your workloads.",
        icon: Server,
      },
      {
        title: "Network Design & Implementation",
        desc: "Resilient, segmented network architecture built for performance and security.",
        icon: Network,
      },
      {
        title: "Cybersecurity Solutions",
        desc: "Firewalls, endpoint protection, and monitoring to reduce risk exposure.",
        icon: ShieldCheck,
      },
      {
        title: "Backup & Disaster Recovery",
        desc: "Tested backup strategies and recovery plans to minimize downtime.",
        icon: RefreshCw,
      },
      {
        title: "Managed Infrastructure Services",
        desc: "Ongoing monitoring, patching, and support for your entire environment.",
        icon: Cog,
      },
    ],

    lifecycleTitle: "Our Cloud & Infrastructure Delivery Process",
    lifecycle: [
      {
        phase: "Assess",
        title: "Infrastructure Audit",
        desc: "We assess current infrastructure, risk exposure, and cloud readiness.",
        icon: Search,
      },
      {
        phase: "Design",
        title: "Architecture Design",
        desc: "A secure, scalable architecture is designed around your workloads and budget.",
        icon: Settings,
      },
      {
        phase: "Migrate",
        title: "Migration & Setup",
        desc: "Workloads are migrated with minimal disruption to daily operations.",
        icon: Cloud,
      },
      {
        phase: "Secure",
        title: "Security Hardening",
        desc: "Network, endpoint, and access controls are configured and tested.",
        icon: Lock,
      },
      {
        phase: "Support",
        title: "Ongoing Management",
        desc: "We provide continuous monitoring, patching, and managed support.",
        icon: LifeBuoy,
      },
    ],

    faqsTitle: "Cloud & Infrastructure FAQs",
    faqs: [
      {
        question: "Should we move fully to the cloud or stay hybrid?",
        answer:
          "It depends on your workloads and compliance needs — we assess this during the infrastructure audit and recommend the right fit, not a one-size-fits-all answer.",
      },
      {
        question: "How do you handle disaster recovery?",
        answer:
          "We design and test backup and recovery plans with defined recovery time objectives, so you know exactly how quickly systems can be restored.",
      },
      {
        question: "Will migration cause downtime?",
        answer:
          "Migrations are planned and executed to minimize disruption, often during low-traffic windows, with rollback plans in place.",
      },
      {
        question: "Do you provide 24/7 monitoring?",
        answer:
          "Yes, our managed infrastructure services include continuous monitoring and alerting for critical systems.",
      },
    ],
  },

  {
    id: "managed-services",
    heroImage: "/images/solutions/services_support.png",
    heroTitle: "Managed Services & Technology Support",
    heroSubtitle:
      "Keep your ERP, cloud, and core applications running at peak performance with proactive support that prevents problems, not just fixes them.",

    whyTitle: "Why Businesses Rely on Our Managed Services",
    whyItems: [
      {
        title: "Proactive, Not Reactive",
        desc: "System health checks catch issues before they impact your business.",
        icon: Zap,
      },
      {
        title: "Single Point of Accountability",
        desc: "One partner manages functional, technical, and infrastructure support instead of juggling multiple vendors.",
        icon: ShieldCheck,
      },
      {
        title: "Faster Issue Resolution",
        desc: "Dedicated support channels mean less downtime waiting on tickets.",
        icon: Clock,
      },
      {
        title: "Continuous Optimization",
        desc: "We don't just maintain systems — we improve them over time.",
        icon: TrendingUp,
      },
    ],

    challengesTitle: "Business Challenges Managed Services Solve",
    challenges: [
      {
        title: "Slow Support Response",
        desc: "Support tickets sit unanswered, and small issues turn into business disruptions.",
        icon: Clock,
      },
      {
        title: "No Proactive Monitoring",
        desc: "Problems are discovered only after they've already affected users.",
        icon: AlertTriangle,
      },
      {
        title: "Underused System Investment",
        desc: "Your ERP or platform isn't being optimized, so you're not getting full value from it.",
        icon: TrendingUp,
      },
      {
        title: "Fragmented Vendor Support",
        desc: "Different vendors manage different parts of your stack, with no single owner.",
        icon: Boxes,
      },
      {
        title: "Outdated Systems",
        desc: "Version upgrades and patches are delayed, increasing risk and technical debt.",
        icon: RefreshCw,
      },
      {
        title: "Limited Internal IT Capacity",
        desc: "Internal teams can't keep up with day-to-day support alongside strategic projects.",
        icon: Users,
      },
    ],

    modulesTitle: "Managed Services We Provide",
    modules: [
      {
        title: "Functional & Technical Support",
        desc: "Day-to-day support for end users and system administrators.",
        icon: Headphones,
      },
      {
        title: "Application Management",
        desc: "Ongoing management of your ERP, BI, and integrated applications.",
        icon: Layers,
      },
      {
        title: "System Health Checks",
        desc: "Regular audits to catch performance and configuration issues early.",
        icon: CheckCircle2,
      },
      {
        title: "Performance Optimization",
        desc: "Continuous tuning to keep systems fast as data and usage grow.",
        icon: Zap,
      },
      {
        title: "Version Upgrades & Enhancements",
        desc: "Planned upgrades that keep you current without disrupting operations.",
        icon: RefreshCw,
      },
      {
        title: "Continuous Managed Services",
        desc: "A long-term support partnership, not a one-time project handoff.",
        icon: LifeBuoy,
      },
    ],

    lifecycleTitle: "How Our Managed Services Engagement Works",
    lifecycle: [
      {
        phase: "Onboard",
        title: "Environment Onboarding",
        desc: "We document your current environment, support history, and priority systems.",
        icon: ClipboardCheck,
      },
      {
        phase: "Stabilize",
        title: "Health Check & Stabilization",
        desc: "Initial audits resolve existing issues and establish a performance baseline.",
        icon: CheckCircle2,
      },
      {
        phase: "Support",
        title: "Ongoing Support & Monitoring",
        desc: "Day-to-day support, monitoring, and issue resolution across your systems.",
        icon: Headphones,
      },
      {
        phase: "Improve",
        title: "Continuous Optimization",
        desc: "Regular reviews identify opportunities to improve performance and adopt new capabilities.",
        icon: TrendingUp,
      },
    ],

    faqsTitle: "Managed Services FAQs",
    faqs: [
      {
        question: "What response times can we expect?",
        answer:
          "Response times are defined in your support agreement based on issue severity, with critical issues prioritized first.",
      },
      {
        question: "Do you support systems you didn't originally implement?",
        answer:
          "Yes. We regularly take over support for existing ERP, BI, and infrastructure environments implemented by other providers.",
      },
      {
        question: "Is managed services a replacement for our internal IT team?",
        answer:
          "No — we work alongside your internal team, handling specialized or overflow support so they can focus on strategic priorities.",
      },
      {
        question: "Can we scale support up or down over time?",
        answer:
          "Yes, support scope and hours can be adjusted as your business needs change.",
      },
    ],
  },
];
