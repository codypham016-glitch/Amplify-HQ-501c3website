import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { chapters } from "@/lib/site";
import Link from "next/link";

/**
 * Founding chapters — presented as an editorial roster, not a card grid.
 * Each school gets a row with a serif school name, city/district, and
 * an inline "opens Fall 2026" mark.
 */
export function ChaptersSection() {
  return (
    <section className="bg-[color:var(--color-bone)] border-t border-[color:var(--color-line)] py-24 lg:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionLabel index="§ 07">Founding chapters</SectionLabel>
            <h2 className="mt-10 font-[family-name:var(--font-serif)] text-[length:var(--text-display)] leading-[1.02] tracking-[-0.01em] text-[color:var(--color-ink)]">
              Where Amplify starts.
            </h2>
          </div>

          <p className="lg:col-span-6 lg:col-start-7 self-end text-lg leading-[1.65] text-[color:var(--color-ink-2)]">
            Four Fort Bend ISD high schools open Amplify chapters in Fall 2026. Each is run entirely by its own students, with officers, budget, and calendar drawn from that campus.
          </p>
        </div>

        <ol className="mt-16 border-t border-[color:var(--color-ink)]">
          {chapters.map((c, i) => (
            <li
              key={c.slug}
              className="group grid grid-cols-12 items-baseline gap-4 border-b border-[color:var(--color-line)] py-8 lg:py-10"
            >
              <span className="col-span-1 font-[family-name:var(--font-mono)] text-[0.72rem] tracking-[0.22em] text-[color:var(--color-stone)]">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="col-span-11 md:col-span-5">
                <h3 className="font-[family-name:var(--font-serif)] text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.05] text-[color:var(--color-ink)] transition-colors group-hover:text-[color:var(--color-signal)]">
                  {c.school}
                </h3>
              </div>

              <p className="col-span-8 md:col-span-4 md:col-start-8 text-sm text-[color:var(--color-ink-2)] lg:text-base">
                {c.city}, {c.state} &nbsp;·&nbsp; {c.district}
              </p>

              <p className="col-span-4 md:col-span-2 md:col-start-12 text-right font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--color-signal)]">
                Fall &apos;26
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="font-[family-name:var(--font-serif)] text-2xl italic text-[color:var(--color-ink)]">
            Not on this list? Your school could be next.
          </p>
          <Link
            href="/start-a-chapter"
            className="inline-flex items-center gap-2 text-base underline decoration-[color:var(--color-signal)] decoration-[1.5px] underline-offset-[6px] hover:decoration-[2px]"
          >
            Start a chapter <span aria-hidden>→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
