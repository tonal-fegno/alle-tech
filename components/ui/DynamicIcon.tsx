import * as LucideIcons from "lucide-react";
import { Circle } from "lucide-react";

export default function DynamicIcon({
  name,
  className = "size-4",
}: {
  name: string | null | undefined;
  className?: string;
}) {
  const IconComponent =
    (name &&
      (LucideIcons[name as keyof typeof LucideIcons] as
        | React.ComponentType<{ className?: string }>
        | undefined)) ||
    Circle;

  return <IconComponent className={className} />;
}
