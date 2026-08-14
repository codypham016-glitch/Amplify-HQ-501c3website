import { SchoolLogo } from "./SchoolLogo";
import type { Chapter } from "@/lib/site";

type ChapterCardProps = {
  chapter: Chapter;
  index: number;
  tone?: "light" | "dark";
};

export function ChapterCard({ chapter, index, tone = "dark" }: ChapterCardProps) {
  const isDark = tone === "light"; // rendered on a dark surface

  return (
    <article
      className={`group flex flex-col gap-6 border-2 p-6 transition-colors lg:p-8 ${
        isDark
          ? "border-white/15 hover:border-[color:var(--color-teal)]"
          : "border-[color:var(--color-gray-2)] hover:border-[color:var(--color-teal)]"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <SchoolLogo chapter={chapter} size={64} tone={tone} />
        <span
          className={`font-[family-name:var(--font-mono)] text-[0.65rem] font-bold uppercase tracking-[0.16em] ${
            isDark ? "text-white/50" : "text-[color:var(--color-gray-muted)]"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div>
        <h3
          className={`font-[family-name:var(--font-display)] text-xl font-bold leading-tight tracking-[-0.02em] ${
            isDark ? "text-white" : "text-[color:var(--color-charcoal)]"
          }`}
        >
          {chapter.school}
        </h3>
        <p
          className={`mt-2 text-sm ${
            isDark ? "text-white/65" : "text-[color:var(--color-gray-muted)]"
          }`}
        >
          {chapter.city}, {chapter.state} · {chapter.district}
        </p>
      </div>

      <div
        className={`mt-auto flex items-center justify-between border-t-2 pt-4 ${
          isDark ? "border-white/10" : "border-[color:var(--color-gray-2)]"
        }`}
      >
        <span className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[color:var(--color-teal)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-teal)]" aria-hidden />
          Founding chapter
        </span>
        <span
          className={`font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.16em] ${
            isDark ? "text-white/40" : "text-[color:var(--color-gray-muted)]"
          }`}
        >
          Opens Fall 2026
        </span>
      </div>
    </article>
  );
}
