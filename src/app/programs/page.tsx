import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { ProgramCalendar } from "@/components/home/ProgramCalendar";
import { pillars, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "The Amplify HQ chapter year. Monthly workshops in consumer psychology, marketing, and behavioral economics, plus speakers, a case competition, and a member showcase.",
};

export default function ProgramsPage() {
  return (
    <>
      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <SectionLabel>Programs</SectionLabel>
              <h1 className="mt-8 text-[length:var(--text-hero)] font-extrabold leading-[1.02] tracking-[-0.025em] text-[color:var(--color-navy)]">
                What a year in Amplify actually looks like.
              </h1>
            </div>
            <p className="lg:col-span-7 max-w-2xl text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
              Chapters meet once a month across two semesters. Every meeting is a workshop, a conversation, or a project. Never a lecture nobody asked for.
            </p>
          </div>

          <ol className="mt-20 space-y-0">
            {pillars.map((p, idx) => (
              <li
                key={p.index}
                className="grid grid-cols-1 gap-8 border-t border-[color:var(--color-line)] py-12 lg:grid-cols-12 lg:gap-10 lg:py-14"
              >
                <div className="lg:col-span-2">
                  <p className="text-6xl font-extrabold leading-none text-[color:var(--color-coral)]">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                </div>
                <div className="lg:col-span-4">
                  <p className="eyebrow">{p.title}</p>
                  <p className="mt-4 text-2xl font-bold leading-[1.2] text-[color:var(--color-navy)]">
                    {p.lede}
                  </p>
                </div>
                <p className="lg:col-span-5 lg:col-start-8 text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
                  {p.detail}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <ProgramCalendar />

      <section className="bg-[color:var(--color-navy)] py-24 text-white lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <SectionLabel tone="dark">Launching {site.launchTerm}</SectionLabel>
              <h2 className="mt-8 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-white">
                Run this at <span className="text-[color:var(--color-coral)]">your</span> school.
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-[1.65] text-white/75">
                Chapter Leads get the full program calendar, workshop materials, and support from the national team.
              </p>
            </div>
            <div className="lg:col-span-4 flex items-end">
              <Button href="/start-a-chapter#apply" variant="on-dark" size="lg">
                Start a chapter
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
