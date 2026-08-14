import type { ReactNode } from "react";

type SectionHeadingProps = {
  as?: "h1" | "h2" | "h3";
  size?: "hero" | "display" | "section";
  className?: string;
  children: ReactNode;
};

const sizeClass = {
  hero:
    "text-[length:var(--text-hero)] leading-[0.95] tracking-[-0.035em] font-medium",
  display:
    "text-[length:var(--text-display)] leading-[0.98] tracking-[-0.025em] font-medium",
  section:
    "text-[length:var(--text-section)] leading-[1.05] tracking-[-0.02em] font-medium",
};

export function SectionHeading({
  as = "h2",
  size = "section",
  className = "",
  children,
}: SectionHeadingProps) {
  const Tag = as;
  return (
    <Tag className={`font-[family-name:var(--font-display)] ${sizeClass[size]} ${className}`}>
      {children}
    </Tag>
  );
}
