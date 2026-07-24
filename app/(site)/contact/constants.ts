export interface ContactFaq {
  q: string;
  a: string;
}

export const contactFaqs: ContactFaq[] = [
  {
    q: "How quickly will I receive a response after submitting a contact form?",
    a: "We value your time and business needs. Our enterprise consulting team typically reviews all inquiries and responds within 24 business hours to schedule an initial discovery discussion.",
  },
  {
    q: "What does the initial discovery session involve?",
    a: "Our initial discovery session is a complimentary 30-minute online consultation. We'll discuss your current software infrastructure, key operational paint points, project timeline, and desired business outcomes to outline how we can help.",
  },
  {
    q: "Do you support remote implementations and support globally?",
    a: "Yes, we support businesses worldwide. While our main office is located in Shiloh, Hawaii, we offer full-cycle remote deployments, remote training, and 24/7 cloud systems monitoring to ensure seamless cross-border operations.",
  },
  {
    q: "Can you assist with migration from legacy ERP systems to modern solutions?",
    a: "Absolutely. We specialize in legacy database migration. We can audit your data structures and guide a secure transition into modern solutions (like SAP Business One) with minimal business downtime and complete data integrity.",
  },
];

export const PAIN_POINTS = [
  { id: "erp", label: "ERP Implementation (SAP Business One / Odoo)" },
  { id: "automation", label: "Business Process Automation" },
  { id: "ai", label: "Artificial Intelligence (AI) Solutions" },
  { id: "bi", label: "Business Intelligence & Power BI" },
  { id: "integration", label: "ERP Integration & System Connectivity" },
  { id: "cloud", label: "Cloud & IT Infrastructure" },
  { id: "managed_it", label: "Managed IT Services & Support" },
  { id: "consulting", label: "Digital Transformation Consulting" },
  { id: "strategy", label: "Technology Strategy & IT Consulting" },
  { id: "warehouse", label: "Warehouse & Inventory Solutions" },
  { id: "compliance", label: "UAE E-Invoicing & Compliance" },
  { id: "other", label: "Other (Please Specify)" },
];

export const fadeUpOnly = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};
