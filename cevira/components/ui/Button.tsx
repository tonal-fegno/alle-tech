import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "outline" | "white";
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-[30px] py-4 text-body-18 font-semibold transition-all duration-300";

const variants = {
  primary: "bg-gradient-primary text-white hover:opacity-90",
  outline:
    "border-2 border-primary bg-transparent text-primary hover:border-transparent hover:bg-gradient-primary hover:text-white",
  white: "bg-white text-dark-blue hover:bg-bg-2",
};

export default function Button({
  href,
  variant = "primary",
  type = "button",
  className = "",
  onClick,
  children,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
