import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormSectionProps {
  id: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
  children: React.ReactNode;
}

export function FormSection({ id, title, description, icon: Icon, className, children }: FormSectionProps) {
  return (
    <section
      id={id}
      data-form-section
      className={cn(
        "scroll-mt-40 rounded-xl border border-border bg-card p-5 shadow-sm lg:scroll-mt-28 md:p-6",
        className
      )}
    >
      <div className="mb-5 flex items-start gap-3">
        {Icon && (
          <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-dashPrimary/10 text-dashPrimary">
            <Icon className="size-4.5" />
          </div>
        )}
        <div className="space-y-0.5">
          <h2 className="text-sm font-semibold text-foreground">{title}</h2>
          {description && <p className="text-xs text-muted-foreground">{description}</p>}
        </div>
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
