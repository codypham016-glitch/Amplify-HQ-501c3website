import { SchoolLogo } from "./SchoolLogo";
import type { Chapter } from "@/lib/site";

type ChapterCardProps = {
  chapter: Chapter;
  index: number;
  tone?: "light" | "dark";
};

export function ChapterCard({ chapter, index, tone = "dark" }: ChapterCardProps) {
  const isDark = tone === "light";
  const textInk = isDark ? "text-white" : "text-[color:var(--color-navy)]";
  const textMuted = isDark ? "text-white/60" : "text-[color:var(--color-navy-3)]";
  const line = isDark ? "border-white/20" : "border-[color:var(--color-line)]";

  return (
    <article className="flex flex-col gap-6 bg-white p-8 border border-[color:var(--color-line)] hover:border-[color:var(--color-coral)] transition-colors">
      <div className="flex items-center justify-between gap-4">
        <span className={`text-[0.72rem] font-semibold tracking-[0.14em] ${textMuted}`}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <SchoolLogo chapter={chapter} size={88} tone={tone} />
      </div>

      <div>
        <h3 className={`text-xl font-bold leading-[1.2] ${textInk}`}>
          {chapter.school}
        </h3>
        <p className={`mt-2 text-sm ${textMuted}`}>
          {chapter.city}, {chapter.state} · {chapter.district}
        </p>
      </div>

      <div className={`mt-auto flex items-baseline justify-between border-t pt-4 ${line}`}>
        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--color-coral)]">
          Founding
        </span>
        <span className={`text-[0.68rem] font-semibold uppercase tracking-[0.14em] ${textMuted}`}>
          Opens Fall 26
        </span>
      </div>
    </article>
  );
}
