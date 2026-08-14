import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ChapterGrid } from "@/components/chapters/ChapterGrid";
import { chapters } from "@/lib/site";

export function ChaptersSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3">
              <span className="h-1 w-12 bg-[color:var(--color-teal)]" aria-hidden />
              <span className="eyebrow">04 · Chapters</span>
            </div>
            <h2 className="mt-6 font-[family-name:var(--font-display)] font-bold uppercase text-[length:var(--text-display)] leading-[0.95] tracking-[-0.03em] text-[color:var(--color-charcoal)]">
              Four founding
              <br />
              <span className="text-[color:var(--color-gray-muted)]">chapters.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 self-end text-base leading-relaxed text-[color:var(--color-gray-muted)] sm:text-lg">
            Amplify HQ is launching across four Fort Bend ISD high schools in{" "}
            {"Fall 2026"}. Each chapter is student-led, with officers drawn from
            its own campus.
          </p>
        </div>

        <div className="mt-14">
          <ChapterGrid chapters={chapters} />
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t-2 border-[color:var(--color-charcoal)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-[family-name:var(--font-display)] text-xl font-bold tracking-[-0.02em] text-[color:var(--color-charcoal)]">
            Not on this list? Bring Amplify HQ to your school.
          </p>
          <Button href="/start-a-chapter" trailing="→">
            Start a chapter
          </Button>
        </div>
      </Container>
    </section>
  );
}
