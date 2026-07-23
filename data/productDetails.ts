import {
  Layers,
  CheckCircle2,
  Users,
  Coins,
  Boxes,
  TrendingUp,
  ShoppingCart,
  Factory,
  Wrench,
  ShieldCheck,
  Database,
  Zap,
  FileText,
  Settings,
  Sliders,
  Rocket,
  Search,
  MessageSquare,
  Globe,
  LineChart,
  Server,
  Terminal,
  Clock,
  Lock,
  Eye,
  Cpu,
  Award,
  Activity,
  Smile,
  ShieldAlert,
  ArrowRight,
  Check,
  Send,
  Sparkles,
  Mail,
  MessageCircle,
  BarChart3,
  Truck,
  ClipboardList,
  Shield,
  RefreshCw,
  Layers3,
  Users2,
  Building2,
  HelpCircle,
  LucideIcon,
  HelpCircle as FaqIcon,
  ChevronRight,
  Warehouse,
  ShoppingBag,
} from "lucide-react";
import transsync from '@/public/images/products/transsync.png';
import engageflow from '@/public/images/products/engageflow.png';
import invoiceflow from '@/public/images/products/invoiceflow.png';
import repprox from '@/public/images/products/repprox.png';
import freight from '@/public/images/products/freight-puls.png';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ChallengeItem {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface OutcomeItem {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface ModuleItem {
  title: string;
  desc?: string;
  points?: string[];
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

export interface ProductDetail {
  slug: string;
  title: string;
  logo?: string;
  cardBg?: string;
  tagline: string;
  heroSubtitle: string;
  heroImage: string;
  accentColor: string;
  accentGradient: string;
  heroDesc?: string;
  displayUrl?: string; // URL shown in the hero mockup browser bar
  darkBgGradient: string; // e.g. "from-[#0A1633] via-[#000B22] to-[#050C1F]"

  // Section 2: Core Concept
  conceptTitle: string;
  conceptSubtitle: string;
  conceptDesc: string;
  conceptBullets: string[];

  // Section 3: Challenges
  challengesTitle: string;
  challenges: ChallengeItem[];

  // Section 4: Business Outcomes
  outcomesTitle: string;
  outcomesDesc: string;
  outcomes: OutcomeItem[];

  // Section 5: AI / Specialized Features
  aiTitle?: string;
  aiDesc?: string;
  aiFeatures?: {
    title: string;
    desc: string;
    icon: LucideIcon;
  }[];

  // Section 6: Modules / Sub-components
  modulesTitle: string;
  modulesDesc?: string;
  modules: ModuleItem[];

  // Section 7: Industries
  industriesTitle: string;
  industriesDesc: string;
  industries: string[];

  // Section 8: ERP Integrations
  integrationsTitle?: string;
  integrationsDesc?: string;
  integrations?: string[];

  // Section 9: Why choose / Advantages
  whyTitle: string;
  whyDesc: string;
  whyBullets: string[];

  // Section 10: FAQs
  faqs?: FAQItem[];

  // CTA
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton1: { label: string; href: string };
  ctaButton2: { label: string; href: string };
}

export const PRODUCT_DETAILS: ProductDetail[] = [
  {
    slug: "repprox",
    title: "RepProX",
    logo: "https://www.repprox.com/logo.png",
    cardBg: "/assets/images/products/card_bg.png",
    tagline: "AI-Powered Field Operations Platform",
    heroSubtitle:
      "Transform Field Teams into High-Performing Business Operations.",
    heroImage: repprox.src,
    accentColor: "from-blue-600 to-indigo-700",
    accentGradient: "linear-gradient(to right, #2563eb, #4338ca)",
    heroDesc:
      "RepProX connects field teams, customers, and ERP in one AI-powered platform — giving your sales reps, drivers, technicians, and operators the right information at the right time to work smarter every day.",
    displayUrl: "repprox.com",
    darkBgGradient: "from-brand-navy-dark via-[#001138] to-[#00174F]",
    conceptTitle: "More Than a Mobile App.",
    conceptSubtitle: "A Complete Field Operations Platform.",
    conceptDesc:
      "Managing field teams has become increasingly complex. RepProX connects every field activity to your ERP, giving your workforce one intelligent platform for planning, execution, collaboration, and reporting. No paperwork. No duplicated information. No delays. Just connected operations.",
    conceptBullets: [
      "Sales representatives need instant access to customer info",
      "Delivery teams require accurate route planning",
      "Technicians need real-time work orders",
      "Managers need live visibility into field activities",
      "Warehouse teams need accurate inventory updates",
    ],
    challengesTitle: "Common Field Operation Challenges",
    challenges: [
      {
        title: "Limited Visibility",
        desc: "No real-time insight into field team locations, activities, or customer visit progress.",
        icon: Eye,
      },
      {
        title: "Manual Order Entry",
        desc: "Delayed order processing and duplicate data entry leading to errors and invoicing delays.",
        icon: FileText,
      },
      {
        title: "Delayed Collections",
        desc: "Slow payment cycles and cash flow constraints due to paper invoices and manual payment processing.",
        icon: Coins,
      },
      {
        title: "Inventory Inaccuracies",
        desc: "No visibility into van inventory, leading to stockouts or expirations in the field.",
        icon: Boxes,
      },
      {
        title: "Paper-based Inspections",
        desc: "Inefficient and unreliable reporting from shelf audits, maintenance reports, or delivery checks.",
        icon: ClipboardList,
      },
      {
        title: "Poor Office-Field Communication",
        desc: "Misaligned teams, slow response times, and double work due to disconnected systems.",
        icon: MessageSquare,
      },
    ],
    outcomesTitle: "Business Outcomes That Matter",
    outcomesDesc:
      "RepProX is designed to improve the way your field teams operate and deliver real business improvements.",
    outcomes: [
      {
        title: "Increase Workforce Productivity",
        desc: "Provide employees with the tools they need to complete more work in less time.",
        icon: TrendingUp,
      },
      {
        title: "Improve Customer Experience",
        desc: "Deliver faster response times, better communication, and improved service quality.",
        icon: Smile,
      },
      {
        title: "Gain Complete Field Visibility",
        desc: "Monitor activities, customer visits, routes, task completion, and performance in real time.",
        icon: Globe,
      },
      {
        title: "Accelerate Order-to-Cash",
        desc: "Enable field teams to create quotations, sales orders, invoices, collections, and receipts directly from mobile.",
        icon: Coins,
      },
      {
        title: "Improve Inventory Accuracy",
        desc: "Manage van inventory, warehouse stock movements, counts, and transfers with confidence.",
        icon: Boxes,
      },
      {
        title: "Make Better Decisions",
        desc: "Access real-time dashboards and AI-powered insights that improve planning and operational performance.",
        icon: BarChart3,
      },
    ],
    aiTitle: "AI That Works Alongside Your Team",
    aiDesc:
      "RepProX uses Artificial Intelligence to help organizations make faster, smarter decisions and optimize field activities.",
    aiFeatures: [
      {
        title: "AI Sales Recommendations",
        desc: "Suggest products based on customer purchasing behavior and sales history.",
        icon: Sparkles,
      },
      {
        title: "Intelligent Visit Planning",
        desc: "Recommend customer visit priorities based on business rules and historical performance.",
        icon: Cpu,
      },
      {
        title: "AI Business Insights",
        desc: "Identify trends, opportunities, and operational risks using business intelligence and predictive analytics.",
        icon: LineChart,
      },
      {
        title: "Smart Notifications",
        desc: "Notify users about overdue visits, delayed collections, low inventory, expiring products, and important events.",
        icon: Clock,
      },
      {
        title: "Executive AI Dashboard",
        desc: "Provide management with AI-generated summaries highlighting operational performance, exceptions, and business opportunities.",
        icon: ShieldCheck,
      },
    ],
    modulesTitle: "Comprehensive Field Operations Modules",
    modulesDesc:
      "RepProX is built around configurable modules that can be activated according to your business requirements.",
    modules: [
      {
        title: "Sales Force Automation",
        points: [
          "Customer Management",
          "Route Planning & Visit Scheduling",
          "Sales Orders & Quotations",
          "Invoicing, Returns & Collections",
        ],
        icon: TrendingUp,
        color: "text-blue-600",
        bgColor: "bg-blue-50/50",
      },
      {
        title: "Merchandising",
        points: [
          "Shelf Audits & Product Availability",
          "Planogram Compliance",
          "Photo Capture & Competitor Monitoring",
        ],
        icon: ShoppingBag,
        color: "text-indigo-600",
        bgColor: "bg-indigo-50/50",
      },
      {
        title: "Field Service",
        points: [
          "Service Calls & Work Orders",
          "Preventive Maintenance",
          "Service Reports & Digital Signatures",
        ],
        icon: Wrench,
        color: "text-cyan-600",
        bgColor: "bg-cyan-50/50",
      },
      {
        title: "Delivery Management",
        points: [
          "Route Optimization",
          "Delivery Confirmation & Proof of Delivery",
          "Driver Tracking & Customer Signatures",
        ],
        icon: Truck,
        color: "text-emerald-600",
        bgColor: "bg-emerald-50/50",
      },
      {
        title: "Warehouse Mobility",
        points: [
          "Barcode Scanning & Goods Receipt",
          "Picking, Packing & Stock Transfers",
          "Stock Counts",
        ],
        icon: Warehouse,
        color: "text-amber-600",
        bgColor: "bg-amber-50/50",
      },
      {
        title: "Inventory Management",
        points: [
          "Van Inventory & Expiry Management",
          "Batch & Serial Tracking",
          "Stock Requests & Inventory Reconciliation",
        ],
        icon: Boxes,
        color: "text-rose-600",
        bgColor: "bg-rose-50/50",
      },
      {
        title: "Customer Relationship Management (CRM)",
        points: [
          "Customer Profiles & Visit History",
          "Activities, Tasks & Opportunities",
          "Notes & Reminders",
        ],
        icon: Users,
        color: "text-purple-600",
        bgColor: "bg-purple-50/50",
      },
      {
        title: "Business Intelligence",
        points: [
          "Executive Dashboards & KPI Monitoring",
          "Sales & Collection Analysis",
          "Route Performance & Productivity Reporting",
        ],
        icon: BarChart3,
        color: "text-pink-600",
        bgColor: "bg-pink-50/50",
      },
    ],
    industriesTitle: "Built for Every Industry",
    industriesDesc:
      "RepProX adapts to the way different industries operate, ensuring that every workflow matches your specific operational requirements.",
    industries: [
      "FMCG",
      "Distribution",
      "Retail",
      "Pharmaceutical",
      "Healthcare",
      "Automotive",
      "Logistics",
      "Food & Beverage",
      "Manufacturing",
      "Utilities",
      "Facility Management",
      "Field Services",
      "Maintenance Companies",
    ],
    integrationsTitle: "Seamless ERP Integration",
    integrationsDesc:
      "RepProX integrates directly with your core business systems to eliminate duplicate data entry and provide real-time synchronization.",
    integrations: [
      "SAP Business One",
      "Odoo ERP",
      "Microsoft Power BI",
      "Warehouse Management Systems",
      "Customer Portals",
      "Banking Systems",
      "Payment Gateways",
      "WhatsApp Business",
      "Email Platforms",
      "Third-Party APIs",
    ],
    whyTitle: "Why Choose RepProX?",
    whyDesc:
      "RepProX is more than a simple mobile app. It is an enterprise-grade platform built to transform your field operations.",
    whyBullets: [
      "AI-powered field operations with intelligent recommendations and dashboards",
      "Offline and online mobile capabilities that sync automatically when reconnected",
      "Real-time ERP integration with SAP Business One and Odoo",
      "Configurable business workflows tailored to your operational requirements",
      "Executive dashboards for management visibility and decision-making",
      "GPS tracking for field team locations and route management",
      "Barcode-enabled warehouse and inventory operations",
      "Digital forms and inspections replacing paper-based processes",
      "Scalable enterprise architecture for growing organizations",
      "Intuitive user experience designed for field teams",
    ],
    faqs: [
      {
        question: "Does RepProX work offline?",
        answer:
          "Yes. Users can continue working without an internet connection. Data automatically synchronizes with the ERP system once connectivity is restored.",
      },
      {
        question: "Can RepProX integrate with our ERP?",
        answer:
          "Yes. RepProX is designed to integrate with SAP Business One, Odoo ERP, and other enterprise systems through secure APIs.",
      },
      {
        question: "Can the application be customized?",
        answer:
          "Absolutely. RepProX is modular and highly configurable. Workflows, forms, approvals, reports, and business rules can all be tailored to your operational requirements.",
      },
      {
        question: "Which mobile platforms are supported?",
        answer:
          "RepProX is available for Android and iOS devices, providing a consistent experience across smartphones and tablets.",
      },
    ],
    ctaTitle: "Empower Your Field Teams with Intelligent Technology",
    ctaSubtitle:
      "Give them the tools they need to work faster, collaborate better, and deliver exceptional customer experiences.",
    ctaButton1: { label: "Book a Live Demo", href: "/contact" },
    ctaButton2: { label: "Request a Free Consultation", href: "/contact" },
  },
  {
    slug: "transsync",
    title: "TransSync",
    tagline:
      "Intelligent Intercompany Management Platform for SAP Business One",
    heroSubtitle:
      "Automate Your Multi-Company Operations. Operate as One Connected Enterprise.",
    heroImage: transsync.src,
    accentColor: "from-emerald-600 to-teal-700",
    accentGradient: "linear-gradient(to right, #059669, #0f766e)",
    darkBgGradient: "from-brand-navy-dark via-[#021A30] to-[#032A44]",
    conceptTitle: "Connect Your Operations.",
    conceptSubtitle: "Simplify Multi-Company Management.",
    conceptDesc:
      "Modern business groups often operate multiple legal entities, subsidiaries, branches, and regional companies. TransSync eliminates operational complexity by intelligently automating transactions, master data synchronization, and financial reconciliations across multiple SAP Business One databases. TransSync enables organizations to operate as one connected enterprise while maintaining independent accounting records for every company.",
    conceptBullets: [
      "Manual intercompany transactions cause delays",
      "Duplicate document entry increases admin work",
      "Inventory synchronization across companies is difficult",
      "Financial consolidation and reporting are delayed",
      "Independent databases create disconnected information",
    ],
    challengesTitle: "Multi-Company Business Challenges",
    challenges: [
      {
        title: "Manual Intercompany Docs",
        desc: "Creating POs in one company and corresponding Sales Orders in another company manually is slow and error-prone.",
        icon: FileText,
      },
      {
        title: "Duplicate Data Entry",
        desc: "Re-keying items, customers, prices, and vendor details across multiple legal entities wastes valuable time.",
        icon: Sliders,
      },
      {
        title: "Delayed Inventory Transfers",
        desc: "Lack of real-time inventory visibility and slow internal transfers lead to missed sales opportunities.",
        icon: Boxes,
      },
      {
        title: "Financial Reconciliation Issues",
        desc: "Differences in intercompany accounts and transactions require extensive manual reconciliation at month-end.",
        icon: Coins,
      },
      {
        title: "Inconsistent Master Data",
        desc: "Items, customers, and price lists diverging across databases, creating billing errors and reporting issues.",
        icon: Database,
      },
      {
        title: "Lack of Group Visibility",
        desc: "Managers struggle to see consolidated sales, inventory levels, and cash positions across all legal entities.",
        icon: Eye,
      },
    ],
    outcomesTitle: "Transform Complexity into Competitive Advantage",
    outcomesDesc:
      "TransSync is designed specifically for SAP Business One to deliver measurable multi-company business outcomes.",
    outcomes: [
      {
        title: "Intelligent Automation",
        desc: "Automate intercompany transactions without repetitive manual document processing.",
        icon: RefreshCw,
      },
      {
        title: "Faster Operations",
        desc: "Accelerate purchasing, sales, inventory movements, and internal approval workflows.",
        icon: Zap,
      },
      {
        title: "Complete Visibility",
        desc: "Maintain real-time operational and inventory information across every connected company.",
        icon: Eye,
      },
      {
        title: "Improved Accuracy",
        desc: "Reduce manual errors through intelligent business rules and automated data synchronization.",
        icon: ShieldCheck,
      },
      {
        title: "Standardized Operations",
        desc: "Ensure consistent business processes and master data definitions across every legal entity.",
        icon: ClipboardList,
      },
      {
        title: "Enterprise Scalability",
        desc: "Expand your business and add new legal entities confidently without increasing operational complexity.",
        icon: TrendingUp,
      },
    ],
    modulesTitle: "The TransSync Modular Platform",
    modulesDesc:
      "Instead of offering one generic synchronization tool, TransSync is built as a modular platform that grows with your business.",
    modules: [
      {
        title: "TransSync Core",
        desc: "The foundation of intercompany automation. Automate business documents between companies to eliminate duplicate work.",
        points: [
          "Sales Orders & Purchase Orders",
          "Deliveries & Goods Receipts",
          "A/R Invoices & A/P Invoices",
          "Inventory Transfers, Returns & Credit Notes",
        ],
        icon: Layers,
        color: "text-emerald-600",
        bgColor: "bg-emerald-50/50",
      },
      {
        title: "TransSync Master Data",
        desc: "Keep every company working with consistent, up-to-date information. Establish one source of truth.",
        points: [
          "Items & Price Lists",
          "Business Partners, Customers & Vendors",
          "Units of Measure & Warehouses",
          "Exchange Rates & Payment Terms",
          "Sales Employees & User-Defined Fields",
        ],
        icon: Database,
        color: "text-teal-600",
        bgColor: "bg-teal-50/50",
      },
      {
        title: "TransSync Finance",
        desc: "Strengthen financial governance and group-wide control across all your legal entities.",
        points: [
          "Intercompany Reconciliation",
          "Financial Transaction Automation",
          "Shared Accounting Workflows",
          "Internal Financial Visibility",
        ],
        icon: Coins,
        color: "text-cyan-600",
        bgColor: "bg-cyan-50/50",
      },
      {
        title: "TransSync Enterprise",
        desc: "The complete automation platform designed for large organizations with complex operations.",
        points: [
          "Advanced Workflow Automation & Approval Rules",
          "Intelligent Routing & Notification Engine",
          "Administration Dashboard & Transaction Monitoring",
          "Error Management & API Integration Services",
          "AI-Ready Architecture & Executive Reporting",
        ],
        icon: Building2,
        color: "text-indigo-600",
        bgColor: "bg-indigo-50/50",
      },
    ],
    industriesTitle: "Built for Growing Enterprises",
    industriesDesc:
      "TransSync scales alongside your business, supporting organizations operating in multiple sectors and structures.",
    industries: [
      "Holding Companies",
      "Distribution Groups",
      "Manufacturing Groups",
      "Retail Chains",
      "Healthcare Groups",
      "Logistics Providers",
      "Trading Companies",
      "Import & Export Businesses",
      "Multi-Branch Organizations",
      "International Enterprises",
    ],
    integrationsTitle: "Native SAP Business One Integration",
    integrationsDesc:
      "Developed specifically around the operational realities of SAP Business One, supporting SQL and HANA databases.",
    integrations: [
      "SAP Business One SQL",
      "SAP Business One HANA",
      "Multi-Database Environments",
      "Intercompany Business Rules Engine",
      "SQL & HANA Secure Connectivity",
    ],
    whyTitle: "Why Choose TransSync?",
    whyDesc:
      "Unlike generic synchronization tools, TransSync is natively aligned with SAP Business One data structures and accounting logic.",
    whyBullets: [
      "Deep understanding of SAP Business One processes and tables",
      "SQL and HANA compatibility built-in from the ground up",
      "Flexible business rules allowing customization without custom code",
      "Real-time processing with secure transaction monitoring and rollback capabilities",
      "Future-ready roadmap featuring AI-powered transaction validation",
    ],
    faqs: [
      {
        question: "Which databases are supported?",
        answer:
          "TransSync is fully compatible with both SAP Business One SQL and SAP Business One HANA environments.",
      },
      {
        question: "Do we need custom coding to configure intercompany rules?",
        answer:
          "No. TransSync includes an administration dashboard where business rules can be configured based on company, warehouse, branch, customer, or document type without writing code.",
      },
      {
        question: "Does it maintain independent accounting records?",
        answer:
          "Yes. TransSync automates transactions and document creation between databases while respecting each entity's independent accounting records, chart of accounts, and financial compliance.",
      },
      {
        question: "How does it handle transaction errors?",
        answer:
          "The platform includes a secure transaction monitor and error management dashboard. If a document synchronization fails due to validation, an alert is sent, and users can review, correct, and retry from the dashboard.",
      },
    ],
    ctaTitle: "Connect Every Company. Empower Every Business Decision.",
    ctaSubtitle:
      "As your organization grows, your technology should simplify operations—not create additional complexity. Scale with confidence.",
    ctaButton1: { label: "Schedule a Live Demonstration", href: "/contact" },
    ctaButton2: { label: "Talk to a TransSync Specialist", href: "/contact" },
  },
  {
    slug: "freight-pulse",
    title: "Freight Pulse",
    tagline: "The Digital Logistics Platform for SAP Business One",
    heroSubtitle: "One Platform. Every Shipment. Complete Control.",
    heroImage: freight.src,
    accentColor: "from-cyan-600 to-blue-700",
    accentGradient: "linear-gradient(to right, #0891b2, #1d4ed8)",
    darkBgGradient: "from-brand-navy-dark via-[#001D42] to-[#002B63]",
    conceptTitle: "Digitalize Your Logistics.",
    conceptSubtitle: "Connect Every Shipment in Real Time.",
    conceptDesc:
      "Modern logistics operations are complex, involving multiple stakeholders, transport modes, customs requirements, and financial transactions. Freight Pulse transforms the way logistics organizations operate. Built exclusively for SAP Business One, it connects freight forwarding, transportation, warehousing, customs, billing, customer communication, and analytics into one intelligent digital platform.",
    conceptBullets: [
      "Freight forwarding processes are highly disconnected",
      "Spreadsheets and manual emails slow down bookings",
      "Lack of real-time shipment visibility frustrates customers",
      "Customs clearance and documentation are difficult to track",
      "Difficulty calculating true profitability per shipment (job costing)",
    ],
    challengesTitle: "Logistics Operational Challenges",
    challenges: [
      {
        title: "Disconnected Activities",
        desc: "Forwarding, warehousing, and customs working in silos, requiring manual status updates and duplicate entry.",
        icon: Layers3,
      },
      {
        title: "Manual Coordination",
        desc: "Relying on endless email threads, Excel sheets, and phone calls to track bookings, routes, and milestones.",
        icon: MessageSquare,
      },
      {
        title: "Lack of Shipment Tracking",
        desc: "No real-time tracking for customers, leading to high support volumes and low customer satisfaction.",
        icon: Globe,
      },
      {
        title: "Inefficient Documentation",
        desc: "House and Master documentation, Bills of Entry, and customs declarations managed manually and difficult to retrieve.",
        icon: FileText,
      },
      {
        title: "Delayed Billing & Job Costing",
        desc: "Taking days after shipment delivery to compile invoice costs, make billing statements, and check job profitability.",
        icon: Coins,
      },
      {
        title: "Poor Fleet & Route Planning",
        desc: "Underutilized vehicles, inefficient route schedules, and lack of real-time driver tracking.",
        icon: Truck,
      },
    ],
    outcomesTitle: "Connected Logistics. Accelerated Performance.",
    outcomesDesc:
      "Freight Pulse replaces disconnected operations with a unified digital ecosystem that improves efficiency and margins.",
    outcomes: [
      {
        title: "Increase Operational Visibility",
        desc: "Monitor all active shipments, warehouses, routes, and milestones from one dashboard.",
        icon: Eye,
      },
      {
        title: "Improve Shipment Tracking",
        desc: "Keep customers informed with real-time milestones and automated status updates.",
        icon: Globe,
      },
      {
        title: "Accelerate Documentation",
        desc: "Auto-generate and organize House & Master documents, booking confirmations, and customs sheets.",
        icon: FileText,
      },
      {
        title: "Reduce Manual Processes",
        desc: "Automate booking conversions, status transitions, driver scheduling, and billing creation.",
        icon: RefreshCw,
      },
      {
        title: "Increase Job Profitability",
        desc: "Integrate costs and revenues in real time, calculating actual margins per shipment/container.",
        icon: Coins,
      },
      {
        title: "Optimize Warehouse Operations",
        desc: "Improve receiving, picking, packing, and dispatch times through barcode-enabled ERP connection.",
        icon: Warehouse,
      },
    ],
    aiTitle: "Freight Pulse AI Insights",
    aiDesc:
      "The future of logistics begins with predictive intelligence. Freight Pulse utilizes AI to optimize operations.",
    aiFeatures: [
      {
        title: "Intelligent Shipment Planning",
        desc: "Recommend optimal routes, carriers, and transport modes based on cost and historic performance.",
        icon: Sparkles,
      },
      {
        title: "AI-Powered Route Optimization",
        desc: "Generate dynamic, traffic-aware schedules for delivery fleets to save fuel and time.",
        icon: Cpu,
      },
      {
        title: "Predictive Delay Monitoring",
        desc: "Analyze weather, port congestion, and carrier data to predict potential shipment delays before they occur.",
        icon: ShieldAlert,
      },
      {
        title: "Intelligent Cost & Margin Analysis",
        desc: "Identify pricing leakages, high-cost lanes, and recommend adjustments to maximize profitability.",
        icon: LineChart,
      },
    ],
    modulesTitle: "The Freight Pulse Platform Modules",
    modulesDesc:
      "A modular enterprise platform that allows you to implement capabilities needed today and expand over time.",
    modules: [
      {
        title: "Freight Pulse Forwarding",
        desc: "Manage the complete freight forwarding lifecycle from initial quotation to final delivery confirmation.",
        points: [
          "Quotations & Booking Management",
          "Shipment Planning (Import, Export, Cross Trade)",
          "Consolidation & Deconsolidation",
          "House & Master Documentation",
          "Milestone Tracking & Customer Alerts",
        ],
        icon: Globe,
        color: "text-cyan-600",
        bgColor: "bg-cyan-50/50",
      },
      {
        title: "Freight Pulse Customs",
        desc: "Simplify customs clearance operations, declaration tracking, and compliance workflows.",
        points: [
          "Customs Documentation & Validation",
          "Declaration Tracking & BOE Management",
          "Clearance Status & Customs Charges",
          "Compliance Auditing Workflows",
        ],
        icon: ClipboardList,
        color: "text-blue-600",
        bgColor: "bg-blue-50/50",
      },
      {
        title: "Freight Pulse Warehouse",
        desc: "Connect logistics operations with warehouse execution, fully integrated with SAP B1 inventory.",
        points: [
          "Goods Receiving & Put-away",
          "Barcode Picking, Packing & Dispatch",
          "Real-Time Inventory Visibility",
          "Warehouse KPI Dashboards",
        ],
        icon: Warehouse,
        color: "text-indigo-600",
        bgColor: "bg-indigo-50/50",
      },
      {
        title: "Freight Pulse Transport",
        desc: "Coordinate and optimize domestic transportation, vehicle scheduling, and driver workloads.",
        points: [
          "Vehicle Scheduling & Route Planning",
          "Driver Assignment & Deliveries",
          "Collection Planning & Transport Cost Tracking",
          "Fleet & Dispatch Visibility",
        ],
        icon: Truck,
        color: "text-teal-600",
        bgColor: "bg-teal-50/50",
      },
      {
        title: "Freight Pulse Customer Portal",
        desc: "Deliver a modern, self-service digital experience for your shippers.",
        points: [
          "Real-Time Shipment Milestone Tracking",
          "Digital Document Downloads (BL, Invoices, Declarations)",
          "Service Request Submissions",
          "Automated Notifications & Invoices Access",
        ],
        icon: Users,
        color: "text-purple-600",
        bgColor: "bg-purple-50/50",
      },
      {
        title: "Freight Pulse Analytics",
        desc: "Transform logistics records into executive intelligence with Microsoft Power BI.",
        points: [
          "Shipment & Route Performance KPI Dashboard",
          "Customer & Lane Profitability Analysis",
          "Revenue & Cost Trend Mapping",
          "Delivery Timeline Analysis",
        ],
        icon: BarChart3,
        color: "text-pink-600",
        bgColor: "bg-pink-50/50",
      },
    ],
    industriesTitle: "Built for Modern Logistics Organizations",
    industriesDesc:
      "Freight Pulse supports businesses handling complex domestic and international supply chain activities.",
    industries: [
      "Freight Forwarders",
      "Third-Party Logistics (3PL)",
      "Shipping Companies",
      "Customs Brokers",
      "Distribution Companies",
      "Import & Export Organizations",
      "Contract Logistics Providers",
      "Warehousing Companies",
      "Transportation Providers",
      "Supply Chain Organizations",
    ],
    whyTitle: "Why Choose Freight Pulse?",
    whyDesc:
      "Unlike standalone logistics systems, Freight Pulse is built directly inside the SAP Business One database, aligning operational activities with core financials.",
    whyBullets: [
      "Native SAP Business One integration eliminating double systems",
      "End-to-end shipment lifecycle coverage on one screen",
      "Powerful job costing engine linking purchase invoices, bills, and sales directly",
      "Self-service Customer Portal that reduces operational phone calls",
      "Future-ready AI predictive analysis for route planning and delay mitigation",
    ],
    faqs: [
      {
        question: "Is Freight Pulse a separate software?",
        answer:
          "No, Freight Pulse is built to integrate natively with SAP Business One, allowing logistics, warehouse, and finance teams to work on a single database environment.",
      },
      {
        question: "Does it support international shipping?",
        answer:
          "Yes. It supports Air Freight, Ocean Freight, Land Transportation, Cross-Trade, consolidation, and customs documentation requirements for global movements.",
      },
      {
        question: "How does the Customer Portal work?",
        answer:
          "Customers receive secure login credentials where they can track active shipments, view milestones, download PDFs (like Bills of Lading, Invoices, BOE), and request quotes.",
      },
      {
        question: "How does it help with job costing?",
        answer:
          "It connects all purchase invoices, shipping line bills, agent commissions, and customer invoices directly to a specific Shipment/Job ID, calculating exact profitability margins automatically.",
      },
    ],
    ctaTitle: "Every Shipment Matters. Every Decision Matters.",
    ctaSubtitle:
      "Manage your shipments, warehouses, transportation, documentation, finance, and customer communication through one intelligent platform.",
    ctaButton1: { label: "Book a Live Demonstration", href: "/contact" },
    ctaButton2: { label: "Speak with a Logistics Expert", href: "/contact" },
  },
  {
    slug: "engageflow",
    title: "EngageFlow",
    tagline: "Intelligent Customer Communication Platform for SAP Business One",
    heroSubtitle: "Every Customer Interaction. Automatically Delivered.",
    heroImage: engageflow.src,
    accentColor: "from-purple-600 to-pink-700",
    accentGradient: "linear-gradient(to right, #9333ea, #be185d)",
    darkBgGradient: "from-brand-navy-dark via-[#1A0A33] to-[#2B0E4C]",
    conceptTitle: "Automate Conversations.",
    conceptSubtitle: "Strengthen Customer Relationships.",
    conceptDesc:
      "Communication is the core of every client relationship. Invoices, statements, reminders, delivery updates, and promotional campaigns—sending these manually creates administrative delays and inconsistent experiences. EngageFlow is ALLE TECH's intelligent customer communication platform built for SAP Business One. It automatically delivers personalized emails, WhatsApp messages, SMS, and alerts based on ERP transaction triggers.",
    conceptBullets: [
      "Manual invoice emailing is slow and error-prone",
      "Delayed customer statements slow down payments",
      "No automated WhatsApp notifications for transactions",
      "Manual follow-ups consume finance team hours",
      "Disconnected marketing tools require manual export",
    ],
    challengesTitle: "Common Communication Challenges",
    challenges: [
      {
        title: "Manual Document Delivery",
        desc: "Generating PDFs and emailing invoices or purchase orders to clients one-by-one consumes hours of staff time.",
        icon: FileText,
      },
      {
        title: "Slow Collections & Statements",
        desc: "Delayed monthly statements and lack of automated payment reminders delay customer pay times and hurt cash flow.",
        icon: Clock,
      },
      {
        title: "No WhatsApp Connectivity",
        desc: "Missing out on the highest-open-rate channel (WhatsApp) for transactions, statements, and alerts.",
        icon: MessageSquare,
      },
      {
        title: "Double document requests",
        desc: "Customers constantly contacting staff to request duplicate invoices, statements, or receipts.",
        icon: Send,
      },
      {
        title: "Disconnected Marketing",
        desc: "Running marketing campaigns without live ERP customer segments and purchase histories.",
        icon: Mail,
      },
      {
        title: "Lack of Message Tracking",
        desc: "No visibility into whether a client actually received or opened an invoice email or payment reminder.",
        icon: Eye,
      },
    ],
    outcomesTitle: "Automate Outreach. Accelerate Cash Flow.",
    outcomesDesc:
      "EngageFlow turns your ERP into a proactive communication engine that keeps clients informed automatically.",
    outcomes: [
      {
        title: "Improve Customer Experience",
        desc: "Deliver professional, timely, and consistent communication across every client interaction.",
        icon: Smile,
      },
      {
        title: "Reduce Administrative Work",
        desc: "Automatically send transactions, balance statements, and notifications without manual work.",
        icon: RefreshCw,
      },
      {
        title: "Accelerate Collections",
        desc: "Send intelligent payment reminders and monthly balance statements that improve collection times.",
        icon: Coins,
      },
      {
        title: "Increase Marketing Impact",
        desc: "Run targeted promotional campaigns based on real customer purchasing histories and segments.",
        icon: TrendingUp,
      },
      {
        title: "Multi-channel Engagement",
        desc: "Reach customers through their preferred channel: email, WhatsApp, or SMS.",
        icon: MessageCircle,
      },
      {
        title: "Professional Brand Image",
        desc: "Ensure every transaction output matches your brand identity with responsive, styled templates.",
        icon: Award,
      },
    ],
    modulesTitle: "EngageFlow Capabilities",
    modulesDesc:
      "Centralize and automate all customer and vendor communications through a single intelligent rules engine.",
    modules: [
      {
        title: "Transaction Automation",
        desc: "Automatically send documents immediately after ERP transaction triggers.",
        points: [
          "Sales Quotations & Sales Orders",
          "Delivery Notes & A/R Invoices",
          "Incoming & Outgoing Payments",
          "Purchase Orders & Goods Receipts",
          "Service Calls & Production Alerts",
        ],
        icon: Settings,
        color: "text-purple-600",
        bgColor: "bg-purple-50/50",
      },
      {
        title: "Customer Statements",
        desc: "Generate and distribute account summaries and payment reports in bulk or individually.",
        points: [
          "Statement of Account (SOA)",
          "Customer Aging Reports",
          "Outstanding Invoice Summaries",
          "Balance Confirmation Forms",
          "Monthly Batch Statements",
        ],
        icon: FileText,
        color: "text-indigo-600",
        bgColor: "bg-indigo-50/50",
      },
      {
        title: "WhatsApp Business Automation",
        desc: "Send high-priority notifications and PDFs directly to customer WhatsApp numbers.",
        points: [
          "Invoice & Payment Confirmations",
          "Delivery & Dispatch Tracking Updates",
          "Collection & Due Date Reminders",
          "Promotional Campaigns",
          "Appointment Reminders & Support Alerts",
        ],
        icon: MessageCircle,
        color: "text-emerald-600",
        bgColor: "bg-emerald-50/50",
      },
      {
        title: "Email Automation Engine",
        desc: "Send beautiful, branded emails with dynamic PDF attachments generated directly from SAP.",
        points: [
          "Branded Email Templates",
          "Dynamic PDF Attachments",
          "Bulk Transaction Mailings",
          "Internal Approval Requests",
        ],
        icon: Mail,
        color: "text-blue-600",
        bgColor: "bg-blue-50/50",
      },
      {
        title: "Marketing Campaign Manager",
        desc: "Run intelligent sales and marketing outreach based on ERP database segments.",
        points: [
          "Product Launches & Seasonal Offers",
          "Customer Newsletters & Loyalty Alerts",
          "Re-engagement Campaigns for Inactive Accounts",
          "Detailed Campaign Target Lists Selection",
        ],
        icon: TrendingUp,
        color: "text-pink-600",
        bgColor: "bg-pink-50/50",
      },
      {
        title: "Internal Business Alerts",
        desc: "Notify your team immediately about important business exceptions or opportunities.",
        points: [
          "Credit Limit Exceeded Alerts",
          "Approval Requests & High Value Order Flags",
          "Minimum Stock Level Alerts",
          "Overdue Delivery & Collection Flags",
        ],
        icon: ShieldAlert,
        color: "text-amber-600",
        bgColor: "bg-amber-50/50",
      },
    ],
    industriesTitle: "Designed for Customer-Centric Organizations",
    industriesDesc:
      "EngageFlow is ideal for any business that relies on frequent transaction communication, billing, and statements.",
    industries: [
      "Distribution & Wholesale",
      "FMCG Groups",
      "Retailers & eCommerce",
      "Healthcare & Medical Supplies",
      "Logistics & Transport Providers",
      "Professional Services",
      "Manufacturing & Supply Groups",
      "Subscription & Maintenance Businesses",
    ],
    integrationsTitle: "Intelligent Automation Rules Engine",
    integrationsDesc:
      "Configure rules to trigger messages based on business logic. No coding required.",
    integrations: [
      "If client balance exceeds AED 50,000 -> Send statement",
      "If invoice exceeds AED 100,000 -> Notify Finance Director",
      "If payment received -> Send thank-you WhatsApp message",
      "If quote is not converted after 10 days -> Send follow-up email",
      "If client is inactive for 90 days -> Launch re-engagement offer",
    ],
    whyTitle: "Why Choose EngageFlow?",
    whyDesc:
      "EngageFlow is not a simple email add-on. It connects communication directly to SAP Business One data triggers.",
    whyBullets: [
      "Native SAP Business One integration triggers messages instantly on transaction creation",
      "Supports both Email and official WhatsApp Business API from one rules panel",
      "Generates and attaches accurate Crystal Reports PDFs dynamically",
      "Centralized communication log tracking message statuses (Sent, Delivered, Read)",
      "Scalable rules engine built for large groups with multi-branch setups",
    ],
    faqs: [
      {
        question: "Does EngageFlow support both Email and WhatsApp?",
        answer:
          "Yes. Organizations can automate communications through both channels using configurable business rules.",
      },
      {
        question:
          "Can communications be triggered automatically by SAP transactions?",
        answer:
          "Absolutely. Messages can be generated automatically whenever selected SAP Business One documents are created, updated, or approved.",
      },
      {
        question: "Can we create marketing campaigns?",
        answer:
          "Yes. EngageFlow includes campaign management capabilities for promotions, newsletters, customer announcements, seasonal offers, and more.",
      },
      {
        question: "Can templates be customized?",
        answer:
          "Yes. Every email, WhatsApp message, and notification template can be fully branded and customized to match your organization's identity.",
      },
    ],
    ctaTitle: "Every Customer Conversation Matters",
    ctaSubtitle:
      "Modern businesses should not rely on manual communication. Transition to automated customer engagement today.",
    ctaButton1: { label: "Schedule a Live Demonstration", href: "/contact" },
    ctaButton2: { label: "Talk to an EngageFlow Specialist", href: "/contact" },
  },
  {
    slug: "invoiceflow",
    title: "InvoiceFlow",
    tagline: "UAE E-Invoicing Platform",
    heroSubtitle: "Future-Proof Your Business with Intelligent E-Invoicing",
    heroImage: invoiceflow.src,
    accentColor: "from-amber-500 to-red-600",
    accentGradient: "linear-gradient(to right, #f59e0b, #dc2626)",
    darkBgGradient: "from-brand-navy-dark via-[#211510] to-[#3B1F0E]",
    conceptTitle: "Simplify Compliance.",
    conceptSubtitle: "Automate E-Invoicing Seamlessly.",
    conceptDesc:
      "Electronic invoicing is transforming financial operations as governments implement digital reporting frameworks. InvoiceFlow is ALLE TECH's intelligent UAE E-Invoicing platform. Designed to help organizations prepare for the UAE's upcoming electronic invoicing regulations, it integrates seamlessly with SAP Business One, Odoo ERP, and other business databases to automate compliance and document exchange.",
    conceptBullets: [
      "UAE electronic invoicing mandates are approaching",
      "Manual tax calculations and reports are prone to errors",
      "Invoicing systems are disconnected from certified tax authorities",
      "Lack of validation leads to rejected files and compliance risks",
      "Handling outbound and inbound electronic invoices manually is unscalable",
    ],
    challengesTitle: "Invoicing Regulatory Challenges",
    challenges: [
      {
        title: "Mandatory Compliance Regulations",
        desc: "Navigating new government requirements, reporting schemas, and digital signatures without operational disruptions.",
        icon: Shield,
      },
      {
        title: "Manual Invoice Operations",
        desc: "Generating and emailing PDF files manually, which will not comply with electronic formats.",
        icon: FileText,
      },
      {
        title: "Disconnected ERP systems",
        desc: "Missing direct connections between ERP databases and accredited service providers (Peppol, Tax Authorities).",
        icon: Server,
      },
      {
        title: "Tax Validation Errors",
        desc: "Incorrect data, missing mandatory fields, and incorrect VAT calculations causing invoice rejections.",
        icon: ShieldAlert,
      },
      {
        title: "Compliance Uncertainty",
        desc: "Uncertainty around how to receive inbound electronic invoices from suppliers and audit trails.",
        icon: ClipboardList,
      },
      {
        title: "Multi-ERP Complexities",
        desc: "Managing compliance across multiple companies, subsidiaries, and database configurations.",
        icon: Layers,
      },
    ],
    outcomesTitle: "Transform Compliance into Operational Excellence",
    outcomesDesc:
      "Prepare your organization for the upcoming UAE mandates while modernizing financial document flow.",
    outcomes: [
      {
        title: "Achieve Regulatory Compliance",
        desc: "Prepare your organization for UAE electronic invoicing requirements through a certified, compliant architecture.",
        icon: ShieldCheck,
      },
      {
        title: "Automate Invoice Exchange",
        desc: "Generate, validate, transmit, receive, and monitor invoices automatically from your ERP.",
        icon: RefreshCw,
      },
      {
        title: "Improve Financial Accuracy",
        desc: "Reduce manual data entry, eliminating errors and discrepancies in VAT or customer data.",
        icon: CheckCircle2,
      },
      {
        title: "Accelerate Invoicing Cycles",
        desc: "Eliminate delays between billing generation, validation, customer delivery, and recording.",
        icon: Zap,
      },
      {
        title: "Strengthen Client Relations",
        desc: "Provide customers with professional, secure, and standardized electronic documents.",
        icon: Smile,
      },
      {
        title: "Future-Proof Your Platform",
        desc: "Establish a scalable framework ready for future regional GCC mandates (Saudi, Oman, Bahrain, Qatar) and Peppol updates.",
        icon: Rocket,
      },
    ],
    modulesTitle: "The InvoiceFlow Platform Components",
    modulesDesc:
      "InvoiceFlow is a comprehensive compliance and document exchange platform integrated directly into your ERP.",
    modules: [
      {
        title: "InvoiceFlow Connect",
        desc: "Secure ERP database connectivity. Link your accounting and transaction records.",
        points: [
          "SAP Business One Integration",
          "Odoo ERP Connector",
          "Third-Party ERP & Custom API Integration",
          "Accounting Software Connectors",
        ],
        icon: Server,
        color: "text-amber-600",
        bgColor: "bg-amber-50/50",
      },
      {
        title: "InvoiceFlow Compliance",
        desc: "Automatically validate and prepare invoices to match UAE electronic invoicing regulations.",
        points: [
          "XML Validation & Formatting",
          "Mandatory Field Auditing",
          "VAT & Tax Calculation Checking",
          "Digital Signature Embedding",
        ],
        icon: ShieldCheck,
        color: "text-orange-600",
        bgColor: "bg-orange-50/50",
      },
      {
        title: "InvoiceFlow Exchange",
        desc: "Exchange electronic invoices securely with customer, vendor, and governmental endpoints.",
        points: [
          "Outbound Invoice Submissions",
          "Inbound Invoice Receipts",
          "Real-Time Delivery & Status Confirmation",
          "Error Handling & Retry Protocols",
        ],
        icon: RefreshCw,
        color: "text-red-600",
        bgColor: "bg-red-50/50",
      },
      {
        title: "InvoiceFlow Monitoring",
        desc: "A centralized dashboard to track all billing operations, statuses, and exceptions.",
        points: [
          "Real-Time Billing Status Dashboard",
          "Submission Acceptance & Rejections Logs",
          "Compliance Exception Alerts",
          "Audit History Logging",
        ],
        icon: Eye,
        color: "text-yellow-600",
        bgColor: "bg-yellow-50/50",
      },
      {
        title: "InvoiceFlow Administration",
        desc: "Manage multiple entities, permissions, roles, and certificates in one place.",
        points: [
          "Multi-Entity & Group Management",
          "User Role & Permissions Control",
          "Certificate & Cryptographic Keys Manager",
          "Full System Audit Trail",
        ],
        icon: Settings,
        color: "text-indigo-600",
        bgColor: "bg-indigo-50/50",
      },
    ],
    industriesTitle: "Ready for Every Industry Sector",
    industriesDesc:
      "InvoiceFlow supports organizations of all sizes, especially those with high billing volume and multiple entities.",
    industries: [
      "Distribution Companies",
      "Manufacturing Groups",
      "Retail Chains",
      "Healthcare Providers",
      "Logistics & Transport",
      "Professional Services",
      "Construction & Contracting",
      "Automotive Services",
      "FMCG Groups",
      "Multi-Company Groups",
      "Regional Enterprises",
    ],
    whyTitle: "Why Choose InvoiceFlow?",
    whyDesc:
      "InvoiceFlow blends direct ERP database expertise with deep understanding of local Gulf accounting and compliance.",
    whyBullets: [
      "Direct integration with SAP Business One and Odoo databases—no manual exports",
      "Designed specifically around upcoming UAE tax regulations and Peppol framework",
      "Complete managed implementation: from assessment, data cleaning, testing to support",
      "Scalable to GCC regional requirements including Saudi Arabia (ZATCA), Oman, and Qatar",
      "Continuous regulatory updates keeping your ERP compliant as regulations change",
    ],
    faqs: [
      {
        question: "Is InvoiceFlow only for SAP Business One?",
        answer:
          "No. While optimized for SAP Business One and Odoo ERP, InvoiceFlow is designed to integrate with other ERP and accounting systems through secure APIs.",
      },
      {
        question:
          "Can InvoiceFlow support both outbound and inbound electronic invoices?",
        answer:
          "Yes. The platform supports issuing electronic invoices to customers as well as receiving and processing supplier invoices, depending on the regulatory framework and implementation scope.",
      },
      {
        question: "Will InvoiceFlow adapt to future UAE regulations?",
        answer:
          "Yes. InvoiceFlow is designed with a modular architecture that allows updates as UAE e-invoicing regulations and technical standards evolve.",
      },
      {
        question: "Do you provide implementation and ongoing support?",
        answer:
          "Absolutely. ALLE TECH offers readiness assessments, implementation, ERP integration, testing, training, go-live assistance, and long-term managed services.",
      },
    ],
    ctaTitle: "Be Ready Before Compliance Becomes Mandatory",
    ctaSubtitle:
      "Electronic invoicing is an opportunity to modernize your financial operations, improve efficiency, and strengthen digital collaboration.",
    ctaButton1: { label: "Book an E-Invoicing Assessment", href: "/contact" },
    ctaButton2: {
      label: "Speak with an E-Invoicing Consultant",
      href: "/contact",
    },
  },
];
