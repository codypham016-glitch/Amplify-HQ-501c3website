import Image from "next/image";
import { resolveSchoolLogo } from "@/lib/schoolLogo";
import type { Chapter } from "@/lib/site";

type SchoolLogoProps = {
  chapter: Chapter;
  size?: number;
  tone?: "light" | "dark";
};

/**
 * Renders a school's logo when a file exists at
 * /public/schools/{slug}.{svg|png|webp|jpg}, and a clean monogram
 * tile when it doesn't. The layout is identical either way, so
 * adding real logos later never shifts the design.
 */
export function SchoolLogo({ chapter, size = 64, tone = "dark" }: SchoolLogoProps) {
  const src = resolveSchoolLogo(chapter.slug);

  if (src) {
    return (
      <div
        className="relative shrink-0 overflow-hidden bg-white"
        style={{ width: size, height: size }}
      >
        <Image
          src={src}
          alt={`${chapter.school} logo`}
          fill
          sizes={`${size}px`}
          className="object-contain"
        />
      </div>
    );
  }

  const borderClass =
    tone === "light"
      ? "border-[color:var(--color-teal)] text-[color:var(--color-teal)]"
      : "border-[color:var(--color-charcoal)] text-[color:var(--color-charcoal)]";

  return (
    <div
      aria-hidden
      className={`flex shrink-0 items-center justify-center border-2 ${borderClass}`}
      style={{ width: size, height: size }}
    >
      <span
        className="font-[family-name:var(--font-display)] font-bold leading-none"
        style={{ fontSize: size * 0.44 }}
      >
        {chapter.monogram}
      </span>
    </div>
  );
}
