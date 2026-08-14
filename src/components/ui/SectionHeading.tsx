import type { ReactNode } from "react";

type SectionHeadingProps = {
  as?: "h1" | "h2" | "h3";
  size?: "hero" | "display" | "section";
  className?: string;
  children: ReactNode;
};

const sizeClass = {
  hero:
    "text-[length:var(--text-hero)] leading-[1] tracking-[-0.015em]",
  display:
    "text-[length:var(--text-display)] leading-[1.02] tracking-[-0.01em]",
  section:
    "text-[length:var(--text-section)] leading-[1.08] tracking-[-0.01em]",
};

/**
 * Editorial heading. Uses the serif for a magazine-style feel; the
 * previous version was all-caps sans, which read like a marketing site.
 */
export function SectionHeading({
  as = "h2",
  size = "section",
  className = "",
  children,
}: SectionHeadingProps) {
  const Tag = as;
  return (
    <Tag className={`font-[family-name:var(--font-serif)] font-normal ${sizeClass[size]} ${className}`}>
      {children}
    </Tag>
  );
}
