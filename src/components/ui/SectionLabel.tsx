type SectionLabelProps = {
  index?: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
};

/**
 * A short label placed above a section heading. Editorial style —
 * a small ink or signal rule + monospace label, no all-caps drama.
 */
export function SectionLabel({ index, children, tone = "light" }: SectionLabelProps) {
  const isDark = tone === "dark";
  const textClass = isDark ? "text-[color:var(--color-signal-tint)]" : "text-[color:var(--color-stone)]";
  const ruleClass = isDark ? "bg-[color:var(--color-signal)]" : "bg-[color:var(--color-signal)]";

  return (
    <div
      className={`inline-flex items-center gap-3 font-[family-name:var(--font-mono)] text-[0.68rem] font-medium uppercase tracking-[0.22em] ${textClass}`}
    >
      <span className={`h-px w-8 ${ruleClass}`} aria-hidden />
      {index ? <span>{index}</span> : null}
      <span>{children}</span>
    </div>
  );
}
