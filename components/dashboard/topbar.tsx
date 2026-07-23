import { SignOutButton } from "@/components/dashboard/sign-out-button";

export function DashboardTopbar({
  title,
  description,
  user,
}: {
  title: string;
  description?: string;
  user?: { name?: string | null; email?: string | null };
}) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-border bg-card px-6 py-4 md:px-8">
      <div>
        <h1 className="text-lg font-semibold text-foreground">{title}</h1>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="flex items-center gap-4">
        {user && (user.name || user.email) && (
          <div className="hidden text-right sm:block">
            <p className="text-sm font-medium text-foreground">
              {user.name ?? "Admin"}
            </p>
            {user.email && (
              <p className="text-xs text-muted-foreground">{user.email}</p>
            )}
          </div>
        )}
        <SignOutButton />
      </div>
    </header>
  );
}
