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

export const LOGO_URL = "/assets/images/logo.png";

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
