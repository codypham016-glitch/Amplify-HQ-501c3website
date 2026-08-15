type SectionLabelProps = {
  index?: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
};

/**
 * A small uppercase label placed above a section heading — coral rule,
 * navy or coral label. Semibold, slight letter-spacing, sparing use.
 */
export function SectionLabel({ index, children, tone = "light" }: SectionLabelProps) {
  const isDark = tone === "dark";
  const textClass = isDark ? "text-[color:var(--color-coral)]" : "text-[color:var(--color-navy-3)]";
  const ruleClass = "bg-[color:var(--color-coral)]";

  return (
    <div
      className={`inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] ${textClass}`}
    >
      <span className={`h-[2px] w-8 ${ruleClass}`} aria-hidden />
      {index ? <span>{index}</span> : null}
      <span>{children}</span>
    </div>
  );
}
