import { asc } from "drizzle-orm";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { MenuIcon } from "@/components/dashboard/menu-icon";
import { Card } from "@/components/dashboard/ui/card";
import { db } from "@/db";
import { menus } from "@/db/schema";

export const metadata: Metadata = {
  title: "Dashboard",
};

const SECTION_DESCRIPTIONS: Record<string, string> = {
  "/dashboard/client-logos": "Manage the client logos shown on the home page.",
  "/dashboard/about-stats": "Manage the stat counters on the About Us section.",
  "/dashboard/solutions": "Manage solution pages and their content blocks.",
  "/dashboard/products": "Manage product listings shown across the site.",
  "/dashboard/industries": "Manage industries and their detail pages.",
  "/dashboard/faqs": "Manage the site-wide FAQ list.",
  "/dashboard/testimonials": "Manage client testimonials on the home page.",
  "/dashboard/team": "Manage the team members shown on the About page.",
  "/dashboard/blogs": "Publish and edit blog posts and articles.",
  "/dashboard/case-studies": "Manage case study entries and client stories.",
  "/dashboard/contact": "Review messages submitted through the contact form.",
};

export default async function DashboardPage() {
  const menuItems = await db.select().from(menus).orderBy(asc(menus.order));
  const sections = menuItems.filter((item) => item.path && item.path !== "/dashboard");

  return (
    <div className="space-y-8 p-6 md:p-8">
      <div>
        <h2 className="text-base font-semibold text-foreground">
          Content sections
        </h2>
        <p className="text-sm text-muted-foreground">
          Jump into a section to manage its content.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((item) => (
          <Link key={item.id} href={item.path ?? "#"}>
            <Card className="group h-full p-5 transition-colors hover:border-dashPrimary/50">
              <div className="flex items-start justify-between">
                <span className="flex size-10 items-center justify-center rounded-md bg-dashPrimary/10 text-dashPrimary">
                  <MenuIcon name={item.icon} className="size-5" />
                </span>
                <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-dashPrimary" />
              </div>
              <p className="mt-4 text-sm font-semibold text-foreground">
                {item.label}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {SECTION_DESCRIPTIONS[item.path ?? ""] ??
                  "Manage this section's content."}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
