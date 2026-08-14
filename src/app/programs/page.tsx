import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProgramCalendar } from "@/components/home/ProgramCalendar";
import { pillars, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "The Amplify HQ chapter year — monthly workshops in consumer psychology, marketing, and behavioral economics, plus speakers, a case competition, and a member showcase.",
};

export default function ProgramsPage() {
  return (
    <>
      <section className="py-24 lg:py-36">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <SectionLabel>Programs</SectionLabel>
              <h1 className="mt-10 font-[family-name:var(--font-serif)] text-[length:var(--text-hero)] leading-[1] tracking-[-0.02em] text-[color:var(--color-ink)]">
                What a year in Amplify <em className="text-[color:var(--color-ink-2)]">actually</em> looks like.
              </h1>
            </div>
            <p className="lg:col-span-7 max-w-xl text-lg leading-[1.65] text-[color:var(--color-ink-2)]">
              Chapters meet once a month across two semesters. Every meeting is a workshop, a conversation, or a project — never a lecture nobody asked for.
            </p>
          </div>

          <ol className="mt-24 space-y-0">
            {pillars.map((p, idx) => (
              <li
                key={p.index}
                className="grid grid-cols-1 gap-8 border-t border-[color:var(--color-line)] py-12 lg:grid-cols-12 lg:gap-10 lg:py-16"
              >
                <div className="lg:col-span-2">
                  <p className="font-[family-name:var(--font-serif)] italic text-6xl leading-none text-[color:var(--color-signal)]">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                </div>
                <div className="lg:col-span-4">
                  <p className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--color-stone)]">
                    {p.title}
                  </p>
                  <p className="mt-4 font-[family-name:var(--font-serif)] text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.15] text-[color:var(--color-ink)]">
                    {p.lede}
                  </p>
                </div>
                <p className="lg:col-span-5 lg:col-start-8 text-lg leading-[1.65] text-[color:var(--color-ink-2)]">
                  {p.detail}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <ProgramCalendar />

      <section className="bg-[color:var(--color-ink)] py-24 text-[color:var(--color-bone)] lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <SectionLabel tone="dark">Launching {site.launchTerm}</SectionLabel>
              <h2 className="mt-10 font-[family-name:var(--font-serif)] text-[length:var(--text-display)] leading-[1.02] tracking-[-0.01em] text-[color:var(--color-bone)]">
                Run this at <em className="text-[color:var(--color-signal-tint)]">your</em> school.
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-[1.65] text-[color:var(--color-bone)]/75">
                Chapter Leads get the full program calendar, workshop materials, and support from the national team.
              </p>
            </div>
            <div className="lg:col-span-4 flex items-end">
              <Link
                href="/start-a-chapter"
                className="group inline-flex items-baseline gap-3 font-[family-name:var(--font-serif)] text-3xl italic text-[color:var(--color-bone)] underline decoration-[color:var(--color-signal)] decoration-[1.5px] underline-offset-[8px] hover:decoration-[2px]"
              >
                Start a chapter
                <span aria-hidden className="text-[color:var(--color-signal-tint)] transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
