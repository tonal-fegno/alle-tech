import React from "react";
import Link from "next/link";

interface UIButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const UIButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, UIButtonProps>(
  ({ href, onClick, children, className = "", ...props }, ref) => {
    const base =
      "group inline-flex w-fit items-center rounded-full font-semibold transition-colors duration-300 bg-gradient-primary text-white hover:opacity-90 gap-3 py-2 pl-5 pr-2 text-body-16";

    const content = (
      <>
        <span>{children}</span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:translate-x-0.5">
          <svg width="14" height="11" viewBox="0 0 18 14" fill="none">
            <path
              d="M1 7h15m0 0L10.5 1.5M16 7l-5.5 5.5"
              stroke="#2C8FCE"
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
        <Link
          href={href}
          className={`${base} ${className}`}
          onClick={onClick}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(props as any)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        type="button"
        className={`${base} ${className}`}
        onClick={onClick}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        {content}
      </button>
    );
  }
);

UIButton.displayName = "UIButton";

export default UIButton;
