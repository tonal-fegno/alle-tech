import Badge from "@/components/ui/Badge";

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const alignCls =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-5 ${alignCls}`}>
      <Badge>{badge}</Badge>
      <h2 className="heading-2 max-w-[800px]">{title}</h2>
      {subtitle && (
        <p className="max-w-[700px] text-body-20 text-body-gray">{subtitle}</p>
      )}
    </div>
  );
}
