import { ChapterCard } from "./ChapterCard";
import type { Chapter } from "@/lib/site";

type ChapterGridProps = {
  chapters: Chapter[];
  tone?: "light" | "dark";
};

/**
 * Editorial roster — chapters flow in a rhythm of columns separated by
 * hairlines, not sealed inside floating cards.
 */
export function ChapterGrid({ chapters, tone = "dark" }: ChapterGridProps) {
  const line = tone === "light" ? "divide-[color:var(--color-bone)]/20" : "divide-[color:var(--color-line)]";

  return (
    <div className={`grid grid-cols-1 divide-y sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4 ${line}`}>
      {chapters.map((chapter, i) => (
        <div
          key={chapter.slug}
          className={`${i > 0 ? "sm:pl-8" : ""} ${i < chapters.length - 1 ? "sm:pr-8" : ""}`}
        >
          <ChapterCard chapter={chapter} index={i} tone={tone} />
        </div>
      ))}
    </div>
  );
}
