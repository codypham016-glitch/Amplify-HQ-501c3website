type SectionLabelProps = {
  index?: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
};

export function SectionLabel({ index, children, tone = "light" }: SectionLabelProps) {
  const textClass = tone === "dark" ? "eyebrow-on-dark" : "eyebrow";
  return (
    <div className={`${textClass} flex items-center gap-3`}>
      <span className="h-1 w-12 bg-[color:var(--color-teal)]" aria-hidden />
      {index ? <span aria-hidden>{index}</span> : null}
      <span>{children}</span>
    </div>
  );
}
