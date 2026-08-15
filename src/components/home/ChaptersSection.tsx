import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SchoolLogo } from "@/components/chapters/SchoolLogo";
import { chapters } from "@/lib/site";
import Link from "next/link";

/**
 * Founding chapters — clean roster with real school logos.
 */
export function ChaptersSection() {
  return (
    <section className="bg-[color:var(--color-ivory)] border-t border-[color:var(--color-line)] py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>Founding chapters</SectionLabel>
            <h2 className="mt-8 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-navy)]">
              Where Amplify starts.
            </h2>
          </div>

          <p className="lg:col-span-6 lg:col-start-7 self-end text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
            Four Fort Bend ISD high schools open Amplify chapters in Fall 2026. Each is run entirely by its own students.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {chapters.map((c, i) => (
            <li key={c.slug} className="bg-white p-8 border border-[color:var(--color-line)] hover:border-[color:var(--color-coral)] transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-[0.72rem] font-semibold tracking-[0.14em] text-[color:var(--color-navy-3)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <SchoolLogo chapter={c} size={72} />
              </div>
              <h3 className="mt-6 text-lg font-bold leading-[1.2] text-[color:var(--color-navy)]">
                {c.school}
              </h3>
              <p className="mt-2 text-sm text-[color:var(--color-navy-3)]">
                {c.city}, {c.state}
              </p>
              <p className="mt-4 pt-4 border-t border-[color:var(--color-line)] text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-coral)]">
                Opens Fall 2026
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="text-xl font-semibold text-[color:var(--color-navy)]">
            Not on this list? Your school could be next.
          </p>
          <Link
            href="/start-a-chapter"
            className="inline-flex items-center gap-2 text-base font-semibold underline decoration-[color:var(--color-coral)] decoration-[2px] underline-offset-[6px] hover:decoration-[3px]"
          >
            Start a chapter <span aria-hidden>→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
