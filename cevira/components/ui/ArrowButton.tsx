import Link from "next/link";

interface ArrowButtonProps {
  href?: string;
  variant?: "light" | "solid";
  size?: "sm" | "md";
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const base =
  "group inline-flex w-fit items-center rounded-full font-semibold transition-colors duration-300";

const variants = {
  light: "bg-white text-ink hover:bg-bg-2",
  solid: "bg-gradient-primary text-white hover:opacity-90",
};

const circleVariants = {
  light: "bg-gradient-primary",
  solid: "bg-white",
};

const arrowColor = {
  light: "#FFFFFF",
  solid: "#0A4CE0",
};

const sizes = {
  md: {
    button: "gap-4 py-2.5 pl-8 pr-2.5 text-body-18",
    circle: "h-11 w-11",
    icon: { width: 18, height: 14 },
  },
  sm: {
    button: "gap-3 py-2 pl-5 pr-2 text-body-16",
    circle: "h-8 w-8",
    icon: { width: 14, height: 11 },
  },
};

export default function ArrowButton({
  href,
  variant = "light",
  size = "md",
  type = "button",
  className = "",
  onClick,
  children,
}: ArrowButtonProps) {
  const { button, circle, icon } = sizes[size];
  const cls = `${base} ${variants[variant]} ${button} ${className}`;

  const content = (
    <>
      {children}
      <span
        className={`flex shrink-0 items-center justify-center rounded-full ${circleVariants[variant]} ${circle} transition-transform duration-300 group-hover:translate-x-0.5`}
      >
        <svg width={icon.width} height={icon.height} viewBox="0 0 18 14" fill="none">
          <path
            d="M1 7h15m0 0L10.5 1.5M16 7l-5.5 5.5"
            stroke={arrowColor[variant]}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {content}
    </button>
  );
}
