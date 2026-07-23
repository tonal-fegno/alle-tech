export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "list"; items: string[] };

export interface BlogPost {
  id: string;
  slug?: string;
  title: string;
  description: string;
  shortDescription?: string;
  category: string;
  image: string;
  imageVisible?: boolean;
  date: string;
  readTime: string;
  time?: string;
  size?: "large" | "medium" | "small";
  featured?: boolean;
  body?: BlogBlock[];
  content01?: string | null;
  content01Visible?: boolean;
  content02?: string | null;
  content02Visible?: boolean;
  bodyImage01?: string | null;
  bodyImage02?: string | null;
  bodyImageVisible?: boolean;
  banner?: string | null;
  bannerVisible?: boolean;
}

export interface Resource {
  id: string;
  title: string;
  type: string;
  downloadUrl: string;
}

export const CATEGORIES = [
  "All",
  "SAP Business One",
  "ERP",
  "Digital Transformation",
  "AI",
  "Manufacturing",
  "Retail",
  "Warehouse",
  "Cloud",
  "Success Stories",
] as const;

export const TRENDING_TOPICS = [
  "SAP Business One v10",
  "Predictive WMS",
  "Enterprise AI Agents",
  "Cloud Migration",
  "IoT Integrations",
  "B2B Retail Automation",
];

export const DOWNLOADABLE_RESOURCES: Resource[] = [
  {
    id: "res-1",
    title: "SAP Business One Implementation Blueprint",
    type: "Whitepaper",
    downloadUrl: "#",
  },
  {
    id: "res-2",
    title: "Modernizing Warehouse Operations with AI & WMS",
    type: "eBook",
    downloadUrl: "#",
  },
  {
    id: "res-3",
    title: "2026 ERP Migration Risk Mitigation Guide",
    type: "Guide",
    downloadUrl: "#",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-odoo-erp",
    slug: "odoo-erp-flexible-business-platform",
    title: "Odoo ERP: The Flexible Business Platform for Modern Enterprises",
    description:
      "Odoo ERP brings every core business function into one integrated platform, giving organizations the efficiency, visibility, and control they need to operate and scale with confidence.",
    shortDescription:
      "Odoo ERP brings every core business function into one integrated platform, giving organizations the efficiency, visibility, and control they need to operate and scale with confidence.",
    category: "ERP",
    image: "/images/common/featured-sap.png",
    imageVisible: true,
    date: "July 19, 2026",
    readTime: "6 Min Read",
    time: "6 Min Read",
    size: "medium",
    body: [
      {
        type: "p",
        text: "In today's fast-paced business environment, organizations need more than standalone applications and manual processes. As companies grow, disconnected systems often create inefficiencies, making it difficult to manage operations, collaborate across departments, and make informed decisions. Odoo ERP addresses these challenges by bringing every core business function into one integrated platform, enabling organizations to operate with greater efficiency, visibility, and control.",
      },
      { type: "h2", text: "Why Businesses Are Choosing Odoo ERP" },
      {
        type: "p",
        text: "Unlike traditional ERP systems, Odoo offers a modular and flexible approach that allows businesses to implement only the applications they need today while retaining the ability to expand as they grow. From finance and sales to inventory, manufacturing, HR, CRM, and eCommerce, every module works seamlessly together, providing a single source of truth across the organization.",
      },
      {
        type: "p",
        text: "This connected ecosystem eliminates duplicate data entry, reduces manual effort, improves collaboration, and provides real-time insights that support faster and more confident decision-making.",
      },
      { type: "h2", text: "Key Benefits of Odoo ERP" },
      {
        type: "list",
        items: [
          "Unified Business Operations — manage finance, sales, purchasing, inventory, manufacturing, projects, HR, marketing, and customer service through one centralized platform.",
          "Increased Productivity — automate repetitive tasks and streamline workflows, allowing employees to focus on higher-value activities that drive business growth.",
          "Real-Time Business Visibility — access live dashboards and comprehensive reports to monitor performance, track KPIs, and make data-driven decisions.",
          "Flexibility & Scalability — Odoo adapts to businesses of all sizes and industries, making it easy to add new modules, users, or business processes as your organization evolves.",
          "Better Customer Experience — connect customer information, sales activities, service requests, and communications to deliver faster responses and stronger customer relationships.",
        ],
      },
      { type: "h2", text: "Industries That Benefit from Odoo ERP" },
      {
        type: "p",
        text: "Odoo ERP is widely adopted across industries including distribution and wholesale, manufacturing, retail and e-commerce, healthcare, professional services, construction, logistics and supply chain, food and beverage, and automotive.",
      },
      {
        type: "p",
        text: "Its flexibility enables businesses to tailor workflows and processes to meet industry-specific requirements without compromising operational efficiency.",
      },
      { type: "h2", text: "Why the Right Implementation Partner Matters" },
      {
        type: "p",
        text: "The success of an ERP project depends not only on the software but also on the implementation approach. A business-first strategy ensures that technology aligns with operational goals, existing processes, and future growth plans.",
      },
      {
        type: "p",
        text: "At ALLE TECH, we begin every Odoo ERP project by understanding your business, identifying opportunities for improvement, and designing a solution that delivers measurable business value. Our services include consulting, implementation, customization, integration, user training, and ongoing managed support, helping organizations maximize the long-term value of their ERP investment.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Odoo ERP is more than a business management system — it's a platform that enables organizations to simplify operations, improve collaboration, and accelerate digital transformation. By connecting every department into one intelligent ecosystem, businesses gain the agility, visibility, and scalability needed to compete in an increasingly digital world.",
      },
      {
        type: "p",
        text: "Whether you're replacing legacy software or implementing ERP for the first time, Odoo ERP provides the foundation for smarter operations, better decision-making, and sustainable business growth.",
      },
    ],
  },
  {
    id: "post-cloud-vs-onprem",
    slug: "cloud-vs-on-premise-erp",
    title: "Cloud vs On-Premise ERP: Which Is the Right Choice for Your Business?",
    description:
      "Cloud and on-premise ERP each offer distinct advantages. Here's how to weigh cost, control, scalability, and security to choose the deployment model that fits your business.",
    shortDescription:
      "Cloud and on-premise ERP each offer distinct advantages. Here's how to weigh cost, control, scalability, and security to choose the deployment model that fits your business.",
    category: "Cloud",
    image: "/images/common/cloud-network.png",
    imageVisible: true,
    date: "July 17, 2026",
    readTime: "7 Min Read",
    time: "7 Min Read",
    size: "medium",
    body: [
      {
        type: "p",
        text: "Choosing an Enterprise Resource Planning (ERP) system is one of the most important technology decisions a business can make. Equally important is deciding how your ERP will be deployed. Organizations today have two primary options: Cloud ERP and On-Premise ERP. Each approach offers unique advantages, and selecting the right one depends on your business goals, budget, operational requirements, and long-term growth strategy.",
      },
      {
        type: "p",
        text: "Understanding the differences between these deployment models can help organizations make informed decisions that support both current needs and future expansion.",
      },
      { type: "h2", text: "What is Cloud ERP?" },
      {
        type: "p",
        text: "Cloud ERP is hosted on secure cloud infrastructure and accessed through the internet. Instead of maintaining servers and infrastructure in-house, businesses use ERP software that is managed by the cloud provider or implementation partner. This model allows employees to securely access business data from anywhere using desktops, laptops, tablets, or mobile devices.",
      },
      { type: "h2", text: "Benefits of Cloud ERP" },
      {
        type: "list",
        items: [
          "Lower Initial Investment — eliminates the need for expensive server infrastructure and hardware, reducing upfront costs.",
          "Remote Accessibility — employees can securely access the system from any location, enabling remote work and mobile workforce management.",
          "Automatic Updates — software updates, security patches, and new features are deployed regularly.",
          "Scalability — additional users, storage, and resources can be added quickly without major infrastructure changes.",
          "Business Continuity — built-in backup, disaster recovery, and high availability features minimize downtime and protect business data.",
        ],
      },
      { type: "h2", text: "What is On-Premise ERP?" },
      {
        type: "p",
        text: "On-Premise ERP is installed and managed on servers located within the organization's own infrastructure. The business has complete ownership and control over its hardware, software, and data. This deployment model is often preferred by organizations with strict regulatory, security, or operational requirements.",
      },
      { type: "h2", text: "Benefits of On-Premise ERP" },
      {
        type: "list",
        items: [
          "Complete Control — organizations maintain full control over system configuration, infrastructure, data storage, and security policies.",
          "Customization — businesses with highly specialized processes can implement extensive customizations.",
          "Internal Data Management — sensitive business information remains within the organization's own infrastructure, which may be important for compliance or governance.",
          "Long-Term Investment — for organizations with stable infrastructure and dedicated IT teams, on-premise ERP can provide predictable long-term ownership.",
        ],
      },
      { type: "h2", text: "Cloud ERP vs On-Premise ERP at a Glance" },
      {
        type: "list",
        items: [
          "Initial cost: lower for Cloud, higher for On-Premise",
          "Infrastructure: provider-managed for Cloud, internally managed for On-Premise",
          "Accessibility: available anywhere with internet for Cloud, internal network or VPN for On-Premise",
          "Software updates: automatic for Cloud, manual for On-Premise",
          "Scalability: easy for Cloud, requires hardware upgrades for On-Premise",
          "Maintenance: provider-managed for Cloud, internal IT team for On-Premise",
          "Disaster recovery: built-in for Cloud, organization-managed for On-Premise",
          "Deployment time: faster for Cloud, longer for On-Premise",
        ],
      },
      { type: "h2", text: "Which Option is Right for Your Business?" },
      {
        type: "p",
        text: "Cloud ERP is generally ideal for businesses that want faster deployment, reduced IT management, flexible scalability, and remote accessibility. It enables organizations to focus on business growth while leaving infrastructure management to trusted technology partners.",
      },
      {
        type: "p",
        text: "On-Premise ERP may be the better choice for organizations that require complete infrastructure control, have strict compliance requirements, or already maintain a dedicated IT environment capable of managing enterprise systems.",
      },
      {
        type: "p",
        text: "The right decision ultimately depends on your organization's operational needs, security policies, available resources, and long-term technology strategy.",
      },
      { type: "h2", text: "How ALLE TECH Can Help" },
      {
        type: "p",
        text: "Selecting an ERP deployment model is more than a technical decision — it's a strategic business decision. At ALLE TECH, we help organizations evaluate their business requirements, infrastructure, growth plans, and security considerations before recommending the most suitable ERP deployment approach.",
      },
      {
        type: "p",
        text: "Whether you're implementing Odoo ERP in the cloud, deploying it on-premise, or planning a hybrid strategy, our consultants provide end-to-end support, including planning, implementation, customization, migration, integration, training, and ongoing managed services.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "There is no one-size-fits-all approach to ERP deployment. Both Cloud ERP and On-Premise ERP offer significant advantages when aligned with the right business strategy.",
      },
      {
        type: "p",
        text: "By understanding the strengths of each model and partnering with experienced ERP consultants, organizations can build a technology foundation that supports operational efficiency, business agility, and sustainable long-term growth.",
      },
    ],
  },
  {
    id: "post-outgrown-spreadsheets",
    slug: "signs-you-need-an-erp-system",
    title:
      "7 Signs Your Business Has Outgrown Spreadsheets and Needs an ERP System",
    description:
      "If your team spends more time updating files than making decisions, spreadsheets may be holding your business back. Here are seven signs it's time to move to an ERP system.",
    shortDescription:
      "If your team spends more time updating files than making decisions, spreadsheets may be holding your business back. Here are seven signs it's time to move to an ERP system.",
    category: "ERP",
    image: "/images/common/retail-ops.png",
    imageVisible: true,
    date: "July 15, 2026",
    readTime: "6 Min Read",
    time: "6 Min Read",
    size: "medium",
    body: [
      {
        type: "p",
        text: "For many businesses, spreadsheets are where everything begins. They're simple, familiar, and cost-effective for managing finances, inventory, customer information, and daily operations. However, as organizations grow, spreadsheets often become a barrier rather than a solution.",
      },
      {
        type: "p",
        text: "If your team spends more time updating files than making business decisions, it may be time to consider an Enterprise Resource Planning (ERP) system like Odoo ERP. Here are seven common signs that your business has outgrown spreadsheets.",
      },
      { type: "h2", text: "1. Your Data Is Scattered Across Multiple Files" },
      {
        type: "p",
        text: "Different departments maintain their own spreadsheets, resulting in multiple versions of the same information. Sales, finance, purchasing, and inventory teams often work with separate data, leading to inconsistencies and confusion.",
      },
      {
        type: "p",
        text: "An ERP system centralizes all business information into a single database, ensuring every department works with accurate, real-time data.",
      },
      { type: "h2", text: "2. Manual Data Entry Is Taking Too Much Time" },
      {
        type: "p",
        text: "Entering the same information into multiple spreadsheets increases the chances of errors and consumes valuable employee time.",
      },
      {
        type: "p",
        text: "With Odoo ERP, information is entered once and automatically shared across relevant modules, reducing duplication and improving productivity.",
      },
      {
        type: "h2",
        text: "3. You Don't Have Real-Time Business Visibility",
      },
      {
        type: "p",
        text: "Can you instantly answer questions like these?",
      },
      {
        type: "list",
        items: [
          "How much inventory is available?",
          "Which customers have overdue payments?",
          "What are today's sales figures?",
          "Which products generate the highest profit?",
        ],
      },
      {
        type: "p",
        text: "If generating reports takes hours — or even days — your business lacks real-time visibility. ERP dashboards provide instant access to critical business information whenever you need it.",
      },
      { type: "h2", text: "4. Teams Are Working in Silos" },
      {
        type: "p",
        text: "When departments use different systems, communication becomes slower and collaboration suffers.",
      },
      {
        type: "p",
        text: "Sales may not know current inventory levels, finance may wait for purchasing updates, and customer service may struggle to access order information.",
      },
      {
        type: "p",
        text: "An integrated ERP platform connects every department, allowing teams to collaborate more effectively.",
      },
      { type: "h2", text: "5. Business Processes Depend on Individuals" },
      {
        type: "p",
        text: "If important knowledge exists only with specific employees, your business becomes vulnerable whenever someone is unavailable.",
      },
      {
        type: "p",
        text: "ERP systems standardize workflows, approvals, and business processes, reducing dependency on individuals and improving operational consistency.",
      },
      { type: "h2", text: "6. Reporting Takes Too Long" },
      {
        type: "p",
        text: "Business leaders need timely information to make informed decisions.",
      },
      {
        type: "p",
        text: "If your management team waits until the end of the week — or month — to understand business performance, opportunities may already be lost.",
      },
      {
        type: "p",
        text: "Odoo ERP generates interactive dashboards and automated reports that provide real-time insights into sales, finance, inventory, purchasing, and operations.",
      },
      {
        type: "h2",
        text: "7. Your Business Is Growing Faster Than Your Systems",
      },
      {
        type: "p",
        text: "Opening new branches, expanding product lines, hiring more employees, or entering new markets becomes increasingly difficult when operations rely on spreadsheets.",
      },
      {
        type: "p",
        text: "An ERP system is designed to scale with your business, supporting increased transactions, users, locations, and operational complexity without sacrificing efficiency.",
      },
      { type: "h2", text: "How Odoo ERP Solves These Challenges" },
      {
        type: "p",
        text: "Odoo ERP brings every core business function together in one connected platform, including:",
      },
      {
        type: "list",
        items: [
          "Finance & Accounting",
          "Sales & CRM",
          "Inventory & Warehouse",
          "Purchasing",
          "Manufacturing",
          "Human Resources",
          "Projects",
          "Marketing",
          "Customer Service",
          "eCommerce",
        ],
      },
      {
        type: "p",
        text: "By connecting these functions, businesses gain better visibility, improved collaboration, automated workflows, and faster decision-making.",
      },
      { type: "h2", text: "Why Choose ALLE TECH?" },
      {
        type: "p",
        text: "Implementing an ERP system is about more than technology — it's about improving the way your business operates.",
      },
      {
        type: "p",
        text: "At ALLE TECH, we take a business-first approach to every Odoo ERP implementation. We analyze your existing processes, identify improvement opportunities, and configure the system to match your operational requirements. From consulting and implementation to customization, integration, training, and ongoing support, we help organizations maximize the value of their ERP investment.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Spreadsheets are excellent tools for small tasks, but they weren't designed to run growing businesses.",
      },
      {
        type: "p",
        text: "If your organization is experiencing disconnected information, manual processes, reporting delays, or operational inefficiencies, it may be time to move to a modern ERP platform. Odoo ERP provides the flexibility, scalability, and intelligence needed to streamline operations, improve collaboration, and support sustainable business growth — giving your business the foundation it needs to succeed today and in the future.",
      },
    ],
  },
];
