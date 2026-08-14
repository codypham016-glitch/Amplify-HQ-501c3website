import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "on-dark" | "on-dark-outline";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-md transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-[color:var(--color-teal)] text-[color:var(--color-charcoal)] font-semibold hover:bg-[color:var(--color-teal-light)] hover:shadow-lg hover:-translate-y-0.5",
  secondary:
    "bg-transparent text-[color:var(--color-charcoal)] border-2 border-[color:var(--color-charcoal)] hover:bg-[color:var(--color-charcoal)] hover:text-white",
  ghost:
    "bg-transparent text-[color:var(--color-charcoal)] hover:text-[color:var(--color-teal)] hover:underline",
  "on-dark":
    "bg-[color:var(--color-teal)] text-[color:var(--color-charcoal)] font-semibold hover:bg-[color:var(--color-teal-light)] hover:-translate-y-0.5",
  "on-dark-outline":
    "bg-transparent text-[color:var(--color-teal)] border-2 border-[color:var(--color-teal)] hover:bg-[color:var(--color-teal)]/10",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
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
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const body = (
    <>
      <span>{children}</span>
      {trailing ? <span aria-hidden>{trailing}</span> : null}
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
