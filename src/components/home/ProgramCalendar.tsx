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
    <section className="bg-[color:var(--color-gray-light)] py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <SectionLabel index="03">The chapter year</SectionLabel>
            <h2 className="mt-6 font-[family-name:var(--font-display)] font-bold uppercase text-[length:var(--text-display)] leading-[0.95] tracking-[-0.03em] text-[color:var(--color-charcoal)]">
              Eight months.
              <br />
              <span className="text-[color:var(--color-gray-muted)]">One meeting a month.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 self-end text-base leading-relaxed text-[color:var(--color-gray-muted)] sm:text-lg">
            Every chapter follows the same arc, and each one adapts the focus to
            the speakers, businesses, and partners available in its own community.
          </p>
        </div>

        <div className="mt-16 space-y-14">
          {programCalendar.map((semester) => (
            <div key={semester.name}>
              <div className="flex items-baseline gap-4">
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.02em] text-[color:var(--color-charcoal)]">
                  {semester.name}
                </h3>
                <span className="h-0.5 flex-1 bg-[color:var(--color-charcoal)]" aria-hidden />
              </div>

              <ol className="mt-8 grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-4">
                {semester.entries.map((entry, i) => (
                  <li
                    key={entry.title}
                    className={`flex flex-col gap-4 border-t-2 border-[color:var(--color-gray-2)] py-6 lg:py-8 ${
                      i > 0 ? "md:pl-6 lg:pl-8 md:border-l-2" : ""
                    } ${i < semester.entries.length - 1 ? "md:pr-6 lg:pr-8" : ""}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--color-charcoal)]">
                        {entry.months}
                      </span>
                      <span className="font-[family-name:var(--font-mono)] text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[color:var(--color-teal)]">
                        {kindLabel[entry.kind]}
                      </span>
                    </div>
                    <h4 className="font-[family-name:var(--font-display)] text-lg font-bold leading-tight tracking-[-0.015em] text-[color:var(--color-charcoal)]">
                      {entry.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-[color:var(--color-gray-muted)]">
                      {entry.detail}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t-2 border-[color:var(--color-charcoal)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm text-[color:var(--color-gray-muted)]">
            Chapters set their own dates within each month and choose speakers and
            partners that fit their school and community.
          </p>
          <Button href="/programs" variant="secondary" trailing="→">
            See full programs
          </Button>
        </div>
      </Container>
    </section>
  );
}
