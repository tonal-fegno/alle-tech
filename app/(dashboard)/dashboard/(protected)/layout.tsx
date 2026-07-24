import { asc } from "drizzle-orm";
import { auth } from "@/auth";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardTopbar } from "@/components/dashboard/topbar";
import { db } from "@/db";
import { menus } from "@/db/schema";

export default async function ProtectedDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const menuItems = await db.select().from(menus).orderBy(asc(menus.order));

  return (
    <div className="flex h-screen overflow-hidden bg-bg-1">
      <DashboardSidebar items={menuItems} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardTopbar
          title={`Welcome, ${session?.user?.name ?? "Admin"}`}
          description={session?.user?.email ?? undefined}
        />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
