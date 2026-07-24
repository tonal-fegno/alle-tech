import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

import { db } from "./index";
import {
  aboutStats,
  blogs,
  caseStudies,
  clientLogos,
  faqs,
  industries,
  menus,
  products,
  solutions,
  teamMembers,
  testimonials,
  users,
} from "./schema";
import { ABOUT_STATS_SEED } from "./seed-data/about-stats";
import { BLOGS_SEED } from "./seed-data/blogs";
import { CASE_STUDIES_SEED } from "./seed-data/case-studies";
import { CLIENT_LOGOS_SEED } from "./seed-data/client-logos";
import { FAQS_SEED } from "./seed-data/faqs";
import { INDUSTRIES_SEED } from "./seed-data/industries";
import { PRODUCTS_SEED } from "./seed-data/products";
import { SOLUTIONS_SEED } from "./seed-data/solutions";
import { TEAM_MEMBERS_SEED } from "./seed-data/team-members";
import { TESTIMONIALS_SEED } from "./seed-data/testimonials";

async function seedAdminUser() {
  const email = process.env.SEED_ADMIN_EMAIL;
  const password = process.env.SEED_ADMIN_PASSWORD;

  if (!email || !password) {
    throw new Error(
      "SEED_ADMIN_EMAIL and SEED_ADMIN_PASSWORD must be set (see .env.local)"
    );
  }

  const [existing] = await db
    .select()
    .from(users)
    .where(eq(users.email, email));

  if (existing) {
    console.log(`Admin user ${email} already exists, skipping.`);
    return;
  }

  const passwordHash = await bcrypt.hash(password, 10);
  await db.insert(users).values({
    name: "Admin",
    email,
    passwordHash,
  });
  console.log(`Created admin user ${email}.`);
}

async function seedMenus() {
  const [existing] = await db.select().from(menus).limit(1);
  if (existing) {
    console.log("Menus already seeded, skipping.");
    return;
  }

  await db.insert(menus).values([
    { label: "Dashboard", path: "/dashboard", icon: "LayoutDashboard", order: 0 },
    { label: "Client Logos", path: "/dashboard/client-logos", icon: "Image", order: 1 },
    { label: "About Stats", path: "/dashboard/about-stats", icon: "BarChart3", order: 2 },
    { label: "Solutions", path: "/dashboard/solutions", icon: "Layers", order: 3 },
    { label: "Products", path: "/dashboard/products", icon: "Package", order: 4 },
    { label: "Industries", path: "/dashboard/industries", icon: "Factory", order: 5 },
    { label: "FAQs", path: "/dashboard/faqs", icon: "HelpCircle", order: 6 },
    { label: "Testimonials", path: "/dashboard/testimonials", icon: "MessageSquare", order: 7 },
    { label: "Team", path: "/dashboard/team", icon: "Users", order: 8 },
    { label: "Blogs & Articles", path: "/dashboard/blogs", icon: "Newspaper", order: 9 },
    { label: "Case Studies", path: "/dashboard/case-studies", icon: "FileText", order: 10 },
    { label: "Contact Submissions", path: "/dashboard/contact", icon: "Mail", order: 11 },
  ]);
  console.log("Seeded default menus.");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function seedTable(tableRef: any, rows: Record<string, unknown>[], label: string) {
  const [existing] = await db.select().from(tableRef).limit(1);
  if (existing) {
    console.log(`${label} already seeded, skipping.`);
    return;
  }
  if (rows.length === 0) return;
  await db.insert(tableRef).values(rows);
  console.log(`Seeded ${rows.length} ${label.toLowerCase()}.`);
}

async function main() {
  await seedAdminUser();
  await seedMenus();

  await seedTable(clientLogos, CLIENT_LOGOS_SEED, "Client logos");
  await seedTable(aboutStats, ABOUT_STATS_SEED, "About stats");
  await seedTable(faqs, FAQS_SEED, "FAQs");
  await seedTable(testimonials, TESTIMONIALS_SEED, "Testimonials");
  await seedTable(teamMembers, TEAM_MEMBERS_SEED, "Team members");
  await seedTable(industries, INDUSTRIES_SEED, "Industries");
  await seedTable(solutions, SOLUTIONS_SEED, "Solutions");
  await seedTable(products, PRODUCTS_SEED, "Products");
  await seedTable(blogs, BLOGS_SEED, "Blogs");
  await seedTable(caseStudies, CASE_STUDIES_SEED, "Case studies");

  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
