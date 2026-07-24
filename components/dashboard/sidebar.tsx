"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MenuIcon } from "@/components/dashboard/menu-icon";
import { cn } from "@/lib/utils";
import type { menus } from "@/db/schema";

type MenuItem = typeof menus.$inferSelect;

export function DashboardSidebar({ items }: { items: MenuItem[] }) {
  const pathname = usePathname();

  return (
    <nav className="flex h-screen w-64 shrink-0 flex-col border-r border-border bg-card">
      <div className="flex items-center gap-2.5 border-b border-border px-5 py-5">
        <Image
          src="/images/logo.png"
          alt="Alle Tech logo"
          width={123}
          height={77}
          className="h-8 w-auto object-contain"
        />
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-foreground">Alle Tech</span>
          <span className="text-xs text-muted-foreground">Admin dashboard</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
        {items.map((item) => {
          const href = item.path ?? "#";
          const isActive =
            href === "/dashboard" ? pathname === href : pathname?.startsWith(href);

          return (
            <Link
              key={item.id}
              href={href}
              className={cn(
                "group flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-body-gray hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <MenuIcon
                name={item.icon}
                className={cn(
                  "size-4 shrink-0",
                  isActive ? "text-primary" : "text-body-gray group-hover:text-accent-foreground"
                )}
              />
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
