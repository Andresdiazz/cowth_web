import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full text-sm font-medium transition-all duration-300 ease-out active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:active:scale-100";

const sizes = "px-6 py-3.5";

const variants: Record<Variant, string> = {
  primary:
    "sheen bg-accent text-ink shadow-[0_10px_40px_-14px_rgba(34,227,138,0.65)] hover:shadow-[0_16px_50px_-12px_rgba(34,227,138,0.85)]",
  secondary:
    "border border-cream/15 bg-cream/[0.02] text-cream backdrop-blur-sm hover:border-accent/45 hover:bg-accent/[0.06] hover:text-accent",
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
      className={`h-4 w-4 transition-transform duration-300 ease-out group-hover/btn:translate-x-1 ${className}`}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}
