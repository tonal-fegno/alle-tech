"use client";

import { GripVertical, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dashboard/ui/dropdown-menu";
import { Switch } from "@/components/dashboard/ui/switch";
import { Button } from "@/components/dashboard/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/dashboard/ui/table";
import { SortableList, type SortableRowProps } from "@/components/dashboard/ui/sortable-list";
import { cn } from "@/lib/utils";

export interface DataTableColumn<T> {
  header: string;
  cell: (item: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T extends { id: number | string; enabled?: boolean }> {
  items: T[];
  columns: DataTableColumn<T>[];
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  onToggleEnabled?: (item: T, enabled: boolean) => void;
  reorderable?: boolean;
  onReorder?: (orderedIds: (number | string)[]) => void;
  emptyMessage?: string;
}

export function DataTable<T extends { id: number | string; enabled?: boolean }>({
  items,
  columns,
  onEdit,
  onDelete,
  onToggleEnabled,
  reorderable = false,
  onReorder,
  emptyMessage = "No items yet.",
}: DataTableProps<T>) {
  function rowCells(item: T) {
    return (
      <>
        {columns.map((col) => (
          <TableCell key={col.header} className={col.className}>
            {col.cell(item)}
          </TableCell>
        ))}
        {onToggleEnabled && (
          <TableCell>
            <Switch
              checked={item.enabled ?? true}
              onCheckedChange={(checked) => onToggleEnabled(item, checked)}
            />
          </TableCell>
        )}
        {(onEdit || onDelete) && (
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {onEdit && <DropdownMenuItem onClick={() => onEdit(item)}>Edit</DropdownMenuItem>}
                {onDelete && (
                  <DropdownMenuItem className="text-destructive" onClick={() => onDelete(item)}>
                    Delete
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        )}
      </>
    );
  }

  function renderSortableRow(item: T, sortable: SortableRowProps) {
    return (
      <TableRow
        ref={sortable.setNodeRef as React.Ref<HTMLTableRowElement>}
        style={sortable.style}
        className={cn(sortable.isDragging && "opacity-50")}
      >
        <TableCell className="w-4">
          <button
            type="button"
            className="cursor-grab touch-none text-muted-foreground hover:text-foreground active:cursor-grabbing"
            {...sortable.dragHandleProps}
          >
            <GripVertical className="size-4" />
          </button>
        </TableCell>
        {rowCells(item)}
      </TableRow>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {reorderable && <TableHead className="w-4" />}
          {columns.map((col) => (
            <TableHead key={col.header} className={col.className}>
              {col.header}
            </TableHead>
          ))}
          {onToggleEnabled && <TableHead className="w-16">Active</TableHead>}
          {(onEdit || onDelete) && <TableHead className="w-9" />}
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.length === 0 ? (
          <TableRow>
            <TableCell colSpan={columns.length + 3} className="py-8 text-center text-muted-foreground">
              {emptyMessage}
            </TableCell>
          </TableRow>
        ) : reorderable && onReorder ? (
          <SortableList items={items} onReorder={onReorder} renderItem={renderSortableRow} />
        ) : (
          items.map((item) => <TableRow key={item.id}>{rowCells(item)}</TableRow>)
        )}
      </TableBody>
    </Table>
  );
}
