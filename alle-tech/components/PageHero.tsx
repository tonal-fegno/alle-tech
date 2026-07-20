import Badge from "@/components/ui/Badge";

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function PageHero({
  badge,
  title,
  subtitle,
  className = "",
}: PageHeroProps) {
  return (
    <div className={`flex flex-col items-center gap-6 text-center ${className}`}>
      {badge && <Badge>{badge}</Badge>}
      <h1 className="heading-1">{title}</h1>
      {subtitle && (
        <p className="max-w-[700px] text-body-18 text-body-gray">{subtitle}</p>
      )}
    </div>
  );
}
