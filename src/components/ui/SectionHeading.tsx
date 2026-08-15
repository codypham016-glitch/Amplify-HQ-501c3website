import type { ReactNode } from "react";

type SectionHeadingProps = {
  as?: "h1" | "h2" | "h3";
  size?: "hero" | "display" | "section";
  className?: string;
  children: ReactNode;
};

const sizeClass = {
  hero:
    "text-[length:var(--text-hero)] leading-[1.02] tracking-[-0.025em] font-extrabold",
  display:
    "text-[length:var(--text-display)] leading-[1.05] tracking-[-0.02em] font-bold",
  section:
    "text-[length:var(--text-section)] leading-[1.1] tracking-[-0.015em] font-bold",
};

/**
 * Bold sans headings. Personality comes from scale + weight, not from
 * unusual typefaces. Sentence case by default — no caps drama.
 */
export function SectionHeading({
  as = "h2",
  size = "section",
  className = "",
  children,
}: SectionHeadingProps) {
  const Tag = as;
  return <Tag className={`${sizeClass[size]} ${className}`}>{children}</Tag>;
}
