import { SchoolLogo } from "./SchoolLogo";
import type { Chapter } from "@/lib/site";

type ChapterCardProps = {
  chapter: Chapter;
  index: number;
  tone?: "light" | "dark";
};

/**
 * Editorial "listing" for a chapter — a serif school name over a soft
 * hairline block. No pill borders, no card shadows.
 */
export function ChapterCard({ chapter, index, tone = "dark" }: ChapterCardProps) {
  const isDark = tone === "light";
  const textInk = isDark ? "text-[color:var(--color-bone)]" : "text-[color:var(--color-ink)]";
  const textMuted = isDark ? "text-[color:var(--color-bone)]/60" : "text-[color:var(--color-ink-2)]";
  const line = isDark ? "border-[color:var(--color-bone)]/20" : "border-[color:var(--color-line)]";
  const accent = "text-[color:var(--color-signal)]";

  return (
    <article className="flex flex-col gap-6 py-8">
      <div className="flex items-baseline justify-between gap-4">
        <span className={`font-[family-name:var(--font-mono)] text-[0.72rem] tracking-[0.22em] ${textMuted}`}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <SchoolLogo chapter={chapter} size={80} tone={tone} />
      </div>

      <div>
        <h3 className={`font-[family-name:var(--font-serif)] text-3xl leading-[1.05] ${textInk}`}>
          {chapter.school}
        </h3>
        <p className={`mt-3 text-sm ${textMuted}`}>
          {chapter.city}, {chapter.state} · {chapter.district}
        </p>
      </div>

      <div className={`mt-auto flex items-baseline justify-between border-t pt-4 ${line}`}>
        <span className={`font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.22em] ${accent}`}>
          Founding
        </span>
        <span className={`font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.22em] ${textMuted}`}>
          Opens Fall &apos;26
        </span>
      </div>
    </article>
  );
}
