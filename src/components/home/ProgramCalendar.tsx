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

/**
 * The program year — editorial timeline. Each entry is a row, not a
 * card. Semesters are titled sections with a bold rule underneath.
 */
export function ProgramCalendar() {
  return (
    <section className="bg-[color:var(--color-bone-2)] py-24 lg:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionLabel index="§ Cal">The chapter year</SectionLabel>
            <h2 className="mt-10 font-[family-name:var(--font-serif)] text-[length:var(--text-display)] leading-[1.02] tracking-[-0.01em] text-[color:var(--color-ink)]">
              Eight meetings.
              <br />
              <em className="text-[color:var(--color-ink-2)]">A working year.</em>
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 self-end text-lg leading-[1.65] text-[color:var(--color-ink-2)]">
            One meeting a month, across two semesters. The theme is set nationally; the speakers, businesses, and case material are chosen by each chapter to fit its own community.
          </p>
        </div>

        <div className="mt-20 space-y-20">
          {programCalendar.map((semester) => (
            <div key={semester.name}>
              <div className="flex items-baseline justify-between border-b border-[color:var(--color-ink)] pb-4">
                <h3 className="font-[family-name:var(--font-serif)] text-4xl leading-none text-[color:var(--color-ink)]">
                  {semester.name}
                </h3>
                <p className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--color-stone)]">
                  {semester.entries.length} meetings
                </p>
              </div>

              <ol>
                {semester.entries.map((entry, i) => (
                  <li
                    key={entry.title}
                    className="grid grid-cols-12 items-baseline gap-4 border-b border-[color:var(--color-line-2)] py-8 lg:py-10"
                  >
                    <span className="col-span-2 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.2em] text-[color:var(--color-stone)]">
                      {entry.months}
                    </span>

                    <div className="col-span-7">
                      <h4 className="font-[family-name:var(--font-serif)] text-[clamp(1.35rem,2vw,1.85rem)] leading-[1.15] text-[color:var(--color-ink)]">
                        {entry.title}
                      </h4>
                      <p className="mt-3 text-base leading-[1.6] text-[color:var(--color-ink-2)]">
                        {entry.detail}
                      </p>
                    </div>

                    <span className="col-span-3 text-right font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.2em] text-[color:var(--color-signal)]">
                      {kindLabel[entry.kind]}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-t border-[color:var(--color-ink)] pt-8">
          <p className="max-w-xl font-[family-name:var(--font-serif)] text-xl italic text-[color:var(--color-ink-2)]">
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
