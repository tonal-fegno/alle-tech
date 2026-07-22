export interface Solution {
  id: string;
  title: string;
  description: string;
  tags: [string, string];
  image: string;
  features: string[];
}

export const SOLUTIONS: Solution[] = [
  {
    id: "sap-business-one",
    title: "SAP Business One",
    description:
      "Streamline your operations with SAP Business One, an intelligent ERP connecting finance, sales, inventory, and production in one unified platform.",
    tags: ["ERP Systems", "SAP"],
    image: "/assets/images/solutions/sap_one.png",
    features: [
      "Business Process Assessment & ERP Consulting",
      "SAP Business One Implementation",
      "Customization & Add-on Development",
      "Data Migration & System Integration",
      "User Training & Change Management",
      "Ongoing Support & Managed Services",
    ],
  },
  {
    id: "odoo-erp",
    title: "Odoo ERP",
    description:
      "Unify finance, CRM, sales, inventory, and HR with Odoo ERP—a highly flexible, automated platform tailored to your unique workflows.",
    tags: ["ERP Systems", "Odoo"],
    image: "/assets/images/solutions/odoo.png",
    features: [
      "Odoo Consulting & Strategy",
      "End-to-End ERP Implementation",
      "Custom Module Development",
      "Workflow Automation",
      "Third-Party Integrations",
      "Training, Support & Optimization",
    ],
  },
  {
    id: "technology-consulting",
    title: "Technology Consulting & Digital Transformation",
    description:
      "Align strategy with modern technology to drive efficiency, automate operations, and build practical digital transformation roadmaps.",
    tags: ["Consulting", "Strategy"],
    image: "/assets/images/solutions/technology.png",
    features: [
      "Digital Transformation Strategy",
      "Business Process Assessment",
      "ERP Selection & Technology Advisory",
      "AI Readiness & Automation Consulting",
      "Digital Maturity Assessment",
      "Executive Technology Advisory",
    ],
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence & Power BI",
    description:
      "Convert scattered operational data into live Power BI dashboards and reports that deliver actionable insights in real time.",
    tags: ["BI & Analytics", "Power BI"],
    image: "/assets/images/solutions/power_bi.png",
    features: [
      "Business Intelligence Strategy",
      "Power BI Dashboard Development",
      "KPI & Executive Reporting",
      "Data Integration",
      "Financial & Operational Analytics",
      "Custom Business Intelligence Solutions",
    ],
  },
  {
    id: "erp-integration",
    title: "ERP Integration & Enterprise Connectivity",
    description:
      "Eliminate manual data entry by connecting your ERP with eCommerce, CRM, banks, and other third-party enterprise platforms.",
    tags: ["Integration", "Connectivity"],
    image: "/assets/images/solutions/erp.png",
    features: [
      "ERP & CRM Integration",
      "Warehouse & Logistics Integration",
      "eCommerce Integration",
      "Banking & Payment Integration",
      "API Development",
      "Custom Enterprise Integrations",
    ],
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud & IT Infrastructure Services",
    description:
      "Build secure, scalable, and resilient cloud architectures across Azure, AWS, and private environments to ensure business continuity.",
    tags: ["Cloud", "Infrastructure"],
    image: "/assets/images/solutions/cloud_it.png",
    features: [
      "Cloud Consulting & Migration",
      "Cloud Hosting & Infrastructure",
      "Network Design & Implementation",
      "Cybersecurity Solutions",
      "Backup & Disaster Recovery",
      "Managed Infrastructure Services",
    ],
  },
  {
    id: "managed-services",
    title: "Managed Services & Technology Support",
    description:
      "Keep your ERP, cloud, and core applications running at peak performance with proactive support and continuous optimization.",
    tags: ["Managed IT", "Support"],
    image: "/assets/images/solutions/services_support.png",
    features: [
      "Functional & Technical Support",
      "Application Management",
      "System Health Checks",
      "Performance Optimization",
      "Version Upgrades & Enhancements",
      "Continuous Managed Services",
    ],
  },
];
