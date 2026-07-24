"use client";

import * as LucideIcons from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { Input } from "@/components/dashboard/ui/input";
import { cn } from "@/lib/utils";

const ALL_ICON_NAMES = Object.keys(LucideIcons).filter(
  (key) => /^[A-Z]/.test(key) && key !== "LucideIcon" && key !== "createLucideIcon"
);

interface IconPickerProps {
  value?: string | null;
  onChange: (name: string) => void;
  className?: string;
}

export function IconPicker({ value, onChange, className }: IconPickerProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const names = q ? ALL_ICON_NAMES.filter((name) => name.toLowerCase().includes(q)) : ALL_ICON_NAMES;
    return names.slice(0, 60);
  }, [query]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex h-9 w-full items-center gap-2 rounded-md border border-input bg-transparent px-3 text-sm shadow-sm"
      >
        <DynamicIcon name={value} className="size-4" />
        <span className="text-muted-foreground">{value || "Choose an icon"}</span>
      </button>
      {open && (
        <div className="absolute z-50 mt-1 w-72 rounded-md border border-input bg-popover p-2 shadow-md">
          <Input
            autoFocus
            placeholder="Search icons…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="mt-2 grid max-h-56 grid-cols-6 gap-1 overflow-y-auto">
            {filtered.map((name) => (
              <button
                key={name}
                type="button"
                title={name}
                onClick={() => {
                  onChange(name);
                  setOpen(false);
                  setQuery("");
                }}
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-md hover:bg-accent",
                  value === name && "bg-accent"
                )}
              >
                <DynamicIcon name={name} className="size-4" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
