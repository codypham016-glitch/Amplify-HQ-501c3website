import { Container } from "@/components/layout/Container";
import { SchoolLogo } from "./SchoolLogo";
import type { Chapter } from "@/lib/site";

type ChapterLogoStripProps = {
  chapters: Chapter[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

/**
 * A horizontal strip of chapter school logos. Uses CSS-only marquee
 * animation so it works without any client JS. Duplicates the list
 * so the scroll loops seamlessly.
 */
export function ChapterLogoStrip({
  chapters,
  eyebrow = "Where Amplify already runs",
  title = "Chapters.",
  subtitle,
}: ChapterLogoStripProps) {
  const items = [...chapters, ...chapters];

  return (
    <section className="border-t border-[color:var(--color-line)] py-16 lg:py-20 bg-[color:var(--color-ivory)]">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10 mb-10">
          <div className="lg:col-span-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-coral)]">
              {eyebrow}
            </p>
            <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[color:var(--color-navy)]">
              {title}
            </h2>
          </div>
          {subtitle ? (
            <p className="lg:col-span-6 lg:col-start-7 self-end text-base leading-[1.65] text-[color:var(--color-navy-2)]">
              {subtitle}
            </p>
          ) : null}
        </div>
      </Container>

      {/* Full-bleed logo marquee */}
      <div className="relative overflow-hidden">
        {/* fade edges */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[color:var(--color-ivory)] to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[color:var(--color-ivory)] to-transparent"
          aria-hidden
        />

        <ul
          className="flex items-center gap-16 py-4 whitespace-nowrap"
          style={{
            width: "max-content",
            animation: "chapter-marquee 32s linear infinite",
          }}
        >
          {items.map((c, i) => (
            <li key={`${c.slug}-${i}`} className="flex items-center gap-4 shrink-0">
              <SchoolLogo chapter={c} size={80} />
              <span className="text-lg font-bold text-[color:var(--color-navy)]">
                {c.shortName}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @keyframes chapter-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
