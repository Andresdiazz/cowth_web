import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-60";

const sizes = "px-6 py-3.5";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-ink hover:bg-cream hover:shadow-[0_0_38px_-8px_rgba(34,227,138,0.55)]",
  secondary:
    "border border-cream/20 text-cream hover:border-accent/60 hover:bg-accent/5 hover:text-accent",
  ghost: "text-muted hover:text-cream",
};

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant?: Variant;
  children: ReactNode;
};

export function ButtonLink({ variant = "primary", className = "", children, ...props }: ButtonLinkProps) {
  return (
    <a className={`${base} ${sizes} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: Variant;
  children: ReactNode;
};

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <button className={`${base} ${sizes} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      fill="none"
      className={`h-4 w-4 ${className}`}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}
