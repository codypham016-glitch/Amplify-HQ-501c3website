import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { programCalendar } from "@/lib/site";

const kindLabel: Record<string, string> = {
  meeting: "Meeting",
  workshop: "Workshop",
  speaker: "Speaker",
  competition: "Competition",
  showcase: "Showcase",
};

export function ProgramCalendar() {
  return (
    <section className="bg-[color:var(--color-ivory-2)] py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionLabel>The chapter year</SectionLabel>
            <h2 className="mt-8 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-navy)]">
              Eight meetings. A working year.
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 self-end text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
            One meeting a month, across two semesters. The theme is set nationally; speakers and case material are chosen by each chapter.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {programCalendar.map((semester) => (
            <div key={semester.name}>
              <div className="flex items-baseline justify-between border-b border-[color:var(--color-navy)] pb-4">
                <h3 className="text-3xl font-bold text-[color:var(--color-navy)]">
                  {semester.name}
                </h3>
                <p className="eyebrow">{semester.entries.length} meetings</p>
              </div>

              <ol>
                {semester.entries.map((entry) => (
                  <li
                    key={entry.title}
                    className="grid grid-cols-12 items-baseline gap-4 border-b border-[color:var(--color-line-2)] py-8 lg:py-10"
                  >
                    <span className="col-span-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--color-navy-3)]">
                      {entry.months}
                    </span>

                    <div className="col-span-7">
                      <h4 className="text-[clamp(1.2rem,1.8vw,1.6rem)] font-bold leading-[1.2] text-[color:var(--color-navy)]">
                        {entry.title}
                      </h4>
                      <p className="mt-3 text-base leading-[1.6] text-[color:var(--color-navy-2)]">
                        {entry.detail}
                      </p>
                    </div>

                    <span className="col-span-3 text-right text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-coral)]">
                      {kindLabel[entry.kind]}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-t border-[color:var(--color-navy)] pt-8">
          <p className="max-w-xl text-lg font-semibold text-[color:var(--color-navy-2)]">
            Chapters set their own dates within each month.
          </p>
          <Button href="/programs" variant="link">
            See full programs →
          </Button>
        </div>
      </Container>
    </section>
  );
}
