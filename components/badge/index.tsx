import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  variant?: "light";
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ text, variant = "light", className = "", ...props }, ref) => {
    const baseStyle = "inline-flex w-fit items-center rounded-full shadow-[0_2px_12px_rgba(0,11,34,0.15)] backdrop-blur-md";
    const variantStyles = {
      light: "bg-white/75 py-2 px-3 text-sm font-semibold text-ink gap-2.5",
    };

    return (
      <span
        ref={ref}
        className={`${baseStyle} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {text}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
