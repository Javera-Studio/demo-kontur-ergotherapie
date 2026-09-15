import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "on-dark";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-ink text-offwhite hover:bg-cobalt",
  secondary: "border border-ink/25 text-ink hover:border-ink hover:bg-ice",
  "on-dark": "bg-cobalt text-offwhite hover:bg-cobalt-dark",
};

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3 text-base font-semibold transition-colors ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
