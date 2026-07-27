"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/dashboard/ui/button";
import { cn } from "@/lib/utils";

export interface FormShellSection {
  id: string;
  label: string;
}

interface FormShellProps {
  title: string;
  backHref: string;
  formId: string;
  sections: FormShellSection[];
  isSubmitting: boolean;
  submitLabel: string;
  children: React.ReactNode;
}

export function FormShell({
  title,
  backHref,
  formId,
  sections,
  isSubmitting,
  submitLabel,
  children,
}: FormShellProps) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        );
        setActive(topMost.target.id);
      },
      { rootMargin: "-180px 0px -65% 0px", threshold: 0 }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [sections]);

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="flex flex-col">
      <div className="sticky top-0 z-20 border-b border-border bg-background/95 px-6 py-4 backdrop-blur-sm md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <Button asChild variant="ghost" size="icon" className="size-8 shrink-0">
              <Link href={backHref} aria-label="Back">
                <ArrowLeft className="size-4" />
              </Link>
            </Button>
            <h1 className="truncate text-base font-semibold text-foreground">{title}</h1>
          </div>
          <Button type="submit" form={formId} size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Saving…" : submitLabel}
          </Button>
        </div>
        {sections.length > 1 && (
          <nav className="-mb-px mt-4 flex gap-1 overflow-x-auto lg:hidden">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                  active === section.id
                    ? "bg-dashPrimary text-dashPrimary-foreground"
                    : "bg-accent text-muted-foreground hover:text-accent-foreground"
                )}
              >
                {section.label}
              </button>
            ))}
          </nav>
        )}
      </div>

      <div className="flex items-start gap-8 px-6 py-6 md:px-8">
        {sections.length > 1 && (
          <nav className="sticky top-28 hidden w-52 shrink-0 flex-col gap-0.5 lg:flex">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "rounded-md px-3 py-1.5 text-left text-sm transition-colors",
                  active === section.id
                    ? "bg-dashPrimary/10 font-medium text-dashPrimary"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {section.label}
              </button>
            ))}
          </nav>
        )}
        <div className="min-w-0 flex-1 space-y-6">{children}</div>
      </div>
    </div>
  );
}
