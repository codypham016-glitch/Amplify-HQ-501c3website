import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProgramCalendar } from "@/components/home/ProgramCalendar";
import { whatWeDo, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "The Amplify HQ chapter year — monthly workshops in consumer psychology, marketing, and behavioral economics, plus speakers, a case competition, and a member showcase.",
};

export default function ProgramsPage() {
  return (
    <>
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel>Programs</SectionLabel>
            <h1 className="mt-6 font-[family-name:var(--font-display)] font-bold uppercase text-[length:var(--text-display)] leading-[0.95] tracking-[-0.03em] text-[color:var(--color-charcoal)]">
              What a year in
              <br />
              <span className="text-[color:var(--color-gray-muted)]">Amplify looks like.</span>
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-[color:var(--color-gray-muted)]">
              Chapters meet once a month across two semesters. The national
              calendar sets the theme; each chapter chooses the speakers,
              partners, and case material that fit its own community.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-0 border-t-2 border-[color:var(--color-charcoal)] lg:grid-cols-3">
            {whatWeDo.map((w, i) => (
              <div
                key={w.index}
                className={`flex flex-col gap-4 py-8 lg:py-10 ${
                  i > 0
                    ? "border-t-2 border-[color:var(--color-gray-2)] lg:border-t-0 lg:border-l-2 lg:pl-10"
                    : ""
                } ${i < whatWeDo.length - 1 ? "lg:pr-10" : ""}`}
              >
                <span className="inline-flex w-fit bg-[color:var(--color-teal)] px-3 py-1.5 font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--color-charcoal)]">
                  {w.index}
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-none tracking-[-0.03em] text-[color:var(--color-charcoal)]">
                  {w.title}
                </h2>
                <p className="font-semibold text-[color:var(--color-charcoal)]">{w.lede}</p>
                <p className="text-sm leading-relaxed text-[color:var(--color-gray-muted)]">
                  {w.detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ProgramCalendar />

      <section className="bg-[color:var(--color-charcoal)] py-20 text-white lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow-on-dark">Launching {site.launchTerm}</p>
              <h2 className="mt-6 font-[family-name:var(--font-display)] font-bold uppercase text-[length:var(--text-section)] leading-[1] tracking-[-0.025em]">
                Run this at your school.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
                Chapter Leads get the full program calendar, workshop materials,
                and support from the national team. You bring your campus.
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
