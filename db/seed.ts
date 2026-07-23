import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

import { db } from "./index";
import { menus, users } from "./schema";

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
    { label: "Solutions", path: "/dashboard/solutions", icon: "Layers", order: 1 },
    { label: "Products", path: "/dashboard/products", icon: "Package", order: 2 },
    { label: "Blogs & Articles", path: "/dashboard/blogs", icon: "Newspaper", order: 3 },
    { label: "Case Studies", path: "/dashboard/case-studies", icon: "FileText", order: 4 },
    { label: "Contact Submissions", path: "/dashboard/contact", icon: "Mail", order: 5 },
  ]);
  console.log("Seeded default menus.");
}

async function main() {
  await seedAdminUser();
  await seedMenus();
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
