export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  {
    label: "Resources",
    href: "/blogs",
    dropdown: [
      { label: "Blog & Articles", href: "/blogs" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const LOGO_URL = "/images/logo.png";

export const CONTACT_INFO = {
  email: "info@alle-tech.com",
  salesEmail: "Yaazin@alle-tech.com",
  phone: "04 299 6767",
  address: "UAE, Dubai, DAFZA, D-05",
};

export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/alle-tech-fzco/",
  },
];

export const PRODUCTS = [
  {
    slug: "repprox",
    title: "RepProX",
    description: "AI-Powered Field Operations Platform",
    points: [
      "Sales Force Automation",
      "Field Service & Delivery Management",
      "Warehouse & Inventory Management",
      "Business Intelligence & AI Insights",
      "SAP Business One & Odoo Integration",
    ],
  },
  {
    slug: "transsync",
    title: "TransSync",
    description: "Intelligent Intercompany Management Platform",
    points: [
      "Intercompany Automation",
      "Master Data Synchronization",
      "Financial Reconciliation",
      "Multi-Company Management",
      "SAP Business One Integration",
    ],
  },
  {
    slug: "freight-pulse",
    title: "Freight Pulse",
    description: "Digital Logistics Platform",
    points: [
      "Freight & Transport Management",
      "Warehouse & Customs Management",
      "Customer Portal",
      "Logistics Analytics & AI Planning",
      "Complete Shipment Lifecycle Management",
    ],
  },
  {
    slug: "engageflow",
    title: "EngageFlow",
    description: "Customer Communication Platform",
    points: [
      "Email & WhatsApp Automation",
      "Customer Statements & Payment Reminders",
      "Marketing Campaigns",
      "Internal Notifications",
      "Business Rule Engine & Multi-Channel Communication",
    ],
  },
  {
    slug: "invoiceflow",
    title: "InvoiceFlow",
    description: "UAE E-Invoicing Platform",
    points: [
      "UAE E-Invoicing Compliance",
      "ERP Integration & Invoice Exchange",
      "Invoice Validation",
      "Monitoring & Administration",
      "Readiness Assessment & Managed Services",
    ],
  },
];

export const SOLUTIONS = [
  {
    slug: "sap-business-one",
    number: "01",
    title: "SAP Business One",
    description:
      "Streamline your business with an integrated ERP solution that simplifies operations, improves visibility, and drives growth.",
    image: "/images/our-solutions/SAP%20Business%20One.png",
    tags: ["Financial Management", "Sales & CRM"],
  },
  {
    slug: "odoo-erp",
    number: "02",
    title: "Odoo ERP",
    description:
      "Simplify and automate your business processes with a flexible ERP platform that connects every department in one system.",
    image: "/images/our-solutions/Odoo%20ERP.png",
    tags: ["Finance & Accounting", "Sales & CRM", "Inventory & Operations"],
  },
  {
    slug: "technology-consulting",
    number: "03",
    title: "Technology Consulting & Digital Transformation",
    description:
      "Accelerate business growth with expert technology consulting, digital innovation, and tailored transformation strategies.",
    image:
      "/images/our-solutions/Technology%20Consulting%20%26%20Digital%20Transformation.png",
    tags: ["Digital Strategy", "Process Automation", "IT Modernization"],
  },
  {
    slug: "business-intelligence",
    number: "04",
    title: "Business Intelligence & Power BI",
    description:
      "Transform your data into actionable insights with interactive dashboards, real-time analytics, and intelligent reporting.",
    image:
      "/images/our-solutions/Business%20Intelligence%20%26%20Power%20BI.png",
    tags: ["Interactive Dashboards", "Real-Time Analytics", "Custom Reports"],
  },
  {
    slug: "erp-integration",
    number: "05",
    title: "ERP Integration & Enterprise Connectivity",
    description:
      "Seamlessly connect your business systems to streamline workflows, improve data accuracy, and enable real-time collaboration.",
    image:
      "/images/our-solutions/ERP%20Integration%20%26%20Enterprise%20Connectivity.png",
    tags: ["System Integration", "API Connectivity", "Data Synchronization"],
  },
  {
    slug: "cloud-infrastructure",
    number: "06",
    title: "Cloud & IT Infrastructure Services",
    description:
      "Build a secure, scalable, and reliable IT environment with modern cloud solutions and infrastructure management.",
    image:
      "/images/our-solutions/Cloud%20%26%20IT%20Infrastructure%20Services.png",
    tags: ["Cloud Migration", "Infrastructure Management", "Security & Backup"],
  },
  {
    slug: "managed-services",
    number: "07",
    title: "Managed Services & Technology Support",
    description:
      "Keep your business running smoothly with proactive IT management, continuous monitoring, and expert technical support.",
    image:
      "/images/our-solutions/Managed%20Services%20%26%20Technology%20Support.png",
    tags: ["24/7 Monitoring", "Help Desk Support", "System Maintenance"],
  },
];

export const INDUSTRIES = [
  {
    slug: "distribution-wholesale",
    title: "Distribution & Wholesale",
    description:
      "Complete visibility across purchasing, inventory, warehousing, pricing, sales, deliveries, collections, and customer service.",
    typicalSolutions: [
      "ERP",
      "Warehouse Management",
      "Sales Automation",
      "Customer Portals",
      "AI Analytics",
      "Power BI",
      "Barcode Solutions",
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    description:
      "Operational control across production planning, procurement, inventory, quality, costing, and financial management.",
    typicalSolutions: [
      "Production Management",
      "Material Planning",
      "Quality Control",
      "Cost Analysis",
      "Manufacturing KPIs",
      "AI Analytics",
    ],
  },
  {
    slug: "logistics-supply-chain",
    title: "Logistics & Supply Chain",
    description:
      "Shipment visibility, documentation, warehousing, transportation, customs, and financial control for dynamic logistics environments.",
    typicalSolutions: [
      "Freight Forwarding",
      "Warehouse Operations",
      "Transportation",
      "Customs",
      "Customer Portal",
      "Job Costing",
      "AI Logistics",
    ],
  },
  {
    slug: "retail",
    title: "Retail",
    description:
      "Real-time visibility into inventory, customers, sales, purchasing, promotions, and financial performance.",
    typicalSolutions: [
      "POS",
      "Inventory",
      "CRM",
      "Loyalty",
      "Marketing",
      "BI",
      "Mobile Apps",
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    description:
      "Operational efficiency alongside compliance, patient service, inventory control, procurement, HR, and financial management.",
    typicalSolutions: [
      "ERP",
      "Inventory",
      "Procurement",
      "HR",
      "Reporting",
      "AI",
      "Dashboards",
    ],
  },
  {
    slug: "construction",
    title: "Construction",
    description:
      "Accurate project costing, procurement, inventory, subcontractor management, equipment control, and financial reporting.",
    typicalSolutions: [
      "Project Management",
      "Procurement",
      "Cost Control",
      "Asset Management",
      "Financial Reporting",
    ],
  },
  {
    slug: "automotive",
    title: "Automotive",
    description:
      "Complete visibility across vehicle sales, spare parts, workshops, inventory, customer service, warranties, and financial management.",
    typicalSolutions: [
      "Inventory",
      "Workshop Operations",
      "CRM",
      "Mobile Field Teams",
      "Reporting",
    ],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    description:
      "Integrated project management, financial control, resource planning, and business intelligence for consulting and service firms.",
    typicalSolutions: [
      "Projects",
      "Timesheets",
      "Billing",
      "CRM",
      "Dashboards",
      "AI",
    ],
  },
  {
    slug: "food-beverage",
    title: "Food & Beverage",
    description:
      "Batch traceability, expiry management, inventory control, quality assurance, and efficient distribution.",
    typicalSolutions: [
      "Batch Tracking",
      "Expiry Management",
      "Distribution",
      "Warehouse",
      "RepProX",
    ],
  },
  {
    slug: "e-commerce",
    title: "E-Commerce",
    description:
      "Integrated operations connecting websites, inventory, warehousing, logistics, finance, customer service, and marketing.",
    typicalSolutions: [
      "ERP Integration",
      "Payment Gateway Integration",
      "Customer Portal",
      "BI",
      "Warehouse Integration",
    ],
  },
];

export const FAQS = [
  {
    question: "1. What does ALLE TECH do?",
    answer:
      "ALLE TECH is a Business Technology Partner that helps organizations improve operations through ERP solutions, Artificial Intelligence, Business Intelligence, automation, cloud technologies, enterprise integrations, and industry-specific business applications.",
  },
  {
    question: "2. Which industries do you serve?",
    answer:
      "We work with businesses across manufacturing, distribution, logistics, retail, healthcare, construction, professional services, food & beverage, automotive, and other industries, delivering solutions tailored to each organization's operational needs.",
  },
  {
    question: "3. Do you only implement ERP solutions?",
    answer:
      "No. While we specialize in SAP Business One and Odoo ERP, our services extend to AI, Power BI, business automation, cloud infrastructure, enterprise integrations, managed services, mobile applications, and digital transformation consulting.",
  },
  {
    question: "4. How do you approach a new project?",
    answer:
      "Every engagement begins by understanding your business objectives, challenges, and processes before recommending technology. Our business-first approach ensures every solution aligns with your long-term goals.",
  },
  {
    question: "5. Can you integrate with our existing systems?",
    answer:
      "Yes. We design and implement enterprise integrations that connect ERP, CRM, finance, warehouse, logistics, HR, and third-party applications to create a unified business ecosystem.",
  },
  {
    question: "6. Do you provide support after implementation?",
    answer:
      "Absolutely. Our partnership continues beyond go-live with optimization, managed services, technical support, system enhancements, and continuous innovation to ensure long-term business success.",
  },
  {
    question: "7. How can AI help my business?",
    answer:
      "Artificial Intelligence can automate repetitive tasks, provide predictive insights, improve decision-making, enhance customer experiences, and help your organization operate more efficiently.",
  },
  {
    question: "8. Why choose ALLE TECH over other technology providers?",
    answer:
      "We focus on understanding your business before recommending technology. By combining strategic consulting, industry expertise, and modern business technologies, we deliver measurable outcomes—not just software implementations.",
  },
  {
    question: "9. How long does a digital transformation project take?",
    answer:
      "Project timelines depend on the scope, complexity, and business requirements. After understanding your objectives, we provide a structured implementation roadmap with clear milestones and deliverables.",
  },
  {
    question: "10. How do I get started with ALLE TECH?",
    answer:
      "Simply schedule a consultation with our team. We'll assess your current challenges, discuss your business goals, and recommend the most suitable technology strategy for your organization.",
  },
];

export const PRICING_PLANS = [
  {
    name: "Basic Clean",
    price: "$49",
    period: "/ Per Month",
    description: "Enhanced cleaning with extra care.",
    popular: false,
    features: [
      "General dusting & wiping",
      "Floor cleaning & vacuuming",
      "Bathroom & kitchen cleaning",
      "Window and mirror polishing",
    ],
  },
  {
    name: "Standard Clean",
    price: "$79",
    period: "/ Per Month",
    description: "Everything in Basic Plan",
    popular: true,
    features: [
      "Everything in Basic Plan",
      "Trash removal",
      "Window and mirror polishing",
      "Furniture dusting and polishing",
      "Floor cleaning & vacuuming",
      "Bathroom & kitchen cleaning",
    ],
  },
  {
    name: "Business Plan",
    price: "$99",
    period: "/ Per Month",
    description: "Everything in Basic & Standard Plan",
    popular: false,
    features: [
      "Everything in Basic & Standard Plan",
      "Floor cleaning & vacuuming",
      "General dusting & wiping",
      "Bathroom & kitchen cleaning",
      "Window and mirror polishing",
      "Trash removal",
    ],
  },
];
