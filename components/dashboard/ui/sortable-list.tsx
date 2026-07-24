"use client";

import {
  DndContext,
  type DragEndEvent,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export interface SortableRowProps {
  setNodeRef: (node: HTMLElement | null) => void;
  style: React.CSSProperties;
  isDragging: boolean;
  dragHandleProps: React.HTMLAttributes<HTMLElement>;
}

interface SortableListProps<T extends { id: number | string }> {
  items: T[];
  onReorder: (orderedIds: (number | string)[]) => void;
  renderItem: (item: T, sortable: SortableRowProps) => React.ReactNode;
}

function SortableItem<T extends { id: number | string }>({
  item,
  renderItem,
}: {
  item: T;
  renderItem: SortableListProps<T>["renderItem"];
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: item.id,
  });

  return (
    <>
      {renderItem(item, {
        setNodeRef,
        style: { transform: CSS.Transform.toString(transform), transition },
        isDragging,
        dragHandleProps: { ...attributes, ...listeners },
      })}
    </>
  );
}

export function SortableList<T extends { id: number | string }>({
  items,
  onReorder,
  renderItem,
}: SortableListProps<T>) {
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 4 } }));

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = items.findIndex((item) => item.id === active.id);
    const newIndex = items.findIndex((item) => item.id === over.id);
    onReorder(arrayMove(items, oldIndex, newIndex).map((item) => item.id));
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items.map((item) => item.id)} strategy={verticalListSortingStrategy}>
        {items.map((item) => (
          <SortableItem key={item.id} item={item} renderItem={renderItem} />
        ))}
      </SortableContext>
    </DndContext>
  );
}
