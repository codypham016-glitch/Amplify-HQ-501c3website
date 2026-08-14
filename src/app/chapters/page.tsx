import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ChapterGrid } from "@/components/chapters/ChapterGrid";
import { chapters, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chapters",
  description:
    "Amplify HQ's founding chapters — four Fort Bend ISD high schools launching Fall 2026.",
};

export default function ChaptersPage() {
  return (
    <>
      <section className="py-24 lg:py-36">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <SectionLabel>Chapters</SectionLabel>
              <h1 className="mt-10 font-[family-name:var(--font-serif)] text-[length:var(--text-hero)] leading-[1] tracking-[-0.02em] text-[color:var(--color-ink)]">
                Four schools.
                <br />
                <em className="text-[color:var(--color-ink-2)]">One network.</em>
              </h1>
            </div>
            <p className="lg:col-span-8 max-w-xl text-lg leading-[1.65] text-[color:var(--color-ink-2)]">
              Amplify HQ opens in {site.launchTerm} across four Fort Bend ISD high schools. Each chapter is run by its own students — officers drawn from the campus, calendar set by the members, speakers chosen by the leads.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-[color:var(--color-line)] pb-24 pt-16 lg:pb-36">
        <Container>
          <ChapterGrid chapters={chapters} />
        </Container>
      </section>

      <section className="bg-[color:var(--color-ink)] py-24 text-[color:var(--color-bone)] lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <SectionLabel tone="dark">Expanding</SectionLabel>
              <h2 className="mt-10 font-[family-name:var(--font-serif)] text-[length:var(--text-display)] leading-[1.02] tracking-[-0.01em] text-[color:var(--color-bone)]">
                Your school could be <em className="text-[color:var(--color-signal-tint)]">next</em>.
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-[1.65] text-[color:var(--color-bone)]/75">
                Chapter Leads are students who want to build something real on their own campus. You don&apos;t need prior business experience — you bring the school, we bring the program.
              </p>
            </div>
            <div className="lg:col-span-4 flex items-end">
              <Link
                href="/start-a-chapter"
                className="group inline-flex items-baseline gap-3 font-[family-name:var(--font-serif)] text-3xl italic text-[color:var(--color-bone)] underline decoration-[color:var(--color-signal)] decoration-[1.5px] underline-offset-[8px] hover:decoration-[2px]"
              >
                Apply
                <span aria-hidden className="text-[color:var(--color-signal-tint)] transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
