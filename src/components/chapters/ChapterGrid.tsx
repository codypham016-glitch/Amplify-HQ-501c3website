import { ChapterCard } from "./ChapterCard";
import type { Chapter } from "@/lib/site";

type ChapterGridProps = {
  chapters: Chapter[];
  tone?: "light" | "dark";
};

export function ChapterGrid({ chapters, tone = "dark" }: ChapterGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {chapters.map((chapter, i) => (
        <ChapterCard key={chapter.slug} chapter={chapter} index={i} tone={tone} />
      ))}
    </div>
  );
}
