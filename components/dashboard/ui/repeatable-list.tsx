"use client";

import { ChevronDown, ChevronUp, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/dashboard/ui/button";

interface RepeatableListProps<T> {
  value: T[];
  onChange: (items: T[]) => void;
  renderItem: (item: T, update: (patch: Partial<T>) => void) => React.ReactNode;
  emptyItem: () => T;
  addLabel?: string;
}

export function RepeatableList<T>({
  value,
  onChange,
  renderItem,
  emptyItem,
  addLabel = "Add item",
}: RepeatableListProps<T>) {
  function updateAt(index: number, patch: Partial<T>) {
    onChange(value.map((item, i) => (i === index ? { ...item, ...patch } : item)));
  }

  function removeAt(index: number) {
    onChange(value.filter((_, i) => i !== index));
  }

  function moveAt(index: number, dir: -1 | 1) {
    const target = index + dir;
    if (target < 0 || target >= value.length) return;
    const next = [...value];
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  }

  return (
    <div className="space-y-3">
      {value.map((item, index) => (
        <div key={index} className="rounded-md border border-input p-3">
          <div className="flex items-start gap-3">
            <div className="flex-1 space-y-2">{renderItem(item, (patch) => updateAt(index, patch))}</div>
            <div className="flex shrink-0 flex-col gap-1">
              <Button type="button" variant="ghost" size="icon" className="h-6 w-6" onClick={() => moveAt(index, -1)} disabled={index === 0}>
                <ChevronUp className="size-3.5" />
              </Button>
              <Button type="button" variant="ghost" size="icon" className="h-6 w-6" onClick={() => moveAt(index, 1)} disabled={index === value.length - 1}>
                <ChevronDown className="size-3.5" />
              </Button>
              <Button type="button" variant="ghost" size="icon" className="h-6 w-6 text-destructive" onClick={() => removeAt(index)}>
                <Trash2 className="size-3.5" />
              </Button>
            </div>
          </div>
        </div>
      ))}
      <Button type="button" variant="outline" size="sm" onClick={() => onChange([...value, emptyItem()])}>
        <Plus className="size-4" /> {addLabel}
      </Button>
    </div>
  );
}
