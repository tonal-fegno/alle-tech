import Skeleton from "@/components/ui/Skeleton";

function HeaderSkeleton({ withDescription = true }: { withDescription?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-2">
        <Skeleton className="h-6 w-40" />
        {withDescription && <Skeleton className="h-4 w-64" />}
      </div>
      <Skeleton className="h-9 w-28" />
    </div>
  );
}

export function DashboardListSkeleton({ rows = 6 }: { rows?: number }) {
  return (
    <div className="space-y-6 p-6 md:p-8">
      <HeaderSkeleton />
      <div className="overflow-hidden rounded-lg border border-border bg-card">
        <div className="h-11 border-b border-border bg-muted/50" />
        {Array.from({ length: rows }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-4 border-b border-border px-4 py-3 last:border-0"
          >
            <Skeleton className="h-4 w-4 shrink-0" />
            <Skeleton className="h-4 flex-1" />
            <Skeleton className="h-4 flex-[2]" />
            <Skeleton className="h-5 w-9 shrink-0 rounded-full" />
            <Skeleton className="h-4 w-4 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function DashboardFormSkeleton({ fields = 5 }: { fields?: number }) {
  return (
    <div className="space-y-6 p-6 md:p-8">
      <HeaderSkeleton withDescription={false} />
      <div className="space-y-5 rounded-lg border border-border bg-card p-6">
        {Array.from({ length: fields }).map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-9 w-full" />
          </div>
        ))}
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
}

export function DashboardHomeSkeleton() {
  return (
    <div className="space-y-8 p-6 md:p-8">
      <div className="space-y-2">
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-4 w-64" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="space-y-4 rounded-lg border border-border bg-card p-5">
            <div className="flex items-start justify-between">
              <Skeleton className="size-10 rounded-md" />
              <Skeleton className="size-4" />
            </div>
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
