import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "on-dark" | "on-dark-outline" | "link";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-[color:var(--color-navy)] text-white hover:bg-[color:var(--color-coral)]",
  secondary:
    "bg-transparent text-[color:var(--color-navy)] border border-[color:var(--color-navy)] hover:bg-[color:var(--color-navy)] hover:text-white",
  ghost:
    "bg-transparent text-[color:var(--color-navy)] hover:text-[color:var(--color-coral)]",
  "on-dark":
    "bg-[color:var(--color-coral)] text-white hover:bg-[color:var(--color-coral-2)]",
  "on-dark-outline":
    "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10",
  link:
    "text-[color:var(--color-navy)] underline decoration-[color:var(--color-coral)] decoration-[1.5px] underline-offset-[6px] hover:decoration-[color:var(--color-navy)] hover:decoration-[2px] px-0",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-[0.95rem]",
  lg: "px-8 py-4 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  trailing?: ReactNode;
};

type LinkVariantProps = CommonProps & { href: string } & Omit<
  ComponentPropsWithoutRef<typeof Link>,
  "href" | "children" | "className"
>;

type ButtonVariantProps = CommonProps & { href?: undefined } & Omit<
  ComponentPropsWithoutRef<"button">,
  "children" | "className"
>;

export type ButtonProps = LinkVariantProps | ButtonVariantProps;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", children, className = "", trailing, ...rest } = props;
  const isLink = variant === "link";
  const classes = `${base} ${variants[variant]} ${isLink ? "" : sizes[size]} ${className}`;

  const body = (
    <>
      <span>{children}</span>
      {trailing ? <span aria-hidden className="translate-y-[-1px]">{trailing}</span> : null}
    </>
  );

  if ("href" in rest && rest.href) {
    const { href, ...linkRest } = rest;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {body}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentPropsWithoutRef<"button">)}>
      {body}
    </button>
  );
}
