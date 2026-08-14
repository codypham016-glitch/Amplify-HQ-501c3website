import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ChapterGrid } from "@/components/chapters/ChapterGrid";
import { chapters, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chapters",
  description:
    "Amplify HQ founding chapters across Fort Bend ISD — Dulles, Austin, Clements, and Elkins high schools.",
};

export default function ChaptersPage() {
  return (
    <>
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel>Chapters</SectionLabel>
            <h1 className="mt-6 font-[family-name:var(--font-display)] font-bold uppercase text-[length:var(--text-display)] leading-[0.95] tracking-[-0.03em] text-[color:var(--color-charcoal)]">
              Four schools.
              <br />
              <span className="text-[color:var(--color-gray-muted)]">One network.</span>
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-[color:var(--color-gray-muted)]">
              Amplify HQ launches in {site.launchTerm} across four Fort Bend ISD
              high schools. Every chapter is run by its own students, meets once a
              month, and follows the national program calendar while choosing the
              speakers and partners that fit its community.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-20 lg:pb-28">
        <Container>
          <ChapterGrid chapters={chapters} />
        </Container>
      </section>

      <section className="bg-[color:var(--color-charcoal)] py-20 text-white lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow-on-dark">Expanding</p>
              <h2 className="mt-6 font-[family-name:var(--font-display)] font-bold uppercase text-[length:var(--text-section)] leading-[1] tracking-[-0.025em]">
                Your school could be next.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
                We&apos;re recruiting Chapter Leads now. If you&apos;re a student who
                wants to build this at your own school, the application is open —
                you don&apos;t need prior business experience, just the willingness
                to organize something real.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 flex items-end">
              <Button href="/start-a-chapter" variant="on-dark" size="lg" trailing="→">
                Start a chapter
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
