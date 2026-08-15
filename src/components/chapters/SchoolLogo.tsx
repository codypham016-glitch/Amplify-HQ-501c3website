import Image from "next/image";
import { resolveSchoolLogo } from "@/lib/schoolLogo";
import type { Chapter } from "@/lib/site";

type SchoolLogoProps = {
  chapter: Chapter;
  size?: number;
  tone?: "light" | "dark";
};

/**
 * Real school logo when a file exists at /public/schools/{slug}.{svg|png|webp|jpg}.
 * Otherwise, a serif monogram — no border, no box, just editorial letterform.
 */
export function SchoolLogo({ chapter, size = 64, tone = "dark" }: SchoolLogoProps) {
  const src = resolveSchoolLogo(chapter.slug);

  if (src) {
    return (
      <div
        className="relative shrink-0 overflow-hidden bg-[color:var(--color-paper)] p-2 border border-[color:var(--color-line)]"
        style={{ width: size, height: size }}
      >
        <Image
          src={src}
          alt={`${chapter.school} logo`}
          fill
          sizes={`${size}px`}
          className="object-contain p-1"
        />
      </div>
    );
  }

  const colorClass =
    tone === "light" ? "text-[color:var(--color-signal-tint)]" : "text-[color:var(--color-signal)]";

  return (
    <div
      aria-hidden
      className={`flex shrink-0 items-center justify-center ${colorClass}`}
      style={{ width: size, height: size }}
    >
      <span
        className="font-[family-name:var(--font-serif)] italic leading-none"
        style={{ fontSize: size * 0.85 }}
      >
        {chapter.monogram}
      </span>
    </div>
  );
}
