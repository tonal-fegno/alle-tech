interface EyebrowProps {
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
  textClassName?: string;
  dotClassName?: string;
  showDot?: boolean;
}

export default function Eyebrow({
  children,
  variant = "light",
  className = "",
  textClassName = "",
  dotClassName = "",
  showDot = true,
}: EyebrowProps) {
  const dotCls = variant === "dark" ? "bg-white" : "bg-gradient-primary";
  const textCls = variant === "dark" ? "text-white" : "text-ink";

  return (
    <span className={`flex items-center gap-2 ${className}`}>
      {showDot && (
        <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${dotCls} ${dotClassName}`} />
      )}
      <span className={`text-xs sm:text-sm md:text-body-16 font-semibold uppercase ${textCls} ${textClassName}`}>
        {children}
      </span>
    </span>
  );
}
