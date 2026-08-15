import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

/**
 * Hero. Clean typography-driven layout, no mark on the right.
 * Metrics strip below.
 */
export function Hero() {
  return (
    <section className="bg-[color:var(--color-ivory)]">
      <Container>
        <div className="pt-20 pb-20 lg:pt-28 lg:pb-24 max-w-4xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--color-coral)]">
            Business <span className="text-[color:var(--color-navy-3)]">×</span> Psychology
          </p>

          <h1 className="mt-8 text-[length:var(--text-hero)] font-extrabold leading-[1.02] tracking-[-0.025em] text-[color:var(--color-navy)]">
            What makes people choose?
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-[1.6] text-[color:var(--color-navy-2)]">
            Amplify HQ gives high school students a place to explore business, psychology, and human behavior alongside the people actually doing the work.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/about" size="lg">Explore Amplify</Button>
            <Button href="/start-a-chapter#apply" size="lg" variant="secondary">
              Start a Chapter
            </Button>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-6 border-t border-[color:var(--color-line)] py-8 sm:grid-cols-4 lg:py-10">
          <div>
            <dt className="eyebrow">Founding</dt>
            <dd className="mt-2 text-xl font-bold text-[color:var(--color-navy)]">4 chapters</dd>
          </div>
          <div>
            <dt className="eyebrow">Location</dt>
            <dd className="mt-2 text-xl font-bold text-[color:var(--color-navy)]">Fort Bend, TX</dd>
          </div>
          <div>
            <dt className="eyebrow">Launch</dt>
            <dd className="mt-2 text-xl font-bold text-[color:var(--color-navy)]">{site.launchTerm}</dd>
          </div>
          <div>
            <dt className="eyebrow">Model</dt>
            <dd className="mt-2 text-xl font-bold text-[color:var(--color-navy)]">Student-led</dd>
          </div>
        </dl>
      </Container>
    </section>
  );
}
